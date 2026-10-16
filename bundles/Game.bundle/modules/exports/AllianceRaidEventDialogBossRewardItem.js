Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_2bba671be60e4997 = require("gge-module:exact_2bba671be60e4997");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_AInfiniteScrollListItem = require("gge-module:export_AInfiniteScrollListItem");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleGenericRewardsComponent = require("gge-module:export_CastleGenericRewardsComponent");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function AllianceRaidEventDialogBossRewardItem() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AllianceRaidEventDialogBossRewardItem, __s1param0);
  AllianceRaidEventDialogBossRewardItem.prototype.initLoaded = function () {
    __s1param0.prototype.initLoaded.call(this);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.getItemMc().btn_minus, this.getItemMc().btn_plus], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    var __s5local0 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_DEFAULT, new __s0local0(64, 62));
    this._genericRewardComponent = new __dep_export_CastleGenericRewardsComponent.CastleGenericRewardsComponent(this.getItemMc(), false, false, __s5local0);
  };
  AllianceRaidEventDialogBossRewardItem.prototype.fill = function () {
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.getItemMc().txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("levelX", [this.rewardData.level]), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true)).autoFitToBounds = true;
    var __s7local0 = this.parentComponent.dataList;
    this.getItemMc().mc_next.visible = !!__s7local0 && __s7local0.length > 0 && this.rewardData.level <= __s7local0[0].level;
    var __s7local1 = this.rewardData.rewardList;
    this._genericRewardComponent.onShow();
    this._genericRewardComponent.updateWithNewData(__s7local1);
  };
  AllianceRaidEventDialogBossRewardItem.prototype.onHide = function () {
    __s1param0.prototype.onHide.call(this);
    if (this._genericRewardComponent) {
      this._genericRewardComponent.onHide();
    }
  };
  Object.defineProperty(AllianceRaidEventDialogBossRewardItem.prototype, "rewardData", {
    get: function () {
      return this.data;
    },
    enumerable: true,
    configurable: true
  });
  return AllianceRaidEventDialogBossRewardItem;
}(__dep_export_AInfiniteScrollListItem.AInfiniteScrollListItem);
exports.AllianceRaidEventDialogBossRewardItem = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
