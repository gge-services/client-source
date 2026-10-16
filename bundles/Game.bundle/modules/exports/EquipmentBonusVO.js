Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_SpecialServerHelper = require("gge-module:export_SpecialServerHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_BonusVO = require("gge-module:export_BonusVO");
var __dep_export_EffectSourceEnum = require("gge-module:export_EffectSourceEnum");
var __s0local0 = function (__s1param0) {
  function EquipmentBonusVO() {
    var __s3local0 = this;
    __s3local0._id = 0;
    __s3local0._overridesBonusCap = false;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).addEffectSource(__dep_export_EffectSourceEnum.EffectSourceEnum.EQUIPMENT);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(EquipmentBonusVO, __s1param0);
  EquipmentBonusVO.prototype.parseEquipmentFromValueString = function (__s5param0, __s5param1) {
    this.parseBasic(__s5param0);
    return __s1param0.prototype.parseFromValueString.call(this, __dep_export_CastleModel.CastleModel.equipData.equipmentXml.getEquippableEffectByEquipmentEffect(this._id), __s5param1);
  };
  EquipmentBonusVO.prototype.parseEquipmentFromValueArray = function (__s7param0, __s7param1) {
    this.parseBasic(__s7param0);
    return __s1param0.prototype.parseFromValueArray.call(this, __dep_export_CastleModel.CastleModel.equipData.equipmentXml.getEquippableEffectByEquipmentEffect(this._id), __s7param1);
  };
  EquipmentBonusVO.prototype.parseBasic = function (__s9param0) {
    this._id = __s9param0;
    if (__dep_export_CastleModel.CastleModel.equipData.equipmentXml.equipmentEffects.get(this._id) != null) {
      this._overridesBonusCap = __dep_export_CastleModel.CastleModel.equipData.equipmentXml.getEquipmentEffect(this._id).ignoreCap;
    }
  };
  EquipmentBonusVO.prototype.clone = function () {
    return new EquipmentBonusVO().parseEquipmentFromValueArray(this._id, this._effectValue.rawValues);
  };
  Object.defineProperty(EquipmentBonusVO.prototype, "descriptionText", {
    get: function () {
      var __s14local0 = this;
      var __s14local1 = __dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("equip_effect_description_" + this.effect.name);
      if (this.effectValue.allTextReplacements) {
        var __s14local2 = this.effectValue.allTextReplacements;
        if (__s14local2.length > 1) {
          return __s14local2.map(function (__s18param0) {
            return __dep_exact_92d05af59ee2ff30.Localize.text(__s14local1, __s14local0.getReplacementsWithBossName(__s18param0));
          }).join("\n") + this.decriptionSuffix;
        }
      }
      return __dep_exact_92d05af59ee2ff30.Localize.text(__s14local1, this.getReplacementsWithBossName(this.effectValue.textReplacements)) + this.decriptionSuffix;
    },
    set: function (__s20param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BonusVO.BonusVO.prototype, "descriptionText").set.call(this, __s20param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EquipmentBonusVO.prototype, "descriptionTextShort", {
    get: function () {
      return __dep_exact_92d05af59ee2ff30.Localize.text(__dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("equip_effect_description_short_" + this.effect.name), this.effectValue.textReplacements);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EquipmentBonusVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EquipmentBonusVO.prototype, "overridesBonusCap", {
    get: function () {
      return this._overridesBonusCap;
    },
    enumerable: true,
    configurable: true
  });
  EquipmentBonusVO.prototype.lordEffectText = function () {
    var __s28local0 = this.descriptionText;
    var __s28local1 = this.maxValueStrength;
    if (__s28local1 < Number.MAX_VALUE && !this._overridesBonusCap) {
      return __dep_exact_92d05af59ee2ff30.Localize.text(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_SIMPLE_COMP, [__s28local0, __dep_exact_92d05af59ee2ff30.Localize.text(this.effect.effectType.type.simpleValueTextID == __dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_NOMINAL_ADD ? "equipment_bonus_maximum_noPercentage" : "equipment_bonus_maximum", [__s28local1])]);
    } else {
      return this.descriptionText;
    }
  };
  Object.defineProperty(EquipmentBonusVO.prototype, "maxValueStrength", {
    get: function () {
      if (this.overridesBonusCap) {
        return Number.MAX_VALUE;
      } else {
        return __dep_export_CastleModel.CastleModel.effectsData.getEffectCap(this.effect.capId).maxTotalBonus;
      }
    },
    set: function (__s36param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BonusVO.BonusVO.prototype, "maxValueStrength").set.call(this, __s36param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EquipmentBonusVO.prototype, "capID", {
    get: function () {
      if (this._overridesBonusCap) {
        return -1;
      } else {
        return this.effect.capId;
      }
    },
    enumerable: true,
    configurable: true
  });
  return EquipmentBonusVO;
}(__dep_export_BonusVO.BonusVO);
exports.EquipmentBonusVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ILordEffectText");
