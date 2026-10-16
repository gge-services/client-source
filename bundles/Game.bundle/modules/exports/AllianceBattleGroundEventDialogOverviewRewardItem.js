Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ABGHelper = require("gge-module:export_ABGHelper");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __s0local0 = function (__s1param0) {
  function AllianceBattleGroundEventDialogOverviewRewardItem() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AllianceBattleGroundEventDialogOverviewRewardItem, __s1param0);
  AllianceBattleGroundEventDialogOverviewRewardItem.prototype.initLoaded = function () {
    __s1param0.prototype.initLoaded.call(this);
    this._rewards = new __dep_export_TempServerSimpleRewardsComponent.TempServerSimpleRewardsComponent(this.getItemMc());
  };
  AllianceBattleGroundEventDialogOverviewRewardItem.prototype.onShow = function () {
    __s1param0.prototype.onShow.call(this);
    this._rewards.onShow();
  };
  AllianceBattleGroundEventDialogOverviewRewardItem.prototype.onHide = function () {
    this._rewards.onHide();
    __s1param0.prototype.onHide.call(this);
  };
  AllianceBattleGroundEventDialogOverviewRewardItem.prototype.fill = function () {
    var __s11local0 = this.data[0];
    var __s11local1 = this.data[1];
    var __s11local2 = this.getItemMc();
    this._rewards.updateWithNewData(__s11local0.collectableList);
    __s11local2.mc_indicator.gotoAndStop(Math.min(__s11local0.listIndex + 1, 4));
    if (__s11local0.usePoints) {
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s11local2.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempServer_forPoints", [__s11local0.rank])));
    } else {
      var __s11local3 = __dep_export_ABGHelper.ABGHelper.abgEvent.getRankRangeByRank(__s11local0.rank, __s11local1);
      if (!__s11local3) {
        return;
      }
      if (__s11local3.minRank == __s11local3.maxRank) {
        __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s11local2.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("rankingRange_single", [__s11local0.rank])));
      } else {
        __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s11local2.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("rankingRange_multi", [__s11local3.maxRank, __s11local3.minRank])));
      }
    }
  };
  return AllianceBattleGroundEventDialogOverviewRewardItem;
}(require("gge-module:export_AInfiniteScrollListItem").AInfiniteScrollListItem);
exports.AllianceBattleGroundEventDialogOverviewRewardItem = __s0local0;
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_TempServerSimpleRewardsComponent = require("gge-module:export_TempServerSimpleRewardsComponent");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
