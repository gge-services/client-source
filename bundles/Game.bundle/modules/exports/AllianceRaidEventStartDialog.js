Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_AllianceRaidbossEventEventVO = require("gge-module:export_AllianceRaidbossEventEventVO");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function AllianceRaidEventStartDialog() {
    return __s1param0.call(this, AllianceRaidEventStartDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AllianceRaidEventStartDialog, __s1param0);
  AllianceRaidEventStartDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_close], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
  };
  AllianceRaidEventStartDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_are_start_header")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_teaser, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_are_start_openHelpInfo"));
    var __s7local0 = this.getTextIds();
    for (var __s7local1 = 0; __s7local1 < 3; __s7local1++) {
      this.textFieldManager.registerTextField(this.dialogDisp["txt_title" + __s7local1], new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId(__s7local0[__s7local1][0])));
      var __s7local2 = new __dep_exact_92d05af59ee2ff30.HTMLTextCustomVO();
      __s7local2.addLocalizedTextVO(new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s7local0[__s7local1][1]));
      this.textFieldManager.registerTextField(this.dialogDisp["txt_copy" + __s7local1], __s7local2);
    }
  };
  AllianceRaidEventStartDialog.prototype.onClick = function (__s11param0) {
    __s1param0.prototype.onClick.call(this, __s11param0);
    switch (__s11param0.target) {
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_ok:
        this.onOK();
    }
  };
  AllianceRaidEventStartDialog.prototype.onOK = function () {
    var __s14local0 = __dep_export_AllianceRaidbossEventEventVO.AllianceRaidbossEventEventVO.getActiveEventVO();
    if (__s14local0) {
      __dep_export_CastleModel.CastleModel.localData.savePlayerValue(__dep_export_AllianceRaidbossEventEventVO.AllianceRaidbossEventEventVO.SEEN_EVENT_KEY, 1, __s14local0.endTimestamp);
      __s14local0.openDialog();
    }
    this.hide();
  };
  AllianceRaidEventStartDialog.prototype.getTextIds = function () {
    return AllianceRaidEventStartDialog.TEXT_DEFAULT;
  };
  AllianceRaidEventStartDialog.TEXT_DEFAULT = [["dialog_are_start_desc1_title", "dialog_are_start_desc1_desc"], ["dialog_are_start_desc2_title", "dialog_are_start_desc2_desc"], ["dialog_are_start_desc3_title", "dialog_are_start_desc3_desc"]];
  AllianceRaidEventStartDialog.NAME = "AllianceRaidEventStart";
  return AllianceRaidEventStartDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.AllianceRaidEventStartDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
