Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __s0local0 = function (__s1param0) {
  function C2STreasuremapGoodsTransferVO(__s3param0, __s3param1, __s3param2, __s3param3) {
    var __s3local0 = this;
    __s3local0.MID = 0;
    __s3local0.SCID = 0;
    __s3local0.KID = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).MID = __s3param0;
    __s3local0.SCID = __s3param1;
    __s3local0.KID = __s3param2;
    __s3local0.G = __s3param3;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(C2STreasuremapGoodsTransferVO, __s1param0);
  C2STreasuremapGoodsTransferVO.prototype.getCmdId = function () {
    return __dep_export_ClientConstSF.ClientConstSF.C2S_TREASUREMAP_GOODS_TRANSFER;
  };
  return C2STreasuremapGoodsTransferVO;
}(__dep_exact_9e901e8e2483a22f.BasicCommandVO);
exports.C2STreasuremapGoodsTransferVO = __s0local0;
