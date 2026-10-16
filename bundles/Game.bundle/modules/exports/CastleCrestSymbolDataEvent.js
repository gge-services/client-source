Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CastleCrestSymbolDataEvent(__s3param0, __s3param1 = false, __s3param2 = false) {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, __s3param0, __s3param1, __s3param2) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleCrestSymbolDataEvent, __s1param0);
  CastleCrestSymbolDataEvent.__initialize_static_members = function () {
    CastleCrestSymbolDataEvent.CREST_SYMBOL_DATA_UPDATED = "crest_symbols_updated";
  };
  return CastleCrestSymbolDataEvent;
}(createjs.Event);
exports.CastleCrestSymbolDataEvent = __s0local0;
__s0local0.__initialize_static_members();
