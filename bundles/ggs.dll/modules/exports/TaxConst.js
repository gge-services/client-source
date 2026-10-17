// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 617
// Export: TaxConst; preserved source: modules/webpack/exports/AlchemistConst.js
// Original canonical SHA-256: 2191b914f78728d7dfa7974d2e53b4d3ce65f7850bd27ed0cb7ea4c86f964783
var __s0local84 = function () {
  function TaxConst() {}
  TaxConst.COLLECTOR_DURATION_$LI$ = function () {
    if (TaxConst.COLLECTOR_DURATION == null) {
      TaxConst.COLLECTOR_DURATION = [600, 1800, 5400, 10800, 21600, 43200, 86400];
    }
    return TaxConst.COLLECTOR_DURATION;
  };
  TaxConst.START_COST_C2_$LI$ = function () {
    if (TaxConst.START_COST_C2 == null) {
      TaxConst.START_COST_C2 = [0, 0, 0, 0, 0, 125, 300];
    }
    return TaxConst.START_COST_C2;
  };
  TaxConst.START_COST_C1_PERC_$LI$ = function () {
    if (TaxConst.START_COST_C1_PERC == null) {
      TaxConst.START_COST_C1_PERC = [0, 0.1, 0.1, 0.1, 0.1, 0, 0];
    }
    return TaxConst.START_COST_C1_PERC;
  };
  TaxConst.COLLECTOR_LOSS_$LI$ = function () {
    if (TaxConst.COLLECTOR_LOSS == null) {
      TaxConst.COLLECTOR_LOSS = [1, 0.66, 0.44, 0.33, 0.25, 0.3, 0.4];
    }
    return TaxConst.COLLECTOR_LOSS;
  };
  TaxConst.getCollectorC1Costs = function (__s1725param0, __s1725param1, __s1725param2, __s1725param3, __s1725param4, __s1725param5) {
    if (__s1725param0 >= 5 && __s1725param1 > 0) {
      return 0;
    }
    var __s1725local0 = TaxConst.START_COST_C1_PERC_$LI$()[__s1725param0];
    if ((__s1725param4 || __s1725param3) && __s1725param0 === 5 || __s1725param5 && __s1725param0 >= 5) {
      __s1725local0 = 0.1;
    }
    return Math.floor(TaxConst.getCollectorIncome(__s1725param0, __s1725param2) * __s1725local0) | 0;
  };
  TaxConst.getCollectorC2Costs = function (__s1729param0, __s1729param1, __s1729param2, __s1729param3, __s1729param4) {
    if (__s1729param0 === 5 && (__s1729param3 || __s1729param1 === __s0local62.PREMIUM_ACCOUNT_SILVER || __s1729param1 === __s0local62.PREMIUM_ACCOUNT_GOLD || __s1729param2)) {
      return 0;
    } else if (__s1729param0 !== 6 || !__s1729param4 && __s1729param1 !== __s0local62.PREMIUM_ACCOUNT_GOLD) {
      return TaxConst.START_COST_C2_$LI$()[__s1729param0];
    } else {
      return 0;
    }
  };
  TaxConst.getCollectorIncome = function (__s1734param0, __s1734param1) {
    var __s1734local0 = __s1734param1 * 2;
    return Math.round(TaxConst.COLLECTOR_LOSS_$LI$()[__s1734param0] * TaxConst.COLLECTOR_DURATION_$LI$()[__s1734param0] / 3600 * __s1734local0);
  };
  TaxConst.applyCollectionBoosts = function (__s1736param0, __s1736param1, __s1736param2, __s1736param3) {
    var __s1736local0 = 1;
    if (__s1736param1) {
      __s1736local0 += __s0local11.TAX_BRIBE_BOOST;
    }
    __s1736param0 *= __s1736local0 += __s1736param3 / 100;
    __s1736param0 *= __s1736param2;
    return Math.round(__s1736param0);
  };
  TaxConst.getCollectedMoney = function (__s1739param0, __s1739param1, __s1739param2, __s1739param3, __s1739param4, __s1739param5) {
    var __s1739local0;
    var __s1739local1 = TaxConst.COLLECTOR_DURATION_$LI$()[__s1739param0];
    __s1739local0 = __s1739param1 > 0 ? (__s1739local1 - __s1739param1) / (__s1739local1 * 1) * __s1739param2 : __s1739param2;
    return TaxConst.applyCollectionBoosts(__s1739local0, __s1739param3, __s1739param4, __s1739param5);
  };
  TaxConst.getCollectorC2CostsNoVip = function (__s1741param0, __s1741param1, __s1741param2) {
    var __s1741local0 = TaxConst.START_COST_C2_$LI$()[__s1741param0];
    if ((__s1741param0 === 5 || __s1741param0 === 6) && __s1741param1 > __s0local62.PREMIUM_ACCOUNT_BRONZE) {
      if (__s1741param0 === 5 || __s1741param1 === __s0local62.PREMIUM_ACCOUNT_GOLD) {
        __s1741local0 = 0;
      }
    }
    if (__s1741param2 && __s1741param0 === 5) {
      __s1741local0 = 0;
    }
    return __s1741local0;
  };
  return TaxConst;
}();
exports.TaxConst = __s0local84;
__s0local84.__class = "TaxConst";
__s0local84.COLLECTOR_LOSS_$LI$();
__s0local84.START_COST_C1_PERC_$LI$();
__s0local84.START_COST_C2_$LI$();
__s0local84.COLLECTOR_DURATION_$LI$();
