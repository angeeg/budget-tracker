const APP_PREFIX = 'BudgetTracker-';     
const VERSION = 'version_01';
const CACHE_NAME = APP_PREFIX + VERSION;
const FILES_TO_CACHE = [
    "public/index.html",
    "public/js/idb.js",
    "public/js/index.min.js",
    "public/css/style.css"
]

// we use self instead of window.addEvent.. because service workers run 
// before the window object has been created
// self refers to the service worker object
self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
          console.log('installing cache : ' + CACHE_NAME)
          return cache.addAll(FILES_TO_CACHE)
        })
      )
})