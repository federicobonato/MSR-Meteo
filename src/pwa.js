// =============================================================================
// MSR 2026 — PWA (Service Worker + Install Prompt)
// =============================================================================

(function () {
  // ── Service Worker ──────────────────────────────────────────────────────────
  // Il SW viene registrato come file separato (sw.js) in produzione.
  // In sviluppo locale viene injettato come blob dal build script.
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
      .then(r  => console.log('[MSR] SW registrato:', r.scope))
      .catch(e => console.warn('[MSR] SW non registrato:', e));
  }

  // ── Manifest ────────────────────────────────────────────────────────────────
  // Il manifest viene linkato staticamente in index.html → manifest.json

  // ── Install prompt (Android / Desktop Chrome) ───────────────────────────────
  let deferredPrompt = null;
  const banner    = document.getElementById('installBanner');
  const dismissed = localStorage.getItem('msr_pwa_dismissed');

  window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault();
    deferredPrompt = e;
    if (!dismissed) {
      setTimeout(() => banner.classList.add('show'), 1500);
    }
  });

  document.getElementById('btnInstall').addEventListener('click', async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    deferredPrompt = null;
    banner.classList.remove('show');
    if (outcome === 'accepted') localStorage.setItem('msr_pwa_dismissed', '1');
  });

  window.dismissInstall = function () {
    banner.classList.remove('show');
    localStorage.setItem('msr_pwa_dismissed', '1');
  };

  // ── iOS Safari tip ──────────────────────────────────────────────────────────
  const isIos        = /iphone|ipad|ipod/i.test(navigator.userAgent);
  const isStandalone = window.navigator.standalone === true;
  const iosDismissed = localStorage.getItem('msr_ios_dismissed');

  if (isIos && !isStandalone && !iosDismissed) {
    setTimeout(() => {
      const tip = document.getElementById('iosTip');
      tip.classList.add('show');
      setTimeout(() => {
        tip.classList.remove('show');
        localStorage.setItem('msr_ios_dismissed', '1');
      }, 14000);
    }, 3000);
  }
})();
