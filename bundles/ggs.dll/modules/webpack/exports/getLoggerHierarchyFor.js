Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_CoreLogger = require("gge-module:export_CoreLogger");
var __dep_exact_9d4c85febdc01db4 = require("gge-module:exact_9d4c85febdc01db4");
var __dep_export_LoggerConfigurator = require("gge-module:export_LoggerConfigurator");
var __dep_exact_f4aa3b7953d3a506 = require("gge-module:exact_f4aa3b7953d3a506");
exports.getLoggerHierarchyFor = function (__s1param0 = __dep_exact_9d4c85febdc01db4.GLOBAL_LOGGER) {
  if (__s1param0 === __dep_exact_9d4c85febdc01db4.GLOBAL_LOGGER) {
    return Array.from(__dep_export_LoggerConfigurator.Loggers.values());
  }
  var __s1local0 = new RegExp("\\b" + __s1param0 + "((\\.[a-zA-Z]+)?)*\\b");
  var __s1local1 = [];
  __dep_export_LoggerConfigurator.Loggers.forEach(function (__s4param0, __s4param1) {
    if (__s1local0.test(__s4param1)) {
      __s1local1.push(__s4param0);
    }
  });
  return __s1local1;
};
var __s0local0 = function () {
  function LoggerFactory(__s9param0) {
    this._loggers = __s9param0;
  }
  LoggerFactory.prototype.getLoggerFor = function (__s11param0) {
    __s11param0 = __s11param0 || __dep_exact_9d4c85febdc01db4.GLOBAL_LOGGER;
    if (!this._loggers.get(__s11param0)) {
      this._loggers.set(__s11param0, new __dep_export_CoreLogger.CoreLogger(__s11param0 === __dep_exact_9d4c85febdc01db4.GLOBAL_LOGGER ? __dep_exact_f4aa3b7953d3a506 : __dep_exact_f4aa3b7953d3a506.get(__s11param0)));
    }
    return this._loggers.get(__s11param0);
  };
  LoggerFactory.prototype.getLoggerForObject = function (__s14param0) {
    return this.getLoggerForClass(__s14param0.constructor);
  };
  LoggerFactory.prototype.getLoggerForClass = function (__s16param0) {
    if (!this._loggers.get(__s16param0)) {
      var __s16local0 = this.getQualifiedClassName(__s16param0);
      this._loggers.set(__s16param0, this.getLoggerFor(__s16local0));
    }
    return this._loggers.get(__s16param0);
  };
  LoggerFactory.prototype.getQualifiedClassName = function (__s19param0) {
    if (__s19param0 && __s19param0.constructor) {
      return __s19param0.constructor.name + "";
    } else {
      return __s19param0 + "";
    }
  };
  return LoggerFactory;
}();
exports.LoggerFactory = __s0local0;
