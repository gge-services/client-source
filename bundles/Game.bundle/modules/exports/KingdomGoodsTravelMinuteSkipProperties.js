Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_C2SKingdomSkipTransferVO = require("gge-module:export_C2SKingdomSkipTransferVO");
var __dep_export_C2SMinuteSkipKingdomTransferVO = require("gge-module:export_C2SMinuteSkipKingdomTransferVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function KingdomGoodsTravelMinuteSkipProperties(__s3param0) {
    var __s3local0 = this;
    __s3local0.kingdomID = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).kingdomID = __s3param0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(KingdomGoodsTravelMinuteSkipProperties, __s1param0);
  Object.defineProperty(KingdomGoodsTravelMinuteSkipProperties.prototype, "transferVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.kingdomData.getIncomingGoodsTransferByKingdomID(this.kingdomID);
    },
    enumerable: true,
    configurable: true
  });
  KingdomGoodsTravelMinuteSkipProperties.prototype.getMinuteSkipCommand = function (__s7param0) {
    return new __dep_export_C2SMinuteSkipKingdomTransferVO.C2SMinuteSkipKingdomTransferVO(__s7param0, this.transferVO.targetKingdomID, 2);
  };
  KingdomGoodsTravelMinuteSkipProperties.prototype.getFullSkipCommand = function () {
    return new __dep_export_C2SKingdomSkipTransferVO.C2SKingdomSkipTransferVO(this.transferVO.targetKingdomID, 2);
  };
  KingdomGoodsTravelMinuteSkipProperties.prototype.isSkipAppliable = function () {
    return !!this.transferVO && this.transferVO.remainingTimeInSeconds > 0;
  };
  KingdomGoodsTravelMinuteSkipProperties.prototype.isFreeSkipActive = function () {
    return false;
  };
  KingdomGoodsTravelMinuteSkipProperties.prototype.isPrimeSaleActive = function () {
    return false;
  };
  KingdomGoodsTravelMinuteSkipProperties.prototype.getPrimeSaleDiscount = function () {
    return 0;
  };
  KingdomGoodsTravelMinuteSkipProperties.prototype.getNameText = function () {
    return new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_season_sendResources");
  };
  KingdomGoodsTravelMinuteSkipProperties.prototype.getAdditionalInfo = function () {
    return new __dep_exact_92d05af59ee2ff30_1.TextVO(this.kingdomVO.kingdomNameString);
  };
  KingdomGoodsTravelMinuteSkipProperties.prototype.getIconFrame = function () {
    return __dep_exact_f855840627e6e145.int(__dep_export_CastleMinuteSkipDialog.CastleMinuteSkipDialog.ICONFRAME_RESOURCE_TRANSFER);
  };
  KingdomGoodsTravelMinuteSkipProperties.prototype.getIconToolTipText = function () {
    return "dialog_season_sendResources";
  };
  KingdomGoodsTravelMinuteSkipProperties.prototype.displayPicture = function (__s27param0) {
    var __s27local0 = new Library.CastleInterfaceElements_Icons.Icon_ChangeWorld();
    __s27local0.gotoAndStop(this.changeWorldIconFrame);
    return __s27param0.addChild(__s27local0);
  };
  KingdomGoodsTravelMinuteSkipProperties.prototype.getTotalTime = function () {
    return this.transferVO.totalTravelTimeInSeconds;
  };
  KingdomGoodsTravelMinuteSkipProperties.prototype.getRemainingTime = function () {
    return this.transferVO.remainingTimeInSeconds;
  };
  KingdomGoodsTravelMinuteSkipProperties.prototype.getSkipCost = function () {
    return __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.costsData.getFinalCostsC2(this.kingdomVO.skipResourceTravelC2Cost));
  };
  Object.defineProperty(KingdomGoodsTravelMinuteSkipProperties.prototype, "kingdomVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.kingdomData.getKingdomVOByID(this.transferVO.targetKingdomID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(KingdomGoodsTravelMinuteSkipProperties.prototype, "changeWorldIconFrame", {
    get: function () {
      if (this.kingdomVO.kID == __dep_exact_26a421b704832cff.WorldIsland.KINGDOM_ID) {
        return 8;
      } else {
        return this.kingdomVO.kID + 1;
      }
    },
    enumerable: true,
    configurable: true
  });
  KingdomGoodsTravelMinuteSkipProperties.prototype.getRemainingTimeUntilFreeSkip = function () {
    return 0;
  };
  KingdomGoodsTravelMinuteSkipProperties.prototype.getRemainingPrimeSaleTime = function () {
    return 0;
  };
  return KingdomGoodsTravelMinuteSkipProperties;
}(__dep_exact_9e901e8e2483a22f.BasicProperties);
exports.KingdomGoodsTravelMinuteSkipProperties = __s0local0;
var __dep_export_CastleMinuteSkipDialog = require("gge-module:export_CastleMinuteSkipDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IMinuteSkipProperties");
