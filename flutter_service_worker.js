'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "94b081d5d8f8562fe468eda53ce7e4a2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "e9229bb9f139bfe7e5746f3781fb1a44",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a3600e13554b36a39976d8339dcc0598",
".git/logs/refs/heads/main": "8093305c96bc1617185aae6c13e9497c",
".git/logs/refs/remotes/origin/main": "de20b6e87b3c8666a5b0bfe290793cb4",
".git/objects/05/5801e33a8f7cb27017a10e13e1ebc43d113962": "69dab0a35ca641700092729311be5769",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/0b/17a4370183b88c9f34474e81287e3f030c15d6": "88109b5b8580ed9f4eab64b7317135fd",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/1a/f5b8c14e7dbdc65119679283f27ac2e74422d8": "e1f186e1add1347a3d1232494b6d82ad",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/22/86c391c4117af7b95b884842acf2ac0f1a281d": "3f6b2208cf8104fe01f71a2554c3136a",
".git/objects/22/ea320ad9d947e09053042c4ae5b1b309bbf330": "3287bf7fadd328b342cfb40073b65ec1",
".git/objects/2b/c193329e90579114ca65c2d2590b5e04846292": "61a29c17fdbe56b93bb24c4ed63355ee",
".git/objects/33/b87b1025138f1bee8aacfe3c1837e08ad40100": "b89bc56d9f49b7df04ed9f6958a313e3",
".git/objects/3b/10272f18394bf2f51113b5dd6afde416b1644f": "10d1e721a339dc6c1e8f086a8db62b43",
".git/objects/41/64a256fdb3a0c83ab34ba1bb1b26630134ccba": "7657da8eb69115c7b5c2fd9d047f76e1",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4a/dbd08b9c58bdeb3113a56c2d2ba362445e7247": "b568a19632ab972189edaa00d6468b99",
".git/objects/4c/f2089a01bfb44ff1b0e2f28d51aa19970b246e": "4451bf4d0ea42108ad003120897322d0",
".git/objects/4d/bd28b97f2eb7706ab09ea6346f23231a51c7c2": "a19ac8f89df919f0bba221c7186464b7",
".git/objects/4f/8ce81315a4c857061daec2c0b11b22e0e9cb5f": "7b3889168b43e31135151b29e58a6fe2",
".git/objects/51/787adb0307172da79b8e507ad1d700eebf2a8a": "fd643fa831a0d18ff3b6a063009d389e",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/55/a68d9d09bd6b39b9db8712296f8d7fc62b0ebb": "40415baa9e194a881d715452c09a8271",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/61/0fc80b6e0db67e1e43c3acac4b3608bc6037d5": "ee54c445e8531ed813b595a79996bbb1",
".git/objects/63/d80ad45d8905c597fbaaf1da8337931da61e9d": "88796dbc3d5e02f96bb3946f2034e704",
".git/objects/67/598aca80e38a4fe625564730c130a66a9359b6": "44961a5c6fcf87cc372a6d0bf4745340",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/70/87c2239fd7e8d2b0735f6734707a1d40aa1d68": "8cb1ca399e4a96a572f019931a62d17d",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/72/22bf8e581267e003805ca76f70f450e29140cc": "12e3877504f637f2657f35ea24441db1",
".git/objects/7a/57716588a2aea27f9be3849283cf96958780a7": "a40aca4d301e52475873a20d5845c369",
".git/objects/7e/1d5717e7f9ff5028b1a13c0345d30ccf5ef632": "90b783f11160a59d6f0bf96f548a15d1",
".git/objects/80/421d0adbd3469803da18f37cc18a74dc94316b": "cd843c972b5417b2826973f5b4b551de",
".git/objects/80/88b91f57c1e9b951b0861e318b2c5065443394": "abc023882aa4e3194459261055b7cc02",
".git/objects/83/15db5f403f882821e208cee439aa576debbd57": "1e62d03de3f3ddfdccc3b5952a1fea1f",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/95/45a89d8968ec05cc6eeca3d4cd298af022f76d": "90c23c3ebf2475333baa899e49e7f4e4",
".git/objects/97/a4bc76f8dd04d9c0e3c3a18afbedb2c73e54c5": "aeb2bc83cc0be148b377fe51e1eba249",
".git/objects/98/bb6bc1036edf84a8d6c70989e8baa96dd30d38": "2abb0f794bd241d69086aa9ee4fe546c",
".git/objects/9a/11cf64066511dc9bc273185c2ea923f724488d": "fd79895aa3e34bba9f03b58be18b0a2d",
".git/objects/9d/5ecf992c1955ba2486cf93e58dbf62f04f9b2b": "b18ea1126f491bd5ff616f45e8748826",
".git/objects/9d/90d7556886a615bfbc82f7ee6319bcca3f3bcc": "e62a8a22210d3ec94ae7398af5066b16",
".git/objects/9d/dff3ae4f01adff5cda37a7d9b9bbf30e49cb58": "11c586d02222c1bc1daeecb3a751e20d",
".git/objects/a6/59e00463e0ed62a497a207126495512bf62fee": "1b9c3a5403c57bd6db85d23b5ef8741a",
".git/objects/ac/7d0817773e584681f89424f045dc5d1c79fa5c": "2aef7e53c6727a38579c25fecd16b092",
".git/objects/ac/cf54e3147007c196363aeab271489f56fbebe4": "3359e5185bddd60fb748965bceff901c",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b0/e6d471f66e760ce80b9c2e9cb3c3c49a171605": "7b00838313ccf218542ad932b8b862b7",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b9/fc9c98afa0b6cb0016ec00e4f649b514e422d1": "6a72d86e4d72f41993a390377f5f0867",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c6/897d6802711e55599efa0f1502418071a1ebaa": "7a7fde1bddccff2490c5aa1829091acb",
".git/objects/c8/8bd0ebce49f80ac2f44e25164c35093d177575": "78f832a2b713294d7138018e6aa4541c",
".git/objects/ce/d1be16f8b5bbe8bdd34500a9645c163be3c261": "1a78b714fc9b0b4446af5b3596c55d2e",
".git/objects/d1/0d7dd2a2748f0a3b06064df9e1a9db57819e89": "fae47de949c3be64f121b26d730eb433",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/b52f5ea9a2686c79a9b0801223981e2b8381d5": "7997b2bf1bd941ba1a41873f66b8ea6e",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/df/0c7e7c34a0517a996da07f8a0c17729c2d8c4f": "de9dbf03153f969464635faecedfa196",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e7/11614947746c694c375dba2cf978dd2efefc65": "bbaf4252bd5bb532fb63400801a4fec5",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/ed/6eab322b1686cf8f0722b0435cf770fbcad9f9": "2a726b0c602cb407420de9605b513134",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/82f65034fba8616af0ecc918db2be1ac6e37fa": "a0736a9dcbec48c7fa8b9fe0780963ee",
".git/objects/f3/ccb51755ff246d05803f29f13252d81cbd1ec4": "57da956a7067cd154231f1100d7b7f1a",
".git/objects/f6/e58f4e8d971114bcaf195292bbcf9d729151cb": "b374f6fb56fc58b286d574080d142548",
".git/refs/heads/main": "65b344aa6e7360069cd69fb127705f56",
".git/refs/remotes/origin/main": "65b344aa6e7360069cd69fb127705f56",
"assets/AssetManifest.bin": "8cd529af09b449e1869fa59631fa65f1",
"assets/AssetManifest.bin.json": "c09fd3fb21d76f5ade8ad9cc5ce0db9f",
"assets/AssetManifest.json": "aaef9737cad67c4c5388f163e225e8b0",
"assets/assets/images/1_edit.png": "ed078a19087cfa06cd1719cafc687099",
"assets/assets/images/6_edit.png": "a43b2f6d81aff6f7371504ebdeff2f80",
"assets/assets/images/ei_1693592425619-removebg-preview.png": "7c9aa15b06c48ff567cfd97ac42c8556",
"assets/assets/images/ei_1712933743686-removebg-edit.png": "19d792b410c2246e1cf07ebd4af228e8",
"assets/assets/images/facebook.png": "a3843e466f01d9fb4db5409c7e43dcc9",
"assets/assets/images/github-sign.png": "91d17565fecc8c3ad04729bd5d4d0316",
"assets/assets/images/icon-512.png": "01be06f9a63da86927b736cc7cb41cea",
"assets/assets/images/linkedin.png": "f34baaa8b6b9894eca9e55096afa0038",
"assets/FontManifest.json": "fdb16fa5a241f69713c054de19a9ca3f",
"assets/fonts/MaterialIcons-Regular.otf": "d4f081c91da6b5a870f673a77448481b",
"assets/images/1_edit.png": "ed078a19087cfa06cd1719cafc687099",
"assets/images/6_edit.png": "a43b2f6d81aff6f7371504ebdeff2f80",
"assets/images/ei_1693592425619-removebg-preview.png": "7c9aa15b06c48ff567cfd97ac42c8556",
"assets/images/ei_1712933743686-removebg-edit.png": "19d792b410c2246e1cf07ebd4af228e8",
"assets/images/facebook.png": "a3843e466f01d9fb4db5409c7e43dcc9",
"assets/images/github-sign.png": "91d17565fecc8c3ad04729bd5d4d0316",
"assets/images/icon-512.png": "01be06f9a63da86927b736cc7cb41cea",
"assets/images/linkedin.png": "f34baaa8b6b9894eca9e55096afa0038",
"assets/NOTICES": "d60cd89b997be9badb9bd610009a28b9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/flutter_credit_card/font/halter.ttf": "4e081134892cd40793ffe67fdc3bed4e",
"assets/packages/flutter_credit_card/icons/amex.png": "f75cabd609ccde52dfc6eef7b515c547",
"assets/packages/flutter_credit_card/icons/chip.png": "5728d5ac34dbb1feac78ebfded493d69",
"assets/packages/flutter_credit_card/icons/discover.png": "62ea19837dd4902e0ae26249afe36f94",
"assets/packages/flutter_credit_card/icons/elo.png": "ffd639816704b9f20b73815590c67791",
"assets/packages/flutter_credit_card/icons/hipercard.png": "921660ec64a89da50a7c82e89d56bac9",
"assets/packages/flutter_credit_card/icons/mastercard.png": "7e386dc6c169e7164bd6f88bffb733c7",
"assets/packages/flutter_credit_card/icons/rupay.png": "a10fbeeae8d386ee3623e6160133b8a8",
"assets/packages/flutter_credit_card/icons/unionpay.png": "87176915b4abdb3fcc138d23e4c8a58a",
"assets/packages/flutter_credit_card/icons/visa.png": "f6301ad368219611958eff9bb815abfe",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "c08498ab2c6a42fc77868abeffa3a007",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "a4fcb7fe202b42849e156292db4ea0d8",
"icons/Icon-512.png": "f4feeaa21de3d33ec19d81b83556c3f2",
"icons/Icon-maskable-192.png": "a4fcb7fe202b42849e156292db4ea0d8",
"icons/Icon-maskable-512.png": "f4feeaa21de3d33ec19d81b83556c3f2",
"index.html": "5f53af73664e47c9eb9f2f37168b26a5",
"/": "5f53af73664e47c9eb9f2f37168b26a5",
"main.dart.js": "85c0a02058116b4d240498d40b60f606",
"manifest.json": "45fb1ca3d4db87a4695cb19f381b566c",
"version.json": "596a9e3466d4c6ee5ab6c9c7b8898866"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
