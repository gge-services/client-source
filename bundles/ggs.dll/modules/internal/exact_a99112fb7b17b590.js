Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_getLoggerHierarchyFor = require("gge-module:export_getLoggerHierarchyFor");
var __dep_export_LoggerConfigurator = require("gge-module:export_LoggerConfigurator");
var __s0local0 = new __dep_export_getLoggerHierarchyFor.LoggerFactory(__dep_export_LoggerConfigurator.Loggers);
exports.getLogger = function getLogger(__s1param0) {
  return __s0local0.getLoggerFor(__s1param0);
};
exports.setLoggerFormatter = function setLoggerFormatter(__s3param0) {
  __dep_export_LoggerConfigurator.LoggerConfigurator.setFormatter(__s3param0);
};
exports.cascadeLogLevelFor = function cascadeLogLevelFor(__s5param0, __s5param1) {
  __dep_export_getLoggerHierarchyFor.getLoggerHierarchyFor(__s5param0).forEach(function (__s7param0) {
    __s7param0.setLevel(__s5param1);
  });
};
