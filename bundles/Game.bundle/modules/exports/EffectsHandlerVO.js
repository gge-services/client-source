Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function EffectsHandlerVO() {
    this._boni = [];
  }
  EffectsHandlerVO.prototype.getBonusVOsByType = function (__s5param0, __s5param1) {
    __s5param1 = __s5param1 || __dep_export_CastleEffectConditionVO.CastleEffectConditionVO.NULL_CONDITION;
    var __s5local0 = [];
    this._boni.forEach(function (__s7param0) {
      if (__s7param0.matchesConditions(__s5param0, __s5param1.areaType, __s5param1.spaceId, __s5param1.wodId, __s5param1.otherPlayer)) {
        __s5local0.push(__s7param0);
      }
    });
    return __s5local0;
  };
  EffectsHandlerVO.prototype.getEffectValueByType = function (__s10param0, __s10param1 = -1, __s10param2 = -1, __s10param3 = -1, __s10param4 = null) {
    var __s10local0 = __dep_export_CastleEffectsHelper.CastleEffectsHelper.getTotalEffectValue(this.getBonusVOsByType(__s10param0, new __dep_export_CastleEffectConditionVO.CastleEffectConditionVO(__s10param1, __s10param2, __s10param3)), this.ignoreCap);
    return __s10local0 || new __s10param0.valueClass();
  };
  EffectsHandlerVO.prototype.getBonusVOByEffectType = function (__s12param0) {
    if (__s12param0 == __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_UNKNOWN) {
      if (this._boni.length > 0) {
        return this._boni[0];
      } else {
        return null;
      }
    }
    if (this._boni != null) {
      for (var __s12local0 = 0, __s12local1 = this._boni; __s12local0 < __s12local1.length; __s12local0++) {
        var __s12local2 = __s12local1[__s12local0];
        if (__s12local2 !== undefined && __s12local2.effect.effectTypeID == __s12param0.id) {
          return __s12local2;
        }
      }
    }
    return null;
  };
  EffectsHandlerVO.prototype.hasEffects = function () {
    return this._boni.length > 0;
  };
  Object.defineProperty(EffectsHandlerVO.prototype, "boni", {
    get: function () {
      return this._boni;
    },
    enumerable: true,
    configurable: true
  });
  EffectsHandlerVO.prototype.getBoniVOByFirstFoundEffectType = function (__s25param0) {
    if (__s25param0 && __s25param0.length > 0 && this.hasEffects) {
      for (var __s25local0 = 0; __s25local0 < __s25param0.length; __s25local0++) {
        if (this._boni != null) {
          for (var __s25local1 = 0, __s25local2 = this._boni; __s25local1 < __s25local2.length; __s25local1++) {
            var __s25local3 = __s25local2[__s25local1];
            if (__s25local3 !== undefined && __s25local3.effect.effectTypeID == __s25param0[__s25local0].id) {
              return __s25local3;
            }
          }
        }
      }
    }
    return null;
  };
  EffectsHandlerVO.prototype.hasOneOrMoreEffectTypes = function (__s34param0, __s34param1 = false) {
    if (__s34param0 && __s34param0.length > 0 && this.hasEffects) {
      for (var __s34local0 = 0; __s34local0 < __s34param0.length; __s34local0++) {
        if (this._boni != null) {
          for (var __s34local1 = 0, __s34local2 = this._boni; __s34local1 < __s34local2.length; __s34local1++) {
            var __s34local3 = __s34local2[__s34local1];
            if (__s34local3 !== undefined && __s34local3.effect.effectTypeID == __s34param0[__s34local0].id) {
              if (!__s34param1) {
                return true;
              }
              if (__s34local3.effectValue.strength < 0) {
                return true;
              }
            }
          }
        }
      }
    }
    return false;
  };
  EffectsHandlerVO.prototype.hasAllEffectTypes = function (__s45param0) {
    if (__s45param0 && __s45param0.length > 0 && this.hasEffects) {
      var __s45local0 = new Map();
      for (var __s45local1 = 0; __s45local1 < __s45param0.length; __s45local1++) {
        __s45local0.set(__s45param0[__s45local1], false);
        if (this._boni != null) {
          for (var __s45local2 = 0, __s45local3 = this._boni; __s45local2 < __s45local3.length; __s45local2++) {
            __s45local6 = __s45local3[__s45local2];
            if (__s45local6 !== undefined && __s45local6.effect.effectTypeID == __s45param0[__s45local1].id) {
              __s45local0.set(__s45param0[__s45local1], true);
            }
          }
        }
      }
      if (__s45local0 != null) {
        for (var __s45local4 = 0, __s45local5 = Array.from(__s45local0.values()); __s45local4 < __s45local5.length; __s45local4++) {
          var __s45local6;
          __s45local6 = __s45local5[__s45local4];
          if (__s45local6 !== undefined && !__s45local6) {
            return false;
          }
        }
      }
      return true;
    }
    return false;
  };
  Object.defineProperty(EffectsHandlerVO.prototype, "ignoreCap", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  return EffectsHandlerVO;
}();
exports.EffectsHandlerVO = __s0local0;
var __dep_export_CastleEffectsHelper = require("gge-module:export_CastleEffectsHelper");
var __dep_export_CastleEffectConditionVO = require("gge-module:export_CastleEffectConditionVO");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
