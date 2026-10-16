Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstCurrency = require("gge-module:export_ClientConstCurrency");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_CastleLegendSkillItem = require("gge-module:export_CastleLegendSkillItem");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ClientConstLegendSkills = require("gge-module:export_ClientConstLegendSkills");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __s0local0 = function (__s1param0) {
  function CastleSceatSkillBuyDialog() {
    return __s1param0.call(this, CastleSceatSkillBuyDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleSceatSkillBuyDialog, __s1param0);
  CastleSceatSkillBuyDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_legendTemple_unlockSkill_header")));
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_cancel, this.dialogDisp.btn_close], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    this.dialogDisp.mc_activationTime.toolTipText = "researchTime";
    this.dialogDisp.mc_cost.mouseChildren = false;
    this.dialogDisp.mc_activationTime.mouseChildren = false;
  };
  CastleSceatSkillBuyDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    var __s7local0 = this.dialogProperties.sceatSkillVO.isMaxLevel() ? __dep_export_ClientConstLegendSkills.ClientConstLegendSkills.COLORCODE_YELLOW : __dep_export_ClientConstLegendSkills.ClientConstLegendSkills.COLORCODE_LIGHTWHITE;
    var __s7local1 = this.dialogProperties.sceatSkillVO.composeSkillTextVO(__s7local0, this.dialogProperties.sceatSkillVO.getUnlockLevel());
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, __s7local1);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_oldLevel, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("ci_level", [this.dialogProperties.sceatSkillVO.level - 1]));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_newLevel, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("ci_level", [this.dialogProperties.sceatSkillVO.level]));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_cost.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(this.dialogProperties.sceatSkillVO.cost));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_activationTime.txt_time, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventTimeString(this.dialogProperties.sceatSkillVO.activationTime)));
    this.removeSkillItem();
    this._skillInProgressItem = new __dep_export_CastleLegendSkillItem.CastleLegendSkillItem(this.dialogProperties.currentSceatSkillVO, true, true);
    this._skillInProgressItem.show();
    this.dialogDisp.mc_icon.addChild(this._skillInProgressItem.dispContainer);
    this.dialogDisp.mc_cost.toolTipText = this.dialogProperties.currentSceatSkillVO.costCurrencyID == __dep_export_ClientConstCurrency.ClientConstCurrency.ID_SCEAT_TOKEN ? "currency_name_sceatToken" : "currency_name_ImperialDucat";
    this.dialogDisp.mc_cost.mc_icon_sceat.visible = this.dialogProperties.currentSceatSkillVO.costCurrencyID == __dep_export_ClientConstCurrency.ClientConstCurrency.ID_SCEAT_TOKEN;
    this.dialogDisp.mc_cost.mc_icon_ducat.visible = this.dialogProperties.currentSceatSkillVO.costCurrencyID == __dep_export_ClientConstCurrency.ClientConstCurrency.ID_IMPERIAL_DUCAT;
    __dep_export_ButtonHelper.ButtonHelper.delayEnableButton(this.dialogDisp.btn_ok, true, 2000);
  };
  CastleSceatSkillBuyDialog.prototype.hideLoaded = function (__s9param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s9param0);
    this.removeSkillItem();
  };
  CastleSceatSkillBuyDialog.prototype.removeSkillItem = function () {
    if (this._skillInProgressItem) {
      __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_icon);
      this._skillInProgressItem.hide();
      this._skillInProgressItem = null;
    }
  };
  CastleSceatSkillBuyDialog.prototype.onClick = function (__s14param0) {
    __s1param0.prototype.onClick.call(this, __s14param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s14param0.target)) {
      switch (__s14param0.target) {
        case this.dialogDisp.mc_icon:
          this._skillInProgressItem.openInfoDialogue(this.dialogProperties.currentSceatSkillVO);
          break;
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_cancel:
          this.hide();
          break;
        case this.dialogDisp.btn_ok:
          __dep_export_CastleModel.CastleModel.legendSkillData.buySkill(this.dialogProperties.sceatSkillVO);
          this.hide();
      }
    }
  };
  Object.defineProperty(CastleSceatSkillBuyDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleSceatSkillBuyDialog.NAME = "CastleSceatSkillBuy";
  return CastleSceatSkillBuyDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleSceatSkillBuyDialog = __s0local0;
