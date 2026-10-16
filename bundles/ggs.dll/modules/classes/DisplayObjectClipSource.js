Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_ClipLayerInfo = require("gge-module:class_ClipLayerInfo");
var __dep_class_AbstractClipSource = require("gge-module:class_AbstractClipSource");
var __dep_class_FlattenedImage = require("gge-module:class_FlattenedImage");
var __dep_class_DisplayObjectClipContainer = require("gge-module:class_DisplayObjectClipContainer");
var __dep_export_ClipSourceOptimizer = require("gge-module:export_ClipSourceOptimizer");
var __s0local0 = createjs.Bitmap;
var __s0local1 = createjs.BitmapData;
var __s0local2 = createjs.Container;
var __s0local3 = createjs.MovieClip;
var __s0local4 = createjs.Rectangle;
var __s0local5 = function (__s1param0) {
  function DisplayObjectClipSource() {
    var __s3local0 = __s1param0 !== null && __s1param0.apply(this, arguments) || this;
    __s3local0.hasSubLayer = false;
    __s3local0._scaleFactor = 1;
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(DisplayObjectClipSource, __s1param0);
  Object.defineProperty(DisplayObjectClipSource.prototype, "scaleFactor", {
    get: function () {
      return this._scaleFactor;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DisplayObjectClipSource.prototype, "layerInfo", {
    get: function () {
      return this._layerInfo;
    },
    enumerable: true,
    configurable: true
  });
  DisplayObjectClipSource.prototype.convertClass = function (__s9param0, __s9param1 = null, __s9param2 = 0, __s9param3 = false) {
    this.sourceClass = __s9param0;
    this._colorData = __s9param1;
    this.debugColor = __s9param2;
    this.hasSubLayer = __s9param3;
    this._cacheId = "";
    this._framesStrip = this.convertDisplayObjectContainer(new this.sourceClass());
  };
  DisplayObjectClipSource.prototype.convertDisplayObjectContainer = function (__s11param0) {
    if (__s11param0 instanceof __dep_class_DisplayObjectClipContainer.DisplayObjectClipContainer) {
      this._layerInfo = new __dep_class_ClipLayerInfo.ClipLayerInfo(__s11param0);
    }
    if (__s11param0 instanceof __s0local3) {
      return this.convertMovieClip(__s11param0);
    }
    if (__s11param0 instanceof __s0local2) {
      return this.convertSprite(__s11param0);
    }
    if (__s11param0 instanceof __s0local1) {
      var __s11local0 = new __s0local0(__s11param0.canvas);
      var __s11local1 = new __s0local2();
      __s11local1.addChild(__s11local0);
      return this.convertSprite(__s11local1);
    }
    return null;
  };
  DisplayObjectClipSource.prototype.renderSingleFrame = function (__s17param0) {
    DisplayObjectClipSource.containerRegPointFinder.addChild(__s17param0);
    DisplayObjectClipSource.regPointFinder = DisplayObjectClipSource.containerRegPointFinder.getBounds();
    DisplayObjectClipSource.containerRegPointFinder.removeChild(__s17param0);
    this.addToClipBounds(DisplayObjectClipSource.regPointFinder);
    var __s17local0 = Math.ceil(__s17param0.width * this._scaleFactor);
    var __s17local1 = Math.ceil(__s17param0.height * this._scaleFactor);
    var __s17local2 = __s17param0.children.length > 0 && __s17param0.children[0].scaleX < 1 ? __s17local0 / 2 : 0;
    var __s17local3 = __s17param0.children.length > 0 && __s17param0.children[0].scaleY < 1 ? __s17local1 / 2 : 0;
    var __s17local4 = -Math.floor(DisplayObjectClipSource.regPointFinder.x * this._scaleFactor) + __s17local2;
    __s17local0 += Math.ceil(Math.abs(__s17local4 + DisplayObjectClipSource.regPointFinder.x));
    var __s17local5 = -Math.floor(DisplayObjectClipSource.regPointFinder.y * this._scaleFactor) + __s17local3;
    __s17local1 += Math.ceil(Math.abs(__s17local5 + DisplayObjectClipSource.regPointFinder.y));
    var __s17local6 = new __dep_class_FlattenedImage.FlattenedImage(__s17local0, __s17local1, __s17local4, __s17local5, undefined, true);
    if (this._colorData) {
      this._colorData.forEach(function (__s20param0) {
        __s20param0.colorClip(__s17param0);
      });
    }
    __s17param0.cache(-__s17local4, -__s17local5, __s17local0, __s17local1);
    __s17local6.draw(__s17param0);
    return __s17local6;
  };
  DisplayObjectClipSource.prototype.convertMovieClip = function (__s22param0) {
    var __s22local0 = this;
    if (this._colorData && __s22param0.children.length) {
      for (var __s22local1 = 0, __s22local2 = this._colorData; __s22local1 < __s22local2.length; __s22local1++) {
        __s22local2[__s22local1].colorClip(__s22param0);
      }
    }
    __dep_export_ClipSourceOptimizer.ClipSourceOptimizer.ClipMCToBitmaps(__s22param0, this, this.renderSingleFrame).forEach(function (__s27param0) {
      __s22local0._framesStrip.addFrame(__s27param0);
    });
    return this._framesStrip;
  };
  DisplayObjectClipSource.prototype.convertSprite = function (__s29param0) {
    if (__s29param0.children.length === 1 && __s29param0.children[0] instanceof __s0local0) {
      this._framesStrip.addFrame(__s29param0.children[0].clone());
    } else {
      var __s29local0 = this.renderSingleFrame(__s29param0);
      this._framesStrip.addFrame(__dep_export_ClipSourceOptimizer.ClipSourceOptimizer.flattenedImagesToBitmaps([__s29local0])[0]);
    }
    return this._framesStrip;
  };
  DisplayObjectClipSource.containerRegPointFinder = new __s0local2();
  DisplayObjectClipSource.regPointFinder = new __s0local4();
  return DisplayObjectClipSource;
}(__dep_class_AbstractClipSource.AbstractClipSource);
exports.DisplayObjectClipSource = __s0local5;
