Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_InfiniteScrollListClips = require("gge-module:export_InfiniteScrollListClips");
var __dep_export_InfiniteScrollListComponent = require("gge-module:export_InfiniteScrollListComponent");
var __dep_export_InfiniteScrollListOptions = require("gge-module:export_InfiniteScrollListOptions");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_GachaEventEndDialogItem = require("gge-module:export_GachaEventEndDialogItem");
var __s0local0 = function (__s1param0) {
  function GachaEventEndDialog() {
    return __s1param0.call(this, GachaEventEndDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GachaEventEndDialog, __s1param0);
  GachaEventEndDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    var __s5local0 = new __dep_export_InfiniteScrollListClips.InfiniteScrollListClips(this.dialogDisp).addSliderMc(this.dialogDisp.mc_slider).addItemContainerMc(this.dialogDisp.mc_list).addMouseWheelAreaMc(this.dialogDisp.mc_list.mask).addMaskMc(this.dialogDisp.mc_list.mask);
    var __s5local1 = new __dep_export_InfiniteScrollListOptions.InfiniteScrollListOptions(__dep_export_GachaEventEndDialogItem.GachaEventEndDialogItem, GachaEventEndDialog.ITEM_NAME, GachaEventEndDialog.NAME);
    __s5local1.itemPaddingY = 4;
    __s5local1.useSmoothScroll = true;
    this._scrollList = new __dep_export_InfiniteScrollListComponent.InfiniteScrollListComponent(__s5local0, __s5local1);
  };
  GachaEventEndDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    var __s7local0 = __dep_export_CastleModel.CastleModel.specialEventData.createEventVOByEventID(this.dialogProperties().eventID);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("event_end_header_" + __s7local0.eventName)));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("event_end_description_" + __s7local0.eventName));
    this._scrollList.onShow();
    this._scrollList.updateWithNewData(this.getData());
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_teaser);
    var __s7local1 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip("EventEndTeaser_" + this.dialogProperties().eventID, __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl("EventEndTeaser_" + this.dialogProperties().eventID));
    this.dialogDisp.mc_teaser.addChild(__s7local1);
  };
  GachaEventEndDialog.prototype.hideLoaded = function (__s9param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s9param0);
    if (this._scrollList) {
      this._scrollList.onHide();
    }
  };
  GachaEventEndDialog.prototype.getData = function () {
    var __s12local0 = {};
    __s12local0.rank = this.dialogProperties().rank;
    __s12local0.rewards = this.dialogProperties().rewards;
    __s12local0.score = this.dialogProperties().currentScore;
    return [__s12local0];
  };
  GachaEventEndDialog.prototype.onClick = function (__s14param0) {
    __s1param0.prototype.onClick.call(this, __s14param0);
    switch (__s14param0.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_ok:
        this.hide();
    }
  };
  GachaEventEndDialog.prototype.dialogProperties = function () {
    return this.properties;
  };
  GachaEventEndDialog.NAME = "GachaEventEnd";
  GachaEventEndDialog.ITEM_NAME = "GachaEventEnd_Item";
  return GachaEventEndDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.GachaEventEndDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
