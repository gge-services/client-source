Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_InfiniteScrollListClips = require("gge-module:export_InfiniteScrollListClips");
var __dep_export_InfiniteScrollListComponent = require("gge-module:export_InfiniteScrollListComponent");
var __dep_export_InfiniteScrollListOptions = require("gge-module:export_InfiniteScrollListOptions");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_GachaRankingRewardsDialogListItem = require("gge-module:export_GachaRankingRewardsDialogListItem");
var __s0local0 = function (__s1param0) {
  function GachaRankingRewardsDialog() {
    return __s1param0.call(this, GachaRankingRewardsDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GachaRankingRewardsDialog, __s1param0);
  GachaRankingRewardsDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover, 1);
  };
  GachaRankingRewardsDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("event_rewards_header")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("ranking_description_" + this.eventVO.assetName()));
    var __s7local0 = new __dep_export_InfiniteScrollListOptions.InfiniteScrollListOptions(__dep_export_GachaRankingRewardsDialogListItem.GachaRankingRewardsDialogListItem, "GachaRankingRewards_Item", GachaRankingRewardsDialog.NAME);
    __s7local0.itemPaddingY = 0;
    __s7local0.useSmoothScroll = true;
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_list.mc_items);
    this._list = new __dep_export_InfiniteScrollListComponent.InfiniteScrollListComponent(new __dep_export_InfiniteScrollListClips.InfiniteScrollListClips(this.dialogDisp.mc_list).addSliderMc(this.dialogDisp.mc_list.mc_slider), __s7local0);
    this._list.onShow();
    this.updateAllInfos(true);
  };
  GachaRankingRewardsDialog.prototype.hide = function () {
    if (this._list && this._list.scrollComponent.scrollVO) {
      this._list.onHide();
      this._list.destroy();
    }
    __s1param0.prototype.hide.call(this);
  };
  GachaRankingRewardsDialog.prototype.dataList = function () {
    var __s12local0 = this.eventVO.topX.concat(1);
    __s12local0.sort(function (__s14param0, __s14param1) {
      return __s14param0 - __s14param1;
    });
    var __s12local1 = [];
    for (var __s12local2 = 0; __s12local2 < __s12local0.length; __s12local2++) {
      var __s12local3 = {
        rank: __s12local2 > 0 ? [__s12local0[__s12local2 - 1] + 1, [__s12local0[__s12local2]]] : [__s12local0[__s12local2]],
        rewards: this.eventVO.rewardLists[this.eventVO.rewardLists.length - 1 - __s12local2],
        index: __s12local2
      };
      __s12local1.push(__s12local3);
    }
    return __s12local1;
  };
  GachaRankingRewardsDialog.prototype.updateAllInfos = function (__s18param0 = false) {
    var __s18local0 = this.dataList();
    this._list.updateWithNewData(__s18local0, __s18param0);
    this._list.onShow();
  };
  GachaRankingRewardsDialog.prototype.onClick = function (__s20param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s20param0.target)) {
      __s1param0.prototype.onClick.call(this, __s20param0);
      switch (__s20param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper(__dep_exact_92d05af59ee2ff30.Localize.text(" "), __dep_exact_92d05af59ee2ff30.Localize.text("helpPopup_" + this.eventVO.assetName()));
      }
    }
  };
  Object.defineProperty(GachaRankingRewardsDialog.prototype, "eventVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(this.dialogProperties.eventID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GachaRankingRewardsDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  GachaRankingRewardsDialog.NAME = "GachaRankingRewards";
  return GachaRankingRewardsDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.GachaRankingRewardsDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
