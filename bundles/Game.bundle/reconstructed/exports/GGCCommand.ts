import { CastleCommand } from "./CastleCommand";
import { ClientConstCastle } from "./ClientConstCastle";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class GGCCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_GET_GAME_CONSTANTS;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        ClientConstCastle.setWorldmapSizeViaGGC(parsedResponse.SX, parsedResponse.SY);
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
classImplementsInterfaces(GGCCommand, "IExecCommand");
