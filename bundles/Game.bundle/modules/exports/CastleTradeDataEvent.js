Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CastleTradeDataEvent(__s3param0, __s3param1 = null, __s3param2 = true, __s3param3 = false, __s3param4 = false) {
    var __s3local0 = this;
    __s3local0.openDialog = false;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0, __s3param3, __s3param4) || this).tradeInfoVO = __s3param1;
    __s3local0.openDialog = __s3param2;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleTradeDataEvent, __s1param0);
  CastleTradeDataEvent.__initialize_static_members = function () {
    CastleTradeDataEvent.GET_MARKET_INFOS = "getMarketInfos";
  };
  return CastleTradeDataEvent;
}(createjs.Event);
exports.CastleTradeDataEvent = __s0local0;
__s0local0.__initialize_static_members();
