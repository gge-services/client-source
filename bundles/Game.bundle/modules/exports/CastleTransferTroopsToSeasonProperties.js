Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_C2STreasureMapsVO = require("gge-module:export_C2STreasureMapsVO");
var __dep_export_C2STreasuremapUnitTransferVO = require("gge-module:export_C2STreasuremapUnitTransferVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CastleTransferTroopsToSeasonProperties() {
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleTransferTroopsToSeasonProperties, __s1param0);
  Object.defineProperty(CastleTransferTroopsToSeasonProperties.prototype, "unitTravelTime", {
    get: function () {
      return this.treasuremapVO.travelTime;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTransferTroopsToSeasonProperties.prototype, "unitTravelTaxRate", {
    get: function () {
      return this.treasuremapVO.unitTravelTaxRate;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTransferTroopsToSeasonProperties.prototype, "exceptingKingdomID", {
    get: function () {
      return [__dep_exact_26a421b704832cff.FactionConst.KINGDOM_ID];
    },
    enumerable: true,
    configurable: true
  });
  CastleTransferTroopsToSeasonProperties.prototype.isToolTravelingAllowed = function (__s11param0) {
    return __s11param0.isTravelingToTargetAllowed(this.treasuremapVO.mapID, this.getAreaType()) && __s11param0.attackType == __dep_export_ClientConstCastle.ClientConstCastle.ATTACK_TOOL && __s11param0.canBeUsedToAttackNPC;
  };
  Object.defineProperty(CastleTransferTroopsToSeasonProperties.prototype, "addUnitsDialogKey", {
    get: function () {
      return __dep_export_CastleSendTroopsToSeasonAddUnitsDialog.CastleSendTroopsToSeasonAddUnitsDialog;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTransferTroopsToSeasonProperties.prototype, "insufficentTimeAlert", {
    get: function () {
      return this.seasonVO.remainingEventTimeInSeconds < this.treasuremapVO.travelTime;
    },
    enumerable: true,
    configurable: true
  });
  CastleTransferTroopsToSeasonProperties.prototype.getUnitTransferCommand = function (__s17param0, __s17param1, __s17param2) {
    return new __dep_export_C2STreasuremapUnitTransferVO.C2STreasuremapUnitTransferVO(this.treasuremapVO.mapID, __s17param0.selectedCastleVO.objectId, __s17param0.selectedCastleVO.kingdomID, __s17param1);
  };
  CastleTransferTroopsToSeasonProperties.prototype.isSpecialEvent = function (__s19param0) {
    return !this.seasonVO || this.seasonVO.eventId == __s19param0;
  };
  Object.defineProperty(CastleTransferTroopsToSeasonProperties.prototype, "targetCapacity", {
    get: function () {
      return this.treasuremapVO.freeUnitSlots;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTransferTroopsToSeasonProperties.prototype, "seasonVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTransferTroopsToSeasonProperties.prototype, "treasuremapVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO.treasureMapVO;
    },
    enumerable: true,
    configurable: true
  });
  CastleTransferTroopsToSeasonProperties.prototype.getAreaType = function () {
    return __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_TREASURE_CAMP;
  };
  Object.defineProperty(CastleTransferTroopsToSeasonProperties.prototype, "descriptionTextID", {
    get: function () {
      return "dialog_season_sendTroops_info";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTransferTroopsToSeasonProperties.prototype, "additionalDataUpdateCommands", {
    get: function () {
      var __s31local0 = [];
      __s31local0.push(new __dep_export_C2STreasureMapsVO.C2STreasureMapsVO(this.treasuremapVO.mapID));
      return __s31local0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTransferTroopsToSeasonProperties.prototype, "targetFoodConsumption", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  return CastleTransferTroopsToSeasonProperties;
}(__dep_exact_9e901e8e2483a22f.BasicProperties);
exports.CastleTransferTroopsToSeasonProperties = __s0local0;
var __dep_export_CastleSendTroopsToSeasonAddUnitsDialog = require("gge-module:export_CastleSendTroopsToSeasonAddUnitsDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ITransferTroopsDialogProperties");
