// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"img/gallery-items.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = [{
  preview: "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",
  original: "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",
  description: "Hokkaido Flower"
}, {
  preview: "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
  original: "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
  description: "Container Haulage Freight"
}, {
  preview: "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
  original: "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
  description: "Aerial Beach View"
}, {
  preview: "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
  original: "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
  description: "Flower Blooms"
}, {
  preview: "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
  original: "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
  description: "Alpine Mountains"
}, {
  preview: "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
  original: "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
  description: "Mountain Lake Sailing"
}, {
  preview: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
  original: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
  description: "Alpine Spring Meadows"
}, {
  preview: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
  original: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
  description: "Nature Landscape"
}, {
  preview: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
  original: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
  description: "Lighthouse Coast Sea"
}];
exports.default = _default;
},{}],"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"css/styles.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\img\\icon-close.svg":[["icon-close.c7c2480f.svg","img/icon-close.svg"],"img/icon-close.svg"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"js/refs.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  galleryContainer: document.querySelector('ul.js-gallery'),
  backdrop: document.querySelector('.lightbox'),
  backdropOverlay: document.querySelector('.lightbox__overlay'),
  backdropContent: document.querySelector('.lightbox__content'),
  closeModalBtn: document.querySelector(".lightbox button[data-action='close-lightbox']"),
  imgInModal: document.querySelector('img.lightbox__image'),
  galleryItem: document.querySelector('.gallery__item'),
  galleryImage: document.querySelector('.gallery__image')
};
exports.default = _default;
},{}],"js/markup-creation.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createGalleryItemsMarkup = createGalleryItemsMarkup;

function createGalleryItemsMarkup(images) {
  return images.map(function (_ref) {
    var preview = _ref.preview,
        original = _ref.original,
        description = _ref.description;
    return "\n        <li class=\"gallery__item\">\n            <a\n                class=\"gallery__link\"\n                href=\"".concat(original, "\"\n            >\n                <img\n                class=\"gallery__image\"\n                src=\"").concat(preview, "\"\n                data-source=\"").concat(original, "\"\n                alt=\"").concat(description, "\"\n                />\n            </a>\n        </li>\n");
  }).join('');
}
},{}],"js/on-image-click.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = onImageClick;

var _refs = _interopRequireDefault(require("./refs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function onImageClick(evt) {
  evt.preventDefault();
  var target = evt.target;
  var parentItem = target.closest('.gallery__item'); // проверяем, чтобы клик был точно по изображению

  var isImage = target.classList.contains('gallery__image');

  if (!isImage) {
    return;
  } // добавляем класс открытия модалки


  _refs.default.backdrop.classList.add('is-open'); // устанавливаем новый src элемента img.lightbox__image


  changeModalImgSourсe(target); // вешаем слушатели клавиатуры

  addKeyListeners(); // вешаем активный класс на картинку, кот. открывается в модалке

  parentItem.classList.add('lightbox__image');
}

function addKeyListeners() {
  //   window.addEventListener('keydown', onEscKeyPress);
  window.addEventListener('keydown', onRightArrowPress);
  window.addEventListener('keydown', onLeftArrowPress);
}

function changeModalImgSourсe(elem) {
  _refs.default.imgInModal.src = elem.dataset.source;
} // перелистывание картинок


function onRightArrowPress(event) {
  var RIGHT_ARROW_KEY_CODE = 'ArrowRight';

  if (event.code === RIGHT_ARROW_KEY_CODE) {
    var currentItem = document.querySelector('.lightbox__image');

    if (currentItem === _refs.default.galleryContainer.lastElementChild) {
      return;
    }

    var nextItem = currentItem.nextElementSibling;
    changeImage(currentItem, nextItem);
  }
}

function onLeftArrowPress(event) {
  var LEFT_ARROW_KEY_CODE = 'ArrowLeft';

  if (event.code === LEFT_ARROW_KEY_CODE) {
    var currentItem = document.querySelector('.lightbox__image');

    if (currentItem === _refs.default.galleryContainer.firstElementChild) {
      return;
    }

    var nextItem = currentItem.previousElementSibling;
    changeImage(currentItem, nextItem);
  }
}

function changeImage(currentActiveItem, nextActiveItem) {
  var nextImg = nextActiveItem.querySelector('.gallery__image');
  changeModalImgSourсe(nextImg);
  currentActiveItem.classList.remove('lightbox__image');
  nextActiveItem.classList.add('lightbox__image');
}
},{"./refs":"js/refs.js"}],"js/on-close-modal.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = onCloseModal;

