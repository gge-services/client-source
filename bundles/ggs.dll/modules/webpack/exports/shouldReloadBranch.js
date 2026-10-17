Object.defineProperty(exports, "__esModule", {
  value: true
});
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
