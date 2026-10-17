// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 617
// Export: WishingWellConst; preserved source: modules/webpack/exports/AlchemistConst.js
// Original canonical SHA-256: 2191b914f78728d7dfa7974d2e53b4d3ce65f7850bd27ed0cb7ea4c86f964783
var __s0local98 = function () {
  function WishingWellConst() {}
  WishingWellConst.calculateWishingWellSkipCost = function (__s1899param0) {
    return Math.min((__s1899param0 / 60 | 0) * 0.5, WishingWellConst.MIN_SKIP_PRICE_C2);
  };
  return WishingWellConst;
}();
__s0local98.ENTRY_COST_MODIFIER = 2;
__s0local98.RUINED_WELL = 0;
__s0local98.MIN_REQUIRED_PLAYER_LEVEL = 13;
__s0local98.MIN_SKIP_PRICE_C2 = 1999;
__s0local98.OPTION_START_RUBY_WISHING_WELL = "S";
__s0local98.OPTION_SKIP_RUBY_WISHING_WELL = "SK";
__s0local98.OPTION_COLLECT_RUBY_WISHING_WELL = "C";
__s0local98.OPTION_UPGRADE_RUBY_WISHING_WELL = "U";
__s0local98.OPTION_UPDATE_INFO_WISHING_WELL = "UD";
exports.WishingWellConst = __s0local98;
__s0local98.__class = "WishingWellConst";
