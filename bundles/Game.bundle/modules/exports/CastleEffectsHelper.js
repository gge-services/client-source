Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CastleEffectsHelper() {}
  CastleEffectsHelper.getAccumulatedEffectValueForTypes = function (__s5param0, __s5param1, __s5param2, __s5param3 = null) {
    var __s5local0 = new __s5param0[0].valueClass();
    if (__s5param0 != null) {
      for (var __s5local1 = 0, __s5local2 = __s5param0; __s5local1 < __s5local2.length; __s5local1++) {
        var __s5local3 = __s5local2[__s5local1];
        if (__s5local3 !== undefined) {
          __s5local0.add(CastleEffectsHelper.getAccumulatedEffectValueForType(__s5local3, __s5param1, __s5param2, __s5param3), null);
        }
      }
    }
    return __s5local0;
  };
  CastleEffectsHelper.getAccumulatedEffectValueForType = function (__s11param0, __s11param1, __s11param2, __s11param3 = null) {
    var __s11local0 = [];
    var __s11local1 = [];
    if (__s11param1) {
      __s11local0 = __s11local0.concat(__s11param1.getUniqueBoni(false, __s11param0, __s11param2.areaType, null, true));
    }
    __s11local0 = __s11local0.concat(__dep_export_CastleModel.CastleModel.userData.getGlobalConstructionItemEffectsByType(__s11param0, __s11param2));
    __s11local1 = (__s11local1 = (__s11local1 = (__s11local1 = (__s11local1 = (__s11local1 = __s11local1.concat(__dep_export_CastleTitleSystemHelper.CastleTitleSystemHelper.returnTitleEffectsByType(__s11param0, __s11param2))).concat(__dep_export_CastleModel.CastleModel.researchData.getResearchEffectsByType(__s11param0, __s11param2))).concat(__dep_export_CastleModel.CastleModel.globalEffectData.getGlobalEffectsByType(__s11param0, __s11param2))).concat(__dep_export_CastleModel.CastleModel.subscriptionData.getSubscriptionEffectsByType(__s11param0, __s11param2))).concat(__dep_export_CastleModel.CastleModel.legendSkillData.getSceatSkillEffectsByType(__s11param0, __s11param2))).concat(__dep_export_CastleModel.CastleModel.userData.playerCrest.getEffectsByType(__s11param0, __s11param2));
    if (__dep_export_CastleModel.CastleModel.userData.isInAlliance && __dep_export_CastleModel.CastleModel.allianceData.myAllianceVO) {
      __s11local1 = __s11local1.concat(__dep_export_CastleModel.CastleModel.allianceData.myAllianceVO.getTotalAllianceBuffEffectsByType(__s11param0, __s11param2));
    }
    if (__s11param3) {
      for (var __s11local2 = 0; __s11local2 < __s11param3.length; __s11local2++) {
        var __s11local3 = __s11param3[__s11local2];
        if (__s11local3.ignoreCap) {
          __s11local1 = __s11local1.concat(__s11local3.getBonusVOsByType(__s11param0, __s11param2));
        } else {
          __s11local0 = __s11local0.concat(__s11local3.getBonusVOsByType(__s11param0, __s11param2));
        }
      }
    }
    var __s11local4 = CastleEffectsHelper.getTotalEffectValue(__s11local0) || new __s11param0.valueClass();
    var __s11local5 = CastleEffectsHelper.getTotalEffectValue(__s11local1, true) || new __s11param0.valueClass();
    __s11local4.add(__s11local5, null);
    return __s11local4;
  };
  CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea = function (__s20param0, __s20param1, __s20param2, __s20param3 = true, __s20param4 = null) {
    var __s20local0 = CastleEffectsHelper.getTotalEffectValue(__s20param0.getUniqueBoni(false, __s20param1, __s20param2, __s20param4, __s20param3));
    return __s20local0 || new __s20param1.valueClass();
  };
  CastleEffectsHelper.getTotalEffectValue = function (__s22param0, __s22param1 = false) {
    if (__s22param0.length == 0) {
      return null;
    }
    var __s22local0;
    var __s22local1 = new Map();
    if (__s22param0 != null) {
      for (var __s22local2 = 0, __s22local3 = __s22param0; __s22local2 < __s22local3.length; __s22local2++) {
        var __s22local4 = __s22local3[__s22local2];
        if (__s22local4) {
          var __s22local5 = __s22local4.capID;
          if (!__s22local1.get(__s22local5)) {
            __s22local1.set(__s22local5, new __s22local4.effect.effectType.type.valueClass());
          }
          __s22local0 = __s22local1.get(__s22local5);
          var __s22local6 = __s22param1 ? null : [__s22local4.maxValueStrength];
          __s22local0.add(__s22local4.effectValue, __s22local6);
        }
      }
    }
    var __s22local7 = new __s22param0[0].effect.effectType.type.valueClass();
    if (__s22local1 != null) {
      for (var __s22local8 = 0, __s22local9 = Array.from(__s22local1.values()); __s22local8 < __s22local9.length; __s22local8++) {
        var __s22local10 = __s22local9[__s22local8];
        if (__s22local10 !== undefined) {
          __s22local7.add(__s22local10, null);
        }
      }
    }
    return __s22local7;
  };
  CastleEffectsHelper.getUnitOnTheWallBonusForAreaType = function (__s34param0, __s34param1, __s34param2 = false) {
    return __dep_exact_f855840627e6e145.int(CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(__s34param0, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_DEFENSE_UNIT_AMOUNT_WALL, __s34param1).strength) + __dep_exact_f855840627e6e145.int(__s34param2 ? __dep_export_CastleModel.CastleModel.legendSkillData.getTotalValueOfLegendSkillEffect(__dep_export_CastleLegendSkillEffectsEnum.CastleLegendSkillEffectsEnum.ADDITIONAL_UNIT_AMOUNT_ON_WALL) : 0);
  };
  CastleEffectsHelper.getTotalLordLootCapacityBonusForArea = function (__s36param0, __s36param1, __s36param2 = false) {
    return __dep_exact_f855840627e6e145.int(CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(__s36param0, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_LOOT_CAPACITY, __s36param1).strength);
  };
  CastleEffectsHelper.getUnitsOnTheFlankBonusForAreaType = function (__s38param0, __s38param1, __s38param2 = false, __s38param3 = null) {
    var __s38local0 = __dep_exact_f855840627e6e145.int(__s38param2 ? __dep_export_CastleModel.CastleModel.legendSkillData.getTotalValueOfLegendSkillEffect(__dep_export_CastleLegendSkillEffectsEnum.CastleLegendSkillEffectsEnum.ADDITIONAL_UNIT_AMOUNT_ON_FLANK) : 0);
    return __dep_exact_f855840627e6e145.int(CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(__s38param0, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_ATTACK_UNIT_AMOUNT_FLANK, __s38param1.areaType, true, __s38param3).strength) + __s38local0;
  };
  CastleEffectsHelper.getUnitsOnTheFrontBonusForAreaType = function (__s40param0, __s40param1, __s40param2 = false, __s40param3 = null) {
    var __s40local0 = __dep_exact_f855840627e6e145.int(__s40param2 ? __dep_export_CastleModel.CastleModel.legendSkillData.getTotalValueOfLegendSkillEffect(__dep_export_CastleLegendSkillEffectsEnum.CastleLegendSkillEffectsEnum.ADDITIONAL_UNIT_AMOUNT_ON_FRONT) : 0);
    return __dep_exact_f855840627e6e145.int(CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(__s40param0, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_ATTACK_UNIT_AMOUNT_FRONT, __s40param1.areaType, true, __s40param3).strength) + __s40local0;
  };
  CastleEffectsHelper.getUnitsOnTheYardWaveBonusForAreaType = function (__s42param0, __s42param1, __s42param2 = null) {
    return __dep_exact_f855840627e6e145.int(CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(__s42param0, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_ATTACK_UNIT_AMOUNT_REINFORCEMENT_BONUS, __s42param1.areaType, true, __s42param2).strength);
  };
  CastleEffectsHelper.getUnitsOnTheYardWaveBoostForAreaType = function (__s44param0, __s44param1, __s44param2 = null) {
    var __s44local0 = __dep_exact_f855840627e6e145.int(CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(__s44param0, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_ATTACK_UNIT_AMOUNT_REINFORCEMENT_BOOST, __s44param1.areaType, true, __s44param2).strength);
    return __dep_exact_26a421b704832cff.EffectConst.boostToModifier(__s44local0);
  };
  CastleEffectsHelper.getTravelCostBonusForAreaType = function (__s46param0, __s46param1, __s46param2, __s46param3 = false) {
    var __s46local0 = 0;
    var __s46local1 = [];
    __s46local1.push(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_TRAVEL_COST_REDUCTION);
    switch (__s46param2) {
      case __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_ATTACK:
      case __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_COLLECTOR_ATTACK:
      case __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_DUNGEONATTACK:
        __s46local1.push(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_TRAVEL_COST_REDUCTION_PVP);
        break;
      case __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_SENDTROUPS:
        __s46local1.push(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_STATIONING_TRAVEL_COST_REDUCTION);
        break;
      case __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_SUPPORTDEFENSE:
        __s46local1.push(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_SUPPORT_TRAVEL_COST_REDUCTION);
    }
    if (__s46local1 != null) {
      for (var __s46local2 = 0, __s46local3 = __s46local1; __s46local2 < __s46local3.length; __s46local2++) {
        var __s46local4 = __s46local3[__s46local2];
        if (__s46local4 !== undefined) {
          __s46local0 += __dep_exact_f855840627e6e145.int(CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(__s46param0, __s46local4, __s46param1).strength);
        }
      }
    }
    return __s46local0;
  };
  CastleEffectsHelper.getFullAttackBonusForLordByFlankAndAreaType = function (__s53param0, __s53param1, __s53param2, __s53param3, __s53param4 = null) {
    var __s53local0 = 0;
    __s53local0 += CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(__s53param0, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_ATTACK_BONUS, __s53param1, true, __s53param4).strength;
    var __s53local1 = __s53param3 ? __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_MELEE_BONUS : __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_RANGE_BONUS;
    __s53local0 += CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(__s53param0, __s53local1, __s53param1, true, __s53param4).strength;
    var __s53local2 = __s53param3 ? __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_OFFENSIVE_MELEE_BONUS : __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_OFFENSIVE_RANGE_BONUS;
    return (__s53local0 += CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(__s53param0, __s53local2, __s53param1, true, __s53param4).strength) / 100;
  };
  CastleEffectsHelper.getFullDefenseBonusForLordByFlankAndAreaType = function (__s55param0, __s55param1, __s55param2, __s55param3) {
    var __s55local0 = 0;
    __s55local0 += CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(__s55param0, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_DEFENSE_BONUS, __s55param1).strength;
    var __s55local1 = __s55param3 ? __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_MELEE_BONUS : __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_RANGE_BONUS;
    __s55local0 += CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(__s55param0, __s55local1, __s55param1).strength;
    if (__s55param2 == __dep_export_ClientConstCastle.ClientConstCastle.FLANK_MIDDLE) {
      __s55local0 += CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(__s55param0, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_DEFENSE_BOOST_FRONT, __s55param1).strength;
    }
    if (__s55param2 == __dep_export_ClientConstCastle.ClientConstCastle.FLANK_LEFT || __s55param2 == __dep_export_ClientConstCastle.ClientConstCastle.FLANK_RIGHT) {
      __s55local0 += CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(__s55param0, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_DEFENSE_BOOST_FLANK, __s55param1).strength;
    }
    if (__s55param2 == __dep_export_ClientConstCastle.ClientConstCastle.FLANK_MIDDLE) {
      __s55local0 += CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(__s55param0, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_DEFENSE_BOOST_YARD, __s55param1).rawValues[0];
    }
    return __s55local0 / 100;
  };
  CastleEffectsHelper.getNameTextId = function (__s60param0) {
    switch (__s60param0) {
      case __dep_exact_26a421b704832cff.AllianceConst.TYPE_MEMBERS:
        return "dialog_alliance_member";
      case __dep_exact_26a421b704832cff.AllianceConst.TYPE_DEFENSE_SPEED_BOOST:
        return "dialog_alliance_defenseBoost";
      case __dep_exact_26a421b704832cff.AllianceConst.TYPE_MARKET_SPEED_BOOST:
        return "dialog_alliance_marketBoost";
      case __dep_exact_26a421b704832cff.AllianceConst.TYPE_DEPOSIT_BONUS:
        return "dialog_alliance_depositBonus";
      case __dep_exact_26a421b704832cff.AllianceConst.TYPE_MARAUDER_BONUS:
        return "dialog_alliance_permanentBoost_lootCapacity";
      case __dep_exact_26a421b704832cff.AllianceConst.TYPE_ATTACK_SPEED_BOOST:
        return "dialog_alliance_movementBoost";
      case __dep_exact_26a421b704832cff.AllianceConst.TYPE_TEMP_GLORY_BOOST:
        return "dialog_alliance_temporaryBoost_glory";
      case __dep_exact_26a421b704832cff.AllianceConst.TYPE_TEMP_DEFENSE_SPEED_BOOST:
        return "dialog_alliance_temporaryBoost_supportTravel";
      case __dep_exact_26a421b704832cff.AllianceConst.TYPE_TEMP_ATTACK_POWER_BOOST:
        return "dialog_alliance_temporaryBoost_attackPower";
      case __dep_exact_26a421b704832cff.AllianceConst.TYPE_TEMP_DEFENSE_POWER_BOOST:
        return "dialog_alliance_temporaryBoost_defencePower";
      case __dep_exact_26a421b704832cff.AllianceConst.TYPE_RAGE_POINT_BOOST:
        return "dialog_alliance_temporaryBoost_allianceRageBoost";
      case __dep_exact_26a421b704832cff.AllianceConst.TYPE_COOLDOWN_REDUCTION_KHAN:
        return "dialog_alliance_temporaryBoost_allianceCooldownReductionKhan";
      case __dep_exact_26a421b704832cff.AllianceConst.TYPE_COOLDOWN_REDUCTION_NOMADS:
        return "dialog_alliance_temporaryBoost_allianceCooldownReductionNomad";
      case __dep_exact_26a421b704832cff.AllianceConst.TYPE_ALIEN_ATTACK_BOOST:
        return "dialog_alliance_temporaryBoost_allianceAttackBoostAliens";
      case __dep_exact_26a421b704832cff.AllianceConst.TYPE_DAIMYO_ATTACK_BOOST:
        return "dialog_alliance_temporaryBoost_allianceAttackBoostDaimyo";
      case __dep_exact_26a421b704832cff.AllianceConst.TYPE_KHAN_DEFENSE_BOOST:
        return "dialog_alliance_temporaryBoost_allianceDefenseBoostKhan";
      case __dep_exact_26a421b704832cff.AllianceConst.TYPE_HEALING_SPEED_BOOST:
        return "dialog_alliance_temporaryBoost_healingSpeedIncreaseBoostPremium";
      case __dep_exact_26a421b704832cff.AllianceConst.TYPE_INFLUENCE_POINT_BOOST:
        return "dialog_alliance_temporaryBoost_BGCollectorBoost";
      case __dep_exact_26a421b704832cff.AllianceConst.TYPE_COOLDOWN_REDUCTION_SAMURAI_CAMP:
        return "dialog_alliance_temporaryBoost_allianceSamuraiCooldownReduction";
      case __dep_exact_26a421b704832cff.AllianceConst.TYPE_COOLDOWN_REDUCTION_DAIYMO:
        return "dialog_alliance_temporaryBoost_allianceDaimyoCooldownReduction";
      case __dep_export_AllianceRaidConst.AllianceRaidConst.BUFF_SERIES_RAID_BOSS_ATTACK_COMMON:
        return "dialog_alliance_temporaryBoost_TemporaryCommonAttackBonus";
      case __dep_export_AllianceRaidConst.AllianceRaidConst.BUFF_SERIES_RAID_BOSS_ATTACK_RARE:
        return "dialog_alliance_temporaryBoost_TemporaryRareAttackBonus";
      case __dep_export_AllianceRaidConst.AllianceRaidConst.BUFF_SERIES_RAID_BOSS_ATTACK_EPIC:
        return "dialog_alliance_temporaryBoost_TemporaryEpicAttackBonus";
      case __dep_export_AllianceRaidConst.AllianceRaidConst.BUFF_SERIES_RAID_BOSS_ATTACK_LEGENDARY:
        return "dialog_alliance_temporaryBoost_TemporaryLegendaryAttackBonus";
    }
    return null;
  };
  CastleEffectsHelper.isDefenseEffect = function (__s63param0) {
    switch (__s63param0) {
      case __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_FAME_DEFENSE_BONUS:
      case __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_LOOT_REDUCTION:
      case __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_PERCEPTION_BONUS:
      case __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_FIRE_BRIGADE_BOOST:
      case __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_WALL_BONUS:
      case __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_GATE_BONUS:
      case __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_MOAT_BONUS:
      case __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_MELEE_BONUS:
      case __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_RANGE_BONUS:
      case __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_NPC_DEFENSE_BONUS:
      case __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_DEFENSE_BONUS:
      case __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_DEFENSE_BOOST_YARD:
      case __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_HIDEOUT_CAPACITY:
      case __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_DEFENSE_UNIT_AMOUNT_WALL:
      case __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_DEFENSE_UNIT_AMOUNT_WALL_P_V_P:
      case __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_DEFENSE_UNIT_COUNT_WALL:
      case __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_DEFENSE_SUPPORT_UNITS:
      case __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_DEFENSE_BOOST_FRONT:
      case __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_DEFENSE_BOOST_FLANK:
      case __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_DEFENSE_UNIT_AMOUNT_YARD_BONUS:
      case __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_DEFENSE_UNIT_AMOUNT_YARD_BOOST:
        return true;
    }
    return false;
  };
  CastleEffectsHelper.isAttackEffect = function (__s66param0) {
    switch (__s66param0) {
      case __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_CONQUER_SPEED_BONUS:
      case __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_OCCUPATION_TIME_REDUCTION:
      case __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_FAME_OFFENSE_BONUS:
      case __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_SPEED_BONUS:
      case __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_LOOT_BONUS:
      case __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_STEALTH_BONUS:
      case __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_FIRE_BOOST:
      case __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_WALL_REDUCTION:
      case __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_GATE_REDUCTION:
      case __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_MOAT_REDUCTION:
      case __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_MAGIC_FIND_BONUS:
      case __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_OFFENSIVE_MELEE_BONUS:
      case __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_OFFENSIVE_RANGE_BONUS:
      case __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_SMASH_CHANCE:
      case __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_TRAVEL_COST_REDUCTION:
      case __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_COOLDOWN_REDUCTION:
      case __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_ATTACK_UNIT_AMOUNT_FLANK:
      case __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_ATTACK_BOOST_YARD:
      case __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_ATTACK_UNIT_AMOUNT_FRONT:
      case __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_ATTACK_BONUS:
      case __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_LOOT_CAPACITY:
      case __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_RETURN_TRAVEL_BOOST:
      case __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_TRAVEL_COST_REDUCTION_PVP:
      case __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_SPEED_BONUS_PVP:
      case __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_RETURN_TRAVEL_BOOST_PVP:
      case __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_ATTACK_SUPPORT_UNITS:
      case __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_ATTACK_BOOST_FRONT:
      case __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_ATTACK_BOOST_FLANK:
      case __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_COIN_LOOT_BOOST:
      case __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_LOOT_CAPACITY_BOOST:
      case __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_NOMAD_TABLET_BOOST:
      case __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_SAMURAI_TOKEN_BOOST:
      case __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_ATTACK_BONUS_UNIT:
      case __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_SPEED_BOOST_UNIT:
      case __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_LOOT_VALUE_BOOST_UNIT:
      case __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_FAME_BOOST_UNIT:
      case __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_ADDITIONAL_WAVE:
      case __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_ATTACK_UNIT_AMOUNT_REINFORCEMENT_BOOST:
      case __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_ATTACK_UNIT_AMOUNT_REINFORCEMENT_BONUS:
        return true;
    }
    return false;
  };
  return CastleEffectsHelper;
}();
exports.CastleEffectsHelper = __s0local0;
var __dep_export_CastleTitleSystemHelper = require("gge-module:export_CastleTitleSystemHelper");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __dep_export_CastleLegendSkillEffectsEnum = require("gge-module:export_CastleLegendSkillEffectsEnum");
var __dep_export_AllianceRaidConst = require("gge-module:export_AllianceRaidConst");
