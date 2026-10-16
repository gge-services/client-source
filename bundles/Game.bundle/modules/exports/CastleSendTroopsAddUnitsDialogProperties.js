Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CastleSendTroopsAddUnitsDialogProperties(__s3param0, __s3param1, __s3param2, __s3param3) {
    var __s3local0 = this;
    __s3local0.currentItems = 0;
    __s3local0.maxItems = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).currentItems = __s3param0;
    __s3local0.maxItems = __s3param1;
    __s3local0.unitVO = __s3param2;
    __s3local0.addItemFunction = __s3param3;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleSendTroopsAddUnitsDialogProperties, __s1param0);
  return CastleSendTroopsAddUnitsDialogProperties;
}(require("gge-module:exact_9e901e8e2483a22f").BasicProperties);
exports.CastleSendTroopsAddUnitsDialogProperties = __s0local0;
