import { CastleCommand } from "./CastleCommand";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { TempServerHelper } from "./TempServerHelper";
export class TSHCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_TEMPORARY_SERVER_HIGHSCORE;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        if (TempServerHelper.tmpServerEvent) {
          TempServerHelper.tmpServerEvent.parseOwnRanks(parsedResponse);
        }
        return true;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
