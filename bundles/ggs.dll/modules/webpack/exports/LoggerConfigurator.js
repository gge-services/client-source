Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9d4c85febdc01db4 = require("gge-module:exact_9d4c85febdc01db4");
exports.Loggers = window.Loggers ? window.Loggers : new Map();
exports.LoggerConfigurator = window.LoggerConfigurator ? window.LoggerConfigurator : __dep_exact_9d4c85febdc01db4.CoreLoggerConfigurator;
if (typeof window != "undefined") {
  window.LoggerConfigurator ||= exports.LoggerConfigurator;
  window.Loggers ||= exports.Loggers;
}
var __dep_exact_a99112fb7b17b590 = require("gge-module:exact_a99112fb7b17b590");
exports.cascadeLogLevelFor = __dep_exact_a99112fb7b17b590.cascadeLogLevelFor;
var __dep_exact_9d4c85febdc01db4_1 = require("gge-module:exact_9d4c85febdc01db4");
exports.CoreLoggerConfigurator = __dep_exact_9d4c85febdc01db4_1.CoreLoggerConfigurator;
exports.GLOBAL_LOGGER = __dep_exact_9d4c85febdc01db4_1.GLOBAL_LOGGER;
var __dep_class_CoreLoggerUtil = require("gge-module:class_CoreLoggerUtil");
exports.CoreLoggerUtil = __dep_class_CoreLoggerUtil.CoreLoggerUtil;
var __dep_exact_b38f6783f1595682 = require("gge-module:exact_b38f6783f1595682");
exports.LoggingLevel = __dep_exact_b38f6783f1595682.LoggingLevel;
var __dep_export_getLoggerHierarchyFor = require("gge-module:export_getLoggerHierarchyFor");
exports.LoggerFactory = __dep_export_getLoggerHierarchyFor.LoggerFactory;
var __dep_exact_a99112fb7b17b590_1 = require("gge-module:exact_a99112fb7b17b590");
exports.getLogger = __dep_exact_a99112fb7b17b590_1.getLogger;
exports.setLoggerFormatter = __dep_exact_a99112fb7b17b590_1.setLoggerFormatter;
__dep_exact_9d4c85febdc01db4.CoreLoggerConfigurator.useDefaults();
