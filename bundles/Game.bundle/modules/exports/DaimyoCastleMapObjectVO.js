Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstNPCs = require("gge-module:export_ClientConstNPCs");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_EventInstanceMapper = require("gge-module:export_EventInstanceMapper");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_VisualVOEvent = require("gge-module:export_VisualVOEvent");
var __dep_export_AInvasionEventMapObjectVO = require("gge-module:export_AInvasionEventMapObjectVO");
var __dep_export_BasicMapobjectVO = require("gge-module:export_BasicMapobjectVO");
var __s0local0 = function (__s1param0) {
  function DaimyoCastleMapObjectVO() {
    var __s3local0 = this;
    __s3local0._totalCooldownTime = 0;
    __s3local0._skipCosts = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).name = "DaimyoCastle";
    __s3local0.type = "-";
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(DaimyoCastleMapObjectVO, __s1param0);
  DaimyoCastleMapObjectVO.prototype.getDisplayObjectClipContainer = function (__s5param0, __s5param1, __s5param2 = false) {
    var __s5local0 = new __dep_export_CastleDisplayObjectClipContainer.CastleDisplayObjectClipContainer();
    var __s5local1 = "DaimyoCastle_Mapobject_Rank" + this._daimyoXmlVO.rank;
    __s5local0.addItem(this.getAsExternalClip(__s5local1));
    return __s5local0;
  };
  DaimyoCastleMapObjectVO.prototype.parseAreaInfo = function (__s7param0) {
    this.areaType = __s7param0[0];
    this.absAreaPosX = __s7param0[1];
    this.absAreaPosY = __s7param0[2];
    if (__s7param0.length > 3) {
      this.secondsSinceEspionage = __s7param0[3];
      this.attackCooldownEndTimestamp = __dep_export_CachedTimer.CachedTimer.getCachedTimer() + __s7param0[5] * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
      this._totalCooldownTime = __dep_exact_f855840627e6e145.int(__s7param0[6]);
      this._skipCosts = __dep_exact_f855840627e6e145.int(__s7param0[7]);
      this._eventAutoScalingCampID = __dep_exact_f855840627e6e145.int(__s7param0[8]);
      this.spyInfoReceivingTime = __dep_export_CachedTimer.CachedTimer.getCachedTimer() * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC;
      this._daimyoXmlVO = __dep_export_CastleModel.CastleModel.daimyoCastleXmlData.getDaimyoCastleByID(__s7param0[4], this._eventAutoScalingCampID);
      this._dungeonLevel = this._daimyoXmlVO.level;
      this._isVisibleOnMap = true;
      this._baseWallBonus = __s7param0[9];
      this._baseGateBonus = __s7param0[10];
      this._baseMoatBonus = __s7param0[11];
    } else {
      this._isVisibleOnMap = false;
    }
    this._ownerInfo = __dep_export_CastleModel.CastleModel.otherPlayerData.getOwnerInfoVO(__dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_DAIMYO_CASTLE);
    this.dispatchEvent(__dep_export_EventInstanceMapper.EventInstanceMapper.getEvent(__dep_export_VisualVOEvent.VisualVOEvent, __dep_export_VisualVOEvent.VisualVOEvent.VALUEOBJECT_CHANGE));
  };
  DaimyoCastleMapObjectVO.prototype.parseAreaInfoBattleLog = function (__s11param0) {
    __s1param0.prototype.parseAreaInfoBattleLog.call(this, __s11param0);
    if (__s11param0.DAR) {
      this._daimyoXmlVO = __dep_export_CastleModel.CastleModel.daimyoCastleXmlData.getDaimyoCastle(__s11param0.DAR, -1, __s11param0.DDCID);
      if (this._daimyoXmlVO) {
        this._dungeonLevel = this._daimyoXmlVO.level;
      }
    }
  };
  Object.defineProperty(DaimyoCastleMapObjectVO.prototype, "isVisibleOnMap", {
    get: function () {
      return !!__dep_export_CastleModel.CastleModel.specialEventData.isEventActive(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_SAMURAI_INVASION) && this._isVisibleOnMap;
    },
    set: function (__s17param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicMapobjectVO.BasicMapobjectVO.prototype, "isVisibleOnMap").set.call(this, __s17param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DaimyoCastleMapObjectVO.prototype, "cooldownCanBeSkipped", {
    get: function () {
      return true;
    },
    set: function (__s21param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AInvasionEventMapObjectVO.AInvasionEventMapObjectVO.prototype, "cooldownCanBeSkipped").set.call(this, __s21param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DaimyoCastleMapObjectVO.prototype, "skipCooldownCostC2", {
    get: function () {
      var __s23local0 = this._skipCosts;
      var __s23local1 = __dep_exact_f855840627e6e145.int(this.totalCooldownTime);
      return __s23local0 * this.remainingCooldownTimeInSeconds / __s23local1;
    },
    set: function (__s25param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AInvasionEventMapObjectVO.AInvasionEventMapObjectVO.prototype, "skipCooldownCostC2").set.call(this, __s25param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DaimyoCastleMapObjectVO.prototype, "baseGateBonus", {
    get: function () {
      return this._baseGateBonus;
    },
    set: function (__s29param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AInvasionEventMapObjectVO.AInvasionEventMapObjectVO.prototype, "baseGateBonus").set.call(this, __s29param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DaimyoCastleMapObjectVO.prototype, "baseWallBonus", {
    get: function () {
      return this._baseWallBonus;
    },
    set: function (__s33param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AInvasionEventMapObjectVO.AInvasionEventMapObjectVO.prototype, "baseWallBonus").set.call(this, __s33param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DaimyoCastleMapObjectVO.prototype, "baseMoatBonus", {
    get: function () {
      return this._baseMoatBonus;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DaimyoCastleMapObjectVO.prototype, "totalCooldownTime", {
    get: function () {
      return this._totalCooldownTime;
    },
    set: function (__s39param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AInvasionEventMapObjectVO.AInvasionEventMapObjectVO.prototype, "totalCooldownTime").set.call(this, __s39param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DaimyoCastleMapObjectVO.prototype, "areaNameString", {
    get: function () {
      if (this.daimyoXmlVO) {
        return __dep_exact_92d05af59ee2ff30.Localize.text(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_DASH_SPLIT, [__dep_exact_92d05af59ee2ff30.Localize.text("DaimyoCastle"), __dep_exact_92d05af59ee2ff30.Localize.text("rank_value", [this.daimyoXmlVO.rank])]);
      } else {
        return __dep_exact_92d05af59ee2ff30.Localize.text("DaimyoCastle");
      }
    },
    set: function (__s45param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobjectVO.InteractiveMapobjectVO.prototype, "areaNameString").set.call(this, __s45param0);
    },
    enumerable: true,
    configurable: true
  });
  DaimyoCastleMapObjectVO.prototype.canBeSupported = function () {
    return __s1param0.prototype.canBeSupported.call(this);
  };
  DaimyoCastleMapObjectVO.prototype.eventAutoScalingCampID = function () {
    return this._eventAutoScalingCampID;
  };
  Object.defineProperty(DaimyoCastleMapObjectVO.prototype, "minimumOwnerLevel", {
    get: function () {
      return this.dungeonLevel;
    },
    set: function (__s53param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AInvasionEventMapObjectVO.AInvasionEventMapObjectVO.prototype, "minimumOwnerLevel").set.call(this, __s53param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DaimyoCastleMapObjectVO.prototype, "daimyoXmlVO", {
    get: function () {
      return this._daimyoXmlVO;
    },
    set: function (__s57param0) {
      this._daimyoXmlVO = __s57param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DaimyoCastleMapObjectVO.prototype, "eventType", {
    get: function () {
      return __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_SAMURAI_INVASION;
    },
    set: function (__s61param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AInvasionEventMapObjectVO.AInvasionEventMapObjectVO.prototype, "eventType").set.call(this, __s61param0);
    },
    enumerable: true,
    configurable: true
  });
  return DaimyoCastleMapObjectVO;
}(__dep_export_AInvasionEventMapObjectVO.AInvasionEventMapObjectVO);
exports.DaimyoCastleMapObjectVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IDetailViewAble", "IWorldmapObjectVO", "IDungeonMapobjectVO");
var __dep_export_InteractiveMapobjectVO = require("gge-module:export_InteractiveMapobjectVO");
var __dep_export_CastleDisplayObjectClipContainer = require("gge-module:export_CastleDisplayObjectClipContainer");
