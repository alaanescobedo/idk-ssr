// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
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
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
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
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"7JtaB":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "76149d3b04107eb7";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
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
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
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
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
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

},{}],"8OWdr":[function(require,module,exports) {
var _coreJs = require("./components/core.js");
var _indexJs = require("./services/index.js");
const logout = ()=>{
    (0, _indexJs.localUser).remove();
    location.reload();
};
const main = async ()=>{
    const user = await (0, _indexJs.localUser).get() ?? null;
    (0, _coreJs.bootstrapComponents)(user);
    if (user) {
        const btnLogout = document.getElementById("btn-logout");
        btnLogout.addEventListener("click", logout);
    }
};
main();

},{"./components/core.js":"g4OdF","./services/index.js":"i33Qk"}],"g4OdF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bootstrapComponents", ()=>bootstrapComponents);
var _indexJs = require("./index.js");
const bootstrapComponents = (user)=>{
    (0, _indexJs.navbar)(user);
    (0, _indexJs.footer)();
};

},{"./index.js":"c2Vsv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c2Vsv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "footer", ()=>(0, _footerJsDefault.default));
parcelHelpers.export(exports, "navbar", ()=>(0, _navbarJsDefault.default));
var _footerJs = require("./footer/footer.js");
var _footerJsDefault = parcelHelpers.interopDefault(_footerJs);
var _navbarJs = require("./navbar/navbar.js");
var _navbarJsDefault = parcelHelpers.interopDefault(_navbarJs);
var _productJs = require("./product/product.js");
parcelHelpers.exportAll(_productJs, exports);

},{"./footer/footer.js":"lwPZn","./navbar/navbar.js":"gbzvM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./product/product.js":"geZkh"}],"lwPZn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "loadFooter", ()=>loadFooter);
var _indexJs = require("../../constants/index.js");
const loadFooter = ()=>{
    const currentSite = (0, _indexJs.navLinks).find((navLink)=>window.location.pathname.toLowerCase() === navLink.href);
    const navbarHTML = `
    <div class="footer ${currentSite?.style ?? ""}">
      <div class="text-end py-2">
        <a href="#" type="button" class="btn btn-outline btn-md filter-invert"> <img class="img-fluid" 
        src=${new URL(require("d3a6948801a3d5a5"))} alt=""></a>
              
        <a href="#" type="button" class="btn btn-outline btn-md filter-invert"> <img class="img-fluid" 
        src=${new URL(require("3da80d684b83ff38"))} alt="Icono instagram"> </a>
        
        <a href="#" type="button" class="btn btn-outline btn-md filter-invert"> <img class="img-fluid" 
        src=${new URL(require("723cf6d956063b6e"))} alt="Icono"> </a>
        
        <a href="#" type="button" class="btn btn-outline btn-md filter-invert"> <img class="img-fluid" 
        src=${new URL(require("d6d202ee2fa6bfca"))} alt="Icono Whats App"> </a>
      </div>  
    </div>
  `;
    document.getElementById("footer").innerHTML = navbarHTML;
};
exports.default = loadFooter;

},{"../../constants/index.js":"68etJ","d3a6948801a3d5a5":"aAEXR","3da80d684b83ff38":"3oH4Y","723cf6d956063b6e":"2KgGf","d6d202ee2fa6bfca":"6dotC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"68etJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _endpointsJs = require("./endpoints.js");
parcelHelpers.exportAll(_endpointsJs, exports);
var _navbarDataJs = require("./navbar-data.js");
parcelHelpers.exportAll(_navbarDataJs, exports);
var _storageKeysJs = require("./storage-keys.js");
parcelHelpers.exportAll(_storageKeysJs, exports);

},{"./endpoints.js":"jzh5i","./navbar-data.js":"aAMz9","./storage-keys.js":"wotF7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jzh5i":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ENDPOINT", ()=>ENDPOINT);
const BASE_URL = "https://mockend.com/alaanescobedo/db-server";
const ENDPOINT = {
    PRODUCTS: `${BASE_URL}/products`,
    USERS: `${BASE_URL}/users`,
    EMAIL: `${BASE_URL}/email`,
    AUTH: `${BASE_URL}/auth`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
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

},{}],"aAMz9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "navLinks", ()=>navLinks);
parcelHelpers.export(exports, "excludeLinks", ()=>excludeLinks);
parcelHelpers.export(exports, "pathIcons", ()=>pathIcons);
const navLinks = [
    {
        href: "/",
        label: "Home",
        style: "home"
    },
    {
        href: "/editor.html",
        label: "Personaliza",
        style: "editor"
    },
    {
        href: "/productos.html",
        label: "Productos",
        style: "productos"
    },
    {
        href: "/contactanos.html",
        label: "Contactanos",
        style: "contactanos"
    },
    {
        href: "/about-us.html",
        label: "Nosotros",
        style: "about-us"
    },
    {
        href: "/login.html",
        label: "Login",
        style: "login"
    },
    {
        href: "/producto-info.html",
        style: "producto"
    }, 
];
const excludeLinks = [
    "/login.html",
    "/register.html",
    "/index.html",
    "/producto-info.html",
    "/editor.html"
];
const pathIcons = {
    cart: {
        label: "Carrito",
        path: new URL(require("3b29b0b9fed8b83c")),
        url: "#"
    },
    profile: {
        label: "Usuario",
        path: new URL(require("eedbcf55c7dd5bcb")),
        list: {
            offline: [
                `<li><a class="dropdown-item" href="/login.html">Iniciar sesión</a></li>`,
                `<li><a class="dropdown-item" href="/register.html">Registrate</a></li>`
            ],
            online: [
                `<li><button class="btn dropdown-item" id="btn-logout">Cerrar sesión</button></li>`, 
            ]
        }
    }
};

},{"3b29b0b9fed8b83c":"edgYT","eedbcf55c7dd5bcb":"ljY4l","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"edgYT":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("a8xtd") + "cart-fill.eb29dcba.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
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
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"ljY4l":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("a8xtd") + "person-circle.53fa02f7.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"wotF7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "STORAGE_KEYS", ()=>STORAGE_KEYS);
const STORAGE_KEYS = {
    CART: "sh_cart",
    USER: "current_user"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aAEXR":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("a8xtd") + "telegram.edaf03f6.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"3oH4Y":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("a8xtd") + "instagram.12b2393c.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"2KgGf":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("a8xtd") + "facebook.7df7655b.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"6dotC":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("a8xtd") + "whatsapp.63c84929.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"gbzvM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "loadNavbar", ()=>loadNavbar);
