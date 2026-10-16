Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleEnum = require("gge-module:export_CastleEnum");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_IsoObjectLayerEnum = require("gge-module:export_IsoObjectLayerEnum");
var __s0local0 = createjs.Container;
var __s0local1 = createjs.Event;
var __s0local2 = function (__s1param0) {
  function IsoObjectLayerManager() {
    var __s3local0 = this;
    __s3local0._layerDic = new Map();
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoObjectLayerManager, __s1param0);
  IsoObjectLayerManager.prototype.init = function (__s5param0) {
    this._ve = __s5param0;
    this.createLayers();
  };
  IsoObjectLayerManager.prototype.destroy = function () {
    __s1param0.prototype.destroy.call(this);
    this.destroyLayers();
  };
  IsoObjectLayerManager.prototype.createLayers = function () {
    for (var __s9local0 = 0, __s9local1 = __dep_export_CastleEnum.CastleEnum.getEnumListByClass(__dep_export_IsoObjectLayerEnum.IsoObjectLayerEnum); __s9local0 < __s9local1.length; __s9local0++) {
      var __s9local2 = __s9local1[__s9local0];
      var __s9local3 = new __s0local0();
      if (__s9local2 == __dep_export_IsoObjectLayerEnum.IsoObjectLayerEnum.DISP) {
        this.ve.elementContainer.addChild(__s9local3);
      } else {
        __s9local3.addEventListener(__s0local1.ADDED, this.bindFunction(this.onAddedToLayer));
      }
      __s9local3.name = __s9local2.name + "Layer";
      this.layerDic.set(__s9local2, __s9local3);
    }
  };
  IsoObjectLayerManager.prototype.onAddedToLayer = function (__s15param0) {
    __s15param0.target.removeEventListener(__s0local1.ADDED, this.bindFunction(this.onAddedToLayer));
    this.ve.elementContainer.addChild(__s15param0.currentTarget);
    this.sortLayers();
  };
  IsoObjectLayerManager.prototype.sortLayers = function () {
    var __s17local0 = 0;
    for (var __s17local1 = 0, __s17local2 = __dep_export_CastleEnum.CastleEnum.getEnumListByClass(__dep_export_IsoObjectLayerEnum.IsoObjectLayerEnum); __s17local1 < __s17local2.length; __s17local1++) {
      var __s17local3 = __s17local2[__s17local1];
      var __s17local4 = this.layerDic.get(__s17local3);
      if (__s17local4.parent) {
        __s17local4.parent.setChildIndex(__s17local4, __s17local0++);
      }
    }
  };
  IsoObjectLayerManager.prototype.destroyLayers = function () {
    for (var __s22local0 = 0, __s22local1 = __dep_export_CastleEnum.CastleEnum.getEnumListByClass(__dep_export_IsoObjectLayerEnum.IsoObjectLayerEnum); __s22local0 < __s22local1.length; __s22local0++) {
      var __s22local2 = __s22local1[__s22local0];
      var __s22local3 = this.getLayer(__s22local2);
      __s22local3.removeEventListener(__s0local1.ADDED, this.bindFunction(this.onAddedToLayer));
      this.ve.elementContainer.removeChild(__s22local3);
    }
    this._layerDic = new Map();
  };
  IsoObjectLayerManager.prototype.getLayer = function (__s26param0) {
    return this.layerDic.get(__s26param0);
  };
  Object.defineProperty(IsoObjectLayerManager.prototype, "ve", {
    get: function () {
      return this._ve;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoObjectLayerManager.prototype, "layerDic", {
    get: function () {
      return this._layerDic;
    },
    enumerable: true,
    configurable: true
  });
  return IsoObjectLayerManager;
}(__dep_export_CastleComponent.CastleComponent);
exports.IsoObjectLayerManager = __s0local2;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local2, "ICollectableRendererList");
