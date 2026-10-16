Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CastleTreasureHuntEvent(__s3param0, __s3param1 = false, __s3param2 = false) {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, __s3param0, __s3param1, __s3param2) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleTreasureHuntEvent, __s1param0);
  CastleTreasureHuntEvent.__initialize_static_members = function () {
    CastleTreasureHuntEvent.TREASURE_HUNT_INFO_UPDATED = "treasurehunt_data_updated";
  };
  return CastleTreasureHuntEvent;
}(createjs.Event);
exports.CastleTreasureHuntEvent = __s0local0;
__s0local0.__initialize_static_members();
