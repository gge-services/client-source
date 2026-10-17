// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 133
// Export: LoggerFactory; preserved source: modules/webpack/exports/getLoggerHierarchyFor.js
// Original canonical SHA-256: 2a8a7af9e46ff6c9ba4bb2264355a33e30bef2ed23f119aa92fbec257d1d8463
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
