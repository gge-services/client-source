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
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_ClientConstXmlProperties = require("gge-module:export_ClientConstXmlProperties");
var __dep_export_EventInstanceMapper = require("gge-module:export_EventInstanceMapper");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleDisplayObjectClipContainer = require("gge-module:export_CastleDisplayObjectClipContainer");
var __dep_export_VisualVOEvent = require("gge-module:export_VisualVOEvent");
var __dep_export_AInvasionEventMapObjectVO = require("gge-module:export_AInvasionEventMapObjectVO");
var __dep_export_BasicMapobjectVO = require("gge-module:export_BasicMapobjectVO");
var __s0local0 = function (__s1param0) {
  function FactionInvasionCampMapObjectVO() {
    var __s3local0 = this;
    __s3local0.dungeonType = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).name = "FactionInvasionCamp";
    __s3local0.group = "MapObject";
    __s3local0.type = "-";
    __s3local0._areaType = __dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_FACTION_INVASION_CAMP;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(FactionInvasionCampMapObjectVO, __s1param0);
  FactionInvasionCampMapObjectVO.prototype.getDisplayObjectClipContainer = function (__s5param0, __s5param1, __s5param2 = false) {
    var __s5local0;
    var __s5local1 = new __dep_export_CastleDisplayObjectClipContainer.CastleDisplayObjectClipContainer();
    if (this.ownerInfo) {
      __s5local0 = this.campSize == __dep_export_ClientConstXmlProperties.ClientConstXmlProperties.INVASION_CAMP_SIZE_SMALL ? "FactionCamp_Mapobject_" + this.getFactionTag(this.ownerInfo.factionID) : this.campSize == __dep_export_ClientConstXmlProperties.ClientConstXmlProperties.INVASION_CAMP_SIZE_MEDIUM ? "FactionMyCamp_Mapobject_" + this.getFactionTag(this.ownerInfo.factionID) : "FactionMainCamp_Mapobject_" + this.getFactionTag(this.ownerInfo.factionID);
      __s5local1.addItem(this.getAsExternalClip(__s5local0, this.assetFileURL(__dep_export_WorldmapObjectIconHelper.WorldmapObjectIconHelper.FILE_NAME_FACTION_EVENT)));
      return __s5local1;
    } else {
      return __s5local1;
    }
  };
  FactionInvasionCampMapObjectVO.prototype.parseAreaInfo = function (__s9param0) {
    this.areaType = __s9param0[0];
    this.absAreaPosX = __s9param0[1];
    this.absAreaPosY = __s9param0[2];
    if (__s9param0.length > 3) {
      this.dungeonType = __dep_exact_f855840627e6e145.int(__s9param0[7]);
      this.attackCooldownEndTimestamp = __dep_export_CachedTimer.CachedTimer.getCachedTimer() + __s9param0[5] * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
      this.secondsSinceEspionage = __s9param0[3];
      this.victoryCount = __s9param0[4];
      this.spyInfoReceivingTime = __dep_export_CachedTimer.CachedTimer.getCachedTimer() * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC;
      this._ownerInfo = __dep_export_CastleModel.CastleModel.otherPlayerData.getOwnerInfoVO(this.dungeonType);
      this._dungeonLevel = this.victoryCount;
      this._isVisibleOnMap = true;
    } else {
      this._isVisibleOnMap = false;
    }
    this.dispatchEvent(__dep_export_EventInstanceMapper.EventInstanceMapper.getEvent(__dep_export_VisualVOEvent.VisualVOEvent, __dep_export_VisualVOEvent.VisualVOEvent.VALUEOBJECT_CHANGE));
  };
  Object.defineProperty(FactionInvasionCampMapObjectVO.prototype, "isVisibleOnMap", {
    get: function () {
      return !!__dep_export_CastleModel.CastleModel.specialEventData.isEventActive(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_FACTION_INVASION) && this._isVisibleOnMap;
    },
    set: function (__s15param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicMapobjectVO.BasicMapobjectVO.prototype, "isVisibleOnMap").set.call(this, __s15param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionInvasionCampMapObjectVO.prototype, "cooldownCanBeSkipped", {
    get: function () {
      return false;
    },
    set: function (__s19param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AInvasionEventMapObjectVO.AInvasionEventMapObjectVO.prototype, "cooldownCanBeSkipped").set.call(this, __s19param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionInvasionCampMapObjectVO.prototype, "skipCooldownCostC2", {
    get: function () {
      return 0;
    },
    set: function (__s23param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AInvasionEventMapObjectVO.AInvasionEventMapObjectVO.prototype, "skipCooldownCostC2").set.call(this, __s23param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionInvasionCampMapObjectVO.prototype, "campSize", {
    get: function () {
      if (__dep_export_CastleModel.CastleModel.factionInvasionCampData.getFactionInvasion(this.dungeonLevel, this._ownerInfo.factionID)) {
        return __dep_export_CastleModel.CastleModel.factionInvasionCampData.getFactionInvasion(this.dungeonLevel, this._ownerInfo.factionID).campSize;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionInvasionCampMapObjectVO.prototype, "baseGateBonus", {
    get: function () {
      var __s29local0 = __dep_export_CastleModel.CastleModel.factionInvasionCampData.getFactionInvasion(this.dungeonLevel, this._ownerInfo.factionID);
      if (__s29local0) {
        return __s29local0.gateBonus;
      } else {
        return 0;
      }
    },
    set: function (__s33param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AInvasionEventMapObjectVO.AInvasionEventMapObjectVO.prototype, "baseGateBonus").set.call(this, __s33param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionInvasionCampMapObjectVO.prototype, "baseWallBonus", {
    get: function () {
      var __s35local0 = __dep_export_CastleModel.CastleModel.factionInvasionCampData.getFactionInvasion(this.dungeonLevel, this._ownerInfo.factionID);
      if (__s35local0) {
        return __s35local0.wallBonus;
      } else {
        return 0;
      }
    },
    set: function (__s39param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AInvasionEventMapObjectVO.AInvasionEventMapObjectVO.prototype, "baseWallBonus").set.call(this, __s39param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionInvasionCampMapObjectVO.prototype, "totalCooldownTime", {
    get: function () {
      var __s41local0 = __dep_export_CastleModel.CastleModel.factionInvasionCampData.getFactionInvasion(this.dungeonLevel, this._ownerInfo.factionID);
      if (__s41local0) {
        return __s41local0.coolDown;
      } else {
        return 0;
      }
    },
    set: function (__s45param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AInvasionEventMapObjectVO.AInvasionEventMapObjectVO.prototype, "totalCooldownTime").set.call(this, __s45param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionInvasionCampMapObjectVO.prototype, "areaNameString", {
    get: function () {
      if (this.dungeonType == __dep_exact_26a421b704832cff.DungeonConst.BLUE_FACTION_KING) {
        return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_berimondInvasion_blueCamp");
      } else {
        return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_berimondInvasion_redCamp");
      }
    },
    set: function (__s51param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobjectVO.InteractiveMapobjectVO.prototype, "areaNameString").set.call(this, __s51param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionInvasionCampMapObjectVO.prototype, "baseMoatBonus", {
    get: function () {
      return 0;
    },
    set: function (__s55param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AInvasionEventMapObjectVO.AInvasionEventMapObjectVO.prototype, "baseMoatBonus").set.call(this, __s55param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionInvasionCampMapObjectVO.prototype, "dungeonLevel", {
    get: function () {
      if (this.factionInvasionEventVO == null) {
        return this.lastKnownBaseLevel + this.victoryCount;
      } else {
        this.lastKnownBaseLevel = this.baseCampLevel;
        return this.lastKnownBaseLevel + this.victoryCount;
      }
    },
    set: function (__s61param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AInvasionEventMapObjectVO.AInvasionEventMapObjectVO.prototype, "dungeonLevel").set.call(this, __s61param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionInvasionCampMapObjectVO.prototype, "factionInvasionEventVO", {
    get: function () {
      if (__dep_export_CastleModel.CastleModel.specialEventData.isEventActive(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_FACTION_INVASION)) {
        return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_FACTION_INVASION);
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionInvasionCampMapObjectVO.prototype, "eventType", {
    get: function () {
      return __dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_FACTION_INVASION;
    },
    set: function (__s69param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AInvasionEventMapObjectVO.AInvasionEventMapObjectVO.prototype, "eventType").set.call(this, __s69param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionInvasionCampMapObjectVO.prototype, "baseCampLevel", {
    get: function () {
      if (__dep_export_CastleModel.CastleModel.specialEventData.isEventActive(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_FACTION_INVASION)) {
        return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_FACTION_INVASION).baseCampLevel(this.dungeonType);
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionInvasionCampMapObjectVO.prototype, "minimumOwnerLevel", {
    get: function () {
      return this.dungeonLevel;
    },
    set: function (__s77param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AInvasionEventMapObjectVO.AInvasionEventMapObjectVO.prototype, "minimumOwnerLevel").set.call(this, __s77param0);
    },
    enumerable: true,
    configurable: true
  });
  FactionInvasionCampMapObjectVO.prototype.parseAreaInfoBattleLog = function (__s79param0) {
    this.dungeonType = __dep_exact_f855840627e6e145.int(__s79param0.DP);
    this._dungeonLevel = __s79param0.DL;
    this._victoryCount = 0;
    __s1param0.prototype.parseAreaInfoBattleLog.call(this, __s79param0);
  };
  return FactionInvasionCampMapObjectVO;
}(__dep_export_AInvasionEventMapObjectVO.AInvasionEventMapObjectVO);
exports.FactionInvasionCampMapObjectVO = __s0local0;
var __dep_export_WorldmapObjectIconHelper = require("gge-module:export_WorldmapObjectIconHelper");
var __dep_export_InteractiveMapobjectVO = require("gge-module:export_InteractiveMapobjectVO");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IDetailViewAble", "IWorldmapObjectVO", "IDungeonMapobjectVO");
