Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function GeneralSkillTooltip() {
    this._isMaxLevel = false;
    this._isActive = false;
  }
  Object.defineProperty(GeneralSkillTooltip, "generalSkillToolTip", {
    get: function () {
      if (__dep_exact_7e3e67aee786bc23.isUndefined(this._generalSkillToolTip)) {
        this._generalSkillToolTip = new Library.CastleInterfaceElements.GeneralSkill_ToolTip2();
      }
      return this._generalSkillToolTip;
    },
    enumerable: true,
    configurable: true
  });
  GeneralSkillTooltip.prototype.initToolTip = function (__s8param0, __s8param1) {
    this._highlightAttack = __s8param1;
    this._generalVO = this.generalsData.playerGenerals.get(__s8param0.generalID);
    this._assignedLord = this._generalVO.assignedLord;
    this._currentGeneralSkillVO = __s8param0;
    this._itxt_name = GeneralSkillTooltip.textFieldManager.registerTextField(this.disp.txt_name, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s8param0.nameString));
    this._itxt_type = GeneralSkillTooltip.textFieldManager.registerTextField(this.disp.txt_type, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s8param0.typeString, [__s8param0.slotNumber]));
    this._isActive = this._generalVO.isSkillActive(this._currentGeneralSkillVO.id);
    this._isMaxLevel = this._isActive && this._currentGeneralSkillVO.isMaxLevel;
    this._isAbilitySkill = this._currentGeneralSkillVO.isAbilitySkill;
    this.setCurrentSkillText();
    this.setNextSkillText();
    this.setSkillCostText();
    this.resizeToolTip();
  };
  GeneralSkillTooltip.prototype.setCurrentSkillText = function () {
    this._itxt_current_attackHeader = GeneralSkillTooltip.textFieldManager.registerTextField(this.disp.txt_current_attackHeader, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("Attack"));
    this._itxt_current_attackHeader.color = this.getAbilityColor(true);
    this._itxt_current_attackHeader.visible = this._isAbilitySkill;
    this.disp.mc_commander.visible = this._isAbilitySkill;
    this._itxt_current_attack = GeneralSkillTooltip.textFieldManager.registerTextField(this.disp.txt_current_attack, new __dep_exact_92d05af59ee2ff30_2.TextVO(this.getEffectText(this._currentGeneralSkillVO, true, false)));
    this._itxt_current_attack.color = this.getAbilityColor(true);
    this._itxt_current_attack.visible = true;
    this._itxt_current_defenseHeader = GeneralSkillTooltip.textFieldManager.registerTextField(this.disp.txt_current_defenseHeader, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("Defense"));
    this._itxt_current_defenseHeader.color = this.getAbilityColor(false);
    this._itxt_current_defenseHeader.visible = this._isAbilitySkill;
    this.disp.mc_baron.visible = this._isAbilitySkill;
    this._itxt_current_defense = GeneralSkillTooltip.textFieldManager.registerTextField(this.disp.txt_current_defense, new __dep_exact_92d05af59ee2ff30_2.TextVO(this.getEffectText(this._currentGeneralSkillVO, false, false)));
    this._itxt_current_defense.color = this.getAbilityColor(false);
    this._itxt_current_defense.visible = this._isAbilitySkill;
  };
  GeneralSkillTooltip.prototype.setNextSkillText = function () {
    if (!this._isMaxLevel && this._isActive) {
      var __s12local0 = this._currentGeneralSkillVO.nextLevelSkill;
      this._itxt_next_attackHeader = GeneralSkillTooltip.textFieldManager.registerTextField(this.disp.txt_next_attackHeader, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_generals_skillTree_nextLevel_header_tooltip"));
      this._itxt_next_attackHeader.color = this.getAbilityColor(true);
      this._itxt_next_attackHeader.visible = true;
      this._itxt_next_attack = GeneralSkillTooltip.textFieldManager.registerTextField(this.disp.txt_next_attack, new __dep_exact_92d05af59ee2ff30_2.TextVO(this.getEffectText(__s12local0, true, true)));
      this._itxt_next_attack.visible = true;
      this.disp.line2.visible = this._currentGeneralSkillVO.isAbilitySkill;
      this._itxt_next_defenseHeader = GeneralSkillTooltip.textFieldManager.registerTextField(this.disp.txt_next_defenseHeader, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_generals_skillTree_nextLevel_header_tooltip"));
      this._itxt_next_defenseHeader.color = this.getAbilityColor(false);
      this._itxt_next_defenseHeader.visible = this._isAbilitySkill;
      this._itxt_next_defense = GeneralSkillTooltip.textFieldManager.registerTextField(this.disp.txt_next_defense, new __dep_exact_92d05af59ee2ff30_2.TextVO(this.getEffectText(__s12local0, false, true)));
      this._itxt_next_defense.visible = this._isAbilitySkill;
    } else {
      this._itxt_next_attackHeader = GeneralSkillTooltip.textFieldManager.registerTextField(this.disp.txt_next_attackHeader, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_generals_skillTree_nextLevel_header_tooltip"));
      this._itxt_next_attackHeader.visible = false;
      this._itxt_next_attack = GeneralSkillTooltip.textFieldManager.registerTextField(this.disp.txt_next_attack, new __dep_exact_92d05af59ee2ff30_2.TextVO(""));
      this._itxt_next_attack.visible = false;
      this.disp.line2.visible = this._currentGeneralSkillVO.isAbilitySkill;
      this._itxt_next_defenseHeader = GeneralSkillTooltip.textFieldManager.registerTextField(this.disp.txt_next_defenseHeader, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_generals_skillTree_nextLevel_header_tooltip"));
      this._itxt_next_defenseHeader.visible = false;
      this._itxt_next_defense = GeneralSkillTooltip.textFieldManager.registerTextField(this.disp.txt_next_defense, new __dep_exact_92d05af59ee2ff30_2.TextVO(""));
      this._itxt_next_defense.visible = false;
    }
  };
  GeneralSkillTooltip.prototype.setSkillCostText = function () {
    var __s16local0 = this.generalsData.getSkillTreeNode(this._currentGeneralSkillVO.generalID, this._currentGeneralSkillVO.tier);
    this._itxt_skillCostHeader = GeneralSkillTooltip.textFieldManager.registerTextField(this.disp.txt_skillCostHeader, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("requirementsColon"));
    this._itxt_skillCost = GeneralSkillTooltip.textFieldManager.registerTextField(this.disp.txt_skillCost, new __dep_exact_92d05af59ee2ff30_2.TextVO(""));
    if (__s16local0.isUnlocked()) {
      if (this._isMaxLevel) {
        this._itxt_skillCost.visible = false;
        this._itxt_skillCostHeader.visible = false;
        this.disp.line3.visible = false;
      } else {
        var __s16local1;
        var __s16local2 = this._isActive ? this._currentGeneralSkillVO.nextLevelSkill : this._currentGeneralSkillVO;
        __s16local1 = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_legendTemple_skillCost", [__s16local2.costSkillPoints]);
        this._itxt_skillCost.textContentVO.stringValue = __s16local1;
        var __s16local3 = this._generalVO.getSkillPointsAvailable();
        this._itxt_skillCost.color = __s16local3 >= __s16local2.costSkillPoints ? __dep_export_ClientConstLegendSkills.ClientConstLegendSkills.getHexColorValue(__dep_export_ClientConstLegendSkills.ClientConstLegendSkills.COLORCODE_LIGHTWHITE) : __dep_export_ClientConstLegendSkills.ClientConstLegendSkills.getHexColorValue(__dep_export_ClientConstLegendSkills.ClientConstLegendSkills.COLORCODE_RED);
        this._itxt_skillCost.visible = true;
        this._itxt_skillCostHeader.visible = true;
        this.disp.line3.visible = true;
      }
    } else {
      var __s16local4 = __s16local0.getUnlockText();
      this._itxt_skillCost.textContentVO.stringValue = __s16local4;
      this._itxt_skillCost.color = __dep_export_ClientConstLegendSkills.ClientConstLegendSkills.getHexColorValue(__dep_export_ClientConstLegendSkills.ClientConstLegendSkills.COLORCODE_RED);
      this._itxt_skillCost.visible = true;
      this._itxt_skillCostHeader.visible = true;
      this.disp.line3.visible = true;
    }
  };
  GeneralSkillTooltip.prototype.resizeToolTip = function () {
    var __s22local0 = this.placeTextField(this._itxt_skillCost, null, 10);
    __s22local0 = this.placeTextField(this._itxt_skillCostHeader, __s22local0, 5);
    __s22local0 = this.placeLine(this.disp.line3, __s22local0, 5);
    __s22local0 = this.placeTextField(this._itxt_next_defense, __s22local0, 5);
    __s22local0 = this.placeTextField(this._itxt_next_defenseHeader, __s22local0, -3);
    __s22local0 = this.placeTextField(this._itxt_current_defense, __s22local0, 5);
    this.placeLine(this.disp.mc_baron, __s22local0, -5);
    __s22local0 = this.placeTextField(this._itxt_current_defenseHeader, __s22local0, 5);
    __s22local0 = this.placeLine(this.disp.line2, __s22local0, 5);
    __s22local0 = this.placeTextField(this._itxt_next_attack, __s22local0, 5);
    __s22local0 = this.placeTextField(this._itxt_next_attackHeader, __s22local0, -3);
    __s22local0 = this.placeTextField(this._itxt_current_attack, __s22local0, 5);
    this.placeLine(this.disp.mc_commander, __s22local0, -5);
    __s22local0 = this.placeTextField(this._itxt_current_attackHeader, __s22local0, 5);
    __s22local0 = this.placeLine(this.disp.line1, __s22local0, 5);
    __s22local0 = this.placeTextField(this._itxt_type, __s22local0, 5);
    __s22local0 = this.placeLine(this.disp.line0, __s22local0, 5);
    __s22local0 = this.placeTextField(this._itxt_name, __s22local0, 5);
    this.disp.bg.height = Math.abs(__s22local0.y) + 5;
    this.disp.bg.x = -3;
    if (this._isAbilitySkill) {
      if (this._highlightAttack) {
        this.blackSquare(this.disp.line2.y + this.disp.line2.height, this._isMaxLevel ? -5 : this.disp.line3.y);
      } else {
        this.blackSquare(this.disp.line1.y + this.disp.line1.height, this.disp.line2.y);
      }
    } else {
      this.disp.mc_black.visible = false;
      this.disp.mc_black.height = 0;
      this.disp.mc_black.y = 0;
    }
  };
  GeneralSkillTooltip.prototype.blackSquare = function (__s28param0, __s28param1) {
    this.disp.mc_black.visible = true;
    this.disp.mc_black.height = __s28param1 - __s28param0;
    this.disp.mc_black.y = __s28param0;
    this.disp.mc_black.x = -116;
  };
  GeneralSkillTooltip.prototype.placeTextField = function (__s30param0, __s30param1, __s30param2 = 0) {
    if (__s30param0.visible) {
      __s30param0.y = (__s30param1 && __s30param1.visible ? __s30param1.y : 0) - __s30param0.textHeight - __s30param2;
      return __s30param0;
    } else {
      return __s30param1;
    }
  };
  GeneralSkillTooltip.prototype.placeLine = function (__s34param0, __s34param1, __s34param2 = 0) {
    if (__s34param0.visible) {
      __s34param0.y = (__s34param1 && __s34param1.visible ? __s34param1.y : 0) - __s34param0.height - __s34param2;
      return __s34param0;
    } else {
      return __s34param1;
    }
  };
  GeneralSkillTooltip.prototype.getAbilityColor = function (__s38param0) {
    if (this._assignedLord && this._isAbilitySkill) {
      if (__s38param0) {
        if (this._assignedLord.isBaron) {
          return GeneralSkillTooltip.SKILLCOLOR_NOT_ACTIVE;
        } else {
          return GeneralSkillTooltip.SKILLCOLOR_ACTIVE;
        }
      } else if (this._assignedLord.isBaron) {
        return GeneralSkillTooltip.SKILLCOLOR_ACTIVE;
      } else {
        return GeneralSkillTooltip.SKILLCOLOR_NOT_ACTIVE;
      }
    } else {
      return GeneralSkillTooltip.SKILLCOLOR_ACTIVE;
    }
  };
  GeneralSkillTooltip.prototype.getEffectText = function (__s47param0, __s47param1, __s47param2) {
    if (this._isAbilitySkill) {
      var __s47local0 = __s47param0.getEffectValueByType(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_UNLOCK_ABILITY).rawValues[0];
      return __dep_export_GeneralsHelper.GeneralsHelper.getLocalizedCopyForAbility(__s47local0, __s47param1, __s47param2 ? __dep_export_GeneralsHelper.GeneralsHelper.ABILITY_TEXT_SHORT_LEVELING : __dep_export_GeneralsHelper.GeneralsHelper.ABILITY_TEXT_DEFAULT);
    }
    return __s47param0.getEffectText();
  };
  Object.defineProperty(GeneralSkillTooltip, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralSkillTooltip.prototype, "generalsData", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.generalsData;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralSkillTooltip.prototype, "disp", {
    get: function () {
      return GeneralSkillTooltip.generalSkillToolTip;
    },
    enumerable: true,
    configurable: true
  });
  GeneralSkillTooltip.SKILLCOLOR_ACTIVE = 13421772;
  GeneralSkillTooltip.SKILLCOLOR_NOT_ACTIVE = 8750469;
  return GeneralSkillTooltip;
}();
exports.GeneralSkillTooltip = __s0local0;
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_7e3e67aee786bc23 = require("gge-module:exact_7e3e67aee786bc23");
var __dep_export_ClientConstLegendSkills = require("gge-module:export_ClientConstLegendSkills");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __dep_export_GeneralsHelper = require("gge-module:export_GeneralsHelper");
