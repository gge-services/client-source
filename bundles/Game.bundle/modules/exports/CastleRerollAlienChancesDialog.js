Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleRerollAlienChancesDialog() {
    return __s1param0.call(this, CastleRerollAlienChancesDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleRerollAlienChancesDialog, __s1param0);
  CastleRerollAlienChancesDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close], __dep_export_ClickFeedbackButton.ClickFeedbackButton, 1);
  };
  CastleRerollAlienChancesDialog.prototype.onClick = function (__s7param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s7param0.target)) {
      __s1param0.prototype.onClick.call(this, __s7param0);
      switch (__s7param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
      }
    }
  };
  CastleRerollAlienChancesDialog.prototype.showLoaded = function (__s11param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s11param0);
    this.updateRewards();
    this.chanceList.onShow();
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_dethrone_chances_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_dethrone_chances_subtitle"));
  };
  CastleRerollAlienChancesDialog.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    this.chanceList.onHide();
  };
  CastleRerollAlienChancesDialog.prototype.updateRewards = function () {
    if (!this.chanceList) {
      this.chanceList = new __dep_export_CastleRerollAlienChanceDialogList.CastleRerollAlienChanceDialogList(this.dialogDisp);
      this.chanceList.update();
    }
  };
  CastleRerollAlienChancesDialog.NAME = "CastleRerollAlienChances";
  return CastleRerollAlienChancesDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleRerollAlienChancesDialog = __s0local0;
var __dep_export_CastleRerollAlienChanceDialogList = require("gge-module:export_CastleRerollAlienChanceDialogList");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
