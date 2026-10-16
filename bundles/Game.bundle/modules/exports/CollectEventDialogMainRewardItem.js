Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_AInfiniteScrollListItem = require("gge-module:export_AInfiniteScrollListItem");
var __dep_export_TempServerSimpleRewardsComponent = require("gge-module:export_TempServerSimpleRewardsComponent");
var __s0local0 = function (__s1param0) {
  function CollectEventDialogMainRewardItem() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectEventDialogMainRewardItem, __s1param0);
  CollectEventDialogMainRewardItem.prototype.initLoaded = function () {
    __s1param0.prototype.initLoaded.call(this);
    this._rewards = new __dep_export_TempServerSimpleRewardsComponent.TempServerSimpleRewardsComponent(this.getItemMc());
  };
  CollectEventDialogMainRewardItem.prototype.onShow = function () {
    __s1param0.prototype.onShow.call(this);
    this._rewards.onShow();
  };
  CollectEventDialogMainRewardItem.prototype.onHide = function () {
    this._rewards.onHide();
    __s1param0.prototype.onHide.call(this);
  };
  CollectEventDialogMainRewardItem.prototype.fill = function () {
    var __s11local0 = this.data;
    var __s11local1 = this.getItemMc();
    this._rewards.updateWithNewData(__s11local0.collectable);
    var __s11local2 = (__s11local0.minCurrencyAmount == 1 ? "Reward_single_value_" : "Reward_plural_value_") + this.eventVO.collectInfoVO.collectorEventSkinName;
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s11local1.mc_title.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId(__s11local2, [__s11local0.minCurrencyAmount])));
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s11local1.mc_title_collected.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId(__s11local2, [__s11local0.minCurrencyAmount])));
    __s11local1.mc_title_collected.visible = this.eventCurrencyAmount >= __s11local0.minCurrencyAmount;
    __s11local1.mc_title.visible = this.eventCurrencyAmount < __s11local0.minCurrencyAmount;
  };
  Object.defineProperty(CollectEventDialogMainRewardItem.prototype, "eventCurrencyAmount", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.currencyData.getAmountById(this.eventVO.collectInfoVO.collectorCurrencyID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectEventDialogMainRewardItem.prototype, "eventVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_COLLECTOR);
    },
    enumerable: true,
    configurable: true
  });
  return CollectEventDialogMainRewardItem;
}(__dep_export_AInfiniteScrollListItem.AInfiniteScrollListItem);
exports.CollectEventDialogMainRewardItem = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
