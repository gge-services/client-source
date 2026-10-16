Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_2bba671be60e4997 = require("gge-module:exact_2bba671be60e4997");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_AllianceRaidbossEventEventVO = require("gge-module:export_AllianceRaidbossEventEventVO");
var __dep_export_AInfiniteScrollListItem = require("gge-module:export_AInfiniteScrollListItem");
var __dep_export_CastleGenericRewardsComponent = require("gge-module:export_CastleGenericRewardsComponent");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function AllianceRaidEventDialogActivityRewardItem() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AllianceRaidEventDialogActivityRewardItem, __s1param0);
  AllianceRaidEventDialogActivityRewardItem.prototype.initLoaded = function () {
    __s1param0.prototype.initLoaded.call(this);
    var __s5local0 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_DEFAULT, new __s0local0(64, 62));
    this._genericRewardComponent = new __dep_export_CastleGenericRewardsComponent.CastleGenericRewardsComponent(this.getItemMc(), false, true, __s5local0);
  };
  AllianceRaidEventDialogActivityRewardItem.prototype.fill = function () {
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.getItemMc().txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_are_activityreward_points", [this.rewardData.threshold]), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true)).autoFitToBounds = true;
    this.getItemMc().mc_achieved.visible = this.rewardData.threshold <= __dep_export_AllianceRaidbossEventEventVO.AllianceRaidbossEventEventVO.getActiveEventVO().scoreEventVO.ownPoints;
    this._genericRewardComponent.onShow();
    this._genericRewardComponent.updateWithNewData(this.rewardData.rewards);
  };
  AllianceRaidEventDialogActivityRewardItem.prototype.onHide = function () {
    __s1param0.prototype.onHide.call(this);
    if (this._genericRewardComponent) {
      this._genericRewardComponent.onHide();
    }
  };
  Object.defineProperty(AllianceRaidEventDialogActivityRewardItem.prototype, "rewardData", {
    get: function () {
      return this.data;
    },
    enumerable: true,
    configurable: true
  });
  return AllianceRaidEventDialogActivityRewardItem;
}(__dep_export_AInfiniteScrollListItem.AInfiniteScrollListItem);
exports.AllianceRaidEventDialogActivityRewardItem = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
