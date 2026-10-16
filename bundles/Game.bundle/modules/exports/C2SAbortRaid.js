Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __s0local0 = function (__s1param0) {
  function C2SAbortRaid() {
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(C2SAbortRaid, __s1param0);
  C2SAbortRaid.prototype.getCmdId = function () {
    return __dep_export_ClientConstSF.ClientConstSF.C2S_ABORT_RAID_EVENT;
  };
  return C2SAbortRaid;
}(__dep_exact_9e901e8e2483a22f.BasicCommandVO);
exports.C2SAbortRaid = __s0local0;
