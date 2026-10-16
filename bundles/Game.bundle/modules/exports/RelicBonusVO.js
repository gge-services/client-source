Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_SpecialServerHelper = require("gge-module:export_SpecialServerHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_BonusVO = require("gge-module:export_BonusVO");
var __dep_export_EffectSourceEnum = require("gge-module:export_EffectSourceEnum");
var __s0local0 = function (__s1param0) {
  function RelicBonusVO() {
    var __s3local0 = this;
    __s3local0._power = NaN;
    __s3local0._predefinedMinRating = -1;
    __s3local0._predefinedMaxRating = -1;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).addEffectSource(__dep_export_EffectSourceEnum.EffectSourceEnum.EQUIPMENT);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(RelicBonusVO, __s1param0);
  RelicBonusVO.prototype.parseRelicFromValueArray = function (__s5param0) {
    this._relicEffectVO = __dep_export_CastleModel.CastleModel.equipData.relicXml.getRelicEffect(__s5param0[0]);
    this._power = __s5param0[1];
    this._effect = __dep_export_CastleModel.CastleModel.effectsData.getEffectByID(this.relicEffectVO.effectId);
    this._effectValue = new this.effect.effectType.valueClass();
    this._effectValue.parseFromValueString(__s5param0[2].toString());
  };
  RelicBonusVO.prototype.getDescriptionTextId = function () {
    return __dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("relicequip_effect_description_" + this.effect.name);
  };
  RelicBonusVO.prototype.getUndefinedDescriptionText = function () {
    return __dep_exact_92d05af59ee2ff30.Localize.text(this.getDescriptionTextId() + "_undefined", [this.effectValue.textReplacements.length > 1 ? this.effectValue.textReplacements[1] : this.effectValue.textReplacements[0]]);
  };
  RelicBonusVO.prototype.getUndefinedValueText = function () {
    var __s11local0 = this._relicEffectVO.maxValue;
    var __s11local1 = this._relicEffectVO.minValue;
    if (this._predefinedMaxRating >= 0 && this._predefinedMinRating >= 0) {
      var __s11local2 = this._relicEffectVO.maxValue - this._relicEffectVO.minValue;
      __s11local1 = __dep_exact_9e901e8e2483a22f_1.MathBase.round(this._relicEffectVO.minValue + __s11local2 * (this._predefinedMinRating / 100), 1);
      __s11local0 = __dep_exact_9e901e8e2483a22f_1.MathBase.round(this._relicEffectVO.minValue + __s11local2 * (this._predefinedMaxRating / 100), 1);
    }
    if (__s11local1 == __s11local0) {
      return __dep_exact_92d05af59ee2ff30.Localize.text("relicequip_dialog_" + this._relicEffectVO.valueTextType + "_value_single", [__s11local1]);
    } else {
      return __dep_exact_92d05af59ee2ff30.Localize.text("relicequip_dialog_" + this._relicEffectVO.valueTextType + "_value", [__s11local1, __s11local0]);
    }
  };
  Object.defineProperty(RelicBonusVO.prototype, "descriptionText", {
    get: function () {
      return __dep_exact_92d05af59ee2ff30.Localize.text(this.getDescriptionTextId(), this.getReplacementsWithBossName(this.effectValue.textReplacements)) + this.decriptionSuffix;
    },
    set: function (__s18param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BonusVO.BonusVO.prototype, "descriptionText").set.call(this, __s18param0);
    },
    enumerable: true,
    configurable: true
  });
  RelicBonusVO.prototype.clone = function () {
    var __s20local0 = new RelicBonusVO();
    __s20local0.parseRelicFromValueArray([this._relicEffectVO ? this._relicEffectVO.id : -1, this._power, ""]);
    __s20local0._effectValue.parseFromValueArray(this._effectValue.rawValues);
    return __s20local0;
  };
  RelicBonusVO.prototype.lordEffectText = function () {
    var __s22local0 = this.maxValueStrength;
    if (__s22local0 < Number.MAX_VALUE) {
      return __dep_exact_92d05af59ee2ff30.Localize.text(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_SIMPLE_COMP, [this.descriptionText, __dep_exact_92d05af59ee2ff30.Localize.text(this.effect.effectType.type.simpleValueTextID == __dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_NOMINAL_ADD ? "equipment_bonus_maximum_noPercentage" : "equipment_bonus_maximum", [__s22local0])]);
    } else {
      return this.descriptionText;
    }
  };
  Object.defineProperty(RelicBonusVO.prototype, "relicEffectVO", {
    get: function () {
      return this._relicEffectVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RelicBonusVO.prototype, "power", {
    get: function () {
      return this._power;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RelicBonusVO.prototype, "predefinedMinRating", {
    set: function (__s30param0) {
      this._predefinedMinRating = __s30param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RelicBonusVO.prototype, "predefinedMaxRating", {
    set: function (__s32param0) {
      this._predefinedMaxRating = __s32param0;
    },
    enumerable: true,
    configurable: true
  });
  return RelicBonusVO;
}(__dep_export_BonusVO.BonusVO);
exports.RelicBonusVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ILordEffectText");
