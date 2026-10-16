Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CastleEilandEvent(__s3param0, __s3param1 = false, __s3param2 = false) {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, __s3param0, __s3param1, __s3param2) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleEilandEvent, __s1param0);
  CastleEilandEvent.EILAND_RESET = "EILAND_RESET";
  CastleEilandEvent.NEW_EILAND_TITLE = "NEW_EILAND_TITLE";
  CastleEilandEvent.STORM_ISLANDS_INFO_RECEIVED = "STORM_ISLAND_INFO_RECEIVED";
  return CastleEilandEvent;
}(createjs.Event);
exports.CastleEilandEvent = __s0local0;
