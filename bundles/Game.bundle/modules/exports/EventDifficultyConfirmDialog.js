Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_DifficultyScalingHelper = require("gge-module:export_DifficultyScalingHelper");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_C2SSelectEventDifficultyVO = require("gge-module:export_C2SSelectEventDifficultyVO");
var __s0local0 = function (__s1param0) {
  function EventDifficultyConfirmDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, EventDifficultyConfirmDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(EventDifficultyConfirmDialog, __s1param0);
  EventDifficultyConfirmDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_yes, this.dialogDisp.btn_no], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_difficultyScaling_confirmDifficulty_desc"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_difficultyScaling_confirmDifficulty_title")));
  };
  EventDifficultyConfirmDialog.prototype.applyPropertiesLoaded = function (__s7param0 = null) {
    __dep_export_DifficultyScalingHelper.DifficultyScalingHelper.addDifficultyIcon(this.dialogDisp.mc_icon0, this.dialogProperties.difficultyVO, 60, 60, null);
    __dep_export_DifficultyScalingHelper.DifficultyScalingHelper.addDifficultyIcon(this.dialogDisp.mc_icon1, this.dialogProperties.difficultyVO, 60, 60, null);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_difficulty, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId(this.dialogProperties.difficultyVO.name_textID))).autoFitToBounds = true;
  };
  EventDifficultyConfirmDialog.prototype.onClick = function (__s9param0) {
    __s1param0.prototype.onClick.call(this, __s9param0);
    switch (__s9param0.target) {
      case this.dialogDisp.btn_yes:
        __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(this.dialogProperties.eventID).openEventDialogAfterNewParse = true;
        __dep_exact_9e901e8e2483a22f.BasicModel.smartfoxClient.sendCommandVO(new __dep_export_C2SSelectEventDifficultyVO.C2SSelectEventDifficultyVO(this.dialogProperties.eventID, this.dialogProperties.difficultyVO.difficultyID, this.dialogProperties.c2Unlock));
        __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().hideAllDialogs();
        break;
      case this.dialogDisp.btn_no:
        this.hide();
    }
  };
  Object.defineProperty(EventDifficultyConfirmDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  EventDifficultyConfirmDialog.__initialize_static_members = function () {
    EventDifficultyConfirmDialog.NAME = "EventDifficultyConfirm";
  };
  return EventDifficultyConfirmDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.EventDifficultyConfirmDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
