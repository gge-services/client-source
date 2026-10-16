Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_C2STreasuremapGoodsTransferVO = require("gge-module:export_C2STreasuremapGoodsTransferVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CastleTransferResToSeasonProperties() {
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleTransferResToSeasonProperties, __s1param0);
  Object.defineProperty(CastleTransferResToSeasonProperties.prototype, "infoText", {
    get: function () {
      return "dialog_season_sendRes_info";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTransferResToSeasonProperties.prototype, "travelTime", {
    get: function () {
      if (this.treasuremapVO) {
        return this.treasuremapVO.travelTime;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTransferResToSeasonProperties.prototype, "exceptingKingdomIDs", {
    get: function () {
      return [__dep_exact_26a421b704832cff.FactionConst.KINGDOM_ID];
    },
    enumerable: true,
    configurable: true
  });
  CastleTransferResToSeasonProperties.prototype.isSpecialEvent = function (__s13param0) {
    return !this.seasonVO || this.seasonVO.eventId == __s13param0;
  };
  Object.defineProperty(CastleTransferResToSeasonProperties.prototype, "travelTaxRate", {
    get: function () {
      return (100 - this.seasonVO.treasureMapVO.resourceTravelTaxRate) / 100;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTransferResToSeasonProperties.prototype, "targetResources", {
    get: function () {
      return this.treasuremapVO.resources;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTransferResToSeasonProperties.prototype, "maxStorage", {
    get: function () {
      return this.treasuremapVO.resStorageMaxMixedCapacity;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTransferResToSeasonProperties.prototype, "hasInsufficientTime", {
    get: function () {
      return this.seasonVO.remainingEventTimeInSeconds < this.treasuremapVO.travelTime;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTransferResToSeasonProperties.prototype, "treasuremapVO", {
    get: function () {
      return this.seasonVO.treasureMapVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTransferResToSeasonProperties.prototype, "seasonVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO;
    },
    enumerable: true,
    configurable: true
  });
  CastleTransferResToSeasonProperties.prototype.getSendResourcesCommand = function (__s27param0, __s27param1, __s27param2) {
    return new __dep_export_C2STreasuremapGoodsTransferVO.C2STreasuremapGoodsTransferVO(this.treasuremapVO.mapID, __s27param0, __s27param1, __s27param2);
  };
  Object.defineProperty(CastleTransferResToSeasonProperties.prototype, "hideTabs", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTransferResToSeasonProperties.prototype, "resourceStorageCapacity", {
    get: function () {
      return this.treasuremapVO.resourceStorageCapacity;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTransferResToSeasonProperties.prototype, "targetInitialized", {
    get: function () {
      return this.treasuremapVO != null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTransferResToSeasonProperties.prototype, "isSubscriptionBuffed", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  return CastleTransferResToSeasonProperties;
}(__dep_exact_9e901e8e2483a22f.BasicProperties);
exports.CastleTransferResToSeasonProperties = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ITransferResourcesDialogProperties");
