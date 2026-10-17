Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_CoreLogger = require("gge-module:export_CoreLogger");
var __dep_exact_f4aa3b7953d3a506 = require("gge-module:exact_f4aa3b7953d3a506");
exports.GLOBAL_LOGGER = "__GLOBAL_LOGGER__";
exports.CoreLoggerConfigurator = {
  useDefaults: function () {
    __dep_exact_f4aa3b7953d3a506.useDefaults({
      logLevel: __dep_exact_f4aa3b7953d3a506.DEBUG,
      formatter: function (__s3param0, __s3param1) {
        __s3param0.unshift("[" + (__s3param1.name || exports.GLOBAL_LOGGER) + "] ");
      }
    });
    return this;
  },
  setFormatter: function (__s5param0) {
    __dep_exact_f4aa3b7953d3a506.setHandler(__dep_exact_f4aa3b7953d3a506.createDefaultHandler({
      formatter: __s5param0
    }));
  },
  setLevel: function (__s7param0) {
    __dep_exact_f4aa3b7953d3a506.setLevel(__dep_export_CoreLogger.LoggingLevelMapper.get(__s7param0));
  }
};
