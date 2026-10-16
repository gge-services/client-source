Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __s0local0 = function (__s1param0) {
  function CastleStormIslandsMainDialogOverviewRewardItem() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleStormIslandsMainDialogOverviewRewardItem, __s1param0);
  CastleStormIslandsMainDialogOverviewRewardItem.prototype.initLoaded = function () {
    __s1param0.prototype.initLoaded.call(this);
    this._rewards = new __dep_export_TempServerSimpleRewardsComponent.TempServerSimpleRewardsComponent(this.getItemMc());
  };
  CastleStormIslandsMainDialogOverviewRewardItem.prototype.onShow = function () {
    __s1param0.prototype.onShow.call(this);
    this._rewards.onShow();
  };
  CastleStormIslandsMainDialogOverviewRewardItem.prototype.onHide = function () {
    this._rewards.onHide();
    __s1param0.prototype.onHide.call(this);
  };
  CastleStormIslandsMainDialogOverviewRewardItem.prototype.fill = function () {
    var __s11local0 = this.data[0];
    var __s11local1 = this.data[1];
    var __s11local2 = this.getItemMc();
    this._rewards.updateWithNewData(__s11local0.rewardList);
    if (__s11local0.isTopXReward) {
      __s11local2.mc_indicator.gotoAndStop(Math.min(__s11local1 + 1, 4));
      __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s11local2.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_eiland_topXReward_copy", [__s11local0.topXValue]));
    } else {
      __s11local2.mc_indicator.gotoAndStop(4);
      __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s11local2.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_eiland_pointReward_copy", [new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__s11local0.cargoPointsNeeded, false)]));
    }
  };
  return CastleStormIslandsMainDialogOverviewRewardItem;
}(require("gge-module:export_AInfiniteScrollListItem").AInfiniteScrollListItem);
exports.CastleStormIslandsMainDialogOverviewRewardItem = __s0local0;
var __dep_export_TempServerSimpleRewardsComponent = require("gge-module:export_TempServerSimpleRewardsComponent");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
