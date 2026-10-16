Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_ExternalDisplayObjectClipSource = require("gge-module:class_ExternalDisplayObjectClipSource");
var __dep_class_GoodgameBitmapEngine = require("gge-module:class_GoodgameBitmapEngine");
var __dep_class_FlattenedImage = require("gge-module:class_FlattenedImage");
var __s0local0 = createjs.Bitmap;
var __s0local1 = createjs.Event;
var __s0local2 = createjs.Point;
var __s0local3 = createjs.Rectangle;
var __dep_export_CSSMouseCursor = require("gge-module:export_CSSMouseCursor");
var __dep_export_ClipSourceOptimizer = require("gge-module:export_ClipSourceOptimizer");
var __dep_class_BulkLoader = require("gge-module:class_BulkLoader");
var __s0local4 = function (__s1param0) {
  function ExternalTexturePackerClipSource() {
    return __s1param0.call(this) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(ExternalTexturePackerClipSource, __s1param0);
  ExternalTexturePackerClipSource.prototype.initExternalClipSource = function (__s5param0, __s5param1, __s5param2, __s5param3, __s5param4, __s5param5) {
    var __s5local0 = this;
    if (__s5param2 === undefined) {
      __s5param2 = null;
    }
    if (__s5param3 === undefined) {
      __s5param3 = 0;
    }
    if (__s5param4 === undefined) {
      __s5param4 = false;
    }
    if (__s5param5 === undefined) {
      __s5param5 = 1;
    }
    this._sourcePath = __s5param1;
    this.sourceClassName = __s5param0;
    this._colorData = __s5param2;
    this.debugColor = __s5param3;
    this.hasSubLayer = __s5param4;
    this._isLoaded = false;
    var __s5local1 = __dep_class_GoodgameBitmapEngine.GoodgameBitmapEngine.bulkLoader.add(this._sourcePath + ".json", {
      id: __s5param0,
      type: createjs.AbstractLoader.SPRITESHEET,
      priority: __s5param5
    });
    if (__s5local1) {
      if (__s5local1.loaded) {
        var __s5local2 = setTimeout(function () {
          clearTimeout(__s5local2);
          __s5local0.onLoaded(__s5local1);
        }, __s5local1.getResult()._frames.length * 100);
      } else {
        __s5local1.addEventListener(__s0local1.COMPLETE, this.bindFunction(this.onLoaded));
      }
    }
  };
  ExternalTexturePackerClipSource.prototype.onLoaded = function (__s16param0) {
    var __s16local0;
    var __s16local1;
    if (__s16param0 === undefined) {
      __s16param0 = null;
    }
    if (__s16param0 instanceof __s0local1) {
      __s16param0.target.removeEventListener(__s0local1.COMPLETE, this.bindFunction(this.onLoaded));
      __dep_class_BulkLoader.BulkLoader.loadedList.set(__s16param0.currentTarget.getItem().src, __s16param0.currentTarget);
      __s16local0 = __s16param0.result;
      __s16local1 = JSON.parse(__s16param0.rawResult);
      __s16param0.currentTarget._rawResult = __s16local1;
    } else {
      __s16local0 = __s16param0.getResult();
      if (typeof (__s16local1 = __s16param0.getResult(true)) == "string") {
        __s16local1 = JSON.parse(__s16local1);
        __s16param0._rawResult = __s16local1;
      }
    }
    this.animData = [];
    this.populateFrameArray(this.animData, __s16local0._frames, __s16local1.sourceSize, __s16local1.animations);
    this._isLoaded = true;
    var __s16local2 = __s16local0._images[0];
    var __s16local3 = this.animData.length > 1 && (__s16local2.width > ExternalTexturePackerClipSource.SPRTITESHEET_MAX_SIZE || __s16local2.height > ExternalTexturePackerClipSource.SPRTITESHEET_MAX_SIZE);
    if (this.scaleFactor !== 1 || __s16local3) {
      var __s16local4 = undefined;
      if (this.animData.length > 1) {
        (__s16local4 = new createjs.BitmapData(__s16local1.size.w, __s16local1.size.h, true)).draw(__s16local0._images[0]);
      } else {
        var __s16local5 = __s16local0.getFrame(__s16local0.getAnimation(__s16local0.animations[0]).frames[0]);
        (__s16local4 = new createjs.BitmapData(__s16local5.rect.width, __s16local5.rect.height, true)).draw(__s16local5.image);
      }
      this._framesStrip = this.convertTexturePackerContainer(__s16local4);
    } else {
      for (var __s16local6 = 0; __s16local6 < this.animData.length; __s16local6++) {
        var __s16local7 = this.animData[__s16local6];
        var __s16local8 = new __s0local0(__s16local2);
        __s16local8.sourceRect = __s16local7.rect;
        __s16local8.x = __s16local7.offX;
        __s16local8.y = __s16local7.offY;
        this._framesStrip.addFrame(__s16local8);
      }
    }
    this._clipLoadedAndConverted.dispatch(this);
    this._clipLoadedAndConverted.removeAll();
  };
  ExternalTexturePackerClipSource.prototype.populateFrameArray = function (__s28param0, __s28param1, __s28param2, __s28param3) {
    var __s28local0;
    var __s28local1;
    var __s28local2;
    for (__s28local2 in __s28param1) {
      if ((__s28local0 = __s28param1[__s28local2]).rect) {
        if (__s28param2) {
          this._sourceSizeW = __s28param2.w;
          this._sourceSizeH = __s28param2.h;
        }
        __s28local1 = __s28local0;
        var __s28local3 = this.getAnimationNameByFrame(parseInt(__s28local2), __s28param3);
        var __s28local4 = __s28local3.match(/\d+/g);
        if (__s28local4 && __s28local4.length > 0) {
          __s28local1.sortID = parseInt(__s28local4.join(""));
        } else {
          __s28local1.sortID = 0;
        }
        __s28local1.animName = __s28local3;
        __s28local1.offX = 0;
        __s28local1.offY = 0;
        __s28local1.offX = Math.abs(__s28local0.regX);
        __s28local1.offY = Math.abs(__s28local0.regY);
        __s28param0.push(__s28local1);
      }
    }
    __s28param0.sort(this.sortOnSortID);
  };
  ExternalTexturePackerClipSource.prototype.getAnimationNameByFrame = function (__s36param0, __s36param1) {
    for (var __s36local0 in __s36param1) {
      if (__s36param1[__s36local0].frames[0] == __s36param0) {
        return __s36local0;
      }
    }
    return "-";
  };
  ExternalTexturePackerClipSource.prototype.sortOnSortID = function (__s41param0, __s41param1) {
    if (__s41param0.sortID > __s41param1.sortID) {
      return 1;
    } else if (__s41param0.sortID < __s41param1.sortID) {
      return -1;
    } else if (__s41param0.animName > __s41param1.animName) {
      return 1;
    } else if (__s41param0.animName > __s41param1.animName) {
      return -1;
    } else {
      return 0;
    }
  };
  ExternalTexturePackerClipSource.prototype.convertClass = function (__s48param0, __s48param1 = null, __s48param2 = 0, __s48param3 = false) {
    this._colorData = __s48param1;
    this.debugColor = __s48param2;
    this.hasSubLayer = __s48param3;
    this._cacheId = __dep_export_CSSMouseCursor.getQualifiedClassName(this.sourceClass);
    var __s48local0 = new this.sourceClass();
    this._framesStrip = this.convertTexturePackerContainer(__s48local0);
  };
  ExternalTexturePackerClipSource.prototype.convertTexturePackerContainer = function (__s50param0) {
    var __s50local0 = this;
    var __s50local1 = __s50param0.width * this.scaleFactor;
    var __s50local2 = Math.max(this.animData.length, Math.ceil(__s50local1 / ExternalTexturePackerClipSource.SPRTITESHEET_MAX_SIZE));
    var __s50local3 = [];
    for (var __s50local4 = 0; __s50local4 < this.animData.length; __s50local4++) {
      var __s50local5 = this.animData[__s50local4];
      __s50local3.push(this.renderSingleTile(__s50param0, __s50local5));
    }
    __dep_export_ClipSourceOptimizer.ClipSourceOptimizer.flattenedImagesToBitmaps(__s50local3, __s50local2).forEach(function (__s54param0) {
      __s50local0._framesStrip.addFrame(__s54param0);
    });
    return this._framesStrip;
  };
  ExternalTexturePackerClipSource.prototype.renderSingleTile = function (__s56param0, __s56param1) {
    var __s56local0;
    var __s56local1;
    (__s56local0 = new __s0local3()).x = __s56param1.rect.x;
    __s56local0.y = __s56param1.rect.y;
    __s56local0.width = __s56param1.rect.width;
    __s56local0.height = __s56param1.rect.height;
    (__s56local1 = new __s0local2()).x = __s56param1.offX;
    __s56local1.y = __s56param1.offY;
    var __s56local2;
    var __s56local3 = new __s0local3();
    __s56local3.width = Math.max(__s56local3.width, __s56local0.width + __s56local1.x);
    __s56local3.height = Math.max(__s56local3.height, __s56local0.height + __s56local1.y);
    this.addToClipBounds(__s56local3);
    (__s56local2 = new __dep_class_FlattenedImage.FlattenedImage(__s56local0.width * this.scaleFactor, __s56local0.height * this.scaleFactor, 0 - Math.floor(__s56local1.x * this.scaleFactor), 0 - Math.floor(__s56local1.y * this.scaleFactor), this.debugColor)).copyPixels(__s56param0, __s56local0, new __s0local2());
    delete __s56param1.sortID;
    return __s56local2;
  };
  Object.defineProperty(ExternalTexturePackerClipSource.prototype, "sourceSizeW", {
    get: function () {
      return this._sourceSizeW;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ExternalTexturePackerClipSource.prototype, "sourceSizeH", {
    get: function () {
      return this._sourceSizeH;
    },
    enumerable: true,
    configurable: true
  });
  ExternalTexturePackerClipSource.SPRTITESHEET_MAX_SIZE = Number.MAX_VALUE;
  return ExternalTexturePackerClipSource;
}(__dep_class_ExternalDisplayObjectClipSource.ExternalDisplayObjectClipSource);
exports.ExternalTexturePackerClipSource = __s0local4;
