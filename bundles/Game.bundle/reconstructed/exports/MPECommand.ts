import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
export class MPECommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_MERCENARY_PACKAGE;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        CastleModel.mercenaryData.parse_MPE(parsedResponse);
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
        CastleModel.mercenaryData.waitingForServer = false;
    }
    return false;
  }
}
