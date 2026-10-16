Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __s0local0 = function () {
  function EventSkinColorsDefault() {}
  EventSkinColorsDefault.prototype.getIsoBackgroundColor = function (__s5param0) {
    return __dep_export_ClientConstColor.ClientConstColor.USE_DEFAULT_COLOR;
  };
  EventSkinColorsDefault.prototype.getWorldmapBackgroundColor = function (__s7param0) {
    return __dep_export_ClientConstColor.ClientConstColor.USE_DEFAULT_COLOR;
  };
  return EventSkinColorsDefault;
}();
exports.EventSkinColorsDefault = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEventSkinColors");
