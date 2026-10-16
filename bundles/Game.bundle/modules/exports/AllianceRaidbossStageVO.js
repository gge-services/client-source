Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_BonusVO = require("gge-module:export_BonusVO");
var __s0local0 = function () {
  function AllianceRaidbossStageVO() {
    this._raidBossStageID = 0;
    this._raidBossLevelID = 0;
    this._health = 0;
    this._defenderStageEffects = [];
    this._attackerStageEffects = [];
    this._defenderBattleEffects = [];
    this._attackerBattleEffects = [];
    this._defenderPostBattleEffects = [];
    this._attackerPostBattleEffects = [];
    this._defenderWallRegenerationEffects = [];
    this._generalID = 0;
    CONSTRUCTOR_HACK;
  }
  AllianceRaidbossStageVO.prototype.parseXML = function (__s5param0) {
    this._raidBossStageID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("raidBossStageID", __s5param0, "0", true));
    this._raidBossLevelID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("raidBossLevelID", __s5param0, "0", true));
    this._health = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("health", __s5param0, "0", true));
    this._generalID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("generalID", __s5param0, "0", true));
    var __s5local0 = __dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("defenderStageEffects", __s5param0, "", true);
    this.parseEffects(__s5local0, this._defenderStageEffects);
    var __s5local1 = __dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("attackerStageEffects", __s5param0, "", true);
    this.parseEffects(__s5local1, this._attackerStageEffects);
    var __s5local2 = __dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("defenderBattleEffects", __s5param0, "", true);
    this.parseEffects(__s5local2, this._defenderBattleEffects);
    var __s5local3 = __dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("attackerBattleEffects", __s5param0, "", true);
    this.parseEffects(__s5local3, this._attackerBattleEffects);
    var __s5local4 = __dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("defenderPostBattleEffects", __s5param0, "", true);
    this.parseEffects(__s5local4, this._defenderPostBattleEffects);
    var __s5local5 = __dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("attackerPostBattleEffects", __s5param0, "", true);
    this.parseEffects(__s5local5, this._attackerPostBattleEffects);
    var __s5local6 = __dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("defenderWallRegenerationEffects", __s5param0, "", true);
    this.parseEffects(__s5local6, this._defenderWallRegenerationEffects);
    var __s5local7 = __dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("HighlightEffectIcon", __s5param0, "", false);
    this._highlightedEffectIDs = __dep_export_CastleXMLUtils.CastleXMLUtils.getIntArrayFromString(__s5local7, ",");
    this._courtyardPointFactor = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("courtyardPointFactor", __s5param0, "0", true));
    this._wallPointFactor = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("wallPointFactor", __s5param0, "0", true));
  };
  AllianceRaidbossStageVO.prototype.parseEffects = function (__s7param0, __s7param1) {
    for (var __s7local0 = 0, __s7local1 = __s7param0.split(","); __s7local0 < __s7local1.length; __s7local0++) {
      var __s7local2 = __s7local1[__s7local0];
      if (__s7local2 != "") {
        var __s7local3 = __s7local2.split("&");
        var __s7local4 = __dep_export_CastleModel.CastleModel.effectsData.getEffectByID(parseInt(__s7local3[0]));
        var __s7local5 = new __dep_export_BonusVO.BonusVO().parseFromValueString(__s7local4, __s7local3[1]);
        __s7param1.push(__s7local5);
      }
    }
  };
  Object.defineProperty(AllianceRaidbossStageVO.prototype, "raidBossStageID", {
    get: function () {
      return this._raidBossStageID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceRaidbossStageVO.prototype, "raidBossLevelID", {
    get: function () {
      return this._raidBossLevelID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceRaidbossStageVO.prototype, "health", {
    get: function () {
      return this._health;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceRaidbossStageVO.prototype, "defenderStageEffects", {
    get: function () {
      return this._defenderStageEffects;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceRaidbossStageVO.prototype, "attackerStageEffects", {
    get: function () {
      return this._attackerStageEffects;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceRaidbossStageVO.prototype, "defenderBattleEffects", {
    get: function () {
      return this._defenderBattleEffects;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceRaidbossStageVO.prototype, "attackerBattleEffects", {
    get: function () {
      return this._attackerBattleEffects;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceRaidbossStageVO.prototype, "defenderPostBattleEffects", {
    get: function () {
      return this._defenderPostBattleEffects;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceRaidbossStageVO.prototype, "attackerPostBattleEffects", {
    get: function () {
      return this._attackerPostBattleEffects;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceRaidbossStageVO.prototype, "defenderWallRegenerationEffects", {
    get: function () {
      return this._defenderWallRegenerationEffects;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceRaidbossStageVO.prototype, "generalID", {
    get: function () {
      return this._generalID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceRaidbossStageVO.prototype, "highlightedEffectIDs", {
    get: function () {
      return this._highlightedEffectIDs;
    },
    enumerable: true,
    configurable: true
  });
  AllianceRaidbossStageVO.prototype.getHighlightedEffects = function () {
    var __s36local0 = [];
    for (var __s36local1 = 0, __s36local2 = this._highlightedEffectIDs; __s36local1 < __s36local2.length; __s36local1++) {
      var __s36local3 = __s36local2[__s36local1];
      var __s36local4 = __dep_export_CastleModel.CastleModel.effectsData.getEffectByID(__s36local3);
      if (__s36local4) {
        __s36local0.push(__s36local4);
      }
    }
    return __s36local0;
  };
  Object.defineProperty(AllianceRaidbossStageVO.prototype, "courtyardPointFactor", {
    get: function () {
      return this._courtyardPointFactor;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceRaidbossStageVO.prototype, "wallPointFactor", {
    get: function () {
      return this._wallPointFactor;
    },
    enumerable: true,
    configurable: true
  });
  return AllianceRaidbossStageVO;
}();
exports.AllianceRaidbossStageVO = __s0local0;
