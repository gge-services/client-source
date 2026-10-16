Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_C2SAllianceChangeDescriptionVO = require("gge-module:export_C2SAllianceChangeDescriptionVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleAllianceForumData = require("gge-module:export_CastleAllianceForumData");
var __dep_export_CastleJSONTextFieldRestrictor = require("gge-module:export_CastleJSONTextFieldRestrictor");
var __s0local0 = function (__s1param0) {
  function CastleChangeDescriptionDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleChangeDescriptionDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleChangeDescriptionDialog, __s1param0);
  CastleChangeDescriptionDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_no, this.dialogDisp.btn_yes], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    this.dialogDisp.mc_description.txt_description.height = 270;
    this.itxt_description = this.textFieldManager.registerTextField(this.dialogDisp.mc_description.txt_description, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
    this.itxt_description.type = __dep_exact_81dacdf05bd32292_1.TextFieldType.INPUT;
    this._scrollComponent = new __dep_export_ModernTextScrollComponent.ModernTextScrollComponent(new __dep_export_SimpleScrollVO.SimpleScrollVO().initByParent(this.dialogDisp).addVisualElements([this.dialogDisp.bg_slider]).addMouseWheelElements([this.dialogDisp]), this.dialogDisp.mc_description.txt_description);
  };
  CastleChangeDescriptionDialog.prototype.showLoaded = function (__s7param0 = null) {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_alliance_editDescription"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_descTitle, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_alliance_description_new"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_alliance_description_copy")));
    this._messageTextRestrictor = new __dep_export_CastleJSONTextFieldRestrictor.CastleJSONTextFieldRestrictor();
    this._messageTextRestrictor.init(this.itxt_description, __dep_exact_26a421b704832cff.AllianceConst.DESCRIPTION_MAX_LENGTH);
    this.itxt_description.textContentVO.stringValue = this.dialogProperties.allianceVO.allianceDescription;
    this.itxt_description.selectable = true;
    this._inputBehaviourDesc = new __dep_export_HighlightAndClearInputTextBehaviour.HighlightAndClearInputTextBehaviour(this.dialogDisp.mc_description, this.itxt_description, false, false);
    this._scrollComponent.scrollToStart();
    this._scrollComponent.onShow();
    this._inputBehaviourDesc.onShow();
    __s1param0.prototype.showLoaded.call(this, __s7param0);
  };
  CastleChangeDescriptionDialog.prototype.hideLoaded = function (__s9param0 = null) {
    this._scrollComponent.onHide();
    this._inputBehaviourDesc.onHide();
    __s1param0.prototype.hideLoaded.call(this);
  };
  CastleChangeDescriptionDialog.prototype.onClick = function (__s11param0) {
    __s1param0.prototype.onClick.call(this, __s11param0);
    switch (__s11param0.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_no:
        this.hide();
        break;
      case this.dialogDisp.btn_yes:
        this.sendDescription();
        this.hide();
    }
  };
  CastleChangeDescriptionDialog.prototype.onCursorOver = function (__s14param0) {
    __s1param0.prototype.onCursorOver.call(this, __s14param0);
    if (__s14param0.target == this.dialogDisp.txt_description) {
      this.layoutManager.customCursor.hideCustomCursor();
    }
  };
  CastleChangeDescriptionDialog.prototype.onCursorOut = function (__s17param0) {
    __s1param0.prototype.onCursorOut.call(this, __s17param0);
    if (__s17param0.target == this.dialogDisp.txt_description) {
      this.layoutManager.customCursor.showCustomCursor();
    }
  };
  CastleChangeDescriptionDialog.prototype.sendDescription = function () {
    if (this.dialogProperties.allianceVO.allianceDescription != this.itxt_description.text) {
      if (this.itxt_description.text == "") {
        __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SAllianceChangeDescriptionVO.C2SAllianceChangeDescriptionVO("", 1));
      } else {
        var __s20local0 = __dep_export_CastleAllianceForumData.CastleAllianceForumData.getForumValidText(this.itxt_description.text);
        __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SAllianceChangeDescriptionVO.C2SAllianceChangeDescriptionVO(__s20local0, 1));
      }
    }
  };
  Object.defineProperty(CastleChangeDescriptionDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleChangeDescriptionDialog.NAME = "CastleChangeDescriptionEx_W";
  return CastleChangeDescriptionDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleChangeDescriptionDialog = __s0local0;
var __dep_export_SimpleScrollVO = require("gge-module:export_SimpleScrollVO");
var __dep_export_ModernTextScrollComponent = require("gge-module:export_ModernTextScrollComponent");
var __dep_export_HighlightAndClearInputTextBehaviour = require("gge-module:export_HighlightAndClearInputTextBehaviour");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
