// =============================================================================
// MSR 2026 — PANNELLO IMPOSTAZIONI
// =============================================================================

const DEFAULT_FONT = 14;   // px — font di default
const SETTINGS_KEY = 'msr_settings_v1';
const ORIG_CPS = JSON.parse(JSON.stringify(CPS)); // snapshot orari originali

let currentFontSize = DEFAULT_FONT;
let speedOverrides = {}; // { segmentIndex: kmh }
let stopOverrides = {};  // { checkpointNumber: minutes }

// ── Persistenza ──────────────────────────────────────────────────────────────
function loadSettings() {
  try {
    const s = JSON.parse(localStorage.getItem(SETTINGS_KEY));
    if (s) {
      if (s.fontSize)       currentFontSize = s.fontSize;
      if (s.speedOverrides) speedOverrides  = s.speedOverrides;
      if (s.stopOverrides)  stopOverrides   = s.stopOverrides;
      if (s.lang)           currentLang     = s.lang;
    }
  } catch(e) {}
}

function saveSettings() {
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify({
      fontSize: currentFontSize,
      speedOverrides,
      stopOverrides,
      lang: currentLang
    }));
  } catch(e) {}
}

// ── Font ─────────────────────────────────────────────────────────────────────
function applyFontSize(px) {
  document.documentElement.style.setProperty('--fs', px + 'px');
  const el = document.getElementById('fontSizeDisplay');
  if (el) el.textContent = px + 'px';
}

function changeFontSize(delta) {
  currentFontSize = Math.min(22, Math.max(10, currentFontSize + delta));
  applyFontSize(currentFontSize);
  saveSettings();
}

// ── Apertura / chiusura pannello ─────────────────────────────────────────────
function openSettings() {
  buildSpeedGrid();
  buildStopGrid();
  selectLanguageInputs();
  document.getElementById('settingsOverlay').classList.add('open');
  document.getElementById('btnSettings').classList.add('active');
}

function closeSettings() {
  document.getElementById('settingsOverlay').classList.remove('open');
  document.getElementById('btnSettings').classList.remove('active');
}

function handleOverlayClick(e) {
  if (e.target === document.getElementById('settingsOverlay')) closeSettings();
}

// ── Griglia velocità ─────────────────────────────────────────────────────────
function buildSpeedGrid() {
  const grid = document.getElementById('speedGrid');
  let html = '';
  for (let i = 0; i < CPS.length - 1; i++) {
    const from = CPS[i];
    const to   = CPS[i + 1];
    const distKm = to.kms;
    const defaultSpeed = DEFAULT_SPEEDS[i] || computeOriginalSpeed(i);
    const curSpeed = speedOverrides[i] !== undefined ? speedOverrides[i] : defaultSpeed;
    const eta = distKm > 0 && curSpeed > 0 ? formatDuration(distKm / curSpeed * 3600) : '--';
    html += `<div class="speed-row">
      <div class="speed-row-info">
        <div class="speed-row-name">CP${from.n} → CP${to.n}</div>
        <div class="speed-row-meta">${distKm} km · ETA: <span id="eta${i}">${eta}</span></div>
      </div>
      <div class="speed-input-wrap">
        <input class="speed-input" type="number" id="spd${i}" min="5" max="50" step="0.5"
          value="${curSpeed.toFixed(1)}" oninput="onSpeedInput(${i})">
        <span class="speed-unit">km/h</span>
      </div>
    </div>`;
  }
  grid.innerHTML = html;
}

function buildStopGrid() {
  const grid = document.getElementById('stopGrid');
  if (!grid) return;
  let html = '';
  for (let i = 1; i < CPS.length - 1; i++) {
    const cp = CPS[i];
    const currentStop = stopOverrides[cp.n] !== undefined ? stopOverrides[cp.n] : (cp.stopMinutes || 0);
    html += `<div class="speed-row">
      <div class="speed-row-info">
        <div class="speed-row-name">CP${cp.n} — ${cp.name}</div>
        <div class="speed-row-meta">${currentStop} min</div>
      </div>
      <div class="speed-input-wrap">
        <input class="speed-input" type="number" id="stop${cp.n}" min="0" max="600" step="5"
          value="${currentStop}" oninput="onStopInput(${cp.n})">
        <span class="speed-unit">min</span>
      </div>
    </div>`;
  }
  grid.innerHTML = html;
}

function onStopInput(cpNumber) {
  const input = document.getElementById('stop' + cpNumber);
  const val = parseInt(input.value, 10);
  if (!isNaN(val) && val >= 0) {
    const cp = CPS.find(c => c.n === cpNumber);
    if (cp) {
      const original = cp.stopMinutes || 0;
      if (val === original) {
        delete stopOverrides[cpNumber];
      } else {
        stopOverrides[cpNumber] = val;
      }
      const meta = input.parentElement.previousElementSibling;
      if (meta) meta.textContent = `${val} min`;
    }
  }
}

