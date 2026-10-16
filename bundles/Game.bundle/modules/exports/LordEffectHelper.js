Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_EffectVO = require("gge-module:export_EffectVO");
var __dep_export_PlayerHelper = require("gge-module:export_PlayerHelper");
var __dep_export_LordEffectFilterStrategyAttack = require("gge-module:export_LordEffectFilterStrategyAttack");
var __dep_export_LordEffectFilterStrategyAttackPVE = require("gge-module:export_LordEffectFilterStrategyAttackPVE");
var __dep_export_LordEffectFilterStrategyDefencePVE = require("gge-module:export_LordEffectFilterStrategyDefencePVE");
var __dep_export_LordEffectFilterStrategyFullActive = require("gge-module:export_LordEffectFilterStrategyFullActive");
var __dep_export_LordEffectFilterStrategyFullPassive = require("gge-module:export_LordEffectFilterStrategyFullPassive");
var __dep_export_LordEffectFilterStrategyStation = require("gge-module:export_LordEffectFilterStrategyStation");
var __dep_export_LordEffectFilterStrategySupport = require("gge-module:export_LordEffectFilterStrategySupport");
var __s0local0 = function () {
  function LordEffectHelper() {}
  LordEffectHelper.hideToolTip = function () {
    if (LordEffectHelper._lordEffectToolTip.disp) {
      LordEffectHelper._lordEffectToolTip.disp.visible = false;
    }
  };
  LordEffectHelper.showToolTip = function (__s8param0, __s8param1, __s8param2 = null, __s8param3 = null, __s8param4, __s8param5 = true) {
    LordEffectHelper._lordEffectToolTip.init(__s8param0, __s8param1, __s8param2, __s8param3, __s8param4, __s8param5);
    LordEffectHelper._lordEffectToolTip.disp.visible = true;
  };
  Object.defineProperty(LordEffectHelper, "disp", {
    get: function () {
      return LordEffectHelper._lordEffectToolTip.disp;
    },
    enumerable: true,
    configurable: true
  });
  LordEffectHelper.resetCategoryItems = function () {
    LordEffectHelper._lordEffectToolTip.reset();
  };
  LordEffectHelper.createEffectGroups = function (__s14param0, __s14param1, __s14param2 = -1) {
    __s14param0.sort(LordEffectHelper.sortByEffectSortOrder);
    var __s14local0 = [];
    var __s14local1 = [];
    var __s14local2 = -1;
    var __s14local3 = -1;
    if (__s14param0.length == 0) {
      return __s14local0;
    }
    __s14local2 = __dep_exact_f855840627e6e145.int(__s14param0[0].effect.effectCategory);
    __s14local3 = __dep_exact_f855840627e6e145.int(__s14param0[0].effect.effectGroup);
    if (__s14param0 != null) {
      for (var __s14local4 = 0, __s14local5 = __s14param0; __s14local4 < __s14local5.length; __s14local4++) {
        var __s14local6 = __s14local5[__s14local4];
        if (__s14local6 !== undefined && __s14local6.effect.effectCategory != __dep_export_EffectVO.EffectVO.CATEGORY_NO_CATEGORY) {
          if (__s14local2 != __s14local6.effect.effectCategory || __s14local3 != __s14local6.effect.effectGroup) {
            if (__s14local1.length > 0 && (__s14param2 == -1 || __s14param2 == __s14local2)) {
              __s14local0.push(new __dep_export_LordEffectGroupItem.LordEffectGroupItem(__s14param1, __s14local1));
            }
            __s14local1.length = 0;
            __s14local1.push(__s14local6);
            __s14local2 = __dep_exact_f855840627e6e145.int(__s14local6.effect.effectCategory);
            __s14local3 = __dep_exact_f855840627e6e145.int(__s14local6.effect.effectGroup);
          } else {
            __s14local1.push(__s14local6);
          }
        }
      }
    }
    if ((__s14param2 == -1 || __s14param2 == __s14local2) && __s14local1.length > 0) {
      __s14local0.push(new __dep_export_LordEffectGroupItem.LordEffectGroupItem(__s14param1, __s14local1));
    }
    return __s14local0;
  };
  LordEffectHelper.sortByEffectSortOrder = function (__s25param0, __s25param1) {
    if (__s25param0.effect.effectCategory != __s25param1.effect.effectCategory) {
      return __dep_exact_f855840627e6e145.int(__s25param0.effect.effectCategory - __s25param1.effect.effectCategory);
    } else if (__s25param0.effect.effectGroup != __s25param1.effect.effectGroup) {
      return __dep_exact_f855840627e6e145.int(__s25param0.effect.effectGroup - __s25param1.effect.effectGroup);
    } else if (__s25param0.effect.capId != __s25param1.effect.capId) {
      return __dep_exact_f855840627e6e145.int(__s25param0.effect.capId - __s25param1.effect.capId);
    } else if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s25param0, "GemBonusVO") && __s25param0.triggerChance != 100) {
      return 1;
    } else {
      return 0;
    }
  };
  LordEffectHelper.createEffectListStringFromEquipments = function (__s32param0) {
    var __s32local0 = [];
    if (__s32param0) {
      if (__s32param0 != null) {
        for (var __s32local1 = 0, __s32local2 = __s32param0; __s32local1 < __s32local2.length; __s32local1++) {
          var __s32local3 = __s32local2[__s32local1];
          if (__s32local3 !== undefined) {
            for (var __s32local4 = 0, __s32local5 = __s32local3.boni; __s32local4 < __s32local5.length; __s32local4++) {
              var __s32local6 = __s32local5[__s32local4];
              if (__s32local6 !== undefined) {
                LordEffectHelper.addEffectToBonusList(__s32local0, __s32local6);
              }
            }
          }
        }
      }
      for (var __s32local7 = 0, __s32local8 = __s32param0; __s32local7 < __s32local8.length; __s32local7++) {
        if ((__s32local3 = __s32local8[__s32local7]).gemVO) {
          if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s32local3.gemVO, "CastleGemVO")) {
            for (var __s32local9 = 0, __s32local10 = __s32local3.gemVO.boni; __s32local9 < __s32local10.length; __s32local9++) {
              __s32local6 = __s32local10[__s32local9];
              LordEffectHelper.addEffectToBonusList(__s32local0, __s32local6);
            }
          }
          if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s32local3.gemVO, "RelicGemVO")) {
            for (var __s32local11 = 0, __s32local12 = __s32local3.gemVO.relicInfoVO.relicBoni; __s32local11 < __s32local12.length; __s32local11++) {
              __s32local6 = __s32local12[__s32local11];
              LordEffectHelper.addEffectToBonusList(__s32local0, __s32local6);
            }
          }
        }
      }
    }
    return LordEffectHelper.getTotalEffectTextOfBonusList(__s32local0);
  };
  LordEffectHelper.getTotalEffectTextOfBonusList = function (__s51param0, __s51param1 = true) {
    var __s51local0 = "";
    for (var __s51local1 = 0; __s51local1 < __s51param0.length; ++__s51local1) {
      var __s51local2 = __s51param0[__s51local1];
      if (__s51local0 != "") {
        __s51local0 += "\n";
      }
      __s51local0 += __s51local2.descriptionText;
    }
    if (__s51param1 && __s51local0 == "") {
      __s51local0 = "-";
    }
    return __s51local0;
  };
  LordEffectHelper.addEffectToBonusList = function (__s57param0, __s57param1) {
    var __s57local0 = __dep_exact_f855840627e6e145.int(LordEffectHelper.getIndexOfEffectTypeInList(__s57param0, __s57param1.effect.effectType.type));
    if (__s57local0 >= 0) {
      __s57param0[__s57local0].effectValue.add(__s57param1.effectValue, null);
    } else {
      __s57param0.push(__s57param1.clone());
    }
  };
  LordEffectHelper.getIndexOfEffectTypeInList = function (__s61param0, __s61param1) {
    for (var __s61local0 = 0; __s61local0 < __s61param0.length; ++__s61local0) {
      if (__s61param0[__s61local0].effect.effectType.type == __s61param1) {
        return __s61local0;
      }
    }
    return -1;
  };
  LordEffectHelper.getFilterStrategyAttackOrDefence = function (__s66param0, __s66param1) {
    if (__dep_export_PlayerHelper.PlayerHelper.isNPCPlayer(__s66param0) && !__dep_export_PlayerHelper.PlayerHelper.isNpcPvpPlayer(__s66param0)) {
      if (__s66param1) {
        return LordEffectHelper.STRATEGY_ATTACK_PVE;
      } else {
        return LordEffectHelper.STRATEGY_DEFENCE_PVE;
      }
    } else if (__s66param1) {
      return LordEffectHelper.STRATEGY_ATTACK;
    } else {
      return LordEffectHelper.STRATEGY_DEFENCE_PVP;
    }
  };
  LordEffectHelper.getFilterStrategyByMovementVO = function (__s73param0) {
    var __s73local0 = __s73param0.lordVO.isBaron;
    var __s73local1 = __s73param0.isReturnHome ? __s73param0.sourceArea : __s73param0.targetArea;
    var __s73local2 = __s73local1 && __s73local1.ownerInfo ? __s73local1.ownerInfo.playerID : 1;
    if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s73param0, "SupportDefenceMapmovementVO")) {
      return LordEffectHelper.STRATEGY_SUPPORT;
    } else if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s73param0, "ArmyTravelMapMovementVO")) {
      return LordEffectHelper.STRATEGY_STATION;
    } else {
      return LordEffectHelper.getFilterStrategyAttackOrDefence(__s73local2, !__s73local0);
    }
  };
  LordEffectHelper.__initialize_static_members = function () {
    LordEffectHelper.STRATEGY_FULL_ACTIVE = new __dep_export_LordEffectFilterStrategyFullActive.LordEffectFilterStrategyFullActive();
    LordEffectHelper.STRATEGY_FULL_PASSIVE = new __dep_export_LordEffectFilterStrategyFullPassive.LordEffectFilterStrategyFullPassive();
    LordEffectHelper.STRATEGY_ATTACK = new __dep_export_LordEffectFilterStrategyAttack.LordEffectFilterStrategyAttack();
    LordEffectHelper.STRATEGY_ATTACK_PVE = new __dep_export_LordEffectFilterStrategyAttackPVE.LordEffectFilterStrategyAttackPVE();
    LordEffectHelper.STRATEGY_DEFENCE_PVE = new __dep_export_LordEffectFilterStrategyDefencePVE.LordEffectFilterStrategyDefencePVE();
    LordEffectHelper.STRATEGY_DEFENCE_PVP = new __dep_export_LordEffectFilterStrategyDefencePVP.LordEffectFilterStrategyDefencePVP();
    LordEffectHelper.STRATEGY_STATION = new __dep_export_LordEffectFilterStrategyStation.LordEffectFilterStrategyStation();
    LordEffectHelper.STRATEGY_SUPPORT = new __dep_export_LordEffectFilterStrategySupport.LordEffectFilterStrategySupport();
    LordEffectHelper._lordEffectToolTip = new __dep_export_LordEffectTooltip.LordEffectTooltip();
  };
  return LordEffectHelper;
}();
exports.LordEffectHelper = __s0local0;
var __dep_export_LordEffectGroupItem = require("gge-module:export_LordEffectGroupItem");
var __dep_export_LordEffectTooltip = require("gge-module:export_LordEffectTooltip");
var __dep_export_LordEffectFilterStrategyDefencePVP = require("gge-module:export_LordEffectFilterStrategyDefencePVP");
__s0local0.__initialize_static_members();
