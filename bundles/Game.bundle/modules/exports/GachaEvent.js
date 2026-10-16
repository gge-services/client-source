Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function GachaEvent(__s3param0, __s3param1, __s3param2 = null, __s3param3 = false, __s3param4 = false) {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0, __s3param3, __s3param4) || this).eventVO = __s3param1;
    __s3local0.params = __s3param2;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GachaEvent, __s1param0);
  GachaEvent.SPIN = "GachaEventSpin";
  GachaEvent.SPIN_ANIMATION_COMPLETE = "GachaEventSpinAnimationComplete";
  GachaEvent.SHINE_ANIMATION_LOADED = "GachaEventShineAnimationLoaded";
  GachaEvent.UPDATED = "GachaEventUpdated";
  GachaEvent.LOCK_DIALOG = "LOCK_DIALOG";
  GachaEvent.UNLOCK_DIALOG = "UNLOCK_DIALOG";
  GachaEvent.MULTIPULL_CHANGED = "MULTIPULL_CHANGED";
  return GachaEvent;
}(createjs.Event);
exports.GachaEvent = __s0local0;
