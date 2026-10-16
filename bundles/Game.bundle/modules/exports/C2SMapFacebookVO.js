Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __s0local0 = function (__s1param0) {
  function C2SMapFacebookVO(__s3param0, __s3param1 = null, __s3param2 = null, __s3param3 = null) {
    var __s3local0 = this;
    __s3local0.SFC = false;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).SFC = __s3param0;
    __s3local0.FID = __s3param1;
    __s3local0.FTK = __s3param2;
    __s3local0.FAID = __s3param3;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(C2SMapFacebookVO, __s1param0);
  C2SMapFacebookVO.prototype.getCmdId = function () {
    return __dep_export_ClientConstSF.ClientConstSF.C2S_MAP_FACEBOOK;
  };
  return C2SMapFacebookVO;
}(__dep_exact_9e901e8e2483a22f.BasicCommandVO);
exports.C2SMapFacebookVO = __s0local0;
