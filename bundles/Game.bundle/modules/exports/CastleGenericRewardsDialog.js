Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleGenericRewardsComponent = require("gge-module:export_CastleGenericRewardsComponent");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __s0local0 = function (__s1param0) {
  function CastleGenericRewardsDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleGenericRewardsDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleGenericRewardsDialog, __s1param0);
  CastleGenericRewardsDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButton(this.dialogDisp.btn_close, -1, __dep_export_ClickFeedbackButton.ClickFeedbackButton);
    __dep_export_ButtonHelper.ButtonHelper.initButton(this.dialogDisp.btn_ok, -1, __dep_export_ClickFeedbackButton.ClickFeedbackButton);
    this._rewards = new __dep_export_CastleGenericRewardsComponent.CastleGenericRewardsComponent(this.dialogDisp.mc_items);
  };
  CastleGenericRewardsDialog.prototype.applyProperties = function () {
    __s1param0.prototype.applyProperties.call(this);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId(this.dialogProperties.txtTitle))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this.dialogProperties.txtCopy));
    this.showRewards();
  };
  CastleGenericRewardsDialog.prototype.showRewards = function () {
    var __s9local0;
    this._rewards.onShow();
    if (this.dialogProperties.rewardID != -1) {
      __s9local0 = __dep_export_CastleModel.CastleModel.rewardData.getListById(this.dialogProperties.rewardID);
    }
    if (this.dialogProperties.rewards && this.dialogProperties.rewards.length > 0) {
      if (__s9local0) {
        __s9local0.addList(this.dialogProperties.rewards);
      } else {
        __s9local0 = this.dialogProperties.rewards;
      }
    }
    this._rewards.updateWithNewData(__s9local0);
  };
  CastleGenericRewardsDialog.prototype.onClick = function (__s15param0) {
    switch (__s15param0.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_ok:
        this.hide();
    }
  };
  CastleGenericRewardsDialog.prototype.hideLoaded = function (__s18param0 = null) {
    this._rewards.onHide();
    this._rewards.destroy();
    __s1param0.prototype.hideLoaded.call(this, __s18param0);
  };
  Object.defineProperty(CastleGenericRewardsDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleGenericRewardsDialog.__initialize_static_members = function () {
    CastleGenericRewardsDialog.NAME = "CastleGenericRewardsDialog";
  };
  return CastleGenericRewardsDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleGenericRewardsDialog = __s0local0;
__s0local0.__initialize_static_members();
