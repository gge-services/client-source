Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __s0local0 = function (__s1param0) {
  function C2SCreatePlagueMonkMovementVO(__s3param0, __s3param1, __s3param2, __s3param3, __s3param4) {
    var __s3local0 = this;
    __s3local0.TX = 0;
    __s3local0.TY = 0;
    __s3local0.TK = 0;
    __s3local0.C = 0;
    __s3local0.E = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).TX = __s3param0;
    __s3local0.TY = __s3param1;
    __s3local0.TK = __s3param2;
    __s3local0.C = __s3param3;
    __s3local0.E = __s3param4;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(C2SCreatePlagueMonkMovementVO, __s1param0);
  C2SCreatePlagueMonkMovementVO.prototype.getCmdId = function () {
    return __dep_export_ClientConstSF.ClientConstSF.C2S_CREATE_PLAGUEMONK_MOVEMENT;
  };
  return C2SCreatePlagueMonkMovementVO;
}(__dep_exact_9e901e8e2483a22f.BasicCommandVO);
exports.C2SCreatePlagueMonkMovementVO = __s0local0;
