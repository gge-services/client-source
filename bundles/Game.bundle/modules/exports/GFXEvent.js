Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function GFXEvent(__s3param0, __s3param1 = true, __s3param2 = false) {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, __s3param0, __s3param1, __s3param2) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GFXEvent, __s1param0);
  GFXEvent.__initialize_static_members = function () {
    GFXEvent.ANIMATION_STATE_CHANGED = "inventorychanged";
    GFXEvent.ALERT_FRAME_VISIBILITY_CHANGED = "alert_frame_visibility_changed";
  };
  return GFXEvent;
}(createjs.Event);
exports.GFXEvent = __s0local0;
__s0local0.__initialize_static_members();
