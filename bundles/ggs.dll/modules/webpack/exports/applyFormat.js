Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_DARK_TEXT_PASSIVE_LINK_COLOR = require("gge-module:export_DARK_TEXT_PASSIVE_LINK_COLOR");
function getFontFamily(__s1param0, __s1param1) {
  var __s1local0 = __s1param0 && __s1param0.font || __dep_export_DARK_TEXT_PASSIVE_LINK_COLOR.FALLBACK_TEXT_FONT;
  if (__s1param1) {
    if (__s1param1.fontOverwrites.has(__s1local0)) {
      __s1local0 = __s1param1.fontOverwrites.get(__s1local0);
    }
    if (!__s1param1.allowedFonts.has(__s1local0)) {
      __s1local0 = __s1param1.fallbackFont;
    }
  }
  return __s1local0;
}
exports.applyFormat = function applyFormat(__s6param0, __s6param1, __s6param2) {
  try {
    var __s6local0 = typeof __s6param1.color == "string" ? __s6param1.color : __dep_export_DARK_TEXT_PASSIVE_LINK_COLOR.FALLBACK_TEXT_COLOR;
    __s6param0.fillStyle = __s6local0;
    var __s6local1 = function getFontString(__s9param0, __s9param1) {
      var __s9local0 = __s9param0 && __s9param0.size || __dep_export_DARK_TEXT_PASSIVE_LINK_COLOR.FALLBACK_TEXT_SIZE;
      var __s9local1 = getFontFamily(__s9param0, __s9param1);
      return (__s9param0 && __s9param0.italic ? "italic " : "") + (__s9param0 && __s9param0.bold ? "bold " : "") + __s9local0 + "px " + __s9local1;
    }(__s6param1, __s6param2);
    __s6param0.font = __s6local1;
  } catch (__s11local0) {
    console.warn("Was unable to apply the format of this textfield", __s11local0);
  }
};
exports.getFontFamily = getFontFamily;
