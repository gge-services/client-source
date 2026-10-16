Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function () {
  function TreeNodeUnlockRequirementUnlockPreviousTier(__s3param0, __s3param1) {
    this._treeID = __s3param0;
    this._tier = __s3param1;
  }
  TreeNodeUnlockRequirementUnlockPreviousTier.prototype.isUnlocked = function () {
    return this._tier == 1 || this.legendSkillData.isTierUnlocked(this._treeID, this._tier - 1);
  };
  TreeNodeUnlockRequirementUnlockPreviousTier.prototype.getUnlockRequirementText = function () {
    return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_legendTemple_prevTierLocked");
  };
  Object.defineProperty(TreeNodeUnlockRequirementUnlockPreviousTier.prototype, "legendSkillData", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.legendSkillData;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreeNodeUnlockRequirementUnlockPreviousTier.prototype, "showFollowingRequirements", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  return TreeNodeUnlockRequirementUnlockPreviousTier;
}();
exports.TreeNodeUnlockRequirementUnlockPreviousTier = __s0local0;
