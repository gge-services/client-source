Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_EventInstanceMapper = require("gge-module:export_EventInstanceMapper");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __dep_export_CastleDisplayObjectClipContainer = require("gge-module:export_CastleDisplayObjectClipContainer");
var __dep_export_VisualVOEvent = require("gge-module:export_VisualVOEvent");
var __dep_export_AInvasionEventMapObjectVO = require("gge-module:export_AInvasionEventMapObjectVO");
var __dep_export_BasicMapobjectVO = require("gge-module:export_BasicMapobjectVO");
var __s0local0 = function (__s1param0) {
  function NomadCampMapObjectVO() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.name = "NomadCamp";
    __s3local0.type = "-";
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(NomadCampMapObjectVO, __s1param0);
  NomadCampMapObjectVO.prototype.getDisplayObjectClipContainer = function (__s5param0, __s5param1, __s5param2 = false) {
    var __s5local0 = new __dep_export_CastleDisplayObjectClipContainer.CastleDisplayObjectClipContainer();
    __s5local0.addItem(this.getAsExternalClip("Nomad_Mapobject"));
    return __s5local0;
  };
  NomadCampMapObjectVO.prototype.parseAreaInfo = function (__s7param0) {
    this.areaType = __s7param0[0];
    this.absAreaPosX = __s7param0[1];
    this.absAreaPosY = __s7param0[2];
    if (__s7param0.length > 3) {
      this.attackCooldownEndTimestamp = __dep_export_CachedTimer.CachedTimer.getCachedTimer() + __s7param0[5] * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
      this.secondsSinceEspionage = __s7param0[3];
      this.victoryCount = __s7param0[4];
      this._eventAutoScalingCampID = __s7param0[8];
      this._baseWallBonus = __s7param0[9];
      this._baseGateBonus = __s7param0[10];
      this._baseMoatBonus = __s7param0[11];
      this.spyInfoReceivingTime = __dep_export_CachedTimer.CachedTimer.getCachedTimer() * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC;
      this._ownerInfo = __dep_export_CastleModel.CastleModel.otherPlayerData.getOwnerInfoVO(__dep_exact_26a421b704832cff.DungeonConst.BASIC_NOMAD_CAMP_PLAYER_ID);
      this._dungeonLevel = this.victoryCount;
      this._isVisibleOnMap = true;
    } else {
      this._isVisibleOnMap = false;
    }
    this.dispatchEvent(__dep_export_EventInstanceMapper.EventInstanceMapper.getEvent(__dep_export_VisualVOEvent.VisualVOEvent, __dep_export_VisualVOEvent.VisualVOEvent.VALUEOBJECT_CHANGE));
  };
  Object.defineProperty(NomadCampMapObjectVO.prototype, "isVisibleOnMap", {
    get: function () {
      return !!NomadCampMapObjectVO.nomadEventVO && this._isVisibleOnMap;
    },
    set: function (__s13param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicMapobjectVO.BasicMapobjectVO.prototype, "isVisibleOnMap").set.call(this, __s13param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(NomadCampMapObjectVO.prototype, "cooldownCanBeSkipped", {
    get: function () {
      return true;
    },
    set: function (__s17param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AInvasionEventMapObjectVO.AInvasionEventMapObjectVO.prototype, "cooldownCanBeSkipped").set.call(this, __s17param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(NomadCampMapObjectVO.prototype, "skipCooldownCostC2", {
    get: function () {
      var __s19local0;
      __s19local0 = this._eventAutoScalingCampID > 0 ? __dep_export_CastleModel.CastleModel.eventDifficultyScaling.getCampByEventAutoScalingCampID(this._eventAutoScalingCampID).skipCost : __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.nomadCampData.getNomadCamp(this.dungeonLevel).skipCost);
      var __s19local1 = __dep_exact_f855840627e6e145.int(this.totalCooldownTime);
      return __s19local0 * this.remainingCooldownTimeInSeconds / __s19local1;
    },
    set: function (__s21param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AInvasionEventMapObjectVO.AInvasionEventMapObjectVO.prototype, "skipCooldownCostC2").set.call(this, __s21param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(NomadCampMapObjectVO.prototype, "baseGateBonus", {
    get: function () {
      return this._baseGateBonus;
    },
    set: function (__s25param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AInvasionEventMapObjectVO.AInvasionEventMapObjectVO.prototype, "baseGateBonus").set.call(this, __s25param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(NomadCampMapObjectVO.prototype, "baseWallBonus", {
    get: function () {
      return this._baseWallBonus;
    },
    set: function (__s29param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AInvasionEventMapObjectVO.AInvasionEventMapObjectVO.prototype, "baseWallBonus").set.call(this, __s29param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(NomadCampMapObjectVO.prototype, "baseMoatBonus", {
    get: function () {
      return this._baseMoatBonus;
    },
    set: function (__s33param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AInvasionEventMapObjectVO.AInvasionEventMapObjectVO.prototype, "baseMoatBonus").set.call(this, __s33param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(NomadCampMapObjectVO.prototype, "totalCooldownTime", {
    get: function () {
      var __s35local0;
      if ((__s35local0 = this._eventAutoScalingCampID > 0 ? __dep_export_CastleModel.CastleModel.eventDifficultyScaling.getCampByEventAutoScalingCampID(this._eventAutoScalingCampID).coolDown : __dep_export_CastleModel.CastleModel.nomadCampData.getNomadCamp(this.dungeonLevel).coolDown) > 0) {
        return __s35local0 * (1 - __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.subscriptionData.getEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_COOLDOWN_REDUCTION, this.areaType)) / 100);
      } else {
        return 0;
      }
    },
    set: function (__s39param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AInvasionEventMapObjectVO.AInvasionEventMapObjectVO.prototype, "totalCooldownTime").set.call(this, __s39param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(NomadCampMapObjectVO.prototype, "minimumOwnerLevel", {
    get: function () {
      return this.dungeonLevel;
    },
    set: function (__s43param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AInvasionEventMapObjectVO.AInvasionEventMapObjectVO.prototype, "minimumOwnerLevel").set.call(this, __s43param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(NomadCampMapObjectVO.prototype, "areaNameString", {
    get: function () {
      return __dep_exact_92d05af59ee2ff30.Localize.text("kingdom_nomad_castleName_" + this.kingdomID);
    },
    set: function (__s47param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobjectVO.InteractiveMapobjectVO.prototype, "areaNameString").set.call(this, __s47param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(NomadCampMapObjectVO.prototype, "dungeonLevel", {
    get: function () {
      if (this._eventAutoScalingCampID > 0) {
        return __dep_export_CastleModel.CastleModel.eventDifficultyScaling.getCampByEventAutoScalingCampID(this._eventAutoScalingCampID).level;
      } else {
        if (NomadCampMapObjectVO.nomadEventVO) {
          this.lastKnownBaseLevel = NomadCampMapObjectVO.nomadEventVO.baseCampLevel();
        }
        return this.lastKnownBaseLevel + this.victoryCount;
      }
    },
    set: function (__s54param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AInvasionEventMapObjectVO.AInvasionEventMapObjectVO.prototype, "dungeonLevel").set.call(this, __s54param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(NomadCampMapObjectVO, "nomadEventVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(NomadCampMapObjectVO.prototype, "eventType", {
    get: function () {
      return __dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE;
    },
    set: function (__s60param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AInvasionEventMapObjectVO.AInvasionEventMapObjectVO.prototype, "eventType").set.call(this, __s60param0);
    },
    enumerable: true,
    configurable: true
  });
  return NomadCampMapObjectVO;
}(__dep_export_AInvasionEventMapObjectVO.AInvasionEventMapObjectVO);
exports.NomadCampMapObjectVO = __s0local0;
var __dep_export_InteractiveMapobjectVO = require("gge-module:export_InteractiveMapobjectVO");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IDetailViewAble", "IWorldmapObjectVO", "IDungeonMapobjectVO");
