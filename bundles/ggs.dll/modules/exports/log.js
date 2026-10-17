// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 134
// Export: log; preserved source: modules/webpack/exports/_extend.js
// Original canonical SHA-256: 904ddcd74133a3f10ecafafb51c9ed08ee75f062e993851215f616d90fcb0656
exports.log = function () {
  console.log("%s - %s", function timestamp() {
    var __s165local0 = new Date();
    var __s165local1 = [pad(__s165local0.getHours()), pad(__s165local0.getMinutes()), pad(__s165local0.getSeconds())].join(":");
    return [__s165local0.getDate(), __s0local3[__s165local0.getMonth()], __s165local1].join(" ");
  }(), exports.format.apply(exports, arguments));
};
