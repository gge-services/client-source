Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __s0local0 = function (__s1param0) {
  function C2SAllianceAnswerApplicationVO(__s3param0, __s3param1) {
    var __s3local0 = this;
    __s3local0.PID = 0;
    __s3local0.A = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).PID = __s3param0;
    __s3local0.A = __dep_exact_f855840627e6e145.int(__s3param1 ? 1 : 0);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(C2SAllianceAnswerApplicationVO, __s1param0);
  C2SAllianceAnswerApplicationVO.prototype.getCmdId = function () {
    return __dep_export_ClientConstSF.ClientConstSF.C2S_ALLIANCE_ANSWER_APPLICATION;
  };
  return C2SAllianceAnswerApplicationVO;
}(__dep_exact_9e901e8e2483a22f.BasicCommandVO);
exports.C2SAllianceAnswerApplicationVO = __s0local0;
