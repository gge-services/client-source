Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function C2SSpinCharacterTombolaVO(__s3param0, __s3param1 = -1, __s3param2, __s3param3) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.CID = __s3param0;
    __s3local0.OID = __s3param1;
    __s3local0.IF = __s3param2;
    __s3local0.AMT = __s3param3;
    __dep_export_CastleModel.CastleModel.generalsData.lastPayedQuestCurrencyAmount = __s3param3;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(C2SSpinCharacterTombolaVO, __s1param0);
  C2SSpinCharacterTombolaVO.prototype.getCmdId = function () {
    return __dep_export_ClientConstSF.ClientConstSF.C2S_SPIN_CHARACTER_TOMBOLA;
  };
  return C2SSpinCharacterTombolaVO;
}(__dep_exact_9e901e8e2483a22f.BasicCommandVO);
exports.C2SSpinCharacterTombolaVO = __s0local0;
