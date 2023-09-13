'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "d41d4128579151a9c92a9271211d5f70",
"favicon.ico": "328d0d931d7dd530d622a477337b6f91",
"index.html": "d11c6be34e397ff4f3dd2d0e134883fd",
"/": "d11c6be34e397ff4f3dd2d0e134883fd",
"main.dart.js": "78d8cd7aa14898a88d56beceb95e4c31",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"icons/android-chrome-192x192.png": "2991743817ae06602edbec12dab6b408",
"icons/apple-touch-icon.png": "84e2944613d1f95f83f15595896fb353",
"icons/android-chrome-512x512.png": "db8fd607f3c06d50054087c52f614896",
"manifest.json": "9b743913491e1b97f834fa63246e8e28",
"assets/AssetManifest.json": "7ec98df6ad40921345c47c42bf614ca3",
"assets/NOTICES": "eee95dbe6cb732a272c214096d6dbb7b",
"assets/FontManifest.json": "e740777e964f80bf6a38693c24202088",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "2e9856a435d6f1a7a136e2e260233cbf",
"assets/fonts/MaterialIcons-Regular.otf": "8d902d0558221a8829ff53e626ec1834",
"assets/assets/customers/asiahawala.png": "4916adcbc773a5fdfcede759d1663836",
"assets/assets/customers/iraqcom.png": "11562f0c66124221e8bce8af83cabf67",
"assets/assets/customers/iac.png": "391eefea6f22c33ff23f37243722b54e",
"assets/assets/customers/camlife.png": "a79dbe1682d675e857e525e260ac0afa",
"assets/assets/customers/asiacell.png": "2ff77faf0582a46dc3d09a95f52656f7",
"assets/assets/customers/fisheries_admin.png": "813ccf14be3466a5452bdb7ae4617c76",
"assets/assets/customers/infinity.png": "1ef4538d37bf280f0ec4793982eae29c",
"assets/assets/mission.png": "1e5f820a45e1cf2e56b5ebd35f476fce",
"assets/assets/vision.png": "b654103918f1dad752e44ed1cb6e63f3",
"assets/assets/consulting.png": "2f7a0ffe9aa819e0f63344c827466e7f",
"assets/assets/vision.svg": "a9b8a89a1c29485606bba613d33af137",
"assets/assets/white_president.png": "336ce534d1a94c554da2c8691dcc0ad0",
"assets/assets/social/telegram.png": "4145c426726e7e097fbc77d3ec3310ce",
"assets/assets/social/fb.png": "cb3a7557aa862bcf92ba49ac91cb1a1d",
"assets/assets/social/linkedin.png": "ffa47c44e380f8a9fcdeb62030f12a67",
"assets/assets/president.svg": "af60a0ee22c9ae5ba0d3461f0e6a3d67",
"assets/assets/logo.png": "22ea79a88f5119c60697b0625651eda9",
"assets/assets/distribution.svg": "1a03cdc46e802d31c6367a5219c206aa",
"assets/assets/white_president-removebg-preview.png": "047fd80056649f4094cdf180a33ad112",
"assets/assets/experts/socheata.png": "fca4bbc45ccf66311778a0d92d60b180",
"assets/assets/experts/chealing.png": "9ffb69d1f270d0886b2d16ee2e81333e",
"assets/assets/experts/phanno.png": "c86ce0a583a38281d1eaeadf2424c9db",
"assets/assets/experts/rotha.png": "e320a1db8e27c8fbbc65ec1de53a0dda",
"assets/assets/experts/phallen.png": "03a4d8b8a27b7e7f04939abd9cb244ff",
"assets/assets/experts/kosal.png": "7456979ba71a17726220e733b3fff956",
"assets/assets/experts/chanthorn.png": "7b584543c8427b712dd1be3357c55038",
"assets/assets/experts/pideth.png": "0688a8530ab952a837adc00ffac9247c",
"assets/assets/experts/pisey.png": "58d648a29caf6d4fb22ae209794cf704",
"assets/assets/distribution.png": "e166b1c5f2c4fe1447789491724ddf94",
"assets/assets/fonts/Battambang-thin.ttf": "ec12806ec780b69e909e92df92171745",
"assets/assets/fonts/Battambang-Regular.ttf": "6a5b831b3323bee3a53761c64b6af0ba",
"assets/assets/president.png": "49df70fb05092413025a1af77a671397",
"assets/assets/services/taxi.png": "fe8a82753d7ff30eb407fe0acd3a3531",
"assets/assets/services/it_consultation.png": "f7b7c4d078a81c6c90e4a97ec3a516fc",
"assets/assets/services/vms.png": "024f996a6d6df7593cb8fa31185cdbe9",
"assets/assets/services/in_house.png": "798f2b678af9a21885593510b6a66085",
"assets/assets/services/insurance.png": "0a22284c237f20b1edd8b93938b88d13",
"assets/assets/services/web_mobile.png": "f8024eaf9d54dffd389ada5acb86b958",
"assets/assets/services/sms_gateway.png": "2836152075ea01c1f04f4a833d690881",
"assets/assets/services/delivery_platform.png": "042fe4ed01032fa1541be0f248254787",
"assets/assets/services/payment_gateway.png": "49b9dd4ed134febffdd16615f5ea03f3",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
