Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_ClientConstLevelRestrictions = require("gge-module:export_ClientConstLevelRestrictions");
var __dep_export_EventInstanceMapper = require("gge-module:export_EventInstanceMapper");
var __dep_export_ABGHelper = require("gge-module:export_ABGHelper");
var __dep_export_SpecialServerHelper = require("gge-module:export_SpecialServerHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleWorldmapData = require("gge-module:export_CastleWorldmapData");
var __dep_export_ABGTowerConnectionVO = require("gge-module:export_ABGTowerConnectionVO");
var __dep_export_CastleAllianceCrestHelper = require("gge-module:export_CastleAllianceCrestHelper");
var __dep_export_WorldmapObjectFlagHelper = require("gge-module:export_WorldmapObjectFlagHelper");
var __dep_export_VisualVOEvent = require("gge-module:export_VisualVOEvent");
var __dep_export_BasicMapobjectVO = require("gge-module:export_BasicMapobjectVO");
var __dep_export_ContainerBuilderMapobjectVO = require("gge-module:export_ContainerBuilderMapobjectVO");
var __s0local0 = function (__s1param0) {
  function CastleMapobjectVO() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._isABGTowerAttackable = false;
    __s3local0._abgPlayerTowerPoints = 0;
    __s3local0.name = "Castle";
    __s3local0.group = "Mapobject";
    __s3local0._areaType = __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_CASTLE;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleMapobjectVO, __s1param0);
  CastleMapobjectVO.prototype.getDisplayObjectClipContainer = function (__s5param0, __s5param1, __s5param2 = false) {
    if (this.ownerInfo && this.ownerInfo.isRuin) {
      return this.getRuinContainer();
    } else {
      return this.getCastleContainer(__s5param0);
    }
  };
  CastleMapobjectVO.prototype.getRuinContainer = function () {
    var __s9local0 = new __dep_export_CastleDisplayObjectClipContainer.CastleDisplayObjectClipContainer();
    __s9local0.addItem(this.getBackgroundClip());
    __s9local0.addItem(this.getAsExternalClip(__dep_export_WorldmapEasterEggHelper.WorldmapEasterEggHelper.isCatModeActive ? __dep_export_WorldmapEasterEggHelper.WorldmapEasterEggHelper.ASSET_DUMMY_MAPOBJECT : CastleMapobjectVO.MAPOBJECT_RUIN));
    return __s9local0;
  };
  CastleMapobjectVO.prototype.getBackgroundClip = function () {
    if (__dep_export_ABGHelper.ABGHelper.isOnABGServer) {
      return null;
    } else {
      return __s1param0.prototype.getBackgroundClip.call(this);
    }
  };
  CastleMapobjectVO.prototype.getCastleContainer = function (__s15param0 = true) {
    var __s15local0 = new __dep_export_CastleDisplayObjectClipContainer.CastleDisplayObjectClipContainer();
    if (this.getBackgroundClip()) {
      __s15local0.addItem(this.getBackgroundClip());
    }
    var __s15local1 = this.getMoatClip();
    if (__s15local1) {
      __s15local0.addItem(__s15local1);
    }
    var __s15local2 = this.getKeepClip();
    __s15local0.addItem(__s15local2);
    if (this.ownerInfo && __s15param0) {
      __dep_export_renderScheduler.renderScheduler.addTask(this.addFlagCallback.bind(this, __s15local0, __s15local2));
    }
    return __s15local0;
  };
  CastleMapobjectVO.prototype.addFlagCallback = function (__s20param0, __s20param1) {
    __s20param0.asDisplayObject();
    if (__s20param0.isDisposed) {
      return true;
    }
    var __s20local0 = this.getCastleFlagClip(this.ownerInfo);
    __s20local0.scaleX = __s20local0.scaleY *= __dep_export_CastleWorldmapConst.CastleWorldmapConst.ZOOM_MAX;
    __s20param0.addItem(__s20local0, 1);
    __dep_export_WorldmapObjectFlagHelper.WorldmapObjectFlagHelper.watchAndFix(__s20param1, __s20local0);
    __s20param0.clipSizeComponent &&= __s20param0.clipSizeComponent;
    return false;
  };
  CastleMapobjectVO.prototype.getKeepClip = function () {
    if (__dep_export_WorldmapEasterEggHelper.WorldmapEasterEggHelper.isCatModeActive) {
      return this.getAsExternalClip(__dep_export_WorldmapEasterEggHelper.WorldmapEasterEggHelper.ASSET_DUMMY_MAPOBJECT);
    }
    var __s23local0 = "Castle_Mapobject_EventSkin_" + __dep_export_SpecialServerHelper.SpecialServerHelper.skinName + "_" + Math.max(1, this.keepLevel);
    if (__dep_export_SpecialServerHelper.SpecialServerHelper.useSkin && __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.isItemAssetVersioned(__s23local0)) {
      return this.getAsExternalClip(__s23local0);
    }
    var __s23local1 = !!this.ownerInfo && (!!this.ownerInfo.playerPrefix && this.ownerInfo.playerPrefix.isIslandTitle || !!this.ownerInfo.playerSuffix && this.ownerInfo.playerSuffix.isIslandTitle);
    var __s23local2 = this.equipmentUniqueIdSkin > 0 ? __dep_export_CastleModel.CastleModel.equipData.getEquipmentByUniqueID(this.equipmentUniqueIdSkin) : null;
    if (__s23local2 && __s23local2.hasSkinInfo()) {
      var __s23local3 = "";
      if (__s23local2.skinDefinesAssetForAllCastleLevels) {
        __s23local3 = "_" + Math.max(1, this.keepLevel);
      }
      return this.getAsExternalClip("Castle_Mapobject_Special_" + __s23local2.skinAssetID + __s23local3);
    }
    if (__s23local1) {
      if (__dep_export_CastleTitleSystemHelper.CastleTitleSystemHelper.isIslandKing(this.ownerInfo)) {
        return this.getAsExternalClip("Castle_Eiland_King");
      } else {
        return this.getAsExternalClip("Castle_Eiland_Pos_Title");
      }
    }
    if (__dep_export_TempServerHelper.TempServerHelper.isOnTempServer && this.kingdomID == __dep_exact_26a421b704832cff_1.WorldClassic.KINGDOM_ID && __dep_export_TempServerHelper.TempServerHelper.tmpServerEvent && __dep_export_TempServerHelper.TempServerHelper.tmpServerEvent.settingVO.isCastleTransportationOnly) {
      return this.getAsExternalClip("Castle_Mapobject_EventSkin_CastleTransportation");
    }
    var __s23local4;
    var __s23local5 = this.assetFileURL(__dep_export_WorldmapObjectIconHelper.WorldmapObjectIconHelper.FILE_NAME_CASTLE_PARTS);
    var __s23local6 = -1;
    switch (this.keepLevel) {
      case 1:
        for (var __s23local7 = (__s23local6 = __dep_exact_f855840627e6e145.int(__dep_export_WorldmapObjectIconHelper.WorldmapObjectIconHelper.KEEP_LEVEL_1_STAGES.length)) - 1; __s23local7 >= 0; __s23local7--) {
          if (this.ownerInfo.playerLevel < __dep_export_WorldmapObjectIconHelper.WorldmapObjectIconHelper.KEEP_LEVEL_1_STAGES[__s23local7]) {
            __s23local6 = __s23local7 > 0 && this.ownerInfo.playerLevel >= __dep_export_WorldmapObjectIconHelper.WorldmapObjectIconHelper.KEEP_LEVEL_1_STAGES[__s23local7 - 1] ? __s23local7 : 1;
          }
        }
        __s23local4 = "Castlepart_Keep_" + this.keepLevel + "_stage_" + __s23local6;
        break;
      case 2:
        for (var __s23local8 = (__s23local6 = __dep_exact_f855840627e6e145.int(__dep_export_WorldmapObjectIconHelper.WorldmapObjectIconHelper.KEEP_LEVEL_2_STAGES.length)) - 1; __s23local8 >= 0; __s23local8--) {
          if (this.ownerInfo.playerLevel < __dep_export_WorldmapObjectIconHelper.WorldmapObjectIconHelper.KEEP_LEVEL_2_STAGES[__s23local8]) {
            __s23local6 = __s23local8 > 0 && this.ownerInfo.playerLevel >= __dep_export_WorldmapObjectIconHelper.WorldmapObjectIconHelper.KEEP_LEVEL_2_STAGES[__s23local8 - 1] ? __s23local8 : __s23local8 + 1;
          }
        }
        __s23local4 = "Castlepart_Keep_" + this.keepLevel + "_stage_" + __s23local6;
        break;
      default:
        __s23local4 = "Castlepart_Keep_" + this.keepLevel;
        __s23local4 = "Castlepart_Keep_" + this.keepLevel;
    }
    return this.getAsExternalClip(__s23local4, __s23local5);
  };
  CastleMapobjectVO.prototype.colorizeFlag = function (__s40param0, __s40param1) {
    return function () {
      __dep_export_CastleAllianceCrestHelper.CastleAllianceCrestHelper.colorizeFlags(__s40param0.getChildAt(0), __s40param1);
    };
  };
  CastleMapobjectVO.prototype.getMoatClip = function () {
    if (__dep_export_WorldmapEasterEggHelper.WorldmapEasterEggHelper.isCatModeActive) {
      return null;
    }
    var __s44local0 = __dep_export_CastleModel.CastleModel.kingdomData.getKingdomVOByID(this.kingdomID).kingdomName;
    var __s44local1 = this.assetFileURL(__dep_export_WorldmapObjectIconHelper.WorldmapObjectIconHelper.FILE_NAME_CASTLE_PARTS);
    if (this.moatLevel > 0) {
      if (__dep_export_ABGHelper.ABGHelper.isOnABGServer) {
        return null;
      }
      var __s44local2 = this.equipmentUniqueIdSkin > 0 ? __dep_export_CastleModel.CastleModel.equipData.getEquipmentByUniqueID(this.equipmentUniqueIdSkin) : null;
      if (__s44local2) {
        if (__s44local2 && __s44local2.skinDefinesIncreasedAsset) {
          return this.getAsExternalClip(CastleMapobjectVO.CASTLE_PART_MOAT + __s44local0 + "_25", __s44local1);
        }
        if (__s44local2 && __s44local2.skinDefinesAssetForMoat) {
          return this.getAsExternalClip(CastleMapobjectVO.CASTLE_PART_MOAT + __s44local0 + CastleMapobjectVO.FILE_NAME_FLAG_SPECIAL + __s44local2.skinAssetID);
        }
      }
      return this.getAsExternalClip(CastleMapobjectVO.CASTLE_PART_MOAT + __s44local0, __s44local1);
    }
    return null;
  };
  CastleMapobjectVO.prototype.parseAreaInfo = function (__s52param0) {
    if (__s52param0.length <= 4) {
      this._areaType = __s52param0[0];
      this._absAreaPosX = __s52param0[1];
      this._absAreaPosY = __s52param0[2];
      this._occupierID = __s52param0[3];
      if (this.isOccupied) {
        __dep_export_CastleModel.CastleModel.worldmapData ||= __dep_export_CastleModel.CastleModel.addModel(new __dep_export_CastleWorldmapData.CastleWorldmapData());
        __dep_export_CastleModel.CastleModel.worldmapData.relocationObjects.push(this);
      }
      this._ownerInfo = null;
      this.dispatchEvent(__dep_export_EventInstanceMapper.EventInstanceMapper.getEvent(__dep_export_VisualVOEvent.VisualVOEvent, __dep_export_VisualVOEvent.VisualVOEvent.VALUEOBJECT_CHANGE));
    } else {
      __s1param0.prototype.parseAreaInfo.call(this, __s52param0);
      if (__dep_export_ABGHelper.ABGHelper.isOnABGAndTower) {
        var __s52local0 = new __dep_export_ABGTowerConnectionVO.ABGTowerConnectionVO();
        var __s52local1 = [__s52param0[18][0], __s52param0[18][1], this.ownerInfo.playerName, __s52param0[18][2] ? 1 : 0];
        __s52local0.fillFromConnectionValues(__s52local1);
        this._customConnections = [];
        this.customConnections.push(__s52local0);
        this._isABGTowerAttackable = __s52param0[18][2];
        this._abgPlayerTowerPoints = __dep_exact_f855840627e6e145.int(__s52param0[18][3]);
      }
    }
  };
  Object.defineProperty(CastleMapobjectVO.prototype, "isVisibleOnMap", {
    get: function () {
      if (this._ownerInfo) {
        return this._ownerInfo.playerID > 0 && this._ownerInfo.playerLevel >= __dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_TO_THE_WORLD_MAP;
      } else {
        return this._occupierID > 0 || this.isUseAbleForRelocation && __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().currentState == __dep_export_CastleLayoutManager.CastleLayoutManager.STATE_WORLDMAP_RELOCATION;
      }
    },
    set: function (__s62param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicMapobjectVO.BasicMapobjectVO.prototype, "isVisibleOnMap").set.call(this, __s62param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleMapobjectVO.prototype.canBeTroupsSended = function () {
    return this.isOwnMapobject && (__dep_export_CastleModel.CastleModel.userData.hasOutpostsInKingdom(this.kingdomID) || __dep_export_CastleModel.CastleModel.userData.laboratoryList.hasLaboratoryInKingdom(this.kingdomID) || __dep_export_CastleModel.CastleModel.userData.villageList.getAmountInKingdomID(__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID) > 0 || __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID == __dep_exact_26a421b704832cff_1.WorldClassic.KINGDOM_ID && (__dep_export_CastleModel.CastleModel.userData.kingstowerList.kingstowerAmount > 0 || __dep_export_CastleModel.CastleModel.userData.monumentList.amount > 0));
  };
  CastleMapobjectVO.prototype.canBeSupported = function () {
    return !this.isOwnMapobject && __dep_export_CastleModel.CastleModel.userData.isUserInMyAlliance(this.ownerInfo);
  };
  CastleMapobjectVO.prototype.canBePlagueAttacked = function () {
    return !!this.ownerInfo && !this.isOwnMapobject;
  };
  CastleMapobjectVO.prototype.canBeAttacked = function () {
    return !!this.ownerInfo && !this.isOwnMapobject && !__dep_export_CastleModel.CastleModel.userData.isUserInMyAlliance(this.ownerInfo) && __dep_export_CastleModel.CastleModel.allianceData.getStatusByAlliance(this.ownerInfo.allianceID) != __dep_exact_26a421b704832cff_2.AllianceConst.DIPLOMACY_REAL_ALLIED;
  };
  Object.defineProperty(CastleMapobjectVO.prototype, "canBeTraded", {
    get: function () {
      return this.isOwnMapobject && __dep_export_CastleModel.CastleModel.userData.hasOutpostsInKingdom(this.kingdomID) || !this.isOwnMapobject;
    },
    set: function (__s74param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ContainerBuilderMapobjectVO.ContainerBuilderMapobjectVO.prototype, "canBeTraded").set.call(this, __s74param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMapobjectVO.prototype, "canBeVisited", {
    get: function () {
      return true;
    },
    set: function (__s78param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ContainerBuilderMapobjectVO.ContainerBuilderMapobjectVO.prototype, "canBeVisited").set.call(this, __s78param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMapobjectVO.prototype, "canBeSpied", {
    get: function () {
      return !this.isOwnMapobject;
    },
    set: function (__s82param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ContainerBuilderMapobjectVO.ContainerBuilderMapobjectVO.prototype, "canBeSpied").set.call(this, __s82param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMapobjectVO.prototype, "canBeSabotaged", {
    get: function () {
      return !this.isOwnMapobject && this._ownerInfo != null && this._ownerInfo.playerLevel >= __dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_SABOTAGE && !__dep_export_ABGHelper.ABGHelper.isOnABGServer;
    },
    set: function (__s86param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ContainerBuilderMapobjectVO.ContainerBuilderMapobjectVO.prototype, "canBeSabotaged").set.call(this, __s86param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMapobjectVO.prototype, "hasOtherPlayerInfo", {
    get: function () {
      return !this.isOwnMapobject;
    },
    set: function (__s90param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ContainerBuilderMapobjectVO.ContainerBuilderMapobjectVO.prototype, "hasOtherPlayerInfo").set.call(this, __s90param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMapobjectVO.prototype, "isUseAbleForRelocation", {
    get: function () {
      return (!this.ownerInfo && !this.isOccupied || !!this.ownerInfo && this.ownerInfo.isRuin) && __dep_export_CastleModel.CastleModel.worldmapData.isSectorPopulated(this._absAreaPosX, this._absAreaPosY);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMapobjectVO.prototype, "hasNameLabel", {
    get: function () {
      return true;
    },
    set: function (__s96param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ContainerBuilderMapobjectVO.ContainerBuilderMapobjectVO.prototype, "hasNameLabel").set.call(this, __s96param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMapobjectVO.prototype, "attackType", {
    get: function () {
      return __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_ATTACK;
    },
    set: function (__s100param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ContainerBuilderMapobjectVO.ContainerBuilderMapobjectVO.prototype, "attackType").set.call(this, __s100param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMapobjectVO.prototype, "isABGTowerAttackable", {
    get: function () {
      return this._isABGTowerAttackable;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMapobjectVO.prototype, "abgPlayerTowerPoints", {
    get: function () {
      return this._abgPlayerTowerPoints;
    },
    enumerable: true,
    configurable: true
  });
  CastleMapobjectVO.prototype.getMinConnectionsAsABGTowerConnection = function () {
    return this._customConnections;
  };
  Object.defineProperty(CastleMapobjectVO.prototype, "canChangeDefenceOnWorldmap", {
    get: function () {
      return this.isOwnMapobject;
    },
    enumerable: true,
    configurable: true
  });
  CastleMapobjectVO.CASTLE_PART_MOAT = "Castlepart_Moat_";
  CastleMapobjectVO.MAPOBJECT_RUIN = "Ruin_Mapobject";
  CastleMapobjectVO.FILE_NAME_FLAG_SPECIAL = "_Special_";
  return CastleMapobjectVO;
}(__dep_export_ContainerBuilderMapobjectVO.ContainerBuilderMapobjectVO);
exports.CastleMapobjectVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IDetailViewAble", "IWorldmapObjectVO");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleTitleSystemHelper = require("gge-module:export_CastleTitleSystemHelper");
var __dep_export_WorldmapObjectIconHelper = require("gge-module:export_WorldmapObjectIconHelper");
var __dep_export_CastleDisplayObjectClipContainer = require("gge-module:export_CastleDisplayObjectClipContainer");
var __dep_export_renderScheduler = require("gge-module:export_renderScheduler");
var __dep_export_CastleWorldmapConst = require("gge-module:export_CastleWorldmapConst");
var __dep_export_TempServerHelper = require("gge-module:export_TempServerHelper");
var __dep_export_WorldmapEasterEggHelper = require("gge-module:export_WorldmapEasterEggHelper");
