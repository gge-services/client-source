// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 120
// Export: measurePerformanceBetweenMarks; preserved source: modules/webpack/classes/PerformanceMonitoringService.js
// Original canonical SHA-256: b246d8bd87915b5a1e4c671065774973bc3aa229039305a9229e112caecc4f81
exports.measurePerformanceBetweenMarks = function (__s1param0) {
  performance.measure(__s1param0, __s1param0 + "_start", __s1param0 + "_end");
  var __s1local0 = performance.getEntriesByName(__s1param0)[0];
  __s0local1.debug("measured duration for " + __s1param0 + ": " + __s1local0.duration);
  performance.clearMarks(__s1param0);
  performance.clearMeasures(__s1param0);
  return __s1local0;
};
