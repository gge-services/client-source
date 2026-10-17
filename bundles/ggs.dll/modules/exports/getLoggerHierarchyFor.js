// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 133
// Export: getLoggerHierarchyFor; preserved source: modules/webpack/exports/getLoggerHierarchyFor.js
// Original canonical SHA-256: 2a8a7af9e46ff6c9ba4bb2264355a33e30bef2ed23f119aa92fbec257d1d8463
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
