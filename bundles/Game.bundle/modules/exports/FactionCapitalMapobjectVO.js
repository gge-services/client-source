Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_C2SGetAttackableFactionDataVO = require("gge-module:export_C2SGetAttackableFactionDataVO");
var __dep_export_EventInstanceMapper = require("gge-module:export_EventInstanceMapper");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleDisplayObjectClipContainer = require("gge-module:export_CastleDisplayObjectClipContainer");
var __dep_export_VisualVOEvent = require("gge-module:export_VisualVOEvent");
var __dep_export_FactionInteractiveMapobjectVO = require("gge-module:export_FactionInteractiveMapobjectVO");
var __s0local0 = function (__s1param0) {
  function FactionCapitalMapobjectVO() {
    var __s3local0 = this;
    __s3local0._aliveProtectorPositions = [];
    __s3local0._dungeonLevel = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).name = "FactionCapital";
    __s3local0.group = "Mapobject";
    __s3local0._areaType = __dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_FACTION_CAPITAL;
    __s3local0.isVisibleOnMap = false;
    __s3local0._kingdomID = __dep_exact_26a421b704832cff_1.FactionConst.KINGDOM_ID;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(FactionCapitalMapobjectVO, __s1param0);
  FactionCapitalMapobjectVO.prototype.getDisplayObjectClipContainer = function (__s5param0, __s5param1, __s5param2 = false) {
    var __s5local0 = new __dep_export_CastleDisplayObjectClipContainer.CastleDisplayObjectClipContainer();
    var __s5local1 = __dep_exact_f855840627e6e145.int(this.ownerInfo.factionID);
    var __s5local2 = "FactionCapital_Mapobject_" + this.getFactionTag(__s5local1);
    if (this.isDestroyed) {
      __s5local2 += "_Destroyed";
    }
    __s5local0.addItem(this.getAsExternalClip(__s5local2, this.assetFileURL(__dep_export_WorldmapObjectIconHelper.WorldmapObjectIconHelper.FILE_NAME_FACTION_EVENT)));
    return __s5local0;
  };
  FactionCapitalMapobjectVO.prototype.parseAreaInfo = function (__s8param0) {
    this._areaType = __s8param0[0];
    this._absAreaPosX = __s8param0[1];
    this._absAreaPosY = __s8param0[2];
    this._ownerInfo = __dep_export_CastleModel.CastleModel.otherPlayerData.getOwnerInfoVO(__s8param0[3]);
    this._aliveProtectorPositions = __s8param0[4];
    this._secondsSinceEspionage = __s8param0[5];
    this._spyInfoReceivingTime = __dep_export_CachedTimer.CachedTimer.getCachedTimer() * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC;
    this._dungeonLevel = __dep_exact_f855840627e6e145.int(__s8param0[6]);
    this._isDestroyed = __s8param0[7] == 1;
    this._specialCampID = __s8param0[8];
    this.isVisibleOnMap = true;
    var __s8local0 = this.factionEventVO && this.factionEventVO.attackableCamps.indexOf(this.specialCampID) > -1;
    if (this.isDestroyed && __s8local0 || this._aliveProtectorPositions.length == 0 && !this.isDestroyed && !__s8local0) {
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetAttackableFactionDataVO.C2SGetAttackableFactionDataVO());
    }
    this.dispatchEvent(__dep_export_EventInstanceMapper.EventInstanceMapper.getEvent(__dep_export_VisualVOEvent.VisualVOEvent, __dep_export_VisualVOEvent.VisualVOEvent.VALUEOBJECT_CHANGE));
  };
  Object.defineProperty(FactionCapitalMapobjectVO.prototype, "canBeVisited", {
    get: function () {
      return false;
    },
    set: function (__s13param0) {
      Object.getOwnPropertyDescriptor(__dep_export_FactionInteractiveMapobjectVO.FactionInteractiveMapobjectVO.prototype, "canBeVisited").set.call(this, __s13param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionCapitalMapobjectVO.prototype, "canBeSpied", {
    get: function () {
      return !this.isOwnMapobject && !this.isDestroyed && !this.factionEventVO.isSpectator && this.ownerInfo.factionID != this.factionEventVO.ownFaction;
    },
    set: function (__s17param0) {
      Object.getOwnPropertyDescriptor(__dep_export_FactionInteractiveMapobjectVO.FactionInteractiveMapobjectVO.prototype, "canBeSpied").set.call(this, __s17param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionCapitalMapobjectVO.prototype, "canBeSabotaged", {
    get: function () {
      return false;
    },
    set: function (__s21param0) {
      Object.getOwnPropertyDescriptor(__dep_export_FactionInteractiveMapobjectVO.FactionInteractiveMapobjectVO.prototype, "canBeSabotaged").set.call(this, __s21param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionCapitalMapobjectVO.prototype, "hasOtherPlayerInfo", {
    get: function () {
      return false;
    },
    set: function (__s25param0) {
      Object.getOwnPropertyDescriptor(__dep_export_FactionInteractiveMapobjectVO.FactionInteractiveMapobjectVO.prototype, "hasOtherPlayerInfo").set.call(this, __s25param0);
    },
    enumerable: true,
    configurable: true
  });
  FactionCapitalMapobjectVO.prototype.canBeAttacked = function () {
    return this.ownerInfo.factionID != this.factionEventVO.ownFaction && this._aliveProtectorPositions.length == 0 && !this.isDestroyed && !this.factionEventVO.isSpectator;
  };
  Object.defineProperty(FactionCapitalMapobjectVO.prototype, "factionEventVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionCapitalMapobjectVO.prototype, "areaNameString", {
    get: function () {
      return __dep_exact_92d05af59ee2ff30.Localize.text("faction_capital");
    },
    set: function (__s33param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobjectVO.InteractiveMapobjectVO.prototype, "areaNameString").set.call(this, __s33param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionCapitalMapobjectVO.prototype, "dungeonLevel", {
    get: function () {
      return this._dungeonLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionCapitalMapobjectVO.prototype, "aliveProtectorPositions", {
    get: function () {
      return this._aliveProtectorPositions;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionCapitalMapobjectVO.prototype, "attackType", {
    get: function () {
      return __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_ATTACK;
    },
    set: function (__s41param0) {
      Object.getOwnPropertyDescriptor(__dep_export_FactionInteractiveMapobjectVO.FactionInteractiveMapobjectVO.prototype, "attackType").set.call(this, __s41param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionCapitalMapobjectVO.prototype, "minimumOwnerLevel", {
    get: function () {
      return this.dungeonLevel;
    },
    set: function (__s45param0) {
      Object.getOwnPropertyDescriptor(__dep_export_FactionInteractiveMapobjectVO.FactionInteractiveMapobjectVO.prototype, "minimumOwnerLevel").set.call(this, __s45param0);
    },
    enumerable: true,
    configurable: true
  });
  return FactionCapitalMapobjectVO;
}(__dep_export_FactionInteractiveMapobjectVO.FactionInteractiveMapobjectVO);
exports.FactionCapitalMapobjectVO = __s0local0;
var __dep_export_WorldmapObjectIconHelper = require("gge-module:export_WorldmapObjectIconHelper");
var __dep_export_InteractiveMapobjectVO = require("gge-module:export_InteractiveMapobjectVO");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IDetailViewAble", "IWorldmapObjectVO");
