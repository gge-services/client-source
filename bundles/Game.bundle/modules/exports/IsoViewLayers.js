Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleEnum = require("gge-module:export_CastleEnum");
var __dep_export_IsoLayerEnum = require("gge-module:export_IsoLayerEnum");
var __dep_export_AIsoViewComponent = require("gge-module:export_AIsoViewComponent");
var __s0local0 = createjs.Container;
var __s0local1 = function (__s1param0) {
  function IsoViewLayers() {
    var __s3local0 = this;
    __s3local0._isoLayers = new Map();
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoViewLayers, __s1param0);
  IsoViewLayers.prototype.setNewRenderTarget = function (__s5param0) {
    this._renderTarget = __s5param0;
  };
  IsoViewLayers.prototype.reset = function () {
    __s1param0.prototype.reset.call(this);
    this._transformLayer = this.destroyLayer(this._transformLayer);
    if (this._backgroundLayer) {
      this._backgroundLayer.removeAllChildren();
      if (this._backgroundLayer.parent) {
        this._backgroundLayer.parent.removeChild(this._backgroundLayer);
      }
    }
    __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().staticIsoObjectLayer.removeAllChildren();
    __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().renderBGStage();
    if (this._isoLayers != null) {
      for (var __s7local0 = 0, __s7local1 = Array.from(this._isoLayers.values()); __s7local0 < __s7local1.length; __s7local0++) {
        var __s7local2 = __s7local1[__s7local0];
        this.destroyLayer(__s7local2);
      }
    }
    this._isoLayers = new Map();
  };
  IsoViewLayers.prototype.destroy = function () {
    __s1param0.prototype.destroy.call(this);
    this.reset();
    this._renderTarget = this.destroyLayer(this._renderTarget);
  };
  IsoViewLayers.prototype.setup = function () {
    __s1param0.prototype.setup.call(this);
    this.renderTarget.addChild(this._transformLayer = new __s0local0());
    this.transformLayer.name = "isoWorldTransformLayer";
    this._backgroundLayer = new __s0local0();
    __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().bgStage.addChild(this._backgroundLayer);
    this._backgroundLayer.name = "isoWorldBGLayer";
    this._staticIsoObjectLayer = __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().staticIsoObjectLayer;
    this._isoLayers = new Map();
    for (var __s16local0 = 0, __s16local1 = __dep_export_CastleEnum.CastleEnum.getEnumListByClass(__dep_export_IsoLayerEnum.IsoLayerEnum); __s16local0 < __s16local1.length; __s16local0++) {
      var __s16local2 = __s16local1[__s16local0];
      var __s16local3 = new __s0local0();
      if (this.isLayerForBackground(__s16local2)) {
        this._backgroundLayer.addChild(__s16local3);
      } else if (this.isLayerForStaticIsoObject(__s16local2)) {
        this._staticIsoObjectLayer.addChild(__s16local3);
      } else {
        this.transformLayer.addChild(__s16local3);
      }
      __s16local3.name = __s16local2.name + "Layer";
      this._isoLayers.set(__s16local2, __s16local3);
      switch (__s16local2.name) {
        case __dep_export_IsoLayerEnum.IsoLayerEnum.EXPAND_ARROWS.name:
        case __dep_export_IsoLayerEnum.IsoLayerEnum.EFFECT.name:
        case __dep_export_IsoLayerEnum.IsoLayerEnum.ISO_OBJECTS.name:
          break;
        default:
          __s16local3.tickChildren = __s16local3.tickEnabled = false;
      }
    }
    this.getIsoLayer(__dep_export_IsoLayerEnum.IsoLayerEnum.DEBUG).mouseEnabled = false;
    this.getIsoLayer(__dep_export_IsoLayerEnum.IsoLayerEnum.FOG).mouseEnabled = false;
  };
  IsoViewLayers.prototype.destroyLayer = function (__s24param0) {
    if (__s24param0) {
      __s24param0.removeChildren();
      __s24param0.updateCacheIfCached();
    }
    return null;
  };
  IsoViewLayers.prototype.toggleLayerVisibility = function (__s27param0) {
    var __s27local0 = this.getIsoLayer(__s27param0);
    __s27local0.visible = !__s27local0.visible;
  };
  IsoViewLayers.prototype.getIsoLayer = function (__s29param0) {
    return this._isoLayers.get(__s29param0);
  };
  IsoViewLayers.prototype.isLayerForBackground = function (__s31param0) {
    switch (__s31param0) {
      case __dep_export_IsoLayerEnum.IsoLayerEnum.BACKGROUND:
      case __dep_export_IsoLayerEnum.IsoLayerEnum.GROUND:
      case __dep_export_IsoLayerEnum.IsoLayerEnum.GROUND_FILLER:
        return true;
    }
    return false;
  };
  IsoViewLayers.prototype.isLayerForStaticIsoObject = function (__s34param0) {
    switch (__s34param0) {
      case __dep_export_IsoLayerEnum.IsoLayerEnum.MOAT:
      case __dep_export_IsoLayerEnum.IsoLayerEnum.RESOURCE_FIELDS:
      case __dep_export_IsoLayerEnum.IsoLayerEnum.STATIC_SURROUNDINGS:
        return true;
    }
    return false;
  };
  IsoViewLayers.prototype.isUnderBuildingLayer = function (__s37param0) {
    if (__s37param0.parent) {
      switch (__s37param0.parent.name) {
        case __dep_export_IsoLayerEnum.IsoLayerEnum.BACKGROUND.name + "Layer":
        case __dep_export_IsoLayerEnum.IsoLayerEnum.GROUND.name + "Layer":
        case __dep_export_IsoLayerEnum.IsoLayerEnum.GROUND_FILLER.name + "Layer":
        case __dep_export_IsoLayerEnum.IsoLayerEnum.EXPAND_ARROWS.name + "Layer":
        case __dep_export_IsoLayerEnum.IsoLayerEnum.RESOURCE_FIELDS.name + "Layer":
        case __dep_export_IsoLayerEnum.IsoLayerEnum.STATIC_SURROUNDINGS.name + "Layer":
          return true;
      }
    }
    return __s37param0.stage == __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().bgStage;
  };
  Object.defineProperty(IsoViewLayers.prototype, "transformLayer", {
    get: function () {
      return this._transformLayer;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewLayers.prototype, "backgroundLayer", {
    get: function () {
      return this._backgroundLayer;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewLayers.prototype, "staticIsoObjectLayer", {
    get: function () {
      return this._staticIsoObjectLayer;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewLayers.prototype, "renderTarget", {
    get: function () {
      return this._renderTarget;
    },
    enumerable: true,
    configurable: true
  });
  return IsoViewLayers;
}(__dep_export_AIsoViewComponent.AIsoViewComponent);
exports.IsoViewLayers = __s0local1;
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
