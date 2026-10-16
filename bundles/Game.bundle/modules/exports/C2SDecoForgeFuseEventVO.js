Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __s0local0 = function (__s1param0) {
  function C2SDecoForgeFuseEventVO(__s3param0, __s3param1, __s3param2, __s3param3, __s3param4, __s3param5, __s3param6, __s3param7, __s3param8) {
    var __s3local0 = this;
    __s3local0.FCID = 0;
    __s3local0.FFFP = 0;
    __s3local0.FSUID = 0;
    __s3local0.FSWID = 0;
    __s3local0.FTOID = 0;
    __s3local0.FTSID = 0;
    __s3local0.FTAID = 0;
    __s3local0.FTUID = 0;
    __s3local0.FTWID = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).FCID = __s3param7;
    __s3local0.FFFP = __dep_exact_f855840627e6e145.int(__s3param8 ? 1 : 0);
    __s3local0.FSUID = __s3param1;
    __s3local0.FSWID = __s3param0;
    __s3local0.FTOID = __s3param6;
    __s3local0.FTSID = __s3param2;
    __s3local0.FTAID = __s3param3;
    __s3local0.FTUID = __s3param5;
    __s3local0.FTWID = __s3param4;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(C2SDecoForgeFuseEventVO, __s1param0);
  C2SDecoForgeFuseEventVO.prototype.getCmdId = function () {
    return __dep_export_ClientConstSF.ClientConstSF.C2S_DECO_FORGE_FUSE;
  };
  return C2SDecoForgeFuseEventVO;
}(__dep_exact_9e901e8e2483a22f.BasicCommandVO);
exports.C2SDecoForgeFuseEventVO = __s0local0;
