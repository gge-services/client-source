Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __s0local0 = function (__s1param0) {
  function CastleBasicAddUnitsDialogProperties(__s3param0, __s3param1, __s3param2 = null, __s3param3 = false, __s3param4 = null, __s3param5 = __dep_exact_f855840627e6e145.int(Number.MAX_VALUE), __s3param6 = false) {
    var __s3local0 = this;
    __s3local0.editMode = false;
    __s3local0.maxAmount = 0;
    __s3local0.maxAmountOnlyForSoldier = false;
    __s3local0.targetAreaType = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).unitVO = __s3param0;
    __s3local0.addItemFunction = __s3param1;
    __s3local0.itemVO = __s3param2;
    __s3local0.editMode = __s3param3;
    __s3local0.itemContainer = __s3param4;
    __s3local0.maxAmount = __s3param5;
    __s3local0.maxAmountOnlyForSoldier = __s3param6;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleBasicAddUnitsDialogProperties, __s1param0);
  return CastleBasicAddUnitsDialogProperties;
}(__dep_exact_9e901e8e2483a22f.BasicProperties);
exports.CastleBasicAddUnitsDialogProperties = __s0local0;
