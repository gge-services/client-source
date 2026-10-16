Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_C2SKingdomSkipTransferVO = require("gge-module:export_C2SKingdomSkipTransferVO");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleKingdomEvent = require("gge-module:export_CastleKingdomEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleTransferResToKingdomProperties = require("gge-module:export_CastleTransferResToKingdomProperties");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __s0local0 = function (__s1param0) {
  function CastleSupportKingdomControls(__s3param0, __s3param1) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.kingdomVO = __s3param1;
    __s3local0.i_resources_txt_remainingTime = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3local0.disp.mc_sendTroops_InProgress.mc_sendTroops_progress.txt_time, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    __s3local0.i_troops_txt_remainingTime = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3local0.disp.mc_sendResources_InProgress.mc_sendResources_progress.txt_time, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3local0.disp.mc_sendTroops.txt_sendTroops, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_season_sendTroops"));
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3local0.disp.mc_sendResources.txt_sendResources, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_season_sendResources"));
    __dep_export_ButtonHelper.ButtonHelper.initButtons([__s3local0.disp.mc_sendTroops_InProgress.btn_minuteSkip, __s3local0.disp.mc_sendTroops_InProgress.btn_rubySkip, __s3local0.disp.mc_sendTroops.btn_sendTroops, __s3local0.disp.mc_sendResources_InProgress.btn_minuteSkip, __s3local0.disp.mc_sendResources_InProgress.btn_rubySkip, __s3local0.disp.mc_sendResources.btn_sendResources], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    __s3local0.disp.mc_sendTroops_InProgress.btn_minuteSkip.toolTipText = "timeSkipButton_tooltip";
    __s3local0.disp.mc_sendTroops_InProgress.mc_sendTroops_progress.toolTipText = "resttime";
    __s3local0.disp.mc_sendTroops_InProgress.mc_sendTroops_progress.mouseEnabled = false;
    __s3local0.disp.mc_sendResources_InProgress.btn_minuteSkip.toolTipText = "timeSkipButton_tooltip";
    __s3local0.disp.mc_sendResources_InProgress.mc_sendResources_progress.toolTipText = "resttime";
    __s3local0.disp.mc_sendResources_InProgress.mc_sendResources_progress.mouseEnabled = false;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleSupportKingdomControls, __s1param0);
  CastleSupportKingdomControls.prototype.onShow = function () {
    __s1param0.prototype.onShow.call(this);
    this.disp.mc_sendTroops_InProgress.btn_rubySkip.toolTipText = {
      t: "dialog_season_skipTransfer",
      p: [__dep_export_CastleModel.CastleModel.costsData.getFinalCostsStringC2(this.kingdomVO.skipUnitTravelC2Cost)]
    };
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.disp.mc_sendTroops_InProgress.btn_rubySkip, true);
    this.disp.mc_sendResources_InProgress.btn_rubySkip.toolTipText = {
      t: "dialog_season_skipTransfer",
      p: [__dep_export_CastleModel.CastleModel.costsData.getFinalCostsStringC2(this.kingdomVO.skipResourceTravelC2Cost)]
    };
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.disp.mc_sendResources_InProgress.btn_rubySkip, true);
    this.refreshTransfers();
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateTransfer));
    __dep_export_CastleModel.CastleModel.kingdomData.addEventListener(__dep_export_CastleKingdomEvent.CastleKingdomEvent.KINGDOMDATA_ARRIVED, this.bindFunction(this.onKingdomDataUpdated));
  };
  CastleSupportKingdomControls.prototype.onKingdomDataUpdated = function (__s7param0) {
    this.refreshTransfers();
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.disp.mc_sendTroops_InProgress.btn_rubySkip, true);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.disp.mc_sendResources_InProgress.btn_rubySkip, true);
  };
  CastleSupportKingdomControls.prototype.onUpdateTransfer = function (__s9param0) {
    this.refreshTransfers();
  };
  CastleSupportKingdomControls.prototype.onHide = function () {
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateTransfer));
    __dep_export_CastleModel.CastleModel.kingdomData.removeEventListener(__dep_export_CastleKingdomEvent.CastleKingdomEvent.KINGDOMDATA_ARRIVED, this.bindFunction(this.onKingdomDataUpdated));
    __s1param0.prototype.onHide.call(this);
  };
  CastleSupportKingdomControls.prototype.refreshTransfers = function () {
    this._kingdomGoodsTransfer = __dep_export_CastleModel.CastleModel.kingdomData.getIncomingGoodsTransferByKingdomID(this.kingdomVO.kID);
    this._kingdomUnitTransfer = __dep_export_CastleModel.CastleModel.kingdomData.getIncomingUnitsTransferByKingdomID(this.kingdomVO.kID);
    var __s13local0 = !!this._kingdomUnitTransfer && this._kingdomUnitTransfer.remainingTimeInSeconds > 0;
    var __s13local1 = !!this._kingdomGoodsTransfer && this._kingdomGoodsTransfer.remainingTimeInSeconds > 0;
    var __s13local2 = this.sendButtonsAreEnabled();
    this.disp.mc_sendTroops.visible = !__s13local0;
    this.disp.mc_sendTroops.btn_sendTroops.toolTipText = __s13local2 ? null : "dialog_season_sendTroops_notAvailable";
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.disp.mc_sendTroops.btn_sendTroops, __s13local2);
    this.disp.mc_sendResources.visible = !__s13local1;
    this.disp.mc_sendResources.btn_sendResources.toolTipText = __s13local2 ? null : "dialog_season_sendResources_notAvailable";
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.disp.mc_sendResources.btn_sendResources, __s13local2);
    this.disp.mc_sendTroops_InProgress.visible = __s13local0;
    this.disp.mc_sendTroops_InProgress.mc_icon.toolTipText = this._kingdomUnitTransfer ? this._kingdomUnitTransfer.toolTipText : null;
    this.disp.mc_sendResources_InProgress.visible = __s13local1;
    this.disp.mc_sendResources_InProgress.mc_icon.toolTipText = this._kingdomGoodsTransfer ? this._kingdomGoodsTransfer.toolTipText : null;
    this.refreshGoodsTransfer();
    this.refreshToopsTransfer();
  };
  CastleSupportKingdomControls.prototype.sendButtonsAreEnabled = function () {
    return __dep_export_CastleModel.CastleModel.kingdomData.numUnlockedKingdoms > 1 && __dep_export_CastleModel.CastleModel.userData.castleList.getMainCastlesInKingdoms([this.kingdomVO.kID]).length > 0 && !!__dep_export_CastleModel.CastleModel.userData.castleList.getMainCastleByKingdomID(this.kingdomVO.kID);
  };
  CastleSupportKingdomControls.prototype.refreshGoodsTransfer = function () {
    if (this._kingdomGoodsTransfer) {
      this.disp.mc_sendResources_InProgress.mc_sendResources_progress.progress.scaleX = this._kingdomGoodsTransfer.progressPercent;
      this.i_troops_txt_remainingTime.textContentVO.stringValue = __dep_exact_9e901e8e2483a22f.TimeStringHelper.getShortTimeStringBySeconds(this._kingdomGoodsTransfer.remainingTimeInSeconds, __dep_exact_9e901e8e2483a22f.TimeStringHelper.TWO_TIME_FORMAT);
    }
  };
  CastleSupportKingdomControls.prototype.refreshToopsTransfer = function () {
    if (this._kingdomUnitTransfer) {
      this.disp.mc_sendTroops_InProgress.mc_sendTroops_progress.progress.scaleX = this._kingdomUnitTransfer.progressPercent;
      this.i_resources_txt_remainingTime.textContentVO.stringValue = __dep_exact_9e901e8e2483a22f.TimeStringHelper.getShortTimeStringBySeconds(this._kingdomUnitTransfer.remainingTimeInSeconds, __dep_exact_9e901e8e2483a22f.TimeStringHelper.TWO_TIME_FORMAT);
    }
  };
  CastleSupportKingdomControls.prototype.onClick = function (__s23param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s23param0.target)) {
      switch (__s23param0.target) {
        case this.disp.mc_sendTroops.btn_sendTroops:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleTransferTroopsDialog.CastleTransferTroopsDialog, new __dep_export_CastleTransferTroopsToKingdomProperties.CastleTransferTroopsToKingdomProperties(this.kingdomVO));
          break;
        case this.disp.mc_sendResources.btn_sendResources:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleTransferResourcesDialog.CastleTransferResourcesDialog, new __dep_export_CastleTransferResToKingdomProperties.CastleTransferResToKingdomProperties(this.kingdomVO));
          break;
        case this.disp.mc_sendResources_InProgress.btn_rubySkip:
          if (this._kingdomGoodsTransfer.remainingTimeInSeconds >= 1) {
            __dep_export_ButtonHelper.ButtonHelper.enableButton(this.disp.mc_sendResources_InProgress.btn_rubySkip, false);
            __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SKingdomSkipTransferVO.C2SKingdomSkipTransferVO(this._kingdomGoodsTransfer.targetKingdomID, 2));
          }
          break;
        case this.disp.mc_sendTroops_InProgress.btn_rubySkip:
          if (this._kingdomUnitTransfer.remainingTimeInSeconds >= 1) {
            __dep_export_ButtonHelper.ButtonHelper.enableButton(this.disp.mc_sendTroops_InProgress.btn_rubySkip, false);
            __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SKingdomSkipTransferVO.C2SKingdomSkipTransferVO(this._kingdomUnitTransfer.targetKingdomID, 1));
          }
          break;
        case this.disp.mc_sendResources_InProgress.btn_minuteSkip:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleMinuteSkipDialog.CastleMinuteSkipDialog, new __dep_export_KingdomGoodsTravelMinuteSkipProperties.KingdomGoodsTravelMinuteSkipProperties(this.kingdomVO.kID));
          break;
        case this.disp.mc_sendTroops_InProgress.btn_minuteSkip:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleMinuteSkipDialog.CastleMinuteSkipDialog, new __dep_export_KingdomUnitsTravelMinuteSkipProperties.KingdomUnitsTravelMinuteSkipProperties(this.kingdomVO.kID));
      }
    }
  };
  return CastleSupportKingdomControls;
}(require("gge-module:export_CastleItemRenderer").CastleItemRenderer);
exports.CastleSupportKingdomControls = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleMinuteSkipDialog = require("gge-module:export_CastleMinuteSkipDialog");
var __dep_export_KingdomGoodsTravelMinuteSkipProperties = require("gge-module:export_KingdomGoodsTravelMinuteSkipProperties");
var __dep_export_KingdomUnitsTravelMinuteSkipProperties = require("gge-module:export_KingdomUnitsTravelMinuteSkipProperties");
var __dep_export_CastleTransferResourcesDialog = require("gge-module:export_CastleTransferResourcesDialog");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_CastleTransferTroopsDialog = require("gge-module:export_CastleTransferTroopsDialog");
var __dep_export_CastleTransferTroopsToKingdomProperties = require("gge-module:export_CastleTransferTroopsToKingdomProperties");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
