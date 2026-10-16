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
var __dep_export_WorldmapObjectFlagHelper = require("gge-module:export_WorldmapObjectFlagHelper");
var __dep_export_PoolManager = require("gge-module:export_PoolManager");
var __dep_export_VisualVOEvent = require("gge-module:export_VisualVOEvent");
var __dep_export_CastleWorldmapConst = require("gge-module:export_CastleWorldmapConst");
var __dep_export_UnitBaseLocationEnum = require("gge-module:export_UnitBaseLocationEnum");
var __dep_export_ContainerBuilderMapobjectVO = require("gge-module:export_ContainerBuilderMapobjectVO");
var __s0local0 = function (__s1param0) {
  function VillageMapobjectVO() {
    var __s3local0 = this;
    __s3local0._villageType = 0;
    __s3local0._occupierPId = 0;
    __s3local0._useFlag = false;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).name = "Village";
    __s3local0._areaType = __dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_VILLAGE;
    __s3local0._isVisibleOnMap = false;
    __s3local0._secondsSinceEspionage = -1;
    __s3local0._occupierPId = -1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(VillageMapobjectVO, __s1param0);
  VillageMapobjectVO.prototype.getDisplayObjectClipContainer = function (__s5param0, __s5param1, __s5param2) {
    var __s5local0 = this;
    if (__s5param2 === undefined) {
      __s5param2 = false;
    }
    var __s5local1 = __dep_export_CastleModel.CastleModel.kingdomData.getKingdomVOByID(this.kingdomID).kingdomName;
    var __s5local2 = "Village_Mapobject_" + this.typeName + "_" + __s5local1;
    this._graphicClassName = __s5local2;
    this._useFlag = __s5param0;
    return __dep_export_PoolManager.mapObjectsPool.obtain(__s5local2, function () {
      var __s8local0 = new __dep_export_CastleDisplayObjectClipContainer.CastleDisplayObjectClipContainer();
      var __s8local1 = __s5local0.getAsExternalClip(__s5local2, __s5local0.assetFileURL("Villages_" + __s5local1));
      __s8local0.addItem(__s8local1);
      if (__s5local0._useFlag && __s5local0.ownerInfo && !__s5local0.ownerInfo.isDungeonOwner) {
        var __s8local2 = __s5local0.getVillageFlagClip(false);
        __s8local0.addItem(__s8local2);
        if (__s5local0.ownerInfo.hasVIPFlag) {
          __s8local2.scaleX = __s8local2.scaleY *= __dep_export_CastleWorldmapConst.CastleWorldmapConst.ZOOM_MAX;
        }
        __dep_export_WorldmapObjectFlagHelper.WorldmapObjectFlagHelper.watchAndFix(__s8local1, __s8local2);
      }
      return __s8local0;
    });
  };
  VillageMapobjectVO.prototype.getVillageFlagClip = function (__s12param0) {
    if (__s12param0) {
      return this.getFlagClip(this.ownerInfo, "PremiumVillage");
    } else {
      return this.getFlagClip(this.ownerInfo, "Village");
    }
  };
  VillageMapobjectVO.prototype.parseAreaInfo = function (__s16param0) {
    if (__s16param0 && __s16param0.length != 0) {
      this._areaType = __s16param0[0];
      this._absAreaPosX = __s16param0[1];
      this._absAreaPosY = __s16param0[2];
      this._objectId = __s16param0[3];
      this._occupierPId = __dep_exact_f855840627e6e145.int(__s16param0[4]);
      this._ownerInfo = __dep_export_CastleModel.CastleModel.otherPlayerData.getOwnerInfoVO(this._occupierPId);
      this._villageType = __dep_exact_f855840627e6e145.int(__s16param0[5]);
      this._kingdomID = __s16param0[6];
      this._secondsSinceEspionage = __s16param0[7];
      this._spyInfoReceivingTime = __dep_export_CachedTimer.CachedTimer.getCachedTimer() * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC;
      this.areaNameString = __s16param0[8];
      this._isVisibleOnMap = true;
      this.dispatchEvent(__dep_export_EventInstanceMapper.EventInstanceMapper.getEvent(__dep_export_VisualVOEvent.VisualVOEvent, __dep_export_VisualVOEvent.VisualVOEvent.VALUEOBJECT_CHANGE));
      var __s16local0 = __dep_exact_f855840627e6e145.int(this._ownerInfo ? this._ownerInfo.playerLevel : __dep_export_CastleModel.CastleModel.kingdomData.getKingdomVOByID(this._kingdomID).minNonPremiumUnlockLevel);
      var __s16local1 = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff_1.CombatConst.getWallOrGateWodIdForVillages(__s16local0, true));
      var __s16local2 = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff_1.CombatConst.getWallOrGateWodIdForVillages(__s16local0, false));
      if (__dep_export_CastleModel.CastleModel.wodData.voSubList(__dep_export_CastleWodData.CastleWodData.TYPE_BUILDING).get(__s16local1)) {
        this._wallLevel = __dep_export_CastleModel.CastleModel.wodData.voSubList(__dep_export_CastleWodData.CastleWodData.TYPE_BUILDING).get(__s16local1).level;
        this._gateLevel = __dep_export_CastleModel.CastleModel.wodData.voSubList(__dep_export_CastleWodData.CastleWodData.TYPE_BUILDING).get(__s16local2).level;
      } else {
        this._wallLevel = 0;
        this._gateLevel = 0;
      }
      this._moatLevel = 0;
      this._keepLevel = 0;
    }
  };
  VillageMapobjectVO.prototype.parseAreaInfoBattleLog = function (__s21param0) {
    __s1param0.prototype.parseAreaInfoBattleLog.call(this, __s21param0);
    this._villageType = __dep_exact_f855840627e6e145.int(__s21param0.RT);
  };
  Object.defineProperty(VillageMapobjectVO.prototype, "areaNameString", {
    get: function () {
      if (this._areaNameString && this._areaNameString != "") {
        return this._areaNameString;
      } else {
        return __dep_exact_92d05af59ee2ff30.Localize.text("village");
      }
    },
    set: function (__s27param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobjectVO.InteractiveMapobjectVO.prototype, "areaNameString").set.call(this, __s27param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VillageMapobjectVO.prototype, "typeName", {
    get: function () {
      switch (this._villageType) {
        case __dep_exact_26a421b704832cff_2.WorldConst.VILLAGE_TYPE_WOOD:
          return "Wood";
        case __dep_exact_26a421b704832cff_2.WorldConst.VILLAGE_TYPE_STONE:
          return "Stone";
        case __dep_exact_26a421b704832cff_2.WorldConst.VILLAGE_TYPE_FOOD:
          return "Food";
        case __dep_exact_26a421b704832cff_2.WorldConst.VILLAGE_TYPE_COAL:
          return "Coal";
        case __dep_exact_26a421b704832cff_2.WorldConst.VILLAGE_TYPE_OIL:
          return "Oil";
        case __dep_exact_26a421b704832cff_2.WorldConst.VILLAGE_TYPE_GLASS:
          return "Glass";
        default:
          return "Invalid";
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VillageMapobjectVO.prototype, "productivityBoost", {
    get: function () {
      var __s32local0 = __dep_export_CastleModel.CastleModel.kingdomData.getKingdomVOByID(this._kingdomID).villagesInfo;
      switch (this._villageType) {
        case __dep_exact_26a421b704832cff_2.WorldConst.VILLAGE_TYPE_FOOD:
          if (__s32local0) {
            return __s32local0.productivityFoodBoost;
          } else {
            return 0;
          }
        case __dep_exact_26a421b704832cff_2.WorldConst.VILLAGE_TYPE_STONE:
          if (__s32local0) {
            return __s32local0.productivityStoneBoost;
          } else {
            return 0;
          }
        case __dep_exact_26a421b704832cff_2.WorldConst.VILLAGE_TYPE_WOOD:
          if (__s32local0) {
            return __s32local0.productivityWoodBoost;
          } else {
            return 0;
          }
        case __dep_exact_26a421b704832cff_2.WorldConst.VILLAGE_TYPE_COAL:
          if (__s32local0) {
            return __s32local0.productivityCoalBoost;
          } else {
            return 0;
          }
        case __dep_exact_26a421b704832cff_2.WorldConst.VILLAGE_TYPE_OIL:
          if (__s32local0) {
            return __s32local0.productivityOilBoost;
          } else {
            return 0;
          }
        case __dep_exact_26a421b704832cff_2.WorldConst.VILLAGE_TYPE_GLASS:
          if (__s32local0) {
            return __s32local0.productivityGlassBoost;
          } else {
            return 0;
          }
        default:
          return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VillageMapobjectVO.prototype, "villageTypeDescription", {
    get: function () {
      switch (this._villageType) {
        case __dep_exact_26a421b704832cff_2.WorldConst.VILLAGE_TYPE_FOOD:
          return __dep_exact_92d05af59ee2ff30.Localize.text("village_boost_food", [this.productivityBoost]);
        case __dep_exact_26a421b704832cff_2.WorldConst.VILLAGE_TYPE_STONE:
          return __dep_exact_92d05af59ee2ff30.Localize.text("village_boost_stone", [this.productivityBoost]);
        case __dep_exact_26a421b704832cff_2.WorldConst.VILLAGE_TYPE_WOOD:
          return __dep_exact_92d05af59ee2ff30.Localize.text("village_boost_wood", [this.productivityBoost]);
        case __dep_exact_26a421b704832cff_2.WorldConst.VILLAGE_TYPE_COAL:
          return __dep_exact_92d05af59ee2ff30.Localize.text("village_boost_coal", [this.productivityBoost]);
        case __dep_exact_26a421b704832cff_2.WorldConst.VILLAGE_TYPE_OIL:
          return __dep_exact_92d05af59ee2ff30.Localize.text("village_boost_oliveoil", [this.productivityBoost]);
        case __dep_exact_26a421b704832cff_2.WorldConst.VILLAGE_TYPE_GLASS:
          return __dep_exact_92d05af59ee2ff30.Localize.text("village_boost_glass", [this.productivityBoost]);
        default:
          return "";
      }
    },
    enumerable: true,
    configurable: true
  });
  VillageMapobjectVO.prototype.canBeAttacked = function () {
    return !!this.ownerInfo && !this.isOwnMapobject && !__dep_export_CastleModel.CastleModel.userData.isUserInMyAlliance(this.ownerInfo) && __dep_export_CastleModel.CastleModel.allianceData.getStatusByAlliance(this.ownerInfo.allianceID) != __dep_exact_26a421b704832cff.AllianceConst.DIPLOMACY_REAL_ALLIED;
  };
  Object.defineProperty(VillageMapobjectVO.prototype, "canBeSpied", {
    get: function () {
      return !this.isOwnMapobject;
    },
    set: function (__s54param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ContainerBuilderMapobjectVO.ContainerBuilderMapobjectVO.prototype, "canBeSpied").set.call(this, __s54param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VillageMapobjectVO.prototype, "isOwnMapobject", {
    get: function () {
      return this._occupierPId == __dep_export_CastleModel.CastleModel.userData.playerID;
    },
    set: function (__s58param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ContainerBuilderMapobjectVO.ContainerBuilderMapobjectVO.prototype, "isOwnMapobject").set.call(this, __s58param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VillageMapobjectVO.prototype, "villageType", {
    get: function () {
      return this._villageType;
    },
    set: function (__s62param0) {
      this._villageType = __s62param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VillageMapobjectVO.prototype, "occupierPId", {
    get: function () {
      return this._occupierPId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VillageMapobjectVO.prototype, "isPlayerOwned", {
    get: function () {
      return this._occupierPId >= 0;
    },
    enumerable: true,
    configurable: true
  });
  VillageMapobjectVO.prototype.canBeTroupsSended = function () {
    return this.ownerInfo != null && this.ownerInfo.playerID === __dep_export_CastleModel.CastleModel.userData.playerID;
  };
  VillageMapobjectVO.prototype.canBeSupported = function () {
    return !this.isOwnMapobject && __dep_export_CastleModel.CastleModel.userData.isUserInMyAlliance(this.ownerInfo);
  };
  Object.defineProperty(VillageMapobjectVO.prototype, "hasOtherPlayerInfo", {
    get: function () {
      return !!this.ownerInfo && !this.isOwnMapobject && !this.ownerInfo.isDungeonOwner;
    },
    set: function (__s74param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ContainerBuilderMapobjectVO.ContainerBuilderMapobjectVO.prototype, "hasOtherPlayerInfo").set.call(this, __s74param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VillageMapobjectVO.prototype, "canChangeDefenceOnWorldmap", {
    get: function () {
      return this.isOwnMapobject;
    },
    set: function (__s78param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ContainerBuilderMapobjectVO.ContainerBuilderMapobjectVO.prototype, "canChangeDefenceOnWorldmap").set.call(this, __s78param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VillageMapobjectVO.prototype, "ignoresPeaceMode", {
    get: function () {
      return true;
    },
    set: function (__s82param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ContainerBuilderMapobjectVO.ContainerBuilderMapobjectVO.prototype, "ignoresPeaceMode").set.call(this, __s82param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VillageMapobjectVO.prototype, "attackType", {
    get: function () {
      return __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_VILLAGE_ATTACK;
    },
    set: function (__s86param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ContainerBuilderMapobjectVO.ContainerBuilderMapobjectVO.prototype, "attackType").set.call(this, __s86param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VillageMapobjectVO.prototype, "minimumOwnerLevel", {
    get: function () {
      return Math.max(__dep_export_CastleModel.CastleModel.kingdomData.getKingdomVOByID(this.kingdomID).minNonPremiumUnlockLevel, Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobjectVO.InteractiveMapobjectVO.prototype, "minimumOwnerLevel").get.call(this));
    },
    set: function (__s90param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ContainerBuilderMapobjectVO.ContainerBuilderMapobjectVO.prototype, "minimumOwnerLevel").set.call(this, __s90param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VillageMapobjectVO.prototype, "unitBaseLocation", {
    get: function () {
      return __dep_export_UnitBaseLocationEnum.UnitBaseLocationEnum.KINGDOM_CASTLE;
    },
    set: function (__s94param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ContainerBuilderMapobjectVO.ContainerBuilderMapobjectVO.prototype, "unitBaseLocation").set.call(this, __s94param0);
    },
    enumerable: true,
    configurable: true
  });
  return VillageMapobjectVO;
}(__dep_export_ContainerBuilderMapobjectVO.ContainerBuilderMapobjectVO);
exports.VillageMapobjectVO = __s0local0;
var __dep_export_CastleWodData = require("gge-module:export_CastleWodData");
var __dep_export_InteractiveMapobjectVO = require("gge-module:export_InteractiveMapobjectVO");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IDetailViewAble", "IWorldmapObjectVO");
