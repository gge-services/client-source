Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_3 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_4 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_5 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_C2SKingdomSkipTransferVO = require("gge-module:export_C2SKingdomSkipTransferVO");
var __dep_export_C2SMinuteSkipKingdomTransferVO = require("gge-module:export_C2SMinuteSkipKingdomTransferVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function KingdomUnitsTravelMinuteSkipProperties(__s3param0) {
    var __s3local0 = this;
    __s3local0.kingdomID = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).kingdomID = __s3param0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(KingdomUnitsTravelMinuteSkipProperties, __s1param0);
  Object.defineProperty(KingdomUnitsTravelMinuteSkipProperties.prototype, "transferVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.kingdomData.getIncomingUnitsTransferByKingdomID(this.kingdomID);
    },
    enumerable: true,
    configurable: true
  });
  KingdomUnitsTravelMinuteSkipProperties.prototype.getMinuteSkipCommand = function (__s7param0) {
    return new __dep_export_C2SMinuteSkipKingdomTransferVO.C2SMinuteSkipKingdomTransferVO(__s7param0, this.transferVO.targetKingdomID, 1);
  };
  KingdomUnitsTravelMinuteSkipProperties.prototype.getFullSkipCommand = function () {
    return new __dep_export_C2SKingdomSkipTransferVO.C2SKingdomSkipTransferVO(this.transferVO.targetKingdomID, 1);
  };
  KingdomUnitsTravelMinuteSkipProperties.prototype.isSkipAppliable = function () {
    return !!this.transferVO && this.transferVO.remainingTimeInSeconds > 0;
  };
  KingdomUnitsTravelMinuteSkipProperties.prototype.isFreeSkipActive = function () {
    return false;
  };
  KingdomUnitsTravelMinuteSkipProperties.prototype.isPrimeSaleActive = function () {
    return false;
  };
  KingdomUnitsTravelMinuteSkipProperties.prototype.getPrimeSaleDiscount = function () {
    return 0;
  };
  KingdomUnitsTravelMinuteSkipProperties.prototype.getNameText = function () {
    return new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_season_sendTroops");
  };
  KingdomUnitsTravelMinuteSkipProperties.prototype.getAdditionalInfo = function () {
    return new __dep_exact_92d05af59ee2ff30_1.TextVO(this.kingdomVO.kingdomNameString);
  };
  KingdomUnitsTravelMinuteSkipProperties.prototype.getIconFrame = function () {
    return __dep_exact_f855840627e6e145.int(__dep_export_CastleMinuteSkipDialog.CastleMinuteSkipDialog.ICONFRAME_UNIT_TRANSFER);
  };
  KingdomUnitsTravelMinuteSkipProperties.prototype.getIconToolTipText = function () {
    return "dialog_season_sendTroops";
  };
  KingdomUnitsTravelMinuteSkipProperties.prototype.displayPicture = function (__s27param0) {
    var __s27local0 = new Library.CastleInterfaceElements_Icons.Icon_ChangeWorld();
    __s27local0.gotoAndStop(this.changeWorldIconFrame);
    return __s27param0.addChild(__s27local0);
  };
  KingdomUnitsTravelMinuteSkipProperties.prototype.getTotalTime = function () {
    return this.transferVO.totalTravelTimeInSeconds;
  };
  KingdomUnitsTravelMinuteSkipProperties.prototype.getRemainingTime = function () {
    return this.transferVO.remainingTimeInSeconds;
  };
  KingdomUnitsTravelMinuteSkipProperties.prototype.getSkipCost = function () {
    return __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.costsData.getFinalCostsC2(this.kingdomVO.skipUnitTravelC2Cost));
  };
  Object.defineProperty(KingdomUnitsTravelMinuteSkipProperties.prototype, "kingdomVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.kingdomData.getKingdomVOByID(this.transferVO.targetKingdomID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(KingdomUnitsTravelMinuteSkipProperties.prototype, "changeWorldIconFrame", {
    get: function () {
      switch (this.kingdomID) {
        case __dep_exact_26a421b704832cff_1.WorldClassic.KINGDOM_ID:
          return 1;
        case __dep_exact_26a421b704832cff_2.WorldDessert.KINGDOM_ID:
          return 2;
        case __dep_exact_26a421b704832cff_3.WorldIce.KINGDOM_ID:
          return 3;
        case __dep_exact_26a421b704832cff_5.WorldVolcano.KINGDOM_ID:
          return 4;
        case __dep_exact_26a421b704832cff_4.WorldIsland.KINGDOM_ID:
          return 8;
        case __dep_exact_26a421b704832cff.FactionConst.KINGDOM_ID:
          return 6;
        default:
          return 1;
      }
    },
    enumerable: true,
    configurable: true
  });
  KingdomUnitsTravelMinuteSkipProperties.prototype.getRemainingTimeUntilFreeSkip = function () {
    return 0;
  };
  KingdomUnitsTravelMinuteSkipProperties.prototype.getRemainingPrimeSaleTime = function () {
    return 0;
  };
  return KingdomUnitsTravelMinuteSkipProperties;
}(__dep_exact_9e901e8e2483a22f.BasicProperties);
exports.KingdomUnitsTravelMinuteSkipProperties = __s0local0;
var __dep_export_CastleMinuteSkipDialog = require("gge-module:export_CastleMinuteSkipDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IMinuteSkipProperties");
