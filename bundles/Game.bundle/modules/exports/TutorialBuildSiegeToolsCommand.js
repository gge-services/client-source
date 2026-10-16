Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function TutorialBuildSiegeToolsCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(TutorialBuildSiegeToolsCommand, __s1param0);
  TutorialBuildSiegeToolsCommand.prototype.getSelectUnitText = function () {
    return "tut_produceSiegeTools_copy";
  };
  TutorialBuildSiegeToolsCommand.prototype.getOpenMilitaryMenuText = function () {
    return "tut_addSiegeTools_copy";
  };
  TutorialBuildSiegeToolsCommand.prototype.getClickMilitarySubMenuText = function () {
    return "tut_addSiegeTools_copy";
  };
  TutorialBuildSiegeToolsCommand.prototype.getClickOnRecruitDialogCloseText = function () {
    return "tut_produceSiegeTools_copy2";
  };
  TutorialBuildSiegeToolsCommand.prototype.getConfirmUnitSelectionText = function () {
    return "tutorial_siegeRecruitment_chatBubble";
  };
  TutorialBuildSiegeToolsCommand.prototype.getOpenMilitaryMenuTrackingID = function () {
    return "s_080_020_military_menu_opened";
  };
  TutorialBuildSiegeToolsCommand.prototype.getRecruitDialogOpenedTrackingID = function () {
    return "s_080_030_tools_menu_opened";
  };
  TutorialBuildSiegeToolsCommand.prototype.getUnitRecruitmentConfirmedTrackingID = function () {
    return "s_080_040_tool_confirmed";
  };
  return TutorialBuildSiegeToolsCommand;
}(require("gge-module:export_TutorialBuildToolsCommand").TutorialBuildToolsCommand);
exports.TutorialBuildSiegeToolsCommand = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ISimpleCommand");
