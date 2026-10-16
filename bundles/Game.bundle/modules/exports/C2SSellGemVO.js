Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __s0local0 = function (__s1param0) {
  function C2SSellGemVO(__s3param0, __s3param1, __s3param2) {
    var __s3local0 = this;
    __s3local0.GID = NaN;
    __s3local0.RGEM = 0;
    __s3local0.LFID = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).GID = __s3param0;
    __s3local0.RGEM = __dep_exact_f855840627e6e145.int(__s3param1 ? 1 : 0);
    __s3local0.LFID = __s3param2;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(C2SSellGemVO, __s1param0);
  C2SSellGemVO.prototype.getCmdId = function () {
    return __dep_export_ClientConstSF.ClientConstSF.C2S_SELL_GEM;
  };
  return C2SSellGemVO;
}(__dep_exact_9e901e8e2483a22f.BasicCommandVO);
exports.C2SSellGemVO = __s0local0;
