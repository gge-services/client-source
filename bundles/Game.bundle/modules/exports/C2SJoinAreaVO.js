Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __s0local0 = function (__s1param0) {
  function C2SJoinAreaVO(__s3param0, __s3param1, __s3param2) {
    var __s3local0 = this;
    __s3local0.PX = 0;
    __s3local0.PY = 0;
    __s3local0.KID = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).PX = __s3param0;
    __s3local0.PY = __s3param1;
    __s3local0.KID = __s3param2;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(C2SJoinAreaVO, __s1param0);
  C2SJoinAreaVO.prototype.getCmdId = function () {
    return __dep_export_ClientConstSF.ClientConstSF.C2S_JOIN_AREA;
  };
  return C2SJoinAreaVO;
}(__dep_exact_9e901e8e2483a22f.BasicCommandVO);
exports.C2SJoinAreaVO = __s0local0;
