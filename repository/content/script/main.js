/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/main/typescript/game/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/main/typescript/engine/Engine.ts":
/*!*****************************************************!*\
  !*** ./client/src/main/typescript/engine/Engine.ts ***!
  \*****************************************************/
/*! exports provided: Game, Renderer, FixedTimestepTimer, ResourcePool, ResourceLoader, ShaderResourceLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game/Game */ \"./client/src/main/typescript/engine/game/Game.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Game\", function() { return _game_Game__WEBPACK_IMPORTED_MODULE_0__[\"Game\"]; });\n\n/* harmony import */ var _graphics_Renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./graphics/Renderer */ \"./client/src/main/typescript/engine/graphics/Renderer.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Renderer\", function() { return _graphics_Renderer__WEBPACK_IMPORTED_MODULE_1__[\"Renderer\"]; });\n\n/* harmony import */ var _utility_FixedTimestepTimer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utility/FixedTimestepTimer */ \"./client/src/main/typescript/engine/utility/FixedTimestepTimer.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"FixedTimestepTimer\", function() { return _utility_FixedTimestepTimer__WEBPACK_IMPORTED_MODULE_2__[\"FixedTimestepTimer\"]; });\n\n/* harmony import */ var _resource_ResourcePool__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resource/ResourcePool */ \"./client/src/main/typescript/engine/resource/ResourcePool.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ResourcePool\", function() { return _resource_ResourcePool__WEBPACK_IMPORTED_MODULE_3__[\"ResourcePool\"]; });\n\n/* harmony import */ var _resource_ResourceLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resource/ResourceLoader */ \"./client/src/main/typescript/engine/resource/ResourceLoader.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ResourceLoader\", function() { return _resource_ResourceLoader__WEBPACK_IMPORTED_MODULE_4__[\"ResourceLoader\"]; });\n\n/* harmony import */ var _resource_resourceLoaders_ShaderResourceLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resource/resourceLoaders/ShaderResourceLoader */ \"./client/src/main/typescript/engine/resource/resourceLoaders/ShaderResourceLoader.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ShaderResourceLoader\", function() { return _resource_resourceLoaders_ShaderResourceLoader__WEBPACK_IMPORTED_MODULE_5__[\"ShaderResourceLoader\"]; });\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./client/src/main/typescript/engine/Engine.ts?");

/***/ }),

/***/ "./client/src/main/typescript/engine/game/Game.ts":
/*!********************************************************!*\
  !*** ./client/src/main/typescript/engine/game/Game.ts ***!
  \********************************************************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Game\", function() { return Game; });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar Game = /** @class */ (function () {\n    function Game(document) {\n        this.document = document;\n    }\n    Game.prototype.run = function () {\n        return __awaiter(this, void 0, void 0, function () {\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0: return [4 /*yield*/, this.startup()];\n                    case 1:\n                        _a.sent();\n                        this.frameTimer.start();\n                        return [2 /*return*/];\n                }\n            });\n        });\n    };\n    Object.defineProperty(Game.prototype, \"Title\", {\n        get: function () {\n            return this.title;\n        },\n        set: function (title) {\n            this.title = title;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Object.defineProperty(Game.prototype, \"FrameTimer\", {\n        get: function () {\n            return this.frameTimer;\n        },\n        set: function (frameTimer) {\n            this.frameTimer = frameTimer;\n            this.frameTimer.onStep = this.update.bind(this);\n            this.frameTimer.onTick = this.render.bind(this);\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Object.defineProperty(Game.prototype, \"Renderer\", {\n        get: function () {\n            return this.renderer;\n        },\n        set: function (renderer) {\n            this.renderer = renderer;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Object.defineProperty(Game.prototype, \"Document\", {\n        get: function () {\n            return this.document;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    return Game;\n}());\n\n\n\n//# sourceURL=webpack:///./client/src/main/typescript/engine/game/Game.ts?");

/***/ }),

/***/ "./client/src/main/typescript/engine/graphics/Renderer.ts":
/*!****************************************************************!*\
  !*** ./client/src/main/typescript/engine/graphics/Renderer.ts ***!
  \****************************************************************/
