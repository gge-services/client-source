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
var __dep_export_C2SMinuteSkipMapTransferVO = require("gge-module:export_C2SMinuteSkipMapTransferVO");
var __dep_export_C2STreasuremapSkipTransferVO = require("gge-module:export_C2STreasuremapSkipTransferVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function SeasonTravelGoodsMinuteSkipProperties(__s3param0, __s3param1) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.treasureMapVO = __s3param0;
    __s3local0.seasonEventVO = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SeasonTravelGoodsMinuteSkipProperties, __s1param0);
  SeasonTravelGoodsMinuteSkipProperties.prototype.getMinuteSkipCommand = function (__s5param0) {
    return new __dep_export_C2SMinuteSkipMapTransferVO.C2SMinuteSkipMapTransferVO(__s5param0, this.seasonEventVO.mapID, 2);
  };
  SeasonTravelGoodsMinuteSkipProperties.prototype.getFullSkipCommand = function () {
    return new __dep_export_C2STreasuremapSkipTransferVO.C2STreasuremapSkipTransferVO(this.seasonEventVO.eventId, this.treasureMapVO.mapID, 2);
  };
  SeasonTravelGoodsMinuteSkipProperties.prototype.isSkipAppliable = function () {
    return !!this.treasureMapVO && this.treasureMapVO.remainingGoodsTransferTimeInSeconds > 0;
  };
  SeasonTravelGoodsMinuteSkipProperties.prototype.isFreeSkipActive = function () {
    return false;
  };
  SeasonTravelGoodsMinuteSkipProperties.prototype.isPrimeSaleActive = function () {
    return false;
  };
  SeasonTravelGoodsMinuteSkipProperties.prototype.getPrimeSaleDiscount = function () {
    return 0;
  };
  SeasonTravelGoodsMinuteSkipProperties.prototype.getNameText = function () {
    return new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_season_sendResources");
  };
  SeasonTravelGoodsMinuteSkipProperties.prototype.getAdditionalInfo = function () {
    return new __dep_exact_92d05af59ee2ff30_1.TextVO(this.seasonEventVO.seasonNameString);
  };
  SeasonTravelGoodsMinuteSkipProperties.prototype.getIconFrame = function () {
    return __dep_exact_f855840627e6e145.int(__dep_export_CastleMinuteSkipDialog.CastleMinuteSkipDialog.ICONFRAME_RESOURCE_TRANSFER);
  };
  SeasonTravelGoodsMinuteSkipProperties.prototype.getIconToolTipText = function () {
    return "dialog_season_sendResources";
  };
  SeasonTravelGoodsMinuteSkipProperties.prototype.displayPicture = function (__s25param0) {
    var __s25local0 = new Library.CastleInterfaceElements_Icons.Icon_ChangeWorld();
    __s25local0.gotoAndStop(this.changeWorldIconFrame);
    return __s25param0.addChild(__s25local0);
  };
  SeasonTravelGoodsMinuteSkipProperties.prototype.getTotalTime = function () {
    return this.treasureMapVO.travelTime;
  };
  SeasonTravelGoodsMinuteSkipProperties.prototype.getRemainingTime = function () {
    return this.treasureMapVO.remainingGoodsTransferTimeInSeconds;
  };
  SeasonTravelGoodsMinuteSkipProperties.prototype.getSkipCost = function () {
    return __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.costsData.getFinalCostsC2(this.treasureMapVO.skipCostC2));
  };
  Object.defineProperty(SeasonTravelGoodsMinuteSkipProperties.prototype, "changeWorldIconFrame", {
    get: function () {
      switch (this.seasonEventVO.eventId) {
        case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_CRUSADE_THORNKING:
          return 5;
        case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_CRUSADE_SEAQUEEN:
          return 7;
        case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_CRUSADE_UNDERWORLD:
          return 9;
      }
      return 1;
    },
    enumerable: true,
    configurable: true
  });
  SeasonTravelGoodsMinuteSkipProperties.prototype.getRemainingTimeUntilFreeSkip = function () {
    return 0;
  };
  SeasonTravelGoodsMinuteSkipProperties.prototype.getRemainingPrimeSaleTime = function () {
    return 0;
  };
  return SeasonTravelGoodsMinuteSkipProperties;
}(__dep_exact_9e901e8e2483a22f.BasicProperties);
exports.SeasonTravelGoodsMinuteSkipProperties = __s0local0;
var __dep_export_CastleMinuteSkipDialog = require("gge-module:export_CastleMinuteSkipDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IMinuteSkipProperties");
