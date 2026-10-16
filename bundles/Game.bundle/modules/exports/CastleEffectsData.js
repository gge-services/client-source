Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __s0local0 = function () {
  function CastleEffectsData(__s3param0) {
    this.parseXML(__s3param0);
  }
  CastleEffectsData.prototype.parseXML = function (__s5param0) {
    this.configXML = __s5param0;
    this._effectTypes = new Map();
    this._effectTypes.set(-1, new __dep_export_CastleEffectTypeVO.CastleEffectTypeVO());
    var __s5local0 = __s5param0.effecttypes;
    if (__s5local0 != null) {
      for (var __s5local1 = 0, __s5local2 = __s5local0; __s5local1 < __s5local2.length; __s5local1++) {
        var __s5local3 = __s5local2[__s5local1];
        if (__s5local3 !== undefined) {
          var __s5local4 = parseInt(__s5local3.effectTypeID || "");
          var __s5local5 = new __dep_export_CastleEffectTypeVO.CastleEffectTypeVO(__s5local3);
          this._effectTypes.set(__s5local4, __s5local5);
        }
      }
    }
    this._effects = new Map();
    var __s5local6 = __s5param0.effects;
    if (__s5local6 != null) {
      for (var __s5local7 = 0, __s5local8 = __s5local6; __s5local7 < __s5local8.length; __s5local7++) {
        var __s5local9 = __s5local8[__s5local7];
        if (__s5local9 !== undefined) {
          var __s5local10 = new __dep_export_EffectVO.EffectVO(__s5local9);
          this._effects.set(parseInt(__s5local9.effectID || ""), __s5local10);
        }
      }
    }
    this._effectCaps = __dep_export_CastleXMLUtils.CastleXMLUtils.createDicFromXmlNode(__s5param0, "effectCaps", __dep_export_EffectCapVO.EffectCapVO);
  };
  CastleEffectsData.prototype.isAttackEffect = function (__s15param0) {
    return this.effectTypes.get(__s15param0.id).combatType == 1 || this.effectTypes.get(__s15param0.id).combatType == 3;
  };
  CastleEffectsData.prototype.isDefenseEffect = function (__s17param0) {
    return this.effectTypes.get(__s17param0.id).combatType == 2 || this.effectTypes.get(__s17param0.id).combatType == 3;
  };
  CastleEffectsData.prototype.getEffectByID = function (__s19param0) {
    return this._effects.get(__s19param0);
  };
  CastleEffectsData.prototype.getEffectTypeByID = function (__s21param0) {
    return this._effectTypes.get(__s21param0);
  };
  CastleEffectsData.prototype.getEffectCap = function (__s23param0) {
    return this._effectCaps.get(__s23param0);
  };
  Object.defineProperty(CastleEffectsData.prototype, "effectCaps", {
    get: function () {
      return this._effectCaps;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEffectsData.prototype, "effects", {
    get: function () {
      return this._effects;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEffectsData.prototype, "effectTypes", {
    get: function () {
      return this._effectTypes;
    },
    enumerable: true,
    configurable: true
  });
  return CastleEffectsData;
}();
exports.CastleEffectsData = __s0local0;
var __dep_export_EffectCapVO = require("gge-module:export_EffectCapVO");
var __dep_export_EffectVO = require("gge-module:export_EffectVO");
var __dep_export_CastleEffectTypeVO = require("gge-module:export_CastleEffectTypeVO");
