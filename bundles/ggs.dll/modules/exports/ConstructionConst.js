// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 617
// Export: ConstructionConst; preserved source: modules/webpack/exports/AlchemistConst.js
// Original canonical SHA-256: 2191b914f78728d7dfa7974d2e53b4d3ce65f7850bd27ed0cb7ea4c86f964783
var __s0local17 = function () {
  function ConstructionConst() {}
  ConstructionConst.UNLOCK_DURATION_$LI$ = function () {
    if (ConstructionConst.UNLOCK_DURATION == null) {
      ConstructionConst.UNLOCK_DURATION = 604800;
    }
    return ConstructionConst.UNLOCK_DURATION;
  };
  ConstructionConst.FREE_SKIP_TIME_$LI$ = function () {
    if (ConstructionConst.FREE_SKIP_TIME == null) {
      ConstructionConst.FREE_SKIP_TIME = 240;
    }
    return ConstructionConst.FREE_SKIP_TIME;
  };
  ConstructionConst.getFastCompleteCostC2 = function (__s411param0, __s411param1) {
    return Math.ceil(__s411param0 * 1 / 60 * __s411param1) | 0;
  };
  ConstructionConst.getInstantCostC2PerMinuteFor = function (__s413param0) {
    var __s413local0 = ConstructionConst.INSTANT_COST_C2_PER_MINUTE;
    if (__s413param0 >= 30) {
      return __s413local0;
    } else {
      __s413local0 *= ConstructionConst.SKIP_COST_FACTOR;
      if (__s413param0 <= 25) {
        return __s413local0;
      } else {
        return (2 - __s413local0) / 5 * (__s413param0 - 25) + __s413local0;
      }
    }
  };
  ConstructionConst.getRepairAllCostsC2 = function (__s419param0) {
    return ConstructionConst.getRepairAllCostsC2WithDiscount(__s419param0, 0);
  };
  ConstructionConst.getRepairAllCostsC2WithDiscount = function (__s421param0, __s421param1) {
    if (__s421param1 >= 100) {
      return 0;
    }
    var __s421local0 = __s421param0 / 60 | 0;
    if (__s421local0 === 1) {
      return 42;
    } else {
      return Math.min(ConstructionConst.MAX_REPAIR_ALL_COST, __s421local0 * ConstructionConst.INSTANT_REPAIR_ALL_COST_C2_PER_MINUTE * Math.max(1, 1 / (Math.log(__s421local0) / Math.log(5)) * 2 + 0.335) * (100 - __s421param1) / 100 | 0);
    }
  };
  ConstructionConst.getRepairCost = function (__s426param0, __s426param1) {
    return Math.ceil(__s426param0 * __s426param1 * ConstructionConst.BUILT_TO_REPAIR_TIME_FACTOR) | 0;
  };
  ConstructionConst.getRefundPrice = function (__s428param0) {
    return __s428param0 * ConstructionConst.SELL_BONUS_FROM_BUY_COSTS_FACTOR | 0;
  };
  ConstructionConst.getDamageFactor = function (__s430param0) {
    if (__s430param0 < 50) {
      return 0.5;
    } else {
      return __s430param0 / ConstructionConst.MAX_HP;
    }
  };
  ConstructionConst.getRepairDuration = function (__s434param0, __s434param1) {
    return Math.floor(__s434param0 * ConstructionConst.BUILT_TO_REPAIR_TIME_FACTOR * ((ConstructionConst.MAX_HP - __s434param1) / 100)) | 0;
  };
  ConstructionConst.getExpandLimitForC2 = function (__s436param0, __s436param1, __s436param2) {
    if (__s436param1 === __s0local30.EVENTCAMP_AREA_ID || __s436param2 === __s0local32.KINGDOM_ID) {
      return ConstructionConst.MAX_EXPANSION_LEVEL;
    } else if (__s436param0 < __s0local94.TUTORIAL_END_LEVEL) {
      return 0;
    } else if (__s436param0 < 13) {
      return __s436param0 - 1;
    } else if (__s436param0 < 28) {
      return Math.ceil(6 + (__s436param0 + 1) / 3) | 0;
    } else {
      return ConstructionConst.MAX_EXPANSION_LEVEL;
    }
  };
  ConstructionConst.getExpandLimitForResourcesShortTutorial = function (__s443param0, __s443param1, __s443param2) {
    if (__s443param1 === __s0local30.EVENTCAMP_AREA_ID || __s443param2 === __s0local32.KINGDOM_ID) {
      return ConstructionConst.MAX_EXPANSION_LEVEL;
    } else if (__s443param0 < 3) {
      return __s443param0;
    } else if (__s443param0 < 6) {
      return __s443param0 - 1;
    } else if (__s443param0 < 13) {
      return Math.ceil(2 + __s443param0 / 3) | 0;
    } else if (__s443param0 < 22) {
      return Math.ceil(__s443param0 / 2 - 0.5) | 0;
    } else if (__s443param0 < 46) {
      return Math.ceil((__s443param0 - 1) / 4 + 4) | 0;
    } else {
      return ConstructionConst.MAX_EXPANSION_LEVEL;
    }
  };
  ConstructionConst.getExpandLevelForResourcesShortTutorial = function (__s452param0) {
    if (__s452param0 < 3) {
      return __s452param0;
    } else if (__s452param0 < 5) {
      return __s452param0 + 1;
    } else if (__s452param0 < 7) {
      return __s452param0 * 3 - 8;
    } else if (__s452param0 < 11) {
      return __s452param0 * 2;
    } else if (__s452param0 < 17) {
      return __s452param0 * 4 - 18;
    } else {
      return 0;
    }
  };
  ConstructionConst.getExpandLimitForResources = function (__s460param0, __s460param1, __s460param2) {
    if (__s460param1 === __s0local30.EVENTCAMP_AREA_ID || __s460param2 === __s0local32.KINGDOM_ID) {
      return ConstructionConst.MAX_EXPANSION_LEVEL;
    } else if (__s460param0 === 1) {
      return 1;
    } else if (__s460param0 === 2) {
      return 2;
    } else if (__s460param0 < 6) {
      return __s460param0 - 1;
    } else if (__s460param0 < 13) {
      return Math.ceil(2 + __s460param0 / 3) | 0;
    } else if (__s460param0 < 22) {
      return Math.ceil(__s460param0 / 2 - 0.5) | 0;
    } else if (__s460param0 < 46) {
      return Math.ceil((__s460param0 - 1) / 4 + 4) | 0;
    } else {
      return ConstructionConst.MAX_EXPANSION_LEVEL;
    }
  };
  ConstructionConst.getExpandLevelForResources = function (__s470param0) {
    if (__s470param0 < 5) {
      return __s470param0 + 1;
    } else if (__s470param0 < 7) {
      return __s470param0 * 3 - 8;
    } else if (__s470param0 < 11) {
      return __s470param0 * 2;
    } else if (__s470param0 < 17) {
      return __s470param0 * 4 - 18;
    } else {
      return 0;
    }
  };
  ConstructionConst.getExpandLevelForC2 = function (__s477param0) {
    if (__s477param0 < 4) {
      return __s0local94.TUTORIAL_END_LEVEL;
    } else if (__s477param0 < 12) {
      return __s477param0 + 1;
    } else if (__s477param0 < 17) {
      return (__s477param0 - 7) * 3;
    } else {
      return 0;
    }
  };
  ConstructionConst.getSkipCostForUnits = function (__s483param0, __s483param1) {
    return __s483param0 * __s483param1 | 0;
  };
  return ConstructionConst;
}();
__s0local17.MAX_SLOTS = 4;
__s0local17.MAX_QUEUE_SLOTS = 2;
__s0local17.MAX_SIMULTANEOUS_SLOTS = 2;
__s0local17.SLOTSTATEUNLOCKED = -1;
__s0local17.SLOTSTATELOCKED = -2;
__s0local17.BUILT_TO_DISASSEMBLE_TIME_FACTOR = 0.5;
__s0local17.BUILT_TO_REPAIR_TIME_FACTOR = 0.5;
__s0local17.MAX_HP = 100;
__s0local17.MIN_HP = 0;
__s0local17.UPGRADE_RECRUITSPEED_BOOST = 5;
__s0local17.INSTANT_COST_C2_PER_MINUTE = 2;
__s0local17.INSTANT_REPAIR_ALL_COST_C2_PER_MINUTE = 2;
__s0local17.UNLOCK_C2 = 625;
__s0local17.PREMIUM_FACTOR_REPAIR_ALL = 0.5;
__s0local17.RUBBLE_WOD_ID = 250;
__s0local17.MAX_REPAIR_ALL_COST = 10000;
__s0local17.DAMAGE_TYPE_FIRE = 0;
__s0local17.DAMAGE_TYPE_PLAGUE = 1;
__s0local17.SELL_BONUS_FROM_BUY_COSTS_FACTOR = 0.25;
__s0local17.SKIP_COST_FACTOR = 2;
__s0local17.MAX_EXPANSION_LEVEL = 19;
exports.ConstructionConst = __s0local17;
__s0local17.__class = "ConstructionConst";
__s0local17.FREE_SKIP_TIME_$LI$();
__s0local17.UNLOCK_DURATION_$LI$();
