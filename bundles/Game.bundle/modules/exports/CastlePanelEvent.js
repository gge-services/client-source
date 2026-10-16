Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CastlePanelEvent(__s3param0, __s3param1 = null, __s3param2 = false, __s3param3 = false) {
    var __s3local0 = __s1param0.call(this, __s3param0, __s3param2, __s3param3) || this;
    __s3local0.panel = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastlePanelEvent, __s1param0);
  CastlePanelEvent.MOUSE_OVER_PANEL = "mouseoverpanel";
  CastlePanelEvent.MOUSE_OUT_PANEL = "mouseoutpanel";
  CastlePanelEvent.RESOURCE_PANEL_SHOW_SPECIAL_RESOURCES = "RESOURCE_PANEL_SHOW_SPECIAL_RESOURCES";
  CastlePanelEvent.RESOURCE_PANEL_HIDE_SPECIAL_RESOURCES = "RESOURCE_PANEL_HIDE_SPECIAL_RESOURCES";
  return CastlePanelEvent;
}(createjs.Event);
exports.CastlePanelEvent = __s0local0;
