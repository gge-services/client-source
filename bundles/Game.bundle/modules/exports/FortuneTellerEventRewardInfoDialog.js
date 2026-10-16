Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_InfiniteScrollListClips = require("gge-module:export_InfiniteScrollListClips");
var __dep_export_InfiniteScrollListComponent = require("gge-module:export_InfiniteScrollListComponent");
var __dep_export_InfiniteScrollListOptions = require("gge-module:export_InfiniteScrollListOptions");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_FortuneTellerEventRewardInfoDialogItem = require("gge-module:export_FortuneTellerEventRewardInfoDialogItem");
var __s0local0 = function (__s1param0) {
  function FortuneTellerEventRewardInfoDialog() {
    return __s1param0.call(this, FortuneTellerEventRewardInfoDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(FortuneTellerEventRewardInfoDialog, __s1param0);
  FortuneTellerEventRewardInfoDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close], __dep_export_ClickFeedbackButton.ClickFeedbackButton);
    var __s5local0 = new __dep_export_InfiniteScrollListOptions.InfiniteScrollListOptions(__dep_export_FortuneTellerEventRewardInfoDialogItem.FortuneTellerEventRewardInfoDialogItem, "FortuneTellerEventRewardInfoItem", __dep_export_FortuneTellerEventDialog.FortuneTellerEventDialog.NAME);
    __s5local0.itemPaddingY = 0;
    __s5local0.useSmoothScroll = true;
    this._scrollComponent = new __dep_export_InfiniteScrollListComponent.InfiniteScrollListComponent(new __dep_export_InfiniteScrollListClips.InfiniteScrollListClips(this.dialogDisp.mc_items).addMaskMc(this.dialogDisp.mc_items.mc_mask).addSliderMc(this.dialogDisp.mc_items.mc_slider).addItemContainerMc(this.dialogDisp.mc_items.mc_items), __s5local0);
  };
  FortuneTellerEventRewardInfoDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("divination_info_title")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("divination_info_desc"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_reward, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("reward")));
    this._scrollComponent.onShow();
    this._scrollComponent.updateWithNewData(this.getRewardData());
  };
  FortuneTellerEventRewardInfoDialog.prototype.hide = function () {
    this._scrollComponent.onHide();
    __s1param0.prototype.hide.call(this);
  };
  Object.defineProperty(FortuneTellerEventRewardInfoDialog.prototype, "canBuyPrize", {
    get: function () {
      return this.eventVO.tryCount <= __dep_export_CastleModel.CastleModel.fortuneTeller.maxTriesPerDay;
    },
    enumerable: true,
    configurable: true
  });
  FortuneTellerEventRewardInfoDialog.prototype.getRewardData = function () {
    var __s13local0 = [];
    for (var __s13local1 = __dep_export_CastleModel.CastleModel.fortuneTeller.getFortuneTellerClassByCount(this.canBuyPrize ? this.eventVO.tryCount : 1).rewardIDs, __s13local2 = 0; __s13local2 < __s13local1.length; __s13local2++) {
      __s13local0.push(__s13local1[__s13local2]);
    }
    return __s13local0;
  };
  FortuneTellerEventRewardInfoDialog.prototype.onClick = function (__s17param0) {
    __s1param0.prototype.onClick.call(this, __s17param0);
    switch (__s17param0.target) {
      case this.dialogDisp.btn_close:
        this.hide();
    }
  };
  Object.defineProperty(FortuneTellerEventRewardInfoDialog.prototype, "eventVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FORTUNE_TELLER);
    },
    enumerable: true,
    configurable: true
  });
  FortuneTellerEventRewardInfoDialog.NAME = "FortuneTellerEventRewardInfo";
  return FortuneTellerEventRewardInfoDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.FortuneTellerEventRewardInfoDialog = __s0local0;
var __dep_export_FortuneTellerEventDialog = require("gge-module:export_FortuneTellerEventDialog");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
