Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleDialogConsts = require("gge-module:export_CastleDialogConsts");
var __s0local0 = function (__s1param0) {
  function PaymentPopupDialogInfoVO(__s3param0, __s3param1 = null, __s3param2 = __dep_exact_f855840627e6e145.int(__dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_PAYMENT_DEFAULT), __s3param3 = false, __s3param4 = __dep_exact_f855840627e6e145.int(__dep_exact_9e901e8e2483a22f.BasicDialogHandler.PRIORITY_LOW), __s3param5 = null, __s3param6 = null) {
    var __s3local0 = this;
    __s3local0.blockDialogs = false;
    __s3local0.priority = 0;
    __s3local0.type = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0, __s3param1, __s3param5, __s3param6) || this).blockDialogs = __s3param3;
    __s3local0.priority = __s3param4;
    __s3local0.type = __s3param2;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(PaymentPopupDialogInfoVO, __s1param0);
  return PaymentPopupDialogInfoVO;
}(require("gge-module:export_DialogInfoVO").DialogInfoVO);
exports.PaymentPopupDialogInfoVO = __s0local0;
