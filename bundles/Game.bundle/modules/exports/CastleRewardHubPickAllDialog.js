Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_exact_84d43d9c404bd4d8 = require("gge-module:exact_84d43d9c404bd4d8");
var __dep_export_CastleRewardHubMicroservice = require("gge-module:export_CastleRewardHubMicroservice");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_RewardHubManageAllDialog = require("gge-module:export_RewardHubManageAllDialog");
var __s0local0 = function (__s1param0) {
  function CastleRewardHubPickAllDialog() {
    return __s1param0.call(this, CastleRewardHubPickAllDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleRewardHubPickAllDialog, __s1param0);
  CastleRewardHubPickAllDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_rewardHub_pickUpAll_header")));
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_yes, this.dialogDisp.btn_no], __dep_exact_84d43d9c404bd4d8.ClickFeedbackButtonHover);
    this.dialogDisp.btn_close.toolTipText = "generic_btn_close";
  };
  CastleRewardHubPickAllDialog.prototype.applyProperties = function () {
    __s1param0.prototype.applyProperties.call(this);
    if (this.dialogProperties.hasLockedRewards) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_rewardHub_pickUpAll_notAllExtra_desc"));
    } else {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_rewardHub_pickUpAll_allExtra_desc"));
    }
    this._currentRewardHubIds = __dep_export_CastleModel.CastleModel.rewardHubData.getCurrentRewardHubIds();
  };
  CastleRewardHubPickAllDialog.prototype.onClick = function (__s11param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s11param0.target)) {
      __s1param0.prototype.onClick.call(this, __s11param0);
      switch (__s11param0.target) {
        case this.dialogDisp.btn_no:
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_yes:
          this.grantRewards();
      }
    }
  };
  CastleRewardHubPickAllDialog.prototype.grantRewards = function () {
    __dep_export_CastleRewardHubMicroservice.CastleRewardHubMicroservice.Instance.pickRewardsSignal.dispatch(this._currentRewardHubIds);
    this.hide();
    __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().hideDialog(__dep_export_RewardHubManageAllDialog.RewardHubManageAllDialog);
  };
  Object.defineProperty(CastleRewardHubPickAllDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleRewardHubPickAllDialog.NAME = "CastleRewardHubPickAll";
  return CastleRewardHubPickAllDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleRewardHubPickAllDialog = __s0local0;
