// =============================================================================
// MSR 2026 — LOGICA PRINCIPALE
// =============================================================================

// Costanti meteo
const WMO_ICONS={0:'☀️',1:'🌤️',2:'⛅',3:'☁️',45:'🌫️',48:'🌫️',51:'🌦️',53:'🌦️',55:'🌦️',56:'🌧️❄️',57:'🌧️❄️',61:'🌧️',63:'🌧️',65:'🌧️🌧️',66:'🌧️❄️',67:'🌧️❄️',71:'🌨️',73:'🌨️',75:'🌨️🌨️',77:'🌨️',80:'🌦️',81:'🌧️',82:'⛈️',85:'🌨️',86:'🌨️',95:'⛈️',96:'⛈️',99:'⛈️'};
const WMO_DESC={0:'Sereno',1:'Prev. sereno',2:'Parz. nuvoloso',3:'Coperto',45:'Nebbia',48:'Nebbia gelata',51:'Pioviggine legg.',53:'Pioviggine',55:'Pioviggine intensa',56:'Piovig. gelata',57:'Piovig. gelata int.',61:'Pioggia legg.',63:'Pioggia moderata',65:'Pioggia intensa',66:'Pioggia gelata',67:'Pioggia gelata int.',71:'Neve legg.',73:'Neve moderata',75:'Neve intensa',77:'Granelli neve',80:'Rovesci legg.',81:'Rovesci',82:'Rovesci violenti',85:'Neve legg.',86:'Neve intensa',95:'Temporale',96:'Temporale grandine',99:'Temporale grand.'};
const APP_BUILD_NUMBER = '1';

