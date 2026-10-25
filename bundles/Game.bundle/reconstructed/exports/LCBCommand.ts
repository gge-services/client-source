import { CastleCommand } from "./CastleCommand";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleWelcomebackDialog } from "./CastleWelcomebackDialog";
import { CastleWelcomebackDialogProperties } from "./CastleWelcomebackDialogProperties";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { int } from "../../../ggs.dll/reconstructed/exports/int";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class LCBCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.C2S_USER_ACHIEVED_RANKS;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        CastleDialogHandler.getInstance().registerDefaultDialogs(CastleWelcomebackDialog, new CastleWelcomebackDialogProperties(int(parsedResponse.C2)));
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
classImplementsInterfaces(LCBCommand, "IExecCommand");