var _indexJs = require("../../constants/index.js");
var _navLinkJs = require("./nav-link.js");
var _navBtnIconJs = require("./nav-btn-icon.js");
const loadNavbar = (user)=>{
    const currentSite = (0, _indexJs.navLinks).find((navLink)=>location.pathname.toLowerCase() === navLink.href);
    let profileList;
    if (user?.id) profileList = (0, _indexJs.pathIcons).profile.list.online;
    else profileList = (0, _indexJs.pathIcons).profile.list.offline;
    const navbarHTML = `
    <div class="navbar nav ${currentSite?.style ?? ""} navbar-expand-lg navbar-light justify-content-center p-0" >
      <div class="container-fluid py-2 w-90">
        <a class="navbar-brand" href="/">
          <img
            src="https://i.postimg.cc/TwKBhCqZ/logo-basico.png"
            alt="logo"
            width="80"
            height="40"
            class="img-fluid"
            align="right"
          />
        </a>

    <!-- BOTÓN DE RESPONSIVE -->
    <button
      class="navbar-toggler border-white border-opacity-25 d-flex d-lg-none px-2"
      type="button"
      style="transform: scale(1.25)"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <img src="${new URL(require("a996204d0acf5e13"))}" class="fs-1 filter-invert" />
    </button>

    <!-- LINKS DE LA NAV -->
    <div class="collapse navbar-collapse justify-content-end gap-4" id="navbarSupportedContent">
      <ul class="navbar-nav nav text-center pb-lg-0">
      ${(0, _indexJs.navLinks).filter((link)=>!(0, _indexJs.excludeLinks).includes(link.href)).map((link)=>(0, _navLinkJs.generateNavLink)(link.href, link.label)).join("")}
      </ul>

      <!-- ICONOS DE CARRITO Y LOGIN -->
        <div class="d-flex justify-content-center gap-3 py-2 align-items-center" >
          ${(0, _navBtnIconJs.generateNavBtnIcon)((0, _indexJs.pathIcons).cart.label, (0, _indexJs.pathIcons).cart.path, (0, _indexJs.pathIcons).cart.url)}
          ${(0, _navBtnIconJs.generateNavDropdownIcon)(user?.username ?? (0, _indexJs.pathIcons).profile.label, (0, _indexJs.pathIcons).profile.path, profileList.join(""))}
        </div>
      </div>
    </div>
  </div>
`;
    document.getElementById("navbar").innerHTML = navbarHTML;
};
loadNavbar();
exports.default = loadNavbar;

},{"../../constants/index.js":"68etJ","./nav-link.js":"ewPFZ","./nav-btn-icon.js":"dDWFK","a996204d0acf5e13":"luj5H","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ewPFZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "generateNavLink", ()=>generateNavLink);
const generateNavLink = (href, label)=>`
  <li class="tab">
    <a
      class="nav-link fs-6 rounded"
      href="${href}"
    >
      ${label}
    </a>
  </li>`;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dDWFK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "generateNavBtnIcon", ()=>generateNavBtnIcon);
