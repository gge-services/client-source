Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function () {
  function TreeNodeUnlockRequirementSkills() {
    this._skillIDs = [];
  }
  TreeNodeUnlockRequirementSkills.prototype.addSingleSkillRequirement = function (__s5param0) {
    this._skillIDs.push(__s5param0);
  };
  TreeNodeUnlockRequirementSkills.prototype.addMultipleSkillRequirements = function (__s7param0) {
    for (var __s7local0 = 0; __s7local0 < __s7param0.length; __s7local0++) {
      this._skillIDs.push(__s7param0[__s7local0]);
    }
  };
  TreeNodeUnlockRequirementSkills.prototype.isUnlocked = function () {
    var __s11local0 = this;
    return this._skillIDs.every(function (__s13param0) {
      return __s11local0.legendSkillData.isSkillActive(__s11local0.legendSkillData.getSceatSkillByID(__s13param0));
    });
  };
  TreeNodeUnlockRequirementSkills.prototype.getUnlockRequirementText = function () {
    var __s15local0 = this;
    var __s15local1 = "";
    this._skillIDs.forEach(function (__s17param0) {
      var __s17local0 = __s15local0.legendSkillData.getSceatSkillByID(__s17param0);
      var __s17local1 = __dep_exact_92d05af59ee2ff30.Localize.text(__s17local0.nameTextID);
      var __s17local2 = __s17local0.level;
      if (__s15local1 != "") {
        __s15local1 += "\n";
      }
      __s15local1 += __dep_exact_92d05af59ee2ff30.Localize.text("upgrade_buildingLevel", [__s17local1, __s17local2]);
    });
    return __s15local1;
  };
  Object.defineProperty(TreeNodeUnlockRequirementSkills.prototype, "legendSkillData", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.legendSkillData;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreeNodeUnlockRequirementSkills.prototype, "showFollowingRequirements", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  return TreeNodeUnlockRequirementSkills;
}();
exports.TreeNodeUnlockRequirementSkills = __s0local0;
