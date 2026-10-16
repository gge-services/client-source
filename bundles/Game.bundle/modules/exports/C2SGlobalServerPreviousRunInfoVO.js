Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __s0local0 = function (__s1param0) {
  function C2SGlobalServerPreviousRunInfoVO() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(C2SGlobalServerPreviousRunInfoVO, __s1param0);
  C2SGlobalServerPreviousRunInfoVO.prototype.getCmdId = function () {
    return __dep_export_ClientConstSF.ClientConstSF.C2S_GLOBAL_SERVER_PREVIOUS_RUN_INFO;
  };
  return C2SGlobalServerPreviousRunInfoVO;
}(__dep_exact_9e901e8e2483a22f.BasicCommandVO);
exports.C2SGlobalServerPreviousRunInfoVO = __s0local0;
