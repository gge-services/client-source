import { C2SJoinCastleVO } from "./C2SJoinCastleVO";
import { CastleModel } from "./CastleModel";
import { CastleRecruitDialog } from "./CastleRecruitDialog";
import { CastleRecruitDialogUnits } from "./CastleRecruitDialogUnits";
import { ClientConstCastle } from "./ClientConstCastle";
import { RecruitPanelButton } from "./RecruitPanelButton";
import { TutorialAbstractMilitaryCommand } from "./TutorialAbstractMilitaryCommand";
import { WorldClassic } from "../../../ggs.dll/reconstructed/exports/WorldClassic";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class TutorialRecruitUnitsCommand extends TutorialAbstractMilitaryCommand {
  getButtonClass() {
    return RecruitPanelButton;
  }
  goToMainCastle() {
    if (this.layoutManager.isInMyCastle) {
      this.showButton();
    } else {
      if (CastleModel.worldmapData) {
        CastleModel.worldmapData.allowGAARequests = false;
      }
      this.tutorialController.waitForJoinCastle(this.bindFunction(this.showButton));
      CastleModel.smartfoxClient.sendCommandVO(new C2SJoinCastleVO(C2SJoinCastleVO.MY_CASTLE, WorldClassic.KINGDOM_ID));
    }
  }
  waitForDialog() {
    this.layoutManager.getDialog(CastleRecruitDialog).changeCategoryWithParams(ClientConstCastle.UNIT_CATEGORY_SOLDIERS, [ClientConstCastle.UNIT_CATEGORY_SOLDIERS, CastleRecruitDialogUnits.FILTER_UNITS_ALL]);
    this.waitForSelectUnit();
  }
  get selectUnitManual() {
    return true;
  }
  set selectUnitManual(value) {
    if (!Reflect.set(Object.getPrototypeOf(TutorialRecruitUnitsCommand.prototype), "selectUnitManual", value, this)) {
      throw new TypeError("Inherited accessor is not writable");
    }
  }
  getSelectUnitText() {
    return "tut_recruit_SelectUnit_copy_duplicate";
  }
  getOpenMilitaryMenuText() {
    return "tut_recruit_OpenSubmenu_copy_duplicate";
  }
  getClickMilitarySubMenuText() {
    return "tut_recruit_OpenSubmenu_copy_duplicate";
  }
  getClickOnRecruitDialogCloseText() {
    return "tut_recruit_running_copy_duplicate";
  }
  getConfirmUnitSelectionText() {
    return "tutorial_autoRecruitment_chatBubble";
  }
  getOpenMilitaryMenuTrackingID() {
    return "s_060_030_military_menu_opened";
  }
  getRecruitDialogOpenedTrackingID() {
    return "s_060_040_recruitment_menu_opened";
  }
  getUnitRecruitmentConfirmedTrackingID() {
    return "s_060_050_unit_recruitment_confirmed";
  }
}
classImplementsInterfaces(TutorialRecruitUnitsCommand, "ISimpleCommand");
