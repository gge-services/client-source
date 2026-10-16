Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_EventInstanceMapper = require("gge-module:export_EventInstanceMapper");
var __dep_export_AbstractMethodError = require("gge-module:export_AbstractMethodError");
var __dep_export_UnitInventoryEvent = require("gge-module:export_UnitInventoryEvent");
var __s0local0 = function (__s1param0) {
  function AUnitInventory() {
    var __s3local0 = __s1param0 !== null && __s1param0.apply(this, arguments) || this;
    __s3local0.blockEventDispatch = false;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AUnitInventory, __s1param0);
  Object.defineProperty(AUnitInventory.prototype, "units", {
    get: function () {
      throw new __dep_export_AbstractMethodError.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  AUnitInventory.prototype.addUnit = function (__s7param0, __s7param1) {
    throw new __dep_export_AbstractMethodError.AbstractMethodError();
  };
  AUnitInventory.prototype.clear = function () {
    throw new __dep_export_AbstractMethodError.AbstractMethodError();
  };
  AUnitInventory.prototype.dispatchChange = function () {
    this.dispatchEvent(__dep_export_EventInstanceMapper.EventInstanceMapper.getEvent(__dep_export_UnitInventoryEvent.UnitInventoryEvent, __dep_export_UnitInventoryEvent.UnitInventoryEvent.UPDATED));
  };
  AUnitInventory.prototype.addAll = function (__s13param0) {
    if (__s13param0) {
      this.blockEventDispatch = true;
      if (__s13param0 != null) {
        for (var __s13local0 = 0, __s13local1 = __s13param0; __s13local0 < __s13local1.length; __s13local0++) {
          var __s13local2 = __s13local1[__s13local0];
          if (__s13local2 !== undefined) {
            this.addUnit(__s13local2.wodId, __s13local2.inventoryAmount);
          }
        }
      }
      this.blockEventDispatch = false;
      this.dispatchChange();
    }
  };
  AUnitInventory.prototype.fillFromWodAmountArray = function (__s20param0) {
    if (__s20param0) {
      this.clear();
      if (__s20param0.length < 1) {
        this.dispatchChange();
      } else {
        this.blockEventDispatch = true;
        for (var __s20local0 = 0; __s20local0 < __s20param0.length; __s20local0++) {
          var __s20local1 = __s20param0[__s20local0];
          if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s20local1, "Array")) {
            var __s20local2 = __dep_exact_f855840627e6e145.int(__s20local1[0]);
            var __s20local3 = __dep_exact_f855840627e6e145.int(__s20local1[1]);
            this.addUnit(__s20local2, __s20local3);
          }
        }
        this.blockEventDispatch = false;
        this.dispatchChange();
      }
    }
  };
  AUnitInventory.prototype.getUnits = function (__s28param0) {
    var __s28local0 = [];
    if (this.units != null) {
      for (var __s28local1 = 0, __s28local2 = __dep_exact_81dacdf05bd32292.instanceOfClass(this.units, "Array") ? this.units : this.units.toArray(); __s28local1 < __s28local2.length; __s28local1++) {
        var __s28local3 = __s28local2[__s28local1];
        if (__s28local3 !== undefined) {
          if (!__s28param0 || !!__s28param0(__s28local3)) {
            __s28local0.push(__s28local3);
          }
        }
      }
    }
    return __s28local0;
  };
  AUnitInventory.prototype.getSoldiers = function () {
    return this.getUnits(this.byUnitCategory(__dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_SOLDIERS));
  };
  AUnitInventory.prototype.getTools = function () {
    return this.getUnits(this.byUnitCategory(__dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_TOOLS));
  };
  AUnitInventory.prototype.getUnitsByType = function (__s39param0) {
    return this.getUnits(this.byUnitType(__s39param0));
  };
  AUnitInventory.prototype.getEventUnits = function () {
    return this.getUnits(this.byName(__dep_export_ClientConstCastle.ClientConstCastle.NAME_EVENTUNIT));
  };
  AUnitInventory.prototype.getOffensiveSoldiers = function (__s43param0) {
    return this.getUnits(this.bySoldierFightType(__dep_export_ClientConstCastle.ClientConstCastle.SOLDIER_FIGHTTYPE_SOLDIERS_OFFENSIVE, __s43param0));
  };
  AUnitInventory.prototype.getDefensiveSoldiers = function (__s45param0) {
    return this.getUnits(this.bySoldierFightType(__dep_export_ClientConstCastle.ClientConstCastle.SOLDIER_FIGHTTYPE_SOLDIERS_DEFENSIVE, __s45param0));
  };
  AUnitInventory.prototype.getAsWodAmountArray = function () {
    var __s47local0 = [];
    if (this.units != null) {
      for (var __s47local1 = 0, __s47local2 = __dep_exact_81dacdf05bd32292.instanceOfClass(this.units, "Array") ? this.units : this.units.toArray(); __s47local1 < __s47local2.length; __s47local1++) {
        var __s47local3 = __s47local2[__s47local1];
        if (__s47local3 !== undefined && __s47local3) {
          __s47local0.push([__s47local3.wodId, __s47local3.inventoryAmount]);
        }
      }
    }
    return __s47local0;
  };
  AUnitInventory.prototype.getUnitCount = function (__s53param0) {
    var __s53local0 = 0;
    if (this.units != null) {
      for (var __s53local1 = 0, __s53local2 = __dep_exact_81dacdf05bd32292.instanceOfClass(this.units, "Array") ? this.units : this.units.toArray(); __s53local1 < __s53local2.length; __s53local1++) {
        var __s53local3 = __s53local2[__s53local1];
        if (__s53local3 !== undefined) {
          if (!__s53param0 || !!__s53param0(__s53local3)) {
            __s53local0 += __s53local3.inventoryAmount;
          }
        }
      }
    }
    return __s53local0;
  };
  AUnitInventory.prototype.getUnitCountByUnitType = function (__s60param0, __s60param1 = true, __s60param2 = true) {
    return __dep_exact_f855840627e6e145.int(this.getUnitCount(this.byUnitType(__s60param0, __s60param1, __s60param2)));
  };
  AUnitInventory.prototype.getToolCount = function () {
    return __dep_exact_f855840627e6e145.int(this.getUnitCount(this.byUnitCategory(__dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_TOOLS)));
  };
  AUnitInventory.prototype.getSoldierCount = function () {
    return __dep_exact_f855840627e6e145.int(this.getUnitCount(this.byUnitCategory(__dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_SOLDIERS)));
  };
  AUnitInventory.prototype.getOffensiveSoldierCount = function (__s66param0) {
    return __dep_exact_f855840627e6e145.int(this.getUnitCount(this.bySoldierFightType(__dep_export_ClientConstCastle.ClientConstCastle.SOLDIER_FIGHTTYPE_SOLDIERS_OFFENSIVE, __s66param0)));
  };
  AUnitInventory.prototype.getDefensiveSoldierCount = function (__s68param0) {
    return __dep_exact_f855840627e6e145.int(this.getUnitCount(this.bySoldierFightType(__dep_export_ClientConstCastle.ClientConstCastle.SOLDIER_FIGHTTYPE_SOLDIERS_DEFENSIVE, __s68param0)));
  };
  AUnitInventory.prototype.byUnitType = function (__s70param0, __s70param1 = true, __s70param2 = true) {
    return function (__s72param0) {
      if (__s70param0 && __s70param0.indexOf("Mead") >= 0) {
        return __s72param0.unitType == __s70param0.replace("Mead", "") && __s72param0.meadSupply > 0;
      } else if (__s70param0 && __s70param0.indexOf("Beef") >= 0) {
        return __s72param0.unitType == __s70param0.replace("Beef", "") && __s72param0.beefSupply > 0;
      } else {
        return __s72param0.unitType == __s70param0 && (!!__s70param1 || __s72param0.meadSupply <= 0 || !!__s70param2 || __s72param0.beefSupply <= 0);
      }
    };
  };
  AUnitInventory.prototype.byUnitCategory = function (__s77param0) {
    return function (__s79param0) {
      return __s79param0.unitCategory == __s77param0;
    };
  };
  AUnitInventory.prototype.bySoldierFightType = function (__s81param0, __s81param1 = false) {
    return function (__s83param0) {
      var __s83local0 = __s83param0;
      if (!__dep_exact_81dacdf05bd32292.instanceOfClass(__s83local0, "SoldierUnitVO")) {
        return false;
      }
      var __s83local1 = __s83local0.isDefensive && __s81param0 == __dep_export_ClientConstCastle.ClientConstCastle.SOLDIER_FIGHTTYPE_SOLDIERS_DEFENSIVE || __s83local0.isOffensive && __s81param0 == __dep_export_ClientConstCastle.ClientConstCastle.SOLDIER_FIGHTTYPE_SOLDIERS_OFFENSIVE || __s83local0.isAllround;
      var __s83local2 = !__s81param1 || !__s83local0.isKamikaze;
      return __s83local1 && __s83local2;
    };
  };
  AUnitInventory.prototype.byName = function (__s86param0) {
    return function (__s88param0) {
      return __s88param0.name == __s86param0;
    };
  };
  return AUnitInventory;
}(require("gge-module:export_CastleEventDispatcher").CastleEventDispatcher);
exports.AUnitInventory = __s0local0;