const LANG_MAP = {
  it: {
    title: '🌅 MSR 2026 — Meteo Gara · Midnight Sun Randonnée',
    headerSub: 'Midnight Sun Randonnée · Umeå ↔ Arctic Circle · 1215 km',
    btnSettings: '⚙️ Impostazioni',
    btnRefresh: '🔄 Aggiorna',
    alertsTitle: '⚠️ Allerta Meteo',
    chartsTitle: '📊 Grafici Percorso',
    chartTempTitle: '🌡️ Temperatura lungo il percorso (°C)',
    chartPrecWindTitle: '🌧️ Precipitazioni (mm/h) e 💨 Vento (km/h)',
    fontSectionTitle: '🔠 Dimensione testo',
    fontLabel: 'Carattere',
    speedSectionTitle: '🚴 Velocità media per tappa (km/h)',
    stopSectionTitle: '⏱️ Tempi di sosta checkpoint',
    languageSectionTitle: '🌍 Lingua',
    applyBtn: '✅ Applica e ricalcola orari',
    resetBtn: '↩ Ripristina valori originali',
    buildLabel: 'Build',
    mapTitle: '🗺️ Mini mappa checkpoint',
    loadingText: 'Caricamento in corso...',
    cachedInfo: '✅ Dati dalla cache —',
    updatedInfo: '✅ Aggiornato: ',
    cacheText: '✅ Dati dalla cache —',
    refreshText: '🔄 Aggiornamento in corso...',
    analysisText: 'Analisi in corso...',
    dataFor: '📍 Dati per:',
    arrivalLabel: '🏁 Arrivo:',
    departureLabel: '🚀 Partenza:',
    noData: '⚠️ Nessun dato per questo orario',
    perceived: '🌡️ Percepita',
    precipitation: '💧 Precipitazioni',
    wind: '💨 Vento',
    cloud: '☁️ Copertura',
    humidity: '💦 Umidità',
    stopLabelShort: 'sosta',
    startMeta: 'PARTENZA',
    finishMeta: 'ARRIVO',
    mapLegend: 'Norvegia: yr.no • Meteoblue'
  },
  en: {
    title: '🌅 MSR 2026 — Race Weather · Midnight Sun Randonnée',
    headerSub: 'Midnight Sun Randonnée · Umeå ↔ Arctic Circle · 1215 km',
    btnSettings: '⚙️ Settings',
    btnRefresh: '🔄 Refresh',
    alertsTitle: '⚠️ Weather Alerts',
    chartsTitle: '📊 Route Charts',
    chartTempTitle: '🌡️ Route Temperature (°C)',
    chartPrecWindTitle: '🌧️ Precipitation (mm/h) and 💨 Wind (km/h)',
    fontSectionTitle: '🔠 Text Size',
    fontLabel: 'Font',
    speedSectionTitle: '🚴 Average speed per stage (km/h)',
    stopSectionTitle: '⏱️ Checkpoint stop time',
    languageSectionTitle: '🌍 Language',
    applyBtn: '✅ Apply and recalc times',
    resetBtn: '↩ Reset defaults',
    buildLabel: 'Build',
    mapTitle: '🗺️ Checkpoint mini map',
    loadingText: 'Loading...',
    cachedInfo: '✅ Cache data —',
    updatedInfo: '✅ Updated: ',
    cacheText: '✅ Cache data —',
    refreshText: '🔄 Refreshing...',
    analysisText: 'Analysis in progress...',
    dataFor: '📍 Data for:',
    arrivalLabel: '🏁 Arrival:',
    departureLabel: '🚀 Departure:',
    noData: '⚠️ No data for this time',
    perceived: '🌡️ Feels like',
    precipitation: '💧 Precipitation',
    wind: '💨 Wind',
    cloud: '☁️ Cloud cover',
    humidity: '💦 Humidity',
    stopLabelShort: 'stop',
    startMeta: 'START',
    finishMeta: 'FINISH',
    mapLegend: 'Norway: yr.no • Meteoblue'
  },
  de: {
    title: '🌅 MSR 2026 — Rennwetter · Midnight Sun Randonnée',
    headerSub: 'Midnight Sun Randonnée · Umeå ↔ Arctic Circle · 1215 km',
    btnSettings: '⚙️ Einstellungen',
    btnRefresh: '🔄 Aktualisieren',
    alertsTitle: '⚠️ Wetterwarnungen',
    chartsTitle: '📊 Streckendiagramme',
    chartTempTitle: '🌡️ Temperatur entlang der Strecke (°C)',
    chartPrecWindTitle: '🌧️ Niederschlag (mm/h) und 💨 Wind (km/h)',
    fontSectionTitle: '🔠 Textgröße',
    fontLabel: 'Schrift',
    speedSectionTitle: '🚴 Durchschnittsgeschwindigkeit je Etappe (km/h)',
    stopSectionTitle: '⏱️ Stoppzeiten an Checkpoints',
    languageSectionTitle: '🌍 Sprache',
    applyBtn: '✅ Anwenden und Zeiten neu berechnen',
    resetBtn: '↩ Auf Standard zurücksetzen',
    buildLabel: 'Build',
    mapTitle: '🗺️ Checkpoint Mini-Karte',
    loadingText: 'Lädt...',
    cachedInfo: '✅ Daten aus dem Cache —',
    updatedInfo: '✅ Aktualisiert: ',
    cacheText: '✅ Daten aus dem Cache —',
    refreshText: '🔄 Aktualisierung läuft...',
    analysisText: 'Analyse läuft...',
    dataFor: '📍 Daten für:',
    arrivalLabel: '🏁 Ankunft:',
    departureLabel: '🚀 Abfahrt:',
    noData: '⚠️ Keine Daten für diese Zeit',
    perceived: '🌡️ Gefühlt',
    precipitation: '💧 Niederschlag',
    wind: '💨 Wind',
    cloud: '☁️ Bewölkung',
    humidity: '💦 Luftfeuchtigkeit',
    stopLabelShort: 'Stopp',
    startMeta: 'START',
    finishMeta: 'ZIEL',
    mapLegend: 'Norwegen: yr.no • Meteoblue'
  },
  fr: {
    title: '🌅 MSR 2026 — Météo de course · Midnight Sun Randonnée',
    headerSub: 'Midnight Sun Randonnée · Umeå ↔ Arctic Circle · 1215 km',
    btnSettings: '⚙️ Paramètres',
    btnRefresh: '🔄 Actualiser',
    alertsTitle: '⚠️ Alertes météo',
    chartsTitle: '📊 Graphiques du parcours',
    chartTempTitle: '🌡️ Température sur le parcours (°C)',
    chartPrecWindTitle: '🌧️ Précipitations (mm/h) et 💨 Vent (km/h)',
    fontSectionTitle: '🔠 Taille du texte',
    fontLabel: 'Police',
    speedSectionTitle: '🚴 Vitesse moyenne par étape (km/h)',
    stopSectionTitle: '⏱️ Durée de pause aux checkpoints',
    languageSectionTitle: '🌍 Langue',
    applyBtn: '✅ Appliquer et recalculer',
    resetBtn: '↩ Rétablir les valeurs',
    buildLabel: 'Build',
    mapTitle: '🗺️ Mini carte des checkpoints',
    loadingText: 'Chargement...',
    cachedInfo: '✅ Données du cache —',
    updatedInfo: '✅ Mis à jour: ',
    cacheText: '✅ Données du cache —',
    refreshText: '🔄 Actualisation en cours...',
    analysisText: 'Analyse en cours...',
    dataFor: '📍 Données pour:',
    arrivalLabel: '🏁 Arrivée:',
    departureLabel: '🚀 Départ:',
    noData: '⚠️ Pas de données pour cet horaire',
    perceived: '🌡️ Ressenti',
    precipitation: '💧 Précipitations',
    wind: '💨 Vent',
    cloud: '☁️ Couverture nuageuse',
    humidity: '💦 Humidité',
    stopLabelShort: 'pause',
    startMeta: 'DÉPART',
    finishMeta: 'ARRIVÉE',
    mapLegend: 'Norvège: yr.no • Meteoblue'
  }
};
const LOCALE_MAP = {it:'it-IT',en:'en-US',de:'de-DE',fr:'fr-FR'};
let currentLang = 'it';
function t(key){return (LANG_MAP[currentLang] && LANG_MAP[currentLang][key]) || LANG_MAP.it[key] || key;}
function applyLanguage() {
  document.documentElement.lang = currentLang;
  document.title = t('title');
  document.getElementById('btnSettings').textContent = t('btnSettings');
  document.getElementById('btnSettings').setAttribute('aria-label', t('btnSettings'));
  const refreshButton = document.getElementById('btnRefresh');
  if (refreshButton) refreshButton.textContent = t('btnRefresh');
  const subtitle = document.getElementById('appSubtitle');
  if (subtitle) subtitle.textContent = t('headerSub');
  const miniMapTitle = document.getElementById('miniMapTitle');
  if (miniMapTitle) miniMapTitle.textContent = t('mapTitle');
  const settingsHeader = document.querySelector('#settingsOverlay .settings-header h2');
  if (settingsHeader) settingsHeader.textContent = t('btnSettings');
  const buildVersion = document.getElementById('settingsBuild');
  if (buildVersion) buildVersion.textContent = `${t('buildLabel')} ${APP_BUILD_NUMBER}`;
  document.querySelector('.section#alertsSection .section-head h2').textContent = t('alertsTitle');
  document.querySelector('.section#chartsSection .section-head h2').textContent = t('chartsTitle');
  document.getElementById('speedSectionTitle').textContent = t('speedSectionTitle');
  document.getElementById('stopSectionTitle').textContent = t('stopSectionTitle');
  document.getElementById('languageSectionTitle').textContent = t('languageSectionTitle');
  document.getElementById('applySettingsBtn').textContent = t('applyBtn');
  document.getElementById('resetSettingsBtn').textContent = t('resetBtn');
  const fontLabel = document.querySelector('.font-size-label');
  if (fontLabel) fontLabel.textContent = t('fontLabel');
  const updateInfo = document.getElementById('updateInfo');
  if (updateInfo && updateInfo.textContent.includes('✅')) {
    updateInfo.textContent = t('updatedInfo') + new Date().toLocaleTimeString(LOCALE_MAP[currentLang]);
  } else if (updateInfo) {
    updateInfo.textContent = t('loadingText');
  }
  buildCards();
}

