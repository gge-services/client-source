Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __dep_export_ArmyTravelMapMovementVO = require("gge-module:export_ArmyTravelMapMovementVO");
var __s0local0 = function (__s1param0) {
  function SupportDefenceMapmovementVO() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.name = SupportDefenceMapmovementVO.NAME;
    __s3local0.group = "Mapmovement";
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SupportDefenceMapmovementVO, __s1param0);
  Object.defineProperty(SupportDefenceMapmovementVO.prototype, "needGeneral", {
    get: function () {
      return this.isMyMovement;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ArmyTravelMapMovementVO.ArmyTravelMapMovementVO.prototype, "needGeneral").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SupportDefenceMapmovementVO.prototype, "canBeSendHome", {
    get: function () {
      return this.movementProgress == 1 && this.isMyMovement;
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ArmyTravelMapMovementVO.ArmyTravelMapMovementVO.prototype, "canBeSendHome").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SupportDefenceMapmovementVO.prototype, "canBeRetreated", {
    get: function () {
      return this.isMyMovement;
    },
    set: function (__s15param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ArmyTravelMapMovementVO.ArmyTravelMapMovementVO.prototype, "canBeRetreated").set.call(this, __s15param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SupportDefenceMapmovementVO.prototype, "isStationed", {
    get: function () {
      return this.hasArrived;
    },
    set: function (__s19param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ArmyTravelMapMovementVO.ArmyTravelMapMovementVO.prototype, "isStationed").set.call(this, __s19param0);
    },
    enumerable: true,
    configurable: true
  });
  SupportDefenceMapmovementVO.prototype.isSubscriptionBuffed = function () {
    return this.targetOwnerID != __dep_export_CastleModel.CastleModel.userData.playerID && this.sourceOwnerID == __dep_export_CastleModel.CastleModel.userData.playerID && __dep_export_CastleModel.CastleModel.subscriptionData.getEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_SUPPORT_SPEED_BONUS, this.targetArea.areaType, this.targetArea.kingdomID) > 0;
  };
  SupportDefenceMapmovementVO.__initialize_static_members = function () {
    SupportDefenceMapmovementVO.NAME = "SupportDefence";
  };
  return SupportDefenceMapmovementVO;
}(__dep_export_ArmyTravelMapMovementVO.ArmyTravelMapMovementVO);
exports.SupportDefenceMapmovementVO = __s0local0;
__s0local0.__initialize_static_members();
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IMapMovementVO", "IArmyMapmovementVO");
