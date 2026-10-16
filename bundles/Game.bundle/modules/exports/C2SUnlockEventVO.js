Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __s0local0 = function (__s1param0) {
  function C2SUnlockEventVO(__s3param0, __s3param1, __s3param2, __s3param3, __s3param4, __s3param5, __s3param6, __s3param7) {
    var __s3local0 = this;
    __s3local0.SCID = 0;
    __s3local0.SKID = 0;
    __s3local0.W = 0;
    __s3local0.S = 0;
    __s3local0.F = 0;
    __s3local0.C1 = 0;
    __s3local0.IID = 0;
    __s3local0.SC = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).SCID = __s3param0;
    __s3local0.SKID = __s3param1;
    __s3local0.W = __s3param2;
    __s3local0.S = __s3param3;
    __s3local0.F = __s3param4;
    __s3local0.C1 = __s3param5;
    __s3local0.IID = __s3param6;
    __s3local0.SC = __s3param7;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(C2SUnlockEventVO, __s1param0);
  C2SUnlockEventVO.prototype.getCmdId = function () {
    return __dep_export_ClientConstSF.ClientConstSF.C2S_UNLOCK_EVENT;
  };
  return C2SUnlockEventVO;
}(__dep_exact_9e901e8e2483a22f.BasicCommandVO);
exports.C2SUnlockEventVO = __s0local0;
