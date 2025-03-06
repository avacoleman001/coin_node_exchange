'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "9e2c38c0b15f207b0910b06b5a242d35",
"assets/AssetManifest.bin.json": "f4afbf1817626d41609027da06af5c6e",
"assets/AssetManifest.json": "ceff1fa8bc33693559a292d2bf5be7cc",
"assets/assets/fonts/Poppins/Poppins-Black.ttf": "14d00dab1f6802e787183ecab5cce85e",
"assets/assets/fonts/Poppins/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins/Poppins-ExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/assets/fonts/Poppins/Poppins-ExtraLight.ttf": "6f8391bbdaeaa540388796c858dfd8ca",
"assets/assets/fonts/Poppins/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/Poppins/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/fonts/Poppins/Poppins-Thin.ttf": "9ec263601ee3fcd71763941207c9ad0d",
"assets/assets/images/atomic.png": "3329754d3e2f47a8b4117a4891b74bf0",
"assets/assets/images/best.jpeg": "e3be256dd5a33df8440f837b7c6d0ad4",
"assets/assets/images/binance.png": "da0773dbbdded80c5929fca2877bebde",
"assets/assets/images/bitpay.jpeg": "52195a62321976b7cfc4fd7b10407314",
"assets/assets/images/bybit.png": "1fd7c37f6a3da4bda9069d433705ed6a",
"assets/assets/images/cakewallet.jpg": "2abc50e115953dacc8c2edc23ff17b7f",
"assets/assets/images/coinbase.png": "e97a1069a394a68905d4637949466670",
"assets/assets/images/coinn.png": "68d96c44d29da788219e3d4604fe449a",
"assets/assets/images/cryptocom.jpeg": "f1002621832e71989107abc3d419799b",
"assets/assets/images/edge.png": "1e546982e77054aa8c0a88e4a1c75d70",
"assets/assets/images/electrum.png": "1dde2f0663dd7e400fa120bce2d647bf",
"assets/assets/images/ether.png": "82615ce16864801ba6748b4654439d0b",
"assets/assets/images/exodus.jpeg": "30adcf922b6bdd585fd2f08a422c3a92",
"assets/assets/images/gemini.png": "15b4f29b27a12e474ceb747cd9980da3",
"assets/assets/images/guarda.jpeg": "b25ce36f91049ef06dec32d13ba7a131",
"assets/assets/images/kraken.png": "9ea146eb9ed0ff0defd5457c8503bc63",
"assets/assets/images/ledger.png": "8d1b683f3fffb752ea026958e18b613b",
"assets/assets/images/metamask.png": "dc70634659d0790aa0d3a98520d7bdda",
"assets/assets/images/phantom.png": "061b8b3191f631f173bce3d28ce1cb44",
"assets/assets/images/trezor.png": "012de04c64b19867a242f85036f18008",
"assets/assets/images/trustwallet.jpeg": "19f8161c73cd30966dd72aed4a2af115",
"assets/assets/images/uniswap.png": "b4609a5d347f16bd3e0b2098d570c880",
"assets/assets/images/walletC.jpeg": "6bdc57ded22117189595fede883a1781",
"assets/assets/images/wasabi.png": "0ae4cadaf910961a8cd7e9fe63f507ab",
"assets/assets/images/zengo.png": "ae8c04293ac885952ff271a016e5b623",
"assets/FontManifest.json": "e6358958f7942520d370777cf12705e4",
"assets/fonts/MaterialIcons-Regular.otf": "9a8b7515e11054f715bb41e303859e37",
"assets/NOTICES": "229e925443caf9d7d89bef98a71f092c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"coinn.png": "68d96c44d29da788219e3d4604fe449a",
"favicon.png": "c5f54fdc76012f610049b298b939fcb0",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "cfcd156af39e69eb4a901d9a45b17ce5",
"icons/android-icon-144x144.png": "2d70393065ad352e521897140255fb50",
"icons/android-icon-192x192.png": "c8b0cf3405f1e168343e0b000fbd751a",
"icons/android-icon-36x36.png": "616f933ec7848b06e14196054ce9b7c3",
"icons/android-icon-48x48.png": "0cc5a5a139bb82c12420586b6979c6f0",
"icons/android-icon-72x72.png": "027bf7460b784781de069e06a940a3d1",
"icons/android-icon-96x96.png": "ada913fc544fff8b095a1b40cf322566",
"icons/apple-icon-114x114.png": "eb88ab4f45d1cbefa884c27f8f9a8a98",
"icons/apple-icon-120x120.png": "9c254ccfd3bfee76439c118b1b5d625e",
"icons/apple-icon-144x144.png": "2d70393065ad352e521897140255fb50",
"icons/apple-icon-152x152.png": "88ac7ac2a37d214ebad6cc92aa80c299",
"icons/apple-icon-180x180.png": "aae2129a4b746e7765748af4199ab9a3",
"icons/apple-icon-57x57.png": "5de401f11fe4dd6e4739954613bda24c",
"icons/apple-icon-60x60.png": "71ca35ac10802f598e21f5014e8a7102",
"icons/apple-icon-72x72.png": "027bf7460b784781de069e06a940a3d1",
"icons/apple-icon-76x76.png": "e7f1d0b06f1516cba46a3d060a20707f",
"icons/apple-icon-precomposed.png": "2bb6178d7c14ea26854f6cf5258e1599",
"icons/apple-icon.png": "2bb6178d7c14ea26854f6cf5258e1599",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/favicon-16x16.png": "c5f54fdc76012f610049b298b939fcb0",
"icons/favicon-32x32.png": "2749bc79372e04d3a78c8be5eb315697",
"icons/favicon-96x96.png": "ada913fc544fff8b095a1b40cf322566",
"icons/favicon.ico": "09bcbe859a8b5079f625f27d09b4955f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"icons/ms-icon-144x144.png": "2d70393065ad352e521897140255fb50",
"icons/ms-icon-150x150.png": "b082eb7483ea6697f38bbaf430abb508",
"icons/ms-icon-310x310.png": "047594bba481e271e35622db30933c37",
"icons/ms-icon-70x70.png": "c4ff9734de9e0a118d5f5c879639f1bf",
"index.html": "26bbc088ed0dda316f8eb2a1a0276784",
"/": "26bbc088ed0dda316f8eb2a1a0276784",
"main.dart.js": "d80ceb02fb16fbd5027910b71fc94ee7",
"manifest.json": "e8b6cc16daa062acb73b95321d279fd3",
"version.json": "384c5bb348a519127ea3b626faf2bf57"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
