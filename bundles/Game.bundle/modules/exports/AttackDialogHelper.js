Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_ClientConstSort = require("gge-module:export_ClientConstSort");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleWodData = require("gge-module:export_CastleWodData");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __dep_export_CastleFightItemVO = require("gge-module:export_CastleFightItemVO");
var __dep_export_CastleLegendSkillEffectsEnum = require("gge-module:export_CastleLegendSkillEffectsEnum");
var __dep_export_CastleEffectsHelper = require("gge-module:export_CastleEffectsHelper");
var __dep_export_EffectIconUnitVO = require("gge-module:export_EffectIconUnitVO");
var __dep_export_ToolEffectType = require("gge-module:export_ToolEffectType");
var __dep_export_ToolUnitVO = require("gge-module:export_ToolUnitVO");
var __dep_export_MapObjectHelper = require("gge-module:export_MapObjectHelper");
var __dep_export_AttackHelper = require("gge-module:export_AttackHelper");
var __dep_export_PlayerHelper = require("gge-module:export_PlayerHelper");
var __dep_export_LordEffectHelper = require("gge-module:export_LordEffectHelper");
var __dep_export_CastleFightDialog = require("gge-module:export_CastleFightDialog");
var __dep_export_AttackDialogController = require("gge-module:export_AttackDialogController");
var __dep_export_AttackDialogWaveHandlerFinalYardWaveInfoItem = require("gge-module:export_AttackDialogWaveHandlerFinalYardWaveInfoItem");
var __dep_export_AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut = require("gge-module:export_AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut");
var __s0local0 = function () {
  function AttackDialogHelper() {}
  AttackDialogHelper.canUseSupportTools = function () {
    if (__dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.isCrossplay) {
      return false;
    }
    var __s5local0 = this.attackInfoVO.homeWorkshopLevel >= __dep_exact_26a421b704832cff.CombatConst.LEVELS_SUPPORT_TOOLS_HOME_AWORKSHOP[0];
    var __s5local1 = this.getFilteredArray(__dep_export_CastleFightDialog.CastleFightDialog.SHOP_CATEGORY_SUPPORT_TOOLS).length > 0;
    var __s5local2 = __dep_export_AttackDialogController.AttackDialogController.getInstance().attackVO.supportItemContainer && __dep_export_AttackDialogController.AttackDialogController.getInstance().attackVO.supportItemContainer.sumOfItems > 0;
    return __s5local0 && __s5local1 || __s5local2;
  };
  AttackDialogHelper.getFilterArray_Complete = function (__s8param0) {
    return this.getFilteredArray(__s8param0);
  };
  AttackDialogHelper.getFilteredArray = function (__s10param0) {
    var __s10local0 = [];
    switch (__s10param0) {
      case __dep_export_CastleFightDialog.CastleFightDialog.SHOP_CATEGORY_UNITS_ATT:
        __s10local0 = this.attackInfoVO.unitInventory.getOffensiveSoldiers(this.attackInfoVO.isOccupyConquerAttack);
        break;
      case __dep_export_CastleFightDialog.CastleFightDialog.SHOP_CATEGORY_UNITS_DEF:
        __s10local0 = this.attackInfoVO.unitInventory.getDefensiveSoldiers(false);
        break;
      case __dep_export_CastleFightDialog.CastleFightDialog.SHOP_CATEGORY_UNITS:
        __s10local0 = this.attackInfoVO.unitInventory.getOffensiveSoldiers(this.attackInfoVO.isOccupyConquerAttack);
        for (var __s10local1 = 0, __s10local2 = this.attackInfoVO.unitInventory.getDefensiveSoldiers(false); __s10local1 < __s10local2.length; __s10local1++) {
          var __s10local3 = __s10local2[__s10local1];
          if (!(__s10local0.indexOf(__s10local3) > -1)) {
            __s10local0.push(__s10local3);
          }
        }
        break;
      case __dep_export_CastleFightDialog.CastleFightDialog.SHOP_CATEGORY_TOOLS:
        __s10local0 = this.getToolsList(function (__s16param0) {
          return !__s16param0.isOffenseSupportTool;
        });
        break;
      case __dep_export_CastleFightDialog.CastleFightDialog.SHOP_CATEGORY_SUPPORT_TOOLS:
        __s10local0 = this.getToolsList(function (__s18param0) {
          return __s18param0.isOffenseSupportTool;
        });
        break;
      case AttackDialogHelper.CUSTOM_CATEGORY_ATTACK_TOOLS:
        __s10local0 = this.getToolsList(function (__s20param0) {
          var __s20local0 = true;
          if (__dep_export_AttackDialogController.AttackDialogController.getInstance().isWaveDetailView) {
            __s20local0 = __dep_export_AttackDialogController.AttackDialogController.getInstance().getIsWaveSelectedForAutoFill(__dep_export_AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut.AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut.CONST_WAVE_NAME) == __s20param0.isSupportTool;
          }
          return !__s20param0.isBoosterTool && __s20local0;
        });
        break;
      case AttackDialogHelper.CUSTOM_CATEGORY_BOOSTER_TOOLS:
        __s10local0 = this.getToolsList(function (__s23param0) {
          return __s23param0.isBoosterTool;
        });
    }
    __s10local0.sort(__dep_export_ClientConstSort.ClientConstSort.sortByUnitSortOrder);
    return __s10local0;
  };
  AttackDialogHelper.getToolsList = function (__s25param0) {
    var __s25local0;
    var __s25local1;
    var __s25local2 = this.getAttackUnits();
    var __s25local3 = __dep_exact_f855840627e6e145.int(__dep_exact_81dacdf05bd32292.instanceOfClass(this.attackInfoVO, "CastleTreasureHuntFightscreenVO") ? this.attackInfoVO.treasureMapVO.mapID : this.attackInfoVO.targetArea.kingdomID);
    var __s25local4 = [];
    for (var __s25local5 = 0, __s25local6 = __s25local2; __s25local5 < __s25local6.length; __s25local5++) {
      __s25local0 = __s25local6[__s25local5];
      if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s25local0, "ToolUnitVO")) {
        __s25local1 = __s25local0;
        if (__dep_export_AttackHelper.AttackHelper.canUseToolForAttackOnTarget(this.attackInfoVO.targetArea, __s25local1, __s25local3) && __s25param0(__s25local1)) {
          __s25local4.push(__s25local1);
        }
      }
    }
    return __s25local2 = __s25local4;
  };
  AttackDialogHelper.getAttackUnits = function () {
    var __s31local0 = new Map();
    var __s31local1 = [];
    var __s31local2 = __dep_export_CastleModel.CastleModel.permanentCastleData.getUnitBaseLocation(this.attackInfoVO.sourceArea);
    if (__s31local2) {
      var __s31local3 = __s31local2.unitsVO.getFightscreenToolsByUnitType(__dep_export_ClientConstCastle.ClientConstCastle.UNIT_TYPE_TOOL_ATTACK);
      if (__s31local3 != null) {
        for (var __s31local4 = 0, __s31local5 = __s31local3; __s31local4 < __s31local5.length; __s31local4++) {
          var __s31local6 = __s31local5[__s31local4];
          if (__s31local6 !== undefined) {
            var __s31local7 = __s31local2.unitsVO.getAssociatedEventPackage(__s31local6.wodId);
            if ((__dep_exact_81dacdf05bd32292.instanceOfClass(__s31local6, "EventtoolUnitVO") || __dep_exact_81dacdf05bd32292.instanceOfClass(__s31local6, "WorkshopUnitVO") || __dep_exact_81dacdf05bd32292.instanceOfClass(__s31local6, "ElitetoolUnitVO")) && (__s31local6.costC2 > 0 || __s31local7 && __s31local7.basicPriceC2 > 0)) {
              var __s31local8 = __dep_export_CastleModel.CastleModel.wodData.createVObyWOD(__s31local6.wodId, __dep_export_CastleWodData.CastleWodData.TYPE_UNIT);
              __s31local0.set(__s31local8.wodId, __s31local8);
            }
          }
        }
      }
    }
    var __s31local9 = this.attackInfoVO.unitInventory.getUnitsByType(__dep_export_ClientConstCastle.ClientConstCastle.UNIT_TYPE_TOOL_ATTACK);
    if (__s31local9 != null) {
      for (var __s31local10 = 0, __s31local11 = __s31local9; __s31local10 < __s31local11.length; __s31local10++) {
        var __s31local12 = __s31local11[__s31local10];
        if (__s31local12 !== undefined) {
          var __s31local13 = __dep_exact_81dacdf05bd32292.castAs(this.getUnitWodInArray(__s31local12.wodId, __s31local1), "ToolUnitVO");
          if (__s31local13) {
            __s31local13.inventoryAmount = this.attackInfoVO.unitInventory.getUnitCountByWodId(__s31local12.wodId);
          } else {
            __s31local0.set(__s31local12.wodId, __s31local12);
          }
        }
      }
    }
    __s31local0.forEach(function (__s45param0, __s45param1) {
      __s31local1.push(__s45param0);
    });
    return __s31local1;
  };
  AttackDialogHelper.getUnitWodInArray = function (__s47param0, __s47param1) {
    if (__s47param1 != null) {
      for (var __s47local0 = 0, __s47local1 = __s47param1; __s47local0 < __s47local1.length; __s47local0++) {
        var __s47local2 = __s47local1[__s47local0];
        if (__s47local2 !== undefined && __s47local2.wodId == __s47param0) {
          return __s47local2;
        }
      }
    }
    return null;
  };
  AttackDialogHelper.getPossibleSlots = function (__s53param0) {
    var __s53local0 = Number.MAX_VALUE;
    var __s53local1 = [];
    var __s53local2 = [];
    for (var __s53local3 = 0; __s53local3 < __dep_export_AttackDialogController.AttackDialogController.getInstance().selectedWaveInfoSlotContainer.items.length; __s53local3++) {
      var __s53local4 = __dep_export_AttackDialogController.AttackDialogController.getInstance().selectedWaveInfoSlotContainer.items[__s53local3];
      if (__s53param0.isToolForSlotType(__s53local4.slotType) && __s53local4.isUnlocked()) {
        if (__s53local4.isFree() || __s53local4.getWodId() == __s53param0.wodId) {
          __s53local2.push(__s53local4);
        } else {
          var __s53local5 = false;
          var __s53local6 = __dep_exact_f855840627e6e145.int(__dep_export_AttackDialogController.AttackDialogController.getInstance().selectedWaveInfoSlotContainer.getTotalAmountOfUntit(__s53local4.unitVO));
          var __s53local7 = 0;
          for (var __s53local8 = 0; __s53local8 < __s53local1.length; __s53local8++) {
            var __s53local9 = __s53local1[__s53local8];
            if (__s53local4.getWodId() == __s53local9.getWodId() && __s53local6 <= ++__s53local7 * __s53local0) {
              __s53local5 = true;
              __s53local7 = 0;
              break;
            }
          }
          if (__s53local5) {
            __s53local2.push(__s53local4);
          }
          __s53local1.push(__s53local4);
        }
      }
    }
    return __s53local2;
  };
  AttackDialogHelper.calculateToolsInfo = function (__s64param0, __s64param1 = 0, __s64param2 = 0, __s64param3 = 0, __s64param4 = true, __s64param5 = false, __s64param6 = false, __s64param7 = false) {
    var __s64local0;
    var __s64local1 = this.attackInfoVO.spyInfo.defendingLord;
    var __s64local2 = this.attackInfoVO.spyInfo.defenderSkills;
    var __s64local3 = new Map();
    var __s64local4 = [];
    var __s64local5 = true;
    var __s64local6 = true;
    var __s64local7 = __s64param1 * 0.01;
    var __s64local8 = 0;
    var __s64local9 = __s64param2 * 0.01;
    var __s64local10 = 0;
    var __s64local11 = __s64param3 * 0.01;
    if (__s64param0 != null) {
      for (var __s64local12 = 0, __s64local13 = __s64param0; __s64local12 < __s64local13.length; __s64local12++) {
        var __s64local14 = __s64local13[__s64local12];
        if (__s64local14 !== undefined) {
          __s64local7 += __s64local14.gateBonus;
          __s64local9 += __s64local14.moatBonus;
          __s64local11 += __s64local14.wallBonus;
          __s64local10 += __s64local14.defRangeBonus;
          __s64local8 += __s64local14.defMeleeBonus;
          var __s64local15 = __s64local14.getBonusByEffect(__dep_export_ToolEffectType.ToolEffectType.DEFENSE_BONUS);
          __s64local10 += __s64local15;
          __s64local8 += __s64local15;
          if (__s64param7) {
            var __s64local16 = __s64local14.getBonusByEffect(__dep_export_ToolEffectType.ToolEffectType.DEFENSE_BOOST_YARD);
            __s64local10 += __s64local16;
            __s64local8 += __s64local16;
          }
        }
      }
    }
    if (__s64local1) {
      if (this.attackInfoVO) {
        __s64local11 += __dep_export_CastleEffectsHelper.CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(__s64local1, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_WALL_BONUS, this.attackInfoVO.targetArea.areaType).strength / 100;
        __s64local7 += __dep_export_CastleEffectsHelper.CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(__s64local1, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_GATE_BONUS, this.attackInfoVO.targetArea.areaType).strength / 100;
        __s64local9 += __dep_export_CastleEffectsHelper.CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(__s64local1, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_MOAT_BONUS, this.attackInfoVO.targetArea.areaType).strength / 100;
      }
      var __s64local17 = __dep_export_CastleEffectsHelper.CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(__s64local1, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_MELEE_BONUS, this.attackInfoVO.targetArea.areaType).strength;
      var __s64local18 = __dep_export_CastleEffectsHelper.CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(__s64local1, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_RANGE_BONUS, this.attackInfoVO.targetArea.areaType).strength;
      var __s64local19 = __dep_export_CastleEffectsHelper.CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(__s64local1, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_DEFENSE_BONUS, this.attackInfoVO.targetArea.areaType).strength;
      var __s64local20 = __s64param7 ? __dep_export_CastleEffectsHelper.CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(__s64local1, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_DEFENSE_BOOST_YARD, this.attackInfoVO.targetArea.areaType).strength : 0;
      var __s64local21 = __s64param5 ? __dep_export_CastleEffectsHelper.CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(__s64local1, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_DEFENSE_BOOST_FRONT, this.attackInfoVO.targetArea.areaType).strength : 0;
      var __s64local22 = !__s64param5 && __s64param4 ? __dep_export_CastleEffectsHelper.CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(__s64local1, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_DEFENSE_BOOST_FLANK, this.attackInfoVO.targetArea.areaType).strength : 0;
      __s64local8 += (__s64local17 + __s64local19 + __s64local20 + __s64local21 + __s64local22) / 100;
      __s64local10 += (__s64local18 + __s64local19 + __s64local20 + __s64local21 + __s64local22) / 100;
      if (__s64local17 > 0) {
        __s64local5 = true;
      }
      if (__s64local18 > 0) {
        __s64local6 = true;
      }
    }
    if (__s64local2 && __s64local2.length > 0) {
      if (__s64local2 != null) {
        for (var __s64local23 = 0, __s64local24 = __s64local2; __s64local23 < __s64local24.length; __s64local23++) {
          var __s64local25 = __s64local24[__s64local23];
          if (__s64local25 !== undefined) {
            __s64local0 = __dep_export_CastleModel.CastleModel.legendSkillData.getSkillByID(__s64local25);
            __s64local3.get(__s64local0.effectType);
            __s64local3.set(__s64local0.effectType, __s64local0.totalEffectValue / 100);
          }
        }
      }
      if (this.attackInfoVO) {
        __s64local11 += __s64local3.get(__dep_export_CastleLegendSkillEffectsEnum.CastleLegendSkillEffectsEnum.WALL_BONUS) ? __s64local3.get(__dep_export_CastleLegendSkillEffectsEnum.CastleLegendSkillEffectsEnum.WALL_BONUS) : 0;
        __s64local7 += __s64local3.get(__dep_export_CastleLegendSkillEffectsEnum.CastleLegendSkillEffectsEnum.GATE_BONUS) ? __s64local3.get(__dep_export_CastleLegendSkillEffectsEnum.CastleLegendSkillEffectsEnum.GATE_BONUS) : 0;
        __s64local9 += __s64local3.get(__dep_export_CastleLegendSkillEffectsEnum.CastleLegendSkillEffectsEnum.MOAT_BONUS) ? __s64local3.get(__dep_export_CastleLegendSkillEffectsEnum.CastleLegendSkillEffectsEnum.MOAT_BONUS) : 0;
      }
      __s64local8 += __s64local3.get(__dep_export_CastleLegendSkillEffectsEnum.CastleLegendSkillEffectsEnum.DEFENSE_MELEE_BONUS) ? __s64local3.get(__dep_export_CastleLegendSkillEffectsEnum.CastleLegendSkillEffectsEnum.DEFENSE_MELEE_BONUS) : 0;
      __s64local10 += __s64local3.get(__dep_export_CastleLegendSkillEffectsEnum.CastleLegendSkillEffectsEnum.DEFENSE_RANGE_BONUS) ? __s64local3.get(__dep_export_CastleLegendSkillEffectsEnum.CastleLegendSkillEffectsEnum.DEFENSE_RANGE_BONUS) : 0;
      __s64local8 += __s64local3.get(__dep_export_CastleLegendSkillEffectsEnum.CastleLegendSkillEffectsEnum.DEFENSE_BONUS) ? __s64local3.get(__dep_export_CastleLegendSkillEffectsEnum.CastleLegendSkillEffectsEnum.DEFENSE_BONUS) : 0;
      __s64local10 += __s64local3.get(__dep_export_CastleLegendSkillEffectsEnum.CastleLegendSkillEffectsEnum.DEFENSE_BONUS) ? __s64local3.get(__dep_export_CastleLegendSkillEffectsEnum.CastleLegendSkillEffectsEnum.DEFENSE_BONUS) : 0;
      if (__s64local3.get(__dep_export_CastleLegendSkillEffectsEnum.CastleLegendSkillEffectsEnum.DEFENSE_MELEE_BONUS) > 0) {
        __s64local5 = true;
      }
      if (__s64local3.get(__dep_export_CastleLegendSkillEffectsEnum.CastleLegendSkillEffectsEnum.DEFENSE_RANGE_BONUS) > 0) {
        __s64local6 = true;
      }
    }
    if (this.attackInfoVO && this.attackInfoVO.targetOwnerLevel >= __dep_exact_26a421b704832cff.PlayerConst.LEVEL_CAP && (!__dep_export_PlayerHelper.PlayerHelper.isNPCPlayer(this.attackInfoVO.targetOwner.playerID) || __dep_export_PlayerHelper.PlayerHelper.isNpcPvpPlayer(this.attackInfoVO.targetOwner.playerID))) {
      if (!__dep_exact_81dacdf05bd32292.instanceOfClass(this.attackInfoVO, "CastleSupportDefenceVO")) {
        __s64local11 -= __dep_export_CastleModel.CastleModel.legendSkillData.getTotalValueOfLegendSkillEffect(__dep_export_CastleLegendSkillEffectsEnum.CastleLegendSkillEffectsEnum.WALL_REDUCTION) / 100;
        __s64local7 -= __dep_export_CastleModel.CastleModel.legendSkillData.getTotalValueOfLegendSkillEffect(__dep_export_CastleLegendSkillEffectsEnum.CastleLegendSkillEffectsEnum.GATE_REDUCTION) / 100;
        __s64local9 -= __dep_export_CastleModel.CastleModel.legendSkillData.getTotalValueOfLegendSkillEffect(__dep_export_CastleLegendSkillEffectsEnum.CastleLegendSkillEffectsEnum.MOAT_REDUCTION) / 100;
      }
    }
    var __s64local26 = __dep_export_AttackDialogController.AttackDialogController.getInstance().selectedLord;
    if (__s64local26 && !__s64param6) {
      __s64local1 = __s64local26;
      var __s64local27 = __dep_export_LordEffectHelper.LordEffectHelper.getFilterStrategyAttackOrDefence(this.attackInfoVO.targetArea.ownerInfo.playerID, true);
      __s64local7 = Math.max(__s64local7 - __dep_export_CastleEffectsHelper.CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(__s64local1, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_GATE_REDUCTION, this.attackInfoVO.targetArea.areaType, true, __s64local27).strength / 100, 0);
      __s64local9 = Math.max(__s64local9 - __dep_export_CastleEffectsHelper.CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(__s64local1, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_MOAT_REDUCTION, this.attackInfoVO.targetArea.areaType, true, __s64local27).strength / 100, 0);
      __s64local11 = Math.max(__s64local11 - __dep_export_CastleEffectsHelper.CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(__s64local1, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_WALL_REDUCTION, this.attackInfoVO.targetArea.areaType, true, __s64local27).strength / 100, 0);
      if (__s64param7) {
        __s64local8 = Math.max(__s64local8 - __dep_export_CastleEffectsHelper.CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(__s64local1, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_MELEE_DEFENSE_MALUS_YARD, this.attackInfoVO.targetArea.areaType, true, __s64local27).strength / 100, 0);
        __s64local10 = Math.max(__s64local10 - __dep_export_CastleEffectsHelper.CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(__s64local1, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_RANGE_DEFENSE_MALUS_YARD, this.attackInfoVO.targetArea.areaType, true, __s64local27).strength / 100, 0);
      }
    }
    if (__s64param4 && (__s64local9 > 0 || this.attackInfoVO.targetArea.baseMoatBonus > 0)) {
      __s64local4.push(new __dep_export_EffectIconUnitVO.EffectIconUnitVO(__dep_export_ToolEffectType.ToolEffectType.MOAT_BONUS, Math.round(Math.max(__s64local9 * 100))));
    }
    if (__s64param5 && __s64param1 >= 0) {
      __s64local4.push(new __dep_export_EffectIconUnitVO.EffectIconUnitVO(__dep_export_ToolEffectType.ToolEffectType.GATE_BONUS, Math.round(__s64local7 * 100)));
    }
    if (__s64param4) {
      __s64local4.push(new __dep_export_EffectIconUnitVO.EffectIconUnitVO(__dep_export_ToolEffectType.ToolEffectType.WALL_BONUS, Math.round(__s64local11 * 100)));
    }
    if (__s64local5) {
      __s64local4.push(new __dep_export_EffectIconUnitVO.EffectIconUnitVO(__dep_export_ToolEffectType.ToolEffectType.DEF_MELEE_BONUS, Math.round(__s64local8 * 100 + 100)));
    }
    if (__s64local6) {
      __s64local4.push(new __dep_export_EffectIconUnitVO.EffectIconUnitVO(__dep_export_ToolEffectType.ToolEffectType.DEF_RANGE_BONUS, Math.round(__s64local10 * 100 + 100)));
    }
    return __s64local4;
  };
  AttackDialogHelper.getTotalLoot = function () {
    var __s92local0 = __dep_export_AttackDialogController.AttackDialogController.getInstance().selectedLord;
    var __s92local1 = 0;
    for (var __s92local2 = 0; __s92local2 < this.attackInfoVO.army.getWaveCount(); ++__s92local2) {
      var __s92local3 = this.attackInfoVO.army.getWaveByID(__s92local2);
      __s92local1 += this.calcWaveLoot(__s92local3);
    }
    if (this.attackInfoVO.yardWaveContainer) {
      __s92local1 += this.attackInfoVO.yardWaveContainer.getLootAmount(__dep_export_AttackDialogController.AttackDialogController.getInstance().selectedLord);
    }
    if (__s92local0) {
      __s92local1 += __dep_exact_f855840627e6e145.int(__dep_export_CastleEffectsHelper.CastleEffectsHelper.getTotalLordLootCapacityBonusForArea(__s92local0, this.attackInfoVO.targetArea.areaType, this.isLegendaryFight));
    }
    var __s92local4 = __dep_export_LordEffectHelper.LordEffectHelper.getFilterStrategyAttackOrDefence(this.attackInfoVO.targetArea.ownerInfo.playerID, true);
    var __s92local5 = 0;
    __s92local5 += __dep_exact_f855840627e6e145.int(__dep_export_CastleEffectsHelper.CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(__s92local0, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_LOOT_BONUS, this.attackInfoVO.targetArea.areaType, true, __s92local4).strength);
    __s92local5 += __dep_exact_f855840627e6e145.int(__dep_export_CastleEffectsHelper.CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(__s92local0, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_LOOT_CAPACITY_BOOST, this.attackInfoVO.targetArea.areaType, true, __s92local4).strength);
    return __s92local1 += __s92local1 * (Math.floor(__s92local5) / 100);
  };
  AttackDialogHelper.calcWaveLoot = function (__s98param0) {
    var __s98local0 = 0;
    var __s98local1 = __dep_export_AttackDialogController.AttackDialogController.getInstance().selectedLord;
    __s98local0 += __dep_exact_f855840627e6e145.int(__s98param0.itemsLeftWall_units.getLootAmount(__s98local1));
    __s98local0 += __dep_exact_f855840627e6e145.int(__s98param0.itemsMiddleWall_units.getLootAmount(__s98local1));
    __s98local0 += __dep_exact_f855840627e6e145.int(__s98param0.itemsRightWall_units.getLootAmount(__s98local1));
    __s98local0 += __dep_exact_f855840627e6e145.int(__s98param0.itemsLeftWall_tools.getLootAmount(__s98local1));
    __s98local0 += __dep_exact_f855840627e6e145.int(__s98param0.itemsMiddleWall_tools.getLootAmount(__s98local1));
    return __s98local0 += __dep_exact_f855840627e6e145.int(__s98param0.itemsRightWall_tools.getLootAmount(__s98local1));
  };
  Object.defineProperty(AttackDialogHelper, "isLegendaryFight", {
    get: function () {
      if (!__dep_export_PlayerHelper.PlayerHelper.isNPCPlayer(this.attackInfoVO.targetArea.ownerInfo.playerID) || __dep_export_PlayerHelper.PlayerHelper.isNpcPvpPlayer(this.attackInfoVO.targetArea.ownerInfo.playerID)) {
        var __s100local0 = false;
        __s100local0 = __dep_exact_81dacdf05bd32292.instanceOfClass(this.attackInfoVO.targetArea, "AAlienInvasionMapobjectVO") ? this.attackInfoVO.targetOwnerLevel >= __dep_exact_26a421b704832cff.PlayerConst.LEVEL_CAP : this.attackInfoVO.targetArea.ownerInfo.isLegend;
        var __s100local1 = __dep_export_CastleModel.CastleModel.userData.isLegend && __s100local0;
        var __s100local2 = __dep_export_MapObjectHelper.MapObjectHelper.isLandmark(this.attackInfoVO.targetArea);
        if (__s100local1 || __s100local2) {
          return true;
        }
      }
      return false;
    },
    enumerable: true,
    configurable: true
  });
  AttackDialogHelper.getSelectedWavesString = function (__s104param0 = false) {
    var __s104local0 = [];
    for (var __s104local1 = 0; __s104local1 < this.attackInfoVO.army.getWaveCount(); __s104local1++) {
      if (__dep_export_AttackDialogController.AttackDialogController.getInstance().getIsWaveSelectedForAutoFill(__s104local1)) {
        __s104local0.push(__s104local1 + 1);
      }
    }
    if (!__s104param0 && __dep_export_AttackDialogController.AttackDialogController.getInstance().getIsWaveSelectedForAutoFill(__dep_export_AttackDialogWaveHandlerFinalYardWaveInfoItem.AttackDialogWaveHandlerFinalYardWaveInfoItem.CONST_WAVE_NAME)) {
      __s104local0.push("RW");
    }
    return __s104local0.toString();
  };
  AttackDialogHelper.getSelectedFlanksString = function (__s110param0 = false) {
    var __s110local0 = [];
    if (__s110param0 || __dep_export_AttackDialogController.AttackDialogController.getInstance().getIsWaveSelectedForAutoFill(__dep_export_AttackDialogController.AttackDialogController.AUTOFILL_SELECTION_POSITION_LEFT)) {
      __s110local0.push("left");
    }
    if (__s110param0 || __dep_export_AttackDialogController.AttackDialogController.getInstance().getIsWaveSelectedForAutoFill(__dep_export_AttackDialogController.AttackDialogController.AUTOFILL_SELECTION_POSITION_MIDDLE)) {
      __s110local0.push("center");
    }
    if (__s110param0 || __dep_export_AttackDialogController.AttackDialogController.getInstance().getIsWaveSelectedForAutoFill(__dep_export_AttackDialogController.AttackDialogController.AUTOFILL_SELECTION_POSITION_RIGHT)) {
      __s110local0.push("right");
    }
    return __s110local0.toString();
  };
  AttackDialogHelper.changeUnitItemAmount = function (__s115param0, __s115param1, __s115param2, __s115param3) {
    var __s115local0 = 0;
    if (__s115param2.unitVO) {
      if (!__s115param2.isSameType(__s115param1)) {
        this.changeUnitItemAmount(__s115param0, __s115param2.unitVO, __s115param2, 0);
        this.changeUnitItemAmount(__s115param0, __s115param1, __s115param2, __s115param3);
        return;
      }
      if (__s115param3 != __s115param2.unitVO.inventoryAmount) {
        __s115local0 = __dep_exact_f855840627e6e145.int(__s115param2.unitVO.inventoryAmount - __s115param3);
      }
    } else {
      __s115local0 = -__s115param3;
      __s115param2.unitVO = __dep_export_CastleModel.CastleModel.wodData.createVObyWOD(__s115param1.wodId, __dep_export_CastleWodData.CastleWodData.TYPE_UNIT);
    }
    if (__s115param3 == 0) {
      __s115param2.unitVO = null;
    } else {
      __s115param2.unitVO.inventoryAmount = __s115param3;
    }
    __s115param2.outline = __dep_exact_f855840627e6e145.int(__dep_export_CastleFightItemVO.CastleFightItemVO.OUTLINE_NONE);
    __s115param0.changeUnitAmount(__s115param1.wodId, __s115local0);
    if (__s115param1 instanceof __dep_export_ToolUnitVO.ToolUnitVO && __s115param1.getBonusByEffect(__dep_export_ToolEffectType.ToolEffectType.ADDITIONAL_WAVE) > 0) {
      __dep_export_AttackDialogController.AttackDialogController.getInstance().onLordChanged.dispatch();
    }
    __dep_export_AttackDialogController.AttackDialogController.getInstance().updateAllWaveInfo.dispatch();
  };
  Object.defineProperty(AttackDialogHelper, "attackInfoVO", {
    get: function () {
      return __dep_export_AttackDialogController.AttackDialogController.getInstance().attackVO;
    },
    enumerable: true,
    configurable: true
  });
  AttackDialogHelper.CUSTOM_CATEGORY_ATTACK_TOOLS = 1001;
  AttackDialogHelper.CUSTOM_CATEGORY_BOOSTER_TOOLS = 1002;
  return AttackDialogHelper;
}();
exports.AttackDialogHelper = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
