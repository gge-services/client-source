Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
var __dep_export_IsoObjectLayerEnum = require("gge-module:export_IsoObjectLayerEnum");
var __dep_export_IsoAdditionalClipLayerVO = require("gge-module:export_IsoAdditionalClipLayerVO");
var __s0local0 = createjs.Container;
var __s0local1 = function (__s1param0) {
  function IsoAdditionalClipManager() {
    var __s3local0 = this;
    __s3local0._layersList = new Map();
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoAdditionalClipManager, __s1param0);
  IsoAdditionalClipManager.prototype.init = function (__s5param0) {
    this._ve = __s5param0;
  };
  IsoAdditionalClipManager.prototype.reset = function () {
    this.destroy();
  };
  IsoAdditionalClipManager.prototype.destroy = function () {
    this.removeAllClips();
    this._layersList = new Map();
  };
  IsoAdditionalClipManager.prototype.addClips = function (__s11param0, __s11param1 = 12, __s11param2 = 1, __s11param3 = false) {
    var __s11local0 = this.getLayersByType(__s11param0);
    if (__s11local0 && !this.containsClipsByType(__s11param0)) {
      var __s11local1 = __dep_export_IsoHelper.IsoHelper.view.getAssetFileURL(__s11param0.assetAndClipName);
      if (__s11local0 != null) {
        for (var __s11local2 = 0, __s11local3 = __s11local0; __s11local2 < __s11local3.length; __s11local2++) {
          var __s11local4 = __s11local3[__s11local2];
          if (__s11local4 !== undefined) {
            var __s11local5 = __dep_exact_9e901e8e2483a22f_1.GoodgameBitmapEngine.clipFactory.getExternalClipSource(__s11param0.assetAndClipName, __s11local1, this.ve.getFlagClipColor(), null, null, __s11param3);
            var __s11local6 = new __dep_exact_9e901e8e2483a22f.GoodgameBitmapClipExternal(__s11local5, __s11param1, __dep_export_IsoHelper.IsoHelper.view.areAnimationsActive);
            __s11local6.isInteractive = false;
            __s11local4.newLayer.addChild(__s11local6.asDisplayObject());
            __s11local6.x = __s11local6.y = 0;
            __s11local6.scaleX = __s11local6.scaleY = __s11param2;
            __s11local6.name = __s11param0.assetAndClipName;
            __s11local4.newLayer.mouseEnabled = false;
            if (__s11local5.isLoaded) {
              this.onClipLoaded(__s11local6);
            } else {
              __s11local6.clipLoaded.addOnce(this.bindFunction(this.onClipLoaded));
            }
          }
        }
      }
    }
  };
  IsoAdditionalClipManager.prototype.removeClips = function (__s20param0) {
    for (var __s20local0 = 0, __s20local1 = this.getLayersByType(__s20param0); __s20local0 < __s20local1.length; __s20local0++) {
      __s20local1[__s20local0].newLayer.removeChildren();
    }
  };
  IsoAdditionalClipManager.prototype.removeAllClips = function () {
    if (this.layersList != null) {
      this.layersList.forEach(function (__s27param0) {
        if (__s27param0 != null) {
          for (var __s27local0 = 0, __s27local1 = __s27param0; __s27local0 < __s27local1.length; __s27local0++) {
            var __s27local2 = __s27local1[__s27local0];
            if (__s27local2 !== undefined) {
              __s27local2.newLayer.removeChildren();
            }
          }
        }
      });
    }
  };
  IsoAdditionalClipManager.prototype.updatePositions = function () {
    if (this.ve && this.ve.layers) {
      var __s33local0 = this.ve.layers.getLayer(__dep_export_IsoObjectLayerEnum.IsoObjectLayerEnum.ADDITIONAL_CLIPS);
      if (__s33local0) {
        __s33local0.x = this.ve.dispOffset.x;
        __s33local0.y = this.ve.dispOffset.y;
        if (this.layersList != null) {
          this.layersList.forEach(function (__s38param0) {
            if (__s38param0 != null) {
              for (var __s38local0 = 0, __s38local1 = __s38param0; __s38local0 < __s38local1.length; __s38local0++) {
                var __s38local2 = __s38local1[__s38local0];
                if (__s38local2) {
                  __s38local2.updatePosition();
                }
              }
            }
          });
        }
      }
    }
  };
  IsoAdditionalClipManager.prototype.setVisibility = function (__s44param0) {
    var __s44local0 = this.ve.layers.getLayer(__dep_export_IsoObjectLayerEnum.IsoObjectLayerEnum.ADDITIONAL_CLIPS);
    if (__s44local0) {
      __s44local0.visible = __s44param0;
    }
  };
  IsoAdditionalClipManager.prototype.updateAnimationState = function () {
    var __s47local0 = __dep_export_IsoHelper.IsoHelper.view.areAnimationsActive;
    if (this.layersList != null) {
      this.layersList.forEach(function (__s50param0) {
        if (__s50param0 != null) {
          for (var __s50local0 = 0, __s50local1 = __s50param0; __s50local0 < __s50local1.length; __s50local0++) {
            var __s50local2 = __s50local1[__s50local0];
            if (__s50local2 !== undefined) {
              for (var __s50local3 = 0; __s50local3 < __s50local2.newLayer.numChildren; ++__s50local3) {
                var __s50local4 = __dep_exact_81dacdf05bd32292.castAs(__s50local2.newLayer.getChildAt(__s50local3), "GoodgameBitmapClipExternal");
                if (__s50local4) {
                  if (__s47local0) {
                    __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.uncacheSafe(__s50local4);
                    __s50local4.play();
                  } else {
                    __s50local4.stop();
                    if (__s50local4.children.length == 1) {
                      __s50local4.children[0];
                      createjs.Bitmap;
                    }
                    __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.uncacheSafe(__s50local4);
                  }
                }
              }
            }
          }
        }
      });
    }
  };
  IsoAdditionalClipManager.prototype.initLayerByType = function (__s62param0) {
    var __s62local0 = __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.getChildrenByName(this.ve.disp, __s62param0.layerName);
    var __s62local1 = [];
    if (__s62local0.length == 0 && __s62param0.addWithoutSubClip) {
      var __s62local2 = new __s0local0();
      this.ve.layers.getLayer(__dep_export_IsoObjectLayerEnum.IsoObjectLayerEnum.DISP).addChild(__s62local2);
      var __s62local3 = this.ve.layers.getLayer(__dep_export_IsoObjectLayerEnum.IsoObjectLayerEnum.FLOOR).getBounds(null);
      __s62local2.x = __s62local3.width / 3;
      __s62local0.push(__s62local2);
    }
    if (__s62local0 != null) {
      for (var __s62local4 = 0, __s62local5 = __s62local0; __s62local4 < __s62local5.length; __s62local4++) {
        var __s62local6 = __s62local5[__s62local4];
        if (__s62local6 !== undefined && __s62local6 instanceof __s0local0) {
          var __s62local7 = new __dep_export_IsoAdditionalClipLayerVO.IsoAdditionalClipLayerVO(__s62local6, __s62param0);
          this.ve.layers.getLayer(__dep_export_IsoObjectLayerEnum.IsoObjectLayerEnum.ADDITIONAL_CLIPS).addChild(__s62local7.newLayer);
          __s62local7.updatePosition();
          __s62local1.push(__s62local7);
        }
      }
    }
    this.layersList.set(__s62param0, __s62local1);
  };
  IsoAdditionalClipManager.prototype.containsClipsByType = function (__s69param0) {
    for (var __s69local0 = 0, __s69local1 = this.getLayersByType(__s69param0); __s69local0 < __s69local1.length; __s69local0++) {
      if (__s69local1[__s69local0].newLayer.numChildren > 0) {
        return true;
      }
    }
    return false;
  };
  IsoAdditionalClipManager.prototype.getLayersByType = function (__s74param0) {
    if (!this.layersList.get(__s74param0)) {
      this.initLayerByType(__s74param0);
    }
    return this.layersList.get(__s74param0);
  };
  IsoAdditionalClipManager.prototype.onClipLoaded = function (__s77param0) {
    this.updatePositions();
    if (__dep_export_IsoHelper.IsoHelper.view.areAnimationsActive) {
      __s77param0.play();
    } else {
      __s77param0.stop();
      if (__s77param0.children.length == 1 && __s77param0.children[0] instanceof createjs.Bitmap) {
        __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.uncacheSafe(__s77param0);
      } else {
        __s77param0.doCache();
      }
    }
  };
  IsoAdditionalClipManager.prototype.onAnimationOptionChanged = function () {
    this.updateAnimationState();
  };
  Object.defineProperty(IsoAdditionalClipManager.prototype, "layersList", {
    get: function () {
      return this._layersList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoAdditionalClipManager.prototype, "ve", {
    get: function () {
      return this._ve;
    },
    enumerable: true,
    configurable: true
  });
  return IsoAdditionalClipManager;
}(__dep_export_CastleComponent.CastleComponent);
exports.IsoAdditionalClipManager = __s0local1;
var __dep_export_IsoHelper = require("gge-module:export_IsoHelper");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
