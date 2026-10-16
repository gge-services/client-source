Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_AbstractGoodgameClip = require("gge-module:class_AbstractGoodgameClip");
var __dep_exact_9036b0ddd67c3c6e = require("gge-module:exact_9036b0ddd67c3c6e");
var __dep_exact_14ac9999fc46bb45 = require("gge-module:exact_14ac9999fc46bb45");
var __dep_class_GoodgameBitmapEngine = require("gge-module:class_GoodgameBitmapEngine");
var __s0local0 = createjs.Bitmap;
var __s0local1 = createjs.Event;
var __s0local2 = createjs.Point;
var __s0local3 = function (__s1param0) {
  function GoodgameBitmapClip(__s3param0, __s3param1 = 24, __s3param2 = true) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._bmpImage = new __s0local0("");
    __s3local0.autoDispose = true;
    __s3local0._isInteractive = false;
    __s3local0._copiedBitmapFrame = [];
    __s3local0.animationManager = __dep_class_GoodgameBitmapEngine.GoodgameBitmapEngine.instance.animationManager;
    __s3local0.mouseChildren = false;
    __s3local0.mouseEnabled = false;
    __s3local0.source = __s3param0;
    __s3local0.targetFps = __s3param1;
    __s3local0._running = __s3param2;
    __s3local0._startFrame = 1;
    __s3local0.addEventListener(__s0local1.REMOVED_FROM_STAGE, __s3local0.bindFunction(__s3local0.handleRemovedFromStage));
    if (__s3local0.clipSizeComponent) {
      __s3local0.clipSizeComponent.setImageSize(__s3local0, __s3local0.source.clipBounds);
    }
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(GoodgameBitmapClip, __s1param0);
  Object.defineProperty(GoodgameBitmapClip.prototype, "bmpImage", {
    get: function () {
      return this._bmpImage;
    },
    set: function (__s8param0) {
      this._bmpImage = __s8param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameBitmapClip.prototype, "frameStrip", {
    get: function () {
      if (this.source) {
        return this.source.frameStrip;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameBitmapClip.prototype, "interactiveComponent", {
    get: function () {
      return this._interactiveComponent;
    },
    enumerable: true,
    configurable: true
  });
  GoodgameBitmapClip.prototype.dispose = function () {
    if (this._clipSizeComponent) {
      this._clipSizeComponent.destroy();
    }
    if (this._interactiveComponent) {
      this._interactiveComponent.dispose();
    }
    this._copiedBitmapFrame.forEach(function (__s20param0) {
      if (__s20param0 && __s20param0.parent) {
        __s20param0.parent = null;
      }
    });
    if (this._copiedBitmapFrame.length) {
      this._copiedBitmapFrame = [];
    }
  };
  Object.defineProperty(GoodgameBitmapClip.prototype, "clipSizeComponent", {
    set: function (__s24param0) {
      this._clipSizeComponent = __s24param0;
      if (this._clipSizeComponent) {
        this._clipSizeComponent.setImageSize(this, this.source.clipBounds);
        this._clipSizeComponent.clipSizeChanged.dispatch(this);
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameBitmapClip.prototype, "isInteractive", {
    get: function () {
      return this._isInteractive;
    },
    set: function (__s29param0) {
      if (!__s29param0 && this._interactiveComponent) {
        this._interactiveComponent.dispose();
        this._interactiveComponent = null;
      }
      this._isInteractive = __s29param0;
      this.mouseChildren = false;
      this.mouseEnabled = this._isInteractive;
    },
    enumerable: true,
    configurable: true
  });
  GoodgameBitmapClip.prototype.init = function () {
    if (this.frameStrip) {
      this._endFrame = this.frameStrip.frameAmount;
      if (this.frameStrip.hasMultipleFrames && this._running) {
        this.play();
      } else {
        this.gotoAndStop(1);
      }
    }
  };
  GoodgameBitmapClip.prototype.isHit = function (__s37param0, __s37param1) {
    var __s37local0 = new __s0local2(__s37param0, __s37param1);
    __s37local0 = this.bmpImage.globalToLocal(__s37local0.x, __s37local0.y);
    GoodgameBitmapClip.HIT_TEST_POINT.x = __s37local0.x;
    GoodgameBitmapClip.HIT_TEST_POINT.y = __s37local0.y;
    return false;
  };
  GoodgameBitmapClip.prototype.handleRemovedFromStage = function (__s39param0) {
    if (this.autoDispose) {
      this.dispose();
    }
    this.stop();
    this.removeEventListener(__s0local1.REMOVED_FROM_STAGE, this.bindFunction(this.handleRemovedFromStage));
  };
  GoodgameBitmapClip.prototype.jumpToFrame = function (__s42param0) {
    if (this.frameStrip) {
      if (this.frameStrip && __s42param0 > 0) {
        var __s42local0 = this._currentFrame !== __s42param0 || !this.currentFrameImage;
        this._currentFrame = __s42param0;
        this.frameIndex = this._currentFrame - 1;
        this.currentFrameImage = this.frameStrip.getFrame(Math.min(this.frameIndex, this.frameStrip.frameAmount - 1));
        if (!this.currentFrameImage) {
          return;
        }
        this._bmpImage = this.currentFrameImage;
        this.bmpImage.smoothing = __dep_class_GoodgameBitmapEngine.GoodgameBitmapEngine.instance.smoothing;
        this.bmpImage.pixelSnapping = __dep_class_GoodgameBitmapEngine.GoodgameBitmapEngine.instance.pixelSnapping;
        this.children.splice(0, 1);
        if (this.bmpImage.parent) {
          if (this.bmpImage.parent != this) {
            if (this._copiedBitmapFrame[__s42param0]) {
              this.children.push(this._copiedBitmapFrame[__s42param0]);
            } else {
              var __s42local1 = this.bmpImage.clone();
              __s42local1.parent = this;
              this.children.push(__s42local1);
              if (__s42param0 > 1 || this._copiedBitmapFrame.length > 2) {
                this._copiedBitmapFrame[__s42param0] = __s42local1;
              }
            }
          } else {
            this.children.push(this.bmpImage);
          }
        } else {
          this.children.push(this.bmpImage);
          this.bmpImage.parent = this;
        }
        if (__s42local0 && this.onFrameChangedCallback != null) {
          this.onFrameChangedCallback();
        }
      } else {
        if (__s42param0 === 0) {
          return;
        }
        var __s42local2 = "cannot jump to frame. invalid frame number: " + __s42param0;
        __dep_exact_14ac9999fc46bb45.fatal(__s42local2);
      }
    }
  };
  GoodgameBitmapClip.prototype.traceDebugLog = function () {
    __dep_exact_9036b0ddd67c3c6e.debug("GoodgameBitmapClip traceDebugLog+++++++++++++++++++++++++++++++");
    __dep_exact_9036b0ddd67c3c6e.debug("\t\t contains( bmpImage )=" + this.contains(this.bmpImage));
    __dep_exact_9036b0ddd67c3c6e.debug("\t\t animationManager=" + this.animationManager);
    __dep_exact_9036b0ddd67c3c6e.debug("\t\t mouseChildren=" + this.mouseChildren);
    __dep_exact_9036b0ddd67c3c6e.debug("\t\t source=" + this.source);
    __dep_exact_9036b0ddd67c3c6e.debug("\t\t _running=" + this._running);
    __dep_exact_9036b0ddd67c3c6e.debug("\t\t _startFrame=" + this._startFrame);
    __dep_exact_9036b0ddd67c3c6e.debug("\t\t _currentFrame=" + this._currentFrame);
    __dep_exact_9036b0ddd67c3c6e.debug("\t\t frameIndex=" + this.frameIndex);
    __dep_exact_9036b0ddd67c3c6e.debug("\t\t currentFrameImage=" + this.currentFrameImage);
    __dep_exact_9036b0ddd67c3c6e.debug("\t\t targetFps=" + this._tagetFps);
    __dep_exact_9036b0ddd67c3c6e.debug("\t\t\t\t source.cacheId=" + this.source.cacheId);
    __dep_exact_9036b0ddd67c3c6e.debug("\t\t\t\t source.clipBounds=" + this.source.clipBounds);
    __dep_exact_9036b0ddd67c3c6e.debug("\t\t\t\t source.colorID=" + this.source.colorID);
    __dep_exact_9036b0ddd67c3c6e.debug("\t\t\t\t source.layerInfo=" + this.source.layerInfo);
    __dep_exact_9036b0ddd67c3c6e.debug("\t\t\t\t source.scaleFactor=" + this.source.scaleFactor);
    __dep_exact_9036b0ddd67c3c6e.debug("\t\t\t\t tsource.cacheId=" + this.source.cacheId);
    __dep_exact_9036b0ddd67c3c6e.debug("\t\t\t\t source.frameStrip=" + this.source.frameStrip);
    __dep_exact_9036b0ddd67c3c6e.debug("\t\t\t\t\t\t source.frameStrip.frameAmount=" + this.source.frameStrip.frameAmount);
  };
  GoodgameBitmapClip.BASE_POINT = new __s0local2();
  GoodgameBitmapClip.HIT_TEST_POINT = new __s0local2();
  return GoodgameBitmapClip;
}(__dep_class_AbstractGoodgameClip.AbstractGoodgameClip);
exports.GoodgameBitmapClip = __s0local3;
