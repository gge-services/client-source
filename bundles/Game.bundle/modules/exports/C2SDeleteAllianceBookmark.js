Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __s0local0 = function (__s1param0) {
  function C2SDeleteAllianceBookmark(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.BM = __s3param0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(C2SDeleteAllianceBookmark, __s1param0);
  C2SDeleteAllianceBookmark.prototype.getCmdId = function () {
    return __dep_export_ClientConstSF.ClientConstSF.C2S_DELETE_ALLIANCE_BOOKMARK;
  };
  C2SDeleteAllianceBookmark.createFromVo = function (__s7param0, __s7param1 = false) {
    return new C2SDeleteAllianceBookmark([C2SDeleteAllianceBookmark.voToCommandContent(__s7param0, __s7param1)]);
  };
  C2SDeleteAllianceBookmark.voToCommandContent = function (__s9param0, __s9param1 = false) {
    return [__s9param0.bookmarkID, __s9param1 ? 1 : 0];
  };
  return C2SDeleteAllianceBookmark;
}(__dep_exact_9e901e8e2483a22f.BasicCommandVO);
exports.C2SDeleteAllianceBookmark = __s0local0;
