import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
export class HCSCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_CANCEL_HOSPITAL_SLOT;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        CastleModel.militaryData.parse_SPL(parsedResponse.spl);
        CastleModel.militaryData.parse_GUI(parsedResponse.gui);
        break;
      case ERROR.INVALID_PARAMETER_VALUE:
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
