// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 617
// Export: FusionConst; preserved source: modules/webpack/exports/AlchemistConst.js
// Original canonical SHA-256: 2191b914f78728d7dfa7974d2e53b4d3ce65f7850bd27ed0cb7ea4c86f964783
var __s0local33 = function () {
  function FusionConst() {}
  FusionConst.getPremiumFusionC2Cost = function (__s990param0) {
    return 2500 + (Math.floor(__s990param0 * (1 / 3)) | 0) * 100;
  };
  FusionConst.getFusionEnergyCost = function (__s992param0) {
    return __s992param0 * 50 + 900;
  };
  FusionConst.getBaseFusionXPFromSource = function (__s994param0) {
    return __s994param0 * 10 + 10;
  };
  FusionConst.getFusionXPModifierFromSource = function (__s996param0, __s996param1) {
    if (__s996param0 === __s996param1) {
      return 1;
    } else if (__s996param0 < __s996param1) {
      return Math.pow(Math.exp(__s996param0 - __s996param1), 0.025);
    } else {
      return FusionConst.logOfBase(100, __s996param0 - __s996param1) + 1;
    }
  };
  FusionConst.logOfBase = function (__s1001param0, __s1001param1) {
    return Math.log(__s1001param1) / Math.log(__s1001param0);
  };
  FusionConst.getFusionXPFromSource = function (__s1003param0, __s1003param1) {
    return Math.floor(FusionConst.getBaseFusionXPFromSource(__s1003param0) * FusionConst.getFusionXPModifierFromSource(__s1003param0, __s1003param1)) | 0;
  };
  FusionConst.getBonusFusionXPChanceFromSource = function (__s1005param0, __s1005param1, __s1005param2) {
    if (__s1005param1 === __s1005param2) {
      return __s1005param0;
    } else {
      return Math.min(Math.floor(__s1005param0 * Math.exp((__s1005param1 - __s1005param2) / 144.269)), 100) | 0;
    }
  };
  FusionConst.getBonusFusionXPChanceFromCatalyst = function (__s1009param0, __s1009param1) {
    if (__s1009param0 === __s1009param1) {
      return 0;
    } else {
      return Math.max((__s1009param0 - __s1009param1) * 4, 0);
    }
  };
  FusionConst.getBonusFusionXPChance = function (__s1013param0, __s1013param1, __s1013param2, __s1013param3, __s1013param4) {
    return FusionConst.getBonusFusionXPChanceFromSource(__s1013param0, __s1013param1, __s1013param2) + FusionConst.getBonusFusionXPChanceFromCatalyst(__s1013param3, __s1013param4);
  };
  FusionConst.getBonusFusionXPBoost = function (__s1015param0, __s1015param1, __s1015param2) {
    var __s1015local0 = __s1015param1 + __s1015param2;
    return Math.max(Math.round((__s1015local0 / 100 - 1) * __s1015param0), 0);
  };
  FusionConst.getBonusFusionXP = function (__s1017param0, __s1017param1) {
    return (Math.floor(__s1017param0 * 2.5 + 5) | 0) + FusionConst.getForgeBonusFusionXP(__s1017param1);
  };
  FusionConst.getBonusFusionXPWithForgeMax = function (__s1019param0, __s1019param1, __s1019param2) {
    return (Math.floor(__s1019param1 * 2.5 + 5) | 0) + FusionConst.getForgeBonusFusionXPWithMax(__s1019param0, __s1019param1, __s1019param2);
  };
  FusionConst.getForgeBonusFusionXP = function (__s1021param0) {
    return __s1021param0 * 5 + 9;
  };
  FusionConst.getMaxAllowedForgeBonusFusionXP = function (__s1023param0, __s1023param1) {
    return (FusionConst.getBaseFusionXPFromSource(__s1023param0) + (FusionConst.getStartXPFromLevel(__s1023param1 + 1) - FusionConst.getStartXPFromLevel(__s1023param1) | 0)) * 100;
  };
  FusionConst.getForgeBonusFusionXPWithMax = function (__s1025param0, __s1025param1, __s1025param2) {
    var __s1025local0 = FusionConst.getForgeBonusFusionXP(__s1025param2);
    var __s1025local1 = FusionConst.getMaxAllowedForgeBonusFusionXP(__s1025param0, __s1025param1);
    return Math.min(__s1025local0, __s1025local1);
  };
  FusionConst.getFusionEnergyCap = function (__s1027param0) {
    return __s1027param0 * 100 + 2300;
  };
  FusionConst.getFusionEnergyRechargeAmount = function (__s1029param0) {
    return __s1029param0 * 25 + 575;
  };
  FusionConst.getFusionEnergyRechargeFromMinuteSkip = function (__s1031param0, __s1031param1) {
    return Math.round(Math.ceil(__s1031param0 * 3600 / __s1031param1));
  };
  FusionConst.getFusionEnergyRechargeFromC2 = function (__s1033param0) {
    return __s1033param0;
  };
  FusionConst.getFusionEnergyRechargeFromC2Cost = function (__s1035param0, __s1035param1, __s1035param2) {
    return Math.ceil(__s1035param0 * Math.pow(__s1035param1, __s1035param2)) | 0;
  };
  FusionConst.getForgeLevelUpDustCost = function (__s1037param0) {
    return __s1037param0 * 10 + 10;
  };
  FusionConst.getDecorationFusionFusionCurrencyCost = function (__s1039param0) {
    return Math.floor(1 / 3 * __s1039param0 + 1) | 0;
  };
  FusionConst.getDecorationPointsFromFusionLevel = function (__s1041param0) {
    return __s1041param0 * 5 + 100 | 0;
  };
  FusionConst.getTotalBonusFusionXP = function (__s1043param0, __s1043param1) {
    return __s1043param0 + __s1043param1;
  };
  FusionConst.getRechargeTimeForOneFusionEnergyInSeconds = function (__s1045param0, __s1045param1) {
    return __s1045param0 / FusionConst.getFusionEnergyRechargeAmount(__s1045param1) | 0;
  };
  FusionConst.getLevelFromXP = function (__s1047param0) {
    return Math.floor(Math.sqrt(12.25 + __s1047param0 * 0.4) - 2.5) | 0;
  };
  FusionConst.getStartXPFromLevel = function (__s1049param0) {
    return Math.round(Math.floor(Math.pow(__s1049param0 - 1, 2) * 2.5 + (__s1049param0 - 1) * 17.5));
  };
  FusionConst.getFusionCurrencyCost = function (__s1051param0, __s1051param1) {
    if (__s1051param0 === FusionConst.DECORATION_FORGE_ID) {
      return FusionConst.getDecorationFusionFusionCurrencyCost(__s1051param1);
    } else {
      return 0;
    }
  };
  FusionConst.getDecorationPointsFromFusionXP = function (__s1055param0) {
    return FusionConst.getDecorationPointsFromFusionLevel(FusionConst.getLevelFromXP(__s1055param0));
  };
  FusionConst.getXPRangeBetweenLevels = function (__s1057param0, __s1057param1) {
    return FusionConst.getStartXPFromLevel(__s1057param1) - FusionConst.getStartXPFromLevel(__s1057param0);
  };
  FusionConst.getNeededXPToNextLevel = function (__s1059param0) {
    var __s1059local0 = FusionConst.getLevelFromXP(__s1059param0);
    return FusionConst.getStartXPFromLevel(__s1059local0 + 1) - __s1059param0;
  };
  FusionConst.getXPProgressInLevel = function (__s1061param0) {
    var __s1061local0 = FusionConst.getLevelFromXP(__s1061param0);
    return __s1061param0 - FusionConst.getStartXPFromLevel(__s1061local0);
  };
  return FusionConst;
}();
__s0local33.DECORATION_FORGE_ID = 1;
exports.FusionConst = __s0local33;
__s0local33.__class = "FusionConst";
