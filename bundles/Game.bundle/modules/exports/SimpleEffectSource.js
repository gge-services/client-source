Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleEffectsHelper = require("gge-module:export_CastleEffectsHelper");
var __dep_export_RawLordEffectBonusVO = require("gge-module:export_RawLordEffectBonusVO");
var __dep_export_CastleEffectConditionVO = require("gge-module:export_CastleEffectConditionVO");
var __s0local0 = function () {
  function SimpleEffectSource() {
    this._ignoreCap = false;
    this._effects = [];
  }
  SimpleEffectSource.prototype.parseEffects = function (__s5param0) {
    this._effects = [];
    for (var __s5local0 = 0; __s5local0 < __s5param0.length; __s5local0++) {
      var __s5local1 = __s5param0[__s5local0];
      var __s5local2 = new __dep_export_RawLordEffectBonusVO.RawLordEffectBonusVO();
      var __s5local3 = __dep_export_CastleModel.CastleModel.effectsData.getEffectByID(__s5local1[0]);
      __s5local2.parseFromValueArray(__s5local3, __s5local1[1], __s5local1[2]);
      if (__s5local2.effect) {
        this._effects.push(__s5local2);
      }
    }
  };
  SimpleEffectSource.prototype.getEffectValue = function (__s10param0, __s10param1 = null) {
    if (__s10param1 == null) {
      __s10param1 = __dep_export_CastleEffectConditionVO.CastleEffectConditionVO.NULL_CONDITION;
    }
    var __s10local0 = __dep_export_CastleEffectsHelper.CastleEffectsHelper.getTotalEffectValue(this.getBonusVOsByType(__s10param0, __s10param1), this._ignoreCap);
    return __s10local0 || new __s10param0.valueClass();
  };
  SimpleEffectSource.prototype.getBonusVOsByType = function (__s13param0, __s13param1 = null) {
    if (__s13param1 == null) {
      __s13param1 = __dep_export_CastleEffectConditionVO.CastleEffectConditionVO.NULL_CONDITION;
    }
    var __s13local0 = [];
    for (var __s13local1 = 0; __s13local1 < this._effects.length; __s13local1++) {
      var __s13local2 = this._effects[__s13local1];
      if (__s13local2.matchesConditions(__s13param0, __s13param1.areaType, __s13param1.spaceId, __s13param1.wodId, __s13param1.otherPlayer)) {
        __s13local0.push(__s13local2);
      }
    }
    return __s13local0;
  };
  Object.defineProperty(SimpleEffectSource.prototype, "effects", {
    get: function () {
      return this._effects;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SimpleEffectSource.prototype, "ignoreCap", {
    get: function () {
      return this._ignoreCap;
    },
    set: function (__s23param0) {
      this._ignoreCap = __s23param0;
    },
    enumerable: true,
    configurable: true
  });
  return SimpleEffectSource;
}();
exports.SimpleEffectSource = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEffectSource");
