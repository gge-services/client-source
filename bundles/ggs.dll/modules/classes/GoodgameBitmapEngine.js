Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_BulkLoader = require("gge-module:class_BulkLoader");
var __dep_class_ClipSourceFactory = require("gge-module:class_ClipSourceFactory");
var __dep_class_AnimationManager = require("gge-module:class_AnimationManager");
var __dep_exact_14ac9999fc46bb45 = require("gge-module:exact_14ac9999fc46bb45");
var __dep_class_ClipCacheController = require("gge-module:class_ClipCacheController");
var __s0local0 = function () {
  function GoodgameBitmapEngine() {
    this._smoothing = false;
    this._allowQualityChangeOnBitmapCreation = true;
    this._debugShowPlaceholder = false;
  }
  Object.defineProperty(GoodgameBitmapEngine, "bulkLoader", {
    get: function () {
      return GoodgameBitmapEngine._bulkLoader;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameBitmapEngine, "instance", {
    get: function () {
      GoodgameBitmapEngine._instance ||= new GoodgameBitmapEngine();
      return GoodgameBitmapEngine._instance;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameBitmapEngine, "clipFactory", {
    get: function () {
      if (GoodgameBitmapEngine._clipFactory) {
        return GoodgameBitmapEngine._clipFactory;
      } else {
        __dep_exact_14ac9999fc46bb45.fatal("clip factory not initalized");
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameBitmapEngine, "cacheController", {
    get: function () {
      return GoodgameBitmapEngine._cacheController;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameBitmapEngine.prototype, "smoothing", {
    get: function () {
      return this._smoothing;
    },
    set: function (__s17param0) {
      this._smoothing = __s17param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameBitmapEngine.prototype, "pixelSnapping", {
    get: function () {
      return "";
    },
    set: function (__s21param0) {},
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameBitmapEngine, "useCacheAsBitmapForDisplayObjects", {
    get: function () {
      return GoodgameBitmapEngine._useCacheAsBitmapForDisplayObjects;
    },
    set: function (__s25param0) {
      GoodgameBitmapEngine._useCacheAsBitmapForDisplayObjects = __s25param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameBitmapEngine.prototype, "debugShowPlaceholder", {
    get: function () {
      return this._debugShowPlaceholder;
    },
    set: function (__s29param0) {
      this._debugShowPlaceholder = __s29param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameBitmapEngine.prototype, "animationManager", {
    get: function () {
      if (this._animationManager) {
        return this._animationManager;
      } else {
        __dep_exact_14ac9999fc46bb45.fatal("animation manager not initalized");
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameBitmapEngine, "stage", {
    get: function () {
      return GoodgameBitmapEngine._stage;
    },
    enumerable: true,
    configurable: true
  });
  GoodgameBitmapEngine.setStageQuality = function (__s37param0) {
    GoodgameBitmapEngine._stage;
  };
  GoodgameBitmapEngine.prototype.init = function (__s39param0, __s39param1 = false, __s39param2 = null) {
    GoodgameBitmapEngine._stage = __s39param0;
    GoodgameBitmapEngine._bulkLoader = __s39param2 || new __dep_class_BulkLoader.BulkLoader("BitmapEngineLoader");
    this._animationManager = new __dep_class_AnimationManager.AnimationManager();
    GoodgameBitmapEngine._clipFactory = new __dep_class_ClipSourceFactory.ClipSourceFactory(__s39param1);
    GoodgameBitmapEngine._cacheController = new __dep_class_ClipCacheController.ClipCacheController();
  };
  Object.defineProperty(GoodgameBitmapEngine, "itemJsonData", {
    get: function () {
      return GoodgameBitmapEngine._itemJsonData;
    },
    set: function (__s43param0) {
      GoodgameBitmapEngine._itemJsonData = __s43param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameBitmapEngine.prototype, "allowQualityChangeOnBitmapCreation", {
    get: function () {
      return this._allowQualityChangeOnBitmapCreation;
    },
    set: function (__s47param0) {
      this._allowQualityChangeOnBitmapCreation = __s47param0;
    },
    enumerable: true,
    configurable: true
  });
  GoodgameBitmapEngine.numConnections = 0;
  GoodgameBitmapEngine._useCacheAsBitmapForDisplayObjects = true;
  return GoodgameBitmapEngine;
}();
exports.GoodgameBitmapEngine = __s0local0;
