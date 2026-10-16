Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_export_ClientConstUtils = require("gge-module:export_ClientConstUtils");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_IsoLayerEnum = require("gge-module:export_IsoLayerEnum");
var __dep_export_ASurroundingBuildingVE = require("gge-module:export_ASurroundingBuildingVE");
var __s0local0 = createjs.ErrorEvent;
var __s0local1 = function (__s1param0) {
  function AResourceFieldVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AResourceFieldVE, __s1param0);
  AResourceFieldVE.prototype.createDisp = function () {
    var __s5local0 = this;
    if (__dep_exact_9e901e8e2483a22f_2.BasicModel.basicLoaderData.isItemAssetVersioned(this.assetSharedLib)) {
      __dep_exact_9e901e8e2483a22f_1.loadAsset(this.assetSharedLib).then(function (__s8param0) {
        if (!(__s8param0 instanceof __s0local0)) {
          __s5local0.loadResourceAsset();
        }
      }).catch(function (__s11param0) {
        __dep_exact_9e901e8e2483a22f.warn("failed to load resource assets", __s11param0);
      });
    } else {
      this.loadResourceAsset();
    }
  };
  Object.defineProperty(AResourceFieldVE.prototype, "assetClipName", {
    get: function () {
      var __s14local0 = "";
      if (this.vo.isoData && !this.vo.isoData.areaData.isSeasonCamp && this.vo.isoData.areaData.areaInfo.kingdomID == __dep_exact_26a421b704832cff_1.WorldClassic.KINGDOM_ID && this.fieldVO.fieldEfficiency >= 0) {
        __s14local0 = "_Level" + this.fieldVO.getGfxLevel();
      }
      return "BackgroundResource_" + this.getKingdomNameWithTheme() + "_" + __dep_export_ClientConstUtils.ClientConstUtils.capitalizeFirstLetter(this.fieldVO.resourceType.name) + __s14local0;
    },
    set: function (__s17param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ASurroundingBuildingVE.ASurroundingBuildingVE.prototype, "assetClipName").set.call(this, __s17param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AResourceFieldVE.prototype, "assetSharedLib", {
    get: function () {
      var __s19local0 = "";
      if (this.vo.isoData && !this.vo.isoData.areaData.isTreasureCamp) {
        __s19local0 = "ResourcesAssets_SharedLib_" + this.getKingdomNameWithTheme();
      }
      return __s19local0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AResourceFieldVE.prototype, "assetFileName", {
    get: function () {
      var __s22local0 = "ResourcesAssets_";
      if (this.vo.isoData && this.vo.isoData.areaData.isTreasureCamp) {
        __s22local0 += "Seasoncamp" + __dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO.eventId;
      } else {
        __s22local0 += this.getKingdomNameWithTheme();
      }
      return __s22local0;
    },
    set: function (__s26param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ASurroundingBuildingVE.ASurroundingBuildingVE.prototype, "assetFileName").set.call(this, __s26param0);
    },
    enumerable: true,
    configurable: true
  });
  AResourceFieldVE.prototype.getVELayerType = function () {
    return __dep_export_IsoLayerEnum.IsoLayerEnum.RESOURCE_FIELDS;
  };
  AResourceFieldVE.prototype.getKingdomNameWithTheme = function () {
    var __s30local0;
    __s30local0 = this.vo.isoData && this.vo.isoData.areaData.isTreasureCamp && __dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO.eventId == __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_CRUSADE_SEAQUEEN ? "SeaQueen" : this.vo.getAreaKingdomName();
    if (__dep_export_IsoHelper.IsoHelper.view.canUseIsoEventSkin()) {
      __s30local0 += "_" + __dep_export_IsoHelper.IsoHelper.view.getIsoEventSkinSuffix();
    }
    return __s30local0;
  };
  AResourceFieldVE.prototype.onSpecialEventUpdated = function (__s33param0) {
    if (__s33param0.specialEventVO.eventId == __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_EVENT_SKIN) {
      this.updateDisp();
    }
  };
  Object.defineProperty(AResourceFieldVE.prototype, "fieldVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AResourceFieldVE.prototype, "delayLoadingUntilFree", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  return AResourceFieldVE;
}(__dep_export_ASurroundingBuildingVE.ASurroundingBuildingVE);
exports.AResourceFieldVE = __s0local1;
var __dep_export_IsoHelper = require("gge-module:export_IsoHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList", "IIngameUICapable");
