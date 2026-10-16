Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function EffectVO(__s3param0 = null) {
    this._effectID = 0;
    this._effectTypeID = 0;
    this._isPvPFight = false;
    this._isPvEFight = false;
    this._capId = 0;
    this._raidBossIDs = [];
    if (__s3param0) {
      this.parseXML(__s3param0);
    }
  }
  EffectVO.prototype.parseXML = function (__s6param0) {
    this._effectID = parseInt(__s6param0.effectID || "");
    this._name = __s6param0.name || "";
    this._effectTypeID = __dep_exact_f855840627e6e145.int(__s6param0.effectTypeID || "");
    this._areaTypes = __dep_export_CastleXMLUtils.CastleXMLUtils.getIntArrayFromString(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("areaTypeID", __s6param0, ""), ",");
    this._playerRelation = __dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("playerRelation", __s6param0, "");
    this._spaceIDs = __dep_export_CastleXMLUtils.CastleXMLUtils.getIntArrayFromString(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("spaceIDs", __s6param0, ""), ",");
    this._isPvPFight = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("isPvPFight", __s6param0, "0")) == 1;
    this._isPvEFight = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("isPvEFight", __s6param0, "0")) == 1;
    this._capId = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("capID", __s6param0, -1));
    this._raidBossIDs = __dep_export_CastleXMLUtils.CastleXMLUtils.getIntArrayFromString(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("raidBossID", __s6param0, ""), ",");
  };
  EffectVO.prototype.isForAreaType = function (__s8param0) {
    return this.areaTypes.length == 0 || this.areaTypes.indexOf(__s8param0) > -1;
  };
  EffectVO.prototype.isForSpaceID = function (__s10param0) {
    return this.spaceIDs.length == 0 || this.spaceIDs.indexOf(__s10param0) > -1;
  };
  EffectVO.prototype.isForRaidBoss = function (__s12param0) {
    return this.raidBossIDs.length == 0 || this.raidBossIDs.indexOf(__s12param0) > -1;
  };
  Object.defineProperty(EffectVO.prototype, "effectID", {
    get: function () {
      return this._effectID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EffectVO.prototype, "effectType", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.effectsData.getEffectTypeByID(this._effectTypeID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EffectVO.prototype, "areaTypes", {
    get: function () {
      return this._areaTypes;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EffectVO.prototype, "spaceIDs", {
    get: function () {
      return this._spaceIDs;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EffectVO.prototype, "name", {
    get: function () {
      return this._name;
    },
    enumerable: true,
    configurable: true
  });
  EffectVO.prototype.getEnhancedName = function (__s24param0) {
    if (this.effectType.type == __dep_export_EffectTypeEnum.EffectTypeEnum.CRAFTING_QUEUE_PRODUCTION_BOOST) {
      return this._name + "_" + __s24param0.rawValues[0];
    } else {
      return this.name;
    }
  };
  Object.defineProperty(EffectVO.prototype, "effectTypeID", {
    get: function () {
      return this._effectTypeID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EffectVO.prototype, "playerRelation", {
    get: function () {
      return this._playerRelation;
    },
    enumerable: true,
    configurable: true
  });
  EffectVO.prototype.checkPlayerRelation = function (__s32param0) {
    switch (this._playerRelation) {
      case EffectVO.RELATION_ALLIANCE_IN_WAR:
        return __dep_export_CastleModel.CastleModel.allianceData.getStatusByAlliance(__s32param0.allianceID) == __dep_exact_26a421b704832cff.AllianceConst.DIPLOMACY_IN_WAR;
      case EffectVO.RELATION_SAME_ALLIANCE:
        return __dep_export_CastleModel.CastleModel.userData.isUserInMyAlliance(__s32param0) && !__s32param0.isOwnOwnerInfo;
      case EffectVO.RELATION_SAME_PLAYER:
        return __s32param0.isOwnOwnerInfo;
    }
    return true;
  };
  Object.defineProperty(EffectVO.prototype, "effectCategory", {
    get: function () {
      return this.effectType.effectCategory;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EffectVO.prototype, "effectGroup", {
    get: function () {
      return this.effectType.effectGroup;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EffectVO.prototype, "isPvPFight", {
    get: function () {
      return this._isPvPFight;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EffectVO.prototype, "isPvEFight", {
    get: function () {
      return this._isPvEFight;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EffectVO.prototype, "capId", {
    get: function () {
      return this._capId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EffectVO.prototype, "raidBossIDs", {
    get: function () {
      return this._raidBossIDs;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EffectVO.prototype, "defaultTextID", {
    get: function () {
      return "effect_description_" + this.name;
    },
    enumerable: true,
    configurable: true
  });
  EffectVO.CATEGORY_NO_CATEGORY = 99;
  EffectVO.RELATION_SAME_ALLIANCE = "sameAlliance";
  EffectVO.RELATION_ALLIANCE_IN_WAR = "allianceInWar";
  EffectVO.RELATION_SAME_PLAYER = "samePlayer";
  return EffectVO;
}();
exports.EffectVO = __s0local0;
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
