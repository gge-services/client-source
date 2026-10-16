Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __s0local0 = function (__s1param0) {
  function C2SDefenceInstantBuyToolVO(__s3param0, __s3param1, __s3param2, __s3param3, __s3param4, __s3param5 = -1) {
    var __s3local0 = this;
    __s3local0.W = 0;
    __s3local0.A = 0;
    __s3local0.CX = 0;
    __s3local0.CY = 0;
    __s3local0.MID = 0;
    __s3local0.KID = 0;
    __s3local0.PID = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).W = __s3param0;
    __s3local0.A = __s3param1;
    __s3local0.CX = __dep_exact_f855840627e6e145.int(__s3param2.x);
    __s3local0.CY = __dep_exact_f855840627e6e145.int(__s3param2.y);
    __s3local0.KID = __s3param3;
    __s3local0.MID = __s3param4;
    __s3local0.PID = __s3param5;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(C2SDefenceInstantBuyToolVO, __s1param0);
  C2SDefenceInstantBuyToolVO.prototype.getCmdId = function () {
    return __dep_export_ClientConstSF.ClientConstSF.C2S_INSTANT_BUY_TOOL;
  };
  return C2SDefenceInstantBuyToolVO;
}(__dep_exact_9e901e8e2483a22f.BasicCommandVO);
exports.C2SDefenceInstantBuyToolVO = __s0local0;
