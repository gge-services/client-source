// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 975
// Export: LogMeister; preserved source: modules/webpack/classes/ConsoleConnector.js
// Original canonical SHA-256: a8a7ca45c595e83ef9970b3506efff72288051f18265b8503742c0f9911cde09
var __s0local0 = function () {
  function LogMeister() {}
  LogMeister.addLogger = function (__s5param0) {
    __dep_export_LoggerConfigurator.CoreLoggerConfigurator.useDefaults();
    __dep_export_LoggerConfigurator.getLogger("LogMeister").debug("empty implementation just to satisfy current api - behaviour is redirected to LoggingModule");
  };
  LogMeister.clearLoggers = function () {
    __dep_export_LoggerConfigurator.getLogger("LogMeister").debug("empty implementation just to satisfy current api - behaviour is redirected to LoggingModule");
  };
  return LogMeister;
}();
exports.LogMeister = __s0local0;
