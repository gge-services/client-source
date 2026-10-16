Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_EventInstanceMapper = require("gge-module:export_EventInstanceMapper");
var __dep_export_CastleWorldmapEvent = require("gge-module:export_CastleWorldmapEvent");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleDisplayObjectClipContainer = require("gge-module:export_CastleDisplayObjectClipContainer");
var __dep_export_WorldmapObjectFlagHelper = require("gge-module:export_WorldmapObjectFlagHelper");
var __dep_export_VisualVOEvent = require("gge-module:export_VisualVOEvent");
var __dep_export_VillageMapobjectVO = require("gge-module:export_VillageMapobjectVO");
var __s0local0 = function (__s1param0) {
  function ResourceIsleMapobjectVO() {
    var __s3local0 = this;
    __s3local0._isleID = 0;
    __s3local0._villageLevel = 0;
    __s3local0._remainingOccupierTimestamp = 0;
    __s3local0._needingOccupierTime = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).name = "ResourceIsle";
    __s3local0._areaType = __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_ISLE_RESOURCE;
    __s3local0._objectId = -1;
    __s3local0.setDefaultDefenceLevels();
    __s3local0._equipmentUniqueIdSkin = 0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ResourceIsleMapobjectVO, __s1param0);
  ResourceIsleMapobjectVO.prototype.getDisplayObjectClipContainer = function (__s5param0, __s5param1, __s5param2 = false) {
    var __s5local0 = __dep_export_CastleModel.CastleModel.kingdomData.getKingdomVOByID(this.kingdomID).kingdomName;
    var __s5local1 = "Village_Mapobject_" + this.typeName + "_" + __s5local0;
    var __s5local2 = this.isleID <= 3;
    if (__s5local2) {
      __s5local1 += "_Premium";
    }
    var __s5local3 = new __dep_export_CastleDisplayObjectClipContainer.CastleDisplayObjectClipContainer();
    var __s5local4 = this.getAsExternalClip(__s5local1, this.assetFileURL("Villages_" + __s5local0));
    __s5local3.addItem(__s5local4);
    if (__s5param0 && this.ownerInfo && !this.ownerInfo.isDungeonOwner) {
      var __s5local5 = this.getVillageFlagClip(__s5local2);
      __s5local3.addItem(__s5local5);
      __dep_export_WorldmapObjectFlagHelper.WorldmapObjectFlagHelper.watchAndFix(__s5local4, __s5local5);
    }
    return __s5local3;
  };
  ResourceIsleMapobjectVO.prototype.parseAreaInfo = function (__s9param0) {
    this._absAreaPosX = __s9param0[1];
    this._absAreaPosY = __s9param0[2];
    this._objectId = __s9param0[3];
    this._occupierPId = __s9param0[4];
    this._ownerInfo = __dep_export_CastleModel.CastleModel.otherPlayerData.getOwnerInfoVO(this._occupierPId);
    this._kingdomID = __s9param0[5];
    this.areaNameString = __s9param0[6];
    this._secondsSinceEspionage = __s9param0[7];
    this._spyInfoReceivingTime = __dep_export_CachedTimer.CachedTimer.getCachedTimer() * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC;
    this._isleID = __dep_exact_f855840627e6e145.int(__s9param0[8]);
    var __s9local0 = __dep_export_CastleModel.CastleModel.eilandData.getIsleBlueprint(this._isleID);
    this._villageLevel = __s9local0.dungeonLevel;
    this._needingOccupierTime = __s9local0.occupationTime;
    this._villageType = __s9local0.getVillageResourceType();
    var __s9local1 = __s9param0[9];
    this._remainingOccupierTimestamp = __dep_export_CachedTimer.CachedTimer.getCachedTimer() + __s9local1 * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
    this._wallLevel = __s9local0.wallLevel;
    this._gateLevel = __s9local0.gateLevel;
    this._moatLevel = __s9local0.moatLevel;
    this._towerLevel = __s9local0.towerLevel;
    var __s9local2 = this._isVisibleOnMap;
    this._isVisibleOnMap = !this._ownerInfo || !(this._ownerInfo.playerID < 0) || !(__s9local1 > 0);
    if (__s9local2 && !this._isVisibleOnMap) {
      this.dispatchEvent(new __dep_export_CastleWorldmapEvent.CastleWorldmapEvent(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.REMOVED_RESOURCE_ISLE_FROM_MAP));
    }
    this.dispatchEvent(__dep_export_EventInstanceMapper.EventInstanceMapper.getEvent(__dep_export_VisualVOEvent.VisualVOEvent, __dep_export_VisualVOEvent.VisualVOEvent.VALUEOBJECT_CHANGE));
  };
  ResourceIsleMapobjectVO.prototype.parseAreaInfoBattleLog = function (__s12param0) {
    __s1param0.prototype.parseAreaInfoBattleLog.call(this, __s12param0);
    if (__s12param0.RT) {
      this._isleID = __dep_exact_f855840627e6e145.int(__s12param0.RT);
      var __s12local0 = __dep_export_CastleModel.CastleModel.eilandData.getIsleBlueprint(this._isleID);
      this._villageType = __s12local0.getVillageResourceType();
    }
  };
  ResourceIsleMapobjectVO.prototype.setDefaultDefenceLevels = function () {
    this._keepLevel = this._wallLevel = this._gateLevel = this._towerLevel = this._moatLevel = 0;
  };
  Object.defineProperty(ResourceIsleMapobjectVO.prototype, "typeName", {
    get: function () {
      switch (this._villageType) {
        case __dep_exact_26a421b704832cff.WorldConst.VILLAGE_TYPE_WOOD:
        case __dep_exact_26a421b704832cff.WorldConst.VILLAGE_TYPE_WOOD_NON_PREMIUM:
          return "Wood";
        case __dep_exact_26a421b704832cff.WorldConst.VILLAGE_TYPE_STONE:
        case __dep_exact_26a421b704832cff.WorldConst.VILLAGE_TYPE_STONE_NON_PREMIUM:
          return "Stone";
        case __dep_exact_26a421b704832cff.WorldConst.VILLAGE_TYPE_AQUAMARINE:
        case __dep_exact_26a421b704832cff.WorldConst.VILLAGE_TYPE_AQUAMARINE_NON_PREMIUM:
          return "Aquamarine";
        default:
          return "Invalid";
      }
    },
    set: function (__s20param0) {
      Object.getOwnPropertyDescriptor(__dep_export_VillageMapobjectVO.VillageMapobjectVO.prototype, "typeName").set.call(this, __s20param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResourceIsleMapobjectVO.prototype, "villageTypeDescription", {
    get: function () {
      switch (this._villageType) {
        case __dep_exact_26a421b704832cff.WorldConst.VILLAGE_TYPE_WOOD:
        case __dep_exact_26a421b704832cff.WorldConst.VILLAGE_TYPE_WOOD_NON_PREMIUM:
          return "kingdom_eiLand_village_getWood";
        case __dep_exact_26a421b704832cff.WorldConst.VILLAGE_TYPE_STONE:
        case __dep_exact_26a421b704832cff.WorldConst.VILLAGE_TYPE_STONE_NON_PREMIUM:
          return "kingdom_eiLand_village_getStone";
        case __dep_exact_26a421b704832cff.WorldConst.VILLAGE_TYPE_AQUAMARINE:
        case __dep_exact_26a421b704832cff.WorldConst.VILLAGE_TYPE_AQUAMARINE_NON_PREMIUM:
          return "kingdom_eiLand_village_getAquamarin";
        default:
          return "Invalid";
      }
    },
    set: function (__s25param0) {
      Object.getOwnPropertyDescriptor(__dep_export_VillageMapobjectVO.VillageMapobjectVO.prototype, "villageTypeDescription").set.call(this, __s25param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResourceIsleMapobjectVO.prototype, "areaNameString", {
    get: function () {
      if (this._areaNameString && this._areaNameString != "") {
        return this._areaNameString;
      } else {
        return __dep_exact_92d05af59ee2ff30.Localize.text("kingdom_eiLand_village");
      }
    },
    set: function (__s31param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobjectVO.InteractiveMapobjectVO.prototype, "areaNameString").set.call(this, __s31param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResourceIsleMapobjectVO.prototype, "isleID", {
    get: function () {
      return this._isleID;
    },
    set: function (__s35param0) {
      this._isleID = __s35param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResourceIsleMapobjectVO.prototype, "remainingOccupierTime", {
    get: function () {
      return (this._remainingOccupierTimestamp - __dep_export_CachedTimer.CachedTimer.getCachedTimer()) * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResourceIsleMapobjectVO.prototype, "occupationTime", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.eilandData.getIsleBlueprint(this._isleID).occupationTime;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResourceIsleMapobjectVO.prototype, "baseGateBonus", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.eilandData.getIsleBlueprint(this._isleID).baseGateBonus;
    },
    set: function (__s43param0) {
      Object.getOwnPropertyDescriptor(__dep_export_VillageMapobjectVO.VillageMapobjectVO.prototype, "baseGateBonus").set.call(this, __s43param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResourceIsleMapobjectVO.prototype, "baseMoatBonus", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.eilandData.getIsleBlueprint(this._isleID).baseMoatBonus;
    },
    set: function (__s47param0) {
      Object.getOwnPropertyDescriptor(__dep_export_VillageMapobjectVO.VillageMapobjectVO.prototype, "baseMoatBonus").set.call(this, __s47param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResourceIsleMapobjectVO.prototype, "baseWallBonus", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.eilandData.getIsleBlueprint(this._isleID).baseWallBonus;
    },
    set: function (__s51param0) {
      Object.getOwnPropertyDescriptor(__dep_export_VillageMapobjectVO.VillageMapobjectVO.prototype, "baseWallBonus").set.call(this, __s51param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResourceIsleMapobjectVO.prototype, "needingOccupierTime", {
    get: function () {
      return this._needingOccupierTime;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResourceIsleMapobjectVO.prototype, "villageLevel", {
    get: function () {
      return this._villageLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResourceIsleMapobjectVO.prototype, "attackType", {
    get: function () {
      return __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_ISLAND_ATTACK;
    },
    set: function (__s59param0) {
      Object.getOwnPropertyDescriptor(__dep_export_VillageMapobjectVO.VillageMapobjectVO.prototype, "attackType").set.call(this, __s59param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResourceIsleMapobjectVO.prototype, "minimumOwnerLevel", {
    get: function () {
      return this.villageLevel;
    },
    set: function (__s63param0) {
      Object.getOwnPropertyDescriptor(__dep_export_VillageMapobjectVO.VillageMapobjectVO.prototype, "minimumOwnerLevel").set.call(this, __s63param0);
    },
    enumerable: true,
    configurable: true
  });
  return ResourceIsleMapobjectVO;
}(__dep_export_VillageMapobjectVO.VillageMapobjectVO);
exports.ResourceIsleMapobjectVO = __s0local0;
var __dep_export_InteractiveMapobjectVO = require("gge-module:export_InteractiveMapobjectVO");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IDetailViewAble", "IWorldmapObjectVO");
