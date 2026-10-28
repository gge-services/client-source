import { APanelButton } from "./APanelButton";
import { CastleCharacterYesNoOKDialog } from "./CastleCharacterYesNoOKDialog";
import { CastleCharacterYesNoOKDialogProperties } from "./CastleCharacterYesNoOKDialogProperties";
import { CastleComponent } from "./CastleComponent";
import { CastleLayoutManager } from "./CastleLayoutManager";
import { CastleModel } from "./CastleModel";
import { CastleRecruitDialog } from "./CastleRecruitDialog";
import { CastleRecruitDialogProperties } from "./CastleRecruitDialogProperties";
import { ClientConstCastle } from "./ClientConstCastle";
import { FactionConst } from "../../../ggs.dll/reconstructed/exports/FactionConst";
import { Iso } from "./Iso";
import { IsoObjectEnum } from "./IsoObjectEnum";
import { Localize } from "../../../ggs.dll/reconstructed/exports/Localize";
export class RecruitPanelButton extends APanelButton {
  updateOnVisible() {
    this.iconMc.gotoAndStop(CastleModel.kingdomData.activeKingdomID == FactionConst.KINGDOM_ID ? 2 : 1);
  }
  get iconClass() {
    return Library.CastleInterfaceElements.Btn_Recruit;
  }
  set iconClass(value) {
    super.iconClass = value;
  }
  getButtonTooltip() {
    if (this.isButtonEnabled()) {
      if (CastleModel.kingdomData.activeKingdomID == FactionConst.KINGDOM_ID) {
        return "hire";
      } else {
        return "panel_action_recruit";
      }
    } else {
      return "alert_never_available";
    }
  }
  isButtonEnabled() {
    return !!Iso.data && CastleComponent.layoutManager.isInMyCastle && !CastleComponent.layoutManager.isInMyOccupiedCastle && (Iso.data.objects.provider.hasFunctionalBuildingByType(IsoObjectEnum.BARRACKS) || Iso.data.objects.provider.hasFunctionalBuildingByType(IsoObjectEnum.FACTION_BARRACKS));
  }
  isButtonVisible() {
    return CastleComponent.layoutManager.currentState == CastleLayoutManager.STATE_ISO;
  }
  onButtonClicked() {
    if (CastleModel.areaData.activeArea.isFactionCamp ? CastleModel.militaryData.isBuildingCategoryAllowed(ClientConstCastle.UNIT_BUILDINGTYPE_FACTION_BARRACKS) : CastleModel.militaryData.isBuildingCategoryAllowed(ClientConstCastle.UNIT_BUILDINGTYPE_BARRACKS)) {
      CastleComponent.dialogHandler.registerDefaultDialogs(CastleRecruitDialog, new CastleRecruitDialogProperties(CastleModel.areaData.activeArea.isFactionCamp ? ClientConstCastle.UNIT_CATEGORY_AUXILIARIES : ClientConstCastle.UNIT_CATEGORY_SOLDIERS));
    } else {
      CastleComponent.dialogHandler.registerDefaultDialogs(CastleCharacterYesNoOKDialog, new CastleCharacterYesNoOKDialogProperties(Localize.text("generic_alert_watchout"), Localize.text("alert_noBaracks_copy"), 4, null, null, false));
    }
  }
}
