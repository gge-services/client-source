import { ABGHelper } from "./ABGHelper";
import { CastleCommand } from "./CastleCommand";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
export class ABGPHCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_ABG_GET_POINT_HIGHSCORE;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        if (ABGHelper.abgEvent) {
          ABGHelper.abgEvent.parseOwnRanks(parsedResponse);
        }
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
