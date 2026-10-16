Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CastleVoucherEvent(__s3param0, __s3param1 = false, __s3param2 = false) {
    return __s1param0.call(this, __s3param0, __s3param1, __s3param2) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleVoucherEvent, __s1param0);
  CastleVoucherEvent.VOUCHER_CODE_SUCCESS = "voucher_code_success";
  CastleVoucherEvent.VOUCHER_CODE_FAILED = "voucher_code_failed";
  return CastleVoucherEvent;
}(createjs.Event);
exports.CastleVoucherEvent = __s0local0;
