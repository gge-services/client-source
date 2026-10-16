Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstSort = require("gge-module:export_ClientConstSort");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_AInfiniteScrollListItem = require("gge-module:export_AInfiniteScrollListItem");
var __dep_export_TempServerSimpleRewardsComponent = require("gge-module:export_TempServerSimpleRewardsComponent");
var __s0local0 = function (__s1param0) {
  function CastleTemporaryServerEventDialogOverviewRewardItem() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleTemporaryServerEventDialogOverviewRewardItem, __s1param0);
  CastleTemporaryServerEventDialogOverviewRewardItem.prototype.initLoaded = function () {
    __s1param0.prototype.initLoaded.call(this);
    this._rewards = new __dep_export_TempServerSimpleRewardsComponent.TempServerSimpleRewardsComponent(this.getItemMc());
  };
  CastleTemporaryServerEventDialogOverviewRewardItem.prototype.onShow = function () {
    __s1param0.prototype.onShow.call(this);
    this._rewards.onShow();
  };
  CastleTemporaryServerEventDialogOverviewRewardItem.prototype.onHide = function () {
    this._rewards.onHide();
    __s1param0.prototype.onHide.call(this);
  };
  CastleTemporaryServerEventDialogOverviewRewardItem.prototype.fill = function () {
    var __s11local0 = this.data;
    var __s11local1 = this.getItemMc();
    __s11local0.collectableList.sort(__dep_export_ClientConstSort.ClientConstSort.sortByTempServerRewardPriority);
    this._rewards.updateWithNewData(__s11local0.collectableList);
    __s11local1.mc_indicator.gotoAndStop(__s11local0.listIndex + 1);
    if (__s11local0.usePoints) {
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s11local1.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempServer_forPoints", [__s11local0.rank])));
    } else {
      var __s11local2 = __dep_export_CastleModel.CastleModel.tempServerData.getRankRangeByRank(__s11local0.rank);
      if (__s11local2.minRank == __s11local2.maxRank) {
        __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s11local1.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("rankingRange_single", [__s11local0.rank])));
      } else {
        __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s11local1.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("rankingRange_multi", [__s11local2.maxRank, __s11local2.minRank])));
      }
    }
  };
  return CastleTemporaryServerEventDialogOverviewRewardItem;
}(__dep_export_AInfiniteScrollListItem.AInfiniteScrollListItem);
exports.CastleTemporaryServerEventDialogOverviewRewardItem = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
