Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_AbstractDisplayObjectClip = require("gge-module:class_AbstractDisplayObjectClip");
var __dep_class_GoodgameBitmapEngine = require("gge-module:class_GoodgameBitmapEngine");
var __dep_class_ClipLayerInfo = require("gge-module:class_ClipLayerInfo");
var __dep_exact_becd07da092f4a09 = require("gge-module:exact_becd07da092f4a09");
var __dep_export_CSSMouseCursor = require("gge-module:export_CSSMouseCursor");
var __s0local0 = createjs.Event;
var __s0local1 = createjs.MovieClip;
var __s0local2 = function (__s1param0) {
  function GoodgameDisplayObjectClipExternal(__s3param0, __s3param1, __s3param2 = null, __s3param3 = 24, __s3param4 = true, __s3param5 = null, __s3param6 = false, __s3param7 = 1, __s3param8 = false, __s3param9 = false) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._isLoaded = false;
    __s3local0._bitmapClone = [];
    __s3local0._clipLoaded = new __dep_exact_becd07da092f4a09.PrioritySignal(GoodgameDisplayObjectClipExternal);
    __s3local0.animationManager = __dep_class_GoodgameBitmapEngine.GoodgameBitmapEngine.instance.animationManager;
    __s3local0.sourceClassName = __s3param0;
    __s3local0.sourcePath = __s3param1;
    __s3local0.clipColor = __s3param2;
    __s3local0.targetFps = __s3param3;
    __s3local0.priority = __s3param7;
    __s3local0._running = __s3param4;
    __s3local0.hasSubLayer = __s3param6;
    __s3local0._delayLoadingUntilFree = __s3param9;
    __s3local0.animationColorChange = __s3param8;
    __s3local0._startFrame = 1;
    __s3local0.placeholderClass = __s3param5;
    if (__s3local0._delayLoadingUntilFree) {
      __s3local0.delayLoading();
    } else {
      __s3local0.initLoading();
    }
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(GoodgameDisplayObjectClipExternal, __s1param0);
  Object.defineProperty(GoodgameDisplayObjectClipExternal.prototype, "isLoaded", {
    get: function () {
      return this._isLoaded;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameDisplayObjectClipExternal.prototype, "clipLoaded", {
    get: function () {
      return this._clipLoaded;
    },
    enumerable: true,
    configurable: true
  });
  GoodgameDisplayObjectClipExternal.prototype.initLoading = function () {
    if (this.canStartLoading()) {
      this.loadClip();
    } else {
      __dep_class_GoodgameBitmapEngine.GoodgameBitmapEngine.bulkLoader.addEventListener(__s0local0.COMPLETE, this.bindFunction(this.delayLoading));
    }
  };
  GoodgameDisplayObjectClipExternal.prototype.canStartLoading = function () {
    return !this._delayLoadingUntilFree || !!__dep_class_GoodgameBitmapEngine.GoodgameBitmapEngine.bulkLoader.isLoaded(this.sourcePath) || __dep_class_GoodgameBitmapEngine.GoodgameBitmapEngine.bulkLoader.isFinished;
  };
  GoodgameDisplayObjectClipExternal.prototype.delayLoading = function () {
    __dep_class_GoodgameBitmapEngine.GoodgameBitmapEngine.bulkLoader.removeEventListener(__s0local0.COMPLETE, this.bindFunction(this.delayLoading));
    if (__dep_class_GoodgameBitmapEngine.GoodgameBitmapEngine.bulkLoader.isLoaded(this.sourcePath)) {
      this.initLoading();
    } else {
      setTimeout(this.bindFunction(this.initLoading), 30);
    }
  };
  GoodgameDisplayObjectClipExternal.prototype.loadClip = function () {
    var __s21local0 = this.sourcePath.substring(this.sourcePath.lastIndexOf("/") + 1, this.sourcePath.length);
    var __s21local1 = __dep_class_GoodgameBitmapEngine.GoodgameBitmapEngine.bulkLoader.addAssetBundle(this.sourcePath, {
      id: __s21local0.replace(/--\d+/, ""),
      priority: this.priority
    });
    if (__s21local1._isLoaded) {
      this.onLoaded(null);
    } else {
      if (this.placeholderClass) {
        this.initCurrentClip(this.placeholderClass);
      }
      __s21local1.addEventListener(__s0local0.COMPLETE, this.bindFunction(this.onLoaded));
    }
    __dep_class_GoodgameBitmapEngine.GoodgameBitmapEngine.bulkLoader.start(__dep_class_GoodgameBitmapEngine.GoodgameBitmapEngine.numConnections);
  };
  GoodgameDisplayObjectClipExternal.prototype.isPureMoiveClip = function (__s26param0) {
    return GoodgameDisplayObjectClipExternal.EM_WALKERS.test(__s26param0);
  };
  GoodgameDisplayObjectClipExternal.prototype.onLoaded = function (__s28param0) {
    var __s28local0;
    if (this.currentDisplayObject) {
      this.removeChild(this.currentDisplayObject);
    }
    if (__s28local0 = __dep_class_GoodgameBitmapEngine.GoodgameBitmapEngine.cacheController.bitmapCache.get(this.sourceClassName)) {
      this.recycleAsset = false;
      this.currentDisplayObject = new __s0local1();
      this.currentDisplayObject.name = this.sourceClassName;
      if (this._running) {
        this.play();
      } else {
        this.stop();
      }
      this.currentDisplayObject.children.push(__s28local0[0]);
      this.animationLength = this._endFrame = __s28local0.length;
      this.refreshBounds(this.currentDisplayObject);
      this.addChild(this.currentDisplayObject);
    } else {
      var __s28local1;
      if (!(__s28local1 = __dep_export_CSSMouseCursor.getDefinitionByNameFromLibrary(this.sourceClassName))) {
        return;
      }
      this.initCurrentClip(__s28local1);
      if (this.currentDisplayObject instanceof __s0local1 && this.isPureMoiveClip(this.sourceClassName) && !__dep_class_GoodgameBitmapEngine.GoodgameBitmapEngine.cacheController.bitmapCache.get(this.sourceClassName)) {
        __dep_class_GoodgameBitmapEngine.GoodgameBitmapEngine.cacheController.bitmapCache.set(this.sourceClassName, this.convertMovieClip(this.currentDisplayObject));
        this.addChild(this.currentDisplayObject);
      }
    }
    this._isLoaded = true;
    this._clipLoaded.dispatch(this);
  };
  Object.defineProperty(GoodgameDisplayObjectClipExternal.prototype, "clipLayerInfo", {
    get: function () {
      if (!this._clipLayerInfo && this._isLoaded) {
        this._clipLayerInfo = new __dep_class_ClipLayerInfo.ClipLayerInfo(this.currentDisplayObject);
      }
      return this._clipLayerInfo;
    },
    enumerable: true,
    configurable: true
  });
  GoodgameDisplayObjectClipExternal.prototype.jumpToFrame = function (__s40param0) {
    var __s40local0;
    var __s40local1;
    if (this.currentDisplayObject && (__s40local0 = __dep_class_GoodgameBitmapEngine.GoodgameBitmapEngine.cacheController.bitmapCache.get(this.sourceClassName))) {
      if (this._bitmapClone.length === 0) {
        this.currentDisplayObject.removeAllChildren();
      }
      this.currentDisplayObject.children.splice(0, 1);
      if (!(__s40local1 = this._bitmapClone[__s40param0] ||= __s40local0[__s40param0 - 1].clone()).parent) {
        __s40local1.parent = this.currentDisplayObject;
      }
      this.currentDisplayObject.children.push(__s40local1);
    } else {
      __s1param0.prototype.jumpToFrame.call(this, __s40param0);
    }
    if (this.onFrameChangeCallback) {
      this.onFrameChangeCallback();
    }
  };
  GoodgameDisplayObjectClipExternal.prototype.dispose = function () {
    __s1param0.prototype.dispose.call(this);
    this._clipLoaded.removeAll();
  };
  GoodgameDisplayObjectClipExternal.prototype.setOnFrameChangeCallback = function (__s49param0) {
    this.onFrameChangeCallback = __s49param0;
  };
  GoodgameDisplayObjectClipExternal.EM_WALKERS = /(soldier_)|(male_(classic|dessert|eiland|icecream|volcano)|farhat_classic)/i;
  return GoodgameDisplayObjectClipExternal;
}(__dep_class_AbstractDisplayObjectClip.AbstractDisplayObjectClip);
exports.GoodgameDisplayObjectClipExternal = __s0local2;
