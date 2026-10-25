import { BasicStandardOkDialogProperties } from "../../../ggs.dll/reconstructed/exports/BasicStandardOkDialogProperties";
import { CastleCommand } from "./CastleCommand";
import { CastleDialogConsts } from "./CastleDialogConsts";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleStandardOkDialog } from "./CastleStandardOkDialog";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { Localize } from "../../../ggs.dll/reconstructed/exports/Localize";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class SAACommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_ALLIANCE_SEND_APPLICATION;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(__s9param0, __s9param1) {
    switch (__s9param0) {
      case ERROR.ALL_OK:
        CastleDialogHandler.getInstance().registerDialogsWithType(CastleStandardOkDialog, new BasicStandardOkDialogProperties(Localize.text("dialog_newMessage_message"), Localize.text("dialog_newMessage_messageSent")), false, CastleDialogConsts.PRIORITY_LOW, 0, CastleDialogConsts.DIALOG_TYPE_MODAL);
        break;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  }
}
classImplementsInterfaces(SAACommand, "IExecCommand");
