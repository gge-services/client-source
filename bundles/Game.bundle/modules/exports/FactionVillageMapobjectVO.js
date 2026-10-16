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
var __dep_export_EventInstanceMapper = require("gge-module:export_EventInstanceMapper");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleDisplayObjectClipContainer = require("gge-module:export_CastleDisplayObjectClipContainer");
var __dep_export_VisualVOEvent = require("gge-module:export_VisualVOEvent");
var __dep_export_FactionInteractiveMapobjectVO = require("gge-module:export_FactionInteractiveMapobjectVO");
var __s0local0 = function (__s1param0) {
  function FactionVillageMapobjectVO() {
    var __s3local0 = this;
    __s3local0._aliveProtectorPositions = [];
    __s3local0._dungeonLevel = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).name = "FactionVillage";
    __s3local0.group = "Mapobject";
    __s3local0._areaType = __dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_FACTION_VILLAGE;
    __s3local0.isVisibleOnMap = false;
    __s3local0._kingdomID = __dep_exact_26a421b704832cff_1.FactionConst.KINGDOM_ID;
    __s3local0._specialCampID = FactionVillageMapobjectVO.VILLAGE_SPECIAL_CAMP_ID;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(FactionVillageMapobjectVO, __s1param0);
  FactionVillageMapobjectVO.prototype.getDisplayObjectClipContainer = function (__s5param0, __s5param1, __s5param2 = false) {
    var __s5local0 = new __dep_export_CastleDisplayObjectClipContainer.CastleDisplayObjectClipContainer();
    var __s5local1 = __dep_exact_f855840627e6e145.int(this.ownerInfo ? this.ownerInfo.factionID : __dep_exact_26a421b704832cff_1.FactionConst.BLUE_FACTION);
    var __s5local2 = "FactionVillage_Mapobject_" + this.getFactionTag(__s5local1);
    __s5local0.addItem(this.getAsExternalClip(__s5local2, this.assetFileURL(__dep_export_WorldmapObjectIconHelper.WorldmapObjectIconHelper.FILE_NAME_FACTION_EVENT)));
    return __s5local0;
  };
  FactionVillageMapobjectVO.prototype.parseAreaInfo = function (__s7param0) {
    this._areaType = __s7param0[0];
    this._absAreaPosX = __s7param0[1];
    this._absAreaPosY = __s7param0[2];
    this._ownerInfo = __dep_export_CastleModel.CastleModel.otherPlayerData.getOwnerInfoVO(__s7param0[3]);
    var __s7local0 = __s7param0[4];
    this._aliveProtectorPositions = Array.isArray(__s7local0) ? __s7local0 : [];
    this._secondsSinceEspionage = __s7param0[5];
    this._spyInfoReceivingTime = __dep_export_CachedTimer.CachedTimer.getCachedTimer() * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC;
    this._dungeonLevel = __dep_exact_f855840627e6e145.int(__s7param0[6]);
    var __s7local1 = __dep_exact_f855840627e6e145.int(__s7param0[7]);
    this._attackCooldownEndTimestamp = __dep_export_CachedTimer.CachedTimer.getCachedTimer() + __s7local1 * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
    var __s7local2 = this.factionEventVO ? this.factionEventVO.getVillageByPosition(this.absAreaPos) : null;
    if (__s7local2) {
      __s7local2.canBeAttacked = this.canBeAttacked();
    }
    this.isVisibleOnMap = true;
    this.dispatchEvent(__dep_export_EventInstanceMapper.EventInstanceMapper.getEvent(__dep_export_VisualVOEvent.VisualVOEvent, __dep_export_VisualVOEvent.VisualVOEvent.VALUEOBJECT_CHANGE));
  };
  Object.defineProperty(FactionVillageMapobjectVO.prototype, "canBeVisited", {
    get: function () {
      return false;
    },
    set: function (__s12param0) {
      Object.getOwnPropertyDescriptor(__dep_export_FactionInteractiveMapobjectVO.FactionInteractiveMapobjectVO.prototype, "canBeVisited").set.call(this, __s12param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionVillageMapobjectVO.prototype, "canBeSpied", {
    get: function () {
      return !this.isOwnMapobject && !!this.factionEventVO && !this.factionEventVO.isSpectator && this.ownerInfo.factionID != this.factionEventVO.ownFaction;
    },
    set: function (__s16param0) {
      Object.getOwnPropertyDescriptor(__dep_export_FactionInteractiveMapobjectVO.FactionInteractiveMapobjectVO.prototype, "canBeSpied").set.call(this, __s16param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionVillageMapobjectVO.prototype, "canBeSabotaged", {
    get: function () {
      return false;
    },
    set: function (__s20param0) {
      Object.getOwnPropertyDescriptor(__dep_export_FactionInteractiveMapobjectVO.FactionInteractiveMapobjectVO.prototype, "canBeSabotaged").set.call(this, __s20param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionVillageMapobjectVO.prototype, "hasOtherPlayerInfo", {
    get: function () {
      return false;
    },
    set: function (__s24param0) {
      Object.getOwnPropertyDescriptor(__dep_export_FactionInteractiveMapobjectVO.FactionInteractiveMapobjectVO.prototype, "hasOtherPlayerInfo").set.call(this, __s24param0);
    },
    enumerable: true,
    configurable: true
  });
  FactionVillageMapobjectVO.prototype.canBeAttacked = function () {
    return !!this.factionEventVO && this.ownerInfo.factionID != this.factionEventVO.ownFaction && !!this._aliveProtectorPositions && this._aliveProtectorPositions.length == 0 && !this.factionEventVO.isSpectator;
  };
  Object.defineProperty(FactionVillageMapobjectVO.prototype, "factionEventVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionVillageMapobjectVO.prototype, "aliveProtectorPositions", {
    get: function () {
      return this._aliveProtectorPositions;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionVillageMapobjectVO.prototype, "areaNameString", {
    get: function () {
      return __dep_exact_92d05af59ee2ff30.Localize.text("faction_village");
    },
    set: function (__s34param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobjectVO.InteractiveMapobjectVO.prototype, "areaNameString").set.call(this, __s34param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionVillageMapobjectVO.prototype, "dungeonLevel", {
    get: function () {
      return this._dungeonLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionVillageMapobjectVO.prototype, "attackType", {
    get: function () {
      return __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_ATTACK;
    },
    set: function (__s40param0) {
      Object.getOwnPropertyDescriptor(__dep_export_FactionInteractiveMapobjectVO.FactionInteractiveMapobjectVO.prototype, "attackType").set.call(this, __s40param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionVillageMapobjectVO.prototype, "minimumOwnerLevel", {
    get: function () {
      return this.dungeonLevel;
    },
    set: function (__s44param0) {
      Object.getOwnPropertyDescriptor(__dep_export_FactionInteractiveMapobjectVO.FactionInteractiveMapobjectVO.prototype, "minimumOwnerLevel").set.call(this, __s44param0);
    },
    enumerable: true,
    configurable: true
  });
  FactionVillageMapobjectVO.VILLAGE_SPECIAL_CAMP_ID = 1;
  return FactionVillageMapobjectVO;
}(__dep_export_FactionInteractiveMapobjectVO.FactionInteractiveMapobjectVO);
exports.FactionVillageMapobjectVO = __s0local0;
var __dep_export_WorldmapObjectIconHelper = require("gge-module:export_WorldmapObjectIconHelper");
var __dep_export_InteractiveMapobjectVO = require("gge-module:export_InteractiveMapobjectVO");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IDetailViewAble", "IWorldmapObjectVO");
