Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_ClientConstNPCs = require("gge-module:export_ClientConstNPCs");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_EventInstanceMapper = require("gge-module:export_EventInstanceMapper");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_VisualVOEvent = require("gge-module:export_VisualVOEvent");
var __dep_export_DungeonMapobjectVO = require("gge-module:export_DungeonMapobjectVO");
var __s0local0 = function (__s1param0) {
  function DungeonIsleMapobjectVO() {
    var __s3local0 = this;
    __s3local0._isleID = -1;
    __s3local0._remainingVictories = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).name = "DungeonIsle";
    __s3local0._areaType = __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_ISLE_DUNGEON;
    __s3local0._occupierID = __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_EILAND_DUNGEON;
    __s3local0._isVisibleOnMap = false;
    __s3local0._objectId = -1;
    __s3local0._keepLevel = __s3local0._wallLevel = __s3local0._gateLevel = __s3local0._towerLevel = __s3local0._moatLevel = 0;
    __s3local0._equipmentUniqueIdSkin = 0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(DungeonIsleMapobjectVO, __s1param0);
  DungeonIsleMapobjectVO.prototype.parseAreaInfo = function (__s5param0) {
    this._absAreaPosX = __s5param0[1];
    this._absAreaPosY = __s5param0[2];
    this._kingdomID = __s5param0[3];
    this._ownerInfo = __dep_export_CastleModel.CastleModel.otherPlayerData.getOwnerInfoVO(this._occupierID);
    this._secondsSinceEspionage = __s5param0[4];
    this._spyInfoReceivingTime = __dep_export_CachedTimer.CachedTimer.getCachedTimer() * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC;
    this._isleID = __dep_exact_f855840627e6e145.int(__s5param0[5]);
    var __s5local0 = __dep_export_CastleModel.CastleModel.eilandData.getIsleBlueprint(this._isleID);
    this._dungeonLevel = __s5local0.dungeonLevel;
    var __s5local1 = __dep_exact_f855840627e6e145.int(__s5param0[6]);
    this._attackCooldownEndTimestamp = __dep_export_CachedTimer.CachedTimer.getCachedTimer() + __s5local1 * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
    this._victoryCount = __s5param0[7];
    this._remainingVictories = __dep_exact_f855840627e6e145.int(__s5local0.maxVictories - this._victoryCount);
    this._isVisibleOnMap = __s5param0[8] <= 0;
    this.dispatchEvent(__dep_export_EventInstanceMapper.EventInstanceMapper.getEvent(__dep_export_VisualVOEvent.VisualVOEvent, __dep_export_VisualVOEvent.VisualVOEvent.VALUEOBJECT_CHANGE));
  };
  Object.defineProperty(DungeonIsleMapobjectVO.prototype, "dungeonLevel", {
    get: function () {
      return this._dungeonLevel;
    },
    set: function (__s9param0) {
      Object.getOwnPropertyDescriptor(__dep_export_DungeonMapobjectVO.DungeonMapobjectVO.prototype, "dungeonLevel").set.call(this, __s9param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DungeonIsleMapobjectVO.prototype, "remainingVictories", {
    get: function () {
      return this._remainingVictories;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DungeonIsleMapobjectVO.prototype, "baseGateBonus", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.eilandData.getIsleBlueprint(this._isleID).baseGateBonus;
    },
    set: function (__s15param0) {
      Object.getOwnPropertyDescriptor(__dep_export_DungeonMapobjectVO.DungeonMapobjectVO.prototype, "baseGateBonus").set.call(this, __s15param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DungeonIsleMapobjectVO.prototype, "baseMoatBonus", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.eilandData.getIsleBlueprint(this._isleID).baseMoatBonus;
    },
    set: function (__s19param0) {
      Object.getOwnPropertyDescriptor(__dep_export_DungeonMapobjectVO.DungeonMapobjectVO.prototype, "baseMoatBonus").set.call(this, __s19param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DungeonIsleMapobjectVO.prototype, "baseWallBonus", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.eilandData.getIsleBlueprint(this._isleID).baseWallBonus;
    },
    set: function (__s23param0) {
      Object.getOwnPropertyDescriptor(__dep_export_DungeonMapobjectVO.DungeonMapobjectVO.prototype, "baseWallBonus").set.call(this, __s23param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DungeonIsleMapobjectVO.prototype, "cooldownCanBeSkipped", {
    get: function () {
      return false;
    },
    set: function (__s27param0) {
      Object.getOwnPropertyDescriptor(__dep_export_DungeonMapobjectVO.DungeonMapobjectVO.prototype, "cooldownCanBeSkipped").set.call(this, __s27param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DungeonIsleMapobjectVO.prototype, "attackType", {
    get: function () {
      return __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_DUNGEONATTACK;
    },
    set: function (__s31param0) {
      Object.getOwnPropertyDescriptor(__dep_export_DungeonMapobjectVO.DungeonMapobjectVO.prototype, "attackType").set.call(this, __s31param0);
    },
    enumerable: true,
    configurable: true
  });
  return DungeonIsleMapobjectVO;
}(__dep_export_DungeonMapobjectVO.DungeonMapobjectVO);
exports.DungeonIsleMapobjectVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IDetailViewAble", "IWorldmapObjectVO", "IDungeonMapobjectVO");
