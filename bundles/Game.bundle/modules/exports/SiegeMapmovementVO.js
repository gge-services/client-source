Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_BasicMapmovementVO = require("gge-module:export_BasicMapmovementVO");
var __s0local0 = function (__s1param0) {
  function SiegeMapmovementVO() {
    var __s3local0 = this;
    __s3local0._isForceCancelable = false;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).name = SiegeMapmovementVO.NAME;
    __s3local0.group = "Mapmovement";
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SiegeMapmovementVO, __s1param0);
  SiegeMapmovementVO.prototype.loadFromParamObject = function (__s5param0) {
    __s1param0.prototype.loadFromParamObject.call(this, __s5param0);
    this.parseArmy(__s5param0.A);
    this._isForceCancelable = !!__s5param0.FC && Boolean(__s5param0.FC);
  };
  SiegeMapmovementVO.prototype.parseArmy = function (__s7param0) {
    this._inventory = new __dep_export_UnitInventoryDictionary.UnitInventoryDictionary();
    this._inventory.fillFromWodAmountArray(__s7param0);
  };
  Object.defineProperty(SiegeMapmovementVO.prototype, "needGeneral", {
    get: function () {
      return false;
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicMapmovementVO.BasicMapmovementVO.prototype, "needGeneral").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SiegeMapmovementVO.prototype, "canBeSendHome", {
    get: function () {
      return false;
    },
    set: function (__s15param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicMapmovementVO.BasicMapmovementVO.prototype, "canBeSendHome").set.call(this, __s15param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SiegeMapmovementVO.prototype, "canBeRetreated", {
    get: function () {
      return this.isMyMovement && !this.isReturnHome;
    },
    set: function (__s19param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicMapmovementVO.BasicMapmovementVO.prototype, "canBeRetreated").set.call(this, __s19param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SiegeMapmovementVO.prototype, "isAccurateInfo", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SiegeMapmovementVO.prototype, "inventory", {
    get: function () {
      return this._inventory;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SiegeMapmovementVO.prototype, "armySize", {
    get: function () {
      return this._inventory.getUnitCount(null);
    },
    enumerable: true,
    configurable: true
  });
  SiegeMapmovementVO.prototype.getArmySizeLevel = function () {
    var __s27local0 = this._inventory.getSoldierCount();
    if (__s27local0 > 0) {
      if (__s27local0 < __dep_export_ClientConstCastle.ClientConstCastle.SMALL_ARMY_LIMIT) {
        return 1;
      }
      if (__s27local0 > __dep_export_ClientConstCastle.ClientConstCastle.SMALL_ARMY_LIMIT && __s27local0 < __dep_export_ClientConstCastle.ClientConstCastle.BIG_ARMY_LIMIT) {
        return 2;
      }
      if (__s27local0 >= __dep_export_ClientConstCastle.ClientConstCastle.BIG_ARMY_LIMIT) {
        return 3;
      }
    }
    return 1;
  };
  Object.defineProperty(SiegeMapmovementVO.prototype, "tooLateToBeRetreated", {
    get: function () {
      return false;
    },
    set: function (__s35param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicMapmovementVO.BasicMapmovementVO.prototype, "tooLateToBeRetreated").set.call(this, __s35param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SiegeMapmovementVO.prototype, "isForceCancelable", {
    get: function () {
      return this._isForceCancelable;
    },
    set: function (__s39param0) {
      this._isForceCancelable = __s39param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SiegeMapmovementVO.prototype, "foodSupply", {
    get: function () {
      var __s41local0 = 0;
      for (var __s41local1 = 0, __s41local2 = this._inventory.getSoldiers(); __s41local1 < __s41local2.length; __s41local1++) {
        var __s41local3 = __s41local2[__s41local1];
        __s41local0 += __dep_exact_f855840627e6e145.int(__s41local3.foodSupply * __s41local3.inventoryAmount);
      }
      return __s41local0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SiegeMapmovementVO.prototype, "meadSupply", {
    get: function () {
      var __s45local0 = 0;
      for (var __s45local1 = 0, __s45local2 = this._inventory.getSoldiers(); __s45local1 < __s45local2.length; __s45local1++) {
        var __s45local3 = __s45local2[__s45local1];
        __s45local0 += __dep_exact_f855840627e6e145.int(__s45local3.meadSupply * __s45local3.inventoryAmount);
      }
      return __s45local0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SiegeMapmovementVO.prototype, "beefSupply", {
    get: function () {
      var __s49local0 = 0;
      for (var __s49local1 = 0, __s49local2 = this._inventory.getSoldiers(); __s49local1 < __s49local2.length; __s49local1++) {
        var __s49local3 = __s49local2[__s49local1];
        __s49local0 += __dep_exact_f855840627e6e145.int(__s49local3.beefSupply * __s49local3.inventoryAmount);
      }
      return __s49local0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SiegeMapmovementVO.prototype, "autoSkipCooldownType", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  SiegeMapmovementVO.__initialize_static_members = function () {
    SiegeMapmovementVO.NAME = "Siege";
  };
  return SiegeMapmovementVO;
}(__dep_export_BasicMapmovementVO.BasicMapmovementVO);
exports.SiegeMapmovementVO = __s0local0;
var __dep_export_UnitInventoryDictionary = require("gge-module:export_UnitInventoryDictionary");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IMapMovementVO", "IArmyMapmovementVO");
__s0local0.__initialize_static_members();
