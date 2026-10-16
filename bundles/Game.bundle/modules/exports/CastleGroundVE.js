Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_IsoLayerEnum = require("gge-module:export_IsoLayerEnum");
var __dep_export_IsoRenderStrategyEnum = require("gge-module:export_IsoRenderStrategyEnum");
var __dep_export_AIsoObjectVE = require("gge-module:export_AIsoObjectVE");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleGroundVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleGroundVE, __s1param0);
  CastleGroundVE.prototype.initElementContainer = function () {
    __s1param0.prototype.initElementContainer.call(this);
    this.elementContainer.mouseEnabled = true;
  };
  CastleGroundVE.prototype.onCameraZoomChanged = function () {};
  CastleGroundVE.prototype.onRenderStrategyChanged = function (__s9param0) {
    this.updateDisp();
  };
  Object.defineProperty(CastleGroundVE.prototype, "dispOffset", {
    get: function () {
      return new __s0local0();
    },
    set: function (__s13param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AIsoObjectVE.AIsoObjectVE.prototype, "dispOffset").set.call(this, __s13param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleGroundVE.prototype.createDisp = function () {
    var __s15local0 = this.groundVO.type;
    if (this.canUseIsoEventSkin()) {
      __s15local0 += "_" + __dep_export_IsoHelper.IsoHelper.view.getIsoEventSkinSuffix();
    }
    __s15local0 += "_InnerBackground_" + this.groundVO.rotatedHeight + "x" + this.groundVO.rotatedWidth + this.getVariationSuffix();
    this.dispComponent.addClip(this._floorDisp = this.loadExternalClip(__s15local0));
    if (this.renderStrategy.currentStrategy.isActive(__dep_export_IsoRenderStrategyEnum.IsoRenderStrategyEnum.BUILD_MODE)) {
      var __s15local1 = this.groundVO.type;
      if (this.canUseIsoEventSkin()) {
        __s15local1 += "_" + __dep_export_IsoHelper.IsoHelper.view.getIsoEventSkinSuffix();
      }
      __s15local1 += "_Buildgrid_" + this.groundVO.rotatedWidth + "x" + this.groundVO.rotatedHeight;
      this.dispComponent.addClip(this.loadExternalClip(__s15local1));
    }
  };
  CastleGroundVE.prototype.destroyDisp = function () {
    this._floorDisp = null;
    __s1param0.prototype.destroyDisp.call(this);
  };
  CastleGroundVE.prototype.getVELayerType = function () {
    return __dep_export_IsoLayerEnum.IsoLayerEnum.GROUND;
  };
  Object.defineProperty(CastleGroundVE.prototype, "assetFileName", {
    get: function () {
      var __s24local0 = "Backgrounds" + this.groundVO.type;
      if (this.canUseIsoEventSkin()) {
        __s24local0 += "_" + __dep_export_IsoHelper.IsoHelper.view.getIsoEventSkinSuffix();
      }
      return __s24local0;
    },
    set: function (__s27param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AIsoObjectVE.AIsoObjectVE.prototype, "assetFileName").set.call(this, __s27param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleGroundVE.prototype.getVariationSuffix = function () {
    if (this.groundVO.rotatedWidth == 10 || this.groundVO.rotatedHeight == 10) {
      return "_" + __dep_exact_f855840627e6e145.int(new __dep_exact_9e901e8e2483a22f.SimpleRandom(this.vo.isoData.areaData.areaInfo.objectId + this.groundVO.x + this.groundVO.y).nextInt(3) + 1);
    } else {
      return "";
    }
  };
  CastleGroundVE.prototype.canUseIsoEventSkin = function () {
    return __dep_export_IsoHelper.IsoHelper.view.canUseIsoEventSkin() && __dep_export_IsoHelper.IsoHelper.view.doesAssetFileExist("Backgrounds" + this.vo.type + "_" + __dep_export_IsoHelper.IsoHelper.view.getIsoEventSkinSuffix());
  };
  CastleGroundVE.prototype.onAllDispClipsLoaded = function () {
    if (this._floorDisp) {
      this._floorDisp.scaleX = this._floorDisp.scaleY = 1.015;
    }
    __s1param0.prototype.onAllDispClipsLoaded.call(this);
  };
  CastleGroundVE.prototype.onSpecialEventUpdated = function (__s38param0) {
    if (__s38param0.specialEventVO.eventId == __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_EVENT_SKIN) {
      this.updateDisp();
    }
  };
  Object.defineProperty(CastleGroundVE.prototype, "groundVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  return CastleGroundVE;
}(__dep_export_AIsoObjectVE.AIsoObjectVE);
exports.CastleGroundVE = __s0local1;
var __dep_export_IsoHelper = require("gge-module:export_IsoHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList", "IIngameUICapable");
