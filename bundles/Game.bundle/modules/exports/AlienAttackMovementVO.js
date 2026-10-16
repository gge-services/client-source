Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ArmyAttackMapmovementVO = require("gge-module:export_ArmyAttackMapmovementVO");
var __s0local0 = function (__s1param0) {
  function AlienAttackMovementVO() {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).name = AlienAttackMovementVO.NAME;
    __s3local0.group = "Mapmovement";
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AlienAttackMovementVO, __s1param0);
  AlienAttackMovementVO.prototype.loadFromParamObject = function (__s5param0) {
    __s1param0.prototype.loadFromParamObject.call(this, __s5param0);
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.sourceArea, "AAlienInvasionMapobjectVO")) {
      this.sourceArea.kingdomID = this.kingdomID;
    }
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.targetArea, "AAlienInvasionMapobjectVO")) {
      this.targetArea.kingdomID = this.kingdomID;
    }
  };
  Object.defineProperty(AlienAttackMovementVO.prototype, "tooLateToBeRetreated", {
    get: function () {
      return true;
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ArmyAttackMapmovementVO.ArmyAttackMapmovementVO.prototype, "tooLateToBeRetreated").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AlienAttackMovementVO.prototype, "isAttackingMovement", {
    get: function () {
      return this.targetOwnerID == __dep_export_CastleModel.CastleModel.userData.playerID;
    },
    set: function (__s15param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ArmyAttackMapmovementVO.ArmyAttackMapmovementVO.prototype, "isAttackingMovement").set.call(this, __s15param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AlienAttackMovementVO.prototype, "needGeneral", {
    get: function () {
      return false;
    },
    set: function (__s19param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ArmyAttackMapmovementVO.ArmyAttackMapmovementVO.prototype, "needGeneral").set.call(this, __s19param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AlienAttackMovementVO.prototype, "canBeRetreated", {
    get: function () {
      return false;
    },
    set: function (__s23param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ArmyAttackMapmovementVO.ArmyAttackMapmovementVO.prototype, "canBeRetreated").set.call(this, __s23param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AlienAttackMovementVO.prototype, "canBeSendHome", {
    get: function () {
      return false;
    },
    set: function (__s27param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ArmyAttackMapmovementVO.ArmyAttackMapmovementVO.prototype, "canBeSendHome").set.call(this, __s27param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AlienAttackMovementVO.prototype, "distance", {
    get: function () {
      return __dep_exact_26a421b704832cff.TravelConst.ALIEN_TRAVEL_DISTANCE;
    },
    set: function (__s31param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ArmyAttackMapmovementVO.ArmyAttackMapmovementVO.prototype, "distance").set.call(this, __s31param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AlienAttackMovementVO.prototype, "isNPCMovement", {
    get: function () {
      return false;
    },
    set: function (__s35param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ArmyAttackMapmovementVO.ArmyAttackMapmovementVO.prototype, "isNPCMovement").set.call(this, __s35param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AlienAttackMovementVO.prototype, "showAsAllianceAttackWarning", {
    get: function () {
      return true;
    },
    set: function (__s39param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ArmyAttackMapmovementVO.ArmyAttackMapmovementVO.prototype, "showAsAllianceAttackWarning").set.call(this, __s39param0);
    },
    enumerable: true,
    configurable: true
  });
  AlienAttackMovementVO.__initialize_static_members = function () {
    AlienAttackMovementVO.NAME = "AlienAttack";
  };
  return AlienAttackMovementVO;
}(__dep_export_ArmyAttackMapmovementVO.ArmyAttackMapmovementVO);
exports.AlienAttackMovementVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IMapMovementVO", "IArmyMapmovementVO");
__s0local0.__initialize_static_members();
