import { BasicStandardOkDialogProperties } from "../../../ggs.dll/reconstructed/exports/BasicStandardOkDialogProperties";
import { CastleCommand } from "./CastleCommand";
import { CastleDialogConsts } from "./CastleDialogConsts";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleStandardOkDialog } from "./CastleStandardOkDialog";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { Localize } from "../../../ggs.dll/reconstructed/exports/Localize";
import { PrebuiltCastleResponseEvent } from "./PrebuiltCastleResponseEvent";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class FSCCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_SELECT_FACTION_CAMP_ID;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(__s9param0, __s9param1) {
    if (__s9param0 == ERROR.ALL_OK) {
      this.controller.dispatchEvent(new PrebuiltCastleResponseEvent(false));
      return false;
    }
    this.controller.dispatchEvent(new PrebuiltCastleResponseEvent(true));
    switch (__s9param0) {
      case ERROR.FACTION_LAST_MAN_STANDING_ACTIVE:
        CastleDialogHandler.getInstance().registerDialogsWithType(CastleStandardOkDialog, new BasicStandardOkDialogProperties(Localize.text("generic_alert_information"), Localize.text("alert_factionJoin_lms_triggered ")), false, CastleDialogConsts.PRIORITY_LOW, 0, CastleDialogConsts.DIALOG_TYPE_MODAL);
        break;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  }
}
classImplementsInterfaces(FSCCommand, "IExecCommand");
