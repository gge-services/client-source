Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __s0local0 = function (__s1param0) {
  function C2SBuyUnitPackageVO(__s3param0, __s3param1, __s3param2, __s3param3, __s3param4, __s3param5 = -1, __s3param6 = false, __s3param7 = 73) {
    var __s3local0 = this;
    __s3local0.LID = 0;
    __s3local0.WID = 0;
    __s3local0.AMT = 0;
    __s3local0.PO = 0;
    __s3local0.PWR = 0;
    __s3local0.SK = 0;
    __s3local0.SID = 0;
    __s3local0.AID = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).LID = __s3param0;
    __s3local0.WID = __s3param1;
    __s3local0.AMT = __s3param2;
    __s3local0.PO = __s3param5;
    __s3local0.PWR = __dep_exact_f855840627e6e145.int(__s3param6 == 1 ? 1 : 0);
    __s3local0.SK = __s3param7;
    __s3local0.SID = __s3param3;
    __s3local0.AID = __s3param4;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(C2SBuyUnitPackageVO, __s1param0);
  C2SBuyUnitPackageVO.prototype.getCmdId = function () {
    return __dep_export_ClientConstSF.ClientConstSF.C2S_BUY_UNIT_PACKAGE;
  };
  return C2SBuyUnitPackageVO;
}(__dep_exact_9e901e8e2483a22f.BasicCommandVO);
exports.C2SBuyUnitPackageVO = __s0local0;
