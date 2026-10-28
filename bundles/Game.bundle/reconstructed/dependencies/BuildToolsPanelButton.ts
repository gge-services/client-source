import { APanelButton } from "./APanelButton";
import { CastleCharacterYesNoOKDialog } from "./CastleCharacterYesNoOKDialog";
import { CastleCharacterYesNoOKDialogProperties } from "./CastleCharacterYesNoOKDialogProperties";
import { CastleComponent } from "./CastleComponent";
import { CastleModel } from "./CastleModel";
import { CastleRecruitDialog } from "./CastleRecruitDialog";
import { CastleRecruitDialogProperties } from "./CastleRecruitDialogProperties";
import { ClientConstCastle } from "./ClientConstCastle";
import { FactionConst } from "../../../ggs.dll/reconstructed/exports/FactionConst";
import { Iso } from "./Iso";
import { IsoEvent } from "./IsoEvent";
import { IsoObjectEnum } from "./IsoObjectEnum";
import { Localize } from "../../../ggs.dll/reconstructed/exports/Localize";
export class BuildToolsPanelButton extends APanelButton {
  addEventListener() {
    super.addEventListener();
    CastleComponent.controller.addEventListener(IsoEvent.ON_BUILDING_CONSTRUCTION_DONE, this.bindFunction(this.onBuildingCompleted));
  }
  removeEventListener() {
    CastleComponent.controller.removeEventListener(IsoEvent.ON_BUILDING_CONSTRUCTION_DONE, this.bindFunction(this.onBuildingCompleted));
    super.removeEventListener();
  }
  get iconClass() {
    return Library.CastleInterfaceElements.Btn_BuildTools;
  }
  set iconClass(value) {
    super.iconClass = value;
  }
  isButtonEnabled() {
    return CastleComponent.layoutManager.isInMyCastle && (Iso.data.objects.provider.hasFunctionalBuildingByType(IsoObjectEnum.WORKSHOP) || Iso.data.objects.provider.hasFunctionalBuildingByType(IsoObjectEnum.D_WORKSHOP));
  }
  isButtonVisible() {
    return CastleModel.kingdomData.activeKingdomID != FactionConst.KINGDOM_ID;
  }
  getButtonTooltip() {
    if (this.isButtonEnabled()) {
      return "panel_action_buildTools";
    } else {
      return "alert_never_available";
    }
  }
  onButtonClicked() {
    if (CastleModel.militaryData.isBuildingCategoryAllowed(ClientConstCastle.UNIT_BUILDINGTYPE_DWORKSHOP) || CastleModel.militaryData.isBuildingCategoryAllowed(ClientConstCastle.UNIT_BUILDINGTYPE_WORKSHOP)) {
      CastleComponent.dialogHandler.registerDefaultDialogs(CastleRecruitDialog, new CastleRecruitDialogProperties(ClientConstCastle.UNIT_CATEGORY_TOOLS));
    } else {
      CastleComponent.dialogHandler.registerDefaultDialogs(CastleCharacterYesNoOKDialog, new CastleCharacterYesNoOKDialogProperties(Localize.text("generic_alert_watchout"), Localize.text("alert_noWorkshop_copy"), 4, null, null, false));
    }
  }
  onBuildingCompleted(argument0) {
    var __s25local0 = argument0.params[0];
    if (__s25local0.objectType == IsoObjectEnum.WORKSHOP || __s25local0.objectType == IsoObjectEnum.D_WORKSHOP) {
      this.update();
    }
  }
}
