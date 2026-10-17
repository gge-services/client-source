// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 975
// Export: LoggingConstants; preserved source: modules/webpack/classes/ConsoleConnector.js
// Original canonical SHA-256: a8a7ca45c595e83ef9970b3506efff72288051f18265b8503742c0f9911cde09
var __s0local3 = function () {
  function LoggingConstants() {}
  LoggingConstants.FORMAT_DEFAULT_UNIT = "{message}";
  LoggingConstants.FORMAT_DEFAULT_SOS = "{sender.full}: {message}";
  LoggingConstants.FORMAT_DEFAULT_TRACE = "{level} | {sender.full}: {message}";
  LoggingConstants.FORMAT_DEFAULT_SOS_TIME = "{time.ms} [{sender}] {message}";
  LoggingConstants.FORMAT_DEFAULT_TRACE_TIME = "{time.ms} {level}\t[{sender.full}] {message}";
  return LoggingConstants;
}();
exports.LoggingConstants = __s0local3;
