Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_84d43d9c404bd4d8 = require("gge-module:exact_84d43d9c404bd4d8");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_C2SResearchFinishInstantVO = require("gge-module:export_C2SResearchFinishInstantVO");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleResearchEvent = require("gge-module:export_CastleResearchEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_SubscriptionHelper = require("gge-module:export_SubscriptionHelper");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = createjs.Point;
var __s0local2 = function () {
  function ResearchProgressInfo(__s3param0) {
    this._disp = __s3param0;
    this._disp.btn_minuteSkip.toolTipText = "timeSkipButton_tooltip";
    this.researchProgressBar = new __dep_exact_84d43d9c404bd4d8.BasicProgressBar(__s3param0.mc_bar);
    this.itxt_timeProgress = __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s3param0.txt_time, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    __dep_export_ButtonHelper.ButtonHelper.initButtons([__s3param0.btn_buyInstant, __s3param0.btn_minuteSkip], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
  }
  ResearchProgressInfo.prototype.show = function () {
    this._disp.addEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
    __dep_export_CastleModel.CastleModel.researchData.addEventListener(__dep_export_CastleResearchEvent.CastleResearchEvent.RESEARCH_INFO_UPDATE, this.bindFunction(this.updateResearch));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.RFI_ARRIVED, this.bindFunction(this.updateResearch));
    this.updateResearch();
  };
  ResearchProgressInfo.prototype.hide = function () {
    this._disp.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.updateProgress));
    __dep_export_CastleModel.CastleModel.researchData.removeEventListener(__dep_export_CastleResearchEvent.CastleResearchEvent.RESEARCH_INFO_UPDATE, this.bindFunction(this.updateResearch));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.RFI_ARRIVED, this.bindFunction(this.updateResearch));
  };
  ResearchProgressInfo.prototype.onClick = function (__s9param0) {
    switch (__s9param0.target) {
      case this._disp.btn_buyInstant:
        this.buyResearchInstant();
        break;
      case this._disp.btn_minuteSkip:
        ResearchProgressInfo.spendMinuteSkip();
    }
  };
  ResearchProgressInfo.spendMinuteSkip = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleMinuteSkipDialog.CastleMinuteSkipDialog, new __dep_export_ResearchMinuteSkipProperties.ResearchMinuteSkipProperties());
  };
  ResearchProgressInfo.prototype.buyResearchInstant = function () {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SResearchFinishInstantVO.C2SResearchFinishInstantVO());
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this._disp.btn_buyInstant, false);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this._disp.btn_minuteSkip, false);
  };
  ResearchProgressInfo.prototype.updateProgress = function (__s16param0 = null) {
    if (__dep_export_CastleModel.CastleModel.researchData.isSomeResearchActive) {
      var __s16local0 = __dep_export_CastleModel.CastleModel.researchData.currentResearchVO;
      var __s16local1 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.researchData.remainingResearchTimeInSeconds());
      var __s16local2 = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getShortTimeString(__s16local1);
      this.itxt_timeProgress.textContentVO.stringValue = __dep_exact_92d05af59ee2ff30.Localize.digitalClock(__s16local2);
      __dep_export_SubscriptionHelper.SubscriptionHelper.showSubscriptionStarToTextField(this.itxt_timeProgress, __dep_export_CastleModel.CastleModel.subscriptionData.getEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_RESEARCH_BOOST) > 0, 15, new __s0local1(-3, 0), false);
      this.researchProgressBar.scaleX = 1 - __s16local1 / __s16local0.researchDuration;
      var __s16local3 = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.ResearchConst.getFastCompleteCostC2(__s16local1, __dep_export_CastleModel.CastleModel.userData.userLevel));
      var __s16local4 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.costsData.getFinalCostsC2(__s16local3));
      this._disp.btn_buyInstant.toolTipText = {
        t: "research_skip",
        p: [__s16local4]
      };
    }
  };
  ResearchProgressInfo.prototype.updateResearch = function (__s19param0 = null) {
    this._disp.visible = __dep_export_CastleModel.CastleModel.researchData.isSomeResearchActive;
    if (__dep_export_CastleModel.CastleModel.researchData.isSomeResearchActive) {
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this._disp.btn_buyInstant, true);
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this._disp.btn_minuteSkip, true);
      var __s19local0 = __dep_export_CastleModel.CastleModel.researchData.currentResearchVO;
      var __s19local1 = this._disp.mc_iconHolder;
      __dep_export_ResearchIconHelper.ResearchIconHelper.addResearchIcon(__s19local0.groupVO, __s19local1, ResearchProgressInfo.ICON_SIZE);
      __s19local1.toolTipText = __s19local0.fullNameText;
      this.updateProgress();
      __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.updateProgress));
    }
  };
  ResearchProgressInfo.ICON_SIZE = 65;
  return ResearchProgressInfo;
}();
exports.ResearchProgressInfo = __s0local2;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_ResearchIconHelper = require("gge-module:export_ResearchIconHelper");
var __dep_export_CastleMinuteSkipDialog = require("gge-module:export_CastleMinuteSkipDialog");
var __dep_export_ResearchMinuteSkipProperties = require("gge-module:export_ResearchMinuteSkipProperties");
