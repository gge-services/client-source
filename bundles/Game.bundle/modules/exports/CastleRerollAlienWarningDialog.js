Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
var __s0local0 = function (__s1param0) {
  function CastleRerollAlienWarningDialog() {
    return __s1param0.call(this, CastleRerollAlienWarningDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleRerollAlienWarningDialog, __s1param0);
  CastleRerollAlienWarningDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_cancel, this.dialogDisp.btn_yes], __dep_export_ClickFeedbackButton.ClickFeedbackButton, 1);
    __dep_export_ButtonHelper.ButtonHelper.initCheckBox(this.dialogDisp.btn_cbx);
    this.checkbox = __dep_export_ButtonHelper.ButtonHelper.getBasicButton(this.dialogDisp.btn_cbx);
  };
  CastleRerollAlienWarningDialog.prototype.onClick = function (__s7param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s7param0.target)) {
      __s1param0.prototype.onClick.call(this, __s7param0);
      switch (__s7param0.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_cancel:
          this.hide();
          break;
        case this.dialogDisp.btn_yes:
          this.onOk();
          break;
        case this.dialogDisp.btn_cbx:
          this.checkbox.toggleSelected();
      }
    }
  };
  CastleRerollAlienWarningDialog.prototype.onOk = function () {
    this.dialogProperties.functionYes(true);
    this.hide();
    if (this.checkbox.isSelected) {
      __dep_export_CastleModel.CastleModel.alienRerollData.showWarningPopup = false;
    }
  };
  CastleRerollAlienWarningDialog.prototype.showLoaded = function (__s14param0 = null) {
    __s1param0.prototype.showLoaded.call(this);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("attention")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_supportReplacementWarning_desc"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_cbx, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_supportReplacementWarning_notShow"));
    this.checkbox.deselected();
  };
  Object.defineProperty(CastleRerollAlienWarningDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleRerollAlienWarningDialog.NAME = "CastleRerollAlienWarning";
  return CastleRerollAlienWarningDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleRerollAlienWarningDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
