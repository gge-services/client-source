Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_EventInstanceMapper = require("gge-module:export_EventInstanceMapper");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_VisualVOEvent = require("gge-module:export_VisualVOEvent");
var __dep_export_AInvasionEventMapObjectVO = require("gge-module:export_AInvasionEventMapObjectVO");
var __s0local0 = function (__s1param0) {
  function AAllianceInvasionCampMapObjectVO() {
    var __s3local0 = this;
    __s3local0.campID = 0;
    __s3local0._totalCooldownTime = 0;
    __s3local0._skipCosts = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AAllianceInvasionCampMapObjectVO, __s1param0);
  AAllianceInvasionCampMapObjectVO.prototype.parseAreaInfo = function (__s5param0) {
    this.areaType = __s5param0[0];
    this.absAreaPosX = __s5param0[1];
    this.absAreaPosY = __s5param0[2];
    if (__s5param0.length > 3) {
      this.parseData(__s5param0);
    } else {
      this._isVisibleOnMap = false;
    }
    this.dispatchEvent(__dep_export_EventInstanceMapper.EventInstanceMapper.getEvent(__dep_export_VisualVOEvent.VisualVOEvent, __dep_export_VisualVOEvent.VisualVOEvent.VALUEOBJECT_CHANGE));
  };
  AAllianceInvasionCampMapObjectVO.prototype.parseData = function (__s9param0) {
    this.attackCooldownEndTimestamp = __dep_export_CachedTimer.CachedTimer.getCachedTimer() + __s9param0[5] * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
    this.secondsSinceEspionage = __s9param0[3];
    this.campID = __dep_exact_f855840627e6e145.int(__s9param0[4]);
    this._totalCooldownTime = __dep_exact_f855840627e6e145.int(__s9param0[6]);
    this._skipCosts = __dep_exact_f855840627e6e145.int(__s9param0[7]);
    this._victoryCount = __s9param0[8];
    this._eventAutoScalingCampID = __dep_exact_f855840627e6e145.int(__s9param0[9]);
    this._baseWallBonus = __s9param0[10];
    this._baseGateBonus = __s9param0[11];
    this._baseMoatBonus = __s9param0[12];
    this._allianceInvasionCampNode = __dep_export_CastleModel.CastleModel.allianceInvasionCampData.getAllianceCamp(this.campID, this._eventAutoScalingCampID);
    this.spyInfoReceivingTime = __dep_export_CachedTimer.CachedTimer.getCachedTimer() * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC;
    this._dungeonLevel = this._allianceInvasionCampNode.level;
    this._isVisibleOnMap = true;
  };
  Object.defineProperty(AAllianceInvasionCampMapObjectVO.prototype, "minimumOwnerLevel", {
    get: function () {
      return this.dungeonLevel;
    },
    set: function (__s13param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AInvasionEventMapObjectVO.AInvasionEventMapObjectVO.prototype, "minimumOwnerLevel").set.call(this, __s13param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AAllianceInvasionCampMapObjectVO.prototype, "skipCooldownCostC2", {
    get: function () {
      var __s15local0 = this._skipCosts;
      var __s15local1 = __dep_exact_f855840627e6e145.int(this.totalCooldownTime);
      return __s15local0 * this.remainingCooldownTimeInSeconds / __s15local1;
    },
    set: function (__s17param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AInvasionEventMapObjectVO.AInvasionEventMapObjectVO.prototype, "skipCooldownCostC2").set.call(this, __s17param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AAllianceInvasionCampMapObjectVO.prototype, "baseGateBonus", {
    get: function () {
      return this._baseGateBonus;
    },
    set: function (__s21param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AInvasionEventMapObjectVO.AInvasionEventMapObjectVO.prototype, "baseGateBonus").set.call(this, __s21param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AAllianceInvasionCampMapObjectVO.prototype, "baseWallBonus", {
    get: function () {
      return this._baseWallBonus;
    },
    set: function (__s25param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AInvasionEventMapObjectVO.AInvasionEventMapObjectVO.prototype, "baseWallBonus").set.call(this, __s25param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AAllianceInvasionCampMapObjectVO.prototype, "totalCooldownTime", {
    get: function () {
      return this._totalCooldownTime;
    },
    set: function (__s29param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AInvasionEventMapObjectVO.AInvasionEventMapObjectVO.prototype, "totalCooldownTime").set.call(this, __s29param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AAllianceInvasionCampMapObjectVO.prototype, "baseMoatBonus", {
    get: function () {
      return this._baseMoatBonus;
    },
    set: function (__s33param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AInvasionEventMapObjectVO.AInvasionEventMapObjectVO.prototype, "baseMoatBonus").set.call(this, __s33param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AAllianceInvasionCampMapObjectVO.prototype, "dungeonLevel", {
    get: function () {
      return this.allianceInvasionCampNode.level;
    },
    set: function (__s37param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AInvasionEventMapObjectVO.AInvasionEventMapObjectVO.prototype, "dungeonLevel").set.call(this, __s37param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AAllianceInvasionCampMapObjectVO.prototype, "allianceInvasionCampNode", {
    get: function () {
      return this._allianceInvasionCampNode;
    },
    enumerable: true,
    configurable: true
  });
  return AAllianceInvasionCampMapObjectVO;
}(__dep_export_AInvasionEventMapObjectVO.AInvasionEventMapObjectVO);
exports.AAllianceInvasionCampMapObjectVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IDetailViewAble", "IWorldmapObjectVO", "IDungeonMapobjectVO");
