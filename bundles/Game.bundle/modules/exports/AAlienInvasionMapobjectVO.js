Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_ClientConstEvent = require("gge-module:export_ClientConstEvent");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_EventInstanceMapper = require("gge-module:export_EventInstanceMapper");
var __dep_export_AbstractMethodError = require("gge-module:export_AbstractMethodError");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_VisualVOEvent = require("gge-module:export_VisualVOEvent");
var __dep_export_AInvasionEventMapObjectVO = require("gge-module:export_AInvasionEventMapObjectVO");
var __dep_export_BasicMapobjectVO = require("gge-module:export_BasicMapobjectVO");
var __s0local0 = function (__s1param0) {
  function AAlienInvasionMapobjectVO() {
    var __s3local0 = this;
    __s3local0._hasPeaceMode = false;
    __s3local0._associatedEventID = 0;
    __s3local0._alienPlayerID = 0;
    __s3local0._alreadyRerolled = false;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AAlienInvasionMapobjectVO, __s1param0);
  AAlienInvasionMapobjectVO.prototype.getDisplayObjectClipContainer = function (__s5param0, __s5param1, __s5param2 = false) {
    var __s5local0 = new __dep_export_CastleDisplayObjectClipContainer.CastleDisplayObjectClipContainer();
    var __s5local1 = this.assetTypeName + "_Mapobject_Level_" + __dep_export_ClientConstEvent.ClientConstEvent.getUserInvasionGfxLevel(this.dungeonLevel);
    __s5local0.addItem(this.getAsExternalClip(__s5local1, this.assetFileURL(this.assetTypeName + "_Mapobject")));
    return __s5local0;
  };
  Object.defineProperty(AAlienInvasionMapobjectVO.prototype, "isVisibleOnMap", {
    get: function () {
      return !!__dep_export_CastleModel.CastleModel.specialEventData.isEventActive(this._associatedEventID) && this._isVisibleOnMap;
    },
    set: function (__s9param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicMapobjectVO.BasicMapobjectVO.prototype, "isVisibleOnMap").set.call(this, __s9param0);
      this.dispatchEvent(__dep_export_EventInstanceMapper.EventInstanceMapper.getEvent(__dep_export_VisualVOEvent.VisualVOEvent, __dep_export_VisualVOEvent.VisualVOEvent.VALUEOBJECT_CHANGE));
    },
    enumerable: true,
    configurable: true
  });
  AAlienInvasionMapobjectVO.prototype.parseAreaInfo = function (__s11param0) {
    this.areaType = __s11param0[0];
    this.absAreaPosX = __s11param0[1];
    this.absAreaPosY = __s11param0[2];
    this._dungeonLevel = __s11param0[3];
    if (__s11param0.length > 4) {
      this.secondsSinceEspionage = __s11param0[4];
      this.spyInfoReceivingTime = __dep_export_CachedTimer.CachedTimer.getCachedTimer() * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC;
      this._hasPeaceMode = __s11param0[5] == 1;
      this._baseWallBonus = __s11param0[6];
      this._baseGateBonus = __s11param0[7];
      this._baseMoatBonus = __s11param0[8];
      this._alreadyRerolled = __s11param0.length >= 10 && __s11param0[9] == 1;
      var __s11local0 = __s11param0.length >= 11 ? __s11param0[10] : -1;
      if (__s11local0 > 0) {
        this.difficultyCamp = __dep_export_CastleModel.CastleModel.eventDifficultyScaling.getCampByEventAutoScalingCampID(__s11local0);
      }
      this._ownerInfo = __dep_export_CastleModel.CastleModel.otherPlayerData.getOwnerInfoVO(this._alienPlayerID);
      if (this._dungeonLevel > 0) {
        this._serverDataRecieved = true;
        this.isVisibleOnMap = true;
      }
    } else {
      this.isVisibleOnMap = false;
    }
    this.dispatchEvent(__dep_export_EventInstanceMapper.EventInstanceMapper.getEvent(__dep_export_VisualVOEvent.VisualVOEvent, __dep_export_VisualVOEvent.VisualVOEvent.VALUEOBJECT_CHANGE));
  };
  AAlienInvasionMapobjectVO.prototype.parseAreaInfoBattleLog = function (__s17param0) {
    this.absAreaPosX = __s17param0.X;
    this.absAreaPosY = __s17param0.Y;
    this._ownerInfo = __dep_export_CastleModel.CastleModel.otherPlayerData.getOwnerInfoVO(this._alienPlayerID);
    this.kingdomID = __s17param0.K;
    this.mapID = __s17param0.MID;
    this._dungeonLevel = __s17param0.DL;
    this._spyInfoReceivingTime = this._spyInfoReceivingTime || __dep_export_CachedTimer.CachedTimer.getCachedTimer() * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC;
  };
  Object.defineProperty(AAlienInvasionMapobjectVO.prototype, "eventType", {
    get: function () {
      return this._associatedEventID;
    },
    set: function (__s21param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AInvasionEventMapObjectVO.AInvasionEventMapObjectVO.prototype, "eventType").set.call(this, __s21param0);
    },
    enumerable: true,
    configurable: true
  });
  AAlienInvasionMapobjectVO.prototype.canBeAttackedButHasPeacemode = function () {
    return this._hasPeaceMode;
  };
  Object.defineProperty(AAlienInvasionMapobjectVO.prototype, "attackType", {
    get: function () {
      return __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_DUNGEONATTACK;
    },
    set: function (__s27param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AInvasionEventMapObjectVO.AInvasionEventMapObjectVO.prototype, "attackType").set.call(this, __s27param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AAlienInvasionMapobjectVO.prototype, "keepLevel", {
    get: function () {
      return __dep_export_ClientConstEvent.ClientConstEvent.getUserInvasionGfxLevel(this._dungeonLevel);
    },
    set: function (__s31param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobjectVO.InteractiveMapobjectVO.prototype, "keepLevel").set.call(this, __s31param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AAlienInvasionMapobjectVO.prototype, "wallLevel", {
    get: function () {
      return __dep_export_ClientConstEvent.ClientConstEvent.getUserInvasionGfxLevel(this._dungeonLevel);
    },
    set: function (__s35param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobjectVO.InteractiveMapobjectVO.prototype, "wallLevel").set.call(this, __s35param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AAlienInvasionMapobjectVO.prototype, "gateLevel", {
    get: function () {
      return __dep_export_ClientConstEvent.ClientConstEvent.getUserInvasionGfxLevel(this._dungeonLevel);
    },
    set: function (__s39param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobjectVO.InteractiveMapobjectVO.prototype, "gateLevel").set.call(this, __s39param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AAlienInvasionMapobjectVO.prototype, "towerLevel", {
    get: function () {
      return __dep_export_ClientConstEvent.ClientConstEvent.getUserInvasionGfxLevel(this._dungeonLevel);
    },
    set: function (__s43param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobjectVO.InteractiveMapobjectVO.prototype, "towerLevel").set.call(this, __s43param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AAlienInvasionMapobjectVO.prototype, "moatLevel", {
    get: function () {
      if (this._baseMoatBonus > 0) {
        return 1;
      } else {
        return 0;
      }
    },
    set: function (__s49param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobjectVO.InteractiveMapobjectVO.prototype, "moatLevel").set.call(this, __s49param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AAlienInvasionMapobjectVO.prototype, "baseGateBonus", {
    get: function () {
      return this._baseGateBonus;
    },
    set: function (__s53param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AInvasionEventMapObjectVO.AInvasionEventMapObjectVO.prototype, "baseGateBonus").set.call(this, __s53param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AAlienInvasionMapobjectVO.prototype, "baseMoatBonus", {
    get: function () {
      return this._baseMoatBonus;
    },
    set: function (__s57param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AInvasionEventMapObjectVO.AInvasionEventMapObjectVO.prototype, "baseMoatBonus").set.call(this, __s57param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AAlienInvasionMapobjectVO.prototype, "baseWallBonus", {
    get: function () {
      return this._baseWallBonus;
    },
    set: function (__s61param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AInvasionEventMapObjectVO.AInvasionEventMapObjectVO.prototype, "baseWallBonus").set.call(this, __s61param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AAlienInvasionMapobjectVO.prototype, "minimumOwnerLevel", {
    get: function () {
      return this.dungeonLevel;
    },
    set: function (__s65param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AInvasionEventMapObjectVO.AInvasionEventMapObjectVO.prototype, "minimumOwnerLevel").set.call(this, __s65param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AAlienInvasionMapobjectVO.prototype, "assetTypeName", {
    get: function () {
      throw new __dep_export_AbstractMethodError.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AAlienInvasionMapobjectVO.prototype, "alreadyRerolled", {
    get: function () {
      return this._alreadyRerolled;
    },
    enumerable: true,
    configurable: true
  });
  return AAlienInvasionMapobjectVO;
}(__dep_export_AInvasionEventMapObjectVO.AInvasionEventMapObjectVO);
exports.AAlienInvasionMapobjectVO = __s0local0;
var __dep_export_InteractiveMapobjectVO = require("gge-module:export_InteractiveMapobjectVO");
var __dep_export_CastleDisplayObjectClipContainer = require("gge-module:export_CastleDisplayObjectClipContainer");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IDetailViewAble", "IWorldmapObjectVO", "IDungeonMapobjectVO");
