// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 617
// Export: EffectConst; preserved source: modules/webpack/exports/AlchemistConst.js
// Original canonical SHA-256: 2191b914f78728d7dfa7974d2e53b4d3ce65f7850bd27ed0cb7ea4c86f964783
var __s0local27 = function () {
  function EffectConst() {}
  EffectConst.boostToModifier = function (__s734param0) {
    var __s734local0 = (EffectConst.BASE_BOOST_PERCENTAGE + __s734param0) * EffectConst.TO_MULTIPLIER_FACTOR;
    return Math.max(__s734local0, 0);
  };
  EffectConst.modifierToIntBoost = function (__s736param0) {
    var __s736local0 = (__s736param0 - EffectConst.DEFAULT_MODIFIER) * EffectConst.BASE_BOOST_PERCENTAGE | 0;
    return Math.max(__s736local0, 0);
  };
  EffectConst.boostsToModifier = function () {
    var __s738local0 = [];
    for (var __s738local1 = 0; __s738local1 < arguments.length; __s738local1++) {
      __s738local0[__s738local1] = arguments[__s738local1];
    }
    var __s738local2 = EffectConst.BASE_BOOST_PERCENTAGE;
    for (var __s738local3 = 0; __s738local3 < __s738local0.length; __s738local3++) {
      __s738local2 += __s738local0[__s738local3];
    }
    var __s738local4 = __s738local2 * EffectConst.TO_MULTIPLIER_FACTOR;
    return Math.max(__s738local4, 0);
  };
  EffectConst.addBoostToModifier = function (__s744param0, __s744param1) {
    __s744param1 += __s744param0 * EffectConst.TO_MULTIPLIER_FACTOR;
    return Math.max(__s744param1, 0);
  };
  EffectConst.reductionBoostToModifier = function (__s746param0) {
    return EffectConst.boostToModifier(-__s746param0);
  };
  EffectConst.addReductionBoostToModifier = function (__s748param0, __s748param1) {
    return EffectConst.addBoostToModifier(-__s748param0, __s748param1);
  };
  EffectConst.boostToBoostFactor = function (__s750param0) {
    return __s750param0 * EffectConst.TO_MULTIPLIER_FACTOR;
  };
  EffectConst.boostsToBoostFactor = function () {
    var __s752local0 = [];
    for (var __s752local1 = 0; __s752local1 < arguments.length; __s752local1++) {
      __s752local0[__s752local1] = arguments[__s752local1];
    }
    var __s752local2 = 0;
    for (var __s752local3 = 0; __s752local3 < __s752local0.length; __s752local3++) {
      __s752local2 += __s752local0[__s752local3];
    }
    return EffectConst.boostToBoostFactor(__s752local2);
  };
  EffectConst.boostFactorToBoost = function (__s758param0) {
    return __s758param0 * EffectConst.BASE_BOOST_PERCENTAGE;
  };
  EffectConst.addBoostFactorsToModifier = function (__s760param0) {
    var __s760local0 = [];
    for (var __s760local1 = 1; __s760local1 < arguments.length; __s760local1++) {
      __s760local0[__s760local1 - 1] = arguments[__s760local1];
    }
    var __s760local2 = __s760param0;
    for (var __s760local3 = 0; __s760local3 < __s760local0.length; __s760local3++) {
      __s760local2 += __s760local0[__s760local3];
    }
    return __s760local2;
  };
  EffectConst.reductionBoostFactorToModifier = function (__s766param0) {
    return EffectConst.boostFactorsToModifier(-__s766param0);
  };
  EffectConst.boostFactorsToModifier = function () {
    var __s768local0 = [];
    for (var __s768local1 = 0; __s768local1 < arguments.length; __s768local1++) {
      __s768local0[__s768local1] = arguments[__s768local1];
    }
    return EffectConst.addBoostFactorsToModifier.apply(this, [EffectConst.DEFAULT_MODIFIER].concat(__s768local0));
  };
  EffectConst.applyBoostToValueRoundingWithCeil = function (__s772param0, __s772param1) {
    var __s772local0 = EffectConst.boostToModifier(__s772param0);
    return Math.ceil(__s772param1 * __s772local0) | 0;
  };
  EffectConst.applyBoostToValueRoundingWithFloor = function (__s774param0, __s774param1) {
    var __s774local0 = EffectConst.boostToModifier(__s774param0);
    return Math.floor(__s774param1 * __s774local0) | 0;
  };
  EffectConst.applyBoostToValue = function (__s776param0, __s776param1) {
    return __s776param1 * EffectConst.boostToModifier(__s776param0);
  };
  EffectConst.getBoostedAmount = function (__s778param0, __s778param1) {
    return EffectConst.applyBoostToValueRoundingWithCeil(__s778param0, __s778param1) - __s778param1;
  };
  EffectConst.reduceBoostToValueRoundingWithFloor = function (__s780param0, __s780param1) {
    var __s780local0 = EffectConst.addBoostToModifier(-__s780param0, 1);
    return Math.floor(__s780param1 * __s780local0) | 0;
  };
  return EffectConst;
}();
__s0local27.BASE_BOOST_PERCENTAGE = 100;
__s0local27.TO_MULTIPLIER_FACTOR = 0.01;
__s0local27.DEFAULT_MODIFIER = 1;
__s0local27.NO_BOOST = 0;
__s0local27.NO_BOOST_FACTOR = 0;
__s0local27.NO_BONUS = 0;
__s0local27.DUMMY_VALUE = 0;
exports.EffectConst = __s0local27;
__s0local27.__class = "EffectConst";
