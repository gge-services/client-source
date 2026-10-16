Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function EquipmentExpireDialogProperties(__s3param0, __s3param1, __s3param2, __s3param3, __s3param4, __s3param5) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._travelTime = 0;
    __s3local0._boostTraveling = 0;
    __s3local0._premiumCommander = 0;
    __s3local0._lordVO = __s3param0;
    __s3local0._travelTime = __s3param1;
    __s3local0._boostTraveling = __s3param2;
    __s3local0._premiumCommander = __s3param3;
    __s3local0._onConfirmFunc = __s3param4;
    __s3local0._onDeniedFunc = __s3param5;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(EquipmentExpireDialogProperties, __s1param0);
  EquipmentExpireDialogProperties.prototype.willAnyEquipmentExpireBeforeArrival = function () {
    if (!this.lordVO || this.lordVO && __dep_exact_81dacdf05bd32292.instanceOfClass(this.lordVO, "DefaultLordVO")) {
      return false;
    }
    for (var __s5local0 in this.lordVO.equipmentSlots) {
      var __s5local1 = this.lordVO.equipmentSlots[__s5local0];
      if (__s5local1 !== undefined) {
        var __s5local2 = __s5local1.equipmentVO;
        if (__s5local2 && __s5local2.remainingDuration > 0 && __s5local2.remainingDuration - this._travelTime <= 0) {
          return true;
        }
      }
    }
    return false;
  };
  Object.defineProperty(EquipmentExpireDialogProperties.prototype, "lordVO", {
    get: function () {
      return this._lordVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EquipmentExpireDialogProperties.prototype, "travelTime", {
    get: function () {
      return this._travelTime;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EquipmentExpireDialogProperties.prototype, "onConfirmFunc", {
    get: function () {
      return this._onConfirmFunc;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EquipmentExpireDialogProperties.prototype, "onDeniedFunc", {
    get: function () {
      return this._onDeniedFunc;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EquipmentExpireDialogProperties.prototype, "boostTraveling", {
    get: function () {
      return this._boostTraveling;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EquipmentExpireDialogProperties.prototype, "premiumCommander", {
    get: function () {
      return this._premiumCommander;
    },
    enumerable: true,
    configurable: true
  });
  return EquipmentExpireDialogProperties;
}(__dep_exact_9e901e8e2483a22f.BasicProperties);
exports.EquipmentExpireDialogProperties = __s0local0;
