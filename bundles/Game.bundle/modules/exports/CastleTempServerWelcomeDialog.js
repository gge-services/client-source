Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_TempServerWelcomeDialogList = require("gge-module:export_TempServerWelcomeDialogList");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
var __dep_export_TempServerHelper = require("gge-module:export_TempServerHelper");
var __s0local0 = function (__s1param0) {
  function CastleTempServerWelcomeDialog() {
    var __s3local0 = this;
    __s3local0.pages = 2;
    __s3local0._currentPageIndex = -1;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, CastleTempServerWelcomeDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleTempServerWelcomeDialog, __s1param0);
  CastleTempServerWelcomeDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_close, this.dialogDisp.btn_left, this.dialogDisp.btn_right], __dep_export_ClickFeedbackButton.ClickFeedbackButton);
  };
  CastleTempServerWelcomeDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempServer_start_header")));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_ok.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_tempServer_welcomePopup_startButton"));
    this.setPageIndex(0);
    this.dialogDisp.mc_teaser.gotoAndStop(__dep_export_TempServerHelper.TempServerHelper.getAssetFrame());
    this._itemList.onShow();
  };
  CastleTempServerWelcomeDialog.prototype.onClick = function (__s9param0) {
    __s1param0.prototype.onClick.call(this, __s9param0);
    switch (__s9param0.target) {
      case this.dialogDisp.btn_ok:
        this.hide();
        break;
      case this.dialogDisp.btn_left:
        this.changePage(-1);
        break;
      case this.dialogDisp.btn_right:
        this.changePage(1);
    }
  };
  CastleTempServerWelcomeDialog.prototype.changePage = function (__s12param0) {
    if (this._currentPageIndex + __s12param0 >= this.pages) {
      this.setPageIndex(0);
    } else if (this._currentPageIndex + __s12param0 < 0) {
      this.setPageIndex(this.pages - 1);
    } else {
      this.setPageIndex(this._currentPageIndex + __s12param0);
    }
  };
  CastleTempServerWelcomeDialog.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    if (this._itemList) {
      this._itemList.onHide();
    }
  };
  CastleTempServerWelcomeDialog.prototype.updateItems = function () {
    this._itemList ||= new __dep_export_TempServerWelcomeDialogList.TempServerWelcomeDialogList(this.dialogDisp);
    this._itemList.update(this._currentPageIndex);
  };
  CastleTempServerWelcomeDialog.prototype.setPageIndex = function (__s22param0) {
    if (this._currentPageIndex != __s22param0) {
      var __s22local0 = [__dep_exact_92d05af59ee2ff30.Localize.text("dialog_tempServer_welcomePopup_pageCounter", [__s22param0 + 1, this.pages])];
      this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_tempServer_welcomePopup_pageHeader_" + (__s22param0 + 1), __s22local0));
      this._currentPageIndex = __s22param0;
      this.updateItems();
    }
  };
  CastleTempServerWelcomeDialog.NAME = "CastleTempServerWelcome";
  return CastleTempServerWelcomeDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleTempServerWelcomeDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
