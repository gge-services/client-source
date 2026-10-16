Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_C2SCancelMovementVO = require("gge-module:export_C2SCancelMovementVO");
var __dep_export_AdvisorAttackHelper = require("gge-module:export_AdvisorAttackHelper");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function AdvisorAttackOverviewCancelDialog() {
    return __s1param0.call(this, AdvisorAttackOverviewCancelDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AdvisorAttackOverviewCancelDialog, __s1param0);
  AdvisorAttackOverviewCancelDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_yes, this.dialogDisp.btn_no, this.dialogDisp.btn_close], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    this.dialogDisp.btn_close.visible = false;
  };
  AdvisorAttackOverviewCancelDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    if (this.dialogProperties.movements.length > 1) {
      __dep_exact_9e901e8e2483a22f_2.GoodgameTextFieldManager.getInstance().registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("title_advisor_AttackCancelAll")));
      __dep_exact_9e901e8e2483a22f_2.GoodgameTextFieldManager.getInstance().registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("advisor_AttackCancelAll"));
    } else {
      __dep_exact_9e901e8e2483a22f_2.GoodgameTextFieldManager.getInstance().registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("title_advisor_AttackCancel")));
      __dep_exact_9e901e8e2483a22f_2.GoodgameTextFieldManager.getInstance().registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("advisor_AttackCancel"));
    }
    __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_teaser);
    var __s7local0 = __dep_export_AdvisorAttackHelper.AdvisorAttackHelper.getTeaserFileName(this.dialogProperties.advisorType);
    var __s7local1 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s7local0 + "_Cancel", __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s7local0), null, 0, false);
    this.dialogDisp.mc_teaser.addChild(__s7local1);
  };
  AdvisorAttackOverviewCancelDialog.prototype.onClick = function (__s11param0) {
    __s1param0.prototype.onClick.call(this, __s11param0);
    switch (__s11param0.target) {
      case this.dialogDisp.btn_yes:
        this.cancelAttacks();
        this.hide();
        if (this.dialogProperties.yesCallBack) {
          this.dialogProperties.yesCallBack();
        }
        break;
      case this.dialogDisp.btn_no:
      case this.dialogDisp.btn_close:
        this.hide();
    }
  };
  AdvisorAttackOverviewCancelDialog.prototype.cancelAttacks = function () {
    this.dialogProperties.movements.forEach(function (__s17param0) {
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SCancelMovementVO.C2SCancelMovementVO(__s17param0.objectId));
    });
  };
  Object.defineProperty(AdvisorAttackOverviewCancelDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  AdvisorAttackOverviewCancelDialog.NAME = "NomadAdvisorOverviewCancelExt";
  return AdvisorAttackOverviewCancelDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.AdvisorAttackOverviewCancelDialog = __s0local0;
