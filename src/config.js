// =============================================================================
// MSR 2026 — CONFIGURAZIONE GARA
// Modifica qui i dati dei checkpoint e le velocità di default
// =============================================================================

// Velocità media di default per ogni tappa (km/h)
// Indice 0 = CP1→CP2, indice 1 = CP2→CP3, ecc.
const DEFAULT_SPEEDS = [
  25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25,
];

// Partenza fissa da Umeå (CP1)
const START_DEP = '2026-06-14T23:30:00';

// Checkpoint della gara
// Campi: n=numero, name=nome, cc=nazione (SE/NO), lat/lon=coordinate,
//        km=km progressivi, kms=km tappa, elev=dislivello tappa,
//        stopMinutes=sosta in minuti
// Orari di arrivo/partenza vengono calcolati a runtime in base alla velocità media e alla sosta
const CPS = [
  {n:1, name:"Scandic Plaza Umeå",            cc:"SE", lat:63.826, lon:20.263, km:0,    kms:0,   elev:0,    stopMinutes:0},
  {n:2, name:"Granö – Granö Beckasin",        cc:"SE", lat:64.204, lon:19.719, km:123,  kms:69, elev:1139, stopMinutes:30},
  {n:3, name:"Lycksele – Hotel Lappland",      cc:"SE", lat:64.158, lon:17.334, km:241,  kms:54, elev:1127, stopMinutes:30},
  {n:4, name:"Vilhelmina – Hotel Wilhelmina", cc:"SE", lat:64.624, lon:16.656, km:359,  kms:118, elev:2087, stopMinutes:60},
  {n:5, name:"Kittelfjäll – Fjälltorget",    cc:"SE", lat:65.178, lon:15.003, km:488,  kms:129, elev:1658, stopMinutes:60},
  {n:6, name:"Hattfjelldal – Hattfjelldal Hotel", cc:"NO", lat:65.571, lon:13.981, km:587, kms:99, elev:1049, stopMinutes:240},
  {n:7, name:"Mo i Rana – Hotel Scandia",     cc:"NO", lat:66.313, lon:14.143, km:699,  kms:112, elev:1454, stopMinutes:60},
  {n:8, name:"Arctic Circle – Polarsirkelsenteret", cc:"NO", lat:66.564, lon:15.314, km:780, kms:81, elev:1468, stopMinutes:60},
  {n:9, name:"Vuoggatjålme – Campo",          cc:"SE", lat:66.567, lon:16.350, km:873,  kms:93,  elev:1270, stopMinutes:300},
  {n:10,name:"Arjeplog – Hornavan Hotel",     cc:"SE", lat:66.052, lon:17.889, km:978,  kms:105, elev:912,  stopMinutes:60},
  {n:11,name:"Sorsele – Sorsele River Hotel", cc:"SE", lat:65.532, lon:17.534, km:1069, kms:91,  elev:741,  stopMinutes:60},
  {n:12,name:"Åmsele – Campeggio",            cc:"SE", lat:64.520, lon:18.412, km:1226, kms:157, elev:1324, stopMinutes:240},
  {n:13,name:"Scandic Plaza Umeå",            cc:"SE", lat:63.826, lon:20.263, km:1333, kms:107, elev:1025, stopMinutes:0}
];

// Soglie allerta meteo
const ALERT_THRESHOLDS = {
  tempFreeze:    0,   // °C — allerta gelo
  tempCold:      5,   // °C — allerta freddo
  precipDanger:  3,   // mm/h — pioggia intensa
  precipWarn:    1,   // mm/h — pioggia
  gustDanger:   60,   // km/h — raffiche pericolose
  windDanger:   50,   // km/h — vento forte (danger)
  windWarn:     30,   // km/h — vento forte (warn)
};

// Finestra date da richiedere alle API meteo
const METEO_DATE_FROM = "2026-06-14";
const METEO_DATE_TO   = "2026-06-19";
const METEO_TIMEZONE  = "Europe%2FStockholm";

// Durata cache locale (millisecondi) — default 1 ora
const CACHE_TTL = 3600000;
const CACHE_KEY = 'msr_meteo_v4';
