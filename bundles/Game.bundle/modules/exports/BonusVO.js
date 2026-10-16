Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_SpecialServerHelper = require("gge-module:export_SpecialServerHelper");
var __dep_export_CastleDataHolder = require("gge-module:export_CastleDataHolder");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_EffectSourceEnum = require("gge-module:export_EffectSourceEnum");
var __s0local0 = function () {
  function BonusVO() {
    this._effectSources = [];
  }
  BonusVO.prototype.parseFromValueString = function (__s5param0, __s5param1, __s5param2 = "") {
    this._effect = __s5param0;
    if (__s5param0) {
      this._effectValue = new __s5param0.effectType.valueClass();
      this._effectValue.parseFromValueString(__s5param1);
    }
    this.parseEffectSource(__s5param2);
    return this;
  };
  BonusVO.prototype.parseFromValueArray = function (__s8param0, __s8param1, __s8param2 = "") {
    this._effect = __s8param0;
    if (__s8param0) {
      this._effectValue = new __s8param0.effectType.valueClass();
      this._effectValue.parseFromValueArray(__s8param1);
    }
    this.parseEffectSource(__s8param2);
    return this;
  };
  BonusVO.prototype.matchesConditions = function (__s11param0, __s11param1 = -1, __s11param2 = -1, __s11param3 = -1, __s11param4 = null) {
    var __s11local0 = true;
    return !!this.effect && (__s11param0 && __s11param0.id != this.effect.effectType.id && (__s11local0 = false), __s11param3 > -1 && (__dep_exact_81dacdf05bd32292.instanceOfClass(this.effectValue, "EffectValueWodID") && !this.effectValue.hasWodId(__s11param3) || __dep_exact_81dacdf05bd32292.instanceOfClass(this.effectValue, "EffectValueMap") && !this.effectValue.hasWodId(__s11param3)) && (__s11local0 = false), __s11param2 > -1 && !this.effect.isForSpaceID(__s11param2) && (__s11local0 = false), __s11param1 > -1 && !this.effect.isForAreaType(__s11param1) && (__s11local0 = false), __s11param4 && !this.effect.checkPlayerRelation(__s11param4) && (__s11local0 = false), __s11local0);
  };
  Object.defineProperty(BonusVO.prototype, "descriptionText", {
    get: function () {
      var __s13local0 = this;
      var __s13local1 = __dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("equip_effect_description_" + this.effect.name);
      if (this.effectValue.allTextReplacements) {
        var __s13local2 = this.effectValue.allTextReplacements;
        if (__s13local2.length > 1) {
          return __s13local2.map(function (__s17param0) {
            return __dep_exact_92d05af59ee2ff30.Localize.text(__s13local1, __s13local0.getReplacementsWithBossName(__s17param0));
          }).join("\n") + this.decriptionSuffix;
        }
      }
      return __dep_exact_92d05af59ee2ff30.Localize.text(__s13local1, this.getReplacementsWithBossName(this.effectValue.textReplacements)) + this.decriptionSuffix;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BonusVO.prototype, "descriptionTextLines", {
    get: function () {
      var __s19local0 = this;
      var __s19local1 = __dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("equip_effect_description_" + this.effect.name);
      var __s19local2 = this.effectValue.allTextReplacements;
      if (__s19local2 && __s19local2.length > 0) {
        return __s19local2.map(function (__s22param0) {
          return __dep_exact_92d05af59ee2ff30.Localize.text(__s19local1, __s19local0.getReplacementsWithBossName(__s22param0)) + __s19local0.decriptionSuffix;
        });
      } else {
        return [__dep_exact_92d05af59ee2ff30.Localize.text(__s19local1, this.getReplacementsWithBossName(this.effectValue.textReplacements)) + this.decriptionSuffix];
      }
    },
    enumerable: true,
    configurable: true
  });
  BonusVO.prototype.getReplacementsWithBossName = function (__s25param0) {
    var __s25local0 = this.raidBossNameReplacement;
    if (__s25local0 != null) {
      (__s25param0 = __s25param0 ? __s25param0.slice() : []).push(__s25local0);
    }
    return __s25param0;
  };
  Object.defineProperty(BonusVO.prototype, "raidBossNameReplacement", {
    get: function () {
      var __s28local0 = [];
      this.effect.raidBossIDs.forEach(function (__s30param0) {
        var __s30local0 = __dep_export_CastleModel.CastleModel.raidBossData.getRaidBossByID(__s30param0);
        if (__s30local0) {
          __s28local0.push(__dep_exact_92d05af59ee2ff30.Localize.text(__s30local0.getBossNameTextID()));
        }
      });
      if (__s28local0.length > 0) {
        return __s28local0.join(", ");
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BonusVO.prototype, "decriptionSuffix", {
    get: function () {
      if (__dep_export_CastleDataHolder.CastleDataHolder.instance.showEffectTypeIDs) {
        return "  || TypeID: " + this.effect.effectType.id + " ||";
      } else {
        return "";
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BonusVO.prototype, "strength", {
    get: function () {
      return this._effectValue.strength;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BonusVO.prototype, "effect", {
    get: function () {
      return this._effect;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BonusVO.prototype, "effectValue", {
    get: function () {
      return this._effectValue;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BonusVO.prototype, "maxValueStrength", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.effectsData.getEffectCap(this.effect.capId).maxTotalBonus;
    },
    enumerable: true,
    configurable: true
  });
  BonusVO.prototype.clone = function () {
    return new BonusVO().parseFromValueArray(this._effect, this._effectValue.rawValues);
  };
  Object.defineProperty(BonusVO.prototype, "capID", {
    get: function () {
      return this.effect.capId;
    },
    enumerable: true,
    configurable: true
  });
  BonusVO.prototype.addEffectSource = function (__s51param0) {
    if (__s51param0 && this._effectSources.indexOf(__s51param0) == -1) {
      this._effectSources.push(__s51param0);
    }
  };
  Object.defineProperty(BonusVO.prototype, "effectSources", {
    get: function () {
      return this._effectSources;
    },
    enumerable: true,
    configurable: true
  });
  BonusVO.prototype.parseEffectSource = function (__s56param0) {
    var __s56local0 = __dep_export_EffectSourceEnum.EffectSourceEnum.getEffectSourceByServerKey(__s56param0);
    this.addEffectSource(__s56local0);
  };
  return BonusVO;
}();
exports.BonusVO = __s0local0;
