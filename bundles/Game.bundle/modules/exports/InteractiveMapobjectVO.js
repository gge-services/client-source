Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_ClientConstLevelRestrictions = require("gge-module:export_ClientConstLevelRestrictions");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_EventInstanceMapper = require("gge-module:export_EventInstanceMapper");
var __dep_export_AreaHelper = require("gge-module:export_AreaHelper");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_VisualVOEvent = require("gge-module:export_VisualVOEvent");
var __dep_export_UnitBaseLocationEnum = require("gge-module:export_UnitBaseLocationEnum");
var __s0local0 = function (__s1param0) {
  function InteractiveMapobjectVO() {
    var __s3local0 = this;
    __s3local0._gateLevel = 0;
    __s3local0._keepLevel = 0;
    __s3local0._towerLevel = 0;
    __s3local0._wallLevel = 0;
    __s3local0._moatLevel = 0;
    __s3local0._equipmentUniqueIdSkin = 0;
    __s3local0._attackCooldownEndTimestamp = 0;
    __s3local0._sabotageCooldownEndTimestamp = 0;
    __s3local0._secondsSinceEspionage = 0;
    __s3local0._spyInfoReceivingTime = 0;
    __s3local0._openGateTimeOffset = 0;
    __s3local0._openAbandonOutpostTimeOffset = 0;
    __s3local0._remainingAbandonOutpostTime = 0;
    __s3local0._remainingCancelAbandonOutpostTime = 0;
    __s3local0._remainingCooldownAbandonOutpostTime = 0;
    __s3local0._remainingCooldownAbandonOutpostTimeOffset = 0;
    __s3local0._remainingOpenGateTime = 0;
    __s3local0._openGateCounter = 0;
    __s3local0._outpostType = 0;
    __s3local0._occupierID = -1;
    __s3local0._bookmark = null;
    __s3local0._tempServerChargeRank = 0;
    __s3local0._temporarySabotageProtection = false;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).group = "Mapobject";
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(InteractiveMapobjectVO, __s1param0);
  Object.defineProperty(InteractiveMapobjectVO.prototype, "equipmentUniqueIdSkin", {
    get: function () {
      return this._equipmentUniqueIdSkin;
    },
    set: function (__s7param0) {
      this._equipmentUniqueIdSkin = __s7param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobjectVO.prototype, "moatLevel", {
    get: function () {
      return this._moatLevel;
    },
    set: function (__s11param0) {
      this._moatLevel = __s11param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobjectVO.prototype, "wallLevel", {
    get: function () {
      return this._wallLevel;
    },
    set: function (__s15param0) {
      this._wallLevel = __s15param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobjectVO.prototype, "towerLevel", {
    get: function () {
      return this._towerLevel;
    },
    set: function (__s19param0) {
      this._towerLevel = __s19param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobjectVO.prototype, "keepLevel", {
    get: function () {
      return this._keepLevel;
    },
    set: function (__s23param0) {
      this._keepLevel = __s23param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobjectVO.prototype, "gateLevel", {
    get: function () {
      return this._gateLevel;
    },
    set: function (__s27param0) {
      this._gateLevel = __s27param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobjectVO.prototype, "areaNameString", {
    get: function () {
      return this._areaNameString;
    },
    set: function (__s31param0) {
      this._areaNameString = __s31param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobjectVO.prototype, "areaNameStringShort", {
    get: function () {
      return this.areaNameString;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobjectVO.prototype, "isOwnMapobject", {
    get: function () {
      return !!this._ownerInfo && this._ownerInfo.playerID == __dep_export_CastleModel.CastleModel.userData.playerID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobjectVO.prototype, "ownerInfo", {
    get: function () {
      if (this.isOwnMapobject) {
        return __dep_export_CastleModel.CastleModel.otherPlayerData.getOwnInfoVO();
      } else {
        return this._ownerInfo;
      }
    },
    set: function (__s41param0) {
      this._ownerInfo = __s41param0;
    },
    enumerable: true,
    configurable: true
  });
  InteractiveMapobjectVO.prototype.parseAreaInfo = function (__s43param0) {
    this._areaType = __s43param0[0];
    this._absAreaPosX = __s43param0[1];
    this._absAreaPosY = __s43param0[2];
    this._objectId = __s43param0[3];
    var __s43local0 = __dep_exact_f855840627e6e145.int(__s43param0[4]);
    this._ownerInfo = __dep_export_CastleModel.CastleModel.otherPlayerData.getOwnerInfoVO(__s43local0);
    this._keepLevel = Math.max(__dep_exact_f855840627e6e145.int(__s43param0[5]), 1);
    this._wallLevel = Math.max(__dep_exact_f855840627e6e145.int(__s43param0[6]), 1);
    this._gateLevel = Math.max(__dep_exact_f855840627e6e145.int(__s43param0[7]), 1);
    this._towerLevel = __dep_exact_f855840627e6e145.int(__s43param0[8]);
    this._moatLevel = __dep_exact_f855840627e6e145.int(__s43param0[9]);
    this.areaNameString = __s43param0[10];
    var __s43local1 = __dep_exact_f855840627e6e145.int(__s43param0[11]);
    this._attackCooldownEndTimestamp = __dep_export_CachedTimer.CachedTimer.getCachedTimer() + __s43local1 * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
    var __s43local2 = __dep_exact_f855840627e6e145.int(__s43param0[12]);
    this._sabotageCooldownEndTimestamp = __dep_export_CachedTimer.CachedTimer.getCachedTimer() + __s43local2 * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
    this._secondsSinceEspionage = __dep_exact_f855840627e6e145.int(__s43param0[13]);
    this._spyInfoReceivingTime = __dep_export_CachedTimer.CachedTimer.getCachedTimer() * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC;
    this.outpostType = __dep_exact_f855840627e6e145.int(__s43param0[14]);
    this._occupierID = __dep_exact_f855840627e6e145.int(__s43param0[15]);
    this._kingdomID = __s43param0[16];
    this._equipmentUniqueIdSkin = __dep_exact_f855840627e6e145.int(__s43param0[17]);
    this._temporarySabotageProtection = __dep_exact_f855840627e6e145.int(__s43param0.length > 19 ? __s43param0[19] : 0) == 1;
    this._areaKey = __dep_export_AreaHelper.AreaHelper.getAreaKey(this.kingdomID, this.objectId);
    this.dispatchEvent(__dep_export_EventInstanceMapper.EventInstanceMapper.getEvent(__dep_export_VisualVOEvent.VisualVOEvent, __dep_export_VisualVOEvent.VisualVOEvent.VALUEOBJECT_CHANGE));
  };
  InteractiveMapobjectVO.prototype.parseAreaInfoBattleLog = function (__s45param0) {
    this._areaType = __s45param0.AT;
    this._absAreaPosX = __s45param0.X;
    this._absAreaPosY = __s45param0.Y;
    this._keepLevel = __dep_exact_f855840627e6e145.int(__s45param0.KL);
    this._wallLevel = __dep_exact_f855840627e6e145.int(__s45param0.WL);
    this._gateLevel = __dep_exact_f855840627e6e145.int(__s45param0.GL);
    this._towerLevel = __dep_exact_f855840627e6e145.int(__s45param0.TL);
    this._moatLevel = __dep_exact_f855840627e6e145.int(__s45param0.ML);
    this._areaNameString = __s45param0.N;
    this._kingdomID = __s45param0.K;
    this._mapID = __s45param0.MID;
    this._equipmentUniqueIdSkin = __dep_exact_f855840627e6e145.int(__s45param0.EID);
    this._spyInfoReceivingTime = this._spyInfoReceivingTime || __dep_export_CachedTimer.CachedTimer.getCachedTimer() * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC;
    this.dispatchEvent(__dep_export_EventInstanceMapper.EventInstanceMapper.getEvent(__dep_export_VisualVOEvent.VisualVOEvent, __dep_export_VisualVOEvent.VisualVOEvent.VALUEOBJECT_CHANGE));
  };
  Object.defineProperty(InteractiveMapobjectVO.prototype, "remainingCooldownTimeInSeconds", {
    get: function () {
      return (this._attackCooldownEndTimestamp - __dep_export_CachedTimer.CachedTimer.getCachedTimer()) * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobjectVO.prototype, "isCoolingDown", {
    get: function () {
      return this.remainingCooldownTimeInSeconds > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobjectVO.prototype, "remainingCooldownSabotageTimeInSeconds", {
    get: function () {
      return (this._sabotageCooldownEndTimestamp - __dep_export_CachedTimer.CachedTimer.getCachedTimer()) * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobjectVO.prototype, "remainingOpenGateTime", {
    get: function () {
      return this._remainingOpenGateTime - (__dep_export_CachedTimer.CachedTimer.getCachedTimer() * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC - this._openGateTimeOffset);
    },
    set: function (__s55param0) {
      this._remainingOpenGateTime = __s55param0;
      this._openGateTimeOffset = __dep_export_CachedTimer.CachedTimer.getCachedTimer() * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobjectVO.prototype, "openGateCounter", {
    get: function () {
      return this._openGateCounter;
    },
    set: function (__s59param0) {
      this._openGateCounter = __s59param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobjectVO.prototype, "remainingAbandonOutpostTime", {
    get: function () {
      return this._remainingAbandonOutpostTime - (__dep_export_CachedTimer.CachedTimer.getCachedTimer() * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC - this._openAbandonOutpostTimeOffset);
    },
    set: function (__s63param0) {
      this._remainingAbandonOutpostTime = __s63param0;
      this._openAbandonOutpostTimeOffset = __dep_export_CachedTimer.CachedTimer.getCachedTimer() * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobjectVO.prototype, "remainingCancelAbandonOutpostTime", {
    get: function () {
      return this._remainingCancelAbandonOutpostTime - (__dep_export_CachedTimer.CachedTimer.getCachedTimer() * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC - this._openAbandonOutpostTimeOffset);
    },
    set: function (__s67param0) {
      this._remainingCancelAbandonOutpostTime = __s67param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobjectVO.prototype, "remainingSpyInfoTime", {
    get: function () {
      if (this._secondsSinceEspionage < 0) {
        return 0;
      } else {
        return Math.max(0, -this.secondsSinceEspionage + __dep_exact_26a421b704832cff.SpyConst.SPY_VALIDITY);
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobjectVO.prototype, "secondsSinceEspionage", {
    get: function () {
      if (this._secondsSinceEspionage == -1) {
        return -1;
      } else {
        return __dep_export_CachedTimer.CachedTimer.getCachedTimer() * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC - this._spyInfoReceivingTime + this._secondsSinceEspionage;
      }
    },
    set: function (__s77param0) {
      this._secondsSinceEspionage = __s77param0;
    },
    enumerable: true,
    configurable: true
  });
  InteractiveMapobjectVO.prototype.updateVE = function () {
    this.dispatchEvent(__dep_export_EventInstanceMapper.EventInstanceMapper.getEvent(__dep_export_VisualVOEvent.VisualVOEvent, __dep_export_VisualVOEvent.VisualVOEvent.VALUEOBJECT_CHANGE));
  };
  Object.defineProperty(InteractiveMapobjectVO.prototype, "outpostType", {
    get: function () {
      return this._outpostType;
    },
    set: function (__s83param0) {
      this._outpostType = __s83param0;
    },
    enumerable: true,
    configurable: true
  });
  InteractiveMapobjectVO.prototype.canBeConquered = function () {
    return false;
  };
  InteractiveMapobjectVO.prototype.canBeAttackedAndConquered = function () {
    return false;
  };
  InteractiveMapobjectVO.prototype.canBeSupported = function () {
    return false;
  };
  InteractiveMapobjectVO.prototype.canBeTroupsSended = function () {
    return false;
  };
  Object.defineProperty(InteractiveMapobjectVO.prototype, "isConqueredByMe", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  InteractiveMapobjectVO.prototype.canBeAttacked = function () {
    return false;
  };
  InteractiveMapobjectVO.prototype.canBePlagueAttacked = function () {
    return false;
  };
  InteractiveMapobjectVO.prototype.canBeAttackedButHasPeacemode = function () {
    return false;
  };
  InteractiveMapobjectVO.prototype.canShowPlayerInfo = function () {
    return false;
  };
  Object.defineProperty(InteractiveMapobjectVO.prototype, "canBeTraded", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobjectVO.prototype, "canBeVisited", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobjectVO.prototype, "canBeSpied", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobjectVO.prototype, "canBeSabotaged", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobjectVO.prototype, "hasOtherPlayerInfo", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobjectVO.prototype, "remainingCooldownAbandonOutpostTime", {
    get: function () {
      return this._remainingCooldownAbandonOutpostTime - (__dep_export_CachedTimer.CachedTimer.getCachedTimer() * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC - this._remainingCooldownAbandonOutpostTimeOffset);
    },
    set: function (__s115param0) {
      this._remainingCooldownAbandonOutpostTime = __s115param0;
      this._remainingCooldownAbandonOutpostTimeOffset = __dep_export_CachedTimer.CachedTimer.getCachedTimer() * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobjectVO.prototype, "isUnderConquerControl", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobjectVO.prototype, "baseGateBonus", {
    get: function () {
      if (this.gateLevel == 0) {
        return 0;
      } else {
        return __dep_export_CastleModel.CastleModel.wodData.voSubList(__dep_export_CastleWodData.CastleWodData.TYPE_BUILDING).get(__dep_export_ClientConstCastle.ClientConstCastle.GATE_WOD_IDS[this.gateLevel - 1]).gateBonus;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobjectVO.prototype, "baseMoatBonus", {
    get: function () {
      if (this.moatLevel) {
        return __dep_export_CastleModel.CastleModel.wodData.voSubList(__dep_export_CastleWodData.CastleWodData.TYPE_BUILDING).get(__dep_export_ClientConstCastle.ClientConstCastle.MOAT_WOD_IDS[this.moatLevel - 1]).moatBonus;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobjectVO.prototype, "baseWallBonus", {
    get: function () {
      if (this.wallLevel) {
        return __dep_export_CastleModel.CastleModel.wodData.voSubList(__dep_export_CastleWodData.CastleWodData.TYPE_BUILDING).get(__dep_export_ClientConstCastle.ClientConstCastle.WALL_WOD_IDS[this.wallLevel - 1]).wallBonus;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobjectVO.prototype, "occupierID", {
    get: function () {
      return this._occupierID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobjectVO.prototype, "isOccupied", {
    get: function () {
      return this._occupierID > -1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobjectVO.prototype, "crestVO", {
    get: function () {
      if (this.ownerInfo) {
        return this.ownerInfo.crest;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobjectVO.prototype, "canChangeDefenceOnWorldmap", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobjectVO.prototype, "controllerWorldMapOwnerInfoVO", {
    get: function () {
      return this.ownerInfo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobjectVO.prototype, "bookmark", {
    get: function () {
      return this._bookmark;
    },
    set: function (__s145param0) {
      this._bookmark = __s145param0;
    },
    enumerable: true,
    configurable: true
  });
  InteractiveMapobjectVO.prototype.equalsOtherWMO = function (__s147param0, __s147param1) {
    return this.objectId == __s147param0 && this.kingdomID == __s147param1;
  };
  Object.defineProperty(InteractiveMapobjectVO.prototype, "ignoresPeaceMode", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  InteractiveMapobjectVO.prototype.castAsAreaTypeAndParse = function (__s151param0) {
    if (__s151param0.length <= 0) {
      this.parseAreaInfo(__s151param0);
      return this;
    }
    var __s151local0 = __dep_exact_f855840627e6e145.int(__s151param0[0]);
    if (this._areaType != __s151local0 || isNaN(this._areaType)) {
      return require("gge-module:export_WorldmapObjectFactory").WorldmapObjectFactory.parseWorldMapArea(__s151param0);
    } else {
      this.parseAreaInfo(__s151param0);
      return this;
    }
  };
  Object.defineProperty(InteractiveMapobjectVO.prototype, "hasNameLabel", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobjectVO.prototype, "cooldownCanBeSkipped", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobjectVO.prototype, "skipCooldownCostC2", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobjectVO.prototype, "totalCooldownTime", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobjectVO.prototype, "temporarySabotageProtection", {
    get: function () {
      return this._temporarySabotageProtection;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobjectVO.prototype, "attackType", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobjectVO.prototype, "minimumOwnerLevel", {
    get: function () {
      if (this.ownerInfo) {
        return this.ownerInfo.playerLevel;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobjectVO.prototype, "unitBaseLocation", {
    get: function () {
      return __dep_export_UnitBaseLocationEnum.UnitBaseLocationEnum.DEFAULT;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobjectVO.prototype, "isInSpyLevelRange", {
    get: function () {
      if (!this.ownerInfo || this.ownerInfo.playerID < 0) {
        return true;
      }
      var __s174local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.userData.level);
      var __s174local1 = __dep_exact_f855840627e6e145.int(this.ownerInfo ? this.ownerInfo.playerLevel : 0);
      var __s174local2 = __dep_exact_f855840627e6e145.int(Math.abs(__s174local0 - __s174local1));
      return __s174local0 >= __dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_SPY_ALL || __s174local2 <= __dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MAX_DELTA_LEVEL_SPY;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobjectVO.prototype, "spaceID", {
    get: function () {
      if (this.mapID > 0) {
        return this.mapID;
      } else {
        return this.kingdomID;
      }
    },
    enumerable: true,
    configurable: true
  });
  InteractiveMapobjectVO.prototype.resetVO = function () {
    this._objectId = 0;
    this._ownerInfo = null;
    this._keepLevel = 0;
    this._wallLevel = 0;
    this._gateLevel = 0;
    this._towerLevel = 0;
    this._moatLevel = 0;
    this._areaNameString = "";
    this._attackCooldownEndTimestamp = 0;
    this._sabotageCooldownEndTimestamp = 0;
    this._secondsSinceEspionage = -1;
    this._spyInfoReceivingTime = 0;
    this._outpostType = 0;
    this._occupierID = -1;
    this._equipmentUniqueIdSkin = 0;
  };
  InteractiveMapobjectVO.prototype.getDisplayObjectClipContainer = function (__s183param0, __s183param1, __s183param2 = false) {
    throw new Error("Override this method!");
  };
  Object.defineProperty(InteractiveMapobjectVO.prototype, "chargeRank", {
    get: function () {
      return this._tempServerChargeRank;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobjectVO.prototype, "isNpcCapital", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobjectVO.prototype, "customConnections", {
    get: function () {
      this._customConnections ||= [];
      return this._customConnections;
    },
    enumerable: true,
    configurable: true
  });
  return InteractiveMapobjectVO;
}(require("gge-module:export_BasicMapobjectVO").BasicMapobjectVO);
exports.InteractiveMapobjectVO = __s0local0;
var __dep_export_CastleWodData = require("gge-module:export_CastleWodData");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IDetailViewAble", "IWorldmapObjectVO");
