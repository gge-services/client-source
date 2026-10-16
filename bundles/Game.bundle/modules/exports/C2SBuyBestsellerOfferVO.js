Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __s0local0 = function (__s1param0) {
  function C2SBuyBestsellerOfferVO(__s3param0, __s3param1, __s3param2) {
    var __s3local0 = this;
    __s3local0.OID = 0;
    __s3local0.AMT = 0;
    __s3local0.POID = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).OID = __s3param0;
    __s3local0.AMT = __s3param1;
    __s3local0.POID = __s3param2;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(C2SBuyBestsellerOfferVO, __s1param0);
  C2SBuyBestsellerOfferVO.prototype.getCmdId = function () {
    return __dep_export_ClientConstSF.ClientConstSF.C2S_BUY_BESTSELLER_OFFER;
  };
  return C2SBuyBestsellerOfferVO;
}(__dep_exact_9e901e8e2483a22f.BasicCommandVO);
exports.C2SBuyBestsellerOfferVO = __s0local0;
