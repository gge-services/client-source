Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function DoubleUnitsConfirmationProperties(__s3param0, __s3param1, __s3param2, __s3param3, __s3param4, __s3param5) {
    var __s3local0 = this;
    __s3local0.isSoldiers = false;
    __s3local0.cost = 0;
    __s3local0.amount = 0;
    __s3local0.listID = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).isSoldiers = __s3param0;
    __s3local0.onDoubleUnitsConfirmed = __s3param1;
    __s3local0.cost = __s3param2;
    __s3local0.amount = __s3param3;
    __s3local0.name = __s3param4;
    __s3local0.listID = __s3param5;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(DoubleUnitsConfirmationProperties, __s1param0);
  return DoubleUnitsConfirmationProperties;
}(require("gge-module:exact_9e901e8e2483a22f").BasicProperties);
exports.DoubleUnitsConfirmationProperties = __s0local0;
