Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CastleCollectorEventDataEvent(__s3param0, __s3param1, __s3param2, __s3param3 = null, __s3param4 = true, __s3param5 = false) {
    var __s3local0 = __s1param0.call(this, __s3param0, __s3param4, __s3param5) || this;
    __s3local0.playerID = 0;
    __s3local0.collectCurrency = 0;
    __s3local0.playerID = __s3param1;
    __s3local0.collectCurrency = __s3param2;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleCollectorEventDataEvent, __s1param0);
  CastleCollectorEventDataEvent.COLLECT_CURRENCY_INFO = "COLLECT_CURRENCY_INFO";
  return CastleCollectorEventDataEvent;
}(createjs.Event);
exports.CastleCollectorEventDataEvent = __s0local0;
