Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_DonationEventDialog = require("gge-module:export_DonationEventDialog");
var __s0local0 = function (__s1param0) {
  function DonationEventStartDialog() {
    return __s1param0.call(this, DonationEventStartDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(DonationEventStartDialog, __s1param0);
  DonationEventStartDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_close, this.dialogDisp.btn_help], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    this.dialogDisp.btn_help.toolTipText = "generic_help";
  };
  DonationEventStartDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_startDonationEvent_title")));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_new.txt_copy, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("new")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_teaser, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_startDonationEvent_join"));
    var __s7local0 = this.getTextIds();
    for (var __s7local1 = 0; __s7local1 < 3; __s7local1++) {
      this.textFieldManager.registerTextField(this.dialogDisp["txt_title" + __s7local1], new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId(__s7local0[__s7local1][0])));
      var __s7local2 = new __dep_exact_92d05af59ee2ff30.HTMLTextCustomVO();
      __s7local2.addLocalizedTextVO(new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s7local0[__s7local1][1]));
      this.textFieldManager.registerTextField(this.dialogDisp["txt_copy" + __s7local1], __s7local2);
    }
  };
  DonationEventStartDialog.prototype.onClick = function (__s11param0) {
    __s1param0.prototype.onClick.call(this, __s11param0);
    switch (__s11param0.target) {
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_help:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("dialog_mainDonationEvent_helpPopup"));
        break;
      case this.dialogDisp.btn_ok:
        this.onOK();
    }
  };
  DonationEventStartDialog.prototype.onOK = function () {
    var __s14local0 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_DONATION);
    if (__s14local0 && !__dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().isDialogVisible(__dep_export_DonationEventDialog.DonationEventDialog)) {
      __s14local0.openDialog();
    }
    this.hide();
  };
  DonationEventStartDialog.prototype.getTextIds = function () {
    return DonationEventStartDialog.TEXT_DEFAULT;
  };
  DonationEventStartDialog.TEXT_DEFAULT = [["dialog_startDonationEvent_subtitle1", "dialog_startDonationEvent_desc1"], ["dialog_startDonationEvent_subtitle2", "dialog_startDonationEvent_desc2"], ["rankingGlobal", "dialog_startDonationEvent_desc4"]];
  DonationEventStartDialog.NAME = "DonationEventStarter1";
  return DonationEventStartDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.DonationEventStartDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
