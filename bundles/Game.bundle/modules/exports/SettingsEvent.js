Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function SettingsEvent(__s3param0, __s3param1 = true, __s3param2 = false) {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, __s3param0, __s3param1, __s3param2) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SettingsEvent, __s1param0);
  SettingsEvent.__initialize_static_members = function () {
    SettingsEvent.QUESTREMINDER_STATE_CHANGED = "questreminder_state_changed";
    SettingsEvent.WORLDMAPMOVEMNTS_VISIBILITY_CHANGED = "worldmapmovement_visibility changed";
    SettingsEvent.ARE_WORLDMAPMOVEMNTS_VISIBILITY_CHANGED = "ARE worldmapmovement_visibility changed";
    SettingsEvent.MINICHAT_VISIBILITY_CHANGED = "minichat_visibility_changed";
    SettingsEvent.SHOW_VIP_VISUALS_TO_OTHERS_CHANGED = "vip_visuals_changed";
  };
  SettingsEvent.EVENT_BOOKMARK_CHANGED = "event_bookmark_changed";
  return SettingsEvent;
}(createjs.Event);
exports.SettingsEvent = __s0local0;
__s0local0.__initialize_static_members();
