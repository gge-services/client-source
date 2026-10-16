Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstIsoChangeEventSkin = require("gge-module:export_ClientConstIsoChangeEventSkin");
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
  function CapitalMapobjectVO() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._objectsWithSpecialFlagsPosition = ["Capital_Mapobject_Special_BaronDucky", "Capital_Mapobject_Special_BaronCthulhu", "Capital_Mapobject_Special_WinterBaron", "Capital_Mapobject_Special_BaronCarnival"];
    __s3local0.name = "Capital";
    __s3local0.group = "Mapobject";
    __s3local0._isVisibleOnMap = false;
    __s3local0._secondsSinceEspionage = -1;
    __s3local0._areaType = __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_CAPITAL;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CapitalMapobjectVO, __s1param0);
  CapitalMapobjectVO.prototype.getBackgroundClip = function () {
    var __s5local0 = __dep_export_CastleModel.CastleModel.kingdomData.getKingdomVOByID(this.kingdomID);
    var __s5local1 = "CapitalBackground_" + (__s5local0 ? __s5local0.kingdomName : "Classic");
    return this.getAsExternalClip(__s5local1);
  };
  CapitalMapobjectVO.prototype.getEmptyCapitalContainer = function () {
    var __s7local0 = new __dep_export_CastleDisplayObjectClipContainer.CastleDisplayObjectClipContainer();
    if (__dep_export_ABGHelper.ABGHelper.isOnABGServer) {
      __s7local0.addItem(this.getAsExternalClip("Capital_Mapobject_EventSkin_" + __dep_export_ClientConstIsoChangeEventSkin.ClientConstIsoChangeEventSkin.getValidSkinSuffixForCurrentKingdom(true, false)));
    } else {
      __s7local0.addItem(this.getBackgroundClip());
      __s7local0.addItem(this.getAsExternalClip("Capital_Mapobject_Basic"));
    }
    return __s7local0;
  };
  CapitalMapobjectVO.prototype.getDisplayObjectClipContainer = function (__s11param0, __s11param1, __s11param2 = false) {
    if (!this.ownerInfo || this.ownerInfo && this.ownerInfo.isOutpostOwner) {
      return this.getEmptyCapitalContainer();
    } else {
      return this.getPlayerOwnedCapitalContainer(__s11param0);
    }
  };
  CapitalMapobjectVO.prototype.getPlayerOwnedCapitalContainer = function (__s15param0 = true) {
    var __s15local0;
    var __s15local1;
    var __s15local2 = new __dep_export_CastleDisplayObjectClipContainer.CastleDisplayObjectClipContainer();
    __s15local2.addItem(this.getBackgroundClip());
    if (__s15param0) {
      __s15local1 = this.getCapitalFlagClip(this.ownerInfo);
      __s15local2.addItem(__s15local1);
    }
    var __s15local3 = "Capital_Mapobject_EventSkin_" + __dep_export_ClientConstIsoChangeEventSkin.ClientConstIsoChangeEventSkin.getValidSkinSuffixForCurrentKingdom(true, false);
    var __s15local4 = this.equipmentUniqueIdSkin > 0 ? __dep_export_CastleModel.CastleModel.equipData.getEquipmentByUniqueID(this.equipmentUniqueIdSkin) : null;
    if (__dep_export_SpecialServerHelper.SpecialServerHelper.isOnSpecialServer && __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.isItemAssetVersioned(__s15local3)) {
      __s15local0 = this.getAsExternalClip(__s15local3);
      __s15local2.addItem(__s15local0);
    } else if (__s15local4 && __s15local4.hasSkinInfo()) {
      __s15local3 = "Capital_Mapobject_Special_" + __s15local4.skinAssetID;
      __s15local0 = this.getAsExternalClip(__s15local3);
      __s15local2.addItem(__s15local0);
    } else {
      __s15local0 = this.getAsExternalClip("Capital_Mapobject_Basic");
      __s15local2.addItem(__s15local0);
    }
    if (__s15local0 && __s15local1) {
      __dep_export_WorldmapObjectFlagHelper.WorldmapObjectFlagHelper.watchAndFix(__s15local0, __s15local1, this.shouldHandleInnerFlag(__s15local3));
    }
    return __s15local2;
  };
  CapitalMapobjectVO.prototype.shouldHandleInnerFlag = function (__s22param0) {
    return this._objectsWithSpecialFlagsPosition.indexOf(__s22param0) != -1;
  };
  CapitalMapobjectVO.prototype.getCapitalFlagClip = function (__s24param0) {
    return this.getFlagClip(__s24param0, "Castle");
  };
  CapitalMapobjectVO.prototype.parseAreaInfo = function (__s26param0) {
    this._areaType = __s26param0[0];
    this._absAreaPosX = __s26param0[1];
    this._absAreaPosY = __s26param0[2];
    this._objectId = __s26param0[3];
    var __s26local0 = __dep_exact_f855840627e6e145.int(__s26param0[4]);
    this._ownerInfo = __dep_export_CastleModel.CastleModel.otherPlayerData.getOwnerInfoVO(__s26local0);
    this._keepLevel = __s26param0[5];
    this._wallLevel = __s26param0[6];
    this._gateLevel = __s26param0[7];
    this._towerLevel = __s26param0[8];
    this._moatLevel = __s26param0[9];
    this.areaNameString = __s26param0[10];
    var __s26local1 = __dep_exact_f855840627e6e145.int(__s26param0[11]);
    this._attackCooldownEndTimestamp = __dep_export_CachedTimer.CachedTimer.getCachedTimer() + __s26local1 * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
    var __s26local2 = __dep_exact_f855840627e6e145.int(__s26param0[12]);
    this._sabotageCooldownEndTimestamp = __dep_export_CachedTimer.CachedTimer.getCachedTimer() + __s26local2 * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
    this._secondsSinceEspionage = __s26param0[13];
    this._spyInfoReceivingTime = __dep_export_CachedTimer.CachedTimer.getCachedTimer() * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC;
    this._occupierID = __s26param0[14];
    this._equipmentUniqueIdSkin = __s26param0[15];
    this._kingdomID = __s26param0[16];
    this._temporarySabotageProtection = __dep_exact_f855840627e6e145.int(__s26param0.length > 19 ? __s26param0[19] : 0) == 1;
    this.dispatchEvent(__dep_export_EventInstanceMapper.EventInstanceMapper.getEvent(__dep_export_VisualVOEvent.VisualVOEvent, __dep_export_VisualVOEvent.VisualVOEvent.VALUEOBJECT_CHANGE));
    this._isVisibleOnMap = true;
  };
  Object.defineProperty(CapitalMapobjectVO.prototype, "areaNameString", {
    get: function () {
      if (this._areaNameString == "" || this._areaNameString == null) {
        var __s28local0 = "";
        if (__dep_export_ABGHelper.ABGHelper.isOnABGServer) {
          __s28local0 = "_" + __dep_export_ClientConstIsoChangeEventSkin.ClientConstIsoChangeEventSkin.getValidSkinSuffixForCurrentKingdom(true, false);
        }
        return __dep_exact_92d05af59ee2ff30.Localize.text("capital" + __s28local0);
      }
      return this._areaNameString;
    },
    set: function (__s32param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobjectVO.InteractiveMapobjectVO.prototype, "areaNameString").set.call(this, __s32param0);
    },
    enumerable: true,
    configurable: true
  });
  CapitalMapobjectVO.prototype.canBeAttacked = function () {
    return !!this.ownerInfo && (!this.isOwnMapobject && !__dep_export_CastleModel.CastleModel.userData.isUserInMyAlliance(this.ownerInfo) && !this.isConqueredByAllianceMember && !this.isConqueredByMe && !this.isConqueredByRealAlliedAlliance || this.isOwnMapobject && this.isUnderConquerControl || !this.isOwnMapobject && __dep_export_CastleModel.CastleModel.userData.isUserInMyAlliance(this.ownerInfo) && this.isUnderConquerControl);
  };
  CapitalMapobjectVO.prototype.canBeAttackedButHasPeacemode = function () {
    return !!this.ownerInfo && !this.ownerInfo.isOutpostOwner && (!this.isOwnMapobject && !__dep_export_CastleModel.CastleModel.userData.isUserInMyAlliance(this.ownerInfo) && !this.isConqueredByAllianceMember && !this.isConqueredByMe && !this.isConqueredByRealAlliedAlliance || this.isOwnMapobject && this.isUnderConquerControl || !this.isOwnMapobject && __dep_export_CastleModel.CastleModel.userData.isUserInMyAlliance(this.ownerInfo) && this.isUnderConquerControl);
  };
  CapitalMapobjectVO.prototype.canBeAttackedAndConquered = function () {
    return !__dep_export_ABGHelper.ABGHelper.isOnABGServer && !this.isOwnMapobject && !__dep_export_CastleModel.CastleModel.userData.isUserInMyAlliance(this.ownerInfo) && !this.isConqueredByAllianceMember && !this.isConqueredByMe && !!this.ownerInfo && (!this.ownerInfo || !this.ownerInfo.isOutpostOwner) && !this.isConqueredByRealAlliedAlliance;
  };
  Object.defineProperty(CapitalMapobjectVO.prototype, "canBeSabotaged", {
    get: function () {
      return Object.getOwnPropertyDescriptor(__dep_export_OutpostMapobjectVO.OutpostMapobjectVO.prototype, "canBeSabotaged").get.call(this) && !__dep_export_PlayerHelper.PlayerHelper.isCapitalPlayer(this.ownerInfo.playerID);
    },
    set: function (__s42param0) {
      Object.getOwnPropertyDescriptor(__dep_export_OutpostMapobjectVO.OutpostMapobjectVO.prototype, "canBeSabotaged").set.call(this, __s42param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CapitalMapobjectVO.prototype, "ignoresPeaceMode", {
    get: function () {
      return true;
    },
    set: function (__s46param0) {
      Object.getOwnPropertyDescriptor(__dep_export_OutpostMapobjectVO.OutpostMapobjectVO.prototype, "ignoresPeaceMode").set.call(this, __s46param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CapitalMapobjectVO.prototype, "hasNameLabel", {
    get: function () {
      return true;
    },
    set: function (__s50param0) {
      Object.getOwnPropertyDescriptor(__dep_export_OutpostMapobjectVO.OutpostMapobjectVO.prototype, "hasNameLabel").set.call(this, __s50param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CapitalMapobjectVO.prototype, "minimumOwnerLevel", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.landmark.capitalLandmark.minDefenseLevel;
    },
    set: function (__s54param0) {
      Object.getOwnPropertyDescriptor(__dep_export_OutpostMapobjectVO.OutpostMapobjectVO.prototype, "minimumOwnerLevel").set.call(this, __s54param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CapitalMapobjectVO.prototype, "isNpcCapital", {
    get: function () {
      return __dep_export_PlayerHelper.PlayerHelper.isNPCPlayer(this._ownerInfo.playerID);
    },
    set: function (__s58param0) {
      Object.getOwnPropertyDescriptor(__dep_export_OutpostMapobjectVO.OutpostMapobjectVO.prototype, "isNpcCapital").set.call(this, __s58param0);
    },
    enumerable: true,
    configurable: true
  });
  return CapitalMapobjectVO;
}(__dep_export_OutpostMapobjectVO.OutpostMapobjectVO);
exports.CapitalMapobjectVO = __s0local0;
var __dep_export_InteractiveMapobjectVO = require("gge-module:export_InteractiveMapobjectVO");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IDetailViewAble", "IWorldmapObjectVO");
