Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __s0local0 = function (__s1param0) {
  function C2SRenameCastleVO(__s3param0, __s3param1, __s3param2, __s3param3, __s3param4) {
    var __s3local0 = this;
    __s3local0.CID = 0;
    __s3local0.P = 0;
    __s3local0.KID = 0;
    __s3local0.AT = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).CID = __s3param0;
    __s3local0.N = __dep_exact_9e901e8e2483a22f_1.TextValide.getValideSmartFoxJSONTextMessage(__s3param2);
    __s3local0.P = __s3param3;
    __s3local0.KID = __s3param1;
    __s3local0.AT = __s3param4;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(C2SRenameCastleVO, __s1param0);
  C2SRenameCastleVO.prototype.getCmdId = function () {
    return __dep_export_ClientConstSF.ClientConstSF.C2S_RENAME_CASTLE;
  };
  return C2SRenameCastleVO;
}(__dep_exact_9e901e8e2483a22f.BasicCommandVO);
exports.C2SRenameCastleVO = __s0local0;
