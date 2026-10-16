Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_SpecialServerHelper = require("gge-module:export_SpecialServerHelper");
var __dep_export_BonusVO = require("gge-module:export_BonusVO");
var __s0local0 = function (__s1param0) {
  function RawLordEffectBonusVO() {
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(RawLordEffectBonusVO, __s1param0);
  RawLordEffectBonusVO.prototype.clone = function () {
    var __s5local0 = new RawLordEffectBonusVO().parseFromValueArray(this.effect, this._effectValue.rawValues);
    __s5local0._effectSources = this._effectSources;
    return __s5local0;
  };
  RawLordEffectBonusVO.prototype.lordEffectText = function () {
    var __s7local0 = __dep_exact_f855840627e6e145.int(this.maxValueStrength);
    if (__s7local0 < Number.MAX_VALUE) {
      return __dep_exact_92d05af59ee2ff30.Localize.text(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_SIMPLE_COMP, [this.descriptionText, __dep_exact_92d05af59ee2ff30.Localize.text(this.effect.effectType.type.simpleValueTextID == __dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_NOMINAL_ADD ? "equipment_bonus_maximum_noPercentage" : "equipment_bonus_maximum", [__s7local0])]);
    } else {
      return this.descriptionText;
    }
  };
  Object.defineProperty(RawLordEffectBonusVO.prototype, "descriptionText", {
    get: function () {
      try {
        if (this.effect.name.indexOf("relic") > -1) {
          return __dep_exact_92d05af59ee2ff30.Localize.text(__dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("relicequip_effect_description_" + this.effect.name), this.getReplacementsWithBossName(this.effectValue.textReplacements)) + this.decriptionSuffix;
        } else {
          return __dep_exact_92d05af59ee2ff30.Localize.text(__dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("equip_effect_description_" + this.effect.name), this.getReplacementsWithBossName(this.effectValue.textReplacements)) + this.decriptionSuffix;
        }
      } catch (__s16local0) {
        throw new Error("EffectID:" + this.effect.effectID + "\n" + __s16local0.toString());
      }
    },
    set: function (__s18param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BonusVO.BonusVO.prototype, "descriptionText").set.call(this, __s18param0);
    },
    enumerable: true,
    configurable: true
  });
  return RawLordEffectBonusVO;
}(__dep_export_BonusVO.BonusVO);
exports.RawLordEffectBonusVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ILordEffectText");
