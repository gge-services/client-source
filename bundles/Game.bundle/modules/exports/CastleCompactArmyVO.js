Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __s0local0 = function () {
  function CastleCompactArmyVO() {}
  CastleCompactArmyVO.prototype.parseSimpleArmy = function (__s5param0) {
    this._itemsLeft = new __dep_export_UnitInventoryDictionary.UnitInventoryDictionary();
    this._itemsMiddle = new __dep_export_UnitInventoryDictionary.UnitInventoryDictionary();
    this._itemsRight = new __dep_export_UnitInventoryDictionary.UnitInventoryDictionary();
    this._itemsLeft.fillFromWodAmountArray(__s5param0.L);
    this._itemsMiddle.fillFromWodAmountArray(__s5param0.M);
    this._itemsRight.fillFromWodAmountArray(__s5param0.R);
  };
  CastleCompactArmyVO.prototype.parseSupportTools = function (__s7param0) {
    var __s7local0;
    this._itemsSupport = new __dep_export_UnitInventoryDictionary.UnitInventoryDictionary();
    __s7local0 = __s7param0.map(function (__s9param0) {
      return [__s9param0, 1];
    });
    this._itemsSupport.fillFromWodAmountArray(__s7local0);
  };
  CastleCompactArmyVO.prototype.parseYardWave = function (__s11param0) {
    if (__s11param0) {
      this._yardWave = new __dep_export_UnitInventoryDictionary.UnitInventoryDictionary();
      this._yardWave.fillFromWodAmountArray(__s11param0);
    }
  };
  Object.defineProperty(CastleCompactArmyVO.prototype, "yardWave", {
    get: function () {
      return this._yardWave;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCompactArmyVO.prototype, "itemsLeft", {
    get: function () {
      return this._itemsLeft;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCompactArmyVO.prototype, "itemsMiddle", {
    get: function () {
      return this._itemsMiddle;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCompactArmyVO.prototype, "itemsRight", {
    get: function () {
      return this._itemsRight;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCompactArmyVO.prototype, "itemsSupport", {
    get: function () {
      return this._itemsSupport;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCompactArmyVO.prototype, "unitAmount", {
    get: function () {
      var __s24local0 = this._itemsLeft.getSoldierCount();
      __s24local0 += this._itemsMiddle.getSoldierCount();
      return __s24local0 += this._itemsRight.getSoldierCount();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCompactArmyVO.prototype, "meleeUnitAmount", {
    get: function () {
      var __s26local0 = __dep_exact_f855840627e6e145.int(this._itemsLeft.getUnitCountByUnitType(__dep_export_ClientConstCastle.ClientConstCastle.UNIT_TYPE_SOLDIER_MELEE, true, true));
      __s26local0 += __dep_exact_f855840627e6e145.int(this._itemsMiddle.getUnitCountByUnitType(__dep_export_ClientConstCastle.ClientConstCastle.UNIT_TYPE_SOLDIER_MELEE, true, true));
      return __s26local0 += __dep_exact_f855840627e6e145.int(this._itemsRight.getUnitCountByUnitType(__dep_export_ClientConstCastle.ClientConstCastle.UNIT_TYPE_SOLDIER_MELEE, true, true));
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCompactArmyVO.prototype, "rangedUnitAmount", {
    get: function () {
      var __s28local0 = __dep_exact_f855840627e6e145.int(this._itemsLeft.getUnitCountByUnitType(__dep_export_ClientConstCastle.ClientConstCastle.UNIT_TYPE_SOLDIER_RANGE, true, true));
      __s28local0 += __dep_exact_f855840627e6e145.int(this._itemsMiddle.getUnitCountByUnitType(__dep_export_ClientConstCastle.ClientConstCastle.UNIT_TYPE_SOLDIER_RANGE, true, true));
      return __s28local0 += __dep_exact_f855840627e6e145.int(this._itemsRight.getUnitCountByUnitType(__dep_export_ClientConstCastle.ClientConstCastle.UNIT_TYPE_SOLDIER_RANGE, true, true));
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCompactArmyVO.prototype, "toolAmount", {
    get: function () {
      var __s30local0 = this._itemsLeft.getToolCount();
      __s30local0 += this._itemsMiddle.getToolCount();
      __s30local0 += this._itemsRight.getToolCount();
      return __s30local0 += this._itemsSupport ? this._itemsSupport.getToolCount() : 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCompactArmyVO.prototype, "foodSupply", {
    get: function () {
      var __s32local0 = 0;
      for (var __s32local1 = 0, __s32local2 = this.itemsMiddle.getSoldiers(); __s32local1 < __s32local2.length; __s32local1++) {
        var __s32local3 = __s32local2[__s32local1];
        __s32local0 += __dep_exact_f855840627e6e145.int(__s32local3.foodSupply * __s32local3.inventoryAmount);
      }
      for (var __s32local4 = 0, __s32local5 = this.itemsLeft.getSoldiers(); __s32local4 < __s32local5.length; __s32local4++) {
        var __s32local6 = __s32local5[__s32local4];
        __s32local0 += __dep_exact_f855840627e6e145.int(__s32local6.foodSupply * __s32local6.inventoryAmount);
      }
      for (var __s32local7 = 0, __s32local8 = this.itemsRight.getSoldiers(); __s32local7 < __s32local8.length; __s32local7++) {
        var __s32local9 = __s32local8[__s32local7];
        __s32local0 += __dep_exact_f855840627e6e145.int(__s32local9.foodSupply * __s32local9.inventoryAmount);
      }
      return __s32local0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCompactArmyVO.prototype, "meadSupply", {
    get: function () {
      var __s40local0 = 0;
      for (var __s40local1 = 0, __s40local2 = this.itemsMiddle.getSoldiers(); __s40local1 < __s40local2.length; __s40local1++) {
        var __s40local3 = __s40local2[__s40local1];
        __s40local0 += __dep_exact_f855840627e6e145.int(__s40local3.meadSupply * __s40local3.inventoryAmount);
      }
      for (var __s40local4 = 0, __s40local5 = this.itemsLeft.getSoldiers(); __s40local4 < __s40local5.length; __s40local4++) {
        var __s40local6 = __s40local5[__s40local4];
        __s40local0 += __dep_exact_f855840627e6e145.int(__s40local6.meadSupply * __s40local6.inventoryAmount);
      }
      for (var __s40local7 = 0, __s40local8 = this.itemsRight.getSoldiers(); __s40local7 < __s40local8.length; __s40local7++) {
        var __s40local9 = __s40local8[__s40local7];
        __s40local0 += __dep_exact_f855840627e6e145.int(__s40local9.meadSupply * __s40local9.inventoryAmount);
      }
      return __s40local0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCompactArmyVO.prototype, "beefSupply", {
    get: function () {
      var __s48local0 = 0;
      for (var __s48local1 = 0, __s48local2 = this.itemsMiddle.getSoldiers(); __s48local1 < __s48local2.length; __s48local1++) {
        var __s48local3 = __s48local2[__s48local1];
        __s48local0 += __dep_exact_f855840627e6e145.int(__s48local3.beefSupply * __s48local3.inventoryAmount);
      }
      for (var __s48local4 = 0, __s48local5 = this.itemsLeft.getSoldiers(); __s48local4 < __s48local5.length; __s48local4++) {
        var __s48local6 = __s48local5[__s48local4];
        __s48local0 += __dep_exact_f855840627e6e145.int(__s48local6.beefSupply * __s48local6.inventoryAmount);
      }
      for (var __s48local7 = 0, __s48local8 = this.itemsRight.getSoldiers(); __s48local7 < __s48local8.length; __s48local7++) {
        var __s48local9 = __s48local8[__s48local7];
        __s48local0 += __dep_exact_f855840627e6e145.int(__s48local9.beefSupply * __s48local9.inventoryAmount);
      }
      return __s48local0;
    },
    enumerable: true,
    configurable: true
  });
  return CastleCompactArmyVO;
}();
exports.CastleCompactArmyVO = __s0local0;
var __dep_export_UnitInventoryDictionary = require("gge-module:export_UnitInventoryDictionary");
