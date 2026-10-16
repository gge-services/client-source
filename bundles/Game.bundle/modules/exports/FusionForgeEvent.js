Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function FusionForgeEvent(__s3param0, __s3param1 = null, __s3param2 = true, __s3param3 = false) {
    var __s3local0 = __s1param0.call(this, __s3param0, __s3param2, __s3param3) || this;
    __s3local0.params = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(FusionForgeEvent, __s1param0);
  FusionForgeEvent.__initialize_static_members = function () {
    FusionForgeEvent.ON_FUSION_FORGE_INFO_UPDATED = "onFusionForgeInfoUpdated";
    FusionForgeEvent.ON_FUSE_DONE = "onFuseDone";
    FusionForgeEvent.ON_FORGE_LEVEL_UP = "onForgeLevelUp";
    FusionForgeEvent.ON_FORGE_ENERGY_RECHARGED = "onForgeEnergyRecharged";
    FusionForgeEvent.ON_CATALYST_CONVERSION_DONE = "onCatalystConversionDone";
  };
  return FusionForgeEvent;
}(require("gge-module:export_CastleEvent").CastleEvent);
exports.FusionForgeEvent = __s0local0;
__s0local0.__initialize_static_members();
