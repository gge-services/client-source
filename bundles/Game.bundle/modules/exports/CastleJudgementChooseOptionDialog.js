Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_C2SJudgeJudgementCitizenVO = require("gge-module:export_C2SJudgeJudgementCitizenVO");
var __dep_export_CastleJudgementDataEvent = require("gge-module:export_CastleJudgementDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_CastleGGSVerticalAlign = require("gge-module:export_CastleGGSVerticalAlign");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleJudgementChooseOptionDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleJudgementChooseOptionDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleJudgementChooseOptionDialog, __s1param0);
  CastleJudgementChooseOptionDialog.prototype.initLoaded = function (__s5param0 = null) {
    this.backgroundAlpha = 0.7;
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.dialogDisp.btn_chooseA.mouseChildren = false;
    this.dialogDisp.btn_chooseB.mouseChildren = false;
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_chooseA, this.dialogDisp.btn_chooseB]);
    this.textFieldManager.registerTextField(this.dialogDisp.mc_pricelabelA.txt_label, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("judgement_requirements"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_pricelabelB.txt_label, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("judgement_requirements"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_rewardlabelA.txt_label, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_fame_reward"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_rewardlabelB.txt_label, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_fame_reward"));
    this.itxt_title = this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(""));
    this.itxt_desc = this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(""));
    this.itxt_chooseA = this.textFieldManager.registerTextField(this.dialogDisp.btn_chooseA.txt_label, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(""));
    this.itxt_chooseB = this.textFieldManager.registerTextField(this.dialogDisp.btn_chooseB.txt_label, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(""));
    this.itxt_chooseA.verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this.itxt_chooseB.verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
  };
  CastleJudgementChooseOptionDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    __dep_export_CastleModel.CastleModel.judgementData.addEventListener(__dep_export_CastleJudgementDataEvent.CastleJudgementDataEvent.JUDGEMENT_ENDED, this.bindFunction(this.onJudgementEnd));
    var __s7local0 = __dep_export_CastleModel.CastleModel.judgementData.activeJudgement;
    this.itxt_title.textContentVO.textId = "judgement_" + __s7local0.id + "_name";
    this.itxt_desc.textContentVO.textId = "judgement_" + __s7local0.id + "_description";
    this.itxt_chooseA.textContentVO.textId = "judgement_" + __s7local0.id + "_option_btnA";
    this.itxt_chooseB.textContentVO.textId = "judgement_" + __s7local0.id + "_option_btnB";
    this.initOption(this.dialogDisp.mc_conditionA, this.dialogDisp.mc_rewardA, this.dialogDisp.btn_chooseA, __s7local0.conditionA, __s7local0.rewardA, 0);
    this.initOption(this.dialogDisp.mc_conditionB, this.dialogDisp.mc_rewardB, this.dialogDisp.btn_chooseB, __s7local0.conditionB, __s7local0.rewardB, 1);
    __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_imageHolder);
    var __s7local1 = "Judgement_" + __s7local0.visualName + "_teaser";
    var __s7local2 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s7local1, __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s7local1), null, 0, false);
    this.dialogDisp.mc_imageHolder.addChild(__s7local2);
  };
  CastleJudgementChooseOptionDialog.prototype.hideLoaded = function (__s9param0 = null) {
    __dep_export_CastleModel.CastleModel.judgementData.addEventListener(__dep_export_CastleJudgementDataEvent.CastleJudgementDataEvent.JUDGEMENT_ENDED, this.bindFunction(this.onJudgementEnd));
    __s1param0.prototype.hideLoaded.call(this, __s9param0);
  };
  CastleJudgementChooseOptionDialog.prototype.onJudgementEnd = function (__s11param0) {
    this.hide();
  };
  CastleJudgementChooseOptionDialog.prototype.initOption = function (__s13param0, __s13param1, __s13param2, __s13param3, __s13param4, __s13param5) {
    var __s13local0 = true;
    __s13param0.gotoAndStop(__s13param3.length + 1);
    for (var __s13local1 = 0; __s13local1 < __s13param3.length; ++__s13local1) {
      if (__dep_export_CastleJudgementHelper.CastleJudgementHelper.setConditionIconAndTooltipAndAmount(__s13param3[__s13local1], __s13param0["res" + __s13local1], __s13param5, __dep_export_CastleModel.CastleModel.userData.userLevel, __dep_export_CastleModel.CastleModel.judgementData.activeJudgement.id)) {
        __s13local0 = false;
      }
    }
    __s13param1.gotoAndStop(__s13param4.length + 1);
    for (var __s13local2 = 0; __s13local2 < __s13param4.length; ++__s13local2) {
      __dep_export_CastleJudgementHelper.CastleJudgementHelper.setRewardIconAndTooltipAndAmount(__s13param4[__s13local2], __s13param1["res" + __s13local2], __s13param5, __dep_export_CastleModel.CastleModel.userData.userLevel, __dep_export_CastleModel.CastleModel.judgementData.activeJudgement.id);
    }
    if (__s13local0) {
      __s13param2.toolTipText = "judgement_option_btn_tooltip";
      __dep_export_ButtonHelper.ButtonHelper.enableButton(__s13param2, true);
    } else {
      __s13param2.toolTipText = "judgement_notsatisfiable_tooltip";
      __dep_export_ButtonHelper.ButtonHelper.enableButton(__s13param2, false);
    }
  };
  CastleJudgementChooseOptionDialog.prototype.onClick = function (__s22param0) {
    __s1param0.prototype.onClick.call(this, __s22param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s22param0.target)) {
      switch (__s22param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_chooseA:
          __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SJudgeJudgementCitizenVO.C2SJudgeJudgementCitizenVO(0));
          this.hide();
          break;
        case this.dialogDisp.btn_chooseB:
          __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SJudgeJudgementCitizenVO.C2SJudgeJudgementCitizenVO(1));
          this.hide();
      }
    }
  };
  CastleJudgementChooseOptionDialog.__initialize_static_members = function () {
    CastleJudgementChooseOptionDialog.NAME = "JudgementChooseOption";
  };
  return CastleJudgementChooseOptionDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleJudgementChooseOptionDialog = __s0local0;
var __dep_export_CastleJudgementHelper = require("gge-module:export_CastleJudgementHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
