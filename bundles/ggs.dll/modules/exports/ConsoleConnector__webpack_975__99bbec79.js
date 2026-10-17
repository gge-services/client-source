// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 975
// Export: ConsoleConnector; preserved source: modules/webpack/classes/ConsoleConnector.js
// Original canonical SHA-256: a8a7ca45c595e83ef9970b3506efff72288051f18265b8503742c0f9911cde09
var __s0local2 = function () {
  function ConsoleConnector(__s19param0) {}
  Object.defineProperty(ConsoleConnector.prototype, "format", {
    get: function () {
      __dep_export_LoggerConfigurator.getLogger("ConsoleConnector").debug("empty implementation just to satisfy current api - behaviour is redirected to LoggingModule");
      return "";
    },
    set: function (__s23param0) {
      __dep_export_LoggerConfigurator.getLogger("ConsoleConnector").debug("empty implementation just to satisfy current api - behaviour is redirected to LoggingModule");
    },
    enumerable: true,
    configurable: true
  });
  return ConsoleConnector;
}();
exports.ConsoleConnector = __s0local2;
