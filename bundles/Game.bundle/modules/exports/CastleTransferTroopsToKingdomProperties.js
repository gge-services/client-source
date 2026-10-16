Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_3 = require("gge-module:exact_26a421b704832cff");
var __dep_export_C2SKingdomUnitTransferVO = require("gge-module:export_C2SKingdomUnitTransferVO");
var __dep_export_C2SGetCampUnitCapacity = require("gge-module:export_C2SGetCampUnitCapacity");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CastleTransferTroopsToKingdomProperties(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.targetKingdomVO = __s3param0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleTransferTroopsToKingdomProperties, __s1param0);
  Object.defineProperty(CastleTransferTroopsToKingdomProperties.prototype, "unitTravelTime", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.kingdomData.getKingdomVOByID(this.targetKingdomVO.kID).unitTravelTime;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTransferTroopsToKingdomProperties.prototype, "exceptingKingdomID", {
    get: function () {
      return [this.targetKingdomVO.kID, __dep_exact_26a421b704832cff_1.FactionConst.KINGDOM_ID];
    },
    enumerable: true,
    configurable: true
  });
  CastleTransferTroopsToKingdomProperties.prototype.isToolTravelingAllowed = function (__s9param0) {
    return __s9param0.isTravelingToTargetAllowed(this.targetKingdomVO.kID, __dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_ALIEN_CAMP) || __s9param0.isTravelingToTargetAllowed(this.targetKingdomVO.kID, __dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_RED_ALIEN_CAMP) || __s9param0.isTravelingToTargetAllowed(this.targetKingdomVO.kID, __dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_KINGDOM_CASTLE) || __s9param0.isTravelingToTargetAllowed(this.targetKingdomVO.kID, __dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_FACTION_CAMP);
  };
  Object.defineProperty(CastleTransferTroopsToKingdomProperties.prototype, "addUnitsDialogKey", {
    get: function () {
      if (this.targetKingdomVO.kID == __dep_exact_26a421b704832cff_1.FactionConst.KINGDOM_ID) {
        return __dep_export_CastleSendTroopsToFactionAddUnitsDialog.CastleSendTroopsToFactionAddUnitsDialog;
      } else {
        return __dep_export_CastleSendTroopsAddUnitsDialog.CastleSendTroopsAddUnitsDialog;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTransferTroopsToKingdomProperties.prototype, "unitTravelTaxRate", {
    get: function () {
      return this.targetKingdomVO.unitTravelTaxRate;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTransferTroopsToKingdomProperties.prototype, "insufficentTimeAlert", {
    get: function () {
      if (this.targetKingdomVO.kID == __dep_exact_26a421b704832cff_1.FactionConst.KINGDOM_ID) {
        var __s17local0 = __dep_exact_81dacdf05bd32292.castAs(__dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION), "FactionEventVO");
        if (__s17local0 && __s17local0.remainingEventTimeInSeconds < this.unitTravelTime) {
          return true;
        }
      }
      return false;
    },
    enumerable: true,
    configurable: true
  });
  CastleTransferTroopsToKingdomProperties.prototype.getUnitTransferCommand = function (__s21param0, __s21param1, __s21param2) {
    if (__s21param2) {
      return new __dep_export_C2SKingdomUnitTransferVO.C2SKingdomUnitTransferVO(__s21param0.selectedCastleVO.objectId, __s21param0.selectedCastleVO.kingdomID, this.targetKingdomVO.kID, __s21param1, __s21param2.selectedData.objectId);
    } else {
      return new __dep_export_C2SKingdomUnitTransferVO.C2SKingdomUnitTransferVO(__s21param0.selectedCastleVO.objectId, __s21param0.selectedCastleVO.kingdomID, this.targetKingdomVO.kID, __s21param1, -1);
    }
  };
  CastleTransferTroopsToKingdomProperties.prototype.isSpecialEvent = function (__s25param0) {
    switch (__s25param0) {
      case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION:
        return this.targetKingdomVO.kID == __dep_exact_26a421b704832cff_1.FactionConst.KINGDOM_ID;
      case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_ISLAND_KINGDOM:
        return this.targetKingdomVO.kID == __dep_exact_26a421b704832cff_3.WorldIsland.KINGDOM_ID;
    }
    return false;
  };
  Object.defineProperty(CastleTransferTroopsToKingdomProperties.prototype, "targetCapacity", {
    get: function () {
      return Number.MAX_VALUE;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTransferTroopsToKingdomProperties.prototype, "descriptionTextID", {
    get: function () {
      return "dialog_kingdom_sendTroops_info";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTransferTroopsToKingdomProperties.prototype, "additionalDataUpdateCommands", {
    get: function () {
      var __s32local0 = [];
      if (this.targetKingdomVO.kID == __dep_exact_26a421b704832cff_1.FactionConst.KINGDOM_ID) {
        __s32local0.push(new __dep_export_C2SGetCampUnitCapacity.C2SGetCampUnitCapacity(__dep_export_CastleModel.CastleModel.userData.castleList.getMainFactionCastle().objectId));
      }
      return __s32local0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTransferTroopsToKingdomProperties.prototype, "targetFoodConsumption", {
    get: function () {
      if (__dep_export_CastleModel.CastleModel.userCastleListDetailed.getMainCastleByKingdomID(this.targetKingdomVO.kID)) {
        return __dep_export_CastleModel.CastleModel.userCastleListDetailed.getMainCastleByKingdomID(this.targetKingdomVO.kID).getResourceProduction(__dep_export_CollectableEnum.CollectableEnum.FOOD);
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  return CastleTransferTroopsToKingdomProperties;
}(__dep_exact_9e901e8e2483a22f.BasicProperties);
exports.CastleTransferTroopsToKingdomProperties = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CastleSendTroopsAddUnitsDialog = require("gge-module:export_CastleSendTroopsAddUnitsDialog");
var __dep_export_CastleSendTroopsToFactionAddUnitsDialog = require("gge-module:export_CastleSendTroopsToFactionAddUnitsDialog");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local0, "ITransferTroopsDialogProperties");
