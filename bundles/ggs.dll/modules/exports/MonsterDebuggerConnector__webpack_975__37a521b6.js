// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 975
// Export: MonsterDebuggerConnector; preserved source: modules/webpack/classes/ConsoleConnector.js
// Original canonical SHA-256: a8a7ca45c595e83ef9970b3506efff72288051f18265b8503742c0f9911cde09
var __s0local1 = function () {
  function MonsterDebuggerConnector(__s11param0) {}
  Object.defineProperty(MonsterDebuggerConnector.prototype, "format", {
    get: function () {
      __dep_export_LoggerConfigurator.getLogger("ConsoleConnector").debug("empty implementation just to satisfy current api - behaviour is redirected to LoggingModule");
      return "";
    },
    set: function (__s15param0) {
      __dep_export_LoggerConfigurator.getLogger("ConsoleConnector").debug("empty implementation just to satisfy current api - behaviour is redirected to LoggingModule");
    },
    enumerable: true,
    configurable: true
  });
  return MonsterDebuggerConnector;
}();
exports.MonsterDebuggerConnector = __s0local1;
