import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class TFMCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_TREASURE_FINISH_MAP;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        CastleModel.treasureHuntData.parse_THI(parsedResponse.thi);
        CastleModel.treasureMapData.parse_TMP(parsedResponse.tmp);
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
classImplementsInterfaces(TFMCommand, "IExecCommand");