parcelHelpers.export(exports, "generateNavDropdownIcon", ()=>generateNavDropdownIcon);
const generateNavBtnIcon = (label, path, url)=>`
  <a class="d-flex gap-2 align-items-center" style="cursor: pointer; text-decoration:none;" href="${url}">
    <img class="w-100" style="filter: invert(1)" src="${path}" alt="${label}-icon" />
    <p class="fw-semibold text-white fs-6 m-0">${label}</p>
  </a>
  `;
const generateNavDropdownIcon = (label, path, list)=>`
  <div class="btn-group">
    <button class="btn btn-sm d-flex gap-2 align-items-center rounded dropdown-menu-end" type="button" data-bs-toggle="dropdown" aria-expanded="false">
      <img class="w-100" style="filter: invert(1)" src="${path}" alt="${label}-icon" />
      <p class="fw-semibold text-white fs-6 m-0">${label}</p>
    </button>
    <ul class="dropdown-menu dropdown-menu-lg-end dropdown-menu-dark border border-2 border-dark">
      ${list}
    </ul>
  </div>
`;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"luj5H":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("a8xtd") + "burger.fd3b82ab.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"geZkh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "generateCardProduct", ()=>generateCardProduct);
const generateCardProduct = (id, { name , by , img , price  })=>{
    const item = `
  <div class="col d-flex flex-column">
    <div class="flex flex-grow-1">
      <div>
          <p class="fw-bold fs-3 m-0 my-1">${name}</p>
          <span class="fw-bold fs-6 d-block text-uppercase">${by}</span>
      </div>
      <img class="w-50 my-3 img-fluid" src="${img}" >
    </div>
    <div>
      <p class="fw-bold fs-3 m-0 my-1">${price}</p>
      <a href="/product-info?id=${id}" class="btn my-3 btn-outline-secondary "> 
        ✧ ¿Deseas ver mas detalles? ✦
      </a>
    </div>
  </div>
  `;
    document.querySelector(id).innerHTML += item;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i33Qk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "products", ()=>(0, _productsJsDefault.default));
