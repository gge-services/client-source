// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 161
// Export: shouldReloadBranch; preserved source: modules/webpack/exports/shouldReloadBranch.js
// Original canonical SHA-256: 403b32579e877b764ecc45e328358dcab729b27803f2602fab0c026c780b2cb2
exports.shouldReloadBranch = function (__s9param0) {
  __s9local0 = window.ggs.worldAssignment.facade;
  __s9local1 = __s9param0.zoneId.toString();
  __s9local2 = __s9local0.currentBranch;
  return (__s9local3 = __s9local0.getBranchByZoneId(__s9local1)) && __s9local3 != __s9local2;
  var __s9local0;
  var __s9local1;
  var __s9local2;
  var __s9local3;
};
