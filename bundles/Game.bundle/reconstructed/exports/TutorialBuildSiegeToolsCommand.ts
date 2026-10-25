import { TutorialBuildToolsCommand } from "./TutorialBuildToolsCommand";
export class TutorialBuildSiegeToolsCommand extends TutorialBuildToolsCommand {
  getSelectUnitText() {
    return "tut_produceSiegeTools_copy";
  }
  getOpenMilitaryMenuText() {
    return "tut_addSiegeTools_copy";
  }
  getClickMilitarySubMenuText() {
    return "tut_addSiegeTools_copy";
  }
  getClickOnRecruitDialogCloseText() {
    return "tut_produceSiegeTools_copy2";
  }
  getConfirmUnitSelectionText() {
    return "tutorial_siegeRecruitment_chatBubble";
  }
  getOpenMilitaryMenuTrackingID() {
    return "s_080_020_military_menu_opened";
  }
  getRecruitDialogOpenedTrackingID() {
    return "s_080_030_tools_menu_opened";
  }
  getUnitRecruitmentConfirmedTrackingID() {
    return "s_080_040_tool_confirmed";
  }
}
