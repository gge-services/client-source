Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_C2SGetFusionForgeInfoEventVO = require("gge-module:export_C2SGetFusionForgeInfoEventVO");
var __dep_export_CastleLoginEvent = require("gge-module:export_CastleLoginEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleBasicData = require("gge-module:export_CastleBasicData");
var __dep_export_DecorationForgeSelectResultVO = require("gge-module:export_DecorationForgeSelectResultVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ClientConstFusion = require("gge-module:export_ClientConstFusion");
var __dep_export_FusionForgeEvent = require("gge-module:export_FusionForgeEvent");
var __dep_export_FusionForgeDataXml = require("gge-module:export_FusionForgeDataXml");
var __s0local0 = function (__s1param0) {
  function FusionForgeData(__s3param0) {
    var __s3local0 = this;
    __s3local0._xml = new __dep_export_FusionForgeDataXml.FusionForgeDataXml();
    __s3local0._forges = new Map();
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).xml.parseXml(__s3param0);
    __s3local0.init();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(FusionForgeData, __s1param0);
  FusionForgeData.prototype.init = function () {
    this._forges = new Map();
    for (var __s5local0 = 0, __s5local1 = Array.from(this._xml.fusionSystems.values()); __s5local0 < __s5local1.length; __s5local0++) {
      var __s5local2 = __s5local1[__s5local0];
      if (__s5local2 !== undefined) {
        var __s5local3 = new __dep_export_FusionForgeVO.FusionForgeVO(__s5local2.id);
        this._forges.set(__s5local2.id, __s5local3);
      }
    }
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleLoginEvent.CastleLoginEvent.ON_GBD_ARRIVED, this.bindFunction(this.onGbdArrived));
  };
  FusionForgeData.prototype.reset = function () {
    if (this._forges != null) {
      for (var __s10local0 = 0, __s10local1 = Array.from(this._forges.values()); __s10local0 < __s10local1.length; __s10local0++) {
        __s10local1[__s10local0].destroy();
      }
    }
    this.init();
    __s1param0.prototype.destroy.call(this);
  };
  FusionForgeData.prototype.parseFFI = function (__s15param0) {
    if (__s15param0) {
      if (__s15param0 != null) {
        for (var __s15local0 = 0, __s15local1 = __s15param0; __s15local0 < __s15local1.length; __s15local0++) {
          var __s15local2 = __s15local1[__s15local0];
          if (__s15local2 !== undefined) {
            this.getForge(__s15local2.FID).parseServerObject(__s15local2);
          }
        }
      }
      __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_FusionForgeEvent.FusionForgeEvent(__dep_export_FusionForgeEvent.FusionForgeEvent.ON_FUSION_FORGE_INFO_UPDATED));
    }
  };
  FusionForgeData.prototype.parseFFL = function (__s22param0 = null) {
    __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_FusionForgeEvent.FusionForgeEvent(__dep_export_FusionForgeEvent.FusionForgeEvent.ON_FORGE_LEVEL_UP, [__s22param0]));
  };
  FusionForgeData.prototype.parseFSR = function (__s24param0 = null) {
    __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_FusionForgeEvent.FusionForgeEvent(__dep_export_FusionForgeEvent.FusionForgeEvent.ON_FORGE_ENERGY_RECHARGED, [__s24param0]));
  };
  FusionForgeData.prototype.parseDFF = function (__s26param0) {
    if (__s26param0) {
      var __s26local0 = __dep_export_CastleModel.CastleModel.wodData.createVObyWOD(__s26param0.WID, __dep_export_CastleWodData.CastleWodData.TYPE_BUILDING);
      __s26local0.parseServerInfoShort(__s26param0);
      __s26local0.updateData();
      var __s26local1 = new __dep_export_CollectableItemBuildingVO.CollectableItemBuildingVO();
      __s26local1.buildingVO = __s26local0;
      var __s26local2 = new __dep_export_DecorationForgeSelectResultVO.DecorationForgeSelectResultVO(__s26local1, __s26param0.SID, __s26param0.AID);
      var __s26local3 = __dep_exact_f855840627e6e145.int(__s26param0.BFXP);
      __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_FusionForgeEvent.FusionForgeEvent(__dep_export_FusionForgeEvent.FusionForgeEvent.ON_FUSE_DONE, [__s26local2, __s26local3]));
    }
  };
  FusionForgeData.prototype.parseFCC = function (__s29param0) {
    __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_FusionForgeEvent.FusionForgeEvent(__dep_export_FusionForgeEvent.FusionForgeEvent.ON_CATALYST_CONVERSION_DONE, [__s29param0]));
  };
  FusionForgeData.prototype.getForge = function (__s31param0) {
    return this._forges.get(__s31param0);
  };
  FusionForgeData.prototype.hasAnyForgeFullEnergy = function () {
    if (this._forges != null) {
      for (var __s33local0 = 0, __s33local1 = Array.from(this._forges.values()); __s33local0 < __s33local1.length; __s33local0++) {
        var __s33local2 = __s33local1[__s33local0];
        if (__s33local2 !== undefined && __s33local2.getCurrentEnergyFillFactor() >= __dep_export_ClientConstFusion.ClientConstFusion.FULL_ENERGY_PERCENTAGE_FACTOR) {
          return true;
        }
      }
    }
    return false;
  };
  FusionForgeData.prototype.onGbdArrived = function (__s39param0) {
    var __s39local0 = [];
    for (var __s39local1 = 0, __s39local2 = Array.from(this._xml.fusionSystems.values()); __s39local1 < __s39local2.length; __s39local1++) {
      var __s39local3 = __s39local2[__s39local1];
      __s39local0.push(__s39local3.id);
    }
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetFusionForgeInfoEventVO.C2SGetFusionForgeInfoEventVO(__s39local0));
  };
  Object.defineProperty(FusionForgeData.prototype, "xml", {
    get: function () {
      return this._xml;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FusionForgeData.prototype, "forges", {
    get: function () {
      return this._forges;
    },
    enumerable: true,
    configurable: true
  });
  return FusionForgeData;
}(__dep_export_CastleBasicData.CastleBasicData);
exports.FusionForgeData = __s0local0;
var __dep_export_CollectableItemBuildingVO = require("gge-module:export_CollectableItemBuildingVO");
var __dep_export_CastleWodData = require("gge-module:export_CastleWodData");
var __dep_export_FusionForgeVO = require("gge-module:export_FusionForgeVO");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IUpdatable");
