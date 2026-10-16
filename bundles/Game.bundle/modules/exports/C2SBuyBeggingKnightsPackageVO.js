Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __s0local0 = function (__s1param0) {
  function C2SBuyBeggingKnightsPackageVO(__s3param0, __s3param1, __s3param2, __s3param3, __s3param4) {
    var __s3local0 = this;
    __s3local0.SCID = 0;
    __s3local0.SKID = 0;
    __s3local0.WP = 0;
    __s3local0.SP = 0;
    __s3local0.FP = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).SCID = __s3param0;
    __s3local0.SKID = __s3param1;
    __s3local0.WP = __s3param2;
    __s3local0.SP = __s3param3;
    __s3local0.FP = __s3param4;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(C2SBuyBeggingKnightsPackageVO, __s1param0);
  C2SBuyBeggingKnightsPackageVO.prototype.getCmdId = function () {
    return __dep_export_ClientConstSF.ClientConstSF.C2S_BUY_BEGGINGKNIGHTS_POINT;
  };
  return C2SBuyBeggingKnightsPackageVO;
}(__dep_exact_9e901e8e2483a22f.BasicCommandVO);
exports.C2SBuyBeggingKnightsPackageVO = __s0local0;
