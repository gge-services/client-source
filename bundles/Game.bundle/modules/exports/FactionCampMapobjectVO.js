Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleDisplayObjectClipContainer = require("gge-module:export_CastleDisplayObjectClipContainer");
var __dep_export_UnitBaseLocationEnum = require("gge-module:export_UnitBaseLocationEnum");
var __dep_export_FactionInteractiveMapobjectVO = require("gge-module:export_FactionInteractiveMapobjectVO");
var __s0local0 = function (__s1param0) {
  function FactionCampMapobjectVO() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.name = "FactionCamp";
    __s3local0.group = "Mapobject";
    __s3local0._areaType = __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_FACTION_CAMP;
    __s3local0.isVisibleOnMap = false;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(FactionCampMapobjectVO, __s1param0);
  FactionCampMapobjectVO.prototype.getDisplayObjectClipContainer = function (__s5param0, __s5param1, __s5param2 = false) {
    var __s5local0;
    var __s5local1 = new __dep_export_CastleDisplayObjectClipContainer.CastleDisplayObjectClipContainer();
    if (!this.ownerInfo) {
      return __s5local1;
    }
    var __s5local2 = __dep_export_CastleModel.CastleModel.userData.castleList.getMainFactionCastle();
    __s5local0 = __s5local2 && __s5local2.objectId == this.objectId ? "FactionMainCamp_Mapobject_" + this.getFactionTag(this.ownerInfo.factionID) : this.isOwnMapobject ? "FactionMyCamp_Mapobject_" + this.getFactionTag(this.ownerInfo.factionID) : "FactionCamp_Mapobject_" + this.getFactionTag(this.ownerInfo.factionID);
    if (this.isDestroyed) {
      __s5local0 = "FactionCamp_Mapobject_" + this.getFactionTag(this.ownerInfo.factionID) + "_Destroyed";
    }
    __s5local1.addItem(this.getAsExternalClip(__s5local0, this.assetFileURL(__dep_export_WorldmapObjectIconHelper.WorldmapObjectIconHelper.FILE_NAME_FACTION_EVENT)));
    return __s5local1;
  };
  FactionCampMapobjectVO.prototype.parseAreaInfo = function (__s9param0) {
    if (__s9param0.length > 3) {
      this.isVisibleOnMap = true;
      var __s9local0 = __dep_exact_f855840627e6e145.int(__s9param0.length);
      this._isDestroyed = __s9param0[__s9local0 - 1] == 1;
      __s1param0.prototype.parseAreaInfo.call(this, __s9param0);
    } else {
      this._areaType = __s9param0[0];
      this._absAreaPosX = __s9param0[1];
      this._absAreaPosY = __s9param0[2];
      this._isVisibleOnMap = false;
    }
  };
  FactionCampMapobjectVO.prototype.canBeTroupsSended = function () {
    return this.isOwnMapobject && __dep_export_CastleModel.CastleModel.userData.castleList.listWithoutOcupiedOrDestroyedFactionCamps.length > 1 && !this.isDestroyed && !FactionCampMapobjectVO.factionEventVO.isSpectator;
  };
  FactionCampMapobjectVO.prototype.canBeSupported = function () {
    return !!this.ownerInfo && !this.isOwnMapobject && !this.isDestroyed && !FactionCampMapobjectVO.factionEventVO.isSpectator && this.ownerIsInMyFaction;
  };
  FactionCampMapobjectVO.prototype.canBeAttacked = function () {
    var __s17local0 = FactionCampMapobjectVO.factionEventVO;
    return !!this.ownerInfo && !!__s17local0 && !this.isOwnMapobject && !this.isDestroyed && !__s17local0.isSpectator && !this.ownerIsInMyFaction;
  };
  FactionCampMapobjectVO.prototype.canBeAttackedButHasPeacemode = function () {
    return !!this.ownerInfo && !this.ownerInfo.isOutpostOwner && !this.isOwnMapobject && !this.isDestroyed && !this.ownerIsInMyFaction;
  };
  Object.defineProperty(FactionCampMapobjectVO.prototype, "canBeTraded", {
    get: function () {
      return !FactionCampMapobjectVO.factionEventVO.isSpectator && (!this.isOwnMapobject || __dep_export_CastleModel.CastleModel.userData.castleList.listWithoutOcupiedOrDestroyedFactionCamps.length > 1);
    },
    set: function (__s23param0) {
      Object.getOwnPropertyDescriptor(__dep_export_FactionInteractiveMapobjectVO.FactionInteractiveMapobjectVO.prototype, "canBeTraded").set.call(this, __s23param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionCampMapobjectVO.prototype, "canBeVisited", {
    get: function () {
      return !this.isDestroyed;
    },
    set: function (__s27param0) {
      Object.getOwnPropertyDescriptor(__dep_export_FactionInteractiveMapobjectVO.FactionInteractiveMapobjectVO.prototype, "canBeVisited").set.call(this, __s27param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionCampMapobjectVO.prototype, "canBeSpied", {
    get: function () {
      return !this.isDestroyed && (!FactionCampMapobjectVO.factionEventVO || !FactionCampMapobjectVO.factionEventVO.isSpectator) && !this.isOwnMapobject;
    },
    set: function (__s31param0) {
      Object.getOwnPropertyDescriptor(__dep_export_FactionInteractiveMapobjectVO.FactionInteractiveMapobjectVO.prototype, "canBeSpied").set.call(this, __s31param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionCampMapobjectVO.prototype, "canBeSabotaged", {
    get: function () {
      return false;
    },
    set: function (__s35param0) {
      Object.getOwnPropertyDescriptor(__dep_export_FactionInteractiveMapobjectVO.FactionInteractiveMapobjectVO.prototype, "canBeSabotaged").set.call(this, __s35param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionCampMapobjectVO.prototype, "hasOtherPlayerInfo", {
    get: function () {
      return !!this.ownerInfo && !this.isOwnMapobject && !this.ownerInfo.isOutpostOwner;
    },
    set: function (__s39param0) {
      Object.getOwnPropertyDescriptor(__dep_export_FactionInteractiveMapobjectVO.FactionInteractiveMapobjectVO.prototype, "hasOtherPlayerInfo").set.call(this, __s39param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionCampMapobjectVO.prototype, "ownerIsInMyFaction", {
    get: function () {
      return !!this.ownerInfo && this.ownerInfo.factionID == FactionCampMapobjectVO.factionEventVO.ownFaction;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionCampMapobjectVO, "factionEventVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionCampMapobjectVO.prototype, "controllerWorldMapOwnerInfoVO", {
    get: function () {
      return this.ownerInfo;
    },
    set: function (__s47param0) {
      Object.getOwnPropertyDescriptor(__dep_export_FactionInteractiveMapobjectVO.FactionInteractiveMapobjectVO.prototype, "controllerWorldMapOwnerInfoVO").set.call(this, __s47param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionCampMapobjectVO.prototype, "baseGateBonus", {
    get: function () {
      if (this.gateLevel == 0) {
        return 0;
      } else {
        return __dep_export_CastleModel.CastleModel.wodData.voSubList(__dep_export_CastleWodData.CastleWodData.TYPE_BUILDING).get(__dep_export_ClientConstCastle.ClientConstCastle.FACTION_GATE_WOD_IDS[this.gateLevel - 1]).gateBonus;
      }
    },
    set: function (__s53param0) {
      Object.getOwnPropertyDescriptor(__dep_export_FactionInteractiveMapobjectVO.FactionInteractiveMapobjectVO.prototype, "baseGateBonus").set.call(this, __s53param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionCampMapobjectVO.prototype, "baseMoatBonus", {
    get: function () {
      if (this.moatLevel) {
        return __dep_export_CastleModel.CastleModel.wodData.voSubList(__dep_export_CastleWodData.CastleWodData.TYPE_BUILDING).get(__dep_export_ClientConstCastle.ClientConstCastle.FACTION_MOAT_WOD_IDS[this.moatLevel - 1]).moatBonus;
      } else {
        return 0;
      }
    },
    set: function (__s59param0) {
      Object.getOwnPropertyDescriptor(__dep_export_FactionInteractiveMapobjectVO.FactionInteractiveMapobjectVO.prototype, "baseMoatBonus").set.call(this, __s59param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionCampMapobjectVO.prototype, "baseWallBonus", {
    get: function () {
      if (this.wallLevel) {
        return __dep_export_CastleModel.CastleModel.wodData.voSubList(__dep_export_CastleWodData.CastleWodData.TYPE_BUILDING).get(__dep_export_ClientConstCastle.ClientConstCastle.FACTION_WALL_WOD_IDS[this.wallLevel - 1]).wallBonus;
      } else {
        return 0;
      }
    },
    set: function (__s65param0) {
      Object.getOwnPropertyDescriptor(__dep_export_FactionInteractiveMapobjectVO.FactionInteractiveMapobjectVO.prototype, "baseWallBonus").set.call(this, __s65param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionCampMapobjectVO.prototype, "unitBaseLocation", {
    get: function () {
      return __dep_export_UnitBaseLocationEnum.UnitBaseLocationEnum.HOME_CASTLE;
    },
    set: function (__s69param0) {
      Object.getOwnPropertyDescriptor(__dep_export_FactionInteractiveMapobjectVO.FactionInteractiveMapobjectVO.prototype, "unitBaseLocation").set.call(this, __s69param0);
    },
    enumerable: true,
    configurable: true
  });
  return FactionCampMapobjectVO;
}(__dep_export_FactionInteractiveMapobjectVO.FactionInteractiveMapobjectVO);
exports.FactionCampMapobjectVO = __s0local0;
var __dep_export_CastleWodData = require("gge-module:export_CastleWodData");
var __dep_export_WorldmapObjectIconHelper = require("gge-module:export_WorldmapObjectIconHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IDetailViewAble", "IWorldmapObjectVO");
