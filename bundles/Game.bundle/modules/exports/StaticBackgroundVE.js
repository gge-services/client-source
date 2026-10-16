Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ABGHelper = require("gge-module:export_ABGHelper");
var __dep_export_IsoLayerEnum = require("gge-module:export_IsoLayerEnum");
var __dep_export_AIsoObjectVE = require("gge-module:export_AIsoObjectVE");
var __s0local0 = createjs.Point;
var __s0local1 = createjs.Rectangle;
var __s0local2 = function (__s1param0) {
  function StaticBackgroundVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(StaticBackgroundVE, __s1param0);
  StaticBackgroundVE.prototype.init = function (__s5param0) {
    __s1param0.prototype.init.call(this, __s5param0);
    this.dispComponent.cacheDisp = false;
  };
  StaticBackgroundVE.prototype.initElementContainer = function () {
    __s1param0.prototype.initElementContainer.call(this);
    this.elementContainer.mouseEnabled = true;
  };
  StaticBackgroundVE.prototype.createDisp = function () {
    var __s9local0 = this.getTilePosList();
    if (__s9local0 != null) {
      for (var __s9local1 = 0, __s9local2 = __s9local0; __s9local1 < __s9local2.length; __s9local1++) {
        var __s9local3 = __s9local2[__s9local1];
        if (__s9local3 !== undefined) {
          var __s9local4 = this.createBackgroundTileClip(__s9local3.x * __s9local3.y);
          __s9local4.x = __s9local3.x;
          __s9local4.y = __s9local3.y;
          __s9local4.scaleX = __s9local4.scaleY = StaticBackgroundVE.SCALE + StaticBackgroundVE.ADDITIONAL_SCALE;
          this.dispComponent.addClip(__s9local4);
        }
      }
    }
    if (this.dispComponent.isLoaded) {
      this.onLoadedAssetsUpdateStage();
    } else {
      this.dispComponent.onLoadedSignal.addOnce(this.bindFunction(this.onLoadedAssetsUpdateStage));
    }
  };
  StaticBackgroundVE.prototype.onLoadedAssetsUpdateStage = function () {
    try {
      __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().gamestage.update();
      __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().renderBGStage();
    } catch (__s20local0) {}
  };
  StaticBackgroundVE.prototype.createBackgroundTileClip = function (__s22param0) {
    var __s22local0 = this.vo.type;
    if (this.canUseEventSkin_0()) {
      __s22local0 += "_" + __dep_export_IsoHelper.IsoHelper.view.getIsoEventSkinSuffix();
    }
    __s22local0 += "_OuterBackground_T" + new __dep_exact_9e901e8e2483a22f.SimpleRandom(__s22param0).nextInt(3);
    return this.loadExternalClip(__s22local0, null, null, 0, false, null, false, 1, false, false, false);
  };
  Object.defineProperty(StaticBackgroundVE.prototype, "assetFileName", {
    get: function () {
      var __s25local0 = "Backgrounds" + this.vo.type;
      if (this.canUseEventSkin_0()) {
        __s25local0 += "_" + __dep_export_IsoHelper.IsoHelper.view.getIsoEventSkinSuffix();
      }
      return __s25local0;
    },
    set: function (__s28param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AIsoObjectVE.AIsoObjectVE.prototype, "assetFileName").set.call(this, __s28param0);
    },
    enumerable: true,
    configurable: true
  });
  StaticBackgroundVE.prototype.getVELayerType = function () {
    return __dep_export_IsoLayerEnum.IsoLayerEnum.BACKGROUND;
  };
  StaticBackgroundVE.prototype.getScreenPos = function () {
    return new __s0local0(0, 0);
  };
  StaticBackgroundVE.prototype.canUseEventSkin_0 = function () {
    return __dep_export_IsoHelper.IsoHelper.view.canUseIsoEventSkin() && __dep_export_IsoHelper.IsoHelper.view.doesAssetFileExist("Backgrounds" + this.vo.type + "_" + __dep_export_IsoHelper.IsoHelper.view.getIsoEventSkinSuffix()) || __dep_export_ABGHelper.ABGHelper.isOnABGServer;
  };
  StaticBackgroundVE.prototype.getTilePosList = function () {
    var __s36local0 = this.isoRenderer.camera.scrollBounds;
    for (var __s36local1 = new __s0local1(-5000, -5000, 10000, 10000), __s36local2 = [], __s36local3 = __dep_exact_f855840627e6e145.int(__s36local1.top); __s36local3 < __s36local1.bottom; __s36local3 += __dep_exact_f855840627e6e145.int(StaticBackgroundVE.GFX_SIZE.y)) {
      for (var __s36local4 = __dep_exact_f855840627e6e145.int(__s36local1.left); __s36local4 < __s36local1.right; __s36local4 += __dep_exact_f855840627e6e145.int(StaticBackgroundVE.GFX_SIZE.x)) {
        if (__s36local0.contains(__s36local4, __s36local3) || __s36local0.contains(__s36local4 + StaticBackgroundVE.GFX_SIZE.x, __s36local3) || __s36local0.contains(__s36local4, __s36local3 + StaticBackgroundVE.GFX_SIZE.y) || __s36local0.contains(__s36local4 + StaticBackgroundVE.GFX_SIZE.x, __s36local3 + StaticBackgroundVE.GFX_SIZE.y)) {
          __s36local2.push(new __s0local0(__s36local4, __s36local3));
        }
      }
    }
    return __s36local2;
  };
  StaticBackgroundVE.prototype.onSpecialEventUpdated = function (__s43param0) {
    if (__s43param0.specialEventVO.eventId == __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_EVENT_SKIN) {
      this.updateDisp();
    }
  };
  StaticBackgroundVE.__initialize_static_members = function () {
    StaticBackgroundVE.UNSCALED_GFX_SIZE = new __s0local0(800, 400);
    StaticBackgroundVE.GFX_SIZE = new __s0local0(StaticBackgroundVE.UNSCALED_GFX_SIZE.x * StaticBackgroundVE.SCALE, StaticBackgroundVE.UNSCALED_GFX_SIZE.y * StaticBackgroundVE.SCALE);
  };
  StaticBackgroundVE.SCALE = 2;
  StaticBackgroundVE.ADDITIONAL_SCALE = 0.01;
  return StaticBackgroundVE;
}(__dep_export_AIsoObjectVE.AIsoObjectVE);
exports.StaticBackgroundVE = __s0local2;
var __dep_export_IsoHelper = require("gge-module:export_IsoHelper");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
__s0local2.__initialize_static_members();
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local2, "ICollectableRendererList", "IIngameUICapable");
