Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CastleSpyLogVO() {
    this._castleID = 0;
    this._spyOwnerID = 0;
    this._areaPosX = 0;
    this._areaPosY = 0;
    this._enemyOwnerID = 0;
    this._spyCount = 0;
    this._guardCount = 0;
    this._spyAccuracy = 0;
    this._spyRisk = 0;
  }
  CastleSpyLogVO.prototype.parseSpyLog = function (__s5param0) {
    this._mapobjectVO = __dep_export_WorldmapObjectFactory.WorldmapObjectFactory.parseWorldMapArea([__s5param0.AI.AT], false);
    if (__s5param0.SSID) {
      __s5param0.AI.SSID = __s5param0.SSID;
    }
    if (__s5param0.DAR) {
      __s5param0.AI.DAR = __s5param0.DAR;
    }
    this._mapobjectVO.parseAreaInfoBattleLog(__s5param0.AI);
    this._mapobjectVO.objectId = __dep_exact_f855840627e6e145.int(__s5param0.CID);
    this._castleID = __dep_exact_f855840627e6e145.int(__s5param0.CID);
    this._areaPosX = this._mapobjectVO.absAreaPosX;
    this._areaPosY = this._mapobjectVO.absAreaPosY;
    this._spyOwnerID = __dep_exact_f855840627e6e145.int(__s5param0.SID);
    this._enemyOwnerID = __dep_exact_f855840627e6e145.int(__s5param0.PID);
    this._spyCount = __dep_exact_f855840627e6e145.int(__s5param0.SC);
    this._guardCount = __dep_exact_f855840627e6e145.int(__s5param0.GC);
    this._spyAccuracy = __dep_exact_f855840627e6e145.int(__s5param0.SA);
    this._spyRisk = __dep_exact_f855840627e6e145.int(__s5param0.SR);
    if (__s5param0.S) {
      this._armyInfoVO = new __dep_export_CastleSpyArmyInfoVO.CastleSpyArmyInfoVO();
      this._armyInfoVO.parseArmyInfo(__s5param0.S, __s5param0.AS, __s5param0.B, __s5param0.LS);
    }
    if (__s5param0.R) {
      this._spyResources = __dep_export_CollectableManager.CollectableManager.parser.s2cParamList.createList(__s5param0.R);
    }
    if (__s5param0.B) {
      this._lordVO = __dep_export_LordFactory.LordFactory.createLord(__s5param0.B, true, true);
    }
    this._legendSkills = [];
    if (__s5param0.LS) {
      this._legendSkills = __s5param0.LS;
    }
    if (__s5param0.AS) {
      this._mapobjectVO.secondsSinceEspionage = __dep_exact_f855840627e6e145.int(__s5param0.AS);
    }
    this._spyOwnerInfo = __dep_export_CastleModel.CastleModel.otherPlayerData.getOwnerInfoVO(this._spyOwnerID);
    this._enemyOwnerInfo = __dep_export_CastleModel.CastleModel.otherPlayerData.getOwnerInfoVO(this._enemyOwnerID);
    if (__s5param0.AI.DP < 0) {
      this._enemyOwnerInfo.playerLevel = __dep_exact_f855840627e6e145.int(__s5param0.AI.DL);
    }
    if (this._spyOwnerInfo && __s5param0.AI.DP == this._spyOwnerInfo.playerID) {
      this._mapobjectVO.ownerInfo = this._spyOwnerInfo;
    } else {
      this._mapobjectVO.ownerInfo = this._enemyOwnerInfo;
    }
    if (__dep_exact_81dacdf05bd32292.instanceOfClass(this._mapobjectVO, "OutpostMapobjectVO")) {
      this._mapobjectVO.outpostType = __s5param0.AI.RT;
    }
    if (__dep_exact_81dacdf05bd32292.instanceOfClass(this._mapobjectVO, "VillageMapobjectVO") && !__dep_exact_81dacdf05bd32292.instanceOfClass(this._mapobjectVO, "ResourceIsleMapobjectVO")) {
      this._mapobjectVO.villageType = __s5param0.AI.RT;
    }
    if (__dep_exact_81dacdf05bd32292.instanceOfClass(this._mapobjectVO, "DungeonMapobjectVO")) {
      this._mapobjectVO.attackCooldownEndTimestamp = Math.max(__s5param0.RS * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC + __dep_export_CachedTimer.CachedTimer.getCachedTimer(), 0);
    }
  };
  Object.defineProperty(CastleSpyLogVO.prototype, "spyOwnerInfo", {
    get: function () {
      return this._spyOwnerInfo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpyLogVO.prototype, "enemyOwnerInfo", {
    get: function () {
      return this._enemyOwnerInfo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpyLogVO.prototype, "spyCount", {
    get: function () {
      return this._spyCount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpyLogVO.prototype, "guardCount", {
    get: function () {
      return this._guardCount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpyLogVO.prototype, "spyResources", {
    get: function () {
      return this._spyResources;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpyLogVO.prototype, "spyRisk", {
    get: function () {
      return this._spyRisk;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpyLogVO.prototype, "armyInfoVO", {
    get: function () {
      return this._armyInfoVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpyLogVO.prototype, "spyAccuracy", {
    get: function () {
      return this._spyAccuracy;
    },
    enumerable: true,
    configurable: true
  });
  CastleSpyLogVO.prototype.getCastleName = function (__s36param0 = -1) {
    if (this._mapobjectVO.areaNameString && this._mapobjectVO.areaNameString != "") {
      return this._mapobjectVO.areaNameString;
    } else {
      return __dep_export_PlayerHelper.PlayerHelper.getNPCCastleName(this._mapobjectVO.kingdomID, this.enemyOwnerInfo.playerID);
    }
  };
  Object.defineProperty(CastleSpyLogVO.prototype, "isFactionSpyLog", {
    get: function () {
      return this._mapobjectVO.kingdomID == __dep_exact_26a421b704832cff.FactionConst.KINGDOM_ID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpyLogVO.prototype, "isIslandSpyLog", {
    get: function () {
      return this._mapobjectVO.kingdomID == __dep_exact_26a421b704832cff_1.WorldIsland.KINGDOM_ID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpyLogVO.prototype, "lordVO", {
    get: function () {
      return this._lordVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpyLogVO.prototype, "areaPosX", {
    get: function () {
      return this._areaPosX;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpyLogVO.prototype, "areaPosY", {
    get: function () {
      return this._areaPosY;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpyLogVO.prototype, "mapobjectVO", {
    get: function () {
      return this._mapobjectVO;
    },
    set: function (__s52param0) {
      this._mapobjectVO = __s52param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpyLogVO.prototype, "legendSkills", {
    get: function () {
      return this._legendSkills;
    },
    enumerable: true,
    configurable: true
  });
  return CastleSpyLogVO;
}();
exports.CastleSpyLogVO = __s0local0;
var __dep_export_CollectableManager = require("gge-module:export_CollectableManager");
var __dep_export_LordFactory = require("gge-module:export_LordFactory");
var __dep_export_WorldmapObjectFactory = require("gge-module:export_WorldmapObjectFactory");
var __dep_export_CastleSpyArmyInfoVO = require("gge-module:export_CastleSpyArmyInfoVO");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_PlayerHelper = require("gge-module:export_PlayerHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
