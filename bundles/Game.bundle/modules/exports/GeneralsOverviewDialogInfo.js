Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_BasicPickerEvent = require("gge-module:export_BasicPickerEvent");
var __dep_export_GeneralsEvent = require("gge-module:export_GeneralsEvent");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_ToggleSwitchButton = require("gge-module:export_ToggleSwitchButton");
var __dep_export_LordEffectHelper = require("gge-module:export_LordEffectHelper");
var __dep_export_GeneralOverviewLordPicker = require("gge-module:export_GeneralOverviewLordPicker");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleDialogSubLayer = require("gge-module:export_CastleDialogSubLayer");
var __dep_export_GeneralsAbilityDialog = require("gge-module:export_GeneralsAbilityDialog");
var __dep_export_GeneralsAbilityDialogProperties = require("gge-module:export_GeneralsAbilityDialogProperties");
var __dep_export_GeneralsHelper = require("gge-module:export_GeneralsHelper");
var __dep_export_GeneralsLevelUPDialog = require("gge-module:export_GeneralsLevelUPDialog");
var __dep_export_GeneralsLevelUPDialogProperties = require("gge-module:export_GeneralsLevelUPDialogProperties");
var __dep_export_GeneralsSkillTreeDialog = require("gge-module:export_GeneralsSkillTreeDialog");
var __dep_export_GeneralsSkillTreeDialogProperties = require("gge-module:export_GeneralsSkillTreeDialogProperties");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function GeneralsOverviewDialogInfo(__s3param0, __s3param1) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.parent = __s3param1;
    __dep_export_ButtonHelper.ButtonHelper.initButtons([__s3local0.subLayerDisp.btn_starLevel, __s3local0.subLayerDisp.btn_level, __s3local0.subLayerDisp.btn_skills, __s3local0.subLayerDisp.btn_abilities, __s3local0.subLayerDisp.btn_info, __s3local0.subLayerDisp.btn_info_selected], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.btn_skills.txt_label, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_generals_overview_skills_button"))).autoFitToBounds = true;
    __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.btn_abilities.txt_label, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_generals_overview_abilities_button"))).autoFitToBounds = true;
    __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.txt_abilitiesTitle, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_generals_overview_generalAbilities_header"));
    __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.mc_tooltip.txt_desc, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("TODO: Capacity tooltip"));
    __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.mc_generalInfoTooltip.txt_header, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_attack_rework2022_generals_passiveEffectsList_header"));
    __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.txt_effectsTitle, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_generals_overview_strongestEffects"));
    __s3local0._itxt_name = __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.txt_name, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    __s3local0._itxt_name.autoFitToBounds = true;
    __s3local0._itxt_level = __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.txt_level, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_generals_level_current_max"));
    __s3local0._itxt_lord = __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.txt_lord, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    __s3local0._itxt_xp = __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.mc_xp.txt_xp, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    __s3local0._xpProgressWidth = __s3local0.subLayerDisp.mc_xp.mc_progressbar.width;
    __s3local0.subLayerDisp.btn_starLevel.toolTipText = "dialog_generals_overview_ratingUp_button_tooltip";
    __s3local0.subLayerDisp.btn_level.toolTipText = "dialog_generals_overview_levelUp_button_tooltip";
    __s3local0.subLayerDisp.btn_info.toolTipText = "dialog_attack_rework2022_generals_passiveEffectsList_tooltip";
    __s3local0.subLayerDisp.btn_info_selected.toolTipText = "dialog_attack_rework2022_generals_passiveEffectsList_tooltip";
    __s3local0.subLayerDisp.mc_generalInfoTooltip.visible = false;
    __s3local0._lordToggleButton = new __dep_export_ToggleSwitchButton.ToggleSwitchButton(__s3local0.subLayerDisp.btn_toggleLord);
    __s3local0._lordPicker = new __dep_export_GeneralOverviewLordPicker.GeneralOverviewLordPicker(__s3local0.subLayerDisp.mc_lordPicker);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GeneralsOverviewDialogInfo, __s1param0);
  GeneralsOverviewDialogInfo.prototype.show = function (__s5param0) {
    __s1param0.prototype.show.call(this, __s5param0);
    this.subLayerDisp.mc_tooltip.visible = false;
    this.subLayerDisp.btn_info_selected.visible = false;
    this.subLayerDisp.mc_generalInfoTooltip.visible = false;
    this.updateElements();
    this.updateLordToggleButton();
    this.updateLordPicker();
    this.updateLordEffects();
    this.updateAbilities();
    __dep_export_CastleModel.CastleModel.generalsData.addEventListener(__dep_export_GeneralsEvent.GeneralsEvent.GENERALS_UPDATED, this.bindFunction(this.onGeneralsUpdated));
    this._lordToggleButton.changeSignal.add(this.bindFunction(this.onToggleLord));
  };
  GeneralsOverviewDialogInfo.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    __dep_export_CastleModel.CastleModel.generalsData.removeEventListener(__dep_export_GeneralsEvent.GeneralsEvent.GENERALS_UPDATED, this.bindFunction(this.onGeneralsUpdated));
    this._lordToggleButton.changeSignal.remove(this.bindFunction(this.onToggleLord));
    if (this._lordPicker) {
      this._lordPicker.removeEventListener(__dep_export_BasicPickerEvent.BasicPickerEvent.PICKER_CHANGE_VALUE, this.bindFunction(this.onLordChanged));
      this._lordPicker.hide();
    }
    this.subLayerDisp.btn_info_selected.visible = false;
    this.subLayerDisp.mc_generalInfoTooltip.visible = false;
  };
  GeneralsOverviewDialogInfo.prototype.updateElements = function () {
    this._itxt_name.textContentVO.stringValue = this.sublayerProperties.generalVO.nameText;
    __dep_export_GeneralsHelper.GeneralsHelper.updateStarLevel(this.subLayerDisp, this.sublayerProperties.generalVO);
    this._itxt_level.textContentVO.textReplacements = [this.sublayerProperties.generalVO.currentLevel, this.sublayerProperties.generalVO.maxLevel];
    if (this.sublayerProperties.generalVO.nextLevelXP < 0) {
      this._itxt_xp.textContentVO.stringValue = __dep_exact_92d05af59ee2ff30.Localize.text("maximumabbrevation");
    } else {
      this._itxt_xp.textContentVO.stringValue = __dep_exact_92d05af59ee2ff30.Localize.text(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [this.sublayerProperties.generalVO.currentLevelXP, this.sublayerProperties.generalVO.nextLevelXP]);
    }
    this.subLayerDisp.mc_xp.mc_progressbar_full.visible = this.sublayerProperties.generalVO.currentLevel >= this.sublayerProperties.generalVO.maxLevel;
    this.subLayerDisp.mc_xp.mc_progressbar.scaleX = this.sublayerProperties.generalVO.getXPProgressFactor();
    this._itxt_lord.textContentVO.textId = this.isBaron ? "equipment_itemType_baron" : "equipment_itemType_general";
    this.subLayerDisp.btn_starLevel.visible = this.sublayerProperties.generalVO.isStarLevelUpgradeable;
    this.subLayerDisp.btn_level.visible = this.sublayerProperties.generalVO.isXpUpgradeable;
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.subLayerDisp.mc_generalInfoTooltip.txt_effects, new __dep_exact_92d05af59ee2ff30.TextVO(this.sublayerProperties.generalVO.getPassiveEffectsText())).autoFitToBounds = true;
  };
  GeneralsOverviewDialogInfo.prototype.onGeneralsUpdated = function (__s14param0) {
    this.updateElements();
    this.updateLordEffects();
    this.updateAbilities();
    this.parent.onGeneralsUpdated();
  };
  GeneralsOverviewDialogInfo.prototype.onToggleLord = function () {
    this.updateLordPicker(true);
    this.updateLordEffects();
    this.updateAbilities();
  };
  GeneralsOverviewDialogInfo.prototype.updateLordPicker = function (__s18param0 = false) {
    var __s18local0 = this.isBaron ? __dep_export_CastleModel.CastleModel.lordData.barons : __dep_export_CastleModel.CastleModel.lordData.commanders;
    this._lordPicker.removeEventListener(__dep_export_BasicPickerEvent.BasicPickerEvent.PICKER_CHANGE_VALUE, this.bindFunction(this.onLordChanged));
    this._lordPicker.show(__s18local0, this.sublayerProperties.generalVO);
    this._lordPicker.addEventListener(__dep_export_BasicPickerEvent.BasicPickerEvent.PICKER_CHANGE_VALUE, this.bindFunction(this.onLordChanged));
    this.onLordChanged(__s18param0);
  };
  GeneralsOverviewDialogInfo.prototype.updateLordToggleButton = function () {
    var __s20local0 = this.sublayerProperties.generalVO.assignedLord;
    var __s20local1 = __s20local0 && __s20local0.isBaron;
    this._lordToggleButton.setValue(!__s20local1, false);
    this._lordToggleButton.enableComponent(!__s20local0 || __s20local0 && __s20local0.isAvailableForGeneralAssignement);
    this._lordToggleButton.disp.toolTipText = this._lordToggleButton.isEnabled ? null : {
      t: "dialog_generals_generalTravelling_tooltip",
      p: [this.sublayerProperties.generalVO.nameTextShort]
    };
    this._itxt_lord.textContentVO.textId = this.isBaron ? "equipment_itemType_baron" : "equipment_itemType_general";
    var __s20local2 = !__s20local0 || __s20local0.isAvailableForGeneralAssignement;
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.subLayerDisp.btn_skills, __s20local2);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.subLayerDisp.btn_abilities, __s20local2);
    this.subLayerDisp.btn_skills.toolTipText = __s20local2 ? null : "dialog_generals_skills_generalTravelling_tooltip";
    this.subLayerDisp.btn_abilities.toolTipText = __s20local2 ? null : "dialog_generals_abilities_generalTravelling_tooltip";
  };
  GeneralsOverviewDialogInfo.prototype.onLordChanged = function (__s22param0 = true) {
    if (this._lordPicker.selectedLord) {
      if (__s22param0) {
        __dep_export_CastleModel.CastleModel.lordData.assignGeneral(this._lordPicker.selectedLord, this.sublayerProperties.generalVO);
      }
      if (this._lordPicker.selectedLord.isBaron) {
        var __s22local0 = this._lordPicker.selectedLord;
        this._lordPicker.lordTooltipTrigger.setProperties(this._lordPicker.selectedLord, __dep_export_CastleModel.CastleModel.userData.castleList.getCastleVOByID(__s22local0.lockedInCastleID), null, __dep_export_LordEffectHelper.LordEffectHelper.STRATEGY_FULL_PASSIVE);
      } else {
        this._lordPicker.lordTooltipTrigger.setProperties(this._lordPicker.selectedLord, null, null, __dep_export_LordEffectHelper.LordEffectHelper.STRATEGY_FULL_PASSIVE);
      }
    } else {
      var __s22local1 = this.sublayerProperties.generalVO.assignedLord;
      if (__s22param0 && __s22local1) {
        __dep_export_CastleModel.CastleModel.lordData.assignGeneral(__s22local1, null);
      }
      this._lordPicker.lordTooltipTrigger.setProperties(null);
    }
  };
  GeneralsOverviewDialogInfo.prototype.updateLordEffects = function () {
    var __s30local0 = this._lordPicker.selectedLord ? this._lordPicker.selectedLord.getUniqueBoni(false, null, -1, null, true) : [];
    var __s30local1 = !!this._lordPicker.selectedLord && this._lordPicker.selectedLord.isBaron;
    __dep_export_GeneralsHelper.GeneralsHelper.showLordMainEffects(this.subLayerDisp, __s30local0, new __s0local0(40, 40), __s30local1);
  };
  GeneralsOverviewDialogInfo.prototype.updateAbilities = function () {
    __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this.subLayerDisp.mc_abilities);
    var __s32local0 = this.sublayerProperties.generalVO.getSelectedAbilities(!this.isBaron);
    for (var __s32local1 = 0; __s32local1 < 5 && (!this.isBaron || !(this.sublayerProperties.generalVO.defenseSlots.length <= __s32local1)) && (this.isBaron || !(this.sublayerProperties.generalVO.attackSlots.length <= __s32local1)); __s32local1++) {
      var __s32local2 = __dep_export_GeneralsHelper.GeneralsHelper.getGeneralAbilityClip(__s32local0[__s32local1] ? __s32local0[__s32local1].abilityGroupID : -1, 80, __s32local0[__s32local1] ? __s32local0[__s32local1].abilityID : -1, !this.isBaron);
      __s32local2.x = __s32local1 * 94;
      this.subLayerDisp.mc_abilities.addChild(__s32local2);
    }
  };
  Object.defineProperty(GeneralsOverviewDialogInfo.prototype, "isBaron", {
    get: function () {
      return !this._lordToggleButton.value;
    },
    enumerable: true,
    configurable: true
  });
  GeneralsOverviewDialogInfo.prototype.onClick = function (__s38param0) {
    __s1param0.prototype.onClick.call(this, __s38param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s38param0.target)) {
      switch (__s38param0.target) {
        case this.subLayerDisp.btn_starLevel:
        case this.subLayerDisp.btn_level:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_GeneralsLevelUPDialog.GeneralsLevelUPDialog, new __dep_export_GeneralsLevelUPDialogProperties.GeneralsLevelUPDialogProperties(this.sublayerProperties.generalVO.generalID));
          break;
        case this.subLayerDisp.btn_skills:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_GeneralsSkillTreeDialog.GeneralsSkillTreeDialog, new __dep_export_GeneralsSkillTreeDialogProperties.GeneralsSkillTreeDialogProperties(this.sublayerProperties.generalVO, !this.isBaron));
          break;
        case this.subLayerDisp.btn_abilities:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_GeneralsAbilityDialog.GeneralsAbilityDialog, new __dep_export_GeneralsAbilityDialogProperties.GeneralsAbilityDialogProperties(this.sublayerProperties.generalVO, !this.isBaron));
          break;
        case this.subLayerDisp.btn_info:
        case this.subLayerDisp.btn_info_selected:
          this.subLayerDisp.btn_info_selected.visible = this.subLayerDisp.mc_generalInfoTooltip.visible = !this.subLayerDisp.mc_generalInfoTooltip.visible;
      }
    }
  };
  Object.defineProperty(GeneralsOverviewDialogInfo.prototype, "sublayerProperties", {
    get: function () {
      return this._params;
    },
    enumerable: true,
    configurable: true
  });
  return GeneralsOverviewDialogInfo;
}(__dep_export_CastleDialogSubLayer.CastleDialogSubLayer);
exports.GeneralsOverviewDialogInfo = __s0local1;
