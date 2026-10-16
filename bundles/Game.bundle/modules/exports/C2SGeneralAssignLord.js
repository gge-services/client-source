Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __s0local0 = function (__s1param0) {
  function C2SGeneralAssignLord(__s3param0, __s3param1 = -1) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.LID = 0;
    __s3local0.GID = -1;
    __s3local0.LID = __s3param0;
    __s3local0.GID = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(C2SGeneralAssignLord, __s1param0);
  C2SGeneralAssignLord.prototype.getCmdId = function () {
    return __dep_export_ClientConstSF.ClientConstSF.C2S_GENERAL_ASSIGN_LORD;
  };
  return C2SGeneralAssignLord;
}(__dep_exact_9e901e8e2483a22f.BasicCommandVO);
exports.C2SGeneralAssignLord = __s0local0;
