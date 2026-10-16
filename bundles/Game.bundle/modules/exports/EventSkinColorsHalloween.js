Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __s0local0 = function () {
  function EventSkinColorsHalloween() {}
  EventSkinColorsHalloween.prototype.getIsoBackgroundColor = function (__s5param0) {
    return __dep_export_ClientConstColor.ClientConstColor.USE_DEFAULT_COLOR;
  };
  EventSkinColorsHalloween.prototype.getWorldmapBackgroundColor = function (__s7param0) {
    var __s7local0 = 0;
    switch (__s7param0) {
      case __dep_exact_26a421b704832cff.WorldClassic.KINGDOM_ID:
        __s7local0 = 3229451;
        break;
      default:
        __s7local0 = __dep_export_ClientConstColor.ClientConstColor.USE_DEFAULT_COLOR;
    }
    return __s7local0;
  };
  return EventSkinColorsHalloween;
}();
exports.EventSkinColorsHalloween = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEventSkinColors");
