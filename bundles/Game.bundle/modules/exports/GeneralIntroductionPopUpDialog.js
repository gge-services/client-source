Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_GeneralsHelper = require("gge-module:export_GeneralsHelper");
var __s0local0 = function (__s1param0) {
  function GeneralIntroductionPopUpDialog() {
    return __s1param0.call(this, GeneralIntroductionPopUpDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GeneralIntroductionPopUpDialog, __s1param0);
  GeneralIntroductionPopUpDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_help, this.dialogDisp.btn_close, this.dialogDisp.btn_goto], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("generals_introduction_popup_header1"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_subheader1, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("generals_introduction_popup_subHeader1"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description1, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("generals_introduction_popup_description1"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_subheader2, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("generals_introduction_popup_subHeader2"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description2, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("generals_introduction_popup_description2"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_subheader3, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("generals_introduction_popup_subHeader3"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description3, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("generals_introduction_popup_description3"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_info, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("generals_introduction_popup_questreminder"));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_goto.txt_label, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("generals_introduction_popup_questbutton"));
  };
  GeneralIntroductionPopUpDialog.prototype.onClick = function (__s7param0) {
    __s1param0.prototype.onClick.call(this, __s7param0);
    switch (__s7param0.target) {
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_help:
        __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.showHelper("", __dep_exact_92d05af59ee2ff30_1.Localize.text("help_generals_introduction_popup"));
        break;
      case this.dialogDisp.btn_goto:
        __dep_export_GeneralsHelper.GeneralsHelper.showGeneralsHubDialog();
        this.hide();
    }
  };
  GeneralIntroductionPopUpDialog.NAME = "GeneralIntroductionPopUpExt";
  return GeneralIntroductionPopUpDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.GeneralIntroductionPopUpDialog = __s0local0;
