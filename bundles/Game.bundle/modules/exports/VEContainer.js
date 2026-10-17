// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: Game.bundle; Webpack module: 320
// Export: VEContainer; preserved source: modules/webpack/exports/AIsoObjectVE.js
// Original canonical SHA-256: 3082a726d23fdf645ce6339d2c6a5c33a9f5ca1e932ed5f4ebea57efdccbe0bd
var __s0local4 = function (__s1param0) {
  function VEContainer(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.veRef = __s3param0;
    if (__dep_exact_81dacdf05bd32292.currentBrowserInfo.isMobile) {
      __s3local0.doubleClickEnabled = true;
    }
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(VEContainer, __s1param0);
  return VEContainer;
}(__s0local1);
exports.VEContainer = __s0local4;
