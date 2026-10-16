Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_GoodgameBitmapEngine = require("gge-module:class_GoodgameBitmapEngine");
var __dep_class_ClipCacheController = require("gge-module:class_ClipCacheController");
var __dep_class_ContinueLoadingTexturePackerClipSource = require("gge-module:class_ContinueLoadingTexturePackerClipSource");
var __dep_class_DisplayObjectClipSource = require("gge-module:class_DisplayObjectClipSource");
var __dep_class_ExternalDisplayObjectClipSource = require("gge-module:class_ExternalDisplayObjectClipSource");
var __dep_class_ExternalTexturePackerClipSource = require("gge-module:class_ExternalTexturePackerClipSource");
var __s0local0 = function () {
  function ClipSourceFactory(__s3param0 = false, __s3param1 = null) {
    this._debugMode = false;
    this._cacheController = new __dep_class_ClipCacheController.ClipCacheController();
    this._debugMode = __s3param0;
    if (__s3param1) {
      this.cacheController = __s3param1;
    }
  }
  Object.defineProperty(ClipSourceFactory.prototype, "cacheController", {
    get: function () {
      return this._cacheController;
    },
    set: function (__s8param0) {
      if (this._cacheController) {
        this._cacheController.dispose();
      }
      this._cacheController = __s8param0;
    },
    enumerable: true,
    configurable: true
  });
  ClipSourceFactory.prototype.getClipSource = function (__s11param0, __s11param1 = null, __s11param2 = null, __s11param3 = false) {
    var __s11local0 = __s11param0.toString();
    var __s11local1 = __dep_class_GoodgameBitmapEngine.GoodgameBitmapEngine.cacheController.getCache(__s11local0, __s11param2);
    if (!__s11local1) {
      (__s11local1 = __s11param1 ? new __s11param1() : new __dep_class_DisplayObjectClipSource.DisplayObjectClipSource()).convertClass(__s11param0, __s11param2, this.getNextRandomDebugColor(), __s11param3);
      __dep_class_GoodgameBitmapEngine.GoodgameBitmapEngine.cacheController.addToCache(__s11local0, __s11local1);
    }
    return __s11local1;
  };
  ClipSourceFactory.prototype.getExternalClipSource = function (__s14param0, __s14param1, __s14param2 = null, __s14param3 = null, __s14param4 = null, __s14param5 = false, __s14param6 = 1) {
    var __s14local0 = __s14param0;
    var __s14local1 = __dep_class_GoodgameBitmapEngine.GoodgameBitmapEngine.cacheController.getCache(__s14local0, __s14param2);
    if (!__s14local1) {
      if (__s14param3) {
        (__s14local1 = __s14param4 ? new __s14param3(__s14param4) : new __s14param3()).initExternalClipSource(__s14param0, __s14param1, __s14param2, this.getNextRandomDebugColor(), __s14param5, __s14param6);
      } else {
        (__s14local1 = new __dep_class_ExternalDisplayObjectClipSource.ExternalDisplayObjectClipSource()).initExternalClipSource(__s14param0, __s14param1, __s14param2, this.getNextRandomDebugColor(), __s14param5, __s14param6);
      }
      __dep_class_GoodgameBitmapEngine.GoodgameBitmapEngine.cacheController.addToCache(__s14local0, __s14local1);
    }
    return __s14local1;
  };
  ClipSourceFactory.prototype.getExternalTexturePackerClipSource = function (__s19param0, __s19param1, __s19param2 = 1) {
    var __s19local0 = __s19param0;
    var __s19local1 = __dep_class_GoodgameBitmapEngine.GoodgameBitmapEngine.cacheController.getCache("externaltp_" + __s19local0, []);
    if (!__s19local1) {
      var __s19local2 = new __dep_class_ExternalTexturePackerClipSource.ExternalTexturePackerClipSource();
      __s19local2.initExternalClipSource(__s19param0, __s19param1, null, 0, false, __s19param2);
      __s19local1 = __s19local2;
      __dep_class_GoodgameBitmapEngine.GoodgameBitmapEngine.cacheController.addToCache("externaltp_" + __s19local0, __s19local1);
    }
    return __s19local1;
  };
  ClipSourceFactory.prototype.getContinuesLoadedTexturePackerClipSource = function (__s22param0, __s22param1, __s22param2 = 1) {
    var __s22local0 = __s22param0;
    var __s22local1 = __dep_class_GoodgameBitmapEngine.GoodgameBitmapEngine.cacheController.getCache("externaltp_" + __s22local0, []);
    if (!__s22local1) {
      var __s22local2 = new __dep_class_ContinueLoadingTexturePackerClipSource.ContinueLoadingTexturePackerClipSource();
      __s22local2.initExternalClipSource(__s22param0, __s22param1, null, 0, false, __s22param2);
      __s22local1 = __s22local2;
      __dep_class_GoodgameBitmapEngine.GoodgameBitmapEngine.cacheController.addToCache("externaltp_" + __s22local0, __s22local1);
    }
    return __s22local1;
  };
  ClipSourceFactory.prototype.getNextRandomDebugColor = function () {
    if (this._debugMode) {
      return Number.MAX_VALUE * Math.random() + 1;
    } else {
      return 0;
    }
  };
  return ClipSourceFactory;
}();
exports.ClipSourceFactory = __s0local0;
