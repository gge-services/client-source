import { CastleCommand } from "./CastleCommand";
import { ClientConstSF } from "./ClientConstSF";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class AAACommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_ALLIANCE_ANSWER_APPLICATION;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    this.showErrorDialog(statusCode, responseFields);
    return false;
  }
}
classImplementsInterfaces(AAACommand, "IExecCommand");
