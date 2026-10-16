Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __s0local0 = function (__s1param0) {
  function C2SFoundAllianceVO(__s3param0, __s3param1, __s3param2, __s3param3, __s3param4 = -1, __s3param5 = false) {
    var __s3local0 = this;
    __s3local0.PO = 0;
    __s3local0.PWR = 0;
    __s3local0.IA = 1;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).N = __dep_exact_9e901e8e2483a22f_1.TextValide.getValideSmartFoxJSONTextMessage(__s3param0);
    __s3local0.D = __dep_exact_9e901e8e2483a22f_1.TextValide.getValideSmartFoxJSONTextMessage(__s3param1);
    __s3local0.ALL = __s3param2;
    __s3local0.PO = __s3param4;
    __s3local0.PWR = __dep_exact_f855840627e6e145.int(__s3param5 == 1 ? 1 : 0);
    __s3local0.IA = __dep_exact_f855840627e6e145.int(__s3param3 == 1 ? 1 : 0);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(C2SFoundAllianceVO, __s1param0);
  C2SFoundAllianceVO.prototype.getCmdId = function () {
    return __dep_export_ClientConstSF.ClientConstSF.C2S_FOUND_ALLIANCE;
  };
  return C2SFoundAllianceVO;
}(__dep_exact_9e901e8e2483a22f.BasicCommandVO);
exports.C2SFoundAllianceVO = __s0local0;
