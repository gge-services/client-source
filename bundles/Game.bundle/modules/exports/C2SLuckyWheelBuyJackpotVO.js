Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function C2SLuckyWheelBuyJackpotVO() {
    var __s3local0 = __s1param0.call(this) || this;
    __dep_export_CastleModel.CastleModel.luckyWheelData.doJackpotSpin();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(C2SLuckyWheelBuyJackpotVO, __s1param0);
  C2SLuckyWheelBuyJackpotVO.prototype.getCmdId = function () {
    return __dep_export_ClientConstSF.ClientConstSF.C2S_LUCKY_WHEEL_BUY_JACKPOT;
  };
  return C2SLuckyWheelBuyJackpotVO;
}(__dep_exact_9e901e8e2483a22f.BasicCommandVO);
exports.C2SLuckyWheelBuyJackpotVO = __s0local0;
