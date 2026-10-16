Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __s0local0 = function (__s1param0) {
  function C2SSkipFusionRechargeEventVO(__s3param0, __s3param1, __s3param2 = -1) {
    var __s3local0 = this;
    __s3local0.FID = 0;
    __s3local0.FSRP = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).FID = __s3param0;
    __s3local0.FSRP = __dep_exact_f855840627e6e145.int(__s3param1 ? 1 : 0);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(C2SSkipFusionRechargeEventVO, __s1param0);
  C2SSkipFusionRechargeEventVO.prototype.getCmdId = function () {
    return __dep_export_ClientConstSF.ClientConstSF.C2S_SKIP_FUSION_RECHARGE;
  };
  return C2SSkipFusionRechargeEventVO;
}(__dep_exact_9e901e8e2483a22f.BasicCommandVO);
exports.C2SSkipFusionRechargeEventVO = __s0local0;
