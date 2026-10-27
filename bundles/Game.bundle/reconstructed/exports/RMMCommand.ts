import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class RMMCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_REFRESH_MERCENARY_MISSION;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
        CastleModel.mercenaryData.waitingForServer = false;
    }
    return false;
  }
}
classImplementsInterfaces(RMMCommand, "IExecCommand");
