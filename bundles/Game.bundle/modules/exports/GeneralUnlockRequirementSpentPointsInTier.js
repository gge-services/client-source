Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function () {
  function GeneralUnlockRequirementSpentPointsInTier(__s3param0, __s3param1, __s3param2, __s3param3) {
    this._generalID = __s3param0;
    this._tier = __s3param1;
    this._pointsNeeded = __s3param2;
    this._starLevelNeeded = __s3param3;
  }
  GeneralUnlockRequirementSpentPointsInTier.prototype.getUnlockRequirementText = function () {
    var __s5local0 = __dep_export_CastleModel.CastleModel.generalsData.getSkillPointsSpent(this._generalID);
    var __s5local1 = Math.max(this._pointsNeeded - __s5local0);
    if (__dep_export_CastleModel.CastleModel.generalsData.playerGenerals.get(this._generalID).currentStarLevel < this._starLevelNeeded) {
      return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_generals_skillTree_starRatingNeeded_tooltip", [this._starLevelNeeded]);
    } else if (__s5local1 == 1) {
      return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_generals_skillTree_skillPointsNeeded_allTiers_singular_tooltip", [__s5local1]);
    } else {
      return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_generals_skillTree_skillPointsNeeded_allTiers_tooltip", [__s5local1]);
    }
  };
  GeneralUnlockRequirementSpentPointsInTier.prototype.isUnlocked = function () {
    return __dep_export_CastleModel.CastleModel.generalsData.getSkillPointsSpent(this._generalID) >= this._pointsNeeded && __dep_export_CastleModel.CastleModel.generalsData.playerGenerals.get(this._generalID).currentStarLevel >= this._starLevelNeeded;
  };
  Object.defineProperty(GeneralUnlockRequirementSpentPointsInTier.prototype, "showFollowingRequirements", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  return GeneralUnlockRequirementSpentPointsInTier;
}();
exports.GeneralUnlockRequirementSpentPointsInTier = __s0local0;
