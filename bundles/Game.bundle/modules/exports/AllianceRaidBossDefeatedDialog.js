Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_IsoHelper = require("gge-module:export_IsoHelper");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_SeasonLeagueSimpleRewardsComponent = require("gge-module:export_SeasonLeagueSimpleRewardsComponent");
var __s0local0 = function (__s1param0) {
  function AllianceRaidBossDefeatedDialog() {
    return __s1param0.call(this, AllianceRaidBossDefeatedDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AllianceRaidBossDefeatedDialog, __s1param0);
  AllianceRaidBossDefeatedDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok, this.dialogDisp.mc_reward.btn_minus, this.dialogDisp.mc_reward.btn_plus], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    this._rewards = new __dep_export_SeasonLeagueSimpleRewardsComponent.SeasonLeagueSimpleRewardsComponent(this.dialogDisp.mc_reward, false, false);
  };
  AllianceRaidBossDefeatedDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_teaser);
    var __s7local0 = "ARE_EndTeaser_BossDefeated_" + this.dialogProperties().bossID + (this.dialogProperties().isLastLevel() ? "_Final" : "");
    var __s7local1 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s7local0, __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s7local0));
    this.dialogDisp.mc_teaser.addChild(__s7local1);
    var __s7local2 = __dep_export_CastleModel.CastleModel.raidBossData.getRaidBossLevelByID(this.dialogProperties().bossLevelID).level;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_are_" + (this.dialogProperties().isLastLevel() ? "final_" : "") + "boss_defeated_header")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_are_" + (this.dialogProperties().isLastLevel() ? "final_" : "") + "boss_defeated_desc", [__s7local2]));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_reward.txt_type, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_are_boss_defeated_rewards")));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_reward.mc_empty.txt_empty, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_are_boss_defeated_no_rewards_desc"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_reward.txt_level, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_are_boss_defeated_level", [__s7local2]));
    this._rewards.updateWithNewData(this.dialogProperties().rewards);
    this._rewards.onShow();
    this.dialogDisp.mc_reward.mc_empty.visible = !this.dialogProperties().rewards || this.dialogProperties().rewards.length <= 0;
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_reward.mc_icon);
    var __s7local3 = "Icon_ARE_BossID_" + this.dialogProperties().bossID;
    var __s7local4 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s7local3, __dep_export_IsoHelper.IsoHelper.view.getAssetFileURL(__s7local3));
    __s7local4.clipSizeComponent = new __dep_exact_9e901e8e2483a22f.ClipSizeComponent(30, 30);
    this.dialogDisp.mc_reward.mc_icon.addChild(__s7local4);
  };
  AllianceRaidBossDefeatedDialog.prototype.hideLoaded = function (__s9param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s9param0);
    this._rewards.onHide();
  };
  AllianceRaidBossDefeatedDialog.prototype.onClick = function (__s11param0) {
    __s1param0.prototype.onClick.call(this, __s11param0);
    switch (__s11param0.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_ok:
        this.hide();
    }
  };
  AllianceRaidBossDefeatedDialog.prototype.dialogProperties = function () {
    return this.properties;
  };
  AllianceRaidBossDefeatedDialog.NAME = "AllianceRaidBossDefeat";
  return AllianceRaidBossDefeatedDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.AllianceRaidBossDefeatedDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
