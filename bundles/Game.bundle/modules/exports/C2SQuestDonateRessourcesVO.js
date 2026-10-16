Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __s0local0 = function (__s1param0) {
  function C2SQuestDonateRessourcesVO(__s3param0, __s3param1 = 0, __s3param2 = 0, __s3param3 = 0, __s3param4 = 0, __s3param5 = 0, __s3param6 = 0, __s3param7 = 0, __s3param8 = 0, __s3param9 = -1, __s3param10 = false) {
    var __s3local0 = this;
    __s3local0.QID = 0;
    __s3local0.F = 0;
    __s3local0.W = 0;
    __s3local0.S = 0;
    __s3local0.C1 = 0;
    __s3local0.O = 0;
    __s3local0.C = 0;
    __s3local0.I = 0;
    __s3local0.G = 0;
    __s3local0.PWR = 0;
    __s3local0.PO = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).QID = __s3param0;
    __s3local0.F = __s3param1;
    __s3local0.W = __s3param2;
    __s3local0.S = __s3param3;
    __s3local0.C1 = __s3param4;
    __s3local0.O = __s3param6;
    __s3local0.C = __s3param5;
    __s3local0.I = __s3param8;
    __s3local0.G = __s3param7;
    __s3local0.PWR = __s3param10 == 1 ? 1 : 0;
    __s3local0.PO = __s3param9;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(C2SQuestDonateRessourcesVO, __s1param0);
  C2SQuestDonateRessourcesVO.prototype.getCmdId = function () {
    return __dep_export_ClientConstSF.ClientConstSF.C2S_QUEST_DONATE_RESOURCES;
  };
  return C2SQuestDonateRessourcesVO;
}(__dep_exact_9e901e8e2483a22f.BasicCommandVO);
exports.C2SQuestDonateRessourcesVO = __s0local0;
