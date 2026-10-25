import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
export class SEECommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_SPECIAL_EVENT_END;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        CastleModel.specialEventData.parse_SEE(parsedResponse);
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return true;
  }
}
