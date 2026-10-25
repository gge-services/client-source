import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class OPTCommand extends CastleCommand {
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        CastleModel.settingsData.parse_OPT(parsedResponse);
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return true;
  }
  get cmdId() {
    return ClientConstSF.S2C_OPTION_EVENT;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
}
classImplementsInterfaces(OPTCommand, "IExecCommand");
