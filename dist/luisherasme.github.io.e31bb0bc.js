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
})({"index.js":[function(require,module,exports) {
var lista = document.getElementById("listaDeProyectos");
var proyectos = [{
  link: "./optical/vid.mp4",
  img: "./img/optic.png",
  name: "Optical communication system"
}, {
  link: "https://github.com/LuisHerasme/Raycasting-python",
  img: "https://github.com/LuisHerasme/Raycasting-python/blob/master/show.gif?raw=true",
  name: "3D raycasting made in python"
}, {
  link: "https://github.com/LuisHerasme/Render",
  img: "https://raw.githubusercontent.com/LuisHerasme/Render/master/show.gif",
  name: "Render 3D, (Python)"
}, {
  link: "./fractalsWGL/index.html",
  img: "./img/fractalWebGl.png",
  name: "Fractales WebGL"
}, {
  link: "",
  img: "./img/SistemaGestionHogar.png",
  name: "Home management system (C)"
}, {
  link: "https://luisagario.herokuapp.com/",
  img: "./img/luisagario.png",
  name: "LuisAgario"
}, {
  link: "",
  img: "./img/hotdog.png",
  name: "Hot dog or not"
}, {
  link: "https://github.com/LuisHerasme/Game-made-in-C",
  img: "./img/zombie.png",
  name: "Zombie"
}, {
  link: "https://github.com/LuisHerasme/intec_man",
  img: "./img/intecMan.png",
  name: "IntecMan"
}, {
  link: "./Fractales/index.html",
  img: "./img/fractales.png",
  name: "Fractales"
}, {
  link: "./coins/index.html",
  img: "./img/coins.png",
  name: "KonCoins"
}, {
  link: "https://suplementos-santo-domingo.herokuapp.com/",
  img: "./img/suplementos.png",
  name: "Suplementos santo domingo"
}, {
  link: "./Gravity/index.html",
  img: "./img/Gravity.png",
  name: "Gravity"
}, {
  link: "./game project/P/index.html",
  img: "./img/aventurero.png",
  name: "Aventurero"
}, {
  link: "http://comprayapp.com/",
  img: "./img/comprayapp.png",
  name: "comprayapp"
}, {
  link: "./2d/index.html",
  img: "./img/2D Collisions.png",
  name: "2D Particles simulation"
}, {
  link: "./3d/index.html",
  img: "./img/3D Collisions.png",
  name: "3D Particles simulation"
}, {
  link: "./snake/index.html",
  img: "./img/Snake.png",
  name: "Snake game"
}, {
  link: "./cubeGame/index.html",
  img: "./img/gameOfCubes.png",
  name: "Game of cubes"
}, {
  link: "./eco/index.html",
  img: "./img/Evolution.png",
  name: "Ecosistem simulation"
}, {
  link: "./Ecosistem simulator/index.html",
  img: "./img/Evolution2.png",
  name: "Ecosistem simulation2"
}, {
  link: "./tree/index.html",
  img: "./img/Tree.png",
  name: "Tree generator"
}, {
  link: "./Planet formation/index.html",
  img: "./img/Planet.png",
  name: "Planet formation"
}, {
  link: "https://luisherasme.github.io/LienzoEngine/",
  img: "./img/lienzoengine.png",
  name: "Lienzo Engine"
}, {
  link: "./Electricity/index.html",
  img: "./img/Electricity.png",
  name: "Electricity",
  desciption: "Simulacion del comportamiento de particulas cargadas."
}, {
  link: "./Tanks/index.html",
  img: "./img/Tanks.png",
  name: "Tanks Game"
}, {
  link: "./Cellular Automata/index.html",
  img: "./img/Celular.png",
  name: "Cellular automata"
}, {
  link: "./spaceShip/index.html",
  img: "./img/Space.png",
  name: "Spaceship"
}, {
  link: "./Evol/index.html",
  img: "./img/Evol.png",
  name: "Evolution"
}];

var des = function des(d) {
  if (!d) return "No descripción disponible.";
  return d;
};

for (var counter = 0; counter < proyectos.length;) {
  var cards = document.createElement("div");
  cards.setAttribute("class", "row");

  for (var i = 0; i < 3; i++) {
    if (counter < proyectos.length) {
      var proyecto = proyectos[counter];
      counter++;
      var card = document.createElement("div");
      card.setAttribute("class", "col-md-4 col-sm-12");
      card.setAttribute("style", "padding: 0px 7.5px 0px 7.5px;");
      card.innerHTML = "\n        <div class=\"card mb-3\" style=\"border-radius: 0px;\">\n          <a href=\"".concat(proyecto.link, "\">\n            <div class=\"embed-responsive embed-responsive-16by9\">\n              <img class=\"card-img-top embed-responsive-item\" style=\"border-radius: 0px;\" src=\"").concat(proyecto.img, "\">\n            </div>\n          </a>\n          <div class=\"card-body\">\n            <div class=\"card-title mb-0\">\n              <span class=\"truncate card-title\">").concat(proyecto.name, "</span>\n            </div>\n          </div>\n        </div>\n    ");
      cards.appendChild(card);
    }
  }

  lista.appendChild(cards);
}
},{}],"../../../AppData/Roaming/npm/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60220" + '/');

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
},{}]},{},["../../../AppData/Roaming/npm/node_modules/parcel/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/luisherasme.github.io.e31bb0bc.js.map