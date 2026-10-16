Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function FightScreenHelper() {}
  FightScreenHelper.getDefenderEffectVO = function (__s5param0) {
    var __s5local0 = new __dep_export_DefenderEffectVO.DefenderEffectVO(__s5param0.targetArea);
    __s5local0.addDefenderFlankEffects(FightScreenHelper.getDefenderFlankEffectVO(__s5param0, __dep_export_ClientConstCastle.ClientConstCastle.FLANK_LEFT), __dep_export_ClientConstCastle.ClientConstCastle.FLANK_LEFT);
    __s5local0.addDefenderFlankEffects(FightScreenHelper.getDefenderFlankEffectVO(__s5param0, __dep_export_ClientConstCastle.ClientConstCastle.FLANK_MIDDLE), __dep_export_ClientConstCastle.ClientConstCastle.FLANK_MIDDLE);
    __s5local0.addDefenderFlankEffects(FightScreenHelper.getDefenderFlankEffectVO(__s5param0, __dep_export_ClientConstCastle.ClientConstCastle.FLANK_RIGHT), __dep_export_ClientConstCastle.ClientConstCastle.FLANK_RIGHT);
    __s5local0.addDefenderFlankEffects(FightScreenHelper.getDefenderFlankEffectVO(__s5param0, __dep_export_ClientConstCastle.ClientConstCastle.FLANK_YARD), __dep_export_ClientConstCastle.ClientConstCastle.FLANK_YARD);
    return __s5local0;
  };
  FightScreenHelper.getDefenderFlankEffectVO = function (__s7param0, __s7param1) {
    var __s7local0 = FightScreenHelper.getDefendingUnitStrength(__s7param0, __s7param1);
    var __s7local1 = FightScreenHelper.getDefenceBonuses(__s7param0, __s7param1);
    return new __dep_export_DefenderFlankEffectVO.DefenderFlankEffectVO(__s7local0[0], __s7local0[1], __s7local0[2], __s7local0[3], __s7local0[4], __s7local0[5], __s7local1[0], __s7local1[1], __s7local1[2]);
  };
  FightScreenHelper.getDefendingUnitStrength = function (__s9param0, __s9param1) {
    var __s9local0 = 0;
    var __s9local1 = 0;
    var __s9local2 = 0;
    var __s9local3 = 0;
    var __s9local4 = 1;
    var __s9local5 = 1;
    var __s9local6 = __s9param0.spyInfo;
    if (__s9local6) {
      var __s9local7;
      switch (__s9param1) {
        case __dep_export_ClientConstCastle.ClientConstCastle.FLANK_LEFT:
          __s9local7 = __s9local6.itemsLeft ? __s9local6.itemsLeft.getUnits(null) : null;
          break;
        case __dep_export_ClientConstCastle.ClientConstCastle.FLANK_MIDDLE:
          __s9local7 = __s9local6.itemsMiddle ? __s9local6.itemsMiddle.getUnits(null) : null;
          break;
        case __dep_export_ClientConstCastle.ClientConstCastle.FLANK_RIGHT:
          __s9local7 = __s9local6.itemsRight ? __s9local6.itemsRight.getUnits(null) : null;
          break;
        case __dep_export_ClientConstCastle.ClientConstCastle.FLANK_YARD:
          __s9local7 = __s9local6.itemsKeep ? __s9local6.itemsKeep.getUnits(null) : null;
          break;
        default:
          __s9local7 = __s9local6.itemsKeep ? __s9local6.itemsKeep.getUnits(null) : null;
      }
      if (__s9local6.itemsSupport) {
        __s9local7 = __s9local7 ? __s9local7.concat(__s9local6.itemsSupport.getUnits(null)) : __s9local6.itemsSupport.getUnits(null);
      }
      if (__s9local7) {
        for (var __s9local8 = 0; __s9local8 < __s9local7.length; __s9local8++) {
          if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s9local7[__s9local8], "SoldierUnitVO")) {
            var __s9local9 = __s9local7[__s9local8];
            if (__s9local9.role == __dep_export_SoldierUnitVO.SoldierUnitVO.ROLE_MELEE) {
              __s9local0 += __s9local9.meleeDefence * __s9local9.inventoryAmount;
              __s9local1 += __s9local9.rangeDefence * __s9local9.inventoryAmount;
            } else {
              __s9local2 += __s9local9.meleeDefence * __s9local9.inventoryAmount;
              __s9local3 += __s9local9.rangeDefence * __s9local9.inventoryAmount;
            }
          } else if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s9local7[__s9local8], "ToolUnitVO")) {
            var __s9local10 = __s9local7[__s9local8];
            __s9local4 += __s9local10.defMeleeBonus;
            __s9local5 += __s9local10.defRangeBonus;
            var __s9local11 = __s9local10.getBonusByEffect(__dep_export_ToolEffectType.ToolEffectType.DEFENSE_BONUS);
            __s9local4 += __s9local11;
            __s9local5 += __s9local11;
          }
        }
      }
      var __s9local12 = __s9local6.defendingLord;
      if (__s9local12) {
        __s9local4 += __dep_export_CastleEffectsHelper.CastleEffectsHelper.getFullDefenseBonusForLordByFlankAndAreaType(__s9local12, __s9param0.targetArea.areaType, __s9param1, true);
        __s9local5 += __dep_export_CastleEffectsHelper.CastleEffectsHelper.getFullDefenseBonusForLordByFlankAndAreaType(__s9local12, __s9param0.targetArea.areaType, __s9param1, false);
      }
      var __s9local13 = __s9local6.defenderSkills;
      if (__s9local13 != null) {
        for (var __s9local14 = 0, __s9local15 = __s9local13; __s9local14 < __s9local15.length; __s9local14++) {
          var __s9local16 = __s9local15[__s9local14];
          if (__s9local16 !== undefined) {
            var __s9local17 = __dep_export_CastleModel.CastleModel.legendSkillData.getSkillByID(__s9local16);
            if (__s9local17.effectType == __dep_export_CastleLegendSkillEffectsEnum.CastleLegendSkillEffectsEnum.DEFENSE_MELEE_BONUS) {
              __s9local4 += __s9local17.totalEffectValue / 100;
            } else if (__s9local17.effectType == __dep_export_CastleLegendSkillEffectsEnum.CastleLegendSkillEffectsEnum.DEFENSE_RANGE_BONUS) {
              __s9local5 += __s9local17.totalEffectValue / 100;
            }
          }
        }
      }
    }
    return [__s9local0, __s9local1, __s9local4, __s9local2, __s9local3, __s9local5];
  };
  FightScreenHelper.getDefenceBonuses = function (__s28param0, __s28param1) {
    var __s28local0 = Math.max(__s28param0.baseWallBonus, __s28param0.targetArea.baseWallBonus) / 100;
    var __s28local1 = Math.max(__s28param0.baseGateBonus, __s28param0.targetArea.baseGateBonus) / 100;
    var __s28local2 = Math.max(__s28param0.baseMoatBonus, __s28param0.targetArea.baseMoatBonus) / 100;
    var __s28local3 = __s28param0.spyInfo;
    if (__s28local3) {
      var __s28local4;
      switch (__s28param1) {
        case __dep_export_ClientConstCastle.ClientConstCastle.FLANK_LEFT:
          __s28local4 = __s28local3.itemsLeft ? __s28local3.itemsLeft.getUnits(null) : null;
          break;
        case __dep_export_ClientConstCastle.ClientConstCastle.FLANK_MIDDLE:
          __s28local4 = __s28local3.itemsMiddle ? __s28local3.itemsMiddle.getUnits(null) : null;
          break;
        case __dep_export_ClientConstCastle.ClientConstCastle.FLANK_RIGHT:
          __s28local4 = __s28local3.itemsRight ? __s28local3.itemsRight.getUnits(null) : null;
          break;
        default:
          __s28local4 = __s28local3.itemsKeep ? __s28local3.itemsKeep.getUnits(null) : null;
      }
      if (__s28local3.itemsSupport) {
        __s28local4 = __s28local4 ? __s28local4.concat(__s28local3.itemsSupport.getUnits(null)) : __s28local3.itemsSupport.getUnits(null);
      }
      if (__s28local4) {
        for (var __s28local5 = 0; __s28local5 < __s28local4.length; __s28local5++) {
          if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s28local4[__s28local5], "ToolUnitVO")) {
            var __s28local6 = __s28local4[__s28local5];
            __s28local0 += __s28local6.wallBonus;
            __s28local1 += __s28local6.gateBonus;
            __s28local2 += __s28local6.moatBonus;
          }
        }
      }
      var __s28local7 = __s28local3.defendingLord;
      if (__s28local7) {
        __s28local0 += __dep_export_CastleEffectsHelper.CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(__s28local7, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_WALL_BONUS, __s28param0.targetArea.areaType).strength / 100;
        __s28local1 += __dep_export_CastleEffectsHelper.CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(__s28local7, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_GATE_BONUS, __s28param0.targetArea.areaType).strength / 100;
        __s28local2 += __dep_export_CastleEffectsHelper.CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(__s28local7, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_MOAT_BONUS, __s28param0.targetArea.areaType).strength / 100;
      }
      var __s28local8 = __s28local3.defenderSkills;
      if (__s28local8 != null) {
        for (var __s28local9 = 0, __s28local10 = __s28local8; __s28local9 < __s28local10.length; __s28local9++) {
          var __s28local11 = __s28local10[__s28local9];
          if (__s28local11 !== undefined) {
            var __s28local12 = __dep_export_CastleModel.CastleModel.legendSkillData.getSkillByID(__s28local11);
            switch (__s28local12.effectType) {
              case __dep_export_CastleLegendSkillEffectsEnum.CastleLegendSkillEffectsEnum.WALL_BONUS:
                __s28local0 += __s28local12.totalEffectValue / 100;
                break;
              case __dep_export_CastleLegendSkillEffectsEnum.CastleLegendSkillEffectsEnum.GATE_BONUS:
                __s28local1 += __s28local12.totalEffectValue / 100;
                break;
              case __dep_export_CastleLegendSkillEffectsEnum.CastleLegendSkillEffectsEnum.MOAT_BONUS:
                __s28local2 += __s28local12.totalEffectValue / 100;
            }
          }
        }
      }
    }
    if (__s28param1 != __dep_export_ClientConstCastle.ClientConstCastle.FLANK_MIDDLE) {
      __s28local1 = 0;
    }
    return [__s28local0, __s28local1, __s28local2];
  };
  FightScreenHelper.getAttackerEffectVO = function (__s44param0, __s44param1, __s44param2, __s44param3) {
    var __s44local0 = new __dep_export_AttackerEffectVO.AttackerEffectVO();
    __s44local0.addAttackerFlankEffects(FightScreenHelper.getAttackerFlankEffectVO(__s44param0, __s44param1, __s44param2, __dep_export_ClientConstCastle.ClientConstCastle.FLANK_LEFT, __s44param3), __dep_export_ClientConstCastle.ClientConstCastle.FLANK_LEFT);
    __s44local0.addAttackerFlankEffects(FightScreenHelper.getAttackerFlankEffectVO(__s44param0, __s44param1, __s44param2, __dep_export_ClientConstCastle.ClientConstCastle.FLANK_MIDDLE, __s44param3), __dep_export_ClientConstCastle.ClientConstCastle.FLANK_MIDDLE);
    __s44local0.addAttackerFlankEffects(FightScreenHelper.getAttackerFlankEffectVO(__s44param0, __s44param1, __s44param2, __dep_export_ClientConstCastle.ClientConstCastle.FLANK_RIGHT, __s44param3), __dep_export_ClientConstCastle.ClientConstCastle.FLANK_RIGHT);
    return __s44local0;
  };
  FightScreenHelper.getAttackerFlankEffectVO = function (__s46param0, __s46param1, __s46param2, __s46param3, __s46param4) {
    var __s46local0;
    var __s46local1 = 1;
    var __s46local2 = 1;
    var __s46local3 = 0;
    var __s46local4 = 0;
    var __s46local5 = 0;
    var __s46local6 = 0;
    if (__s46param1) {
      __s46local3 += __dep_export_CastleEffectsHelper.CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(__s46param1, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_WALL_REDUCTION, __s46param0.target.areaType).strength / 100;
      __s46local4 += __dep_export_CastleEffectsHelper.CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(__s46param1, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_GATE_REDUCTION, __s46param0.target.areaType).strength / 100;
      __s46local5 += __dep_export_CastleEffectsHelper.CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(__s46param1, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_MOAT_REDUCTION, __s46param0.target.areaType).strength / 100;
      __s46local1 += __dep_export_CastleEffectsHelper.CastleEffectsHelper.getFullAttackBonusForLordByFlankAndAreaType(__s46param1, __s46param0.target.areaType, __s46param3, true);
      __s46local2 += __dep_export_CastleEffectsHelper.CastleEffectsHelper.getFullAttackBonusForLordByFlankAndAreaType(__s46param1, __s46param0.target.areaType, __s46param3, false);
    }
    if (__s46param2) {
      __s46local3 += __dep_export_CastleModel.CastleModel.legendSkillData.getTotalValueOfLegendSkillEffect(__dep_export_CastleLegendSkillEffectsEnum.CastleLegendSkillEffectsEnum.WALL_REDUCTION) / 100;
      __s46local4 += __dep_export_CastleModel.CastleModel.legendSkillData.getTotalValueOfLegendSkillEffect(__dep_export_CastleLegendSkillEffectsEnum.CastleLegendSkillEffectsEnum.GATE_REDUCTION) / 100;
      __s46local5 += __dep_export_CastleModel.CastleModel.legendSkillData.getTotalValueOfLegendSkillEffect(__dep_export_CastleLegendSkillEffectsEnum.CastleLegendSkillEffectsEnum.MOAT_REDUCTION) / 100;
      __s46local1 += __dep_export_CastleModel.CastleModel.legendSkillData.getTotalValueOfLegendSkillEffect(__dep_export_CastleLegendSkillEffectsEnum.CastleLegendSkillEffectsEnum.ATTACK_MELEE_BONUS) / 100;
      __s46local2 += __dep_export_CastleModel.CastleModel.legendSkillData.getTotalValueOfLegendSkillEffect(__dep_export_CastleLegendSkillEffectsEnum.CastleLegendSkillEffectsEnum.ATTACK_RANGE_BONUS) / 100;
    }
    switch (__s46param3) {
      case __dep_export_ClientConstCastle.ClientConstCastle.FLANK_LEFT:
        __s46local0 = __s46param0.itemsLeftWall_tools.items;
        break;
      case __dep_export_ClientConstCastle.ClientConstCastle.FLANK_MIDDLE:
        __s46local0 = __s46param0.itemsMiddleWall_tools.items;
        break;
      case __dep_export_ClientConstCastle.ClientConstCastle.FLANK_RIGHT:
        __s46local0 = __s46param0.itemsRightWall_tools.items;
    }
    if (__s46param4.supportItemContainer) {
      __s46local0 = __s46local0.concat(__s46param4.supportItemContainer.items);
    }
    if (__s46local0) {
      for (var __s46local7 = 0; __s46local7 < __s46local0.length; __s46local7++) {
        var __s46local8 = __s46local0[__s46local7].unitVO;
        if (__s46local8) {
          __s46local3 += __s46local8.wallBonus * __s46local8.inventoryAmount;
          __s46local4 += __s46local8.gateBonus * __s46local8.inventoryAmount;
          __s46local5 += __s46local8.moatBonus * __s46local8.inventoryAmount;
          __s46local6 += __s46local8.defRangeBonus * __s46local8.inventoryAmount;
          __s46local2 += __s46local8.offRangeBonus * __s46local8.inventoryAmount;
          __s46local1 += __s46local8.offMeleeBonus * __s46local8.inventoryAmount;
          var __s46local9 = __s46local8.getBonusByEffect(__dep_export_ToolEffectType.ToolEffectType.ATTACK_BONUS);
          __s46local2 += __s46local9 * __s46local8.inventoryAmount;
          __s46local1 += __s46local9 * __s46local8.inventoryAmount;
        }
      }
    }
    return new __dep_export_AttackerFlankEffectVO.AttackerFlankEffectVO(__s46local1, __s46local2, __s46local3, __s46local4, __s46local5, __s46local6);
  };
  FightScreenHelper.initInstantBuyButton = function (__s56param0, __s56param1, __s56param2) {
    __dep_export_ButtonHelper.ButtonHelper.initButton(__s56param0, 1, __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    var __s56local0 = __dep_export_CastleModel.CastleModel.permanentCastleData.getUnitBaseLocation(__s56param2);
    var __s56local1 = __s56local0 ? __s56param1.getInstantBuyInfoByUnitsVO(__s56local0.unitsVO) : new __dep_export_InstantBuyInfoVO.InstantBuyInfoVO();
    __s56param0.visible = __s56local1.isVisible;
    __dep_export_ButtonHelper.ButtonHelper.enableButton(__s56param0, __s56local1.isEnabled);
    __s56param0.toolTipText = __s56local1.toolTip;
  };
  FightScreenHelper.getSlotsFromLevels = function (__s58param0, __s58param1) {
    var __s58local0 = 0;
    if (__s58param1 != null) {
      for (var __s58local1 = 0, __s58local2 = __s58param1; __s58local1 < __s58local2.length; __s58local1++) {
        var __s58local3 = __s58local2[__s58local1];
        if (__s58local3 !== undefined && __s58local3 <= __s58param0) {
          __s58local0++;
        }
      }
    }
    return __s58local0;
  };
  return FightScreenHelper;
}();
exports.FightScreenHelper = __s0local0;
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_SoldierUnitVO = require("gge-module:export_SoldierUnitVO");
var __dep_export_ToolEffectType = require("gge-module:export_ToolEffectType");
var __dep_export_CastleEffectsHelper = require("gge-module:export_CastleEffectsHelper");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_InstantBuyInfoVO = require("gge-module:export_InstantBuyInfoVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __dep_export_CastleLegendSkillEffectsEnum = require("gge-module:export_CastleLegendSkillEffectsEnum");
var __dep_export_AttackerEffectVO = require("gge-module:export_AttackerEffectVO");
var __dep_export_AttackerFlankEffectVO = require("gge-module:export_AttackerFlankEffectVO");
var __dep_export_DefenderEffectVO = require("gge-module:export_DefenderEffectVO");
var __dep_export_DefenderFlankEffectVO = require("gge-module:export_DefenderFlankEffectVO");
