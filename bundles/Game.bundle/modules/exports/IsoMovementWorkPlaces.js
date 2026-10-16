Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function IsoMovementWorkPlaces(__s3param0) {
    this._workPlaces = new Map();
    this._isoData = __s3param0;
  }
  IsoMovementWorkPlaces.prototype.destroy = function () {
    this._workPlaces.clear();
  };
  IsoMovementWorkPlaces.prototype.reinit = function () {
    this._workPlaces = this._workPlaces || new Map();
    var __s7local0 = this.isoData.objects.provider.getObjectByType(__dep_export_IsoObjectEnum.IsoObjectEnum.WOOD_RESOURCE_FIELD);
    if (__s7local0 && __s7local0.spawnPoints) {
      this._workPlaces.set(__dep_export_IsoObjectEnum.IsoObjectEnum.MOVEMENT_WOOD_CUTTER, Array(__s7local0.spawnPoints.length).fill(false));
    }
    var __s7local1 = this.isoData.objects.provider.getObjectByType(__dep_export_IsoObjectEnum.IsoObjectEnum.STONE_RESOURCE_FIELD);
    var __s7local2 = __s7local1 ? __s7local1.getWorkPointsByIndex(0) : null;
    if (__s7local2 && __s7local1.fieldAmount > 0) {
      this._workPlaces.set(__dep_export_IsoObjectEnum.IsoObjectEnum.MOVEMENT_STONE_CUTTER, Array(__s7local2.length * __s7local1.fieldAmount).fill(false));
    }
    var __s7local3 = this.isoData.objects.provider.getObjectByType(__dep_export_IsoObjectEnum.IsoObjectEnum.FOOD_RESOURCE_FIELD);
    var __s7local4 = __s7local3 ? __s7local3.getWorkPointsByIndex(0) : null;
    if (__s7local4 && __s7local3.fieldAmount > 0) {
      this._workPlaces.set(__dep_export_IsoObjectEnum.IsoObjectEnum.MOVEMENT_FARMER, Array(__s7local4.length * __s7local3.fieldAmount).fill(false));
    }
  };
  IsoMovementWorkPlaces.prototype.markWorkPlace = function (__s12param0, __s12param1, __s12param2) {
    this._workPlaces.get(__s12param0)[__s12param1] = __s12param2;
  };
  IsoMovementWorkPlaces.prototype.hasFreeSlot = function (__s14param0) {
    if (!this._workPlaces.has(__s14param0)) {
      return false;
    }
    for (var __s14local0 = this._workPlaces.get(__s14param0), __s14local1 = 0; __s14local1 < __s14local0.length; ++__s14local1) {
      if (!__s14local0[__s14local1]) {
        return true;
      }
    }
    return false;
  };
  IsoMovementWorkPlaces.prototype.getIndexOfFreeSlot = function (__s20param0) {
    if (!this._workPlaces.has(__s20param0)) {
      return -1;
    }
    for (var __s20local0 = this._workPlaces.get(__s20param0), __s20local1 = [], __s20local2 = 0; __s20local2 < __s20local0.length; ++__s20local2) {
      if (!__s20local0[__s20local2]) {
        __s20local1.push(__s20local2);
      }
    }
    if (__s20local1.length <= 0) {
      return -1;
    } else {
      return __dep_exact_f855840627e6e145.int(__s20local1[__dep_export_ClientConstUtils.ClientConstUtils.getRandomInt(0, __s20local1.length - 1)]);
    }
  };
  Object.defineProperty(IsoMovementWorkPlaces.prototype, "isoData", {
    get: function () {
      return this._isoData;
    },
    enumerable: true,
    configurable: true
  });
  return IsoMovementWorkPlaces;
}();
exports.IsoMovementWorkPlaces = __s0local0;
var __dep_export_IsoObjectEnum = require("gge-module:export_IsoObjectEnum");
var __dep_export_ClientConstUtils = require("gge-module:export_ClientConstUtils");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
