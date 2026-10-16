Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function TutorialBuildDefenseToolsCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(TutorialBuildDefenseToolsCommand, __s1param0);
  TutorialBuildDefenseToolsCommand.prototype.getSelectUnitText = function () {
    return "tut_produceTools_copy_duplicate";
  };
  TutorialBuildDefenseToolsCommand.prototype.getOpenMilitaryMenuText = function () {
    return "tut_addTools_copy_duplicate";
  };
  TutorialBuildDefenseToolsCommand.prototype.getClickMilitarySubMenuText = function () {
    return "tut_addTools_copy_duplicate";
  };
  TutorialBuildDefenseToolsCommand.prototype.getClickOnRecruitDialogCloseText = function () {
    return "tut_produceTools_copy2_duplicate";
  };
  TutorialBuildDefenseToolsCommand.prototype.getConfirmUnitSelectionText = function () {
    return "tutorial_defensRecruitment_chatBubble";
  };
  TutorialBuildDefenseToolsCommand.prototype.getOpenMilitaryMenuTrackingID = function () {
    return "s_090_030_military_menu_opened";
  };
  TutorialBuildDefenseToolsCommand.prototype.getRecruitDialogOpenedTrackingID = function () {
    return "s_090_040_tools_menu_opened";
  };
  TutorialBuildDefenseToolsCommand.prototype.getUnitRecruitmentConfirmedTrackingID = function () {
    return "s_090_060_defensetools_production_confirmed";
  };
  return TutorialBuildDefenseToolsCommand;
}(require("gge-module:export_TutorialBuildToolsCommand").TutorialBuildToolsCommand);
exports.TutorialBuildDefenseToolsCommand = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ISimpleCommand");
