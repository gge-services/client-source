Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_AUnitInventory = require("gge-module:export_AUnitInventory");
var __s0local0 = function (__s1param0) {
  function UnitInventoryDictionary() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._inventoryItems = new Map();
    __s3local0.blockEventDispatch = false;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(UnitInventoryDictionary, __s1param0);
  UnitInventoryDictionary.prototype.getUnit = function (__s5param0) {
    return this._inventoryItems.get(__s5param0);
  };
  UnitInventoryDictionary.prototype.onInventoryItemChanged = function (__s7param0) {};
  Object.defineProperty(UnitInventoryDictionary.prototype, "units", {
    get: function () {
      return this._inventoryItems;
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AUnitInventory.AUnitInventory.prototype, "units").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  UnitInventoryDictionary.prototype.getUnitCountByWodId = function (__s13param0) {
    return __dep_exact_f855840627e6e145.int(this._inventoryItems.get(__s13param0) ? this._inventoryItems.get(__s13param0).inventoryAmount : 0);
  };
  UnitInventoryDictionary.prototype.clear = function () {
    this._inventoryItems = new Map();
    this.blockEventDispatch = false;
  };
  UnitInventoryDictionary.prototype.changeUnitAmount = function (__s17param0, __s17param1) {
    var __s17local0 = __dep_exact_f855840627e6e145.int(this._inventoryItems.get(__s17param0) ? this._inventoryItems.get(__s17param0).inventoryAmount : 0);
    this.setUnit(__s17param0, __s17param1 + __s17local0);
  };
  UnitInventoryDictionary.prototype.addUnit = function (__s19param0, __s19param1) {
    this.changeUnitAmount(__s19param0, Math.max(0, __s19param1));
  };
  UnitInventoryDictionary.prototype.addUnitReference = function (__s21param0) {
    this._inventoryItems.set(__s21param0.wodId, __s21param0);
  };
  UnitInventoryDictionary.prototype.removeUnit = function (__s23param0) {
    if (__dep_exact_9e901e8e2483a22f_1.DictionaryUtil.containsKey(this._inventoryItems, __s23param0)) {
      this._inventoryItems.delete(__s23param0);
    }
  };
  UnitInventoryDictionary.prototype.setUnit = function (__s26param0, __s26param1 = 1) {
    if (__s26param1 <= 0) {
      this._inventoryItems.delete(__s26param0);
      if (!this.blockEventDispatch) {
        this.dispatchChange();
      }
      return;
    }
    if (!this._inventoryItems.get(__s26param0)) {
      var __s26local0 = __dep_export_CastleModel.CastleModel.wodData.createVObyWOD(__s26param0, __dep_export_CastleWodData.CastleWodData.TYPE_UNIT);
      if (!__dep_exact_81dacdf05bd32292.instanceOfClass(__s26local0, "BasicUnitVO")) {
        __dep_exact_9e901e8e2483a22f.warn("Tried to add an invalid unit (wodID: " + __s26param0 + ") to inventory");
        return;
      }
      this._inventoryItems.set(__s26param0, __s26local0);
    }
    this._inventoryItems.get(__s26param0).inventoryAmount = __s26param1;
    this.onInventoryItemChanged(__s26param0);
    if (!this.blockEventDispatch) {
      this.dispatchChange();
    }
  };
  UnitInventoryDictionary.prototype.deductUnit = function (__s33param0, __s33param1) {
    var __s33local0 = null;
    if (this._inventoryItems.get(__s33param0) && __s33param1 > 0) {
      var __s33local1 = __dep_exact_f855840627e6e145.int(this._inventoryItems.get(__s33param0).inventoryAmount);
      __s33param1 = __dep_exact_f855840627e6e145.int(Math.min(__s33param1, __s33local1));
      (__s33local0 = __dep_export_CastleModel.CastleModel.wodData.createVObyWOD(__s33param0, __dep_export_CastleWodData.CastleWodData.TYPE_UNIT)).inventoryAmount = __s33param1;
      this.changeUnitAmount(__s33param0, Math.min(0, -__s33param1));
    }
    return __s33local0;
  };
  UnitInventoryDictionary.prototype.retainAll = function (__s36param0) {
    if (this._inventoryItems != null) {
      for (var __s36local0 = 0, __s36local1 = Array.from(this._inventoryItems.keys()); __s36local0 < __s36local1.length; __s36local0++) {
        var __s36local2 = __s36local1[__s36local0];
        if (__s36local2 !== undefined) {
          if (!__s36param0(this._inventoryItems.get(__s36local2))) {
            this._inventoryItems.delete(__s36local2);
          }
        }
      }
    }
  };
  return UnitInventoryDictionary;
}(__dep_export_AUnitInventory.AUnitInventory);
exports.UnitInventoryDictionary = __s0local0;
var __dep_export_CastleWodData = require("gge-module:export_CastleWodData");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local0, "IMergedUnitInventory", "IUnitInventory");
