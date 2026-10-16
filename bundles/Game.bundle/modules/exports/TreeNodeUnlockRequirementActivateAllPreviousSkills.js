Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function () {
  function TreeNodeUnlockRequirementActivateAllPreviousSkills(__s3param0, __s3param1) {
    this._treeID = __s3param0;
    this._tier = __s3param1;
  }
  TreeNodeUnlockRequirementActivateAllPreviousSkills.prototype.isUnlocked = function () {
    if (this._tier == 1) {
      return true;
    }
    for (var __s5local0 = this.legendSkillData.getSkillTreeNode(this._treeID, this._tier - 1), __s5local1 = 0; __s5local1 < __s5local0.childs.length; __s5local1++) {
      var __s5local2 = __s5local0.childs[__s5local1];
      var __s5local3 = __s5local2.childs[__s5local2.childs.length - 1];
      if (!this.legendSkillData.isSkillActive(__s5local3.legendSkillVO)) {
        return false;
      }
    }
    return true;
  };
  TreeNodeUnlockRequirementActivateAllPreviousSkills.prototype.getUnlockRequirementText = function () {
    return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_legendTemple_unlockTier");
  };
  Object.defineProperty(TreeNodeUnlockRequirementActivateAllPreviousSkills.prototype, "legendSkillData", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.legendSkillData;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreeNodeUnlockRequirementActivateAllPreviousSkills.prototype, "showFollowingRequirements", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  return TreeNodeUnlockRequirementActivateAllPreviousSkills;
}();
exports.TreeNodeUnlockRequirementActivateAllPreviousSkills = __s0local0;
