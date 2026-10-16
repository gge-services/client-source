Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_InfiniteScrollListClips = require("gge-module:export_InfiniteScrollListClips");
var __dep_export_InfiniteScrollListComponent = require("gge-module:export_InfiniteScrollListComponent");
var __dep_export_InfiniteScrollListOptions = require("gge-module:export_InfiniteScrollListOptions");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_TempServerSimpleRewardsComponent = require("gge-module:export_TempServerSimpleRewardsComponent");
var __dep_export_DonationEventEndDialogItem = require("gge-module:export_DonationEventEndDialogItem");
var __s0local0 = function (__s1param0) {
  function DonationEventEndDialog() {
    return __s1param0.call(this, DonationEventEndDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(DonationEventEndDialog, __s1param0);
  DonationEventEndDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    var __s5local0 = new __dep_export_InfiniteScrollListClips.InfiniteScrollListClips(this.dialogDisp).addSliderMc(this.dialogDisp.mc_slider).addItemContainerMc(this.dialogDisp.mc_list).addMouseWheelAreaMc(this.dialogDisp).addMaskMc(this.dialogDisp.mc_mask);
    var __s5local1 = new __dep_export_InfiniteScrollListOptions.InfiniteScrollListOptions(__dep_export_DonationEventEndDialogItem.DonationEventEndDialogItem, DonationEventEndDialog.ITEM_NAME, DonationEventEndDialog.NAME);
    __s5local1.itemPaddingY = 4;
    __s5local1.useSmoothScroll = true;
    this._scrollList = new __dep_export_InfiniteScrollListComponent.InfiniteScrollListComponent(__s5local0, __s5local1);
    this._rewards = new __dep_export_TempServerSimpleRewardsComponent.TempServerSimpleRewardsComponent(this.dialogDisp, true, false, 0);
    this.dialogDisp.mc_rewardHub.toolTipText = "hud_rewardHub_hudButton_tt";
  };
  DonationEventEndDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_eventEndDonationEvent_title")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_rank_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("rankingGlobal"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_rank_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("rewardHubRankingInfo"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_rank, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("ranking_calculating"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_eventEndDonationEvent_desc"));
    this._scrollList.onShow();
    this._scrollList.updateWithNewData(this.dialogProperties().getData());
    this._rewards.onShow();
  };
  DonationEventEndDialog.prototype.hideLoaded = function (__s9param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s9param0);
    if (this._scrollList) {
      this._scrollList.onHide();
    }
    this._rewards.onHide();
  };
  DonationEventEndDialog.prototype.onClick = function (__s12param0) {
    __s1param0.prototype.onClick.call(this, __s12param0);
    switch (__s12param0.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_ok:
        this.hide();
    }
  };
  DonationEventEndDialog.prototype.dialogProperties = function () {
    return this.properties;
  };
  DonationEventEndDialog.NAME = "DonationEventEnd_1";
  DonationEventEndDialog.ITEM_NAME = "DonationEventEnd_Item";
  return DonationEventEndDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.DonationEventEndDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
