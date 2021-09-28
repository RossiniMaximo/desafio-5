// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
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
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"8uBhv":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "69f74e7f31319ffd";
module.bundle.HMR_BUNDLE_ID = "0b7c8afcb31310b1";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                } // Render the fancy html overlay
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>\n          ").concat(stack, "\n        </pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>' + hint + '</div>';
            }).join(''), "\n        </div>\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"4aleK":[function(require,module,exports) {
var _button = require("./components/button");
var _logo = require("./components/logo");
var _hands = require("./components/hands");
var _timer = require("./components/timer");
var _star = require("./components/star");
var _router = require("./router");
var _state = require("./state");
(function() {
    _state.state.initStorage();
    const rootEl = document.querySelector(".root");
    _router.initRouter(rootEl);
})();

},{"./components/button":"3uBrB","./components/logo":"ejQX9","./components/hands":"lFlAb","./components/timer":"df3Uf","./components/star":"1a1ti","./router":"b2iia","./state":"28XHA"}],"3uBrB":[function(require,module,exports) {
class Button extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: "open"
        });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        const style = document.createElement("style");
        style.innerHTML = `\n            .button{\n                padding : 5px;\n                background-color :rgb(128, 0, 128);\n                color : #D8FCFC;\n                font-size : 35px;\n                font-family: 'Gluten', cursive;\n                border : solid 2px black;\n                border-radius : 10px;\n                width : 100%;\n                cursor:pointer;\n            }\n            .button:hover{\n                transform: translate3d(0px, -2px, 0px);\n            }\n        `;
        this.shadow.innerHTML = `\n        <button class="button"></button>\n        `;
        const buttonEl = this.shadow.querySelector("button");
        buttonEl.textContent = this.textContent;
        this.shadow.appendChild(style);
    }
}
customElements.define("my-button", Button);

},{}],"ejQX9":[function(require,module,exports) {
class RPSOptions extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: "open"
        });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        const childrenImg = require('../../images/playingChildren.png');
        const div = document.createElement('div');
        const style = document.createElement('style');
        div.innerHTML = `\n                <img class="home-img" src= "${childrenImg} ">\n        `;
        style.innerHTML = `\n            .home-img{\n               max-height: 140px;\n            }\n             \n        `;
        div.appendChild(style);
        this.shadow.appendChild(div);
    }
}
customElements.define("logo-img", RPSOptions);

},{"../../images/playingChildren.png":"3vlfh"}],"3vlfh":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('Z8Pbo') + "playingChildren.d49b031a.png";

},{"./helpers/bundle-url":"8YnfL"}],"8YnfL":[function(require,module,exports) {
"use strict";
var bundleURL = {
};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"lFlAb":[function(require,module,exports) {
var _state = require("../../state");
class Hands extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: "open"
        });
        _state.state.suscribe(()=>{
            this.handsLogic();
        });
        this.syncWithState();
        this.handsLogic();
    }
    syncWithState() {
        this.render();
    }
    handsLogic() {
        const lastState = _state.state.getState();
        lastState.playerMove = "";
        lastState.computerMove = "";
        console.log("soy el laststate de la pagina hands", lastState);
        const piedraId = this.shadow.querySelector("#piedra");
        piedraId.addEventListener("click", ()=>{
            piedraId.classList.remove("blur");
            tijerasId.classList.add("blur");
            papelId.classList.add("blur");
            _state.state.data.currentGame.playerMove = "";
            _state.state.setMove("piedra");
            _state.state.setState({
                ...lastState
            });
        /* console.log("piedra", state.data.currentGame.playerMove); */ });
        const papelId = this.shadow.querySelector("#papel");
        papelId.addEventListener("click", (e)=>{
            papelId.classList.remove("blur");
            piedraId.classList.add("blur");
            tijerasId.classList.add("blur");
            _state.state.data.currentGame.playerMove = "";
            _state.state.setMove("papel");
            _state.state.setState({
                ...lastState
            });
        /* console.log("papel", state.data); */ });
        const tijerasId = this.shadow.querySelector("#tijeras");
        tijerasId.addEventListener("click", ()=>{
            tijerasId.classList.remove("blur");
            papelId.classList.add("blur");
            piedraId.classList.add("blur");
            _state.state.setMove("tijeras");
            _state.state.setState({
                ...lastState
            });
        /* console.log("tijeras", state.data); */ });
    }
    render() {
        const piedraURL = require("url:../../images/piedra.png");
        const papelURL = require("url:../../images/papel.png");
        const tijerasURL = require("url:../../images/tijera.png");
        const div = document.createElement('div');
        div.className = "container";
        div.innerHTML = `\n        <img class="img piedra borde" id="piedra" src="${piedraURL}">\n        <img class="img papel" id="papel" src="${papelURL}">\n        <img class="img tijeras" id="tijeras" src="${tijerasURL}">\n        `;
        const style = document.createElement('style');
        style.innerHTML = `\n        .container{\n            display : flex;\n            gap : 25px;\n        }\n        .img{\n            height : 150px;\n            display : block\n        }\n        .blur{filter: blur(4px); transition: all 0.15s;}\n        .blur:hover{\n            transform: translate3d(0px,-2px,0px);\n        }\n        `;
        div.appendChild(style);
        this.shadow.appendChild(div);
    }
}
customElements.define("rps-hands", Hands);

},{"../../state":"28XHA","url:../../images/piedra.png":"jQlP3","url:../../images/papel.png":"8lgLG","url:../../images/tijera.png":"5iyAz"}],"28XHA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state
);
const state = {
    data: {
        currentGame: {
            playerMove: "",
            computerMove: ""
        },
        winner: "",
        playerScore: 0,
        computerScore: 0
    },
    listeners: [],
    initStorage () {
        const localData = localStorage.getItem("user-state");
        const parsedData = JSON.parse(localData);
        this.setState(parsedData);
    },
    scoreCounter (winner) {
        if (winner == "player") state.data.playerScore++;
        if (winner == "computer") state.data.computerScore++;
    },
    getState () {
        return this.data;
    },
    setState (newState) {
        this.data = newState;
        for (const cb of this.listeners)cb(newState);
        localStorage.setItem("user-state", JSON.stringify(newState));
        console.log("Soy el state he cambiado", this.data);
    },
    suscribe (callback) {
        this.listeners.push(callback);
    },
    setMove (move) {
        const currentState = this.getState();
        currentState.currentGame.playerMove = "";
        currentState.currentGame.playerMove = move;
    },
    result (playerMove, botMove) {
        /* playerMove = state.data.currentGame.playerMove
        botMove = state.data.currentGame.computerMove || alternativa mas corta ||*/ const ganePiedra = state.data.currentGame.playerMove == "piedra" && state.data.currentGame.computerMove == "tijeras";
        const ganePapel = state.data.currentGame.playerMove == "papel" && state.data.currentGame.computerMove == "piedra";
        const ganeTijeras = state.data.currentGame.playerMove == "tijeras" && state.data.currentGame.computerMove == "papel";
        const gano = [
            ganePiedra,
            ganePapel,
            ganeTijeras
        ].includes(true);
        if (gano == true) {
            state.data.winner = "";
            state.data.winner = "player";
            this.scoreCounter(state.data.winner);
        }
        const botPiedra = state.data.currentGame.computerMove == "piedra" && state.data.currentGame.playerMove == "tijeras";
        const botPapel = state.data.currentGame.computerMove == "papel" && state.data.currentGame.playerMove == "piedra";
        const botTijeras = state.data.currentGame.computerMove == "tijeras" && state.data.currentGame.playerMove == "papel";
        const botGana = [
            botPiedra,
            botPapel,
            botTijeras
        ].includes(true);
        if (botGana == true) {
            state.data.winner = "";
            state.data.winner = "computer";
            this.scoreCounter(state.data.winner);
        }
        if (gano == false && botGana == false) state.data.winner = "";
    },
    setComputerMove (botMove) {
        const currentState = this.getState();
        currentState.currentGame.computerMove = "";
        currentState.currentGame.computerMove = botMove;
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"JacNc":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule') return;
        // Skip duplicate re-exports when they have the same value.
        if (key in dest && dest[key] === source[key]) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"jQlP3":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('Z8Pbo') + "piedra.a3b6d156.png";

},{"./helpers/bundle-url":"8YnfL"}],"8lgLG":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('Z8Pbo') + "papel.135c8552.png";

},{"./helpers/bundle-url":"8YnfL"}],"5iyAz":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('Z8Pbo') + "tijera.51906c81.png";

},{"./helpers/bundle-url":"8YnfL"}],"df3Uf":[function(require,module,exports) {
class Timer extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: 'open'
        });
        this.setUp();
    }
    setUp() {
        let counter = 0;
        let timeLeft = 4;
        const intervalId = setInterval(()=>{
            counter++;
            const div = document.createElement("div");
            div.className = "root";
            div.innerHTML = `\n                <div class="timer-container">\n                    <p id ="timer"class="timer">${timeLeft - counter}</p>\n                </div>\n            `;
            const timerEl = div.querySelector("#timer");
            /* console.log("timer row 24", timerEl.textContent); */ if (this.shadow.firstChild) this.shadow.firstChild.remove();
            if (counter > 3) clearInterval(intervalId);
            const style = document.createElement("style");
            style.innerHTML = `\n                .root{\n                    width :100%;\n                }\n                .timer-container{\n                    border : solid 4px;\n                    border-radius: 50%;\n                    width: 200px;\n                    height : 200px;\n                    display: flex;\n                    flex-direction: column;\n                    align-items: center;\n                }\n                .timer{\n                    font-size : 100px;\n                    margin: auto;\n                }\n            `;
            div.appendChild(style);
            this.shadow.appendChild(div);
        }, 1000);
    }
}
customElements.define("the-timer", Timer);

},{}],"1a1ti":[function(require,module,exports) {

},{}],"b2iia":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initRouter", ()=>initRouter
);
/*  aca se importan las paginas para usarlas en nuestra base de datos 
    sobre nuestras escenas.
*/ var _home = require("./pages/home");
var _rules = require("./pages/rules");
var _ingamePage = require("./pages/ingamePage");
var _result = require("./pages/result");
var _choices = require("./pages/choices");
function initRouter(container) {
    const routes = [
        {
            path: /\/home/,
            component: _home.initHomePage
        },
        {
            path: /\/desafio-apx/,
            handler: _home.initHomePage
        },
        {
            path: /\/rules/,
            component: _rules.initRules
        },
        {
            path: /\/ingame/s,
            component: _ingamePage.initGamePage
        },
        {
            path: /\/choices/,
            component: _choices.initChoices
        },
        {
            path: /\/result/,
            component: _result.initResultPage
        }
    ];
    function goTo(path) {
        history.pushState({
        }, "", path);
        handleRoute(path);
    }
    function handleRoute(route) {
        for (let r of routes)if (r.path.test(route)) {
            const el = r.component({
                goTo: goTo
            });
            if (container.firstChild) container.firstChild.remove();
            container.appendChild(el);
        }
    }
    location.host.includes("github.io") || "/";
    goTo("/desafio-apx/home");
    window.onpopstate = function() {
        handleRoute(location.pathname);
    };
}

},{"./pages/home":"jrMbi","./pages/rules":"dOTNr","./pages/ingamePage":"i55yI","./pages/result":"hvnGp","./pages/choices":"h7GcF","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"jrMbi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initHomePage", ()=>initHomePage
);
function initHomePage(params) {
    const div = document.createElement("div");
    div.className = "container-homepage";
    div.innerHTML = `\n        <div  class="title-container">\n            <h1 class="piedra">Piedra</h1>\n            <span class="papel">Papel <span class="o-word">ó</span></span>\n            <span class="tijera">Tijera</span>\n        </div>\n        <div class="b-container">\n            <my-button id="button-id">Comenzar</my-button>\n        </div>\n        <div class="container-hands">\n            <rps-hands class="hola"></rps-hands>\n        </div>\n    `;
    const buttonEl = div.querySelector("#button-id");
    buttonEl.addEventListener("click", (e)=>{
        params.goTo("desafio-apx/rules");
    });
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"dOTNr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initRules", ()=>initRules
);
function initRules(params) {
    const div = document.createElement('div');
    div.className = "container";
    div.innerHTML = `\n        <div class="text-container">\n            <p class="text">Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los 3 segundos .</p>\n        </div>\n        <div class="button-container">\n            <my-button id="button">¡Jugar!</my-button>\n        </div>\n        <div class="img-container">\n            <rps-hands></rps-hands>\n        </div>\n\n    `;
    const buttonId = div.querySelector("#button");
    buttonId.addEventListener("click", ()=>{
        params.goTo("desafio-apx/ingame");
    });
    return div;
/* estaba por añadirle styles a los containers */ }

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"i55yI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initGamePage", ()=>initGamePage
);
var _state = require("../../state");
function initGamePage(params) {
    const currentState = _state.state.getState();
    const div = document.createElement("div");
    div.className = "container";
    div.innerHTML = `\n    <h2 class="title"> ¡Elige una opción!</h2>\n    <div class="timer-container">\n    <the-timer id="timer"></the-timer> \n    </div>\n    <p class="your-move">tu jugada :</p>\n    <p class="move-receptor">${currentState.currentGame.playerMove}</p>\n    <div class="hands-container">\n    <rps-hands></rps-hands>\n    </div>\n    `;
    _state.state.suscribe(()=>{
        const pEl = div.querySelector(".move-receptor");
        const pElContent = pEl.textContent = currentState.currentGame.playerMove;
        const moves = [
            "piedra",
            "papel",
            "tijeras"
        ];
        let move = moves[Math.floor(Math.random() * moves.length)];
        _state.state.data.currentGame.computerMove = "";
        _state.state.setComputerMove(move);
        _state.state.result(currentState.playerMove, currentState.computerMove);
    });
    function goToChoices() {
        setTimeout(()=>{
            params.goTo("desafio-apx/choices");
        }, 5000);
    }
    goToChoices();
    return div;
}

},{"../../state":"28XHA","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"hvnGp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initResultPage", ()=>initResultPage
);
var _state = require("../../state");
const winURL = require("url:../../images/star.png");
const loseURL = require("url:../../images/Star2.png");
const tieURL = require("url:../../images/tie-game.jpg");
function initResultPage(params) {
    const currentState = _state.state.getState();
    const div = document.createElement('div');
    div.innerHTML = `\n    <div class="result-img">\n        <p id="text" class="result-text">Ganaste!</p>\n        <img src=${winURL} id="image-id"class="img">\n    </div>\n    <div class="content">\n        <div class="scoreboard-container">\n            <h4 class="scoreboard__title">Puntaje</h4>\n            <p class="scoreboard__player">Vos :${currentState.playerScore}</p>\n            <p class="scoreboard__computer">Máquina:${currentState.computerScore}</p>\n        </div>\n        <div class="butt-container">\n            <my-button id="play-again-button">Volver a jugar</my-button>\n        </div>\n    </div>\n    `;
    const imgEl = div.querySelector("#image-id");
    const textEl = div.querySelector("#text");
    if (currentState.winner == "player") {
        imgEl.setAttribute("src", winURL);
        textEl.textContent = "¡Ganaste!";
    }
    if (currentState.winner == "computer") {
        imgEl.setAttribute("src", loseURL);
        textEl.textContent = "¡Perdiste!";
    }
    if (currentState.winner == "") {
        imgEl.setAttribute("src", tieURL);
        textEl.textContent = "¡Empate!";
    }
    const buttonEl = div.querySelector("#play-again-button");
    buttonEl.addEventListener("click", ()=>{
        params.goTo("desafio-apx/ingame");
    });
    return div;
}

},{"../../state":"28XHA","url:../../images/star.png":"d8V6h","url:../../images/Star2.png":"kAKt1","url:../../images/tie-game.jpg":"4Cym7","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"d8V6h":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('Z8Pbo') + "star.4f11a84e.png";

},{"./helpers/bundle-url":"8YnfL"}],"kAKt1":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('Z8Pbo') + "Star2.eeca3e61.png";

},{"./helpers/bundle-url":"8YnfL"}],"4Cym7":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('Z8Pbo') + "tie-game.8a945947.jpg";

},{"./helpers/bundle-url":"8YnfL"}],"h7GcF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initChoices", ()=>initChoices
);
var _state = require("../../state");
const piedraURL = require("url:../../images/piedra.png");
const papelURL = require("url:../../images/papel.png");
const tijerasURL = require("url:../../images/tijera.png");
function initChoices(params) {
    const div = document.createElement('div');
    div.className = "container-choices";
    div.innerHTML = `\n        <div class="computer-choice" >\n            <img src=${""} ; class="computer-choice__img" id="computer-move">\n        </div>\n        <div class="player-choice">\n            <img src=${""} ; class="player-choice__img" id="player-move">\n        </div>\n    `;
    const playerimgEl = div.querySelector("#player-move");
    if (_state.state.data.currentGame.playerMove == "piedra") playerimgEl.src = piedraURL;
    if (_state.state.data.currentGame.playerMove == "papel") playerimgEl.src = papelURL;
    if (_state.state.data.currentGame.playerMove == "tijeras") {
        playerimgEl.src = tijerasURL;
        console.log("hola soy tijeras");
    }
    const botimgEl = div.querySelector("#computer-move");
    if (_state.state.data.currentGame.computerMove == "piedra") {
        botimgEl.src = piedraURL;
        botimgEl.setAttribute("src", piedraURL);
    }
    if (_state.state.data.currentGame.computerMove == "papel") botimgEl.src = papelURL;
    if (_state.state.data.currentGame.computerMove == "tijeras") {
        botimgEl.src = tijerasURL;
        console.log("hola soy tijeras");
    }
    function goToResultsPage() {
        setTimeout(()=>{
            params.goTo("/result");
        }, 2000);
    }
    goToResultsPage();
    return div;
}

},{"../../state":"28XHA","url:../../images/piedra.png":"jQlP3","url:../../images/papel.png":"8lgLG","url:../../images/tijera.png":"5iyAz","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}]},["8uBhv","4aleK"], "4aleK", "parcelRequireca0a")

//# sourceMappingURL=index.b31310b1.js.map
