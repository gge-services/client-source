Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleFightItemVO = require("gge-module:export_CastleFightItemVO");
var __dep_export_ToolEffectType = require("gge-module:export_ToolEffectType");
var __dep_export_ToolUnitVO = require("gge-module:export_ToolUnitVO");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_LordEffectHelper = require("gge-module:export_LordEffectHelper");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_WodPicHelper = require("gge-module:export_WodPicHelper");
var __dep_export_AttackDialogController = require("gge-module:export_AttackDialogController");
var __dep_export_AttackDialogDragTarget = require("gge-module:export_AttackDialogDragTarget");
var __s0local0 = createjs.Point;
var __s0local1 = createjs.Event;
var __s0local2 = function () {
  function AttackDialogWaveInfoHelper() {}
  AttackDialogWaveInfoHelper.showSupportWave = function (__s5param0, __s5param1) {
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s5param0.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("supportTools"), new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s5param0.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_attack_rework2022_supportTools_allWaves_desc"), new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s5param0.txt_amount, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("numbersXY", [__s5param1.sumOfItems, 3]), new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s5param0.txt_tools, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_battleLogDetails_vsDialog_tools"), new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
    this.fillToolEffects("support", __s5param1, __s5param0);
  };
  AttackDialogWaveInfoHelper.showFinalWave = function (__s7param0, __s7param1) {
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s7param0.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("finalWave"), new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s7param0.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_battleLogDetail_finalWave"), new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s7param0.txt_amount, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("numbersXY", [__s7param1.sumOfItems, __s7param1.maxItems]), new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true)).autoFitToBounds = true;
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s7param0.txt_units, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_battleLogDetails_vsDialog_units"), new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
    this.fillStrength(__s7param0.mc_melee, true, __s7param1, true);
    this.fillStrength(__s7param0.mc_range, false, __s7param1, true);
  };
  AttackDialogWaveInfoHelper.showNormalWave = function (__s9param0, __s9param1, __s9param2) {
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s9param0.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_attack_rework2022_numberedWave_tooltip", [__s9param2]), new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s9param0.txt_title_left, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_defence_leftFlank"), new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s9param0.txt_title_middle, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_defence_middleFlank"), new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s9param0.txt_title_right, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_defence_rightFlank"), new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s9param0.txt_left_amount_units, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("numbersXY", [__s9param1.itemsLeftWall_units.sumOfItems, __s9param1.itemsLeftWall_units.maxItems]), new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s9param0.txt_left_amount_tools, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("numbersXY", [__s9param1.itemsLeftWall_tools.sumOfItems, __s9param1.itemsLeftWall_tools.maxItems]), new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s9param0.txt_right_amount_units, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("numbersXY", [__s9param1.itemsRightWall_units.sumOfItems, __s9param1.itemsRightWall_units.maxItems]), new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s9param0.txt_right_amount_tools, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("numbersXY", [__s9param1.itemsRightWall_tools.sumOfItems, __s9param1.itemsRightWall_tools.maxItems]), new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s9param0.txt_middle_amount_units, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("numbersXY", [__s9param1.itemsMiddleWall_units.sumOfItems, __s9param1.itemsMiddleWall_units.maxItems]), new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s9param0.txt_middle_amount_tools, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("numbersXY", [__s9param1.itemsMiddleWall_tools.sumOfItems, __s9param1.itemsMiddleWall_tools.maxItems]), new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s9param0.txt_left_tools, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_battleLogDetails_vsDialog_tools"), new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s9param0.txt_middle_tools, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_battleLogDetails_vsDialog_tools"), new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s9param0.txt_right_tools, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_battleLogDetails_vsDialog_tools"), new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s9param0.txt_left_units, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_battleLogDetails_vsDialog_units"), new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s9param0.txt_middle_units, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_battleLogDetails_vsDialog_units"), new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s9param0.txt_right_units, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_battleLogDetails_vsDialog_units"), new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
    this.fillToolEffects("left", __s9param1.itemsLeftWall_tools, __s9param0);
    this.fillToolEffects("middle", __s9param1.itemsMiddleWall_tools, __s9param0);
    this.fillToolEffects("right", __s9param1.itemsRightWall_tools, __s9param0);
    this.fillStrength(__s9param0.mc_left_unit_strength_0, true, __s9param1.itemsLeftWall_units, false, true);
    this.fillStrength(__s9param0.mc_left_unit_strength_1, false, __s9param1.itemsLeftWall_units, false, true);
    this.fillStrength(__s9param0.mc_right_unit_strength_0, true, __s9param1.itemsRightWall_units, false, true);
    this.fillStrength(__s9param0.mc_right_unit_strength_1, false, __s9param1.itemsRightWall_units, false, true);
    this.fillStrength(__s9param0.mc_middle_unit_strength_0, true, __s9param1.itemsMiddleWall_units, false, false, true);
    this.fillStrength(__s9param0.mc_middle_unit_strength_1, false, __s9param1.itemsMiddleWall_units, false, false, true);
  };
  AttackDialogWaveInfoHelper.fillStrength = function (__s11param0, __s11param1, __s11param2, __s11param3 = false, __s11param4 = false, __s11param5 = false) {
    __s11param0.mc_melee.visible = __s11param1;
    __s11param0.mc_range.visible = !__s11param1;
    var __s11local0;
    var __s11local1 = __dep_export_LordEffectHelper.LordEffectHelper.getFilterStrategyAttackOrDefence(this.controller.attackVO.targetArea.ownerInfo.playerID, true);
    __s11local0 = __s11param1 ? __s11param2.getAttackMeleeValue(this.controller.selectedLord, this.controller.attackVO.targetArea, __s11param3, __s11param4, __s11param5, __s11local1) : __s11param2.getAttackRangeValue(this.controller.selectedLord, this.controller.attackVO.targetArea, __s11param3, __s11param4, __s11param5, __s11local1);
    __s11param0.toolTipText = __s11param1 ? "attackpower_melee" : "attackpower_range";
    __s11param0.mouseChildren = false;
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s11param0.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__s11local0), new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
  };
  AttackDialogWaveInfoHelper.fillToolEffects = function (__s13param0, __s13param1, __s13param2) {
    var __s13local0;
    var __s13local1 = new Map();
    var __s13local2 = new Map();
    var __s13local3 = new Map();
    for (var __s13local4 = 0; __s13local4 < __s13param1.items.length; __s13local4++) {
      var __s13local5 = __s13param1.items[__s13local4].unitVO;
      if (__s13local5) {
        for (var __s13local6 = 0; __s13local6 < __s13local5.effectTypes.length; __s13local6++) {
          var __s13local7 = __s13local5.effectTypes[__s13local6];
          var __s13local8 = __s13local5.getDisplayedBonusByEffect(__s13local5.effectTypes[__s13local6], __s13param1.getAmountOfToolInContainer(__s13local5));
          var __s13local9 = __s13local5.isPositiveEffect(__s13local5.effectTypes[__s13local6]);
          var __s13local10 = null;
          if (__s13local7 === __dep_export_ToolEffectType.ToolEffectType.GENERIC_EFFECT) {
            var __s13local11 = __s13local5.effectTypes.length - __s13local5.effects.length;
            if (!(__s13local10 = __s13local5.effects[__s13local6 - __s13local11])) {
              continue;
            }
            var __s13local12 = __s13local10.effect.effectTypeID;
            if (__s13local2.has(__s13local12)) {
              __s13local7 = __s13local2.get(__s13local12);
            } else {
              __s13local7 = new __dep_export_ToolEffectType.ToolEffectType(0, "equip_" + __s13local10.effect.defaultTextID, __s13local10.effect.effectType.type.simpleEffectIconClass);
              __s13local2.set(__s13local12, __s13local7);
            }
            __s13local8 = __s13local10.strength * __s13param1.getAmountOfToolInContainer(__s13local5);
            __s13local9 = !__s13local10.effect.effectType.type.isMalusType;
          } else {
            var __s13local13 = (__s13local10 = __s13local5.effects.find(function (__s25param0) {
              return __s25param0.effect.effectType.type.mappedToolEffectType == __s13local7;
            })) && __s13local10.effectValue ? __s13local10.effectValue.allTextReplacements : null;
            if (__s13local13 && __s13local13.length > 0) {
              var __s13local14 = __s13local10.descriptionTextLines;
              var __s13local15 = __s13param1.getAmountOfToolInContainer(__s13local5);
              for (var __s13local16 = 0; __s13local16 < __s13local13.length; __s13local16++) {
                var __s13local17 = __s13local13[__s13local16];
                var __s13local18 = __s13local10.effect.effectType.id + "_" + __s13local17.slice(1).join("_");
                var __s13local19 = undefined;
                if (__s13local3.has(__s13local18)) {
                  __s13local19 = __s13local3.get(__s13local18);
                } else {
                  __s13local19 = new __dep_export_ToolEffectType.ToolEffectType(__s13local7.sortOrder, __s13local7.tooltipTextId, __s13local7.iconClass, __s13local7.hasAbsoluteBonus);
                  __s13local3.set(__s13local18, __s13local19);
                }
                var __s13local20;
                var __s13local21 = __s13local17[0] * __s13local15;
                if (__s13local1.has(__s13local19)) {
                  (__s13local20 = __s13local1.get(__s13local19))[0] = __s13local9 ? __s13local20[0] + __s13local21 : __s13local20[0] - __s13local21;
                } else {
                  __s13local1.set(__s13local19, [__s13local9 ? __s13local21 : -__s13local21, null, __s13local14[__s13local16]]);
                }
              }
              continue;
            }
          }
          if (__s13local1.has(__s13local7)) {
            (__s13local20 = __s13local1.get(__s13local7))[0] = __s13local9 ? __s13local20[0] + __s13local8 : __s13local20[0] - __s13local8;
            __s13local20[1] ||= __s13local10;
          } else {
            __s13local1.set(__s13local7, [__s13local9 ? __s13local8 : -__s13local8, __s13local10]);
          }
        }
      }
    }
    var __s13local22 = Array.from(__s13local1.entries());
    for (var __s13local23 = 0; __s13local23 < 6; __s13local23++) {
      __s13local0 = __s13param2["mc_" + __s13param0 + "_tool_effect_" + __s13local23];
      if (__s13local23 < __s13local22.length) {
        __s13local0.visible = true;
        this.addSummedEffectIconAndText(__s13local22[__s13local23][0], __s13local0, __s13local22[__s13local23][1][0], __s13local22[__s13local23][1][1], __s13local22[__s13local23][1][2]);
      } else if (__s13local0) {
        __s13local0.visible = false;
      }
    }
  };
  AttackDialogWaveInfoHelper.addSummedEffectIconAndText = function (__s40param0, __s40param1, __s40param2, __s40param3, __s40param4 = null) {
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(__s40param1.mc_icon);
    __dep_export_WodPicHelper.WodPicHelper.addIcon(__s40param0.iconClass, __s40param1.mc_icon, 18, 18);
    var __s40local0 = __s40param2 >= 0 ? __dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE_ADD : __dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT;
    var __s40local1 = __s40param2 >= 0 ? __dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_NOMINAL_ADD : __dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_NOMINAL_SUBTRACT;
    if (__s40param0.hasAbsoluteBonus) {
      __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s40param1.txt_value, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s40local1, [Math.abs(__s40param2)]), new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
    } else {
      __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s40param1.txt_value, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s40local0, [Math.abs(__s40param2)], true), new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
    }
    __s40param1.mouseChildren = false;
    if (__s40param4 != null) {
      __s40param1.toolTipText = __s40param4;
    } else if (__s40param3 && __s40param3.effect) {
      __s40param1.toolTipText = __s40param3.descriptionText;
    } else {
      __s40param1.toolTipText = {
        t: __s40param0.tooltipTextId,
        p: [Math.abs(__s40param2)]
      };
    }
  };
  AttackDialogWaveInfoHelper.fillUnitMC = function (__s47param0, __s47param1, __s47param2) {
    if (!__dep_export_ButtonHelper.ButtonHelper.getBasicButton(__s47param1)) {
      __dep_export_ButtonHelper.ButtonHelper.initButton(__s47param1, 1, __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    }
    __s47param1.unitVO = null;
    __s47param1.mouseEnabled = false;
    __s47param1.mc_unit.mc_selected.visible = false;
    __s47param1.mc_unit.mc_error_bg.visible = false;
    __s47param1.mc_selected_unit_add.visible = false;
    __s47param1.mc_unit_add.visible = false;
    __s47param1.mc_selected_tool_add.visible = false;
    __s47param1.mc_tool_add.visible = false;
    __s47param1.mc_selected.visible = false;
    __s47param1.mc_empty.visible = false;
    __s47param1.mc_empty_locked.visible = false;
    __s47param1.mc_empty_locked_selected.visible = false;
    __s47param1.mc_error.visible = false;
    if (!__s47param0 || !__s47param0.isUnlocked()) {
      __s47param1.mc_unit.visible = false;
      __s47param1.mc_empty_locked.visible = !__s47param2;
      __s47param1.mc_empty_locked_selected.visible = __s47param2;
      return;
    }
    var __s47local0 = __s47param0.unitVO;
    var __s47local1 = !__s47local0;
    __s47param1.mc_unit.visible = true;
    __s47param1.unitVO = __s47local0;
    __s47param1.mouseChildren = false;
    __s47param1.mouseEnabled = true;
    if (__s47local1) {
      __s47param1.mc_unit.visible = false;
      __s47param1.mc_selected_unit_add.visible = __s47param2 && __s47param0.slotType == __dep_export_ToolUnitVO.ToolUnitVO.SLOTTYPE_SOLDIER;
      __s47param1.mc_unit_add.visible = !__s47param2 && __s47param0.slotType == __dep_export_ToolUnitVO.ToolUnitVO.SLOTTYPE_SOLDIER;
      __s47param1.mc_unit.mc_error_bg.visible = __s47param0.outline != __dep_export_CastleFightItemVO.CastleFightItemVO.OUTLINE_NONE;
      __s47param1.mc_selected_tool_add.visible = __s47param2 && __s47param0.slotType != __dep_export_ToolUnitVO.ToolUnitVO.SLOTTYPE_SOLDIER;
      __s47param1.mc_tool_add.visible = !__s47param2 && __s47param0.slotType != __dep_export_ToolUnitVO.ToolUnitVO.SLOTTYPE_SOLDIER;
      __s47param1.mc_selected.visible = __s47param2;
      __s47param1.mc_empty.visible = !__s47param2;
      __s47param1.mouseEnabled = false;
      return;
    }
    __s47param1.mouseEnabled = true;
    __s47param1.mc_unit.mc_error_bg.visible = __s47param0.outline != __dep_export_CastleFightItemVO.CastleFightItemVO.OUTLINE_NONE;
    __s47param1.mc_unit.mc_selected.visible = __s47param2;
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s47param1.mc_unit.txt_amount, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__s47param0.getAmount()), new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
    __dep_export_WodPicHelper.WodPicHelper.addPlayerUnitPicToContainer(__s47local0, __s47param1.mc_unit, 36, 36, 36, 36, 15, new __s0local0(-20, 20), true, null, __s47param1.mc_unit.mc_unitLevel);
    __s47param1.toolTipText = __s47local0.getNameString();
  };
  Object.defineProperty(AttackDialogWaveInfoHelper, "controller", {
    get: function () {
      return __dep_export_AttackDialogController.AttackDialogController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  AttackDialogWaveInfoHelper.fillUnitContainer = function (__s54param0, __s54param1, __s54param2, __s54param3, __s54param4 = false, __s54param5 = -1) {
    var __s54local0;
    var __s54local1 = __s54param1["item" + __s54param0];
    var __s54local2 = this.getSelectedSlot() == __s54param2;
    var __s54local3 = __s54param2.items[__s54param0];
    var __s54local4 = !!__s54local3.unitVO;
    var __s54local5 = !__s54local3.unitVO;
    var __s54local6 = __s54local3.unitVO;
    __dep_export_ButtonHelper.ButtonHelper.initButton(__s54local1, 1, __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    __s54local1.mouseChildren = false;
    __s54local1.gotoAndStop(1);
    __s54local1.mc_unit.visible = __s54local4;
    __s54local1.mc_unit.mc_selected.visible = __s54local2 && __s54local4;
    __s54local1.mc_unit.mc_error_bg.visible = __s54local3.outline != __dep_export_CastleFightItemVO.CastleFightItemVO.OUTLINE_NONE;
    __s54local1.mc_error.visible = __s54local3.outline != __dep_export_CastleFightItemVO.CastleFightItemVO.OUTLINE_NONE && __s54local5 && __s54local3.isUnlocked();
    __s54local1.mc_selected_unit_add.visible = __s54local2 && !__s54param3 && __s54local5 && __s54local3.isUnlocked();
    __s54local1.mc_selected_tool_add.visible = __s54local2 && __s54param3 && __s54local5 && __s54local3.isUnlocked();
    __s54local1.mc_selected.visible = __s54local2 && __s54local5 && __s54local3.isUnlocked();
    __s54local1.mc_unit_add.visible = !__s54local2 && !__s54param3 && __s54local5 && __s54local3.isUnlocked();
    __s54local1.mc_tool_add.visible = !__s54local2 && __s54param3 && __s54local5 && __s54local3.isUnlocked();
    __s54local1.mc_empty.visible = !__s54local2 && __s54local5 && __s54local3.isUnlocked();
    __s54local1.mc_empty_locked_selected.visible = __s54local2 && __s54local5 && !__s54local3.isUnlocked();
    __s54local1.mc_empty_locked.visible = !__s54local2 && __s54local5 && !__s54local3.isUnlocked();
    if (__s54local4) {
      var __s54local7 = __dep_export_AttackDialogController.AttackDialogController.getInstance().isWaveDetailView ? 60 : 36;
      var __s54local8 = __dep_export_AttackDialogController.AttackDialogController.getInstance().isWaveDetailView ? 20 : 15;
      __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s54local1.mc_unit.txt_amount, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__s54local3.getAmount()), new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
      __dep_export_WodPicHelper.WodPicHelper.addPlayerUnitPicToContainer(__s54local6, __s54local1.mc_unit, __s54local7, __s54local7, __s54local7, __s54local7, __s54local8, new __s0local0(-20, 20), true, null, __s54local1.mc_unit.mc_unitLevel);
      __s54local1.toolTipText = __s54local6.getNameString();
      __s54local1.timeline.removeAllEventListeners(__s0local1.CHANGE);
      __s54local1.timeline.addEventListener(__s0local1.CHANGE, AttackDialogWaveInfoHelper.getOnFrameChange(__s54local1, __s54param2));
      __dep_export_ButtonHelper.ButtonHelper.getBasicButton(__s54local1).addMouseEventListener();
      if (__s54local1.mc_unit.mc_toolType) {
        if (__s54local6 instanceof __dep_export_ToolUnitVO.ToolUnitVO) {
          __s54local1.mc_unit.mc_toolType.visible = true;
          __s54local1.mc_unit.mc_toolType.gotoAndStop(AttackDialogWaveInfoHelper.getToolIconFrame(__s54local6.toolCategory));
        } else {
          __s54local1.mc_unit.mc_toolType.visible = false;
        }
      }
    } else if (__s54local5 && __s54local3.isUnlocked()) {
      __s54local1.toolTipText = __s54param4 ? "dialog_attack_rework2022_slot_supportTools_tooltip" : __s54param3 ? "dialog_attack_rework2022_slot_tools_tooltip" : "dialog_attack_rework2022_slot_units_tooltip";
      __s54local1.timeline.removeAllEventListeners(__s0local1.CHANGE);
      __s54local1.timeline.addEventListener(__s0local1.CHANGE, AttackDialogWaveInfoHelper.getOnFrameChange(__s54local1, __s54param2));
      __dep_export_ButtonHelper.ButtonHelper.getBasicButton(__s54local1).addMouseEventListener();
    } else {
      __s54local1.toolTipText = "dialog_attack_rework2022_slot_unavailable_tooltip";
      __s54local1.timeline.removeAllEventListeners(__s0local1.CHANGE);
      __dep_export_ButtonHelper.ButtonHelper.getBasicButton(__s54local1).removeMouseEventListener();
    }
    if (__s54local1.dragTarget) {
      __s54local0 = __s54local1.dragTarget;
    } else {
      __s54local0 = new __dep_export_AttackDialogDragTarget.AttackDialogDragTarget(__s54local1);
      __s54local1.dragTarget = __s54local0;
    }
    __s54local0.init(__s54param0, __s54param2, __s54param3, __s54param4, __s54param5);
  };
  AttackDialogWaveInfoHelper.getOnFrameChange = function (__s64param0, __s64param1) {
    return function (__s66param0) {
      var __s66local0 = 0;
      var __s66local1 = __s64param0.parent;
      for (var __s66local2 = __s66local1["item" + __s66local0]; __s66local2;) {
        if (__s64param1.items[__s66local0].isUnlocked()) {
          __s66local2.timeline.removeAllEventListeners(__s0local1.CHANGE);
          __s66local2.gotoAndStop(__s64param0.currentFrame + 1);
          __s66local2.timeline.addEventListener(__s0local1.CHANGE, AttackDialogWaveInfoHelper.getOnFrameChange(__s66local2, __s64param1));
        }
        __s66local2 = __s66local1["item" + ++__s66local0];
      }
    };
  };
  AttackDialogWaveInfoHelper.getToolIconFrame = function (__s71param0) {
    return AttackDialogWaveInfoHelper.TOOL_CATEGORIES.indexOf(__s71param0) + 1;
  };
  AttackDialogWaveInfoHelper.getSelectedSlot = function () {
    return this.controller.selectedWaveInfoSlotContainer;
  };
  AttackDialogWaveInfoHelper.clearContainer = function (__s75param0) {
    for (var __s75local0 = 0, __s75local1 = __s75param0.items; __s75local0 < __s75local1.length; __s75local0++) {
      var __s75local2 = __s75local1[__s75local0];
      if (__s75local2 !== undefined) {
        this.clearSlot(__s75local2);
      }
    }
  };
  AttackDialogWaveInfoHelper.clearSlot = function (__s80param0) {
    if (__s80param0.unitVO) {
      __dep_export_AttackDialogController.AttackDialogController.getInstance().attackVO.unitInventory.addUnit(__s80param0.unitVO.wodId, __s80param0.unitVO.inventoryAmount);
    }
    __s80param0.unitVO = null;
    __s80param0.outline = __dep_export_CastleFightItemVO.CastleFightItemVO.OUTLINE_NONE;
  };
  AttackDialogWaveInfoHelper.TOOL_CATEGORIES = ["basic", "premium", "elite", "event", "combo"];
  return AttackDialogWaveInfoHelper;
}();
exports.AttackDialogWaveInfoHelper = __s0local2;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local2, "ICollectableRendererList");
