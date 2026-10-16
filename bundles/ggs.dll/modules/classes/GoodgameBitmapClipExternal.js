Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_GoodgameBitmapEngine = require("gge-module:class_GoodgameBitmapEngine");
var __dep_class_GoodgameBitmapClip = require("gge-module:class_GoodgameBitmapClip");
var __dep_exact_becd07da092f4a09 = require("gge-module:exact_becd07da092f4a09");
var __s0local0 = function (__s1param0) {
  function GoodgameBitmapClipExternal(__s3param0 = null, __s3param1 = 24, __s3param2 = true, __s3param3 = null) {
    var __s3local0 = __s1param0.call(this, __s3param0, __s3param1, __s3param2) || this;
    __s3local0._clipLoaded = new __dep_exact_becd07da092f4a09.Signal(GoodgameBitmapClipExternal);
    __s3local0.init();
    __s3local0.sourcePlaceholder = __s3param3;
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(GoodgameBitmapClipExternal, __s1param0);
  Object.defineProperty(GoodgameBitmapClipExternal.prototype, "clipLoaded", {
    get: function () {
      return this._clipLoaded;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameBitmapClipExternal.prototype, "frameStrip", {
    get: function () {
      if (this._currentSource) {
        return this._currentSource.frameStrip;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameBitmapClipExternal.prototype, "startFrame", {
    get: function () {
      if (this._currentSource == this.sourcePlaceholder) {
        return 1;
      } else {
        return this._startFrame;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameBitmapClipExternal.prototype, "endFrame", {
    get: function () {
      if (this._currentSource) {
        if (this._currentSource == this.sourcePlaceholder) {
          return this.sourcePlaceholder.frameStrip.frameAmount;
        } else {
          return this._endFrame;
        }
      } else {
        return 1;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameBitmapClipExternal.prototype, "clipSizeComponent", {
    set: function (__s21param0) {
      this._clipSizeComponent = __s21param0;
      if (this._clipSizeComponent && this._currentSource) {
        this._clipSizeComponent.setImageSize(this, this._currentSource.clipBounds);
        this._clipSizeComponent.clipSizeChanged.dispatch(this);
      }
    },
    enumerable: true,
    configurable: true
  });
  GoodgameBitmapClipExternal.prototype.init = function () {
    var __s24local0 = this.source;
    this._currentSource = this.sourcePlaceholder;
    if (this._currentSource) {
      this.bmpImage.scaleX = this.bmpImage.scaleY = 1 / this._currentSource.scaleFactor;
    }
    if (__s24local0) {
      if (__s24local0.isLoaded) {
        this.onLoaded(__s24local0);
      } else {
        if (this.sourcePlaceholder) {
          if (this.clipSizeComponent) {
            this.clipSizeComponent.setImageSize(this, this._currentSource.clipBounds);
          }
          this.play();
        }
        __s24local0.clipLoadedAndConverted.addOnce(this.bindFunction(this.onLoaded));
      }
    }
  };
  GoodgameBitmapClipExternal.prototype.onLoaded = function (__s32param0) {
    if (!__dep_class_GoodgameBitmapEngine.GoodgameBitmapEngine.instance.debugShowPlaceholder) {
      this._currentSource = this.source;
      this.bmpImage.scaleX = this.bmpImage.scaleY = 1 / this._currentSource.scaleFactor;
      this.sourcePlaceholder = null;
      if (this.clipSizeComponent) {
        this.clipSizeComponent.setImageSize(this, this._currentSource.clipBounds);
        this.clipSizeComponent.clipSizeChanged.dispatch(this);
      }
      this._endFrame = this._currentSource.frameStrip.frameAmount;
      this.jumpToFrame(this._startFrame);
      if (this.frameStrip && this.frameStrip.hasMultipleFrames && this._running) {
        this.play();
      } else {
        this.stop();
      }
      this._clipLoaded.dispatch(this);
    }
  };
  Object.defineProperty(GoodgameBitmapClipExternal.prototype, "currentSource", {
    get: function () {
      return this._currentSource;
    },
    enumerable: true,
    configurable: true
  });
  GoodgameBitmapClipExternal.prototype.dispose = function () {
    __s1param0.prototype.dispose.call(this);
    this.sourcePlaceholder = null;
    this._currentSource = null;
    this._clipLoaded.removeAll();
  };
  Object.defineProperty(GoodgameBitmapClipExternal.prototype, "destroyed", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  GoodgameBitmapClipExternal.prototype.renew = function () {
    var __s44local0 = [];
    for (var __s44local1 = 0; __s44local1 < arguments.length; __s44local1++) {
      __s44local0[__s44local1] = arguments[__s44local1];
    }
    this.sourcePlaceholder = __s44local0[0][3];
    this.source = __s44local0[0][0];
    this.targetFps = __s44local0[0][1];
    this._running = __s44local0[0][2];
    this.init();
  };
  GoodgameBitmapClipExternal.prototype.destroy = function () {
    this.dispose();
  };
  return GoodgameBitmapClipExternal;
}(__dep_class_GoodgameBitmapClip.GoodgameBitmapClip);
exports.GoodgameBitmapClipExternal = __s0local0;