parcelHelpers.export(exports, "users", ()=>(0, _usersJsDefault.default));
parcelHelpers.export(exports, "emailMessage", ()=>(0, _emaiMessageJsDefault.default));
parcelHelpers.export(exports, "shoppingCart", ()=>(0, _localCartJsDefault.default));
parcelHelpers.export(exports, "localUser", ()=>(0, _localUserJsDefault.default));
var _productsJs = require("./products.js");
var _productsJsDefault = parcelHelpers.interopDefault(_productsJs);
var _usersJs = require("./users.js");
var _usersJsDefault = parcelHelpers.interopDefault(_usersJs);
var _emaiMessageJs = require("./emai-message.js");
var _emaiMessageJsDefault = parcelHelpers.interopDefault(_emaiMessageJs);
var _localCartJs = require("./local-cart.js");
var _localCartJsDefault = parcelHelpers.interopDefault(_localCartJs);
var _localUserJs = require("./local-user.js");
var _localUserJsDefault = parcelHelpers.interopDefault(_localUserJs);

},{"./products.js":"ikEhu","./users.js":"bNxaK","./emai-message.js":"39k2f","./local-cart.js":"8g3D8","./local-user.js":"d8OvD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ikEhu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "postProduct", ()=>postProduct);
parcelHelpers.export(exports, "getAllProducts", ()=>getAllProducts);
parcelHelpers.export(exports, "getProductById", ()=>getProductById);
parcelHelpers.export(exports, "getProductByCategory", ()=>getProductByCategory);
var _indexJs = require("../constants/index.js");
var _productJs = require("../models/product.js");
var _fetchJs = require("../utils/fetch.js");
var _fetchJsDefault = parcelHelpers.interopDefault(_fetchJs);
const postProduct = async ({ data  } = {})=>await (0, _fetchJsDefault.default).post(`${(0, _indexJs.ENDPOINT).PRODUCTS}`, {
        body: (0, _productJs.createLocalProduct)(data)
    });
const getAllProducts = async ({ limit  } = {
    limit: 10
})=>await (0, _fetchJsDefault.default).get(`${(0, _indexJs.ENDPOINT).PRODUCTS}?limit=${limit}`);
const getProductById = async (id)=>await (0, _fetchJsDefault.default).get(`${(0, _indexJs.ENDPOINT).PRODUCTS}/${id}`);
const getProductByCategory = async (category)=>await (0, _fetchJsDefault.default).get(`${(0, _indexJs.ENDPOINT).PRODUCTS}/category/${category}`);
exports.default = {
    postOne: postProduct,
    get: getAllProducts,
    getById: getProductById,
    getByCategory: getProductByCategory
};

},{"../constants/index.js":"68etJ","../models/product.js":"bvVwO","../utils/fetch.js":"l1uRr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bvVwO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createLocalProduct", ()=>createLocalProduct);
const createLocalProduct = (product)=>({
        name: product.name,
        description: product.description,
        description_short: product.description_short,
        price: product.price,
        category: product.category,
        img: product.img,
        stock: Number(product.stock)
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l1uRr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "get", ()=>get);
parcelHelpers.export(exports, "post", ()=>post);
const get = async (url, { headers ={}  } = {})=>{
    const requestOptions = {
        method: "GET",
        headers
    };
    const data = await fetch(url, requestOptions);
    return await data.json();
};
const post = async (url, { body , headers ={}  } = {})=>{
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            ...headers
        },
        body: JSON.stringify(body)
    };
    const data = await fetch(url, requestOptions);
    return await data.json();
};
exports.default = {
    get,
    post
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bNxaK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mockLoginUser", ()=>mockLoginUser);
parcelHelpers.export(exports, "getUserById", ()=>getUserById);
parcelHelpers.export(exports, "loginUser", ()=>loginUser);
parcelHelpers.export(exports, "registerUser", ()=>registerUser);
var _indexJs = require("../constants/index.js");
var _fetchJs = require("../utils/fetch.js");
var _fetchJsDefault = parcelHelpers.interopDefault(_fetchJs);
const mockLoginUser = (_data)=>(0, _fetchJsDefault.default).get(`${(0, _indexJs.ENDPOINT).USERS}/1`);
const getUserById = (id)=>(0, _fetchJsDefault.default).get(`${(0, _indexJs.ENDPOINT).USERS}/${id}`).catch((err)=>{
        throw err;
    });
const loginUser = ({ data  })=>(0, _fetchJsDefault.default).post(`${(0, _indexJs.ENDPOINT).USERS}/login`, {
        body: data
    });
const registerUser = ({ data  })=>(0, _fetchJsDefault.default).post(`${(0, _indexJs.ENDPOINT).USERS}`, {
        body: data
    }).catch((err)=>{
        throw err;
    });
exports.default = {
    register: registerUser,
    getById: getUserById,
    login: loginUser
};

},{"../constants/index.js":"68etJ","../utils/fetch.js":"l1uRr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"39k2f":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sendEmail", ()=>sendEmail);
var _endpointsJs = require("../constants/endpoints.js");
var _fetchJs = require("../utils/fetch.js");
var _fetchJsDefault = parcelHelpers.interopDefault(_fetchJs);
const sendEmail = ({ data  })=>(0, _fetchJsDefault.default).post(`${(0, _endpointsJs.ENDPOINT).EMAIL}`, {
        body: data
    }).catch((err)=>{
        throw err;
    });
