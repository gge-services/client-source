// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 131
// Export: CoreLoggerConfigurator; preserved source: modules/webpack/internal/exact_9d4c85febdc01db4.js
// Original canonical SHA-256: c11716e7f0df5a11b6e083f7c43485de1585757f3a853f50d9c662190734d4a9
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
