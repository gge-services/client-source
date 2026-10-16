Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_SublayerSwitcher = require("gge-module:export_SublayerSwitcher");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_CastleLegendSkillClassicSublayer = require("gge-module:export_CastleLegendSkillClassicSublayer");
var __dep_export_CastleLegendSkillSceatSublayer = require("gge-module:export_CastleLegendSkillSceatSublayer");
var __dep_export_CastleLegendSkillSublayerProperties = require("gge-module:export_CastleLegendSkillSublayerProperties");
var __s0local0 = function (__s1param0) {
  function CastleLegendSkillDialog() {
    return __s1param0.call(this, CastleLegendSkillDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleLegendSkillDialog, __s1param0);
  CastleLegendSkillDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    var __s5local0 = new __dep_export_CastleLegendSkillClassicSublayer.CastleLegendSkillClassicSublayer(this.dialogDisp.sublayer_classic);
    var __s5local1 = new __dep_export_CastleLegendSkillSceatSublayer.CastleLegendSkillSceatSublayer(this.dialogDisp.sublayer_champion);
    this.sublayerSwitcher = new __dep_export_SublayerSwitcher.SublayerSwitcher(this.bindFunction(this.getSublayerProperties));
    this.sublayerSwitcher.add(CastleLegendSkillDialog.SUBLAYER_ATTACK, this.dialogDisp.tab_attack, __s5local0);
    this.sublayerSwitcher.add(CastleLegendSkillDialog.SUBLAYER_DEFENSE, this.dialogDisp.tab_defense, __s5local0);
    this.sublayerSwitcher.add(CastleLegendSkillDialog.SUBLAYER_BUILDINGS, this.dialogDisp.tab_buildings, __s5local1);
    this.sublayerSwitcher.add(CastleLegendSkillDialog.SUBLAYER_UNITS, this.dialogDisp.tab_units, __s5local1);
    this.dialogDisp.tab_attack.toolTipText = "dialog_legendTemple_tooltipAttack";
    this.dialogDisp.tab_defense.toolTipText = "dialog_legendTemple_tooltipDefence";
    this.dialogDisp.tab_buildings.toolTipText = "dialog_legendTemple_tooltipBuildings";
    this.dialogDisp.tab_units.toolTipText = "dialog_legendTemple_tooltipUnits";
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_help, this.dialogDisp.btn_close], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    this.dialogDisp.btn_help.toolTipText = "generic_help";
  };
  CastleLegendSkillDialog.prototype.getSublayerProperties = function (__s7param0) {
    return new __dep_export_CastleLegendSkillSublayerProperties.CastleLegendSkillSublayerProperties(__s7param0);
  };
  CastleLegendSkillDialog.prototype.showLoaded = function (__s9param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s9param0);
    this.dialogDisp.tab_buildings.visible = !this.castleEnv.isCrossplay;
    this.dialogDisp.tab_units.visible = !this.castleEnv.isCrossplay;
    if (this.dialogProperties) {
      this.onJumpToSkill();
    } else {
      this.sublayerSwitcher.switchTo(CastleLegendSkillDialog.SUBLAYER_ATTACK);
      this.sublayerSwitcher.show();
    }
  };
  CastleLegendSkillDialog.prototype.hideLoaded = function (__s13param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s13param0);
    this.sublayerSwitcher.hide();
  };
  CastleLegendSkillDialog.prototype.onClick = function (__s15param0) {
    __s1param0.prototype.onClick.call(this, __s15param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s15param0.target)) {
      switch (__s15param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          this.sublayerSwitcher.showHelp();
      }
    }
  };
  CastleLegendSkillDialog.prototype.onJumpToSkill = function () {
    var __s19local0 = this.dialogProperties.jumpToTabId;
    var __s19local1 = this.dialogProperties.jumpToSkillId;
    this.sublayerSwitcher.switchTo(__s19local0);
    this.sublayerSwitcher.show();
    var __s19local2 = this.sublayerSwitcher.getSublayerByID(__s19local0);
    if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s19local2, "CastleLegendSkillSceatSublayer")) {
      __s19local2.jumpToSkillTier(__s19local1);
    }
  };
  Object.defineProperty(CastleLegendSkillDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleLegendSkillDialog.NAME = "CastleLegendSkill4";
  CastleLegendSkillDialog.SUBLAYER_ATTACK = 0;
  CastleLegendSkillDialog.SUBLAYER_DEFENSE = 1;
  CastleLegendSkillDialog.SUBLAYER_BUILDINGS = 2;
  CastleLegendSkillDialog.SUBLAYER_UNITS = 3;
  return CastleLegendSkillDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleLegendSkillDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
