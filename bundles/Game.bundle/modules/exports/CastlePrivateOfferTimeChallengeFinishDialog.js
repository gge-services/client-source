Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CollectableRenderClipsList = require("gge-module:export_CollectableRenderClipsList");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastlePrivateOfferTimeChallengeFinishDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastlePrivateOfferTimeChallengeFinishDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastlePrivateOfferTimeChallengeFinishDialog, __s1param0);
  CastlePrivateOfferTimeChallengeFinishDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("quest_finished"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_itemTitle, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("reward"));
  };
  CastlePrivateOfferTimeChallengeFinishDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_timeOffer_done"));
    this.updateRewards();
  };
  CastlePrivateOfferTimeChallengeFinishDialog.prototype.onClick = function (__s9param0) {
    __s1param0.prototype.onClick.call(this, __s9param0);
    switch (__s9param0.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_ok:
        this.hide();
    }
  };
  CastlePrivateOfferTimeChallengeFinishDialog.prototype.updateRewards = function () {
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displayMultipleItemsComplete(this, new __dep_export_CollectableRenderClipsList.CollectableRenderClipsList(this.dialogDisp, "mc_item").addItemMcs("mc_item").addInfoBtns("parent.btn_info"), this.dialogProperties.offerVO.getTotalRewardListFromOfferVO(), new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_TIME_CHALLENGE, new __s0local0(__dep_export_CastlePrivateOfferTimeChallengeDialog.CastlePrivateOfferTimeChallengeDialog.ICON_WIDTH, __dep_export_CastlePrivateOfferTimeChallengeDialog.CastlePrivateOfferTimeChallengeDialog.ICON_HEIGHT)), function preRenderFunc(__s14param0) {
      if (__s14param0.itemVO && __s14param0.itemVO.itemType == __dep_export_CollectableEnum.CollectableEnum.VIP_TIME) {
        __s14param0.getRenderer(__dep_export_CollectableRenderOptions.CollectableRenderOptions.ICON_TRANSFORM).transform.offset.y = 7;
      }
    });
  };
  Object.defineProperty(CastlePrivateOfferTimeChallengeFinishDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastlePrivateOfferTimeChallengeFinishDialog.__initialize_static_members = function () {
    CastlePrivateOfferTimeChallengeFinishDialog.NAME = "CastlePrivateOfferTimeChallengeFinish";
    CastlePrivateOfferTimeChallengeFinishDialog.SHOWN_REWARD_ITEM_COUNT = 13;
  };
  return CastlePrivateOfferTimeChallengeFinishDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastlePrivateOfferTimeChallengeFinishDialog = __s0local1;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_CastlePrivateOfferTimeChallengeDialog = require("gge-module:export_CastlePrivateOfferTimeChallengeDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
__s0local1.__initialize_static_members();
