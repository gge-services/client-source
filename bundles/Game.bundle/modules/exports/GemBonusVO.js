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
var __dep_export_EffectSourceEnum = require("gge-module:export_EffectSourceEnum");
var __s0local0 = function (__s1param0) {
  function GemBonusVO() {
    var __s3local0 = this;
    __s3local0._triggerChance = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).addEffectSource(__dep_export_EffectSourceEnum.EffectSourceEnum.EQUIPMENT);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GemBonusVO, __s1param0);
  GemBonusVO.prototype.parseGemBonusFromValueString = function (__s5param0, __s5param1, __s5param2 = 100) {
    this._triggerChance = __s5param2;
    return __s1param0.prototype.parseFromValueString.call(this, __s5param0, __s5param1);
  };
  GemBonusVO.prototype.parseGemBonusFromValueArray = function (__s7param0, __s7param1, __s7param2 = 100) {
    this._triggerChance = __s7param2;
    return __s1param0.prototype.parseFromValueArray.call(this, __s7param0, __s7param1);
  };
  GemBonusVO.prototype.clone = function () {
    return new GemBonusVO().parseGemBonusFromValueArray(this._effect, this._effectValue.rawValues, this.triggerChance);
  };
  Object.defineProperty(GemBonusVO.prototype, "descriptionText", {
    get: function () {
      return (this.triggerChance == 100 ? __dep_exact_92d05af59ee2ff30.Localize.text(__dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("equip_effect_description_" + this.effect.name), this.getReplacementsWithBossName(this.effectValue.textReplacements)) : __dep_exact_92d05af59ee2ff30.Localize.text("gem_effect_description_" + this.gemTypeString, this.getReplacementsWithBossName([this.triggerChance].concat(this._effectValue.textReplacements)))) + this.decriptionSuffix;
    },
    set: function (__s13param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BonusVO.BonusVO.prototype, "descriptionText").set.call(this, __s13param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GemBonusVO.prototype, "triggeredEffectText", {
    get: function () {
      if (this.triggerChance == 100) {
        return __dep_exact_92d05af59ee2ff30.Localize.text(__dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("equip_effect_description_" + this.effect.name), this.getReplacementsWithBossName(this.effectValue.textReplacements));
      } else {
        return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_battleLogDetail_gemEffekt_" + this.gemTypeString, this.getReplacementsWithBossName(this._effectValue.textReplacements));
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GemBonusVO.prototype, "triggerChance", {
    get: function () {
      return this._triggerChance;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GemBonusVO.prototype, "gemTypeString", {
    get: function () {
      return "gem" + this.effect.name.charAt(0).toUpperCase() + this.effect.name.substr(1);
    },
    enumerable: true,
    configurable: true
  });
  GemBonusVO.prototype.lordEffectText = function () {
    var __s23local0 = __dep_exact_f855840627e6e145.int(this.maxValueStrength);
    if (__s23local0 < Number.MAX_VALUE) {
      return __dep_exact_92d05af59ee2ff30.Localize.text(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_SIMPLE_COMP, [this.descriptionText, __dep_exact_92d05af59ee2ff30.Localize.text(this.effect.effectType.type.simpleValueTextID == __dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_NOMINAL_ADD ? "equipment_bonus_maximum_noPercentage" : "equipment_bonus_maximum", [__s23local0])]);
    } else {
      return this.descriptionText;
    }
  };
  return GemBonusVO;
}(__dep_export_BonusVO.BonusVO);
exports.GemBonusVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ILordEffectText");
