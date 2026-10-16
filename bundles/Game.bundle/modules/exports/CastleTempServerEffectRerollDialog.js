Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_C2STempServerApplyChargeCampEffectsEventVO = require("gge-module:export_C2STempServerApplyChargeCampEffectsEventVO");
var __dep_export_C2STempServerChargeCampRerollEventVO = require("gge-module:export_C2STempServerChargeCampRerollEventVO");
var __dep_export_C2STempServerGetChargeCampEffectsEventVO = require("gge-module:export_C2STempServerGetChargeCampEffectsEventVO");
var __dep_export_CastleTempServerEventEvent = require("gge-module:export_CastleTempServerEventEvent");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleTempServerEffectRerollDialog() {
    var __s3local0 = this;
    __s3local0.rerolledSelected = false;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, CastleTempServerEffectRerollDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleTempServerEffectRerollDialog, __s1param0);
  CastleTempServerEffectRerollDialog.prototype.showLoaded = function (__s5param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok, this.dialogDisp.btn_reroll], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempServer_mutation_title")));
    this.tf_currSelect = this.textFieldManager.registerTextField(this.dialogDisp.txt_current_selected, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempServer_mutation_current_header")));
    this.tf_currUnSelect = this.textFieldManager.registerTextField(this.dialogDisp.txt_current_unselected, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempServer_mutation_current_header")));
    this.tf_reSelect = this.textFieldManager.registerTextField(this.dialogDisp.txt_reroll_selected, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempServer_mutation_new_header")));
    this.tf_reUnSelect = this.textFieldManager.registerTextField(this.dialogDisp.txt_reroll_unselected, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempServer_mutation_new_header")));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_reroll.txt_value, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_trainingProgram_reroll_button")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_cost, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(__dep_export_CastleModel.CastleModel.rerollCostData.getRerollCostsByType(__dep_export_CastleRerollCostData.CastleRerollCostData.REROLL_TYPE_CHARGE_EFFECT)[0].c2Cost));
    this.dialogDisp.mc_select0.mouseChildren = false;
    this.dialogDisp.mc_select1.mouseChildren = false;
    this.dialogDisp.mc_select0.actLikeButton = true;
    this.dialogDisp.mc_select1.actLikeButton = true;
    this.rerolledSelected = false;
    __dep_export_CastleModel.CastleModel.tempServerData.addEventListener(__dep_export_CastleTempServerEventEvent.CastleTempServerEventEvent.TEMPSERVER_CHARGE_EFFECT_ARRIVED, this.bindFunction(this.onEffectsArrived));
    __dep_exact_9e901e8e2483a22f.BasicModel.smartfoxClient.sendCommandVO(new __dep_export_C2STempServerGetChargeCampEffectsEventVO.C2STempServerGetChargeCampEffectsEventVO(this.dialogProps.targetWMO.absAreaPosX, this.dialogProps.targetWMO.absAreaPosY));
  };
  CastleTempServerEffectRerollDialog.prototype.hideLoaded = function (__s7param0 = null) {
    __s1param0.prototype.hideLoaded.call(this);
    __dep_export_CastleModel.CastleModel.tempServerData.removeEventListener(__dep_export_CastleTempServerEventEvent.CastleTempServerEventEvent.TEMPSERVER_CHARGE_EFFECT_ARRIVED, this.bindFunction(this.onEffectsArrived));
  };
  CastleTempServerEffectRerollDialog.prototype.onEffectsArrived = function (__s9param0) {
    this.dialogProps.currentBonusVO = __s9param0.params[0];
    this.dialogProps.rerollBonusVO = __s9param0.params[1];
    this.updateData();
  };
  CastleTempServerEffectRerollDialog.prototype.onClick = function (__s11param0) {
    __s1param0.prototype.onClick.call(this, __s11param0);
    switch (__s11param0.target) {
      case this.dialogDisp.btn_reroll:
        __dep_exact_9e901e8e2483a22f.BasicModel.smartfoxClient.sendCommandVO(new __dep_export_C2STempServerChargeCampRerollEventVO.C2STempServerChargeCampRerollEventVO(this.dialogProps.targetWMO.absAreaPosX, this.dialogProps.targetWMO.absAreaPosY));
        break;
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_ok:
        if (this.rerolledSelected) {
          __dep_exact_9e901e8e2483a22f.BasicModel.smartfoxClient.sendCommandVO(new __dep_export_C2STempServerApplyChargeCampEffectsEventVO.C2STempServerApplyChargeCampEffectsEventVO(this.dialogProps.targetWMO.absAreaPosX, this.dialogProps.targetWMO.absAreaPosY));
        }
        this.hide();
        break;
      case this.dialogDisp.mc_select0:
        this.rerolledSelected = false;
        this.updateData();
        break;
      case this.dialogDisp.mc_select1:
        this.rerolledSelected = true;
        this.updateData();
    }
  };
  CastleTempServerEffectRerollDialog.prototype.updateData = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.mc_current.mc_selected.txt_text, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_tempServer_effect_" + this.dialogProps.currentBonusVO.effect.name, this.dialogProps.currentBonusVO.effectValue.textReplacements));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_current.mc_default.txt_text, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_tempServer_effect_" + this.dialogProps.currentBonusVO.effect.name, this.dialogProps.currentBonusVO.effectValue.textReplacements));
    this.dialogDisp.mc_select0.mc_selected.visible = !this.rerolledSelected;
    this.dialogDisp.mc_current.mc_empty.visible = false;
    this.dialogDisp.mc_current.mc_selected.visible = !this.rerolledSelected;
    this.dialogDisp.mc_current.mc_default.visible = this.rerolledSelected;
    this.tf_currSelect.visible = !this.rerolledSelected;
    this.tf_currUnSelect.visible = this.rerolledSelected;
    this.tf_reSelect.visible = this.rerolledSelected;
    this.tf_reUnSelect.visible = !this.rerolledSelected;
    if (this.dialogProps.rerollBonusVO) {
      this.dialogDisp.mc_select1.mc_selected.visible = this.rerolledSelected;
      this.dialogDisp.mc_current.mc_empty.visible = false;
      this.dialogDisp.mc_select1.visible = true;
      this.dialogDisp.mc_reroll.mc_selected.visible = this.rerolledSelected;
      this.dialogDisp.mc_reroll.mc_default.visible = !this.rerolledSelected;
      this.textFieldManager.registerTextField(this.dialogDisp.mc_reroll.mc_selected.txt_text, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_tempServer_effect_" + this.dialogProps.rerollBonusVO.effect.name, this.dialogProps.rerollBonusVO.effectValue.textReplacements));
      this.textFieldManager.registerTextField(this.dialogDisp.mc_reroll.mc_default.txt_text, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_tempServer_effect_" + this.dialogProps.rerollBonusVO.effect.name, this.dialogProps.rerollBonusVO.effectValue.textReplacements));
      this.textFieldManager.registerTextField(this.dialogDisp.mc_reroll.mc_empty.txt_text, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_tempServer_mutation_new_reroll"));
    } else {
      this.dialogDisp.mc_select1.visible = false;
      this.dialogDisp.mc_reroll.mc_selected.visible = false;
      this.dialogDisp.mc_reroll.mc_default.visible = false;
      this.dialogDisp.mc_reroll.mc_empty.visible = true;
      this.textFieldManager.registerTextField(this.dialogDisp.mc_reroll.mc_empty.txt_text, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_tempServer_mutation_new_reroll"));
    }
  };
  Object.defineProperty(CastleTempServerEffectRerollDialog.prototype, "dialogProps", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleTempServerEffectRerollDialog.NAME = "CastleTempServerEffectReroll";
  return CastleTempServerEffectRerollDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleTempServerEffectRerollDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
var __dep_export_CastleRerollCostData = require("gge-module:export_CastleRerollCostData");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
