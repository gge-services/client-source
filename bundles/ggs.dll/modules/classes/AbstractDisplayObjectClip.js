Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_AbstractGoodgameClip = require("gge-module:class_AbstractGoodgameClip");
var __dep_exact_14ac9999fc46bb45 = require("gge-module:exact_14ac9999fc46bb45");
var __dep_class_FlattenedImage = require("gge-module:class_FlattenedImage");
var __dep_export_ClipSourceOptimizer = require("gge-module:export_ClipSourceOptimizer");
var __dep_class_AssetsPool = require("gge-module:class_AssetsPool");
var __s0local0 = createjs.MovieClip;
var __s0local1 = createjs.Event;
var __s0local2 = createjs.Rectangle;
var __s0local3 = createjs.Container;
var __s0local4 = function (__s1param0) {
  function AbstractDisplayObjectClip() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._clipBounds = new __s0local2();
    __s3local0.recycleAsset = true;
    __s3local0.addEventListener(__s0local1.REMOVED_FROM_STAGE, __s3local0.bindFunction(__s3local0.handleRemovedFromStage));
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(AbstractDisplayObjectClip, __s1param0);
  Object.defineProperty(AbstractDisplayObjectClip.prototype, "isInteractive", {
    set: function (__s5param0) {
      this.mouseChildren = __s5param0;
      this.mouseEnabled = __s5param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AbstractDisplayObjectClip.prototype, "colorData", {
    set: function (__s7param0) {
      this._clipColor = __s7param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AbstractDisplayObjectClip.prototype, "clipLayerInfo", {
    get: function () {
      return this._clipLayerInfo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AbstractDisplayObjectClip.prototype, "clipBounds", {
    get: function () {
      return this._clipBounds;
    },
    enumerable: true,
    configurable: true
  });
  AbstractDisplayObjectClip.prototype.initCurrentClip = function (__s13param0) {
    if (__s13param0) {
      this.currentDisplayObject = __dep_class_AssetsPool.assetsPool.obtain(__s13param0);
      var __s13local0 = this.currentDisplayObject;
      if (this._clipColor && this._clipColor.length > 0) {
        for (var __s13local1 = 0, __s13local2 = this._clipColor; __s13local1 < __s13local2.length; __s13local1++) {
          __s13local2[__s13local1].colorClip(__s13local0);
        }
      }
      if (__s13local0 instanceof __s0local0 && __s13local0.framesLoaded >= 1) {
        this._endFrame = __s13local0.framesLoaded;
        if (this.hasSubLayer) {
          for (var __s13local3 = 0; __s13local3 < __s13local0.numChildren - 1; __s13local3++) {
            var __s13local4 = __s13local0.getChildAt(__s13local3);
            if (__s13local4 instanceof __s0local0) {
              this._endFrame = Math.max(this._endFrame, __s13local4.framesLoaded);
            }
          }
        }
      } else {
        this._endFrame = 1;
      }
      if (this._running) {
        this.play();
      } else {
        this.stop();
      }
      this.refreshBounds(this.currentDisplayObject);
      if (__s13local0 instanceof __s0local0) {
        __s13local0.gotoAndStop(1);
      }
      this.jumpToFrame(1);
      this.addChild(this.currentDisplayObject);
    }
  };
  AbstractDisplayObjectClip.prototype.jumpToFrame = function (__s28param0) {
    if (__s28param0 > 0) {
      this._currentFrame = __s28param0;
      var __s28local0 = this.currentDisplayObject;
      if (__s28local0 instanceof __s0local0) {
        __s28local0.gotoAndStop(this._currentFrame);
        if (this.hasSubLayer) {
          for (var __s28local1 = 0; __s28local1 < __s28local0.numChildren; __s28local1++) {
            var __s28local2 = __s28local0.getChildAt(__s28local1);
            if (__s28local2 instanceof __s0local0) {
              __s28local2.gotoAndStop(this._currentFrame % __s28local2.totalFrames == 0 ? __s28local2.totalFrames : this._currentFrame % __s28local2.totalFrames);
            }
          }
        }
        if (this._animationColorChange && this._clipColor && this._clipColor.length > 0) {
          for (var __s28local3 = 0, __s28local4 = this._clipColor; __s28local3 < __s28local4.length; __s28local3++) {
            __s28local4[__s28local3].colorClip(this.currentDisplayObject);
          }
        }
      }
    } else {
      var __s28local5 = "cannot jump to frame. invalid frame number: " + __s28param0;
      __dep_exact_14ac9999fc46bb45.fatal(__s28local5);
    }
  };
  AbstractDisplayObjectClip.prototype.handleRemovedFromStage = function (__s40param0) {
    if (this._clipSizeComponent) {
      this._clipSizeComponent.clipSizeChanged.removeAll();
    }
    this.removeEventListener(__s0local1.REMOVED_FROM_STAGE, this.bindFunction(this.handleRemovedFromStage));
    this.stop();
  };
  Object.defineProperty(AbstractDisplayObjectClip.prototype, "clipSizeComponent", {
    get: function () {
      return this._clipSizeComponent;
    },
    set: function (__s45param0) {
      this._clipSizeComponent = __s45param0;
      if (this._clipSizeComponent) {
        this._clipSizeComponent.setImageSize(this, this._clipBounds);
        this._clipSizeComponent.clipSizeChanged.dispatch(this);
      }
    },
    enumerable: true,
    configurable: true
  });
  AbstractDisplayObjectClip.prototype.addToClipBounds = function (__s48param0) {
    this._clipBounds = this._clipBounds.union(__s48param0);
  };
  AbstractDisplayObjectClip.prototype.refreshBounds = function (__s50param0) {
    this._clipBounds = new __s0local2();
    if (__s50param0 instanceof __s0local0) {
      if (__s50param0.children.length === 0) {
        __s50param0.gotoAndStop(1);
      }
      this.addToClipBounds(__s50param0.getBounds(null));
    } else if (__s50param0 instanceof __s0local3) {
      this.addToClipBounds(__s50param0.getBounds());
    }
    if (this._clipSizeComponent) {
      this._clipSizeComponent.setImageSize(this, this._clipBounds);
      this._clipSizeComponent.clipSizeChanged.dispatch(this);
    }
  };
  Object.defineProperty(AbstractDisplayObjectClip.prototype, "currentshownDisplayObject", {
    get: function () {
      return this.currentDisplayObject;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AbstractDisplayObjectClip.prototype, "animationColorChange", {
    get: function () {
      return this._animationColorChange;
    },
    set: function (__s60param0) {
      this._animationColorChange = __s60param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AbstractDisplayObjectClip.prototype, "clipColor", {
    get: function () {
      return this._clipColor;
    },
    set: function (__s64param0) {
      this._clipColor = __s64param0;
    },
    enumerable: true,
    configurable: true
  });
  AbstractDisplayObjectClip.prototype.renderSingleFrame = function (__s66param0) {
    AbstractDisplayObjectClip.containerRegPointFinder.addChild(__s66param0);
    AbstractDisplayObjectClip.regPointFinder = AbstractDisplayObjectClip.containerRegPointFinder.getBounds();
    AbstractDisplayObjectClip.containerRegPointFinder.removeChild(__s66param0);
    this.addToClipBounds(AbstractDisplayObjectClip.regPointFinder);
    var __s66local0 = Math.ceil(__s66param0.width);
    var __s66local1 = Math.ceil(__s66param0.height);
    var __s66local2 = __s66param0.children.length > 0 && __s66param0.children[0].scaleX < 1 ? __s66local0 / 2 : 0;
    var __s66local3 = __s66param0.children.length > 0 && __s66param0.children[0].scaleY < 1 ? __s66local1 / 2 : 0;
    var __s66local4 = -Math.floor(AbstractDisplayObjectClip.regPointFinder.x) + __s66local2;
    __s66local0 += Math.ceil(Math.abs(__s66local4 + AbstractDisplayObjectClip.regPointFinder.x));
    var __s66local5 = -Math.floor(AbstractDisplayObjectClip.regPointFinder.y) + __s66local3;
    __s66local1 += Math.ceil(Math.abs(__s66local5 + AbstractDisplayObjectClip.regPointFinder.y));
    var __s66local6 = new __dep_class_FlattenedImage.FlattenedImage(__s66local0, __s66local1, __s66local4, __s66local5, undefined, true);
    if (__s66param0.children.length > 0) {
      __s66param0.cache(-__s66local4, -__s66local5, __s66local0, __s66local1);
    } else {
      __s66param0.cache(0, 0, __s66param0.width, __s66param0.height);
    }
    __s66local6.draw(__s66param0);
    __s66param0.uncache();
    return __s66local6;
  };
  AbstractDisplayObjectClip.prototype.convertMovieClip = function (__s70param0) {
    return __dep_export_ClipSourceOptimizer.ClipSourceOptimizer.ClipMCToBitmaps(__s70param0, this, this.renderSingleFrame);
  };
  AbstractDisplayObjectClip.prototype.dispose = function () {
    if (this.currentDisplayObject && this.recycleAsset) {
      __dep_class_AssetsPool.assetsPool.recycle(this.currentDisplayObject);
    }
    __s1param0.prototype.dispose.call(this);
  };
  AbstractDisplayObjectClip.containerRegPointFinder = new __s0local3();
  AbstractDisplayObjectClip.regPointFinder = new __s0local2();
  return AbstractDisplayObjectClip;
}(__dep_class_AbstractGoodgameClip.AbstractGoodgameClip);
exports.AbstractDisplayObjectClip = __s0local4;
