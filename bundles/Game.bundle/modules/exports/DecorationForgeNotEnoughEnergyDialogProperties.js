Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function DecorationForgeNotEnoughEnergyDialogProperties(__s3param0, __s3param1) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._costAmount = 0;
    __s3local0._amountInStorage = 0;
    __s3local0._costAmount = __s3param0;
    __s3local0._amountInStorage = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(DecorationForgeNotEnoughEnergyDialogProperties, __s1param0);
  Object.defineProperty(DecorationForgeNotEnoughEnergyDialogProperties.prototype, "costAmount", {
    get: function () {
      return this._costAmount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DecorationForgeNotEnoughEnergyDialogProperties.prototype, "amountInStorage", {
    get: function () {
      return this._amountInStorage;
    },
    enumerable: true,
    configurable: true
  });
  return DecorationForgeNotEnoughEnergyDialogProperties;
}(require("gge-module:exact_9e901e8e2483a22f").BasicProperties);
exports.DecorationForgeNotEnoughEnergyDialogProperties = __s0local0;
