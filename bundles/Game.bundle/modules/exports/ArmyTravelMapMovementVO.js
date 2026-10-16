Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __dep_export_BasicMapmovementVO = require("gge-module:export_BasicMapmovementVO");
var __s0local0 = function (__s1param0) {
  function ArmyTravelMapMovementVO() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.name = ArmyTravelMapMovementVO.NAME;
    __s3local0.group = "Mapmovement";
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ArmyTravelMapMovementVO, __s1param0);
  ArmyTravelMapMovementVO.prototype.loadFromParamObject = function (__s5param0) {
    __s1param0.prototype.loadFromParamObject.call(this, __s5param0);
    this._inventory = new __dep_export_UnitInventoryDictionary.UnitInventoryDictionary();
    this._inventory.fillFromWodAmountArray(__s5param0.A);
    this._lootList = __dep_export_CollectableManager.CollectableManager.parser.s2cParamList.createList(__s5param0.G);
  };
  Object.defineProperty(ArmyTravelMapMovementVO.prototype, "hasArrived", {
    get: function () {
      return this.movementProgress == 1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ArmyTravelMapMovementVO.prototype, "isStationed", {
    get: function () {
      return false;
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicMapmovementVO.BasicMapmovementVO.prototype, "isStationed").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ArmyTravelMapMovementVO.prototype, "armySize", {
    get: function () {
      return this._inventory.getUnitCount(null);
    },
    enumerable: true,
    configurable: true
  });
  ArmyTravelMapMovementVO.prototype.getArmySizeLevel = function () {
    var __s15local0 = this._inventory.getSoldierCount();
    if (__s15local0 > 0) {
      if (__s15local0 < __dep_export_ClientConstCastle.ClientConstCastle.SMALL_ARMY_LIMIT) {
        return 1;
      }
      if (__s15local0 >= __dep_export_ClientConstCastle.ClientConstCastle.SMALL_ARMY_LIMIT && __s15local0 < __dep_export_ClientConstCastle.ClientConstCastle.BIG_ARMY_LIMIT) {
        return 2;
      }
      if (__s15local0 >= __dep_export_ClientConstCastle.ClientConstCastle.BIG_ARMY_LIMIT) {
        return 3;
      }
    }
    return 1;
  };
  Object.defineProperty(ArmyTravelMapMovementVO.prototype, "needGeneral", {
    get: function () {
      return this.isMyMovement;
    },
    set: function (__s23param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicMapmovementVO.BasicMapmovementVO.prototype, "needGeneral").set.call(this, __s23param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ArmyTravelMapMovementVO.prototype, "isAccurateInfo", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ArmyTravelMapMovementVO.prototype, "inventory", {
    get: function () {
      return this._inventory;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ArmyTravelMapMovementVO.prototype, "canBeRetreated", {
    get: function () {
      if (!this.isMyMovement) {
        return false;
      }
      switch (this._direction) {
        case __dep_export_BasicMapmovementVO.BasicMapmovementVO.TRAVELSTATE_MOVING_TO_TARGET:
          return this.sourceArea.ownerInfo.isOwnOwnerInfo && this.isSourceAreaStillMine;
        case __dep_export_BasicMapmovementVO.BasicMapmovementVO.TRAVELSTATE_RETURN_HOME:
          return this.advisorType > 0 && !this.advisorIsLastAttack;
        default:
          return false;
      }
    },
    set: function (__s33param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicMapmovementVO.BasicMapmovementVO.prototype, "canBeRetreated").set.call(this, __s33param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ArmyTravelMapMovementVO.prototype, "lootList", {
    get: function () {
      return this._lootList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ArmyTravelMapMovementVO.prototype, "foodSupply", {
    get: function () {
      var __s37local0 = 0;
      for (var __s37local1 = 0, __s37local2 = this._inventory.getSoldiers(); __s37local1 < __s37local2.length; __s37local1++) {
        var __s37local3 = __s37local2[__s37local1];
        __s37local0 += __dep_exact_f855840627e6e145.int(__s37local3.foodSupply * __s37local3.inventoryAmount);
      }
      return __s37local0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ArmyTravelMapMovementVO.prototype, "meadSupply", {
    get: function () {
      var __s41local0 = 0;
      for (var __s41local1 = 0, __s41local2 = this._inventory.getSoldiers(); __s41local1 < __s41local2.length; __s41local1++) {
        var __s41local3 = __s41local2[__s41local1];
        __s41local0 += __dep_exact_f855840627e6e145.int(__s41local3.meadSupply * __s41local3.inventoryAmount);
      }
      return __s41local0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ArmyTravelMapMovementVO.prototype, "beefSupply", {
    get: function () {
      var __s45local0 = 0;
      for (var __s45local1 = 0, __s45local2 = this._inventory.getSoldiers(); __s45local1 < __s45local2.length; __s45local1++) {
        var __s45local3 = __s45local2[__s45local1];
        __s45local0 += __dep_exact_f855840627e6e145.int(__s45local3.beefSupply * __s45local3.inventoryAmount);
      }
      return __s45local0;
    },
    enumerable: true,
    configurable: true
  });
  ArmyTravelMapMovementVO.prototype.isSubscriptionBuffed = function () {
    return this.targetOwnerID == __dep_export_CastleModel.CastleModel.userData.playerID && this.sourceOwnerID != __dep_export_CastleModel.CastleModel.userData.playerID && __dep_export_CastleModel.CastleModel.subscriptionData.getEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_RETURN_TRAVEL_BOOST, this.targetArea.areaType, this.targetArea.kingdomID) > 0;
  };
  Object.defineProperty(ArmyTravelMapMovementVO.prototype, "autoSkipCooldownType", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  ArmyTravelMapMovementVO.__initialize_static_members = function () {
    ArmyTravelMapMovementVO.NAME = "Armytravel";
  };
  return ArmyTravelMapMovementVO;
}(__dep_export_BasicMapmovementVO.BasicMapmovementVO);
exports.ArmyTravelMapMovementVO = __s0local0;
var __dep_export_CollectableManager = require("gge-module:export_CollectableManager");
var __dep_export_UnitInventoryDictionary = require("gge-module:export_UnitInventoryDictionary");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IMapMovementVO", "IArmyMapmovementVO");
__s0local0.__initialize_static_members();
