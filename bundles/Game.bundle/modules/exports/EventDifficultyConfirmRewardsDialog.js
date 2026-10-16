Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = createjs.Point;
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_CollectableRenderClipsList = require("gge-module:export_CollectableRenderClipsList");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_C2SSelectEventDifficultyVO = require("gge-module:export_C2SSelectEventDifficultyVO");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_DifficultyScalingRewardOverviewDialog = require("gge-module:export_DifficultyScalingRewardOverviewDialog");
var __dep_export_EventDifficultyRewardsOverviewDialogProperties = require("gge-module:export_EventDifficultyRewardsOverviewDialogProperties");
var __dep_export_DifficultyScalingHelper = require("gge-module:export_DifficultyScalingHelper");
var __s0local1 = function (__s1param0) {
  function EventDifficultyConfirmRewardsDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, EventDifficultyConfirmRewardsDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(EventDifficultyConfirmRewardsDialog, __s1param0);
  EventDifficultyConfirmRewardsDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_yes, this.dialogDisp.btn_no, this.dialogDisp.bnt_info], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_difficultyScaling_confirmClassic_desc"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_difficultyScaling_confirmClassic_title")));
  };
  EventDifficultyConfirmRewardsDialog.prototype.applyPropertiesLoaded = function (__s7param0 = null) {
    this.updateEffectList();
  };
  EventDifficultyConfirmRewardsDialog.prototype.updateEffectList = function () {
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displayMultipleItemsComplete(this, new __dep_export_CollectableRenderClipsList.CollectableRenderClipsList(this.dialogDisp, "mc_item").addItemMcs("mc_item").addInfoBtns("parent.btn_info"), this.dialogProperties.rewards, new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_DEFAULT, new __s0local0(60, 60)));
  };
  EventDifficultyConfirmRewardsDialog.prototype.onClick = function (__s11param0) {
    __s1param0.prototype.onClick.call(this, __s11param0);
    switch (__s11param0.target) {
      case this.dialogDisp.btn_yes:
        __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(this.dialogProperties.eventID).openEventDialogAfterNewParse = true;
        __dep_exact_9e901e8e2483a22f.BasicModel.smartfoxClient.sendCommandVO(new __dep_export_C2SSelectEventDifficultyVO.C2SSelectEventDifficultyVO(this.dialogProperties.eventID, 0, false));
        __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().hideAllDialogs();
        break;
      case this.dialogDisp.btn_no:
        this.hide();
        break;
      case this.dialogDisp.bnt_info:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_DifficultyScalingRewardOverviewDialog.DifficultyScalingRewardOverviewDialog, new __dep_export_EventDifficultyRewardsOverviewDialogProperties.EventDifficultyRewardsOverviewDialogProperties(null, __dep_export_DifficultyScalingHelper.DifficultyScalingHelper.getSinglePlayerScoreEvent(this.dialogProperties.eventID), __dep_export_DifficultyScalingHelper.DifficultyScalingHelper.getAllianceScoreEvent(this.dialogProperties.eventID)));
    }
  };
  Object.defineProperty(EventDifficultyConfirmRewardsDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  EventDifficultyConfirmRewardsDialog.__initialize_static_members = function () {
    EventDifficultyConfirmRewardsDialog.NAME = "EventDifficultyConfirmRewards";
  };
  return EventDifficultyConfirmRewardsDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.EventDifficultyConfirmRewardsDialog = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
__s0local1.__initialize_static_members();
