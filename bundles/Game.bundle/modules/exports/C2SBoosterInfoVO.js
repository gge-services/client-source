Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __s0local0 = function (__s1param0) {
  function C2SBoosterInfoVO() {
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(C2SBoosterInfoVO, __s1param0);
  C2SBoosterInfoVO.prototype.getCmdId = function () {
    return __dep_export_ClientConstSF.ClientConstSF.C2S_BOOSTER_INFO;
  };
  return C2SBoosterInfoVO;
}(__dep_exact_9e901e8e2483a22f.BasicCommandVO);
exports.C2SBoosterInfoVO = __s0local0;
