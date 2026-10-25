import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class MDECommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_MOVE_TO_DISTRICT;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
      case ERROR.MOVE_FAILED:
        var parsedResponse = JSON.parse(responseFields[1]);
        CastleModel.areaData.activeArea.updater.parseEMO(parsedResponse);
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
classImplementsInterfaces(MDECommand, "IExecCommand");
