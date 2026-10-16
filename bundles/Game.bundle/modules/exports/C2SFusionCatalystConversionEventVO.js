Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __s0local0 = function (__s1param0) {
  function C2SFusionCatalystConversionEventVO(__s3param0, __s3param1, __s3param2, __s3param3) {
    var __s3local0 = this;
    __s3local0.FID = 0;
    __s3local0.FCCD = 0;
    __s3local0.FCID = 0;
    __s3local0.FCCA = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).FID = __s3param0;
    __s3local0.FCCD = __s3param1;
    __s3local0.FCID = __s3param2;
    __s3local0.FCCA = __s3param3;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(C2SFusionCatalystConversionEventVO, __s1param0);
  C2SFusionCatalystConversionEventVO.prototype.getCmdId = function () {
    return __dep_export_ClientConstSF.ClientConstSF.C2S_FUSION_CATALYST_CONVERSION;
  };
  return C2SFusionCatalystConversionEventVO;
}(__dep_exact_9e901e8e2483a22f.BasicCommandVO);
exports.C2SFusionCatalystConversionEventVO = __s0local0;