function selectLanguageInputs() {
  const radios = document.querySelectorAll('input[name="lang"]');
  radios.forEach(r => r.checked = r.value === currentLang);
}

function onLanguageChange(lang) {
  if (!LANG_MAP || !LANG_MAP[lang]) return;
  currentLang = lang;
  saveSettings();
  selectLanguageInputs();
  if (typeof applyLanguage === 'function') applyLanguage();
}

function computeOriginalSpeed(segIdx) {
  const from = ORIG_CPS[segIdx];
  const to   = ORIG_CPS[segIdx + 1];
  if (!from.dep || !to.arr) return DEFAULT_SPEEDS[segIdx] || 15.0;
  const travelH = (new Date(to.arr) - new Date(from.dep)) / 3600000;
  if (travelH <= 0) return DEFAULT_SPEEDS[segIdx] || 15.0;
  return Math.round((to.kms / travelH) * 10) / 10;
}

function onSpeedInput(i) {
  const val = parseFloat(document.getElementById('spd' + i).value);
  if (!isNaN(val) && val > 0) {
    speedOverrides[i] = val;
    const distKm = CPS[i + 1].kms;
    const eta = distKm > 0 ? formatDuration(distKm / val * 3600) : '--';
    const etaEl = document.getElementById('eta' + i);
    if (etaEl) etaEl.textContent = eta;
  }
}

function formatDuration(seconds) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  return h + 'h' + (m > 0 ? ' ' + m + 'm' : '');
}

// ── Ricalcolo orari ──────────────────────────────────────────────────────────
function recalcTimes() {
  // Start da Umeå fisso alle 23:30 per il primo checkpoint
  CPS[0].dep = START_DEP;
  CPS[0].arr = ORIG_CPS[0].arr;
  for (let i = 0; i < CPS.length - 1; i++) {
    const from   = CPS[i];
    const to     = CPS[i + 1];
    const distKm = ORIG_CPS[i + 1].kms;
    const speed  = speedOverrides[i] !== undefined ? speedOverrides[i] : (DEFAULT_SPEEDS[i] || computeOriginalSpeed(i));
    if (!from.dep || distKm <= 0 || speed <= 0) {
      to.arr = ORIG_CPS[i + 1].arr;
      to.dep = ORIG_CPS[i + 1].dep;
      continue;
    }
    const newArr = new Date(new Date(from.dep).getTime() + (distKm / speed) * 3600000);
    to.arr = newArr.toISOString().slice(0, 19);
    if (i + 1 === CPS.length - 1) {
      to.dep = null;
    } else {
      const stopMinutes = stopOverrides[to.n] !== undefined ? stopOverrides[to.n] : (to.stopMinutes || 0);
      to.dep = new Date(newArr.getTime() + stopMinutes * 60000).toISOString().slice(0, 19);
    }
  }
}

function applySettings() {
  recalcTimes();
  saveSettings();
  buildCards();
  CPS.forEach(cp => {
    const card = document.getElementById('card' + cp.n);
    if (card && weatherData[cp.n]) {
      if (card.classList.contains('open')) {
        renderWeather(cp.n, 'ecmwf');
        renderTimeline(cp.n, 'ecmwf');
      }
      card.classList.remove('loading');
      const hasData = !weatherData[cp.n].ecmwf.error || !weatherData[cp.n].forecast.error || !weatherData[cp.n].yr.error;
      card.classList.add(hasData ? 'loaded' : 'error');
    }
  });
  renderCharts();
  generateAlerts();
  closeSettings();
}

function resetSettings() {
  currentFontSize = DEFAULT_FONT;
  speedOverrides  = {};
  stopOverrides   = {};
  ORIG_CPS.forEach((orig, idx) => {
    CPS[idx].arr = orig.arr;
    CPS[idx].dep = orig.dep;
    CPS[idx].stopMinutes = orig.stopMinutes || 0;
  });
  applyFontSize(currentFontSize);
  recalcTimes();
  if (typeof applyLanguage === 'function') applyLanguage();
  saveSettings();
  buildCards();
  CPS.forEach(cp => {
    const card = document.getElementById('card' + cp.n);
    if (card && weatherData[cp.n]) {
      card.classList.remove('loading');
      const hasData = !weatherData[cp.n].ecmwf.error || !weatherData[cp.n].forecast.error || !weatherData[cp.n].yr.error;
      card.classList.add(hasData ? 'loaded' : 'error');
    }
  });
  renderCharts();
  generateAlerts();
  buildSpeedGrid();
  buildStopGrid();
}

// ── Init ─────────────────────────────────────────────────────────────────────
loadSettings();
applyFontSize(currentFontSize);
recalcTimes();
if (typeof applyLanguage === 'function') applyLanguage();
