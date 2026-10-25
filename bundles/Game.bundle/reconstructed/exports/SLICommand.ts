import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class SLICommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_STARTUP_LOGINBONUS_INFO;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        CastleModel.startUpBonusData.parse_SLI(parsedResponse);
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
classImplementsInterfaces(SLICommand, "IExecCommand");