exports.default = {
    send: sendEmail
};

},{"../constants/endpoints.js":"jzh5i","../utils/fetch.js":"l1uRr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8g3D8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addCartItem", ()=>addCartItem);
parcelHelpers.export(exports, "removeCartItem", ()=>removeCartItem);
parcelHelpers.export(exports, "getTotalPrice", ()=>getTotalPrice);
parcelHelpers.export(exports, "getTotalPriceByProduct", ()=>getTotalPriceByProduct);
parcelHelpers.export(exports, "getCartItems", ()=>getCartItems);
parcelHelpers.export(exports, "clearCartItems", ()=>clearCartItems);
var _localStorageJs = require("../utils/local-storage.js");
var _localCartJs = require("../models/local-cart.js");
var _storageKeysJs = require("../constants/storage-keys.js");
const addCartItem = (product)=>{
    let cart = (0, _localStorageJs.readLocalStorage)((0, _storageKeysJs.STORAGE_KEYS).CART) ?? [];
    const item = cart.find((item)=>item.id === product.id) ?? null;
    if (item === null) cart.push((0, _localCartJs.createCartItem)(product));
    else {
        console.log({
            item
        });
        cart.push((0, _localCartJs.createCartItem)(product, item.quantity + 1));
    }
    (0, _localStorageJs.writeLocalStorage)((0, _storageKeysJs.STORAGE_KEYS).CART, cart);
};
const removeCartItem = (id)=>{
    let cart = (0, _localStorageJs.readLocalStorage)((0, _storageKeysJs.STORAGE_KEYS).CART);
    if (cart === null) return;
    const item = cart.find((item)=>item.id === id);
    if (item === null) return;
    cart = cart.filter((item)=>item.id !== id);
    (0, _localStorageJs.writeLocalStorage)((0, _storageKeysJs.STORAGE_KEYS).CART, cart);
};
const getTotalPrice = ()=>{
    let cart = (0, _localStorageJs.readLocalStorage)((0, _storageKeysJs.STORAGE_KEYS).CART);
    if (cart === null) return;
    return cart.reduce((total, item)=>total + item.quantity * item.price, 0);
};
const getTotalPriceByProduct = (id)=>{
    let cart = (0, _localStorageJs.readLocalStorage)((0, _storageKeysJs.STORAGE_KEYS).CART);
    if (cart === null) return;
    const item = cart.filter((item)=>item.id === id);
    if (item.length === 0) return;
    return item[0].quantity * item[0].price;
};
const getCartItems = ()=>(0, _localStorageJs.readLocalStorage)((0, _storageKeysJs.STORAGE_KEYS).CART);
const clearCartItems = ()=>(0, _localStorageJs.writeLocalStorage)((0, _storageKeysJs.STORAGE_KEYS).CART, []);
exports.default = {
    addItem: addCartItem,
    getTotalPrice,
    getTotalPriceByProduct,
    getItems: getCartItems,
    removeItem: removeCartItem,
    clearItems: clearCartItems
};

},{"../utils/local-storage.js":"9IzQy","../models/local-cart.js":"3ke9H","../constants/storage-keys.js":"wotF7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9IzQy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "writeLocalStorage", ()=>writeLocalStorage);
parcelHelpers.export(exports, "readLocalStorage", ()=>readLocalStorage);
parcelHelpers.export(exports, "removeLocalStorage", ()=>removeLocalStorage);
parcelHelpers.export(exports, "clearLocalStorage", ()=>clearLocalStorage);
const writeLocalStorage = (key, value)=>localStorage.setItem(key, JSON.stringify(value));
const readLocalStorage = (key)=>JSON.parse(localStorage.getItem(key));
const removeLocalStorage = (key)=>localStorage.removeItem(key);
const clearLocalStorage = ()=>localStorage.clear();
exports.default = {
    write: writeLocalStorage,
    read: readLocalStorage,
    remove: removeLocalStorage,
    clear: clearLocalStorage
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3ke9H":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createCartItem", ()=>createCartItem);
const createCartItem = (product)=>({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        img: product.img,
        description: product.description,
        description_short: product.description_short
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d8OvD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setLocalUser", ()=>setLocalUser);
parcelHelpers.export(exports, "getLocalUser", ()=>getLocalUser);
parcelHelpers.export(exports, "removeLocalUser", ()=>removeLocalUser);
var _storageKeysJs = require("../constants/storage-keys.js");
var _localUserJs = require("../models/local-user.js");
var _localStorageJs = require("../utils/local-storage.js");
const setLocalUser = (userData)=>(0, _localStorageJs.writeLocalStorage)((0, _storageKeysJs.STORAGE_KEYS).USER, (0, _localUserJs.createLocalUser)(userData));
const getLocalUser = ()=>(0, _localStorageJs.readLocalStorage)((0, _storageKeysJs.STORAGE_KEYS).USER);
const removeLocalUser = ()=>(0, _localStorageJs.removeLocalStorage)((0, _storageKeysJs.STORAGE_KEYS).USER);
exports.default = {
    get: getLocalUser,
    set: setLocalUser,
    remove: removeLocalUser
};

},{"../constants/storage-keys.js":"wotF7","../models/local-user.js":"7PWgP","../utils/local-storage.js":"9IzQy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7PWgP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createLocalUser", ()=>createLocalUser);
const createLocalUser = (user)=>({
        id: user.id,
        username: user.username,
        email: user.email
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["7JtaB","8OWdr"], "8OWdr", "parcelRequire3b77")

//# sourceMappingURL=index.04107eb7.js.map
