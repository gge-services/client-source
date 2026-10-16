Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_AUnitInventory = require("gge-module:export_AUnitInventory");
var __s0local0 = function (__s1param0) {
  function UnitInventoryList() {
    var __s3local0 = this;
    __s3local0.isStrongholdInventory = false;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._inventoryItemList = [];
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(UnitInventoryList, __s1param0);
  Object.defineProperty(UnitInventoryList.prototype, "units", {
    get: function () {
      return this._inventoryItemList;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AUnitInventory.AUnitInventory.prototype, "units").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  UnitInventoryList.prototype.removeUnit = function (__s9param0) {};
  UnitInventoryList.prototype.addUnitReference = function (__s11param0) {
    this._inventoryItemList.push(__s11param0);
  };
  UnitInventoryList.prototype.addUnit = function (__s13param0, __s13param1) {
    if (!(__s13param1 <= 0)) {
      var __s13local0 = __dep_exact_81dacdf05bd32292.castAs(__dep_export_CastleModel.CastleModel.wodData.createVObyWOD(__s13param0, __dep_export_CastleWodData.CastleWodData.TYPE_UNIT), "BasicUnitVO");
      if (!__s13local0) {
        throw new Error("Tried to add an invalid unit (wodID: " + __s13param0 + ") to inventory. iXML verison: " + __dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.versionInformation.itemXmlVersion);
      }
      __s13local0.inventoryAmount = __s13param1;
      __s13local0.isStronghold = this.isStrongholdInventory;
      this._inventoryItemList.push(__s13local0);
      if (!this.blockEventDispatch) {
        this.dispatchChange();
      }
    }
  };
  UnitInventoryList.prototype.retainAll = function (__s18param0) {
    for (var __s18local0 = 0; __s18local0 < this._inventoryItemList.length; ++__s18local0) {
      if (!__s18param0(this._inventoryItemList[__s18local0])) {
        this._inventoryItemList.splice(__s18local0, 1);
        --__s18local0;
      }
    }
  };
  UnitInventoryList.prototype.getUnitCountByWodId = function (__s23param0) {
    return __dep_exact_f855840627e6e145.int(this.getUnitCount(this.byWodId(__s23param0)));
  };
  UnitInventoryList.prototype.byWodId = function (__s25param0) {
    return function (__s27param0) {
      return __s27param0.wodId == __s25param0;
    };
  };
  UnitInventoryList.prototype.clear = function () {
    this._inventoryItemList = [];
  };
  return UnitInventoryList;
}(__dep_export_AUnitInventory.AUnitInventory);
exports.UnitInventoryList = __s0local0;
var __dep_export_CastleWodData = require("gge-module:export_CastleWodData");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local0, "IUnitInventory");
