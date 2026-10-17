// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 617
// Export: SubscriptionConst; preserved source: modules/webpack/exports/AlchemistConst.js
// Original canonical SHA-256: 2191b914f78728d7dfa7974d2e53b4d3ce65f7850bd27ed0cb7ea4c86f964783
var __s0local82 = function () {
  function SubscriptionConst() {}
  SubscriptionConst.PLAYER_TYPE_PACKAGES_$LI$ = function () {
    if (SubscriptionConst.PLAYER_TYPE_PACKAGES == null) {
      SubscriptionConst.PLAYER_TYPE_PACKAGES = [SubscriptionConst.PLAYER_SUBSCRIPTION_PACKAGE_TYPE_ID, SubscriptionConst.PLAYER_SUBSCRIPTION_PREMIUM_PACKAGE_TYPE_ID, SubscriptionConst.PLAYER_SUBSCRIPTION_BARON_ADVISOR_PACKAGE_TYPE_ID];
    }
    return SubscriptionConst.PLAYER_TYPE_PACKAGES;
  };
  return SubscriptionConst;
}();
__s0local82.PLAYER_SUBSCRIPTION_PACKAGE_TYPE_ID = 1;
__s0local82.ALLIANCE_SUBSCRIPTION_PACKAGE_TYPE_ID = 2;
__s0local82.PLAYER_SUBSCRIPTION_PREMIUM_PACKAGE_TYPE_ID = 3;
__s0local82.PLAYER_SUBSCRIPTION_BARON_ADVISOR_PACKAGE_TYPE_ID = 4;
exports.SubscriptionConst = __s0local82;
__s0local82.__class = "SubscriptionConst";
__s0local82.PLAYER_TYPE_PACKAGES_$LI$();
