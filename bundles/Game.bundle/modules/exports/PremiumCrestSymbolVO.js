Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleEffectsHelper = require("gge-module:export_CastleEffectsHelper");
var __dep_export_ACrestSymbolVO = require("gge-module:export_ACrestSymbolVO");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_BonusVO = require("gge-module:export_BonusVO");
var __dep_export_CastleEffectConditionVO = require("gge-module:export_CastleEffectConditionVO");
var __s0local0 = function (__s1param0) {
  function PremiumCrestSymbolVO(__s3param0) {
    var __s3local0 = this;
    __s3local0._requiredAchievmentID = 0;
    __s3local0._costC1 = 0;
    __s3local0._costC2 = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(PremiumCrestSymbolVO, __s1param0);
  PremiumCrestSymbolVO.prototype.parseXML = function (__s5param0) {
    this._requiredAchievmentID = __dep_exact_f855840627e6e145.int(__s5param0.requiredAchievementID || "");
    if ((__s5param0.costC1 || "").length > 0) {
      this._costC1 = parseInt(__s5param0.costC1 || "");
    }
    if ((__s5param0.costC2 || "").length > 0) {
      this._costC2 = parseInt(__s5param0.costC2 || "");
    }
    this.parseEffects(__s5param0);
  };
  PremiumCrestSymbolVO.prototype.parseEffects = function (__s9param0) {
    this._effects = [];
    var __s9local0 = __dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("effects", __s9param0, "");
    if (__s9local0 != "") {
      for (var __s9local1 = 0, __s9local2 = __s9local0.split(","); __s9local1 < __s9local2.length; __s9local1++) {
        var __s9local3 = __s9local2[__s9local1];
        if (__s9local3.length > 0) {
          var __s9local4 = __s9local3.split("&");
          var __s9local5 = __dep_export_CastleModel.CastleModel.effectsData.getEffectByID(parseInt(__s9local4[0]));
          var __s9local6 = new __dep_export_BonusVO.BonusVO().parseFromValueString(__s9local5, __s9local4[1]);
          this._effects.push(__s9local6);
        }
      }
    }
  };
  Object.defineProperty(PremiumCrestSymbolVO.prototype, "toolTipText", {
    get: function () {
      var __s15local0 = "";
      for (var __s15local1 = 0; __s15local1 < this._effects.length; __s15local1++) {
        var __s15local2 = this._effects[__s15local1];
        if (__s15local0 != "") {
          __s15local0 += "\n";
        }
        __s15local0 += __dep_exact_92d05af59ee2ff30.Localize.text("crestSymbol_" + __s15local2.effect.name, __s15local2.effectValue.textReplacements);
      }
      return __s15local0;
    },
    enumerable: true,
    configurable: true
  });
  PremiumCrestSymbolVO.prototype.getAdjustedTooltipText = function (__s20param0 = false) {
    if (__s20param0) {
      var __s20local0 = "";
      for (var __s20local1 = 0; __s20local1 < this._effects.length; __s20local1++) {
        var __s20local2 = this._effects[__s20local1];
        if (__s20local0 != "") {
          __s20local0 += "\n";
        }
        var __s20local3 = __s20local2.effectValue.clone();
        __s20local3.add(__s20local2.effectValue, null);
        __s20local0 += __dep_exact_92d05af59ee2ff30.Localize.text("crestSymbol_" + __s20local2.effect.name, __s20local3.textReplacements);
      }
      return __s20local0;
    }
    return this.toolTipText;
  };
  Object.defineProperty(PremiumCrestSymbolVO.prototype, "requiredAchievmentID", {
    get: function () {
      return this._requiredAchievmentID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PremiumCrestSymbolVO.prototype, "costC1", {
    get: function () {
      return this._costC1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PremiumCrestSymbolVO.prototype, "costC2", {
    get: function () {
      return this._costC2;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PremiumCrestSymbolVO.prototype, "effects", {
    get: function () {
      return this._effects;
    },
    enumerable: true,
    configurable: true
  });
  PremiumCrestSymbolVO.prototype.getEffectValue = function (__s34param0, __s34param1) {
    var __s34local0 = __dep_export_CastleEffectsHelper.CastleEffectsHelper.getTotalEffectValue(this.getEffectsByType(__s34param0, __s34param1), true);
    return __s34local0 || new __s34param0.valueClass();
  };
  PremiumCrestSymbolVO.prototype.getEffectsByType = function (__s36param0, __s36param1 = null) {
    __s36param1 = __s36param1 || __dep_export_CastleEffectConditionVO.CastleEffectConditionVO.NULL_CONDITION;
    var __s36local0 = [];
    if (this._effects != null) {
      for (var __s36local1 = 0, __s36local2 = this._effects; __s36local1 < __s36local2.length; __s36local1++) {
        var __s36local3 = __s36local2[__s36local1];
        if (__s36local3 !== undefined && __s36local3.matchesConditions(__s36param0, __s36param1.areaType, __s36param1.spaceId, __s36param1.wodId, __s36param1.otherPlayer)) {
          __s36local0.push(__s36local3);
        }
      }
    }
    return __s36local0;
  };
  return PremiumCrestSymbolVO;
}(__dep_export_ACrestSymbolVO.ACrestSymbolVO);
exports.PremiumCrestSymbolVO = __s0local0;
