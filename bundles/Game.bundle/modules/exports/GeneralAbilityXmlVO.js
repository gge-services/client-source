Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function () {
  function GeneralAbilityXmlVO(__s3param0 = null) {
    if (__s3param0) {
      this.fillFromParamXml(__s3param0);
    }
  }
  GeneralAbilityXmlVO.prototype.fillFromParamXml = function (__s6param0) {
    this._abilityID = parseInt(__s6param0.abilityID || "0");
    this._name = __s6param0.name;
    this._abilityGroupID = parseInt(__s6param0.abilityGroupID || "0");
    this._level = parseInt(__s6param0.level || "0");
    this._abilityTriggerID = parseInt(__s6param0.abilityTriggerID || "0");
    this._triggerPerWave = parseInt(__s6param0.triggerPerWave || "0");
    this._abilityDefenseEffectID = parseInt(__s6param0.abilityDefenseEffectID || "0");
    this._abilityAttackEffectID = parseInt(__s6param0.abilityAttackEffectID || "0");
  };
  Object.defineProperty(GeneralAbilityXmlVO.prototype, "abilityID", {
    get: function () {
      return this._abilityID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralAbilityXmlVO.prototype, "name", {
    get: function () {
      return this._name;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralAbilityXmlVO.prototype, "abilityGroupID", {
    get: function () {
      return this._abilityGroupID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralAbilityXmlVO.prototype, "level", {
    get: function () {
      return this._level;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralAbilityXmlVO.prototype, "abilityTriggerID", {
    get: function () {
      return this._abilityTriggerID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralAbilityXmlVO.prototype, "triggerPerWave", {
    get: function () {
      return this._triggerPerWave;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralAbilityXmlVO.prototype, "abilityDefenseEffectID", {
    get: function () {
      return this._abilityDefenseEffectID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralAbilityXmlVO.prototype, "abilityAttackEffectID", {
    get: function () {
      return this._abilityAttackEffectID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralAbilityXmlVO.prototype, "abilityAttackEffect", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.generalsData.getAbilityEffectByID(this.abilityAttackEffectID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralAbilityXmlVO.prototype, "abilityDefenseEffect", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.generalsData.getAbilityEffectByID(this.abilityDefenseEffectID);
    },
    enumerable: true,
    configurable: true
  });
  GeneralAbilityXmlVO.prototype.getAbilitEffect = function (__s28param0) {
    if (__s28param0) {
      return this.abilityAttackEffect;
    } else {
      return this.abilityDefenseEffect;
    }
  };
  GeneralAbilityXmlVO.TRIGGER_PRECOMBAT = 1;
  GeneralAbilityXmlVO.TRIGGER_EVERYXWAVES = 2;
  GeneralAbilityXmlVO.TRIGGER_YARD = 3;
  GeneralAbilityXmlVO.TRIGGER_POSTCOMBAT = 4;
  return GeneralAbilityXmlVO;
}();
exports.GeneralAbilityXmlVO = __s0local0;
