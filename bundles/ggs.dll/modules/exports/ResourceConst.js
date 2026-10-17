// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 617
// Export: ResourceConst; preserved source: modules/webpack/exports/AlchemistConst.js
// Original canonical SHA-256: 2191b914f78728d7dfa7974d2e53b4d3ce65f7850bd27ed0cb7ea4c86f964783
var __s0local72 = function () {
  function ResourceConst() {}
  ResourceConst.RESOURCE_FACTORS_$LI$ = function () {
    if (ResourceConst.RESOURCE_FACTORS == null) {
      ResourceConst.RESOURCE_FACTORS = [ResourceConst.WOOD_FACTOR, ResourceConst.STONE_FACTOR, ResourceConst.FOOD_FACTOR, ResourceConst.COAL_FACTOR, ResourceConst.OIL_FACTOR, ResourceConst.GLASS_FACTOR, ResourceConst.AQUAMARINE_FACTOR, ResourceConst.IRON_FACTOR, ResourceConst.HONEY_FACTOR, ResourceConst.MEAD_FACTOR, ResourceConst.BEEF_FACTOR];
    }
    return ResourceConst.RESOURCE_FACTORS;
  };
  ResourceConst.getC2PriceForResources = function (__s1622param0) {
    var __s1622local0 = 0;
    for (var __s1622local1 = 0; __s1622local1 < __s1622param0.length; __s1622local1++) {
      __s1622local0 += ResourceConst.RESOURCE_FACTORS_$LI$()[__s1622local1] * __s1622param0[__s1622local1];
    }
    return (Math.ceil(__s1622local0 * ResourceConst.ONE_CLICK_FACTOR / 100) | 0) * 100;
  };
  ResourceConst.getCombinedProductionModifier = function (__s1626param0, __s1626param1, __s1626param2) {
    return __s1626param2 * __s1626param1 * __s1626param0;
  };
  return ResourceConst;
}();
__s0local72.PRODUCTION_INTERVAL = 3600;
__s0local72.NO_RIOT = 0;
__s0local72.RIOT_INCREASE = 5;
__s0local72.PRICE_FOR_PACKAGE = 1;
__s0local72.PRICE_FOR_BUILDING = 2;
__s0local72.WOOD_FACTOR = 0.25;
__s0local72.STONE_FACTOR = 0.22;
__s0local72.FOOD_FACTOR = 0.19;
__s0local72.COAL_FACTOR = 0.41;
__s0local72.OIL_FACTOR = 0.57;
__s0local72.GLASS_FACTOR = 0.79;
__s0local72.IRON_FACTOR = 1.5;
__s0local72.AQUAMARINE_FACTOR = 1000;
__s0local72.MEAD_FACTOR = 0.25;
__s0local72.HONEY_FACTOR = 0.19;
__s0local72.BEEF_FACTOR = 0.25;
__s0local72.ONE_CLICK_FACTOR = 1.12;
__s0local72.MEAD_HOHEY_UNLOCK_PLAYER_LEGEND_LEVEL = 650;
__s0local72.BEEF_UNLOCK_PLAYER_LEGEND_LEVEL = 650;
__s0local72.MIN_LEVEL_FOR_RESOURCE_TRADER_BUTTON_FOR_PACKAGES = 70;
exports.ResourceConst = __s0local72;
__s0local72.__class = "ResourceConst";
__s0local72.RESOURCE_FACTORS_$LI$();
