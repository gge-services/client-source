Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_getLoggerHierarchyFor = require("gge-module:export_getLoggerHierarchyFor");
var __dep_export_LoggerConfigurator = require("gge-module:export_LoggerConfigurator");
var __s0local0 = function () {
  function CoreLoggerUtil() {}
  CoreLoggerUtil.init = function (__s5param0 = new __dep_export_getLoggerHierarchyFor.LoggerFactory(__dep_export_LoggerConfigurator.Loggers)) {
    CoreLoggerUtil._factory = __s5param0;
  };
  CoreLoggerUtil.getLogger = function (__s7param0) {
    if (typeof __s7param0 == "string") {
      return CoreLoggerUtil._factory.getLoggerFor(__s7param0);
    } else {
      return CoreLoggerUtil._factory.getLoggerForObject(__s7param0);
    }
  };
  return CoreLoggerUtil;
}();
exports.CoreLoggerUtil = __s0local0;
