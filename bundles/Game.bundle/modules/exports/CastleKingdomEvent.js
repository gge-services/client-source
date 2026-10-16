Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CastleKingdomEvent(__s3param0, __s3param1 = null, __s3param2 = false, __s3param3 = false) {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0, __s3param2, __s3param3) || this).params = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleKingdomEvent, __s1param0);
  CastleKingdomEvent.__initialize_static_members = function () {
    CastleKingdomEvent.KINGDOMDATA_ARRIVED = "KINGDOMDATA_ARRIVED";
    CastleKingdomEvent.KINGDOM_VILLAGELIST_ARRIVED = "KINGDOM_VILLAGELIST_ARRIVED";
    CastleKingdomEvent.KINGDOM_MONUMENTS_RESET = "KINGDOM_MONUMENTS_RESET";
    CastleKingdomEvent.KINGDOM_SWITCHED = "KINGDOM_SWITCHED";
  };
  return CastleKingdomEvent;
}(createjs.Event);
exports.CastleKingdomEvent = __s0local0;
__s0local0.__initialize_static_members();
