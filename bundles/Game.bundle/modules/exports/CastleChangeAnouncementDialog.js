Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_C2SAllianceChangeDescriptionVO = require("gge-module:export_C2SAllianceChangeDescriptionVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTextScrollVO = require("gge-module:export_CastleTextScrollVO");
var __dep_export_CastleFullScreenInputBlocker = require("gge-module:export_CastleFullScreenInputBlocker");
var __s0local0 = function (__s1param0) {
  function CastleChangeAnouncementDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleChangeAnouncementDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleChangeAnouncementDialog, __s1param0);
  CastleChangeAnouncementDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_no, this.dialogDisp.btn_yes]);
  };
  CastleChangeAnouncementDialog.prototype.showLoaded = function (__s7param0 = null) {
    this._scrollComponent ||= new __dep_export_CastleTextScrollComponent.CastleTextScrollComponent(new __dep_export_CastleTextScrollVO.CastleTextScrollVO(this.dialogDisp.txt_description, this.dialogDisp.mc_scrollHandle.btn_up, this.dialogDisp.mc_scrollHandle.btn_down, this.dialogDisp.mc_scrollHandle.btn_slider, this.dialogDisp.mc_scrollHandle.mc_sliderLine, [this.dialogDisp.mc_scrollHandle]));
    this._scrollComponent.invisibleOnFit = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_alliance_changeAnouncement_copy"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_descTitle, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_alliance_changeAnouncement_new"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_alliance_changeAnouncement"));
    this.itxt_description = this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_CastleModel.CastleModel.allianceData.myAllianceVO.anouncement));
    this.itxt_description.maxChars = __dep_exact_26a421b704832cff.AllianceConst.DESCRIPTION_MAX_LENGTH;
    this.itxt_description.selectable = true;
    this._scrollComponent.scrollToStart();
    new __dep_export_CastleFullScreenInputBlocker.CastleFullScreenInputBlocker(this.dialogDisp.mc_block);
    this._scrollComponent.onShow();
    __s1param0.prototype.showLoaded.call(this, __s7param0);
  };
  CastleChangeAnouncementDialog.prototype.hideLoaded = function (__s9param0 = null) {
    this._scrollComponent.onHide();
    __s1param0.prototype.hideLoaded.call(this, __s9param0);
  };
  CastleChangeAnouncementDialog.prototype.onClick = function (__s11param0) {
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
  CastleChangeAnouncementDialog.prototype.onCursorOver = function (__s14param0) {
    __s1param0.prototype.onCursorOver.call(this, __s14param0);
    if (__s14param0.target == this.dialogDisp.txt_description) {
      this.layoutManager.customCursor.hideCustomCursor();
    }
  };
  CastleChangeAnouncementDialog.prototype.onCursorOut = function (__s17param0) {
    __s1param0.prototype.onCursorOut.call(this, __s17param0);
    if (__s17param0.target == this.dialogDisp.txt_description) {
      this.layoutManager.customCursor.showCustomCursor();
    }
  };
  CastleChangeAnouncementDialog.prototype.sendDescription = function () {
    if (this.dialogProperties.allianceVO.anouncement != this.itxt_description.text) {
      if (this.itxt_description.text == "") {
        __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SAllianceChangeDescriptionVO.C2SAllianceChangeDescriptionVO(__dep_exact_9e901e8e2483a22f.TextValide.getValideSmartFoxJSONTextMessage(""), 0));
      } else if (__dep_exact_9e901e8e2483a22f.TextValide.isSmartFoxValide(this.itxt_description.text)) {
        __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SAllianceChangeDescriptionVO.C2SAllianceChangeDescriptionVO(__dep_exact_9e901e8e2483a22f.TextValide.getValideSmartFoxJSONTextMessage(this.itxt_description.text), 0));
      } else {
        __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SAllianceChangeDescriptionVO.C2SAllianceChangeDescriptionVO(__dep_exact_9e901e8e2483a22f.TextValide.getCleanChatText(this.itxt_description.text), 0));
      }
    }
  };
  Object.defineProperty(CastleChangeAnouncementDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleChangeAnouncementDialog.__initialize_static_members = function () {
    CastleChangeAnouncementDialog.NAME = "CastleChangeDescriptionEx";
  };
  return CastleChangeAnouncementDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleChangeAnouncementDialog = __s0local0;
var __dep_export_CastleTextScrollComponent = require("gge-module:export_CastleTextScrollComponent");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
