Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CrestVO = require("gge-module:export_CrestVO");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __s0local0 = function () {
  function AllianceBattlegroundAlliancePerformanceVO() {
    this.playerID = 0;
    this.playerLevel = 0;
    this.conquerPoints = 0;
    this.attackPoints = 0;
    this.influenceAlliancePoints = 0;
    this.stats_influenceCityStates = 0;
    this.stats_influenceEnemyCastles = 0;
    this.stats_influenceEnemyCapitals = 0;
    this.currentInfluencePoints = 0;
    this.tower_collectedFromTowers = 0;
    this.tower_towersAttack = 0;
    this.tower_troopsSend = 0;
    this.tower_castleDefences = 0;
    this.tower_purchasedBuff = 0;
    this.tower_activatesBuff = 0;
    this.tower_towerDefended = 0;
  }
  AllianceBattlegroundAlliancePerformanceVO.prototype.parseData = function (__s5param0) {
    this.playerID = __dep_exact_f855840627e6e145.int(__s5param0.PID);
    this.playerName = __s5param0.NOM;
    this.playerLevel = __dep_exact_f855840627e6e145.int(__s5param0.L);
    this.currentInfluencePoints = __dep_exact_f855840627e6e145.int(__s5param0.AMT);
    for (var __s5local0 = 0, __s5local1 = __s5param0.PST; __s5local0 < __s5local1.length; __s5local0++) {
      var __s5local2 = __s5local1[__s5local0];
      if (__s5local2 !== undefined) {
        switch (__s5local2.PSI) {
          case __dep_exact_26a421b704832cff.StatisticsConst.CONTRIBUTION_TO_ALLIANCE_INFLUENCE:
            this.influenceAlliancePoints = __dep_exact_f855840627e6e145.int(__s5local2.AMT);
            break;
          case __dep_exact_26a421b704832cff.StatisticsConst.CITY_STATES_CONQUERED:
            this.conquerPoints = __dep_exact_f855840627e6e145.int(__s5local2.AMT);
            break;
          case __dep_exact_26a421b704832cff.StatisticsConst.CAPITALS_ATTACKED:
            this.attackPoints = __dep_exact_f855840627e6e145.int(__s5local2.AMT);
            break;
          case __dep_exact_26a421b704832cff.StatisticsConst.INFLUENCE_FROM_CITY_STATES:
            this.stats_influenceCityStates = __dep_exact_f855840627e6e145.int(__s5local2.AMT);
            break;
          case __dep_exact_26a421b704832cff.StatisticsConst.INFLUENCE_FROM_ENEMY_CASTLES:
            this.stats_influenceEnemyCastles = __dep_exact_f855840627e6e145.int(__s5local2.AMT);
            break;
          case __dep_exact_26a421b704832cff.StatisticsConst.INFLUENCE_FROM_ENEMY_CAPITALS:
            this.stats_influenceEnemyCapitals = __dep_exact_f855840627e6e145.int(__s5local2.AMT);
            break;
          case __dep_exact_26a421b704832cff.StatisticsConst.CONTRIBUTION_TO_ALLIANCE_TOWER_POINTS:
            this.tower_collectedFromTowers = __dep_exact_f855840627e6e145.int(__s5local2.AMT);
            break;
          case __dep_exact_26a421b704832cff.StatisticsConst.SUPPORT_TROOPS_SENT_TO_ALLIANCE_TOWERS:
            this.tower_troopsSend = __dep_exact_f855840627e6e145.int(__s5local2.AMT);
            break;
          case __dep_exact_26a421b704832cff.StatisticsConst.ALLIANCE_TOWERS_DEFEATED:
            this.tower_towersAttack = __dep_exact_f855840627e6e145.int(__s5local2.AMT);
            break;
          case __dep_exact_26a421b704832cff.StatisticsConst.ALLIANCE_CASTLES_DEFENDED:
            this.tower_castleDefences = __dep_exact_f855840627e6e145.int(__s5local2.AMT);
            break;
          case __dep_exact_26a421b704832cff.StatisticsConst.TOWER_EFFECT_BUFFS_PURCHASED:
            this.tower_purchasedBuff = __dep_exact_f855840627e6e145.int(__s5local2.AMT);
            break;
          case __dep_exact_26a421b704832cff.StatisticsConst.TOWER_EFFECT_BUFFS_ACTIVATED:
            this.tower_activatesBuff = __dep_exact_f855840627e6e145.int(__s5local2.AMT);
            break;
          case __dep_exact_26a421b704832cff.StatisticsConst.ALLIANCE_TOWERS_DEFENDED:
            this.tower_towerDefended = __dep_exact_f855840627e6e145.int(__s5local2.AMT);
        }
      }
    }
    this.crestVO = new __dep_export_CrestVO.CrestVO();
    this.crestVO.loadFromParamObject(__s5param0.E);
  };
  AllianceBattlegroundAlliancePerformanceVO.sortByConquerPoints = function (__s11param0, __s11param1) {
    return __s11param1.conquerPoints - __s11param0.conquerPoints;
  };
  AllianceBattlegroundAlliancePerformanceVO.sortByAttackPoints = function (__s13param0, __s13param1) {
    return __s13param1.attackPoints - __s13param0.attackPoints;
  };
  AllianceBattlegroundAlliancePerformanceVO.sortByInfluenceAlliancePoints = function (__s15param0, __s15param1) {
    return __s15param1.influenceAlliancePoints - __s15param0.influenceAlliancePoints;
  };
  AllianceBattlegroundAlliancePerformanceVO.sortByAllianceTowerPoints = function (__s17param0, __s17param1) {
    return __s17param1.tower_collectedFromTowers - __s17param0.tower_collectedFromTowers;
  };
  AllianceBattlegroundAlliancePerformanceVO.sortByTowersDefeated = function (__s19param0, __s19param1) {
    return __s19param1.tower_towersAttack - __s19param0.tower_towersAttack;
  };
  AllianceBattlegroundAlliancePerformanceVO.sortByTowerTroopsSend = function (__s21param0, __s21param1) {
    return __s21param1.tower_troopsSend - __s21param0.tower_troopsSend;
  };
  return AllianceBattlegroundAlliancePerformanceVO;
}();
exports.AllianceBattlegroundAlliancePerformanceVO = __s0local0;
