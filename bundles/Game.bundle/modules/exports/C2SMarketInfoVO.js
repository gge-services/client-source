Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __s0local0 = function (__s1param0) {
  function C2SMarketInfoVO() {
    var __s3local0 = this;
    __s3local0.S = 0;
    __s3local0.KID = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).S = C2SMarketInfoVO.SCOPE_ALL_KINGDOMS;
    __s3local0.KID = -1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(C2SMarketInfoVO, __s1param0);
  C2SMarketInfoVO.prototype.getCmdId = function () {
    return __dep_export_ClientConstSF.ClientConstSF.C2S_MARKET_INFO;
  };
  C2SMarketInfoVO.__initialize_static_members = function () {
    C2SMarketInfoVO.SCOPE_CURRENT_KINGDOM = 0;
    C2SMarketInfoVO.SCOPE_ALL_KINGDOMS = 1;
  };
  return C2SMarketInfoVO;
}(__dep_exact_9e901e8e2483a22f.BasicCommandVO);
exports.C2SMarketInfoVO = __s0local0;
__s0local0.__initialize_static_members();