/*! exports provided: Renderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Renderer\", function() { return Renderer; });\nvar Renderer = /** @class */ (function () {\n    function Renderer(canvas) {\n        this.canvas = canvas;\n    }\n    Renderer.prototype.initialize = function () {\n        this.gl = this.canvas.getContext('webgl2', { antialias: false });\n        if (this.gl === null) {\n            // TODO: error handling\n        }\n        this.gl.clearColor(0.7, 0.1, 0.2, 1.0);\n    };\n    Renderer.prototype.clear = function () {\n        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);\n    };\n    Object.defineProperty(Renderer.prototype, \"Canvas\", {\n        get: function () {\n            return this.canvas;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    return Renderer;\n}());\n\n\n\n//# sourceURL=webpack:///./client/src/main/typescript/engine/graphics/Renderer.ts?");

/***/ }),

/***/ "./client/src/main/typescript/engine/resource/ResourceLoader.ts":
/*!**********************************************************************!*\
  !*** ./client/src/main/typescript/engine/resource/ResourceLoader.ts ***!
  \**********************************************************************/
/*! exports provided: ResourceLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ResourceLoader\", function() { return ResourceLoader; });\nvar ResourceLoader = /** @class */ (function () {\n    function ResourceLoader(extensions) {\n        this.extensions = extensions;\n    }\n    Object.defineProperty(ResourceLoader.prototype, \"Extensions\", {\n        get: function () {\n            return this.extensions;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    return ResourceLoader;\n}());\n\n\n\n//# sourceURL=webpack:///./client/src/main/typescript/engine/resource/ResourceLoader.ts?");

/***/ }),

/***/ "./client/src/main/typescript/engine/resource/ResourcePool.ts":
/*!********************************************************************!*\
  !*** ./client/src/main/typescript/engine/resource/ResourcePool.ts ***!
  \********************************************************************/
/*! exports provided: ResourcePool */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ResourcePool\", function() { return ResourcePool; });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar ResourcePool = /** @class */ (function () {\n    function ResourcePool() {\n        this.resourceLoaders = new Map();\n        this.resources = new Map();\n    }\n    ResourcePool.prototype.registerResourceLoader = function (resourceLoaderClass) {\n        if (!this.resourceLoaders.has(resourceLoaderClass.name)) {\n            this.resourceLoaders.set(resourceLoaderClass.name, new resourceLoaderClass());\n        }\n        else {\n            // TODO: Handle case when resource loader is already registered\n        }\n    };\n    ResourcePool.prototype.loadResource = function (url) {\n        return __awaiter(this, void 0, void 0, function () {\n            var extension, selectedResourceLoaders, resource;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0:\n                        extension = url.split('.').pop();\n                        selectedResourceLoaders = Array\n                            .from(this.resourceLoaders.values())\n                            .filter(function (resourceLoader) { return resourceLoader.Extensions.indexOf(extension) > -1; })[0];\n                        if (!selectedResourceLoaders) return [3 /*break*/, 2];\n                        return [4 /*yield*/, selectedResourceLoaders.load(url)];\n                    case 1:\n                        resource = _a.sent();\n                        this.resources.set(url, resource);\n                        _a.label = 2;\n                    case 2: return [2 /*return*/];\n                }\n            });\n        });\n    };\n    ResourcePool.prototype.getResource = function (url) {\n        return __awaiter(this, void 0, void 0, function () {\n            return __generator(this, function (_a) {\n                if (this.resources.has(url)) {\n                    return [2 /*return*/, this.resources.get(url)];\n                }\n                else {\n                    // TODO: Handle case where resource has not been loaded yet (autoload?)\n                }\n                return [2 /*return*/];\n            });\n        });\n    };\n    return ResourcePool;\n}());\n\n\n\n//# sourceURL=webpack:///./client/src/main/typescript/engine/resource/ResourcePool.ts?");

/***/ }),

/***/ "./client/src/main/typescript/engine/resource/resourceLoaders/ShaderResourceLoader.ts":
/*!********************************************************************************************!*\
  !*** ./client/src/main/typescript/engine/resource/resourceLoaders/ShaderResourceLoader.ts ***!
  \********************************************************************************************/
/*! exports provided: ShaderResourceLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ShaderResourceLoader\", function() { return ShaderResourceLoader; });\n/* harmony import */ var _ResourceLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ResourceLoader */ \"./client/src/main/typescript/engine/resource/ResourceLoader.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\n\nvar ShaderResourceLoader = /** @class */ (function (_super) {\n    __extends(ShaderResourceLoader, _super);\n    function ShaderResourceLoader() {\n        var _this = _super.call(this, [\n            'vert',\n            'frag'\n        ]) || this;\n        _this.loadTextFile = function (request) {\n            return new Promise(function (resolve) {\n                fetch(request)\n                    .then(function (response) { return response.text(); })\n                    .then(function (body) {\n                    resolve(body);\n                });\n            });\n        };\n        return _this;\n    }\n    ShaderResourceLoader.prototype.load = function (url) {\n        return __awaiter(this, void 0, void 0, function () {\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0:\n                        console.log('Loading resource ', url);\n                        return [4 /*yield*/, this.loadTextFile(url)];\n                    case 1: return [2 /*return*/, _a.sent()];\n                }\n            });\n        });\n    };\n    return ShaderResourceLoader;\n}(_ResourceLoader__WEBPACK_IMPORTED_MODULE_0__[\"ResourceLoader\"]));\n\n\n\n//# sourceURL=webpack:///./client/src/main/typescript/engine/resource/resourceLoaders/ShaderResourceLoader.ts?");

/***/ }),

/***/ "./client/src/main/typescript/engine/utility/FixedTimestepTimer.ts":
/*!*************************************************************************!*\
  !*** ./client/src/main/typescript/engine/utility/FixedTimestepTimer.ts ***!
  \*************************************************************************/
