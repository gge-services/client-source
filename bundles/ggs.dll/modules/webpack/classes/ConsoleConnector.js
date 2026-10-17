Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_LoggerConfigurator = require("gge-module:export_LoggerConfigurator");
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
