Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
var __dep_export_CastleMailRewardsComponent = require("gge-module:export_CastleMailRewardsComponent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CastleMailGiftDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleMailGiftDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleMailGiftDialog, __s1param0);
  CastleMailGiftDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButton(this.dialogDisp.btn_close, -1, __dep_export_ClickFeedbackButton.ClickFeedbackButton);
    __dep_export_ButtonHelper.ButtonHelper.initButton(this.dialogDisp.btn_ok, -1, __dep_export_ClickFeedbackButton.ClickFeedbackButton);
    this._rewards = new __dep_export_CastleMailRewardsComponent.CastleMailRewardsComponent(this.dialogDisp.mc_items);
  };
  CastleMailGiftDialog.prototype.applyProperties = function () {
    __s1param0.prototype.applyProperties.call(this);
    this.showRewards();
  };
  CastleMailGiftDialog.prototype.showLoaded = function (__s9param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s9param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_mailGift_title")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_mailGift_copy"));
  };
  CastleMailGiftDialog.prototype.showRewards = function () {
    var __s11local0 = __dep_export_CastleModel.CastleModel.rewardData.getListById(this.dialogProperties.rewardID);
    this._rewards.onShow();
    this._rewards.updateWithNewData(__s11local0);
  };
  CastleMailGiftDialog.prototype.onClick = function (__s13param0) {
    switch (__s13param0.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_ok:
        this.hide();
    }
  };
  CastleMailGiftDialog.prototype.hideLoaded = function (__s16param0 = null) {
    this._rewards.onHide();
    this._rewards.destroy();
    __s1param0.prototype.hideLoaded.call(this, __s16param0);
  };
  Object.defineProperty(CastleMailGiftDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleMailGiftDialog.__initialize_static_members = function () {
    CastleMailGiftDialog.NAME = "CastleMailGiftDark";
  };
  return CastleMailGiftDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleMailGiftDialog = __s0local0;
__s0local0.__initialize_static_members();
