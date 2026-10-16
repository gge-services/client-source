Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function AllianceRaidEventEndDialog_NoRewards() {
    return __s1param0.call(this, AllianceRaidEventEndDialog_NoRewards.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AllianceRaidEventEndDialog_NoRewards, __s1param0);
  AllianceRaidEventEndDialog_NoRewards.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_ok], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
  };
  AllianceRaidEventEndDialog_NoRewards.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_collector_eventEnd_title_tenthAnniversary")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialogue_are_eventended_description"));
  };
  AllianceRaidEventEndDialog_NoRewards.prototype.onClick = function (__s9param0) {
    __s1param0.prototype.onClick.call(this, __s9param0);
    switch (__s9param0.target) {
      case this.dialogDisp.btn_ok:
        this.hide();
    }
  };
  AllianceRaidEventEndDialog_NoRewards.NAME = "AllianceRaidEventEnd_NoRewards";
  return AllianceRaidEventEndDialog_NoRewards;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.AllianceRaidEventEndDialog_NoRewards = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