function flag(cc){return cc==='SE'?'🇸🇪':'🇳🇴'}
function sourceOrder(cp){return['meteoblue','yr','ecmwf','forecast'];}
function sourceLabel(src){return{ecmwf:'ECMWF',forecast:'Forecast',yr:'yr.no',meteoblue:'Meteoblue'}[src]||src}
function tempColor(t){if(t<5)return'temp-blue';if(t<10)return'temp-cyan';if(t<15)return'temp-green';if(t<20)return'temp-yellow';if(t<25)return'temp-orange';return'temp-red'}
function tempHex(t){if(t<5)return'#60a5fa';if(t<10)return'#22d3ee';if(t<15)return'#4ade80';if(t<20)return'#facc15';if(t<25)return'#fb923c';return'#ef4444'}
function windArrow(deg){if(deg==null)return'';const a=['⬇️','↙️','⬅️','↖️','⬆️','↗️','➡️','↘️'];return a[Math.round(deg/45)%8]}
function fmtTime(iso){if(!iso)return'-';const d=new Date(iso);return d.toLocaleString(LOCALE_MAP[currentLang]||'it-IT',{weekday:'short',day:'2-digit',month:'short',hour:'2-digit',minute:'2-digit'})}
function fmtHour(iso){if(!iso)return'-';const d=new Date(iso);return('0'+d.getHours()).slice(-2)+':'+('0'+d.getMinutes()).slice(-2)}
function isNight(iso){if(!iso)return false;const h=new Date(iso).getHours();return h>=22||h<6}

let weatherData={};
let loadedCount=0;
let chartSrc='ecmwf';

function getCache(){try{const c=JSON.parse(localStorage.getItem(CACHE_KEY));if(c&&Date.now()-c.ts<CACHE_TTL)return c.data}catch(e){}return null}
function setCache(data){try{localStorage.setItem(CACHE_KEY,JSON.stringify({ts:Date.now(),data}))}catch(e){}}
function toggleSection(id){document.getElementById(id).classList.toggle('open')}

// ── Build cards ──────────────────────────────────────────────────────────────
function buildCards(){
  const container=document.getElementById('cardsContainer');
  container.innerHTML='';
  CPS.forEach(cp=>{
    const numClass=cp.n===1?'start':cp.n===CPS.length?'finish':'';
    const isNR=isNight(cp.arr)||isNight(cp.dep);
    const sources=sourceOrder(cp);
    const activeSrc=sources[0]||'ecmwf';
    const stopLabel=cp.stopMinutes?` · ${cp.stopMinutes} ${t('stopLabelShort')}`:'';
    container.innerHTML+=`
<div class="card" id="card${cp.n}" onclick="toggleCard(${cp.n},event)">
<div class="card-head">
<div class="cp-num ${numClass}">${cp.n}</div>
<div class="cp-info">
<div class="cp-name">${cp.name}</div>
<div class="cp-meta">${cp.km} km · +${cp.elev}m D+ · ${cp.kms>0?cp.kms+' km tappa':cp.n===1?t('startMeta'):t('finishMeta')}${stopLabel}</div>
<div class="cp-badges" id="badges${cp.n}">
${isNR?'<span class="badge badge-night">🌙 Notturno</span>':''}
</div>
</div>
<div class="cp-flag">${flag(cp.cc)}</div>
<div class="cp-expand">▼</div>
</div>
<div class="card-body" onclick="event.stopPropagation()">
<div class="times-row">
${cp.arr?`<div class="time-badge"><span class="lbl">${t('arrivalLabel')}</span> ${fmtTime(cp.arr)}</div>`:''}
${cp.dep?`<div class="time-badge"><span class="lbl">${t('departureLabel')}</span> ${fmtTime(cp.dep)}</div>`:''}
</div>
<div class="source-tabs" id="tabs${cp.n}">
${sources.map(src=>`<button class="src-tab ${src===activeSrc?'active':''}" data-src="${src}" onclick="switchSrc(${cp.n},'${src}',this)">${sourceLabel(src)}</button>`).join('')}
</div>
<div class="weather-display" id="wx${cp.n}"><div class="wx-loading"><div class="spinner"></div><br>${t('loadingText')}</div></div>
<div id="timeline${cp.n}" class="timeline"></div>
<div class="links-row">
<a href="https://www.yr.no/en/forecast/daily-table/${cp.lat},${cp.lon}" target="_blank" rel="noopener">🔗 yr.no</a>
<a href="https://www.meteoblue.com/en/weather/forecast/${cp.lat.toFixed(3)},${cp.lon.toFixed(3)}" target="_blank" rel="noopener">🔗 Meteoblue</a>
<a href="https://open-meteo.com/en/docs/ecmwf-api#latitude=${cp.lat}&longitude=${cp.lon}" target="_blank" rel="noopener">🔗 Open-Meteo</a>
</div>
</div>
</div>`;
  });
  drawMiniMap();
}

function drawMiniMap() {
  const canvas = document.getElementById('miniMap');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const rect = canvas.getBoundingClientRect();
  const dpr = window.devicePixelRatio || 1;
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  const W = rect.width;
  const H = rect.height;
  const pad = 18;
  const lats = CPS.map(cp => cp.lat);
  const lons = CPS.map(cp => cp.lon);
  const minLat = Math.min(...lats);
  const maxLat = Math.max(...lats);
  const minLon = Math.min(...lons);
  const maxLon = Math.max(...lons);
  const plotW = W - pad * 2;
  const plotH = H - pad * 2;
  const points = CPS.map(cp => {
    const x = pad + (cp.lon - minLon) / ((maxLon - minLon) || 1) * plotW;
    const y = pad + (1 - (cp.lat - minLat) / ((maxLat - minLat) || 1)) * plotH;
    return {x, y, cp};
  });
  ctx.clearRect(0, 0, W, H);
  const bg = ctx.createLinearGradient(0, 0, 0, H);
  bg.addColorStop(0, '#122238');
  bg.addColorStop(1, '#08101f');
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, W, H);
  ctx.strokeStyle = 'rgba(255,255,255,.08)';
  ctx.lineWidth = 1;
  ctx.strokeRect(pad - 4, pad - 4, plotW + 8, plotH + 8);
  ctx.strokeStyle = 'rgba(232,135,42,.65)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  points.forEach((p, idx) => {
    if (idx === 0) ctx.moveTo(p.x, p.y);
    else ctx.lineTo(p.x, p.y);
  });
  ctx.stroke();
  points.forEach(p => {
    ctx.beginPath();
    ctx.fillStyle = p.cp.n === 1 ? '#4ecca3' : p.cp.n === CPS.length ? '#f5c542' : '#e8872a';
    ctx.arc(p.x, p.y, 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = '10px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('CP' + p.cp.n, p.x, p.y - 10);
  });
  ctx.fillStyle = '#8899aa';
  ctx.font = '10px sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText(t('mapLegend'), pad, H - 8);
}

