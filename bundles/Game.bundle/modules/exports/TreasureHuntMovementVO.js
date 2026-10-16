Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstNPCs = require("gge-module:export_ClientConstNPCs");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ArmyAttackMapmovementVO = require("gge-module:export_ArmyAttackMapmovementVO");
var __s0local0 = function (__s1param0) {
  function TreasureHuntMovementVO() {
    var __s3local0 = this;
    __s3local0._treasureMapID = 0;
    __s3local0._tMapNodeID = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).name = TreasureHuntMovementVO.NAME;
    __s3local0.group = "Mapmovement";
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(TreasureHuntMovementVO, __s1param0);
  TreasureHuntMovementVO.prototype.loadFromParamObject = function (__s5param0) {
    var __s5local0 = __s5param0.M;
    this._objectId = __s5local0.MID;
    this._passedTime = __s5local0.PT;
    this._totalTime = __s5local0.TT;
    this._passedTimeMs = __s5local0.PT * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
    this._totalTimeMs = __s5local0.TT * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
    this._arivalTimeStamp = __dep_export_CachedTimer.CachedTimer.getCachedTimer() + (this._totalTime - this._passedTime) * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
    this._direction = __s5local0.D;
    this._treasureMapID = __dep_exact_f855840627e6e145.int(__s5param0.MID);
    this._tMapNodeID = __dep_exact_f855840627e6e145.int(__s5param0.NID);
    this._treasureMapVO = __dep_export_CastleModel.CastleModel.treasureMapData.getTreasureMapByID(this._treasureMapID, false);
    this._tmapNode = this._treasureMapVO.getNodeById(this._tMapNodeID);
    this._sourceOwnerInfo = __dep_export_CastleModel.CastleModel.otherPlayerData.getOwnInfoVO();
    this._movementOwnerInfo = this._sourceOwnerInfo;
    if (__dep_exact_26a421b704832cff.TreasureMapsConst.CRUSADE_MAP_IDS.indexOf(this._treasureMapID) > -1) {
      this._targetOwnerInfo = __dep_export_CastleNPCOwnerFactory.CastleNPCOwnerFactory.generateEventOwner(this._tmapNode.eventID);
    } else {
      this._targetOwnerInfo = __dep_export_CastleModel.CastleModel.otherPlayerData.getOwnerInfoVO(__dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_TREASURE_HUNT_DUNGEON);
    }
    this._sourceOwnerID = this._sourceOwnerInfo.playerID;
    this._targetOwnerID = this._targetOwnerInfo.playerID;
    this._movementOwnerID = this._sourceOwnerInfo.playerID;
    if (__dep_exact_26a421b704832cff.TreasureMapsConst.CRUSADE_MAP_IDS.indexOf(this._treasureMapID) > -1) {
      this._sourceArea = new __dep_export_EventCampMapobjectVO.EventCampMapobjectVO();
      this._sourceArea.parseAreaInfo([__dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_TREASURE_CAMP, this._treasureMapID]);
    } else if (__dep_export_CastleModel.CastleModel.userData.castleList) {
      this._sourceArea = __dep_export_CastleModel.CastleModel.userData.castleList.getHomeCastle();
    }
    if (this._sourceArea) {
      this._sourceArea.ownerInfo = this._sourceOwnerInfo;
    }
    this._targetArea = new __dep_export_TreasureDungeonMapObjectVO.TreasureDungeonMapObjectVO();
    this._targetArea.parseAreaInfo([__dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_TREASURE_DUNGEON, -1, -1, 1, 0, 0, this._treasureMapVO.kingdomID]);
    this._targetArea.ownerInfo = this._targetOwnerInfo;
    this._targetArea.type = this._tmapNode.nodeType;
    this._targetArea.mapID = this._tmapNode.mapID;
    this._targetArea.tMapNode = this._tmapNode;
    if (__s5param0.UM) {
      this.parseUnitMovement(__s5param0.UM);
    }
    this.parseArmy(__s5param0.FA);
  };
  Object.defineProperty(TreasureHuntMovementVO.prototype, "isVisibleOnWorldMap", {
    get: function () {
      return false;
    },
    set: function (__s15param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ArmyAttackMapmovementVO.ArmyAttackMapmovementVO.prototype, "isVisibleOnWorldMap").set.call(this, __s15param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureHuntMovementVO.prototype, "treasureMapID", {
    get: function () {
      return this._treasureMapID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureHuntMovementVO.prototype, "canBeRetreated", {
    get: function () {
      return false;
    },
    set: function (__s21param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ArmyAttackMapmovementVO.ArmyAttackMapmovementVO.prototype, "canBeRetreated").set.call(this, __s21param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureHuntMovementVO.prototype, "treasuremapNodeID", {
    get: function () {
      return this._tMapNodeID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureHuntMovementVO.prototype, "tMapNodeID", {
    get: function () {
      return this._tMapNodeID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureHuntMovementVO.prototype, "distance", {
    get: function () {
      return this._tmapNode.distance;
    },
    set: function (__s29param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ArmyAttackMapmovementVO.ArmyAttackMapmovementVO.prototype, "distance").set.call(this, __s29param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureHuntMovementVO.prototype, "tmapNode", {
    get: function () {
      return this._tmapNode;
    },
    enumerable: true,
    configurable: true
  });
  TreasureHuntMovementVO.prototype.isTreasureMapMovement = function () {
    var __s33local0 = false;
    var __s33local1 = __dep_export_CastleModel.CastleModel.treasureMapData.getTreasureMapByID(this.treasureMapID);
    if (__s33local1) {
      __s33local0 = __s33local1.isTreasureMap;
    }
    return __s33local0;
  };
  TreasureHuntMovementVO.__initialize_static_members = function () {
    TreasureHuntMovementVO.NAME = "Treasurehunt";
  };
  return TreasureHuntMovementVO;
}(__dep_export_ArmyAttackMapmovementVO.ArmyAttackMapmovementVO);
exports.TreasureHuntMovementVO = __s0local0;
var __dep_export_CastleNPCOwnerFactory = require("gge-module:export_CastleNPCOwnerFactory");
var __dep_export_EventCampMapobjectVO = require("gge-module:export_EventCampMapobjectVO");
var __dep_export_TreasureDungeonMapObjectVO = require("gge-module:export_TreasureDungeonMapObjectVO");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IMapMovementVO", "IArmyMapmovementVO");
__s0local0.__initialize_static_members();
