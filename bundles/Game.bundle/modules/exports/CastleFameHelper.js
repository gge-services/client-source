Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_3 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_4 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __dep_export_CastleLegendSkillEffectsEnum = require("gge-module:export_CastleLegendSkillEffectsEnum");
var __dep_export_PlayerHelper = require("gge-module:export_PlayerHelper");
var __dep_exact_26a421b704832cff_5 = require("gge-module:exact_26a421b704832cff");
var __s0local0 = function () {
  function CastleFameHelper() {}
  CastleFameHelper.canEarnHonorOrFame = function (__s5param0, __s5param1) {
    return CastleFameHelper.canEarnOrLoseHonor(__s5param0, __s5param1) || CastleFameHelper.canEarnFame(__s5param0, __s5param1);
  };
  CastleFameHelper.canEarnOrLoseHonor = function (__s7param0, __s7param1) {
    var __s7local0 = __dep_exact_f855840627e6e145.int(__s7param0.ownerInfo.playerID);
    var __s7local1 = __s7param0.ownerInfo != null;
    var __s7local2 = __s7param1 == __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_ATTACK || __s7param1 == __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_OUTPOSTATTACK;
    var __s7local3 = __s7param0.kingdomID == __dep_exact_26a421b704832cff_5.WorldIsland.KINGDOM_ID;
    var __s7local4 = __s7param0.areaType == __dep_exact_26a421b704832cff_4.WorldConst.AREA_TYPE_ALLIANCE_BATTLE_GROUND_TOWER;
    var __s7local5 = __dep_export_PlayerHelper.PlayerHelper.isNPCPlayer(__s7local0);
    return __s7local2 && __s7local1 && !__s7local5 && !__s7local3 && !__s7local4 && !CastleFameHelper.isFactionFight(__s7param0);
  };
  CastleFameHelper.canEarnFame = function (__s9param0, __s9param1) {
    var __s9local0 = __dep_exact_f855840627e6e145.int(CastleFameHelper.getUncappedEstimatedHonor(__s9param0, __s9param1));
    var __s9local1 = __dep_exact_81dacdf05bd32292.instanceOfClass(__s9param0, "AAlienInvasionMapobjectVO");
    var __s9local2 = __s9param0.kingdomID == __dep_exact_26a421b704832cff_5.WorldIsland.KINGDOM_ID;
    var __s9local3 = __dep_exact_f855840627e6e145.int(__s9param0.ownerInfo.playerID);
    var __s9local4 = __dep_export_PlayerHelper.PlayerHelper.isNPCPlayer(__s9local3);
    return __s9local0 >= 0 && CastleFameHelper.canEarnOrLoseHonor(__s9param0, __s9param1) || __s9local1 || (CastleFameHelper.isFactionFight(__s9param0) || __s9local2) && CastleFameHelper.isAnAttack(__s9param1) && !__s9local4;
  };
  CastleFameHelper.isFactionFight = function (__s11param0) {
    return __s11param0.kingdomID == __dep_exact_26a421b704832cff_3.FactionConst.KINGDOM_ID;
  };
  CastleFameHelper.getEstimatedHonor = function (__s13param0, __s13param1) {
    var __s13local0 = __dep_exact_f855840627e6e145.int(CastleFameHelper.getUncappedEstimatedHonor(__s13param0, __s13param1));
    if (__dep_export_CastleModel.CastleModel.userData.userHonor + __s13local0 < 0) {
      __s13local0 = __dep_exact_f855840627e6e145.int(-__dep_export_CastleModel.CastleModel.userData.userHonor);
    }
    return __s13local0;
  };
  CastleFameHelper.getUncappedEstimatedHonor = function (__s16param0, __s16param1) {
    if (!CastleFameHelper.canEarnOrLoseHonor(__s16param0, __s16param1)) {
      return 0;
    }
    var __s16local0 = 0;
    var __s16local1 = 1 + __dep_export_CastleModel.CastleModel.researchData.getResearchEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_HONOR_BONUS).strength / 100;
    switch (__s16param1) {
      case __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_SUPPORTDEFENSE:
      case __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_SENDTROUPS:
        __s16local0 = 0;
        break;
      default:
        if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s16param0, "AAlienInvasionMapobjectVO")) {
          __s16local0 = 0;
        } else {
          if ((__s16local0 = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff_1.CombatConst.getHonorChange(__dep_export_CastleModel.CastleModel.userData.userHonor, __s16param0.controllerWorldMapOwnerInfoVO.honor, __dep_export_CastleModel.CastleModel.userData.userLevel, __s16param0.controllerWorldMapOwnerInfoVO.playerLevel, true) * __s16local1)) > 0 && __dep_export_CastleModel.CastleModel.userData.isLegend && __s16param0.controllerWorldMapOwnerInfoVO.isLegend) {
            __s16local0 = __dep_exact_f855840627e6e145.int(__s16local0 * (1 + __dep_export_CastleModel.CastleModel.legendSkillData.getTotalValueOfLegendSkillEffect(__dep_export_CastleLegendSkillEffectsEnum.CastleLegendSkillEffectsEnum.HONOR_BONUS) / 100));
          }
          if (__s16param0.areaType == __dep_exact_26a421b704832cff_4.WorldConst.AREA_TYPE_CAPITAL && __dep_export_CastleModel.CastleModel.userData.isLegend && __s16param0.controllerWorldMapOwnerInfoVO.playerLevel < 51) {
            __s16local0 = Math.max(0, __s16local0);
          }
        }
    }
    return __s16local0;
  };
  CastleFameHelper.getEstimatedFameBonus = function (__s24param0, __s24param1) {
    if (!CastleFameHelper.canEarnFame(__s24param0, __s24param1)) {
      return 0;
    }
    var __s24local0 = 0;
    var __s24local1 = 0;
    __s24local1 = __dep_exact_81dacdf05bd32292.instanceOfClass(__s24param0, "AAlienInvasionMapobjectVO") ? __s24param0.dungeonLevel : __s24param0.controllerWorldMapOwnerInfoVO.playerLevel;
    if (__dep_export_CastleModel.CastleModel.userData.userLevel - __s24local1 > __dep_exact_26a421b704832cff_1.CombatConst.getMaxLevelDif2(__dep_export_CastleModel.CastleModel.userData.userLevel)) {
      __s24local0 = 0;
    } else {
      var __s24local2 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.userData.userHonor);
      __s24local0 = Math.round(__dep_exact_26a421b704832cff_1.CombatConst.getFameBonusForHonor(__s24local2) * 100);
    }
    return Math.round(__s24local0);
  };
  CastleFameHelper.isAnAttack = function (__s29param0) {
    var __s29local0 = false;
    switch (__s29param0) {
      case __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_ATTACK:
      case __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_CONQUERATTACK:
      case __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_DUNGEONATTACK:
      case __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_OUTPOSTATTACK:
      case __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_TREASUREATTACK:
      case __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_BOSSDUNGEONATTACK:
      case __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_VILLAGE_ATTACK:
      case __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_LANDMARK_ATTACK:
      case __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_ISLAND_ATTACK:
      case __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_COLLECTOR_ATTACK:
        __s29local0 = true;
    }
    return __s29local0;
  };
  CastleFameHelper.getFameBoosterBonus = function (__s32param0 = true, __s32param1 = true) {
    var __s32local0 = 0;
    var __s32local1 = 0;
    if (__s32param0) {
      var __s32local2 = CastleFameHelper.privateFameBooster.remainingTimeInSeconds > 0 ? CastleFameHelper.privateFameBooster.bonusPercentage : 0;
      var __s32local3 = CastleFameHelper.gloryBoosterEventVO ? CastleFameHelper.gloryBoosterEventVO.bonusPercentage : 0;
      __s32local0 = Math.max(__s32local2, __s32local3);
    }
    if (__s32param1) {
      __s32local1 = CastleFameHelper.personalFameBooster.remainingTimeInSeconds > 0 ? CastleFameHelper.personalFameBooster.bonusPercentage : 0;
    }
    return __s32local0 + __s32local1;
  };
  CastleFameHelper.isOfferBonusBetterThanEvent = function () {
    var __s36local0 = CastleFameHelper.privateFameBooster.remainingTimeInSeconds > 0 ? CastleFameHelper.privateFameBooster.bonusPercentage : 0;
    var __s36local1 = CastleFameHelper.gloryBoosterEventVO ? CastleFameHelper.gloryBoosterEventVO.bonusPercentage : 0;
    if (__s36local0 != __s36local1) {
      return __s36local0 > __s36local1;
    } else {
      return (CastleFameHelper.privateFameBooster ? CastleFameHelper.privateFameBooster.remainingTimeInSeconds : 0) > (CastleFameHelper.gloryBoosterEventVO ? CastleFameHelper.gloryBoosterEventVO.remainingEventTimeInSeconds : 0);
    }
  };
  Object.defineProperty(CastleFameHelper, "privateFameBooster", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.boostData.getBoosterByID(__dep_exact_26a421b704832cff.BoosterConst.GLORY_BOOST_ID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFameHelper, "personalFameBooster", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.boostData.getBoosterByID(__dep_exact_26a421b704832cff.BoosterConst.PERSONAL_GLORY_BOOST_ID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFameHelper, "gloryBoosterEventVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff_2.EventConst.EVENTTYPE_GLORY_BOOSTER);
    },
    enumerable: true,
    configurable: true
  });
  return CastleFameHelper;
}();
exports.CastleFameHelper = __s0local0;
