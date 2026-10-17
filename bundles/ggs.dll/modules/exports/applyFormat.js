// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 240
// Export: applyFormat; preserved source: modules/webpack/exports/applyFormat.js
// Original canonical SHA-256: b76a97c07811629e915e93d04676c75a8d45664d36aa211a181824ab868d94e4
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
