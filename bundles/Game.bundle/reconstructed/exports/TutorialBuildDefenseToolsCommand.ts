import { TutorialBuildToolsCommand } from "./TutorialBuildToolsCommand";
export class TutorialBuildDefenseToolsCommand extends TutorialBuildToolsCommand {
  getSelectUnitText() {
    return "tut_produceTools_copy_duplicate";
  }
  getOpenMilitaryMenuText() {
    return "tut_addTools_copy_duplicate";
  }
  getClickMilitarySubMenuText() {
    return "tut_addTools_copy_duplicate";
  }
  getClickOnRecruitDialogCloseText() {
    return "tut_produceTools_copy2_duplicate";
  }
  getConfirmUnitSelectionText() {
    return "tutorial_defensRecruitment_chatBubble";
  }
  getOpenMilitaryMenuTrackingID() {
    return "s_090_030_military_menu_opened";
  }
  getRecruitDialogOpenedTrackingID() {
    return "s_090_040_tools_menu_opened";
  }
  getUnitRecruitmentConfirmedTrackingID() {
    return "s_090_060_defensetools_production_confirmed";
  }
}
