import { APanelButton } from "./APanelButton";
import { CastleCharacterYesNoOKDialog } from "./CastleCharacterYesNoOKDialog";
import { CastleCharacterYesNoOKDialogProperties } from "./CastleCharacterYesNoOKDialogProperties";
import { CastleComponent } from "./CastleComponent";
import { CastleDefenceDialog } from "./CastleDefenceDialog";
import { CastleDefenceDialogProperties } from "./CastleDefenceDialogProperties";
import { CastleModel } from "./CastleModel";
import { ClientConstLevelRestrictions } from "./ClientConstLevelRestrictions";
import { DefenseConst } from "../../../ggs.dll/reconstructed/exports/DefenseConst";
import { Localize } from "../../../ggs.dll/reconstructed/exports/Localize";
export class DefencePanelButton extends APanelButton {
  addEventListener() {
    super.addEventListener();
    this.listenOnXPChanged();
  }
  get iconClass() {
    return Library.CastleInterfaceElements.Btn_Defence;
  }
  set iconClass(value) {
    super.iconClass = value;
  }
  isButtonEnabled() {
    return (CastleComponent.layoutManager.isInMyCastle || !!CastleModel.areaData && !!CastleModel.areaData.activeArea && !!CastleModel.areaData.activeAreaInfo && CastleModel.areaData.activeAreaInfo.isConqueredByMe) && CastleModel.userData.hasLevelFor(ClientConstLevelRestrictions.MIN_LEVEL_DEFENCE_DIALOG);
  }
  getButtonTooltip() {
    return "panel_action_defence";
  }
  onButtonClicked() {
    if (CastleModel.userData.userCanOpenDefenceScreen) {
      CastleComponent.dialogHandler.registerDefaultDialogs(CastleDefenceDialog, new CastleDefenceDialogProperties(CastleModel.areaData.activeAreaInfo, DefenseConst.TOOL_TYPE_WALL));
    } else {
      CastleComponent.dialogHandler.registerDefaultDialogs(CastleCharacterYesNoOKDialog, new CastleCharacterYesNoOKDialogProperties(Localize.text("generic_alert_watchout"), Localize.text("panel_action_levelBlockDefencescreen"), 4, null, null, false));
    }
  }
}
