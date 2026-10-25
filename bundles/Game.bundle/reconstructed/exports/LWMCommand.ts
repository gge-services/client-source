import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class LWMCommand extends CastleCommand {
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        CastleModel.luckyWheelData.parseLWM(parsedResponse);
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
  get cmdId() {
    return ClientConstSF.S2C_LUCKY_WHEEL_CHANGE_MODE;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
}
classImplementsInterfaces(LWMCommand, "IExecCommand");
