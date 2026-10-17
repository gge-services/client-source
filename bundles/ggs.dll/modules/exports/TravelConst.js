// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 617
// Export: TravelConst; preserved source: modules/webpack/exports/AlchemistConst.js
// Original canonical SHA-256: 2191b914f78728d7dfa7974d2e53b4d3ce65f7850bd27ed0cb7ea4c86f964783
var __s0local92 = function () {
  function TravelConst() {}
  TravelConst.BASIC_FIELD_TRAVEL_TIME_$LI$ = function () {
    if (TravelConst.BASIC_FIELD_TRAVEL_TIME == null) {
      TravelConst.BASIC_FIELD_TRAVEL_TIME = 600;
    }
    return TravelConst.BASIC_FIELD_TRAVEL_TIME;
  };
  TravelConst.MAX_FALLBACK_TIME_$LI$ = function () {
    if (TravelConst.MAX_FALLBACK_TIME == null) {
      TravelConst.MAX_FALLBACK_TIME = 600;
    }
    return TravelConst.MAX_FALLBACK_TIME;
  };
  TravelConst.MAX_SLOWDOWN_DURATION_IN_SECONDS_$LI$ = function () {
    if (TravelConst.MAX_SLOWDOWN_DURATION_IN_SECONDS == null) {
      TravelConst.MAX_SLOWDOWN_DURATION_IN_SECONDS = 43200;
    }
    return TravelConst.MAX_SLOWDOWN_DURATION_IN_SECONDS;
  };
  TravelConst.PLAGUE_TRAVEL_TIME_$LI$ = function () {
    if (TravelConst.PLAGUE_TRAVEL_TIME == null) {
      TravelConst.PLAGUE_TRAVEL_TIME = 600;
    }
    return TravelConst.PLAGUE_TRAVEL_TIME;
  };
  TravelConst.getPlagueTravelTime = function (__s1802param0) {
    return TravelConst.getSpecialTravelTime(__s1802param0, TravelConst.PLAGUE_TRAVEL_TIME_$LI$());
  };
  TravelConst.getSpecialTravelTime = function (__s1804param0, __s1804param1) {
    var __s1804local0 = __s1804param1;
    if (__s1804param0) {
      __s1804local0 = TravelConst.TRAVEL_BOOST_CHEAT;
    }
    return __s1804local0;
  };
  TravelConst.getArmySightRadius = function (__s1807param0) {
    return Math.max(Math.pow(__s1807param0, 0.4) * 0.6, TravelConst.DEFAULT_SIGHT_RADIUS);
  };
  TravelConst.getSupportDurationCostC2 = function (__s1809param0, __s1809param1, __s1809param2, __s1809param3) {
    var __s1809local0 = TravelConst.DEFENSE_SUPPORT_DURATION_HOURS_FREE;
    if (__s1809param2 || __s1809param3) {
      __s1809local0 = TravelConst.DEFENSE_SUPPORT_DURATION_HOURS_FREE_CAPITAL_METROPOL;
    } else if (__s1809param1) {
      __s1809local0 = TravelConst.DEFENSE_SUPPORT_DURATION_HOURS_FREE_OCCUPIED;
    }
    return Math.max(0, (__s1809param0 - __s1809local0) * TravelConst.DEFENSE_SUPPORT_DURATION_HOURLY_C2_COST);
  };
  TravelConst.getTravelCostC1 = function (__s1813param0, __s1813param1, __s1813param2, __s1813param3) {
    var __s1813local0 = (100 - __s1813param2) * (100 - __s1813param3) / 10000;
    return Math.max(0, Math.ceil(__s1813local0 * 0.6 * (__s1813param1 * Math.log(__s1813param0 + 1) / Math.log(2.3)))) | 0;
  };
  TravelConst.getAttackTravelCostC1 = function (__s1815param0, __s1815param1, __s1815param2, __s1815param3, __s1815param4, __s1815param5, __s1815param6) {
    var __s1815local0 = TravelConst.getTravelCostC1(__s1815param0, __s1815param1, __s1815param2, __s1815param3);
    if (__s1815param4 <= __s1815param5) {
      return __s1815local0;
    }
    var __s1815local1 = TravelConst.getTravelCostC1(__s1815param0, __s1815param1, 0, 0);
    return Math.min((Math.exp(__s1815param6 * (__s1815param4 - __s1815param5)) - 1) * __s1815local1 + __s1815local0, 2147483647) | 0;
  };
  TravelConst.getRedeployTravelCostC1 = function (__s1818param0, __s1818param1, __s1818param2, __s1818param3) {
    return TravelConst.getTravelCostC1(__s1818param0, __s1818param1, __s1818param2, __s1818param3) / 2 | 0;
  };
  TravelConst.getTravelBoostCostC2 = function (__s1820param0) {
    return Math.ceil(Math.pow(__s1820param0, 0.5) * 179) | 0;
  };
  TravelConst.getTravelTime = function (__s1822param0, __s1822param1, __s1822param2, __s1822param3, __s1822param4) {
    return Math.floor(TravelConst.getTravelTimeAsFloat(__s1822param0, __s1822param1, __s1822param2, __s1822param3, __s1822param4)) | 0;
  };
  TravelConst.getTravelTimeWithTitle = function (__s1824param0, __s1824param1, __s1824param2, __s1824param3, __s1824param4, __s1824param5) {
    return Math.floor(TravelConst.getTravelTimeAsFloat(__s1824param0, __s1824param1, __s1824param2, __s1824param3 + __s1824param4, __s1824param5)) | 0;
  };
  TravelConst.getTravelTimeAsFloat = function (__s1826param0, __s1826param1, __s1826param2, __s1826param3, __s1826param4) {
    var __s1826local0 = __s1826param3 / 100;
    var __s1826local1 = __s1826param0 / 10 / TravelConst.BASIC_FIELD_TRAVEL_TIME_$LI$() * (__s1826param2 + __s1826local0);
    if (__s1826param4) {
      return TravelConst.TRAVEL_BOOST_CHEAT;
    } else {
      return __s1826param1 / __s1826local1;
    }
  };
  TravelConst.getHorseCostC1 = function (__s1830param0, __s1830param1, __s1830param2) {
    return __s1830param2 * (Math.ceil(__s1830param1 * Math.log(__s1830param0 + 1) / Math.log(2.3) * 0.2) | 0);
  };
  TravelConst.getHorseCostC2 = function (__s1832param0, __s1832param1, __s1832param2) {
    var __s1832local0 = (Math.sqrt(__s1832param0 + 60) * -25 * Math.pow(1.5, Math.pow(__s1832param0 + 60, 2) * -0.0002) + 145) * 1.5 * (1 + __s1832param1 / 1100) | 0;
    return Math.round(Math.max(1, __s1832local0) * __s1832param2);
  };
  TravelConst.getTravelTimeWithHorseAndWithoutLowLevelBoost = function (__s1834param0, __s1834param1, __s1834param2, __s1834param3, __s1834param4, __s1834param5, __s1834param6) {
    return TravelConst.getTravelTimeWithHorse(__s1834param0, __s1834param1, __s1834param2, __s1834param3, __s1834param4, __s1834param5, __s1834param6);
  };
  TravelConst.getTravelTimeWithHorse = function (__s1836param0, __s1836param1, __s1836param2, __s1836param3, __s1836param4, __s1836param5, __s1836param6) {
    if (__s1836param6) {
      return TravelConst.TRAVEL_BOOST_CHEAT;
    }
    var __s1836local0;
    var __s1836local1 = __s1836param0 / 10 / TravelConst.BASIC_FIELD_TRAVEL_TIME_$LI$() * (__s1836param2 + __s1836param4 / 100);
    if (__s1836param1 < TravelConst.LOW_DISTANCE_BOOST_FIELDS) {
      __s1836local0 = 1 + __s1836param3 / 100 / TravelConst.HORSE_BOOST_FIELDS * 60 * (Math.log(__s1836param5 / 2 + 1) / Math.log(8));
    } else if (__s1836param3 > 0) {
      __s1836local0 = 1 + __s1836param3 / 100 / TravelConst.HORSE_BOOST_FIELDS * (__s1836param5 - 10);
      __s1836param1 -= 10;
    } else {
      __s1836local0 = 1 + __s1836param3 / 100 / TravelConst.HORSE_BOOST_FIELDS * __s1836param5;
    }
    var __s1836local2 = __s1836param1 / (__s1836local1 *= __s1836local0);
    return Math.floor(__s1836local2) | 0;
  };
  TravelConst.getInstantSpyHorseTravelTime = function (__s1842param0) {
    return Math.floor(Math.log(__s1842param0) / Math.log(10) + 1) | 0;
  };
  TravelConst.getTravelTimeWithTitleAndHorse = function (__s1844param0, __s1844param1, __s1844param2, __s1844param3, __s1844param4, __s1844param5, __s1844param6, __s1844param7, __s1844param8, __s1844param9) {
    return TravelConst.getTravelTimeWithHorse(__s1844param0, __s1844param1, __s1844param2 + __s1844param9, __s1844param3, __s1844param4 + __s1844param6 + __s1844param7, __s1844param5, __s1844param8);
  };
  TravelConst.calculateSightDistance = function (__s1846param0, __s1846param1, __s1846param2, __s1846param3, __s1846param4, __s1846param5, __s1846param6) {
    var __s1846local0 = __s1846param5 - __s1846param3;
    var __s1846local1 = __s1846param6 - __s1846param4;
    if (__s1846local0 === 0 && __s1846local1 === 0) {
      return NaN;
    }
    var __s1846local2 = __s1846param3 - __s1846param1;
    var __s1846local3 = __s1846param4 - __s1846param2;
    var __s1846local4 = __s1846local0 * __s1846local0 + __s1846local1 * __s1846local1;
    var __s1846local5 = (__s1846local0 * 2 * __s1846local2 + __s1846local1 * 2 * __s1846local3) / __s1846local4;
    var __s1846local6 = __s1846local5 * __s1846local5 / 4 - (__s1846local2 * __s1846local2 + __s1846local3 * __s1846local3 - __s1846param0 * __s1846param0) / __s1846local4;
    if (__s1846local6 < 0) {
      return NaN;
    }
    var __s1846local7 = -__s1846local5 / 2 - Math.sqrt(__s1846local6);
    var __s1846local8 = -__s1846local5 / 2 + Math.sqrt(__s1846local6);
    if (__s1846local7 < 0 && __s1846local8 < 0) {
      return NaN;
    }
    if (__s1846local7 > 1 && __s1846local8 > 1) {
      return NaN;
    }
    var __s1846local9 = Math.max(0, Math.min(__s1846local7, __s1846local8));
    return Math.sqrt(__s1846local9 * __s1846local0 * __s1846local9 * __s1846local0 + __s1846local9 * __s1846local1 * __s1846local9 * __s1846local1);
  };
  TravelConst.calculateLowLevelBoost = function (__s1852param0, __s1852param1) {
    if (__s1852param1 || __s1852param0 >= TravelConst.MAX_LEVEL_FOR_LOW_LEVEL_TRAVEL_BOOST) {
      return 0;
    } else {
      return (Math.max(0, __s1852param0 * -0.1667 + 4.167) * 100 | 0) / 100;
    }
  };
  return TravelConst;
}();
__s0local92.GUESS_SIZE_PRECISION = 3;
__s0local92.DEFAULT_SIGHT_RADIUS = 6;
__s0local92.INNER_CIRCLE_DIVISOR = 2;
__s0local92.TRAVEL_PREMIUM_COMMANDER_COSTS_C2 = 125;
__s0local92.KINGDOM_TOOL_TRAVEL_COST_C1 = 100;
__s0local92.TRAVEL_BOOST_TUTORIAL = 20;
__s0local92.BARON_SPEED = 2;
__s0local92.CAPITAL_CONQUER_SPEED = 5;
__s0local92.CAPITAL_CONQUER_MIN_ATTACK_DISTANCE = 6;
__s0local92.CAPITAL_CONQUER_MAX_ATTACK_DISTANCE = 144;
__s0local92.CAPITAL_CONQUER_MIN_BIG_SIGHT_RADIUS = 30;
__s0local92.METROPOL_CONQUER_SPEED = 5;
__s0local92.METROPOL_CONQUER_MIN_ATTACK_DISTANCE = 6;
__s0local92.METROPOL_CONQUER_MAX_ATTACK_DISTANCE = 144;
__s0local92.METROPOL_CONQUER_MIN_BIG_SIGHT_RADIUS = 30;
__s0local92.DEFENSE_SUPPORT_DURATION_HOURS_MAX = 99;
__s0local92.DEFENSE_SUPPORT_DURATION_HOURS_FREE = 12;
__s0local92.DEFENSE_SUPPORT_DURATION_HOURS_FREE_OCCUPIED = 24;
__s0local92.DEFENSE_SUPPORT_DURATION_HOURS_FREE_CAPITAL_METROPOL = 72;
__s0local92.DEFENSE_SUPPORT_DURATION_HOURLY_C2_COST = 275;
__s0local92.SLOWDOWN_C2_COSTS = 200;
__s0local92.TRAVEL_BOOST_CHEAT = 5;
__s0local92.HORSE_BOOST_FIELDS = 10;
__s0local92.LOW_DISTANCE_BOOST_FIELDS = 100;
__s0local92.ALIEN_TRAVEL_DISTANCE = 50;
__s0local92.NOMAD_TRAVEL_DISTANCE = 2;
__s0local92.SAMURAI_TRAVEL_DISTANCE = 2;
__s0local92.FACTION_TRAVEL_DISTANCE = 5;
__s0local92.ALLIANCE_INVASION_CAMP_TRAVEL_DISTANCE = 2;
__s0local92.COLLECTOR_TRAVEL_DISTANCE = 50;
__s0local92.TEMPSERVER_RANKSWAP_TRAVEL_DISTANCE = 25.2;
__s0local92.DAIMYO_CASTLE_TRAVEL_DISTANCE = 2;
__s0local92.DAIMYO_TOWNSHIP_TRAVEL_DISTANCE = 2;
__s0local92.DAIMYO_TAUNT_TRAVEL_DISTANCE = 2;
__s0local92.ALLIANCE_BATTLE_GROUND_RESOURCE_TOWER_DISTANCE = 10;
__s0local92.ALLIANCE_BATTLE_GROUND_TOWER_DISTANCE = 25;
__s0local92.WOLFKING_TRAVEL_DISTANCE = 1;
__s0local92.WOLFKING_TAUNT_TRAVEL_DISTANCE = 0.5;
__s0local92.ALLIANCE_RAID_PORTAL_TRAVEL_DISTANCE = 50;
__s0local92.MAX_TOOL_SLOTS = 9;
__s0local92.MAX_TOOLS_PER_SLOT = 99999;
__s0local92.TESTSERVER_DEFENSE_WAIT_DIVISOR = 4;
__s0local92.MAX_KINGDOM_GOODS_MOVEMENTS = 1;
__s0local92.MAX_KINGDOM_ARMY_MOVEMENTS = 1;
__s0local92.COMMANDER_PREMIUM = -14;
__s0local92.COMMANDER_DUNGEON = -15;
__s0local92.WOLFKING_COMMANDER = -213;
__s0local92.COMMANDER_BOSS_DUNGEON = -45;
__s0local92.COMMANDER_TREASURE = -12;
__s0local92.MAX_LEVEL_FOR_LOW_LEVEL_TRAVEL_BOOST = 25;
exports.TravelConst = __s0local92;
__s0local92.__class = "TravelConst";
__s0local92.PLAGUE_TRAVEL_TIME_$LI$();
__s0local92.MAX_SLOWDOWN_DURATION_IN_SECONDS_$LI$();
__s0local92.MAX_FALLBACK_TIME_$LI$();
__s0local92.BASIC_FIELD_TRAVEL_TIME_$LI$();
