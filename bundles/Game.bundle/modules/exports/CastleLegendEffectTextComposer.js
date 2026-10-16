Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CastleLegendEffectTextComposer() {}
  CastleLegendEffectTextComposer.composeLegendSkillBonuses = function (__s5param0) {
    var __s5local0 = [];
    if (__s5param0 != null) {
      for (var __s5local1 = 0, __s5local2 = __s5param0; __s5local1 < __s5local2.length; __s5local1++) {
        var __s5local3 = __s5local2[__s5local1];
        if (__s5local3 !== undefined) {
          __s5local0.push(__dep_export_CastleModel.CastleModel.legendSkillData.getSkillByID(__s5local3));
        }
      }
    }
    return CastleLegendEffectTextComposer.composeEffectsText(__s5local0);
  };
  CastleLegendEffectTextComposer.composeEffectsText = function (__s11param0) {
    var __s11local0;
    var __s11local1;
    var __s11local2 = "";
    var __s11local3 = new Map();
    for (var __s11local4 = 0, __s11local5 = __s11param0; __s11local4 < __s11local5.length; __s11local4++) {
      __s11local0 = __s11local5[__s11local4];
      __s11local1 = __dep_exact_92d05af59ee2ff30.Localize.text(__s11local0.shortDescriptionTextID);
      if (__s11local3.get(__s11local1) == undefined) {
        __s11local3.set(__s11local1, [__s11local0.shortDescriptionTextID, __dep_export_CastleModel.CastleModel.legendSkillData.getTotalSkillValue(__s11local0)]);
      } else {
        __s11local3.set(__s11local1, [__s11local3.get(__s11local1)[0], __s11local3.get(__s11local1)[1] + __dep_export_CastleModel.CastleModel.legendSkillData.getTotalSkillValue(__s11local0)]);
      }
    }
    if (__s11local3 != null) {
      for (var __s11local6 = 0, __s11local7 = Array.from(__s11local3.keys()); __s11local6 < __s11local7.length; __s11local6++) {
        if ((__s11local1 = __s11local7[__s11local6]) !== undefined) {
          __s11local2 += __dep_exact_92d05af59ee2ff30.Localize.text(__s11local3.get(__s11local1)[0], [__s11local3.get(__s11local1)[1]]) + "\n";
        }
      }
    }
    return __s11local2;
  };
  CastleLegendEffectTextComposer.getLegendBonusText = function (__s21param0) {
    var __s21local0 = "";
    if (__s21param0) {
      __s21local0 += CastleLegendEffectTextComposer.composeLegendSkillBonuses(__s21param0);
    }
    if (__s21local0.length > 0) {
      __s21local0 = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_battleLog_legendTemple_tooltip_header") + "\n" + __s21local0;
    }
    return __s21local0;
  };
  return CastleLegendEffectTextComposer;
}();
exports.CastleLegendEffectTextComposer = __s0local0;
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
