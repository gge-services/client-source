Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CollectableRenderClipsList = require("gge-module:export_CollectableRenderClipsList");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_SimpleCollectableScrollComponent = require("gge-module:export_SimpleCollectableScrollComponent");
var __dep_export_SimpleScrollVO = require("gge-module:export_SimpleScrollVO");
var __dep_export_SimpleScrollStrategyVertical = require("gge-module:export_SimpleScrollStrategyVertical");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function ExtendedGenericRewardDialog() {
    return __s1param0.call(this, ExtendedGenericRewardDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ExtendedGenericRewardDialog, __s1param0);
  ExtendedGenericRewardDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_ok, this.dialogDisp.mc_rewards_multi.btn_left, this.dialogDisp.mc_rewards_multi.btn_right], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    var __s5local0 = new __dep_export_SimpleScrollVO.SimpleScrollVO().initByParent(this.dialogDisp.mc_rewards_multi);
    var __s5local1 = new __dep_export_SimpleScrollStrategyVertical.SimpleScrollStrategyVertical(true, true);
    this.multiRewardScrollComponent = new __dep_export_SimpleCollectableScrollComponent.SimpleCollectableScrollComponent(this.dialogDisp.mc_rewards_multi, __s5local0, __s5local1, 8, 8);
  };
  ExtendedGenericRewardDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId(this.dialogProps.title))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(this.dialogProps.copy)).autoFitToBounds = true;
    this.updateRewards();
    this.dialogDisp.mc_premium.visible = this.dialogProps.showPremiumFrame;
  };
  ExtendedGenericRewardDialog.prototype.hideLoaded = function (__s9param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s9param0);
    if (this.multiRewardScrollComponent) {
      this.multiRewardScrollComponent.hide();
    }
  };
  ExtendedGenericRewardDialog.prototype.onClick = function (__s12param0) {
    __s1param0.prototype.onClick.call(this, __s12param0);
    switch (__s12param0.target) {
      case this.dialogDisp.btn_ok:
        this.hide();
    }
  };
  ExtendedGenericRewardDialog.prototype.updateRewards = function () {
    var __s15local0 = this;
    var __s15local1 = Math.min(this.dialogProps.rewardList.length, ExtendedGenericRewardDialog.REWARD_CONTAINERS.length - 1);
    ExtendedGenericRewardDialog.REWARD_CONTAINERS.forEach(function (__s17param0, __s17param1, __s17param2) {
      __s15local0.dialogDisp[__s17param0].visible = __s15local1 == __s17param1;
    });
    if (__s15local1 == ExtendedGenericRewardDialog.REWARD_CONTAINERS.length - 1) {
      var __s15local2 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_DEFAULT, this.getRewardDimension(__s15local1));
      this.multiRewardScrollComponent.show(this.dialogProps.rewardList, __s15local2);
    } else if (__s15local1 > 0) {
      this.showRewards(this.dialogDisp[ExtendedGenericRewardDialog.REWARD_CONTAINERS[__s15local1]], this.getRewardDimension(__s15local1));
    }
  };
  ExtendedGenericRewardDialog.prototype.showRewards = function (__s21param0, __s21param1) {
    var __s21local0 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_DEFAULT, __s21param1);
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displayMultipleItemsComplete(this, new __dep_export_CollectableRenderClipsList.CollectableRenderClipsList(__s21param0, "item").addItemMcs("mc_item").addInfoBtns("parent.btn_info"), this.dialogProps.rewardList, __s21local0);
  };
  ExtendedGenericRewardDialog.prototype.getRewardDimension = function (__s23param0) {
    switch (__s23param0) {
      case 1:
      case 2:
        return new __s0local0(136, 132);
      case 3:
      case 4:
        return new __s0local0(73, 71);
      case 5:
      default:
        return new __s0local0(64, 62);
    }
  };
  Object.defineProperty(ExtendedGenericRewardDialog.prototype, "dialogProps", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  ExtendedGenericRewardDialog.NAME = "ModernGenericEventRewardExt";
  ExtendedGenericRewardDialog.REWARD_CONTAINERS = ["mc_empty", "mc_rewards_1", "mc_rewards_2", "mc_rewards_3", "mc_rewards_4", "mc_rewards_multi"];
  return ExtendedGenericRewardDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.ExtendedGenericRewardDialog = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
