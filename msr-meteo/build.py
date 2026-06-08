#!/usr/bin/env python3
"""
MSR 2026 — Build script
Legge i file in src/ e produce dist/index.html (tutto inline, un file solo).
Viene eseguito dalla GitHub Action ad ogni push su main.
"""
import os, re, sys

SRC  = os.path.join(os.path.dirname(__file__), 'src')
DIST = os.path.join(os.path.dirname(__file__), 'dist')
os.makedirs(DIST, exist_ok=True)

def read(name):
    with open(os.path.join(SRC, name), encoding='utf-8') as f:
        return f.read()

# Leggi i sorgenti
html     = read('index.html')
css      = read('style.css')
config   = read('config.js')
app      = read('app.js')
settings = read('settings.js')
pwa_js   = read('pwa.js')
sw       = read('sw.js')
manifest = read('manifest.json')

# ── Inline il CSS ────────────────────────────────────────────────────────────
html = html.replace('<!-- STYLE_PLACEHOLDER -->', f'<style>\n{css}\n</style>')

# ── Rimuovi il link al manifest (verrà iniettato via JS come blob) ───────────
html = re.sub(r'\s*<link rel="manifest"[^>]+>', '', html)

# ── Inline il SW come blob (nessun file esterno da servire) ──────────────────
import base64
sw_b64       = base64.b64encode(sw.encode()).decode()
manifest_b64 = base64.b64encode(manifest.encode()).decode()

pwa_patched = f"""
// =============================================================================
// MSR 2026 — PWA (Service Worker + Install Prompt) — INLINED BY BUILD
// =============================================================================
(function () {{
  // Inject manifest as blob URL
  try {{
    const mBlob = new Blob([atob('{manifest_b64}')], {{type:'application/manifest+json'}});
    const mUrl  = URL.createObjectURL(mBlob);
    const link  = document.createElement('link');
    link.rel    = 'manifest';
    link.href   = mUrl;
    document.head.appendChild(link);
  }} catch(e) {{ console.warn('[MSR] manifest inject failed', e); }}

  // Register Service Worker via blob
  if ('serviceWorker' in navigator) {{
    try {{
      const swBlob = new Blob([atob('{sw_b64}')], {{type:'application/javascript'}});
      const swUrl  = URL.createObjectURL(swBlob);
      navigator.serviceWorker.register(swUrl)
        .then(r  => console.log('[MSR] SW registered:', r.scope))
        .catch(e => console.warn('[MSR] SW error:', e));
    }} catch(e) {{ console.warn('[MSR] SW blob failed', e); }}
  }}

  // Install prompt (Android / Desktop Chrome)
  let deferredPrompt = null;
  const banner       = document.getElementById('installBanner');

  window.addEventListener('beforeinstallprompt', e => {{
    e.preventDefault();
    deferredPrompt = e;
    if (!localStorage.getItem('msr_pwa_dismissed')) {{
      setTimeout(() => banner.classList.add('show'), 1500);
    }}
  }});

  document.getElementById('btnInstall').addEventListener('click', async () => {{
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const {{ outcome }} = await deferredPrompt.userChoice;
    deferredPrompt = null;
    banner.classList.remove('show');
    if (outcome === 'accepted') localStorage.setItem('msr_pwa_dismissed', '1');
  }});

  window.dismissInstall = function () {{
    banner.classList.remove('show');
    localStorage.setItem('msr_pwa_dismissed', '1');
  }};

  // iOS Safari tip
  const isIos        = /iphone|ipad|ipod/i.test(navigator.userAgent);
  const isStandalone = window.navigator.standalone === true;
  if (isIos && !isStandalone && !localStorage.getItem('msr_ios_dismissed')) {{
    setTimeout(() => {{
      const tip = document.getElementById('iosTip');
      tip.classList.add('show');
      setTimeout(() => {{
        tip.classList.remove('show');
        localStorage.setItem('msr_ios_dismissed', '1');
      }}, 14000);
    }}, 3000);
  }}
}})();
"""

# ── Inline tutti gli script ──────────────────────────────────────────────────
scripts_block = f"""<script>
// ── config.js ──
{config}

// ── app.js ──
{app}

// ── settings.js ──
{settings}

// ── pwa.js (inlined) ──
{pwa_patched}

// ── Boot ──
buildCards();
loadAll();
</script>"""

html = html.replace('<!-- SCRIPTS_PLACEHOLDER -->', scripts_block)

# ── Scrivi dist/index.html ───────────────────────────────────────────────────
out_path = os.path.join(DIST, 'index.html')
with open(out_path, 'w', encoding='utf-8') as f:
    f.write(html)

size_kb = os.path.getsize(out_path) / 1024
print(f'✅ Build completato: dist/index.html ({size_kb:.1f} KB)')
