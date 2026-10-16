Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
var __s0local0 = function (__s1param0) {
  function CastleTempServerConfirmationDialog(__s3param0 = null) {
    return __s1param0.call(this, __s3param0 || CastleTempServerConfirmationDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleTempServerConfirmationDialog, __s1param0);
  CastleTempServerConfirmationDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok, this.dialogDisp.btn_cancel], __dep_export_ClickFeedbackButton.ClickFeedbackButton);
  };
  CastleTempServerConfirmationDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("attention")));
    if (this.dialogProps.globalServerID == __dep_exact_26a421b704832cff.GlobalServerConst.TEMP_SERVER) {
      if (this.dialogProps.preBuildCastle) {
        this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_tempServer_preBuiltCastle_buyConfirmationFree_desc"));
      } else {
        this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_tempServer_preBuiltCastle_returnConfirmation_desc"));
      }
    } else {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_chooseCastleConfirm_desc"));
    }
  };
  CastleTempServerConfirmationDialog.prototype.onClick = function (__s13param0) {
    __s1param0.prototype.onClick.call(this, __s13param0);
    switch (__s13param0.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_cancel:
        this.hide();
        break;
      case this.dialogDisp.btn_ok:
        this.onOK();
    }
  };
  CastleTempServerConfirmationDialog.prototype.onOK = function () {
    if (this.dialogProps.onComplete) {
      this.dialogProps.onComplete();
    }
    this.hide();
  };
  Object.defineProperty(CastleTempServerConfirmationDialog.prototype, "dialogProps", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleTempServerConfirmationDialog.NAME = "CastleTempServerConfirmation";
  return CastleTempServerConfirmationDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleTempServerConfirmationDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