function toggleCard(n,e){
  if(e.target.closest('.card-body'))return;
  const card=document.getElementById('card'+n);
  card.classList.toggle('open');
  if(card.classList.contains('open')&&weatherData[n]){
    const cp=CPS[n-1];
    const activeBtn=document.querySelector('#tabs'+n+' .src-tab.active');
    let src=activeBtn?activeBtn.dataset.src:'ecmwf';
    src=findWorkingSource(n,cp,src);
    const allTabs=document.querySelectorAll('#tabs'+n+' .src-tab');
    allTabs.forEach(t=>t.classList.remove('active'));
    const actualBtn=Array.from(allTabs).find(t=>t.dataset.src===src);
    if(actualBtn)actualBtn.classList.add('active');
    renderWeather(n,src);
    renderTimeline(n,src);
  }
}

function switchSrc(n,src,btn){
  const cp=CPS[n-1];
  src=findWorkingSource(n,cp,src);
  const tabs=document.querySelectorAll('#tabs'+n+' .src-tab');
  tabs.forEach(t=>t.classList.remove('active'));
  const activeBtn=Array.from(tabs).find(t=>t.dataset.src===src);
  if(activeBtn)activeBtn.classList.add('active');
  else if(btn)btn.classList.add('active');
  renderWeather(n,src);
  renderTimeline(n,src);
}

function findClosest(times,target){
  if(!times||!times.length||!target)return -1;
  const tgt=new Date(target).getTime();
  let best=0,bestDiff=Infinity;
  for(let i=0;i<times.length;i++){
    const diff=Math.abs(new Date(times[i]).getTime()-tgt);
    if(diff<bestDiff){bestDiff=diff;best=i}
  }
  return best;
}

function findWorkingSource(n,cp,preferredSrc){
  const data=weatherData[n];
  if(!data)return preferredSrc;
  const sources=sourceOrder(cp);
  if(data[preferredSrc]&&!data[preferredSrc].error)return preferredSrc;
  for(const src of sources){
    if(data[src]&&!data[src].error)return src;
  }
  return preferredSrc;
}

// ── Render meteo ─────────────────────────────────────────────────────────────
function renderWeather(n,src){
  const el=document.getElementById('wx'+n);
  const cp=CPS[n-1];
  const data=weatherData[n];
  if(!data){el.innerHTML='<div class="wx-loading"><div class="spinner"></div><br>Caricamento...</div>';return}
  src=findWorkingSource(n,cp,src);
  const refTime=cp.arr||cp.dep;
  const srcData=data[src];
  if(!srcData||srcData.error){el.innerHTML=`<div class="wx-error">⚠️ ${srcData?srcData.error:'Non disponibile'}</div>`;return}
  const idx=findClosest(srcData.times,refTime);
  if(idx<0){el.innerHTML='<div class="wx-error">⚠️ Nessun dato per questo orario</div>';return}
  const t=srcData.temperature?srcData.temperature[idx]:null;
  const at=srcData.apparent_temp?srcData.apparent_temp[idx]:null;
  const prec=srcData.precipitation?srcData.precipitation[idx]:null;
  const wcode=srcData.weather_code?srcData.weather_code[idx]:null;
  const cloud=srcData.cloud_cover?srcData.cloud_cover[idx]:null;
  const ws=srcData.wind_speed?srcData.wind_speed[idx]:null;
  const wd=srcData.wind_dir?srcData.wind_dir[idx]:null;
  const wg=srcData.wind_gust?srcData.wind_gust[idx]:null;
  const rh=srcData.humidity?srcData.humidity[idx]:null;
  const icon=WMO_ICONS[wcode]||'❓';
  const desc=WMO_DESC[wcode]||'N/D';
  const tc=t!=null?tempColor(t):'';
  const matchTime=srcData.times[idx];
  el.innerHTML=`
<div style="font-size:0.7143em;color:var(--text2);margin-bottom:6px">📍 Dati per: ${fmtTime(matchTime)} (rif: ${fmtHour(refTime)})</div>
<div class="wx-main"><div class="wx-icon">${icon}</div><div><div class="wx-temp ${tc}">${t!=null?t.toFixed(1)+'°C':'N/D'}</div><div class="wx-desc">${desc}</div></div></div>
<div class="wx-grid">
<div class="wx-item"><span class="wlbl">🌡️ Percepita</span><span class="wval">${at!=null?at.toFixed(1)+'°C':'N/D'}</span></div>
<div class="wx-item"><span class="wlbl">💧 Precipitazioni</span><span class="wval">${prec!=null?prec.toFixed(1)+' mm/h':'N/D'}</span></div>
<div class="wx-item"><span class="wlbl">💨 Vento</span><span class="wval">${ws!=null?ws.toFixed(0)+' km/h':'N/D'} ${windArrow(wd)} ${wg!=null?'(raff.'+wg.toFixed(0)+')':''}</span></div>
<div class="wx-item"><span class="wlbl">☁️ Copertura</span><span class="wval">${cloud!=null?cloud.toFixed(0)+'%':'N/D'}</span></div>
${rh!=null?'<div class="wx-item"><span class="wlbl">💦 Umidità</span><span class="wval">'+rh.toFixed(0)+'%</span></div>':''}
</div>`;
}

function renderTimeline(n,src){
  const el=document.getElementById('timeline'+n);
  const cp=CPS[n-1];
  if(!cp.arr||!cp.dep){el.innerHTML='';return}
  const data=weatherData[n];
  if(!data){el.innerHTML='';return}
  src=findWorkingSource(n,cp,src);
  const srcData=data[src];
  if(!srcData||srcData.error){el.innerHTML='';return}
  const startH=new Date(cp.arr).getTime();
  const endH=new Date(cp.dep).getTime();
  if(endH<=startH){el.innerHTML='';return}
  let html='<div style="font-size:0.7143em;color:var(--text2);margin-bottom:4px">⏱️ Meteo durante la sosta:</div><div class="timeline-inner">';
  for(let ms=startH;ms<=endH;ms+=3600000){
    const isoH=new Date(ms).toISOString().slice(0,16);
    const idx=findClosest(srcData.times,isoH);
    if(idx<0)continue;
    const t=srcData.temperature?srcData.temperature[idx]:null;
    const wc=srcData.weather_code?srcData.weather_code[idx]:null;
    const icon=WMO_ICONS[wc]||'❓';
    const tc=t!=null?tempColor(t):'';
    html+=`<div class="tl-item"><div class="tl-h">${('0'+new Date(ms).getHours()).slice(-2)}:00</div><div class="tl-icon">${icon}</div><div class="tl-t ${tc}">${t!=null?t.toFixed(0)+'°':'?'}</div></div>`;
  }
  html+='</div>';
  el.innerHTML=html;
}

