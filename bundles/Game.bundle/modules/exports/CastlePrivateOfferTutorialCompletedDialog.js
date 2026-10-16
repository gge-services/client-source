Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CollectableRenderClipsList = require("gge-module:export_CollectableRenderClipsList");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleGGSVerticalAlign = require("gge-module:export_CastleGGSVerticalAlign");
var __s0local0 = function (__s1param0) {
  function CastlePrivateOfferTutorialCompletedDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastlePrivateOfferTutorialCompletedDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastlePrivateOfferTutorialCompletedDialog, __s1param0);
  CastlePrivateOfferTutorialCompletedDialog.prototype.showLoaded = function (__s5param0 = null) {
    __s1param0.prototype.showLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_ok]);
    this.textFieldManager.registerTextField(this.dialogDisp.tf_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_tutorialend_teaser_titel")).verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this.textFieldManager.registerTextField(this.dialogDisp.tf_anouncement_0, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_tutorialend_teaser_copy1"));
    this.textFieldManager.registerTextField(this.dialogDisp.tf_anouncement_1, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_tutorialend_teaser_copy2"));
    this.textFieldManager.registerTextField(this.dialogDisp.tf_anouncement_2, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_tutorialend_teaser_copy3"));
    this.textFieldManager.registerTextField(this.dialogDisp.tf_anouncement_3, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_tutorialend_teaser_copy4"));
    this.textFieldManager.registerTextField(this.dialogDisp.tf_reward_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_registerreward_reward"));
    this.initReward();
  };
  CastlePrivateOfferTutorialCompletedDialog.prototype.initReward = function () {
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displayMultipleItemsComplete(this, new __dep_export_CollectableRenderClipsList.CollectableRenderClipsList(this.dialogDisp, "mc_reward_").addItemMcs("mc_item").addInfoBtns("parent.btn_info"), this.dialogProperties.offerVO.getTotalRewardListFromOfferVO(), new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_ADVANCED));
  };
  CastlePrivateOfferTutorialCompletedDialog.prototype.onClick = function (__s9param0) {
    __s1param0.prototype.onClick.call(this, __s9param0);
    switch (__s9param0.target) {
      case this.dialogDisp.btn_ok:
        __dep_export_CastleModel.CastleModel.privateOfferData.sendOfferPay(this.dialogProperties.offerVO.id);
        this.hide();
    }
  };
  Object.defineProperty(CastlePrivateOfferTutorialCompletedDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastlePrivateOfferTutorialCompletedDialog.__initialize_static_members = function () {
    CastlePrivateOfferTutorialCompletedDialog.NAME = "CastlePrivateOfferTutorialCompleted";
  };
  return CastlePrivateOfferTutorialCompletedDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastlePrivateOfferTutorialCompletedDialog = __s0local0;
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
