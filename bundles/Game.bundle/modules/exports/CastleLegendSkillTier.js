Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_ACastleLegendSkillTreeNode = require("gge-module:export_ACastleLegendSkillTreeNode");
var __dep_export_CastleLegendSkillGroup = require("gge-module:export_CastleLegendSkillGroup");
var __dep_export_CastleSceatSkillVO = require("gge-module:export_CastleSceatSkillVO");
var __dep_export_TreeNodeUnlockRequirementUnlockPreviousTier = require("gge-module:export_TreeNodeUnlockRequirementUnlockPreviousTier");
var __dep_export_TreeNodeUnlockRequirementSpentPointsInPreviousTier = require("gge-module:export_TreeNodeUnlockRequirementSpentPointsInPreviousTier");
var __s0local0 = function (__s1param0) {
  function CastleLegendSkillTier(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0._isPreview = true;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleLegendSkillTier, __s1param0);
  CastleLegendSkillTier.prototype.insertSkill = function (__s5param0) {
    __s1param0.prototype.insertSkill.call(this, __s5param0);
    if (this._unlockRequirements.length == 0 && __s5param0.skillTreeID <= 2) {
      this.addUnlockRequirement(new __dep_export_TreeNodeUnlockRequirementUnlockPreviousTier.TreeNodeUnlockRequirementUnlockPreviousTier(__s5param0.skillTreeID, __s5param0.tier));
      this.addUnlockRequirement(new __dep_export_TreeNodeUnlockRequirementSpentPointsInPreviousTier.TreeNodeUnlockRequirementSpentPointsInPreviousTier(__s5param0.skillTreeID, __s5param0.tier));
    }
    if (__s5param0 instanceof __dep_export_CastleSceatSkillVO.CastleSceatSkillVO && __s5param0.sortOrder > 0) {
      this._childs = this._childs.sort(function (__s9param0, __s9param1) {
        return __s9param0.sortOrder - __s9param1.sortOrder;
      });
    }
    this._isPreview &&= __s5param0.isPreview;
  };
  CastleLegendSkillTier.prototype.childIDProperty = function (__s11param0) {
    return __s11param0.skillGroupID;
  };
  Object.defineProperty(CastleLegendSkillTier.prototype, "childNodeClass", {
    get: function () {
      return __dep_export_CastleLegendSkillGroup.CastleLegendSkillGroup;
    },
    set: function (__s15param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ACastleLegendSkillTreeNode.ACastleLegendSkillTreeNode.prototype, "childNodeClass").set.call(this, __s15param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillTier.prototype, "isPreview", {
    get: function () {
      return this._isPreview;
    },
    enumerable: true,
    configurable: true
  });
  return CastleLegendSkillTier;
}(__dep_export_ACastleLegendSkillTreeNode.ACastleLegendSkillTreeNode);
exports.CastleLegendSkillTier = __s0local0;