// ── Charts ───────────────────────────────────────────────────────────────────
function getChartData(src){
  const temps=[],apparent=[],prec=[],wind=[],labels=[];
  CPS.forEach(cp=>{
    const refTime=cp.arr||cp.dep;
    const d=weatherData[cp.n];
    labels.push('CP'+cp.n);
    if(!d||!d[src]||d[src].error||!refTime){temps.push(null);apparent.push(null);prec.push(null);wind.push(null);return}
    const s=d[src];
    const idx=findClosest(s.times,refTime);
    temps.push(s.temperature?s.temperature[idx]:null);
    apparent.push(s.apparent_temp?s.apparent_temp[idx]:null);
    prec.push(s.precipitation?s.precipitation[idx]:null);
    wind.push(s.wind_speed?s.wind_speed[idx]:null);
  });
  return{temps,apparent,prec,wind,labels};
}

function drawTempChart(cd){
  const canvas=document.getElementById('chartTemp');const ctx=canvas.getContext('2d');
  const dpr=window.devicePixelRatio||1;const rect=canvas.getBoundingClientRect();
  canvas.width=rect.width*dpr;canvas.height=rect.height*dpr;ctx.scale(dpr,dpr);
  const W=rect.width,H=rect.height;ctx.clearRect(0,0,W,H);
  const pad={l:36,r:12,t:12,b:30};const cw=W-pad.l-pad.r,ch=H-pad.t-pad.b;
  const vals=cd.temps.filter(v=>v!=null);const avals=cd.apparent.filter(v=>v!=null);const all=vals.concat(avals);
  if(!all.length){ctx.fillStyle='#8899aa';ctx.font='12px sans-serif';ctx.textAlign='center';ctx.fillText('Dati non disponibili',W/2,H/2);return}
  let mn=Math.floor(Math.min(...all))-2,mx=Math.ceil(Math.max(...all))+2;if(mx-mn<6){mn-=3;mx+=3}
  const n=cd.temps.length;const xStep=cw/(n-1);
  ctx.strokeStyle='rgba(255,255,255,.07)';ctx.lineWidth=1;
  for(let i=0;i<=5;i++){const y=pad.t+ch-ch*(i/5);ctx.beginPath();ctx.moveTo(pad.l,y);ctx.lineTo(pad.l+cw,y);ctx.stroke();const v=mn+(mx-mn)*(i/5);ctx.fillStyle='#8899aa';ctx.font='10px sans-serif';ctx.textAlign='right';ctx.fillText(v.toFixed(0)+'°',pad.l-4,y+3)}
  ctx.textAlign='center';ctx.fillStyle='#8899aa';ctx.font='9px sans-serif';
  for(let i=0;i<n;i++){ctx.fillText(cd.labels[i],pad.l+i*xStep,H-4)}
  ctx.setLineDash([4,4]);ctx.strokeStyle='rgba(255,255,255,.25)';ctx.lineWidth=1.5;ctx.beginPath();let started=false;
  for(let i=0;i<n;i++){if(cd.apparent[i]==null)continue;const x=pad.l+i*xStep;const y=pad.t+ch-(cd.apparent[i]-mn)/(mx-mn)*ch;if(!started){ctx.moveTo(x,y);started=true}else ctx.lineTo(x,y)}
  ctx.stroke();ctx.setLineDash([]);ctx.lineWidth=2.5;
  for(let i=0;i<n-1;i++){if(cd.temps[i]==null||cd.temps[i+1]==null)continue;const x1=pad.l+i*xStep,y1=pad.t+ch-(cd.temps[i]-mn)/(mx-mn)*ch;const x2=pad.l+(i+1)*xStep,y2=pad.t+ch-(cd.temps[i+1]-mn)/(mx-mn)*ch;ctx.strokeStyle=tempHex((cd.temps[i]+cd.temps[i+1])/2);ctx.beginPath();ctx.moveTo(x1,y1);ctx.lineTo(x2,y2);ctx.stroke()}
  ctx.beginPath();let firstX=null;
  for(let i=0;i<n;i++){if(cd.temps[i]==null)continue;const x=pad.l+i*xStep,y=pad.t+ch-(cd.temps[i]-mn)/(mx-mn)*ch;if(firstX==null){ctx.moveTo(x,y);firstX=x}else ctx.lineTo(x,y)}
  for(let i=n-1;i>=0;i--){if(cd.temps[i]!=null){ctx.lineTo(pad.l+i*xStep,pad.t+ch);break}}
  if(firstX!=null)ctx.lineTo(firstX,pad.t+ch);ctx.closePath();
  const grd=ctx.createLinearGradient(0,pad.t,0,pad.t+ch);grd.addColorStop(0,'rgba(232,135,42,.25)');grd.addColorStop(1,'rgba(232,135,42,.02)');ctx.fillStyle=grd;ctx.fill();
  for(let i=0;i<n;i++){if(cd.temps[i]==null)continue;const x=pad.l+i*xStep,y=pad.t+ch-(cd.temps[i]-mn)/(mx-mn)*ch;ctx.fillStyle=tempHex(cd.temps[i]);ctx.beginPath();ctx.arc(x,y,4,0,Math.PI*2);ctx.fill();ctx.fillStyle='#fff';ctx.font='bold 10px sans-serif';ctx.textAlign='center';ctx.fillText(cd.temps[i].toFixed(1)+'°',x,y-8)}
  ctx.font='9px sans-serif';ctx.fillStyle='#8899aa';ctx.textAlign='left';ctx.setLineDash([4,4]);ctx.strokeStyle='rgba(255,255,255,.25)';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(pad.l+4,pad.t+4);ctx.lineTo(pad.l+20,pad.t+4);ctx.stroke();ctx.setLineDash([]);ctx.fillText('Percepita',pad.l+24,pad.t+7);
}

