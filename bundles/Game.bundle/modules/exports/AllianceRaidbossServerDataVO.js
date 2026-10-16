Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_AllianceRaidBossCardVO = require("gge-module:export_AllianceRaidBossCardVO");
var __s0local0 = function () {
  function AllianceRaidbossServerDataVO() {
    this._raidBossID = 0;
    this._raidBossLevelID = 0;
    this._raidBossHealth = 0;
    this._raidBossReviveUnitPercentage = 0;
    this._raidBossStageID = 0;
    this._activityPoints = 0;
    this._currentAttacks = [];
    this._leftWallPercentRespawnTimeStamp = 0;
    this._middleWallPercentRespawnTimeStamp = 0;
    this._rightWallPercentRespawnTimeStamp = 0;
    this._leftWallPercent = 0;
    this._middleWallPercent = 0;
    this._rightWallPercent = 0;
    this._bossCards = [];
    CONSTRUCTOR_HACK;
  }
  AllianceRaidbossServerDataVO.prototype.parse_bse = function (__s5param0) {
    this.parseBossCards(__s5param0);
    if (!this.hasActiveBlock(__s5param0)) {
      this.clearActiveRaidState();
      __dep_export_CastleModel.CastleModel.raidBossData.dispatchEvent(new __dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.ARE_BOSS_UPDATED_FULL, [this]));
      return;
    }
    this.parseActiveBlock(__s5param0);
    __dep_export_CastleModel.CastleModel.raidBossData.dispatchEvent(new __dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.ARE_BOSS_UPDATED_FULL, [this]));
  };
  AllianceRaidbossServerDataVO.prototype.parse_bbs = function (__s8param0) {
    this.parseBossCards(__s8param0);
    if (!this.hasActiveBlock(__s8param0)) {
      this.clearActiveRaidState();
      __dep_export_CastleModel.CastleModel.raidBossData.dispatchEvent(new __dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.ARE_BOSS_UPDATED_BASE, [this]));
      return;
    }
    this.parseActiveBlock(__s8param0);
    __dep_export_CastleModel.CastleModel.raidBossData.dispatchEvent(new __dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.ARE_BOSS_UPDATED_BASE, [this]));
  };
  AllianceRaidbossServerDataVO.prototype.parseActiveBlock = function (__s11param0) {
    if (__s11param0[__dep_exact_26a421b704832cff.CommKeys.PORTAL_BOSS_ID] > 0) {
      this._raidBossID = __s11param0[__dep_exact_26a421b704832cff.CommKeys.PORTAL_BOSS_ID];
    }
    this._raidBossLevelID = __s11param0[__dep_exact_26a421b704832cff.CommKeys.LEVEL_ID];
    this._raidBossHealth = __dep_exact_9e901e8e2483a22f.MathBase.ceil(__s11param0[__dep_exact_26a421b704832cff.CommKeys.HEALTH], 2);
    this._raidBossReviveUnitPercentage = __s11param0[__dep_exact_26a421b704832cff.CommKeys.REVIVE_UNIT_PERCENTAGE];
    if (__dep_exact_26a421b704832cff.CommKeys.BOSS_STAGE in __s11param0) {
      this._raidBossStageID = __s11param0[__dep_exact_26a421b704832cff.CommKeys.BOSS_STAGE];
    }
    var __s11local0 = __s11param0[__dep_exact_26a421b704832cff.CommKeys.WALL_INFO];
    if (__s11local0) {
      this._leftWallPercentRespawnTimeStamp = __dep_export_CachedTimer.CachedTimer.getCachedTimer() + __s11local0[__dep_exact_26a421b704832cff.CommKeys.LEFT][__dep_exact_26a421b704832cff.CommKeys.REGEN_TIME] * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
      this._middleWallPercentRespawnTimeStamp = __dep_export_CachedTimer.CachedTimer.getCachedTimer() + __s11local0[__dep_exact_26a421b704832cff.CommKeys.MIDDLE][__dep_exact_26a421b704832cff.CommKeys.REGEN_TIME] * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
      this._rightWallPercentRespawnTimeStamp = __dep_export_CachedTimer.CachedTimer.getCachedTimer() + __s11local0[__dep_exact_26a421b704832cff.CommKeys.RIGHT][__dep_exact_26a421b704832cff.CommKeys.REGEN_TIME] * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
      this._leftWallPercent = __s11local0[__dep_exact_26a421b704832cff.CommKeys.LEFT][__dep_exact_26a421b704832cff.CommKeys.PERCENT_LEFT];
      this._middleWallPercent = __s11local0[__dep_exact_26a421b704832cff.CommKeys.MIDDLE][__dep_exact_26a421b704832cff.CommKeys.PERCENT_LEFT];
      this._rightWallPercent = __s11local0[__dep_exact_26a421b704832cff.CommKeys.RIGHT][__dep_exact_26a421b704832cff.CommKeys.PERCENT_LEFT];
    }
  };
  AllianceRaidbossServerDataVO.prototype.parseBossCards = function (__s16param0) {
    this._bossCards = [];
    var __s16local0 = __s16param0[__dep_exact_26a421b704832cff.CommKeys.BOSS_CARDS];
    if (__s16local0) {
      for (var __s16local1 = 0, __s16local2 = __s16local0; __s16local1 < __s16local2.length; __s16local1++) {
        var __s16local3 = __s16local2[__s16local1];
        var __s16local4 = new __dep_export_AllianceRaidBossCardVO.AllianceRaidBossCardVO();
        __s16local4.parse(__s16local3);
        this._bossCards.push(__s16local4);
      }
    }
  };
  AllianceRaidbossServerDataVO.prototype.hasActiveBlock = function (__s21param0) {
    return __s21param0[__dep_exact_26a421b704832cff.CommKeys.PORTAL_BOSS_ID] > 0 || __s21param0[__dep_exact_26a421b704832cff.CommKeys.LEVEL_ID] > 0;
  };
  AllianceRaidbossServerDataVO.prototype.clearActiveRaidState = function () {
    this._raidBossID = 0;
    this._raidBossLevelID = 0;
    this._raidBossHealth = 0;
    this._raidBossReviveUnitPercentage = 0;
    this._raidBossStageID = 0;
  };
  AllianceRaidbossServerDataVO.prototype.getCurrentXMLBossDataVO = function () {
    return __dep_export_CastleModel.CastleModel.raidBossData.getRaidBossByID(this._raidBossID);
  };
  AllianceRaidbossServerDataVO.prototype.getCurrentXMLBossLevelDataVO = function () {
    return __dep_export_CastleModel.CastleModel.raidBossData.getRaidBossLevelByID(this._raidBossLevelID);
  };
  AllianceRaidbossServerDataVO.prototype.getCurrentXMLBossStageDataVO = function () {
    return __dep_export_CastleModel.CastleModel.raidBossData.getRaidBossStageByID(this._raidBossStageID);
  };
  Object.defineProperty(AllianceRaidbossServerDataVO.prototype, "raidBossID", {
    get: function () {
      return this._raidBossID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceRaidbossServerDataVO.prototype, "raidBossLevelID", {
    get: function () {
      return this._raidBossLevelID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceRaidbossServerDataVO.prototype, "raidBossHealth", {
    get: function () {
      return this._raidBossHealth;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceRaidbossServerDataVO.prototype, "activityPoints", {
    get: function () {
      return this._activityPoints;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceRaidbossServerDataVO.prototype, "currentAttacks", {
    get: function () {
      return this._currentAttacks;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceRaidbossServerDataVO.prototype, "leftWallPercentRespawnTimeInSeconds", {
    get: function () {
      return Math.max(0, Math.ceil((this._leftWallPercentRespawnTimeStamp - __dep_export_CachedTimer.CachedTimer.getCachedTimer()) * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC));
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceRaidbossServerDataVO.prototype, "middleWallPercentRespawnTimeInSeconds", {
    get: function () {
      return Math.max(0, Math.ceil((this._middleWallPercentRespawnTimeStamp - __dep_export_CachedTimer.CachedTimer.getCachedTimer()) * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC));
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceRaidbossServerDataVO.prototype, "rightWallPercentRespawnTimeInSeconds", {
    get: function () {
      return Math.max(0, Math.ceil((this._rightWallPercentRespawnTimeStamp - __dep_export_CachedTimer.CachedTimer.getCachedTimer()) * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC));
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceRaidbossServerDataVO.prototype, "leftWallPercent", {
    get: function () {
      return this._leftWallPercent;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceRaidbossServerDataVO.prototype, "middleWallPercent", {
    get: function () {
      return this._middleWallPercent;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceRaidbossServerDataVO.prototype, "rightWallPercent", {
    get: function () {
      return this._rightWallPercent;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceRaidbossServerDataVO.prototype, "raidBossStageID", {
    get: function () {
      return this._raidBossStageID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceRaidbossServerDataVO.prototype, "raidBossReviveUnitPercentage", {
    get: function () {
      return this._raidBossReviveUnitPercentage;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceRaidbossServerDataVO.prototype, "raidBossHealthWithoutReviveUnits", {
    get: function () {
      return this._raidBossHealth - this.raidBossReviveUnitPercentage;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceRaidbossServerDataVO.prototype, "bossCards", {
    get: function () {
      return this._bossCards;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceRaidbossServerDataVO.prototype, "isLastPlayableBoss", {
    get: function () {
      var __s61local0 = 0;
      for (var __s61local1 = 0, __s61local2 = this._bossCards; __s61local1 < __s61local2.length; __s61local1++) {
        if (!__s61local2[__s61local1].isLocked) {
          __s61local0++;
        }
      }
      return __s61local0 <= 1;
    },
    enumerable: true,
    configurable: true
  });
  AllianceRaidbossServerDataVO.prototype.getBossCardByID = function (__s66param0) {
    for (var __s66local0 = 0, __s66local1 = this._bossCards; __s66local0 < __s66local1.length; __s66local0++) {
      var __s66local2 = __s66local1[__s66local0];
      if (__s66local2.portalBossID == __s66param0) {
        return __s66local2;
      }
    }
    return null;
  };
  Object.defineProperty(AllianceRaidbossServerDataVO.prototype, "hasActiveRaid", {
    get: function () {
      return this._raidBossID > 0;
    },
    enumerable: true,
    configurable: true
  });
  return AllianceRaidbossServerDataVO;
}();
exports.AllianceRaidbossServerDataVO = __s0local0;
