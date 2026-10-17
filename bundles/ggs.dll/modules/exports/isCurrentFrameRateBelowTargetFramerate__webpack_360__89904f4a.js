// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 360
// Export: isCurrentFrameRateBelowTargetFramerate; preserved source: modules/webpack/classes/PerformanceMonitoringProxy.js
// Original canonical SHA-256: ff1266446e8c23daa097f0d51e7678503e5ee240c0638e7d5d137e660edef737
exports.isCurrentFrameRateBelowTargetFramerate = function (__s1param0 = 5) {
  return __s0local0.getMeasuredFPS() < __s0local0.framerate - __s1param0;
};