/*! exports provided: FixedTimestepTimer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FixedTimestepTimer\", function() { return FixedTimestepTimer; });\nvar FixedTimestepTimer = /** @class */ (function () {\n    function FixedTimestepTimer(desiredFPS) {\n        this.timestep = 1000 / desiredFPS;\n        this.lastFrameTimeInMS = 0;\n        this.deltaTime = 0;\n        this.onStep = null;\n        this.onTick = null;\n    }\n    FixedTimestepTimer.prototype.start = function () {\n        this.lastFrameTimeInMS = 0;\n        this.deltaTime = 0;\n        this.tick(0);\n    };\n    FixedTimestepTimer.prototype.tick = function (timestamp) {\n        this.deltaTime += timestamp - this.lastFrameTimeInMS;\n        this.lastFrameTimeInMS = timestamp;\n        while (this.deltaTime >= this.timestep) {\n            if (this.onStep !== null)\n                this.onStep(this.timestep);\n            this.deltaTime -= this.timestep;\n        }\n        if (this.onTick !== null)\n            this.onTick(timestamp);\n        requestAnimationFrame(this.tick.bind(this));\n    };\n    return FixedTimestepTimer;\n}());\n\n\n\n//# sourceURL=webpack:///./client/src/main/typescript/engine/utility/FixedTimestepTimer.ts?");

/***/ }),

/***/ "./client/src/main/typescript/game/MyGame.ts":
/*!***************************************************!*\
  !*** ./client/src/main/typescript/game/MyGame.ts ***!
  \***************************************************/
/*! exports provided: MyGame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MyGame\", function() { return MyGame; });\n/* harmony import */ var _engine_Engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../engine/Engine */ \"./client/src/main/typescript/engine/Engine.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\n\nvar MyGame = /** @class */ (function (_super) {\n    __extends(MyGame, _super);\n    function MyGame() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    MyGame.prototype.run = function () {\n        return __awaiter(this, void 0, void 0, function () {\n            return __generator(this, function (_a) {\n                _super.prototype.run.call(this);\n                return [2 /*return*/];\n            });\n        });\n    };\n    MyGame.prototype.startup = function () {\n        return __awaiter(this, void 0, void 0, function () {\n            var canvas, _a, _b;\n            return __generator(this, function (_c) {\n                switch (_c.label) {\n                    case 0:\n                        canvas = this.Document.createElement('canvas');\n                        canvas.width = 100;\n                        canvas.height = 100;\n                        this.Renderer = new _engine_Engine__WEBPACK_IMPORTED_MODULE_0__[\"Renderer\"](canvas);\n                        this.Renderer.initialize();\n                        this.FrameTimer = new _engine_Engine__WEBPACK_IMPORTED_MODULE_0__[\"FixedTimestepTimer\"](60);\n                        this.resourcePool = new _engine_Engine__WEBPACK_IMPORTED_MODULE_0__[\"ResourcePool\"]();\n                        this.resourcePool.registerResourceLoader(_engine_Engine__WEBPACK_IMPORTED_MODULE_0__[\"ShaderResourceLoader\"]);\n                        return [4 /*yield*/, this.resourcePool.loadResource('/content/resources/shaders/basic/main.vert')];\n                    case 1:\n                        _c.sent();\n                        _b = (_a = console).log;\n                        return [4 /*yield*/, this.resourcePool.getResource('/content/resources/shaders/basic/main.vert')];\n                    case 2:\n                        _b.apply(_a, [_c.sent()]);\n                        this.Document.body.appendChild(canvas);\n                        return [2 /*return*/];\n                }\n            });\n        });\n    };\n    MyGame.prototype.shutdown = function () {\n        return __awaiter(this, void 0, void 0, function () {\n            return __generator(this, function (_a) {\n                return [2 /*return*/];\n            });\n        });\n    };\n    MyGame.prototype.update = function (timestep) {\n    };\n    MyGame.prototype.render = function () {\n        this.Renderer.clear();\n    };\n    return MyGame;\n}(_engine_Engine__WEBPACK_IMPORTED_MODULE_0__[\"Game\"]));\n\n\n\n//# sourceURL=webpack:///./client/src/main/typescript/game/MyGame.ts?");

/***/ }),

/***/ "./client/src/main/typescript/game/main.ts":
/*!*************************************************!*\
  !*** ./client/src/main/typescript/game/main.ts ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _MyGame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MyGame */ \"./client/src/main/typescript/game/MyGame.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\n\n(function (document) {\n    return __awaiter(this, void 0, void 0, function () {\n        var game;\n        return __generator(this, function (_a) {\n            game = new _MyGame__WEBPACK_IMPORTED_MODULE_0__[\"MyGame\"](document);\n            game.run();\n            return [2 /*return*/];\n        });\n    });\n})(document);\n\n\n//# sourceURL=webpack:///./client/src/main/typescript/game/main.ts?");

/***/ })

/******/ });