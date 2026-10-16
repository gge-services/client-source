Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function ModernCostConfirmationDialogProperties(__s3param0, __s3param1, __s3param2, __s3param3 = null, __s3param4 = null, __s3param5 = 0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.discount = 0;
    __s3local0.title = __s3param0;
    __s3local0.copy = __s3param1;
    __s3local0.cost = __s3param2;
    __s3local0.onBuy = __s3param3;
    __s3local0.onCancel = __s3param4;
    __s3local0.discount = __s3param5;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ModernCostConfirmationDialogProperties, __s1param0);
  return ModernCostConfirmationDialogProperties;
}(require("gge-module:exact_9e901e8e2483a22f").BasicProperties);
exports.ModernCostConfirmationDialogProperties = __s0local0;
