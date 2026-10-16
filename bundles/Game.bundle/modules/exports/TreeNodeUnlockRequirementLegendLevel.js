Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function () {
  function TreeNodeUnlockRequirementLegendLevel(__s3param0) {
    this._legendLevel = __s3param0;
  }
  TreeNodeUnlockRequirementLegendLevel.prototype.isUnlocked = function () {
    return __dep_export_CastleModel.CastleModel.userData.userLegendLevel >= this._legendLevel;
  };
  TreeNodeUnlockRequirementLegendLevel.prototype.getUnlockRequirementText = function () {
    return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_legendTemple_unlockLegendLevel", [this._legendLevel]);
  };
  Object.defineProperty(TreeNodeUnlockRequirementLegendLevel.prototype, "legendSkillData", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.legendSkillData;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreeNodeUnlockRequirementLegendLevel.prototype, "showFollowingRequirements", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  return TreeNodeUnlockRequirementLegendLevel;
}();
exports.TreeNodeUnlockRequirementLegendLevel = __s0local0;
