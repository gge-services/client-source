Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstTextIds = require("gge-module:export_ClientConstTextIds");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __s0local0 = function (__s1param0) {
  function CastleAwardWithRewardWinDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleAwardWithRewardWinDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAwardWithRewardWinDialog, __s1param0);
  CastleAwardWithRewardWinDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.initBasicButtons([this.dialogDisp.btn_close]);
    this.dialogDisp.mc_deco.gotoAndStop(2);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_EGAevent_message_won"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_EGAevent_message_won_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_reward_value, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(200));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_reward, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_EGAevent_price1"));
    this.dialogDisp.mc_ruby.toolTipText = __dep_export_ClientConstTextIds.ClientConstTextIds.C2;
    this.dialogDisp.mc_awardHolder.addChild(new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip("CastleWelcomeNewsEGA14", __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl("CastleWelcomeNewsEGA14"), null, 1, false, __dep_exact_81dacdf05bd32292_1.getDefinitionByName("LoadingAnimation")));
  };
  CastleAwardWithRewardWinDialog.prototype.onClick = function (__s7param0) {
    __s1param0.prototype.onClick.call(this, __s7param0);
    if (__s7param0.target == this.dialogDisp.btn_close) {
      this.hide();
    }
  };
  CastleAwardWithRewardWinDialog.__initialize_static_members = function () {
    CastleAwardWithRewardWinDialog.NAME = "CastleAwardWithRewardWinEx";
  };
  return CastleAwardWithRewardWinDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleAwardWithRewardWinDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