function drawPrecWindChart(cd){
  const canvas=document.getElementById('chartPrecWind');const ctx=canvas.getContext('2d');
  const dpr=window.devicePixelRatio||1;const rect=canvas.getBoundingClientRect();
  canvas.width=rect.width*dpr;canvas.height=rect.height*dpr;ctx.scale(dpr,dpr);
  const W=rect.width,H=rect.height;ctx.clearRect(0,0,W,H);
  const pad={l:36,r:40,t:12,b:30};const cw=W-pad.l-pad.r,ch=H-pad.t-pad.b;
  const n=cd.prec.length;const pvals=cd.prec.filter(v=>v!=null);const wvals=cd.wind.filter(v=>v!=null);
  if(!pvals.length&&!wvals.length){ctx.fillStyle='#8899aa';ctx.font='12px sans-serif';ctx.textAlign='center';ctx.fillText('Dati non disponibili',W/2,H/2);return}
  let pMax=Math.max(1,...pvals.map(v=>v||0))*1.3;let wMax=Math.max(20,...wvals.map(v=>v||0))*1.2;
  const barW=Math.min(cw/n*0.6,24);const xStep=cw/(n-1||1);
  ctx.strokeStyle='rgba(255,255,255,.07)';ctx.lineWidth=1;
  for(let i=0;i<=4;i++){const y=pad.t+ch-ch*(i/4);ctx.beginPath();ctx.moveTo(pad.l,y);ctx.lineTo(pad.l+cw,y);ctx.stroke();ctx.fillStyle='#60a5fa';ctx.font='10px sans-serif';ctx.textAlign='right';ctx.fillText((pMax*(i/4)).toFixed(1),pad.l-4,y+3);ctx.fillStyle='#f87171';ctx.textAlign='left';ctx.fillText((wMax*(i/4)).toFixed(0),pad.l+cw+4,y+3)}
  ctx.textAlign='center';ctx.fillStyle='#8899aa';ctx.font='9px sans-serif';
  for(let i=0;i<n;i++){ctx.fillText(cd.labels[i],pad.l+i*xStep,H-4)}
  for(let i=0;i<n;i++){if(cd.prec[i]==null||cd.prec[i]<=0)continue;const x=pad.l+i*xStep-barW/2;const bh=cd.prec[i]/pMax*ch;const y=pad.t+ch-bh;const g=ctx.createLinearGradient(x,y,x,pad.t+ch);g.addColorStop(0,'rgba(96,165,250,.8)');g.addColorStop(1,'rgba(96,165,250,.2)');ctx.fillStyle=g;ctx.beginPath();ctx.moveTo(x+3,pad.t+ch);ctx.lineTo(x+3,y+3);ctx.quadraticCurveTo(x+3,y,x+6,y);ctx.lineTo(x+barW-6,y);ctx.quadraticCurveTo(x+barW-3,y,x+barW-3,y+3);ctx.lineTo(x+barW-3,pad.t+ch);ctx.fill();if(cd.prec[i]>=0.1){ctx.fillStyle='#60a5fa';ctx.font='bold 9px sans-serif';ctx.textAlign='center';ctx.fillText(cd.prec[i].toFixed(1),pad.l+i*xStep,y-4)}}
  ctx.strokeStyle='#f87171';ctx.lineWidth=2;ctx.beginPath();let ws=false;
  for(let i=0;i<n;i++){if(cd.wind[i]==null)continue;const x=pad.l+i*xStep;const y=pad.t+ch-cd.wind[i]/wMax*ch;if(!ws){ctx.moveTo(x,y);ws=true}else ctx.lineTo(x,y)}
  ctx.stroke();
  for(let i=0;i<n;i++){if(cd.wind[i]==null)continue;const x=pad.l+i*xStep;const y=pad.t+ch-cd.wind[i]/wMax*ch;ctx.fillStyle=cd.wind[i]>50?'#ef4444':cd.wind[i]>30?'#fb923c':'#f87171';ctx.beginPath();ctx.arc(x,y,3,0,Math.PI*2);ctx.fill();ctx.fillStyle='#fca5a5';ctx.font='9px sans-serif';ctx.textAlign='center';ctx.fillText(cd.wind[i].toFixed(0),x,y-6)}
  ctx.save();ctx.translate(8,pad.t+ch/2);ctx.rotate(-Math.PI/2);ctx.fillStyle='#60a5fa';ctx.font='bold 10px sans-serif';ctx.textAlign='center';ctx.fillText('mm/h',0,0);ctx.restore();
  ctx.save();ctx.translate(W-6,pad.t+ch/2);ctx.rotate(Math.PI/2);ctx.fillStyle='#f87171';ctx.font='bold 10px sans-serif';ctx.textAlign='center';ctx.fillText('km/h',0,0);ctx.restore();
}

function renderCharts(){const cd=getChartData(chartSrc);drawTempChart(cd);drawPrecWindChart(cd)}
function switchChartSrc(src){chartSrc=src;document.querySelectorAll('#chartPills .pill').forEach(p=>p.classList.remove('active'));event.target.classList.add('active');renderCharts()}