var _refs = _interopRequireDefault(require("./refs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function onCloseModal(event) {
  _refs.default.backdrop.classList.remove('is-open');

  _refs.default.imgInModal.src = '';

  _refs.default.galleryContainer.querySelectorAll('gallery__item').forEach(function (el) {
    return el.classList.remove('lightbox__image');
  });

  removeKeyListeners();
} // закрытие модалки по клику на оверлей


_refs.default.backdropOverlay.addEventListener('click', onBackdropClick);

function onBackdropClick(event) {
  if (event.target !== _refs.default.imgInModal) {
    onCloseModal();
  }
} // закрытие модалки по нажатию клавиши ESC


function onEscKeyPress(event) {
  var ESC_KEY_CODE = 'Escape';
  var isEsc = ESC_KEY_CODE === event.code;

  if (isEsc) {
    onCloseModal();
  }
}

function removeKeyListeners() {
  window.removeEventListener('keydown', onEscKeyPress);
  window.removeEventListener('keydown', onRightArrowPress);
  window.removeEventListener('keydown', onLeftArrowPress);
}

function onRightArrowPress(event) {
  var RIGHT_ARROW_KEY_CODE = 'ArrowRight';

  if (event.code === RIGHT_ARROW_KEY_CODE) {
    var currentItem = document.querySelector('.lightbox__image');

    if (currentItem === _refs.default.galleryContainer.lastElementChild) {
      return;
    }

    var nextItem = currentItem.nextElementSibling;
    changeImage(currentItem, nextItem);
  }
}

function onLeftArrowPress(event) {
  var LEFT_ARROW_KEY_CODE = 'ArrowLeft';

  if (event.code === LEFT_ARROW_KEY_CODE) {
    var currentItem = document.querySelector('.lightbox__image');

    if (currentItem === _refs.default.galleryContainer.firstElementChild) {
      return;
    }

    var nextItem = currentItem.previousElementSibling;
    changeImage(currentItem, nextItem);
  }
}

function changeImage(currentActiveItem, nextActiveItem) {
  var nextImg = nextActiveItem.querySelector('.gallery__image');
  changeModalImgSourсe(nextImg);
  currentActiveItem.classList.remove('lightbox__image');
  nextActiveItem.classList.add('lightbox__image');
}
},{"./refs":"js/refs.js"}],"index.js":[function(require,module,exports) {
"use strict";

var _galleryItems = _interopRequireDefault(require("./img/gallery-items"));

require("./css/styles.scss");

var _refs = _interopRequireDefault(require("./js/refs"));

var _markupCreation = require("./js/markup-creation");

var _onImageClick = _interopRequireDefault(require("./js/on-image-click"));

var _onCloseModal = _interopRequireDefault(require("./js/on-close-modal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// создаём разметку галлереи
var galleryItemMarkup = (0, _markupCreation.createGalleryItemsMarkup)(_galleryItems.default);

_refs.default.galleryContainer.insertAdjacentHTML('beforeend', galleryItemMarkup); //вешаем слушателя событий


_refs.default.galleryContainer.addEventListener('click', _onImageClick.default);

// зыкрытие модалки
_refs.default.closeModalBtn.addEventListener('click', _onCloseModal.default);
},{"./img/gallery-items":"img/gallery-items.js","./css/styles.scss":"css/styles.scss","./js/refs":"js/refs.js","./js/markup-creation":"js/markup-creation.js","./js/on-image-click":"js/on-image-click.js","./js/on-close-modal":"js/on-close-modal.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52335" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map