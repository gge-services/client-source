Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CastleLayoutManagerEvent(__s3param0, __s3param1 = null, __s3param2 = false, __s3param3 = false) {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0, __s3param2, __s3param3) || this).params = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleLayoutManagerEvent, __s1param0);
  CastleLayoutManagerEvent.__initialize_static_members = function () {
    CastleLayoutManagerEvent.CHANGE_LAYOUTSTATE = "changelayoutstate";
    CastleLayoutManagerEvent.CHANGE_LAYOUTSTATE_FINISHED = "changelayoutstatefinished";
    CastleLayoutManagerEvent.CHANGE_DISPLAYSTATE = "change_displaystate";
    CastleLayoutManagerEvent.CHANGE_LAYOUTSTATE_TIME_TRACKING = "changelayoutstatetimetracking";
    CastleLayoutManagerEvent.SHOW_DIALOG = "show_dialog";
    CastleLayoutManagerEvent.ON_RESIZE = "on_resize";
    CastleLayoutManagerEvent.HIDE_DIALOG = "on_hide";
    CastleLayoutManagerEvent.SHOW_EXTERNAL_DIALOG = "show_external_dialog";
    CastleLayoutManagerEvent.HIDE_EXTERNAL_DIALOG = "hide_external_dialog";
    CastleLayoutManagerEvent.SHOW_SUBLAYER_PANEL = "show_sublayer_panel";
    CastleLayoutManagerEvent.HIDE_SUBLAYER_PANEL = "hide_sublayer_panel";
    CastleLayoutManagerEvent.RING_MENU_SHOWN = "ring_menu_shown";
    CastleLayoutManagerEvent.LOCK_CAMERA = "lock_camera";
    CastleLayoutManagerEvent.SCREEN_CHANGED = "screen_changed";
  };
  return CastleLayoutManagerEvent;
}(createjs.Event);
exports.CastleLayoutManagerEvent = __s0local0;
__s0local0.__initialize_static_members();
