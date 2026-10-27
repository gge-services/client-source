import { BasicStandardOkDialogProperties } from "../../../ggs.dll/reconstructed/exports/BasicStandardOkDialogProperties";
import { CastleCommand } from "./CastleCommand";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleStandardOkDialog } from "./CastleStandardOkDialog";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { Localize } from "../../../ggs.dll/reconstructed/exports/Localize";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class TLEPCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_GLOBAL_SERVER_REGISTER_OR_LOGIN_EP;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        break;
      case ERROR.NO_EVENT:
        CastleDialogHandler.getInstance().registerDialogs(CastleStandardOkDialog, new BasicStandardOkDialogProperties(Localize.text("generic_alert_information"), Localize.text("alert_tempServer_serverNotAvailable")));
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
classImplementsInterfaces(TLEPCommand, "IExecCommand");
