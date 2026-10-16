Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CastleHospitalReviveAllDialogProperties(__s3param0, __s3param1, __s3param2, __s3param3, __s3param4) {
    var __s3local0 = this;
    __s3local0._currency2 = 0;
    __s3local0._foodConsumption = 0;
    __s3local0._meadConsumption = 0;
    __s3local0._beefConsumption = 0;
    __s3local0._discount = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._discount = __s3param4;
    __s3local0._currency2 = __s3param0;
    __s3local0._foodConsumption = __s3param1;
    __s3local0._meadConsumption = __s3param2;
    __s3local0._beefConsumption = __s3param3;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleHospitalReviveAllDialogProperties, __s1param0);
  Object.defineProperty(CastleHospitalReviveAllDialogProperties.prototype, "currency2", {
    get: function () {
      return this._currency2;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleHospitalReviveAllDialogProperties.prototype, "foodConsumption", {
    get: function () {
      return this._foodConsumption;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleHospitalReviveAllDialogProperties.prototype, "meadConsumption", {
    get: function () {
      return this._meadConsumption;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleHospitalReviveAllDialogProperties.prototype, "beefConsumption", {
    get: function () {
      return this._beefConsumption;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleHospitalReviveAllDialogProperties.prototype, "discount", {
    get: function () {
      return this._discount;
    },
    enumerable: true,
    configurable: true
  });
  return CastleHospitalReviveAllDialogProperties;
}(require("gge-module:exact_9e901e8e2483a22f").BasicProperties);
exports.CastleHospitalReviveAllDialogProperties = __s0local0;
