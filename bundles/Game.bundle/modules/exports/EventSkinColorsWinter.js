Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __s0local0 = function () {
  function EventSkinColorsWinter() {}
  EventSkinColorsWinter.prototype.getIsoBackgroundColor = function (__s5param0) {
    var __s5local0 = 0;
    switch (__s5param0) {
      case __dep_exact_26a421b704832cff.WorldClassic.KINGDOM_ID:
        __s5local0 = 15987442;
        break;
      default:
        __s5local0 = __dep_export_ClientConstColor.ClientConstColor.USE_DEFAULT_COLOR;
    }
    return __s5local0;
  };
  EventSkinColorsWinter.prototype.getWorldmapBackgroundColor = function (__s8param0) {
    var __s8local0 = 0;
    switch (__s8param0) {
      case __dep_exact_26a421b704832cff.WorldClassic.KINGDOM_ID:
        __s8local0 = 15596025;
        break;
      default:
        __s8local0 = __dep_export_ClientConstColor.ClientConstColor.USE_DEFAULT_COLOR;
    }
    return __s8local0;
  };
  return EventSkinColorsWinter;
}();
exports.EventSkinColorsWinter = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEventSkinColors");
