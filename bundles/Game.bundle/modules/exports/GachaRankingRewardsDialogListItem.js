Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_AInfiniteScrollListItem = require("gge-module:export_AInfiniteScrollListItem");
var __dep_export_TempServerSimpleRewardsComponent = require("gge-module:export_TempServerSimpleRewardsComponent");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function GachaRankingRewardsDialogListItem() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GachaRankingRewardsDialogListItem, __s1param0);
  GachaRankingRewardsDialogListItem.prototype.initLoaded = function () {
    __s1param0.prototype.initLoaded.call(this);
    this._rewards = new __dep_export_TempServerSimpleRewardsComponent.TempServerSimpleRewardsComponent(this.getItemMc(), true, false, 0, new __s0local0(25, 25));
  };
  GachaRankingRewardsDialogListItem.prototype.onShow = function () {
    __s1param0.prototype.onShow.call(this);
    this._rewards.onShow();
  };
  GachaRankingRewardsDialogListItem.prototype.onHide = function () {
    this._rewards.onHide();
    __s1param0.prototype.onHide.call(this);
  };
  GachaRankingRewardsDialogListItem.prototype.fill = function () {
    var __s11local0 = this.data.rank;
    var __s11local1 = __s11local0.length == 1 ? "rankingRange_single" : "rankingRange_multi";
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.getItemMc().txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId(__s11local1, __s11local0))).autoFitToBounds = true;
    this.getItemMc().mc_rank1.visible = this.data.index == 0;
    this.getItemMc().mc_rank2.visible = this.data.index == 1;
    this.getItemMc().mc_rank3.visible = this.data.index == 2;
    this._rewards.updateWithNewData(this.rewards);
  };
  Object.defineProperty(GachaRankingRewardsDialogListItem.prototype, "itemMc", {
    get: function () {
      return this.getItemMc();
    },
    enumerable: true,
    configurable: true
  });
  GachaRankingRewardsDialogListItem.prototype.onClick = function (__s15param0) {
    __s1param0.prototype.onClick.call(this, __s15param0);
  };
  Object.defineProperty(GachaRankingRewardsDialogListItem.prototype, "rewards", {
    get: function () {
      return this.data.rewards;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GachaRankingRewardsDialogListItem.prototype, "rewardCategory", {
    get: function () {
      return this.data.rewardCategory;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GachaRankingRewardsDialogListItem.prototype, "chance", {
    get: function () {
      return this.data.chance;
    },
    enumerable: true,
    configurable: true
  });
  return GachaRankingRewardsDialogListItem;
}(__dep_export_AInfiniteScrollListItem.AInfiniteScrollListItem);
exports.GachaRankingRewardsDialogListItem = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
