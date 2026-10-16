Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_GemBonusVO = require("gge-module:export_GemBonusVO");
var __s0local0 = function () {
  function CastleGemEffectTextComposer() {}
  CastleGemEffectTextComposer.composeFromGemIDList = function (__s5param0, __s5param1) {
    var __s5local0 = [];
    if (__s5param0 != null) {
      for (var __s5local1 = 0, __s5local2 = __s5param0; __s5local1 < __s5local2.length; __s5local1++) {
        var __s5local3 = __s5local2[__s5local1];
        if (__s5local3 !== undefined) {
          __s5local0.push(__dep_export_CastleModel.CastleModel.gemData.getGemVO(__s5local3));
        }
      }
    }
    return CastleGemEffectTextComposer.composeTriggeredEffectsText(__s5local0, __s5param1);
  };
  CastleGemEffectTextComposer.composeTriggeredEffectsText = function (__s11param0, __s11param1) {
    var __s11local0;
    var __s11local1 = "";
    var __s11local2 = new Map();
    for (var __s11local3 = 0, __s11local4 = __s11param0; __s11local3 < __s11local4.length; __s11local3++) {
      for (var __s11local5 = 0, __s11local6 = __s11local4[__s11local3].boni; __s11local5 < __s11local6.length; __s11local5++) {
        var __s11local7 = __s11local6[__s11local5];
        if (__s11local7 !== undefined) {
          CastleGemEffectTextComposer.multiFoldEffects(__s11local7, __s11local2);
        }
      }
    }
    var __s11local8 = [];
    for (var __s11local9 = 0, __s11local10 = __s11param0; __s11local9 < __s11local10.length; __s11local9++) {
      for (var __s11local11 = 0, __s11local12 = __s11local10[__s11local9].boni; __s11local11 < __s11local12.length; __s11local11++) {
        var __s11local13 = __s11local12[__s11local11];
        if (__s11local13 !== undefined && __s11local8.indexOf(__s11local13.effect.name) == -1) {
          if (__s11local13.triggerChance == 100) {
            __s11local0 = CastleGemEffectTextComposer.foldEffectValues(__s11local2.get(__s11local13.effect.name));
            var __s11local14 = new __dep_export_GemBonusVO.GemBonusVO().parseGemBonusFromValueArray(__s11local13.effect, __s11local0.rawValues);
            if (CastleGemEffectTextComposer.isFilterStrategyPVE(__s11param1) && __s11local13.effect.isPvPFight) {
              continue;
            }
            if (!CastleGemEffectTextComposer.isFilterStrategyPVE(__s11param1) && __s11local13.effect.isPvEFight) {
              continue;
            }
            __s11local1 += __s11local14.triggeredEffectText + "\n";
            __s11local8.push(__s11local13.effect.name);
          } else {
            __s11local1 += __s11local13.triggeredEffectText + "\n";
          }
        }
      }
    }
    return __s11local1;
  };
  CastleGemEffectTextComposer.isFilterStrategyPVE = function (__s27param0) {
    return __s27param0 == __dep_export_LordEffectHelper.LordEffectHelper.STRATEGY_DEFENCE_PVE || __s27param0 == __dep_export_LordEffectHelper.LordEffectHelper.STRATEGY_ATTACK_PVE;
  };
  CastleGemEffectTextComposer.foldEffectValues = function (__s29param0) {
    var __s29local0;
    for (var __s29local1 = 0; __s29local1 < __s29param0.length; __s29local1++) {
      if (__s29local0) {
        __s29local0.add(__s29param0[__s29local1].effectValue, null);
      } else {
        __s29local0 = __s29param0[__s29local1].effectValue.clone();
      }
    }
    return __s29local0;
  };
  CastleGemEffectTextComposer.multiFoldEffects = function (__s35param0, __s35param1) {
    if (__s35param0.triggerChance == 100) {
      var __s35local0 = [];
      if (__s35param1.get(__s35param0.effect.name) == null) {
        __s35local0 = [];
        __s35param1.set(__s35param0.effect.name, __s35local0);
      } else {
        __s35local0 = __s35param1.get(__s35param0.effect.name);
      }
      __s35local0.push(__s35param0);
    }
  };
  CastleGemEffectTextComposer.getGemBonusText = function (__s40param0, __s40param1 = null) {
    var __s40local0 = "";
    if (__s40param0) {
      __s40local0 += CastleGemEffectTextComposer.composeFromGemIDList(__s40param0, __s40param1);
    }
    if (__s40local0.length > 0) {
      __s40local0 = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_battleLogDetail_gemEffekt_tooltip") + "\n" + __s40local0;
    }
    return __s40local0;
  };
  return CastleGemEffectTextComposer;
}();
exports.CastleGemEffectTextComposer = __s0local0;
var __dep_export_LordEffectHelper = require("gge-module:export_LordEffectHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
