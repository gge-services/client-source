Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_TempServerHelper = require("gge-module:export_TempServerHelper");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleTempServerStartDialog() {
    return __s1param0.call(this, CastleTempServerStartDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleTempServerStartDialog, __s1param0);
  CastleTempServerStartDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_close, this.dialogDisp.btn_help], __dep_export_ClickFeedbackButton.ClickFeedbackButton);
  };
  CastleTempServerStartDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempServer_start_header")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_teaser, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_tempServer_start_openHelpInfo"));
    var __s7local0 = this.getTextIds();
    for (var __s7local1 = 0; __s7local1 < 3; __s7local1++) {
      this.textFieldManager.registerTextField(this.dialogDisp["txt_title" + __s7local1], new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId(__s7local0[__s7local1][0])));
      this.textFieldManager.registerTextField(this.dialogDisp["txt_copy" + __s7local1], new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s7local0[__s7local1][1]));
      this.dialogDisp["mc_teaser" + __s7local1].gotoAndStop(__dep_export_TempServerHelper.TempServerHelper.getAssetFrame());
    }
  };
  CastleTempServerStartDialog.prototype.onClick = function (__s11param0) {
    __s1param0.prototype.onClick.call(this, __s11param0);
    switch (__s11param0.target) {
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_help:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_tempServer_start"));
        break;
      case this.dialogDisp.btn_ok:
        this.onOK();
    }
  };
  CastleTempServerStartDialog.prototype.onOK = function () {
    if (__dep_export_TempServerHelper.TempServerHelper.tmpServerEvent) {
      __dep_export_TempServerHelper.TempServerHelper.tmpServerEvent.openDialog();
    }
    this.hide();
  };
  CastleTempServerStartDialog.prototype.getTextIds = function () {
    if (__dep_export_TempServerHelper.TempServerHelper.tmpServerEvent.isCrossPlay) {
      return CastleTempServerStartDialog.TEXT_CROSSPLAY;
    } else {
      return CastleTempServerStartDialog.TEXT_DEFAULT;
    }
  };
  CastleTempServerStartDialog.TEXT_DEFAULT = [["dialog_tempServer_start_desc1_title", "dialog_tempServer_start_desc1_desc"], ["dialog_tempServer_start_desc2_title", "dialog_tempServer_start_desc2_desc"], ["dialog_tempServer_start_desc3_title", "dialog_tempServer_start_desc3_desc"]];
  CastleTempServerStartDialog.TEXT_CROSSPLAY = [["dialog_tempServer_start_desc1_title", "dialog_tempServer_start_desc1_desc_crossplay"], ["dialog_tempServer_start_desc2_title", "dialog_tempServer_start_desc2_desc_crossplay"], ["dialog_tempServer_start_desc3_title", "dialog_tempServer_start_desc3_desc"]];
  CastleTempServerStartDialog.NAME = "CastleTempServerStarter";
  return CastleTempServerStartDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleTempServerStartDialog = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
