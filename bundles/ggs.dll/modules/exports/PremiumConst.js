// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 617
// Export: PremiumConst; preserved source: modules/webpack/exports/AlchemistConst.js
// Original canonical SHA-256: 2191b914f78728d7dfa7974d2e53b4d3ce65f7850bd27ed0cb7ea4c86f964783
var __s0local62 = function () {
  function PremiumConst() {}
  PremiumConst.FACTOR_C1_$LI$ = function () {
    if (PremiumConst.FACTOR_C1 == null) {
      PremiumConst.FACTOR_C1 = [0.9, 0.85, 0.8];
    }
    return PremiumConst.FACTOR_C1;
  };
  PremiumConst.FACTOR_C2_$LI$ = function () {
    if (PremiumConst.FACTOR_C2 == null) {
      PremiumConst.FACTOR_C2 = [0.95, 0.9, 0.9];
    }
    return PremiumConst.FACTOR_C2;
  };
  PremiumConst.FACTOR_BRIBE_TAX_C2_$LI$ = function () {
    if (PremiumConst.FACTOR_BRIBE_TAX_C2 == null) {
      PremiumConst.FACTOR_BRIBE_TAX_C2 = [0.2, 0.3, 0.5];
    }
    return PremiumConst.FACTOR_BRIBE_TAX_C2;
  };
  PremiumConst.FACTOR_DONATE_ALLI_$LI$ = function () {
    if (PremiumConst.FACTOR_DONATE_ALLI == null) {
      PremiumConst.FACTOR_DONATE_ALLI = [1.1, 1.15, 1.2];
    }
    return PremiumConst.FACTOR_DONATE_ALLI;
  };
  return PremiumConst;
}();
__s0local62.EVENT_SPECIALOFFER = 0;
__s0local62.EVENT_SPECIALINGAMEOFFER = 1;
__s0local62.EVENT_REGISTERBONUS = 2;
__s0local62.PREMIUM_ACCOUNT_GOLD = 2;
__s0local62.PREMIUM_ACCOUNT_SILVER = 1;
__s0local62.PREMIUM_ACCOUNT_BRONZE = 0;
__s0local62.PREMIUM_ACCOUNT_TYPE_0 = 50;
__s0local62.PREMIUM_ACCOUNT_TYPE_1 = 51;
__s0local62.PREMIUM_ACCOUNT_TYPE_2 = 52;
__s0local62.VIP_FLAG_OPTION_DEFAULT = true;
exports.PremiumConst = __s0local62;
__s0local62.__class = "PremiumConst";
__s0local62.FACTOR_DONATE_ALLI_$LI$();
__s0local62.FACTOR_BRIBE_TAX_C2_$LI$();
__s0local62.FACTOR_C2_$LI$();
__s0local62.FACTOR_C1_$LI$();