// ── Allerte ──────────────────────────────────────────────────────────────────
function generateAlerts(){
  const alerts=[];const src='ecmwf';const T=ALERT_THRESHOLDS;
  CPS.forEach(cp=>{
    const refTime=cp.arr||cp.dep;const d=weatherData[cp.n];if(!d)return;
    const s=d[src];if(!s||s.error||!refTime)return;
    const idx=findClosest(s.times,refTime);if(idx<0)return;
    const t=s.temperature?s.temperature[idx]:null;
    const prec=s.precipitation?s.precipitation[idx]:null;
    const ws=s.wind_speed?s.wind_speed[idx]:null;
    const wg=s.wind_gust?s.wind_gust[idx]:null;
    const wcode=s.weather_code?s.weather_code[idx]:null;
    const time=fmtTime(s.times[idx]);
    if(t!=null&&t<T.tempFreeze)alerts.push({sev:'danger',icon:'🥶',type:'Rischio gelo',detail:`CP${cp.n} ${cp.name} — ${t.toFixed(1)}°C alle ${time}`,cp:cp.n});
    else if(t!=null&&t<T.tempCold)alerts.push({sev:'warning',icon:'🌡️',type:'Temperatura bassa',detail:`CP${cp.n} ${cp.name} — ${t.toFixed(1)}°C alle ${time}`,cp:cp.n});
    if(prec!=null&&prec>T.precipDanger)alerts.push({sev:'danger',icon:'🌧️',type:'Pioggia intensa',detail:`CP${cp.n} ${cp.name} — ${prec.toFixed(1)} mm/h alle ${time}`,cp:cp.n});
    else if(prec!=null&&prec>T.precipWarn)alerts.push({sev:'warning',icon:'🌧️',type:'Pioggia',detail:`CP${cp.n} ${cp.name} — ${prec.toFixed(1)} mm/h alle ${time}`,cp:cp.n});
    if(wg!=null&&wg>T.gustDanger)alerts.push({sev:'danger',icon:'💨',type:'Raffiche pericolose',detail:`CP${cp.n} ${cp.name} — raffiche ${wg.toFixed(0)} km/h alle ${time}`,cp:cp.n});
    if(ws!=null&&ws>T.windDanger)alerts.push({sev:'danger',icon:'💨',type:'Vento molto forte',detail:`CP${cp.n} ${cp.name} — ${ws.toFixed(0)} km/h alle ${time}`,cp:cp.n});
    else if(ws!=null&&ws>T.windWarn)alerts.push({sev:'warning',icon:'💨',type:'Vento forte',detail:`CP${cp.n} ${cp.name} — ${ws.toFixed(0)} km/h alle ${time}`,cp:cp.n});
    if(wcode!=null&&[95,96,99].includes(wcode))alerts.push({sev:'danger',icon:'⛈️',type:'Temporale',detail:`CP${cp.n} ${cp.name} alle ${time}`,cp:cp.n});
    if(wcode!=null&&[45,48].includes(wcode))alerts.push({sev:'warning',icon:'🌫️',type:'Nebbia / Visibilità ridotta',detail:`CP${cp.n} ${cp.name} alle ${time}`,cp:cp.n});
  });
  alerts.sort((a,b)=>a.sev==='danger'&&b.sev!=='danger'?-1:a.sev!=='danger'&&b.sev==='danger'?1:a.cp-b.cp);
  const el=document.getElementById('alertList');
  if(!alerts.length){el.innerHTML='<div class="alert-ok">✅ Nessuna allerta critica rilevata — condizioni nella norma per tutti i checkpoint</div>';return}
  el.innerHTML=alerts.map(a=>`<div class="alert-card ${a.sev}"><div class="alert-icon">${a.icon}</div><div class="alert-body"><div class="alert-type">${a.type}</div><div class="alert-detail">${a.detail}</div></div></div>`).join('');
  alerts.forEach(a=>{const badges=document.getElementById('badges'+a.cp);if(badges&&!badges.querySelector('.badge-alert-'+a.sev)){const cls=a.sev==='danger'?'badge-alert-danger':'badge-alert-warn';badges.innerHTML+=`<span class="badge ${cls}">${a.icon} ${a.type}</span>`}});
}

// ── Fetch API meteo ───────────────────────────────────────────────────────────
async function fetchECMWF(cp){
  const url=`https://api.open-meteo.com/v1/ecmwf?latitude=${cp.lat}&longitude=${cp.lon}&hourly=temperature_2m,apparent_temperature,precipitation,weather_code,cloud_cover,wind_speed_10m,wind_direction_10m,wind_gusts_10m&timezone=${METEO_TIMEZONE}&start_date=${METEO_DATE_FROM}&end_date=${METEO_DATE_TO}`;
  try{const r=await fetch(url);const j=await r.json();if(j.error)return{error:j.reason||'Errore API'};const h=j.hourly;
  return{times:h.time,temperature:h.temperature_2m,apparent_temp:h.apparent_temperature,precipitation:h.precipitation,weather_code:h.weather_code,cloud_cover:h.cloud_cover,wind_speed:h.wind_speed_10m,wind_dir:h.wind_direction_10m,wind_gust:h.wind_gusts_10m}}catch(e){return{error:'Rete non disponibile'}}
}

async function fetchForecast(cp){
  const url=`https://api.open-meteo.com/v1/forecast?latitude=${cp.lat}&longitude=${cp.lon}&hourly=temperature_2m,apparent_temperature,precipitation,precipitation_probability,weather_code,cloud_cover,wind_speed_10m,wind_direction_10m,wind_gusts_10m,relative_humidity_2m&timezone=${METEO_TIMEZONE}&start_date=${METEO_DATE_FROM}&end_date=${METEO_DATE_TO}`;
  try{const r=await fetch(url);const j=await r.json();if(j.error)return{error:j.reason||'Errore API'};const h=j.hourly;
  return{times:h.time,temperature:h.temperature_2m,apparent_temp:h.apparent_temperature,precipitation:h.precipitation,weather_code:h.weather_code,cloud_cover:h.cloud_cover,wind_speed:h.wind_speed_10m,wind_dir:h.wind_direction_10m,wind_gust:h.wind_gusts_10m,humidity:h.relative_humidity_2m}}catch(e){return{error:'Rete non disponibile'}}
}

async function fetchMeteoblue(cp){
  const url=`https://api.open-meteo.com/v1/forecast?latitude=${cp.lat}&longitude=${cp.lon}&hourly=temperature_2m,apparent_temperature,precipitation,weather_code,cloud_cover,wind_speed_10m,wind_direction_10m,wind_gusts_10m,relative_humidity_2m&timezone=${METEO_TIMEZONE}&start_date=${METEO_DATE_FROM}&end_date=${METEO_DATE_TO}&models=meteoblue`;
  try{const r=await fetch(url);const j=await r.json();if(j.error)return{error:j.reason||'Errore API'};const h=j.hourly;
  return{times:h.time,temperature:h.temperature_2m,apparent_temp:h.apparent_temperature,precipitation:h.precipitation,weather_code:h.weather_code,cloud_cover:h.cloud_cover,wind_speed:h.wind_speed_10m,wind_dir:h.wind_direction_10m,wind_gust:h.wind_gusts_10m,humidity:h.relative_humidity_2m}}catch(e){return{error:'Rete non disponibile'}}
}

