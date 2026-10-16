Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_C2SReadMessagesVO = require("gge-module:export_C2SReadMessagesVO");
var __dep_export_CastleMessageDataEvent = require("gge-module:export_CastleMessageDataEvent");
var __dep_export_AdvisorAttackHelper = require("gge-module:export_AdvisorAttackHelper");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_AdvisorAttackOverviewVO = require("gge-module:export_AdvisorAttackOverviewVO");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_AdvisorAttackOverviewComponent = require("gge-module:export_AdvisorAttackOverviewComponent");
var __s0local0 = function (__s1param0) {
  function AdvisorAttackSummaryDialog() {
    return __s1param0.call(this, AdvisorAttackSummaryDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AdvisorAttackSummaryDialog, __s1param0);
  AdvisorAttackSummaryDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    __dep_exact_9e901e8e2483a22f_2.GoodgameTextFieldManager.getInstance().registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("title_advisor_AttackSummary")));
    this.attackSummaryComponent = new __dep_export_AdvisorAttackOverviewComponent.AdvisorAttackOverviewComponent(this.dialogDisp.mc_summary, true);
    this.dialogDisp.btn_help.visible = false;
  };
  AdvisorAttackSummaryDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SReadMessagesVO.C2SReadMessagesVO(this.dialogProperties.messageID));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleMessageDataEvent.CastleMessageDataEvent.NEW_MESSAGE_BODY, this.bindFunction(this.onMessageDataReceived));
  };
  AdvisorAttackSummaryDialog.prototype.hideLoaded = function (__s9param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s9param0);
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleMessageDataEvent.CastleMessageDataEvent.NEW_MESSAGE_BODY, this.bindFunction(this.onMessageDataReceived));
  };
  AdvisorAttackSummaryDialog.prototype.onMessageDataReceived = function (__s11param0) {
    var __s11local0 = __s11param0.params[0];
    var __s11local1 = new __dep_export_AdvisorAttackOverviewVO.AdvisorAttackOverviewVO();
    __s11local1.parseServerData(JSON.parse(__s11local0));
    this.attackSummaryComponent.update(__s11local1);
    __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_teaser);
    var __s11local2 = __dep_export_AdvisorAttackHelper.AdvisorAttackHelper.getTeaserFileName(this.dialogProperties.advisorType);
    var __s11local3 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s11local2 + "_Summary", __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s11local2), null, 0, false);
    this.dialogDisp.mc_teaser.addChild(__s11local3);
  };
  AdvisorAttackSummaryDialog.prototype.onClick = function (__s13param0) {
    __s1param0.prototype.onClick.call(this, __s13param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s13param0.target)) {
      switch (__s13param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.showHelper("", __dep_exact_92d05af59ee2ff30_1.Localize.text(""));
      }
    }
  };
  Object.defineProperty(AdvisorAttackSummaryDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  AdvisorAttackSummaryDialog.NAME = "AdvisorSummaryExt_1";
  return AdvisorAttackSummaryDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.AdvisorAttackSummaryDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
