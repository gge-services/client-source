Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_SkinnableDialog = require("gge-module:export_SkinnableDialog");
var __dep_export_CastleArtifactBuyPieceDialogProperties = require("gge-module:export_CastleArtifactBuyPieceDialogProperties");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleArtifactEventDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleArtifactEventDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleArtifactEventDialog, __s1param0);
  CastleArtifactEventDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_reward, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_COLON, ["reward"]));
    this.itxt_speechBubble = this.textFieldManager.registerTextField(this.dialogDisp.txt_speechBubble, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(""));
    this.itxt_desc = this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(""));
    this.itxt_tip = this.textFieldManager.registerTextField(this.dialogDisp.txt_tip, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(""));
    this.itxt_time = this.textFieldManager.registerTextField(this.dialogDisp.mc_time.txt_time, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
    this.itxt_speechBubble.autoFitToBounds = true;
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_buyPiece]);
    var __s5local0 = new __s0local0(35, 55);
    this.centeredRewardComponent = new __dep_export_CastleCenteredRewardRendererListComponent.CastleCenteredRewardRendererListComponent(this.dialogDisp.mc_rewards, __s5local0);
    this.artifact = new __dep_export_ArtifactComponent.ArtifactComponent(this.dialogDisp.mc_artifact);
  };
  CastleArtifactEventDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.updateRewards();
    this.updateArtifact();
    this.setTime();
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateSpecialEvent));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, this.bindFunction(this.onRefreshSpecialevent));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
  };
  CastleArtifactEventDialog.prototype.onUpdateSpecialEvent = function (__s9param0) {
    this.setTime();
  };
  CastleArtifactEventDialog.prototype.onRemoveEvent = function (__s11param0) {
    if (__s11param0.specialEventVO.eventId == this.dialogProperties.eventVO.eventId) {
      this.hide();
    }
  };
  CastleArtifactEventDialog.prototype.onRefreshSpecialevent = function (__s14param0) {
    if (__s14param0.specialEventVO.eventId == this.dialogProperties.eventVO.eventId) {
      this.dialogProperties.eventVO = __s14param0.specialEventVO;
      this.updateArtifact();
      this.updateRewards();
    }
  };
  CastleArtifactEventDialog.prototype.updateArtifact = function () {
    this.dialogDisp.btn_buyPiece.visible = !this.dialogProperties.eventVO.hasAllParts;
    this.itxt_time.visible = !this.dialogProperties.eventVO.hasAllParts;
    this.dialogDisp.mc_time.toolTipText = null;
    if (this.dialogProperties.eventVO.hasAllParts) {
      this.itxt_speechBubble.textContentVO.textId = "dialog_artifact_" + this.dialogProperties.eventVO.skinID + "_main_bubble_done";
      this.itxt_desc.textContentVO.textId = "dialog_artifact_" + this.dialogProperties.eventVO.skinID + "_main_desc1_done";
      this.itxt_tip.textContentVO.textId = "";
    } else {
      this.itxt_speechBubble.textContentVO.textId = "dialog_artifact_" + this.dialogProperties.eventVO.skinID + "_main_bubble";
      this.itxt_desc.textContentVO.textId = "dialog_artifact_" + this.dialogProperties.eventVO.skinID + "_main_desc1";
      this.itxt_tip.textContentVO.textId = "dialog_artifact_" + this.dialogProperties.eventVO.skinID + "_main_desc2";
    }
    this.dialogDisp.btn_buyPiece.toolTipText = "dialog_artifact_" + this.dialogProperties.eventVO.skinID + "_main_buyTooltip";
    this.itxt_tip.y = this.itxt_desc.y + this.itxt_desc.textHeight + 10;
    this.artifact.init(this.dialogProperties.eventVO);
  };
  CastleArtifactEventDialog.prototype.updateRewards = function () {
    var __s21local0 = this.dialogProperties.eventVO.artifactReward;
    this.centeredRewardComponent.showRewards(__s21local0);
    for (var __s21local1 = 0; __s21local1 < CastleArtifactEventDialog.MAX_REWARD_UNITTYPES; __s21local1++) {
      this.dialogDisp.mc_rewards["item" + __s21local1].mc_received.visible = this.dialogProperties.eventVO.hasAllParts;
    }
  };
  CastleArtifactEventDialog.prototype.setTime = function () {
    if (!this.dialogProperties.eventVO.hasAllParts) {
      __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.setEventTime(this.dialogDisp.mc_time.txt_time, this.dialogProperties.eventVO.remainingEventTimeInSeconds);
      __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.setEventTimeToolTip(this.dialogDisp.mc_time, this.dialogProperties.eventVO.remainingEventTimeInSeconds);
    }
  };
  CastleArtifactEventDialog.prototype.onClick = function (__s28param0) {
    __s1param0.prototype.onClick.call(this, __s28param0);
    switch (__s28param0.target) {
      case this.dialogDisp.btn_buyPiece:
        __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDefaultDialogs(__dep_export_CastleArtifactBuyPieceDialog.CastleArtifactBuyPieceDialog, new __dep_export_CastleArtifactBuyPieceDialogProperties.CastleArtifactBuyPieceDialogProperties(this.dialogProperties.eventVO));
        break;
      case this.dialogDisp.btn_close:
        this.hide();
    }
  };
  CastleArtifactEventDialog.prototype.hideLoaded = function (__s31param0 = null) {
    __s1param0.prototype.hideLoaded.call(this);
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateSpecialEvent));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, this.bindFunction(this.onRefreshSpecialevent));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
    this.artifact.onHide();
  };
  Object.defineProperty(CastleArtifactEventDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleArtifactEventDialog.__initialize_static_members = function () {
    CastleArtifactEventDialog.NAME = "CastleArtifactEvent";
    CastleArtifactEventDialog.MAX_REWARD_UNITTYPES = 5;
  };
  return CastleArtifactEventDialog;
}(__dep_export_SkinnableDialog.SkinnableDialog);
exports.CastleArtifactEventDialog = __s0local1;
var __dep_export_CastleCenteredRewardRendererListComponent = require("gge-module:export_CastleCenteredRewardRendererListComponent");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_ArtifactComponent = require("gge-module:export_ArtifactComponent");
var __dep_export_CastleArtifactBuyPieceDialog = require("gge-module:export_CastleArtifactBuyPieceDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
__s0local1.__initialize_static_members();
