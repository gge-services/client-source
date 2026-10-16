Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_EventInstanceMapper = require("gge-module:export_EventInstanceMapper");
var __dep_export_ABGHelper = require("gge-module:export_ABGHelper");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_SpecialServerHelper = require("gge-module:export_SpecialServerHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleDisplayObjectClipContainer = require("gge-module:export_CastleDisplayObjectClipContainer");
var __dep_export_PlayerHelper = require("gge-module:export_PlayerHelper");
var __dep_export_WorldmapObjectFlagHelper = require("gge-module:export_WorldmapObjectFlagHelper");
var __dep_export_VisualVOEvent = require("gge-module:export_VisualVOEvent");
var __dep_export_OutpostMapobjectVO = require("gge-module:export_OutpostMapobjectVO");
var __s0local0 = function (__s1param0) {
  function MetropolMapobjectVO() {
    var __s3local0 = this;
    __s3local0._objectsWithSpecialFlagsPosition = ["Metropol_Mapobject_Special_BaronDucky", "Metropol_Mapobject_Special_BaronCthulhu", "Metropol_Mapobject_Special_WinterBaron"];
    __s3local0._abgMineOutTime = 0;
    __s3local0._lastServerUpdate = 0;
    __s3local0.abgMaxInfluencePoints = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).name = "Metropol";
    __s3local0.group = "Mapobject";
    __s3local0._isVisibleOnMap = false;
    __s3local0._secondsSinceEspionage = -1;
    __s3local0._areaType = __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_METROPOL;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(MetropolMapobjectVO, __s1param0);
  MetropolMapobjectVO.prototype.getBackgroundClip = function () {
    var __s5local0 = "MetropolBackground_" + __dep_export_CastleModel.CastleModel.kingdomData.getKingdomVOByID(this.kingdomID).kingdomName;
    return this.getAsExternalClip(__s5local0);
  };
  MetropolMapobjectVO.prototype.getEmptyMetropolisContainer = function () {
    var __s7local0 = new __dep_export_CastleDisplayObjectClipContainer.CastleDisplayObjectClipContainer();
    var __s7local1 = "Metropol_Mapobject_EventSkin_" + __dep_export_SpecialServerHelper.SpecialServerHelper.skinName;
    if (__dep_export_SpecialServerHelper.SpecialServerHelper.useSkin && __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.isItemAssetVersioned(__s7local1)) {
      __s7local0.addItem(this.getAsExternalClip(__s7local1));
    } else {
      __s7local0.addItem(this.getBackgroundClip());
      __s7local0.addItem(this.getAsExternalClip("Metropol_Mapobject_Basic"));
    }
    return __s7local0;
  };
  MetropolMapobjectVO.prototype.getDisplayObjectClipContainer = function (__s11param0, __s11param1, __s11param2 = false) {
    if (!this.ownerInfo || this.ownerInfo && this.ownerInfo.isOutpostOwner) {
      return this.getEmptyMetropolisContainer();
    } else {
      return this.getPlayerOwnedMetropolisContainer(__s11param0);
    }
  };
  MetropolMapobjectVO.prototype.getPlayerOwnedMetropolisContainer = function (__s15param0 = true) {
    var __s15local0;
    var __s15local1;
    var __s15local2 = new __dep_export_CastleDisplayObjectClipContainer.CastleDisplayObjectClipContainer();
    __s15local2.addItem(this.getBackgroundClip());
    if (__s15param0) {
      __s15local0 = this.getMetropolFlagClip(this.ownerInfo);
      __s15local2.addItem(__s15local0);
    }
    var __s15local3 = this.equipmentUniqueIdSkin > 0 ? __dep_export_CastleModel.CastleModel.equipData.getEquipmentByUniqueID(this.equipmentUniqueIdSkin) : null;
    var __s15local4 = "Metropol_Mapobject_EventSkin_" + __dep_export_SpecialServerHelper.SpecialServerHelper.skinName;
    if (__dep_export_SpecialServerHelper.SpecialServerHelper.useSkin && __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.isItemAssetVersioned(__s15local4)) {
      __s15local1 = this.getAsExternalClip(__s15local4);
      __s15local2.addItem(__s15local1);
    } else if (__s15local3 && __s15local3.hasSkinInfo()) {
      __s15local4 = "Metropol_Mapobject_Special_" + __s15local3.skinAssetID;
      __s15local1 = this.getAsExternalClip(__s15local4);
      __s15local2.addItem(__s15local1);
    } else {
      __s15local1 = this.getAsExternalClip("Metropol_Mapobject_Basic");
      __s15local2.addItem(__s15local1);
    }
    if (__s15local1 && __s15local0) {
      __dep_export_WorldmapObjectFlagHelper.WorldmapObjectFlagHelper.watchAndFix(__s15local1, __s15local0, this.shouldHandleInnerFlag(__s15local4));
    }
    return __s15local2;
  };
  MetropolMapobjectVO.prototype.shouldHandleInnerFlag = function (__s22param0) {
    return this._objectsWithSpecialFlagsPosition.indexOf(__s22param0) != -1;
  };
  MetropolMapobjectVO.prototype.getMetropolFlagClip = function (__s24param0) {
    if (__dep_export_ABGHelper.ABGHelper.isOnABGServer) {
      return this.getFlagClip(__s24param0, "Castle");
    } else {
      return this.getFlagClip(__s24param0, "Metropol");
    }
  };
  MetropolMapobjectVO.prototype.parseAreaInfo = function (__s28param0) {
    this._areaType = __s28param0[0];
    this._absAreaPosX = __s28param0[1];
    this._absAreaPosY = __s28param0[2];
    this._objectId = __s28param0[3];
    var __s28local0 = __dep_exact_f855840627e6e145.int(__s28param0[4]);
    this._ownerInfo = __dep_export_CastleModel.CastleModel.otherPlayerData.getOwnerInfoVO(__s28local0);
    this._keepLevel = __s28param0[5];
    this._wallLevel = __s28param0[6];
    this._gateLevel = __s28param0[7];
    this._towerLevel = __s28param0[8];
    this._moatLevel = __s28param0[9];
    this.areaNameString = __s28param0[10];
    var __s28local1 = __dep_exact_f855840627e6e145.int(__s28param0[11]);
    this._attackCooldownEndTimestamp = __dep_export_CachedTimer.CachedTimer.getCachedTimer() + __s28local1 * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
    var __s28local2 = __dep_exact_f855840627e6e145.int(__s28param0[12]);
    this._sabotageCooldownEndTimestamp = __dep_export_CachedTimer.CachedTimer.getCachedTimer() + __s28local2 * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
    this._secondsSinceEspionage = __s28param0[13];
    this._spyInfoReceivingTime = __dep_export_CachedTimer.CachedTimer.getCachedTimer() * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC;
    this._occupierID = __s28param0[14];
    this._equipmentUniqueIdSkin = __s28param0[15];
    this._kingdomID = __s28param0[16];
    if (__s28param0.length > 17) {
      this._abgMineOutTime = __dep_exact_f855840627e6e145.int(__s28param0[17]);
      this._lastServerUpdate = __dep_export_CachedTimer.CachedTimer.getCachedTimer();
      this.abgMaxInfluencePoints = __dep_exact_f855840627e6e145.int(__s28param0[18]);
    }
    this._temporarySabotageProtection = __dep_exact_f855840627e6e145.int(__s28param0.length > 19 ? __s28param0[19] : 0) == 1;
    this.dispatchEvent(__dep_export_EventInstanceMapper.EventInstanceMapper.getEvent(__dep_export_VisualVOEvent.VisualVOEvent, __dep_export_VisualVOEvent.VisualVOEvent.VALUEOBJECT_CHANGE));
    this._isVisibleOnMap = true;
  };
  Object.defineProperty(MetropolMapobjectVO.prototype, "abgMineOutRemainingSeconds", {
    get: function () {
      return Math.max(0, this._abgMineOutTime - (__dep_export_CachedTimer.CachedTimer.getCachedTimer() - this._lastServerUpdate) * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MetropolMapobjectVO.prototype, "areaNameString", {
    get: function () {
      if (this._areaNameString == "" || this._areaNameString == null) {
        return __dep_exact_92d05af59ee2ff30.Localize.text(__dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("metropol"));
      } else {
        return this._areaNameString;
      }
    },
    set: function (__s37param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobjectVO.InteractiveMapobjectVO.prototype, "areaNameString").set.call(this, __s37param0);
    },
    enumerable: true,
    configurable: true
  });
  MetropolMapobjectVO.prototype.canBeAttacked = function () {
    return !!this.ownerInfo && !this.ownerInfo.isOutpostOwner && (!this.isOwnMapobject && !__dep_export_CastleModel.CastleModel.userData.isUserInMyAlliance(this.ownerInfo) && !this.isConqueredByAllianceMember && !this.isConqueredByMe && __dep_export_CastleModel.CastleModel.allianceData.getStatusByAlliance(this.ownerInfo.allianceID) != __dep_exact_26a421b704832cff_1.AllianceConst.DIPLOMACY_REAL_ALLIED || this.isOwnMapobject && this.isUnderConquerControl || !this.isOwnMapobject && __dep_export_CastleModel.CastleModel.userData.isUserInMyAlliance(this.ownerInfo) && this.isUnderConquerControl);
  };
  MetropolMapobjectVO.prototype.canBeAttackedButHasPeacemode = function () {
    return !!this.ownerInfo && !this.ownerInfo.isOutpostOwner && (!this.isOwnMapobject && !__dep_export_CastleModel.CastleModel.userData.isUserInMyAlliance(this.ownerInfo) && !this.isConqueredByAllianceMember && !this.isConqueredByMe && __dep_export_CastleModel.CastleModel.allianceData.getStatusByAlliance(this.ownerInfo.allianceID) != __dep_exact_26a421b704832cff_1.AllianceConst.DIPLOMACY_REAL_ALLIED || this.isOwnMapobject && this.isUnderConquerControl || !this.isOwnMapobject && __dep_export_CastleModel.CastleModel.userData.isUserInMyAlliance(this.ownerInfo) && this.isUnderConquerControl);
  };
  MetropolMapobjectVO.prototype.canBeAttackedAndConquered = function () {
    return !this.isOwnMapobject && !__dep_export_CastleModel.CastleModel.userData.isUserInMyAlliance(this.ownerInfo) && !this.isConqueredByAllianceMember && !this.isConqueredByMe && !!this.ownerInfo && (!this.ownerInfo || !this.ownerInfo.isOutpostOwner) && (!this.ownerInfo || __dep_export_CastleModel.CastleModel.allianceData.getStatusByAlliance(this.ownerInfo.allianceID) != __dep_exact_26a421b704832cff_1.AllianceConst.DIPLOMACY_REAL_ALLIED);
  };
  Object.defineProperty(MetropolMapobjectVO.prototype, "canBeSabotaged", {
    get: function () {
      return Object.getOwnPropertyDescriptor(__dep_export_OutpostMapobjectVO.OutpostMapobjectVO.prototype, "canBeSabotaged").get.call(this) && !__dep_export_PlayerHelper.PlayerHelper.isMetropolPlayer(this.ownerInfo.playerID);
    },
    set: function (__s47param0) {
      Object.getOwnPropertyDescriptor(__dep_export_OutpostMapobjectVO.OutpostMapobjectVO.prototype, "canBeSabotaged").set.call(this, __s47param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MetropolMapobjectVO.prototype, "ignoresPeaceMode", {
    get: function () {
      return true;
    },
    set: function (__s51param0) {
      Object.getOwnPropertyDescriptor(__dep_export_OutpostMapobjectVO.OutpostMapobjectVO.prototype, "ignoresPeaceMode").set.call(this, __s51param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MetropolMapobjectVO.prototype, "hasNameLabel", {
    get: function () {
      return true;
    },
    set: function (__s55param0) {
      Object.getOwnPropertyDescriptor(__dep_export_OutpostMapobjectVO.OutpostMapobjectVO.prototype, "hasNameLabel").set.call(this, __s55param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MetropolMapobjectVO.prototype, "minimumOwnerLevel", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.landmark.metroLandmark.minDefenseLevel;
    },
    set: function (__s59param0) {
      Object.getOwnPropertyDescriptor(__dep_export_OutpostMapobjectVO.OutpostMapobjectVO.prototype, "minimumOwnerLevel").set.call(this, __s59param0);
    },
    enumerable: true,
    configurable: true
  });
  return MetropolMapobjectVO;
}(__dep_export_OutpostMapobjectVO.OutpostMapobjectVO);
exports.MetropolMapobjectVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IDetailViewAble", "IWorldmapObjectVO");
var __dep_export_InteractiveMapobjectVO = require("gge-module:export_InteractiveMapobjectVO");
