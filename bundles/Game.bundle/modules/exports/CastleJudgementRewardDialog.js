Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __s0local0 = function (__s1param0) {
  function CastleJudgementRewardDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleJudgementRewardDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleJudgementRewardDialog, __s1param0);
  CastleJudgementRewardDialog.prototype.initLoaded = function (__s5param0 = null) {
    this.backgroundAlpha = 0.7;
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.initBasicButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_close]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_reward_label, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_fame_reward"));
    this.itxt_title = this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(""));
    this.itxt_desc = this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(""));
  };
  CastleJudgementRewardDialog.prototype.applyPropertiesLoaded = function (__s7param0 = null) {
    __s1param0.prototype.applyPropertiesLoaded.call(this, __s7param0);
    var __s7local0 = __dep_export_CastleModel.CastleModel.judgementData.getJudgementVObyID(this.dialogProperties.judgementID);
    this.itxt_title.textContentVO.textId = "judgement_" + __s7local0.id + "_name";
    this.itxt_desc.textContentVO.textId = "judgement_" + __s7local0.id + "_reward" + (this.dialogProperties.optionID > 0 ? "B" : "A") + "_description";
    var __s7local1 = this.dialogProperties.optionID > 0 ? __s7local0.rewardB : __s7local0.rewardA;
    this.dialogDisp.mc_reward.gotoAndStop(__s7local1.length + 1);
    for (var __s7local2 = 0; __s7local2 < __s7local1.length; ++__s7local2) {
      __dep_export_CastleJudgementHelper.CastleJudgementHelper.setRewardIconAndTooltipAndAmount(__s7local1[__s7local2], this.dialogDisp.mc_reward["res" + __s7local2], this.dialogProperties.optionID, __dep_export_CastleModel.CastleModel.userData.userLevel, __s7local0.id);
    }
    __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_imageHolder);
    var __s7local3 = "Judgement_" + __s7local0.visualName + "_reward" + (this.dialogProperties.optionID > 0 ? "B" : "A");
    var __s7local4 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s7local3, __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s7local3), null, 0, false);
    this.dialogDisp.mc_imageHolder.addChild(__s7local4);
  };
  CastleJudgementRewardDialog.prototype.onClick = function (__s11param0) {
    __s1param0.prototype.onClick.call(this, __s11param0);
    switch (__s11param0.target) {
      case this.dialogDisp.btn_ok:
      case this.dialogDisp.btn_close:
        this.hide();
    }
  };
  Object.defineProperty(CastleJudgementRewardDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleJudgementRewardDialog.__initialize_static_members = function () {
    CastleJudgementRewardDialog.NAME = "JudgementReward";
  };
  return CastleJudgementRewardDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleJudgementRewardDialog = __s0local0;
var __dep_export_CastleJudgementHelper = require("gge-module:export_CastleJudgementHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
