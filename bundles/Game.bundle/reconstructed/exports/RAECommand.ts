import { CastleCommand } from "./CastleCommand";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleRerollAlienSuccessDialog } from "./CastleRerollAlienSuccessDialog";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class RAECommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_REPLACE_ALIEN_CAMP;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        CastleDialogHandler.getInstance().registerDialogs(CastleRerollAlienSuccessDialog);
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
classImplementsInterfaces(RAECommand, "IExecCommand");
