Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_C2SMinuteSkipResearchVO = require("gge-module:export_C2SMinuteSkipResearchVO");
var __dep_export_C2SResearchFinishInstantVO = require("gge-module:export_C2SResearchFinishInstantVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function ResearchMinuteSkipProperties() {
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ResearchMinuteSkipProperties, __s1param0);
  ResearchMinuteSkipProperties.prototype.getMinuteSkipCommand = function (__s5param0) {
    return new __dep_export_C2SMinuteSkipResearchVO.C2SMinuteSkipResearchVO(__s5param0);
  };
  ResearchMinuteSkipProperties.prototype.getFullSkipCommand = function () {
    return new __dep_export_C2SResearchFinishInstantVO.C2SResearchFinishInstantVO();
  };
  ResearchMinuteSkipProperties.prototype.isSkipAppliable = function () {
    return __dep_export_CastleModel.CastleModel.researchData.isSomeResearchActive;
  };
  ResearchMinuteSkipProperties.prototype.isFreeSkipActive = function () {
    return false;
  };
  ResearchMinuteSkipProperties.prototype.isPrimeSaleActive = function () {
    return false;
  };
  ResearchMinuteSkipProperties.prototype.getPrimeSaleDiscount = function () {
    return 0;
  };
  ResearchMinuteSkipProperties.prototype.getNameText = function () {
    return new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(ResearchMinuteSkipProperties.researchVO.fullNameText);
  };
  ResearchMinuteSkipProperties.prototype.getAdditionalInfo = function () {
    return new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("building_level", [ResearchMinuteSkipProperties.researchVO.level]);
  };
  ResearchMinuteSkipProperties.prototype.getIconFrame = function () {
    return __dep_exact_f855840627e6e145.int(__dep_export_CastleMinuteSkipDialog.CastleMinuteSkipDialog.ICONFRAME_RESEARCH);
  };
  ResearchMinuteSkipProperties.prototype.getIconToolTipText = function () {
    return "research";
  };
  ResearchMinuteSkipProperties.prototype.displayPicture = function (__s25param0) {
    __dep_export_ResearchIconHelper.ResearchIconHelper.addResearchIcon(ResearchMinuteSkipProperties.researchVO.groupVO, __s25param0);
    return __s25param0;
  };
  ResearchMinuteSkipProperties.prototype.getTotalTime = function () {
    return ResearchMinuteSkipProperties.researchVO.researchDuration;
  };
  ResearchMinuteSkipProperties.prototype.getRemainingTime = function () {
    return __dep_export_CastleModel.CastleModel.researchData.remainingResearchTimeInSeconds();
  };
  ResearchMinuteSkipProperties.prototype.getSkipCost = function () {
    return __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.ResearchConst.getFastCompleteCostC2(__dep_export_CastleModel.CastleModel.researchData.remainingResearchTimeInSeconds(), __dep_export_CastleModel.CastleModel.userData.userLevel));
  };
  Object.defineProperty(ResearchMinuteSkipProperties, "researchVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.researchData.currentResearchVO;
    },
    enumerable: true,
    configurable: true
  });
  ResearchMinuteSkipProperties.prototype.getRemainingTimeUntilFreeSkip = function () {
    return 0;
  };
  ResearchMinuteSkipProperties.prototype.getRemainingPrimeSaleTime = function () {
    return 0;
  };
  return ResearchMinuteSkipProperties;
}(__dep_exact_9e901e8e2483a22f.BasicProperties);
exports.ResearchMinuteSkipProperties = __s0local0;
var __dep_export_ResearchIconHelper = require("gge-module:export_ResearchIconHelper");
var __dep_export_CastleMinuteSkipDialog = require("gge-module:export_CastleMinuteSkipDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IMinuteSkipProperties");
