Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_BonusVO = require("gge-module:export_BonusVO");
var __s0local0 = function () {
  function GeneralAbilityEffectXmlVO(__s3param0 = null) {
    if (__s3param0) {
      this.fillFromParamXml(__s3param0);
    }
  }
  GeneralAbilityEffectXmlVO.prototype.fillFromParamXml = function (__s6param0) {
    this._abilityEffectID = parseInt(__s6param0.abilityEffectID || "0");
    this._priority = parseInt(__s6param0.priority || "0");
    this.parseBoni(__s6param0);
  };
  GeneralAbilityEffectXmlVO.prototype.parseBoni = function (__s8param0) {
    this._boni = [];
    var __s8local0 = __dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("effect", __s8param0, "") || __dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("effects", __s8param0, "");
    if (__s8local0 != "") {
      for (var __s8local1 = 0, __s8local2 = __s8local0.split(","); __s8local1 < __s8local2.length; __s8local1++) {
        var __s8local3 = __s8local2[__s8local1];
        if (__s8local3.length > 0) {
          var __s8local4 = __s8local3.split("&");
          var __s8local5 = __dep_export_CastleModel.CastleModel.effectsData.getEffectByID(parseInt(__s8local4[0]));
          var __s8local6 = new __dep_export_BonusVO.BonusVO().parseFromValueString(__s8local5, __s8local4[1]);
          this._boni.push(__s8local6);
        }
      }
      if (this._boni.length > 1) {
        this._boni[0].effectValue.parseFromValueArray([this._boni[0].effectValue.strength, this._boni[1].effectValue.strength]);
      }
    }
  };
  GeneralAbilityEffectXmlVO.prototype.getEffectValueByType = function (__s15param0, __s15param1 = -1, __s15param2 = -1, __s15param3 = -1, __s15param4 = null) {
    var __s15local0 = new __s15param0.valueClass();
    if (this._boni != null) {
      for (var __s15local1 = 0, __s15local2 = this._boni; __s15local1 < __s15local2.length; __s15local1++) {
        var __s15local3 = __s15local2[__s15local1];
        if (__s15local3 !== undefined && __s15local3.matchesConditions(__s15param0, __s15param1, __s15param2, __s15param3, __s15param4)) {
          __s15local0.add(__s15local3.effectValue, null);
        }
      }
    }
    return __s15local0;
  };
  Object.defineProperty(GeneralAbilityEffectXmlVO.prototype, "amountOfBoni", {
    get: function () {
      return this._boni.length;
    },
    enumerable: true,
    configurable: true
  });
  GeneralAbilityEffectXmlVO.prototype.getEffect = function (__s23param0) {
    return this._boni[__s23param0];
  };
  GeneralAbilityEffectXmlVO.prototype.getCurrentEffectValue = function (__s25param0) {
    return this._boni[__s25param0].effectValue;
  };
  GeneralAbilityEffectXmlVO.prototype.getCurrentEffectTypeId = function (__s27param0) {
    return this._boni[__s27param0].effect.effectTypeID;
  };
  Object.defineProperty(GeneralAbilityEffectXmlVO.prototype, "abilityEffectID", {
    get: function () {
      return this._abilityEffectID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralAbilityEffectXmlVO.prototype, "priority", {
    get: function () {
      return this._priority;
    },
    enumerable: true,
    configurable: true
  });
  return GeneralAbilityEffectXmlVO;
}();
exports.GeneralAbilityEffectXmlVO = __s0local0;
