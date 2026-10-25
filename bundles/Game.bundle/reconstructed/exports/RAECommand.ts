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
  executeCommand(__s9param0, __s9param1) {
    switch (__s9param0) {
      case ERROR.ALL_OK:
        CastleDialogHandler.getInstance().registerDialogs(CastleRerollAlienSuccessDialog);
        break;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  }
}
classImplementsInterfaces(RAECommand, "IExecCommand");
