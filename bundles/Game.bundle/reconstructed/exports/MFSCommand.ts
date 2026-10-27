import { CastleCommand } from "./CastleCommand";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class MFSCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_FORWARD_SPY_LOG;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
      case ERROR.ALREADY_HAS_SPY_REPORT:
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
classImplementsInterfaces(MFSCommand, "IExecCommand");
