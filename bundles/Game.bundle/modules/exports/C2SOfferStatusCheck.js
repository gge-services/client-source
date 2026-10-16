Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_e9ed30ab7bbf7f50 = require("gge-module:exact_e9ed30ab7bbf7f50");
var __s0local0 = function (__s1param0) {
  function C2SOfferStatusCheck(__s3param0) {
    var __s3local0 = this;
    __s3local0.OID = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).OID = __s3param0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(C2SOfferStatusCheck, __s1param0);
  C2SOfferStatusCheck.prototype.getCmdId = function () {
    return __dep_exact_e9ed30ab7bbf7f50.CoreEventsConstants.C2S_OFFER_STATUS_CHECK_EVENT;
  };
  return C2SOfferStatusCheck;
}(__dep_exact_9e901e8e2483a22f.BasicCommandVO);
exports.C2SOfferStatusCheck = __s0local0;
