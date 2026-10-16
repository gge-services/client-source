Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CollectableRenderClipsList = require("gge-module:export_CollectableRenderClipsList");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __s0local0 = function (__s1param0) {
  function GenericRewardDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, GenericRewardDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GenericRewardDialog, __s1param0);
  GenericRewardDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.initBasicButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_close]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_dailyQuests_gotReward_title"));
  };
  GenericRewardDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("milestone_reward"));
    for (var __s7local0 = 1; __s7local0 <= GenericRewardDialog.MAX_REWARDS; __s7local0++) {
      this.dialogDisp.mc_rewardContainer["rewards" + __s7local0].visible = __s7local0 == this.dialogProperties.rewards.length;
    }
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displayMultipleItemsComplete(this, new __dep_export_CollectableRenderClipsList.CollectableRenderClipsList(this.dialogDisp.mc_rewardContainer["rewards" + this.dialogProperties.rewards.length], "item").addItemMcs("mc_item").addInfoBtns("parent.btn_info"), this.dialogProperties.rewards, new __dep_export_CollectableRenderOptions.CollectableRenderOptions(this.dialogProperties.renderProperties.collectableRenderOption, this.dialogProperties.renderProperties.rewardIconDimension), this.dialogProperties.renderProperties.preRenderFunc);
  };
  GenericRewardDialog.prototype.onClick = function (__s11param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s11param0.target)) {
      switch (__s11param0.target) {
        case this.dialogDisp.btn_ok:
        case this.dialogDisp.btn_close:
          this.hide();
      }
    }
  };
  Object.defineProperty(GenericRewardDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  GenericRewardDialog.__initialize_static_members = function () {
    GenericRewardDialog.NAME = "CastleDailyQuestThresholdReward";
    GenericRewardDialog.MAX_REWARDS = 4;
  };
  return GenericRewardDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.GenericRewardDialog = __s0local0;
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
