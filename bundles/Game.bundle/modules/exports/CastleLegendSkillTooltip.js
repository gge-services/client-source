Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CastleLegendSkillTooltip() {
    this._isMaxLevel = false;
    this._isActive = false;
  }
  Object.defineProperty(CastleLegendSkillTooltip, "legendSkillToolTip", {
    get: function () {
      if (__dep_exact_7e3e67aee786bc23.isUndefined(this._legendSkillToolTip)) {
        this._legendSkillToolTip = new Library.CastleInterfaceElements.CastleLegendSkill_ToolTip_R();
      }
      return this._legendSkillToolTip;
    },
    enumerable: true,
    configurable: true
  });
  CastleLegendSkillTooltip.prototype.initToolTip = function (__s8param0) {
    this._currentLegendSkillVO = __s8param0;
    this._itxt_name = CastleLegendSkillTooltip.textFieldManager.registerTextField(this.disp.txt_name, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s8param0.nameTextID));
    this._isActive = this.legendSkillData.isSkillActive(this._currentLegendSkillVO);
    this._isMaxLevel = this._isActive && this._currentLegendSkillVO.level == this.legendSkillData.getMaxSkillLevelInGroup(this._currentLegendSkillVO.skillTreeID, this._currentLegendSkillVO.tier, this._currentLegendSkillVO.skillGroupID);
    this.setSpecialText();
    this.setCurrentSkillText();
    this.setStateText();
    this.setNextSkillText();
    this.setSkillCostText();
    this.resizeToolTip();
  };
  CastleLegendSkillTooltip.prototype.setSpecialText = function () {
    if (this._currentLegendSkillVO.isSpecialSkill()) {
      this._itxt_special = CastleLegendSkillTooltip.textFieldManager.registerTextField(this.disp.txt_special, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_legendTemple_superSkill"));
      this._itxt_special.visible = true;
      this.disp.line1.visible = true;
    } else {
      this._itxt_special = CastleLegendSkillTooltip.textFieldManager.registerTextField(this.disp.txt_special, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
      this._itxt_special.visible = false;
      this.disp.line1.visible = false;
    }
  };
  CastleLegendSkillTooltip.prototype.setCurrentSkillText = function () {
    var __s14local0 = this._isMaxLevel ? __dep_export_ClientConstLegendSkills.ClientConstLegendSkills.COLORCODE_YELLOW : __dep_export_ClientConstLegendSkills.ClientConstLegendSkills.COLORCODE_LIGHTWHITE;
    this._itxt_currentLevel = CastleLegendSkillTooltip.textFieldManager.registerTextField(this.disp.txt_currentSkill, this.composeSkillTextVO(this._currentLegendSkillVO, __s14local0));
  };
  CastleLegendSkillTooltip.prototype.setStateText = function () {
    if (!this._isMaxLevel && this._isActive) {
      this._itxt_skillState = CastleLegendSkillTooltip.textFieldManager.registerTextField(this.disp.txt_skillState, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_legendTemple_nextLevel"));
      this._itxt_skillState.color = __dep_export_ClientConstLegendSkills.ClientConstLegendSkills.getHexColorValue(__dep_export_ClientConstLegendSkills.ClientConstLegendSkills.COLORCODE_LIGHTWHITE);
      this._itxt_skillState.visible = true;
    } else {
      this._itxt_skillState = CastleLegendSkillTooltip.textFieldManager.registerTextField(this.disp.txt_skillState, new __dep_exact_92d05af59ee2ff30_2.TextVO(""));
      this._itxt_skillState.visible = false;
    }
  };
  CastleLegendSkillTooltip.prototype.setNextSkillText = function () {
    if (!this._isMaxLevel && this._isActive) {
      var __s20local0 = this.composeSkillTextVO(this.legendSkillData.getNextLevel(this._currentLegendSkillVO), __dep_export_ClientConstLegendSkills.ClientConstLegendSkills.COLORCODE_GREEN);
      this._itxt_nextLevel = CastleLegendSkillTooltip.textFieldManager.registerTextField(this.disp.txt_nextSkill, __s20local0);
      this._itxt_nextLevel.visible = true;
    } else {
      this._itxt_nextLevel = CastleLegendSkillTooltip.textFieldManager.registerTextField(this.disp.txt_nextSkill, new __dep_exact_92d05af59ee2ff30_2.TextVO(""));
      this._itxt_nextLevel.visible = false;
    }
  };
  CastleLegendSkillTooltip.prototype.setSkillCostText = function () {
    this._itxt_skillCostHeader = CastleLegendSkillTooltip.textFieldManager.registerTextField(this.disp.txt_skillCostHeader, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("requirementsColon"));
    if (this.legendSkillData.isTierUnlocked(this._currentLegendSkillVO.skillTreeID, this._currentLegendSkillVO.tier)) {
      if (this._isMaxLevel || this._currentLegendSkillVO.isSpecialSkill()) {
        this._itxt_skillCost = CastleLegendSkillTooltip.textFieldManager.registerTextField(this.disp.txt_skillCost, new __dep_exact_92d05af59ee2ff30_2.TextVO(""));
        this._itxt_skillCost.visible = false;
        this._itxt_skillCostHeader.visible = false;
      } else if (this.legendSkillData.isSceatSkillInProgress(this._currentLegendSkillVO)) {
        this._itxt_skillCost = CastleLegendSkillTooltip.textFieldManager.registerTextField(this.disp.txt_skillCost, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_legendTemple_upgrading"));
        this._itxt_skillCost.color = __dep_export_ClientConstLegendSkills.ClientConstLegendSkills.getHexColorValue(__dep_export_ClientConstLegendSkills.ClientConstLegendSkills.COLORCODE_YELLOW);
        this._itxt_skillCost.visible = true;
        this._itxt_skillCostHeader.visible = false;
      } else {
        var __s24local0 = undefined;
        var __s24local1 = this._isActive ? this.legendSkillData.getNextLevel(this._currentLegendSkillVO) : this._currentLegendSkillVO;
        __s24local0 = __dep_exact_92d05af59ee2ff30.Localize.text(__s24local1.costTextID, [__s24local1.cost]);
        var __s24local2 = __s24local1.isUnlocked();
        if (!__s24local2) {
          __s24local0 += "\n" + __s24local1.getUnlockText();
        }
        this._itxt_skillCost = CastleLegendSkillTooltip.textFieldManager.registerTextField(this.disp.txt_skillCost, new __dep_exact_92d05af59ee2ff30_2.TextVO(__s24local0));
        this._itxt_skillCost.color = this.legendSkillData.canAffordNextLevel(__s24local1) && __s24local2 ? __dep_export_ClientConstLegendSkills.ClientConstLegendSkills.getHexColorValue(__dep_export_ClientConstLegendSkills.ClientConstLegendSkills.COLORCODE_LIGHTWHITE) : __dep_export_ClientConstLegendSkills.ClientConstLegendSkills.getHexColorValue(__dep_export_ClientConstLegendSkills.ClientConstLegendSkills.COLORCODE_RED);
        this._itxt_skillCost.visible = true;
        this._itxt_skillCostHeader.visible = true;
      }
    } else {
      var __s24local3 = this.legendSkillData.getNodeUnlockText(this._currentLegendSkillVO.skillTreeID, this._currentLegendSkillVO.tier);
      this._itxt_skillCost = CastleLegendSkillTooltip.textFieldManager.registerTextField(this.disp.txt_skillCost, new __dep_exact_92d05af59ee2ff30_2.TextVO(__s24local3));
      this._itxt_skillCost.color = __dep_export_ClientConstLegendSkills.ClientConstLegendSkills.getHexColorValue(__dep_export_ClientConstLegendSkills.ClientConstLegendSkills.COLORCODE_RED);
      this._itxt_skillCost.visible = true;
      this._itxt_skillCostHeader.visible = true;
    }
  };
  CastleLegendSkillTooltip.prototype.composeSkillTextVO = function (__s32param0, __s32param1) {
    var __s32local0 = __dep_exact_81dacdf05bd32292.instanceOfClass(__s32param0, "CastleSceatSkillVO") ? __s32param0.getUnlockLevel() : -1;
    return __s32param0.composeSkillTextVO(__s32param1, __s32local0);
  };
  CastleLegendSkillTooltip.prototype.resizeToolTip = function () {
    var __s34local0 = this.placeTextField(this._itxt_skillCost, null, 10);
    __s34local0 = this.placeTextField(this._itxt_skillCostHeader, __s34local0, 10);
    __s34local0 = this.placeTextField(this._itxt_nextLevel, __s34local0, 10);
    __s34local0 = this.placeTextField(this._itxt_skillState, __s34local0, 10);
    __s34local0 = this.placeTextField(this._itxt_currentLevel, __s34local0, 10);
    __s34local0 = this.placeLine(this.disp.line1, __s34local0, 5);
    __s34local0 = this.placeTextField(this._itxt_special, __s34local0, 5);
    __s34local0 = this.placeLine(this.disp.line0, __s34local0, this._itxt_special.visible ? 0 : 5);
    __s34local0 = this.placeTextField(this._itxt_name, __s34local0, 5);
    this.disp.bg.height = Math.abs(__s34local0.y) + 5;
    this.disp.bg.x = -4;
  };
  CastleLegendSkillTooltip.prototype.placeTextField = function (__s36param0, __s36param1, __s36param2) {
    if (__s36param0.visible) {
      __s36param0.y = (__s36param1 && __s36param1.visible ? __s36param1.y : 0) - __s36param0.textHeight - __s36param2;
      return __s36param0;
    } else {
      return __s36param1;
    }
  };
  CastleLegendSkillTooltip.prototype.placeLine = function (__s40param0, __s40param1, __s40param2) {
    if (__s40param0.visible) {
      __s40param0.y = __s40param1.y - __s40param0.height - __s40param2;
      return __s40param0;
    } else {
      return __s40param1;
    }
  };
  Object.defineProperty(CastleLegendSkillTooltip, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillTooltip.prototype, "legendSkillData", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.legendSkillData;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillTooltip.prototype, "disp", {
    get: function () {
      return CastleLegendSkillTooltip.legendSkillToolTip;
    },
    enumerable: true,
    configurable: true
  });
  return CastleLegendSkillTooltip;
}();
exports.CastleLegendSkillTooltip = __s0local0;
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_7e3e67aee786bc23 = require("gge-module:exact_7e3e67aee786bc23");
var __dep_export_ClientConstLegendSkills = require("gge-module:export_ClientConstLegendSkills");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
