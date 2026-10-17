// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 617
// Export: AlchemistConst; preserved source: modules/webpack/exports/AlchemistConst.js
// Original canonical SHA-256: 2191b914f78728d7dfa7974d2e53b4d3ce65f7850bd27ed0cb7ea4c86f964783
var __s0local0 = function () {
  function AlchemistConst() {}
  AlchemistConst.HOURS_$LI$ = function () {
    if (AlchemistConst.HOURS == null) {
      AlchemistConst.HOURS = 3600;
    }
    return AlchemistConst.HOURS;
  };
  AlchemistConst.POTION_TO_INGREDIENT_TO_COST_$LI$ = function () {
    if (AlchemistConst.POTION_TO_INGREDIENT_TO_COST == null) {
      AlchemistConst.POTION_TO_INGREDIENT_TO_COST = [[15, 2, 1, 0], [20, 13, 5, 0], [0, 15, 10, 1], [35, 40, 0, 3], [50, 0, 24, 5]];
    }
    return AlchemistConst.POTION_TO_INGREDIENT_TO_COST;
  };
  AlchemistConst.POTION_TO_BOOST_$LI$ = function () {
    if (AlchemistConst.POTION_TO_BOOST == null) {
      AlchemistConst.POTION_TO_BOOST = [0.2, 0.2, 0.5, 1, 1.5];
    }
    return AlchemistConst.POTION_TO_BOOST;
  };
  AlchemistConst.POTION_TO_DURATION_$LI$ = function () {
    if (AlchemistConst.POTION_TO_DURATION == null) {
      AlchemistConst.POTION_TO_DURATION = [AlchemistConst.HOURS_$LI$() * 24, AlchemistConst.HOURS_$LI$() * 36, AlchemistConst.HOURS_$LI$() * 24, AlchemistConst.HOURS_$LI$() * 46, AlchemistConst.HOURS_$LI$() * 36];
    }
    return AlchemistConst.POTION_TO_DURATION;
  };
  AlchemistConst.getPotionDuration = function (__s17param0) {
    return AlchemistConst.POTION_TO_DURATION_$LI$()[__s17param0];
  };
  AlchemistConst.getPotionEffect = function (__s19param0) {
    return AlchemistConst.POTION_TO_BOOST_$LI$()[__s19param0];
  };
  return AlchemistConst;
}();
__s0local0.POTION_COUNT = 5;
__s0local0.INGREDIENT_COUNT = 4;
__s0local0.MAX_INGREDIENTS_PER_DROP = 3;
__s0local0.INGREDIENTS_PER_POTION = 3;
__s0local0.RUBY_COST = 150;
exports.AlchemistConst = __s0local0;
__s0local0.__class = "AlchemistConst";
__s0local0.POTION_TO_DURATION_$LI$();
__s0local0.POTION_TO_BOOST_$LI$();
__s0local0.POTION_TO_INGREDIENT_TO_COST_$LI$();
__s0local0.HOURS_$LI$();
