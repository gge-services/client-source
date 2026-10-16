Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __s0local0 = function (__s1param0) {
  function C2SMinuteSkipKingdomTransferVO(__s3param0, __s3param1, __s3param2) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.MST = __s3param0;
    __s3local0.KID = __s3param1.toString();
    __s3local0.TT = __s3param2.toString();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(C2SMinuteSkipKingdomTransferVO, __s1param0);
  C2SMinuteSkipKingdomTransferVO.prototype.getCmdId = function () {
    return __dep_export_ClientConstSF.ClientConstSF.C2S_MINUTE_SKIP_KINGDOM_TRANSFER;
  };
  return C2SMinuteSkipKingdomTransferVO;
}(__dep_exact_9e901e8e2483a22f.BasicCommandVO);
exports.C2SMinuteSkipKingdomTransferVO = __s0local0;