async function fetchYrNo(cp){
  const url=`https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${cp.lat}&lon=${cp.lon}`;
  try{const r=await fetch(url);if(!r.ok)return{error:'HTTP '+r.status};const j=await r.json();
  const ts=j.properties.timeseries;
  const times=[],temperature=[],apparent_temp=[],precipitation=[],weather_code=[],cloud_cover=[],wind_speed=[],wind_dir=[],wind_gust=[],humidity=[];
  ts.forEach(t=>{const utc=new Date(t.time);const local=new Date(utc.getTime()+2*3600000);times.push(local.toISOString().slice(0,16));const d=t.data.instant.details;
  temperature.push(d.air_temperature!=null?d.air_temperature:null);apparent_temp.push(null);wind_speed.push(d.wind_speed!=null?d.wind_speed*3.6:null);wind_dir.push(d.wind_from_direction!=null?d.wind_from_direction:null);wind_gust.push(null);cloud_cover.push(d.cloud_area_fraction!=null?d.cloud_area_fraction:null);humidity.push(d.relative_humidity!=null?d.relative_humidity:null);
  const n1=t.data.next_1_hours;const n6=t.data.next_6_hours;
  if(n1&&n1.details){precipitation.push(n1.details.precipitation_amount||0)}else if(n6&&n6.details){precipitation.push((n6.details.precipitation_amount||0)/6)}else{precipitation.push(null)}
  if(n1&&n1.summary){weather_code.push(symbolToWmo(n1.summary.symbol_code))}else if(n6&&n6.summary){weather_code.push(symbolToWmo(n6.summary.symbol_code))}else{weather_code.push(null)}});
  return{times,temperature,apparent_temp,precipitation,weather_code,cloud_cover,wind_speed,wind_dir,wind_gust,humidity}}catch(e){return{error:'Rete non disponibile'}}
}

function symbolToWmo(sym){if(!sym)return null;const s=sym.replace(/_day|_night|_polartwilight/g,'');const map={clearsky:0,fair:1,partlycloudy:2,cloudy:3,fog:45,lightrainshowers:80,rainshowers:81,heavyrainshowers:82,lightrain:61,rain:63,heavyrain:65,lightrainandthunder:95,rainandthunder:95,heavyrainandthunder:99,lightsleet:66,sleet:66,heavysleet:67,lightsnow:71,snow:73,heavysnow:75,lightsnowshowers:85,snowshowers:85,heavysnowshowers:86,sleetshowers:80,lightsleetshowers:80,heavysleetshowers:82,sleetshowersandthunder:95,rainshowersandthunder:95,lightrainshowersandthunder:95,heavyrainshowersandthunder:99,snowandthunder:95,lightsnowandthunder:95,heavysnowandthunder:99,sleetandthunder:95,lightsleetandthunder:95,heavysleetandthunder:99,lightssleetshowersandthunder:95,lightssnowshowersandthunder:95,snowshowersandthunder:95};return map[s]!=null?map[s]:3}

function updateProgress(){document.getElementById('progressFill').style.width=Math.round(loadedCount/CPS.length*100)+'%'}

async function fetchAllForCP(cp){
  const [ecmwf,forecast,yr,meteoblue]=await Promise.allSettled([
    fetchECMWF(cp),fetchForecast(cp),fetchYrNo(cp),
    fetchMeteoblue(cp)
  ]);
  return{
    ecmwf:ecmwf.status==='fulfilled'?ecmwf.value:{error:'Errore fetch'},
    forecast:forecast.status==='fulfilled'?forecast.value:{error:'Errore fetch'},
    yr:yr.status==='fulfilled'?yr.value:{error:'Errore fetch'},
    meteoblue:meteoblue.status==='fulfilled'?meteoblue.value:{error:meteoblue.reason?.message||'Errore Meteoblue'}
  };
}

async function loadAll(){
  loadedCount=0;updateProgress();
  const cached=getCache();
  if(cached){
    weatherData=cached;loadedCount=CPS.length;updateProgress();
    document.getElementById('updateInfo').textContent=t('cacheText')+' '+new Date().toLocaleTimeString(LOCALE_MAP[currentLang]||'it-IT');
    CPS.forEach(cp=>{const card=document.getElementById('card'+cp.n);card.classList.remove('loading');card.classList.add('loaded');if(card.classList.contains('open')){renderWeather(cp.n,'ecmwf');renderTimeline(cp.n,'ecmwf')}});
    renderCharts();generateAlerts();return;
  }
  for(let i=0;i<CPS.length;i+=3){
    const batch=CPS.slice(i,i+3);const results=await Promise.all(batch.map(cp=>fetchAllForCP(cp)));
    batch.forEach((cp,j)=>{weatherData[cp.n]=results[j];loadedCount++;updateProgress();const card=document.getElementById('card'+cp.n);card.classList.remove('loading');const hasData=!results[j].ecmwf.error||!results[j].forecast.error||!results[j].yr.error||!results[j].meteoblue.error;card.classList.add(hasData?'loaded':'error');if(card.classList.contains('open')){renderWeather(cp.n,'ecmwf');renderTimeline(cp.n,'ecmwf')}});
    renderCharts();
  }
  setCache(weatherData);generateAlerts();
  document.getElementById('updateInfo').textContent=t('updatedInfo')+new Date().toLocaleTimeString(LOCALE_MAP[currentLang]||'it-IT');
}

function refreshAll(){
  localStorage.removeItem(CACHE_KEY);weatherData={};
  CPS.forEach(cp=>{const card=document.getElementById('card'+cp.n);card.classList.remove('loaded','error');card.classList.add('loading');const badges=document.getElementById('badges'+cp.n);badges.querySelectorAll('.badge-alert-warn,.badge-alert-danger').forEach(b=>b.remove())});
  document.getElementById('updateInfo').textContent=t('refreshText');
  document.getElementById('alertList').innerHTML='<div class="wx-loading"><div class="spinner"></div><br>'+t('analysisText')+'</div>';
  loadAll();
}

let resizeTimer;
window.addEventListener('resize',()=>{clearTimeout(resizeTimer);resizeTimer=setTimeout(()=>{renderCharts();drawMiniMap();},200)});
