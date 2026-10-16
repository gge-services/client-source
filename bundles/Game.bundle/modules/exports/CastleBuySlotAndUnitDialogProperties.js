Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CastleBuySlotAndUnitDialogProperties(__s3param0, __s3param1, __s3param2, __s3param3, __s3param4 = null) {
    var __s3local0 = this;
    __s3local0.listId = 0;
    __s3local0.amount = 0;
    __s3local0.cost = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).buyItemVO = __s3param0;
    __s3local0.listId = __s3param1;
    __s3local0.amount = __s3param2;
    __s3local0.cost = __s3param3;
    __s3local0.functionOk = __s3param4;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleBuySlotAndUnitDialogProperties, __s1param0);
  return CastleBuySlotAndUnitDialogProperties;
}(require("gge-module:exact_9e901e8e2483a22f").BasicProperties);
exports.CastleBuySlotAndUnitDialogProperties = __s0local0;
