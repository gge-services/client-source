Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function () {
  function TreeNodeUnlockRequirementSpentPointsInPreviousTier(__s3param0, __s3param1) {
    this._treeID = __s3param0;
    this._tier = __s3param1;
  }
  TreeNodeUnlockRequirementSpentPointsInPreviousTier.prototype.isUnlocked = function () {
    return this._tier == 1 || __dep_exact_26a421b704832cff.LegendSkillConst.isTierUnlocked(this._tier, this.legendSkillData.getSpentPoints(this._treeID, this._tier - 1));
  };
  TreeNodeUnlockRequirementSpentPointsInPreviousTier.prototype.getUnlockRequirementText = function () {
    var __s7local0 = Math.round(this.legendSkillData.pointsLeftToUnlockTier(this._treeID, this._tier));
    return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_legendTemple_tierLocked", [__s7local0]);
  };
  Object.defineProperty(TreeNodeUnlockRequirementSpentPointsInPreviousTier.prototype, "legendSkillData", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.legendSkillData;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreeNodeUnlockRequirementSpentPointsInPreviousTier.prototype, "showFollowingRequirements", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  return TreeNodeUnlockRequirementSpentPointsInPreviousTier;
}();
exports.TreeNodeUnlockRequirementSpentPointsInPreviousTier = __s0local0;
