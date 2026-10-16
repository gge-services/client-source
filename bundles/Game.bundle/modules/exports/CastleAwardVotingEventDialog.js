Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstTextIds = require("gge-module:export_ClientConstTextIds");
var __s0local0 = function (__s1param0) {
  function CastleAwardVotingEventDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleAwardVotingEventDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAwardVotingEventDialog, __s1param0);
  CastleAwardVotingEventDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_vote, this.dialogDisp.btn_close]);
    this.dialogDisp.btn_vote.gotoAndStop(2);
    this.textFieldManager.registerTextField(this.dialogDisp.btn_vote.txt_label, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_award_button"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_EGAevent_copy"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_messageBubble, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_EGAevent_bubble"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_reward_left_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_EGAevent_price1"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_reward_left_value, new __dep_exact_92d05af59ee2ff30_1.TextVO("200"));
    this.dialogDisp.mc_ruby1.toolTipText = __dep_export_ClientConstTextIds.ClientConstTextIds.C2;
  };
  CastleAwardVotingEventDialog.prototype.onClick = function (__s7param0) {
    __s1param0.prototype.onClick.call(this, __s7param0);
    if (__s7param0.target == this.dialogDisp.btn_vote) {
      var __s7local0 = new __dep_exact_81dacdf05bd32292.URLRequest("http://european-games-award.com/voting");
      __dep_exact_81dacdf05bd32292_2.navigateToURL(__s7local0, "_blank");
    }
    if (__s7param0.target == this.dialogDisp.btn_close) {
      this.hide();
    }
  };
  CastleAwardVotingEventDialog.__initialize_static_members = function () {
    CastleAwardVotingEventDialog.NAME = "CastleAwardVotingEventExternal";
  };
  return CastleAwardVotingEventDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleAwardVotingEventDialog = __s0local0;
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
