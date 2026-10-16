Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_CastleTradeDataEvent = require("gge-module:export_CastleTradeDataEvent");
var __s0local0 = function (__s1param0) {
  function CastleTradeData() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleTradeData, __s1param0);
  CastleTradeData.prototype.parse_CMI = function (__s5param0) {
    var __s5local0 = new __dep_export_CastleTradeInfoVO.CastleTradeInfoVO();
    __s5local0.fillCastleList(__s5param0.C);
    this.dispatchEvent(new __dep_export_CastleTradeDataEvent.CastleTradeDataEvent(__dep_export_CastleTradeDataEvent.CastleTradeDataEvent.GET_MARKET_INFOS, __s5local0));
  };
  CastleTradeData.prototype.dispatchFailedMarketInfo = function () {
    this.dispatchEvent(new __dep_export_CastleTradeDataEvent.CastleTradeDataEvent(__dep_export_CastleTradeDataEvent.CastleTradeDataEvent.GET_MARKET_INFOS, null, false));
  };
  return CastleTradeData;
}(require("gge-module:export_CastleEventDispatcher").CastleEventDispatcher);
exports.CastleTradeData = __s0local0;
var __dep_export_CastleTradeInfoVO = require("gge-module:export_CastleTradeInfoVO");
