// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 161
// Export: BranchesModel; preserved source: modules/webpack/exports/shouldReloadBranch.js
// Original canonical SHA-256: 403b32579e877b764ecc45e328358dcab729b27803f2602fab0c026c780b2cb2
var __s0local0 = function () {
  function BranchesModel() {}
  BranchesModel.prototype.branchByZoneId = function (__s5param0) {
    return window.ggs.worldAssignment.facade.getBranchByZoneId(__s5param0);
  };
  Object.defineProperty(BranchesModel.prototype, "currentBranch", {
    get: function () {
      return window.ggs.worldAssignment.facade.currentBranch;
    },
    enumerable: true,
    configurable: true
  });
  return BranchesModel;
}();
exports.BranchesModel = __s0local0;
