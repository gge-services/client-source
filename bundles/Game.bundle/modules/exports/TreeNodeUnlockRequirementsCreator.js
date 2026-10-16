Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __dep_export_TreeNodeUnlockRequirementBuilding = require("gge-module:export_TreeNodeUnlockRequirementBuilding");
var __dep_export_TreeNodeUnlockRequirementLegendLevel = require("gge-module:export_TreeNodeUnlockRequirementLegendLevel");
var __dep_export_TreeNodeUnlockRequirementSkills = require("gge-module:export_TreeNodeUnlockRequirementSkills");
var __s0local0 = function () {
  function TreeNodeUnlockRequirementsCreator() {}
  TreeNodeUnlockRequirementsCreator.createUnlockRequirements = function (__s5param0) {
    var __s5local0 = [];
    var __s5local1 = __dep_export_CastleXMLUtils.CastleXMLUtils.getStringAttribute("requiredBuildingsCondition", __s5param0, "");
    var __s5local2 = __dep_export_CastleXMLUtils.CastleXMLUtils.createIntListFromAttribute("requiredBuildings", __s5param0);
    if (__s5local1 == TreeNodeUnlockRequirementsCreator.REQUIREMENTS_SEPARATOR) {
      var __s5local3 = [];
      for (var __s5local4 = 0; __s5local4 < __s5local2.length; __s5local4++) {
        if ((__s5local5 = __s5local2[__s5local4]) && __s5local5 > 0) {
          __s5local3.push(__s5local5);
        }
      }
      (__s5local6 = new __dep_export_TreeNodeUnlockRequirementBuilding.TreeNodeUnlockRequirementBuilding()).addMultipleBuildingRequirements(__s5local3);
      __s5local0.push(__s5local6);
    } else {
      for (__s5local4 = 0; __s5local4 < __s5local2.length; __s5local4++) {
        var __s5local5;
        var __s5local6;
        if ((__s5local5 = __s5local2[__s5local4]) && __s5local5 > 0) {
          (__s5local6 = new __dep_export_TreeNodeUnlockRequirementBuilding.TreeNodeUnlockRequirementBuilding()).addSingleBuildingRequirement(__s5local5);
          __s5local0.push(__s5local6);
        }
      }
    }
    var __s5local7 = __dep_export_CastleXMLUtils.CastleXMLUtils.createIntListFromAttribute("requiredSkillIDs", __s5param0);
    if (__s5local7.length > 0) {
      __s5local7.forEach(function (__s16param0) {
        var __s16local0 = new __dep_export_TreeNodeUnlockRequirementSkills.TreeNodeUnlockRequirementSkills();
        __s16local0.addSingleSkillRequirement(__s16param0);
        __s5local0.push(__s16local0);
      });
    }
    var __s5local8 = __dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("requiredLegendLevel", __s5param0);
    if (__s5local8 > 0) {
      __s5local0.push(new __dep_export_TreeNodeUnlockRequirementLegendLevel.TreeNodeUnlockRequirementLegendLevel(__s5local8));
    }
    return __s5local0;
  };
  TreeNodeUnlockRequirementsCreator.REQUIREMENTS_SEPARATOR = "or";
  return TreeNodeUnlockRequirementsCreator;
}();
exports.TreeNodeUnlockRequirementsCreator = __s0local0;
