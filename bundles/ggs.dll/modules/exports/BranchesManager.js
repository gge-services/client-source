Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = require("gge-module:export_LoggerConfigurator").getLogger("WorldAssignment.BranchesManager");
var __s0local1 = function () {
  function BranchesManager() {
    this.branches = [];
  }
  BranchesManager.prototype.getBranchByZoneId = function (__s5param0) {
    var __s5local0;
    __s0local0.debug("BranchesManager.getBranchByZoneId: ", __s5param0);
    var __s5local1 = null;
    for (var __s5local2 = 0; __s5local2 < this.branches.length; __s5local2++) {
      __s5local0 = this.branches[__s5local2];
      __s0local0.debug("looping branch: ", __s5local0.zones);
      if (__s5local0.zones.indexOf(__s5param0) > -1) {
        return __s5local0;
      }
      if (!__s5local1 && __s5local0.id === "default") {
        __s5local1 = __s5local0;
      }
    }
    return __s5local1;
  };
  BranchesManager.prototype.getBranchByBranchId = function (__s11param0) {
    var __s11local0;
    for (var __s11local1 = 0; __s11local1 < this.branches.length; __s11local1++) {
      if ((__s11local0 = this.branches[__s11local1]).id === __s11param0) {
        return __s11local0;
      }
    }
    return null;
  };
  Object.defineProperty(BranchesManager.prototype, "currentBranch", {
    get: function () {
      return this._currentBranch;
    },
    set: function (__s18param0) {
      this._currentBranch = __s18param0;
    },
    enumerable: true,
    configurable: true
  });
  return BranchesManager;
}();
exports.BranchesManager = __s0local1;
