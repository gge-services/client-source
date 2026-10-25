import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
export class CGECommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_CRAFT_GEM;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        CastleModel.gemData.parse_CGE(parsedResponse);
        CastleModel.equipData.parse_ESL(parsedResponse.esl);
        CastleModel.gemData.parse_ESL(parsedResponse.esl);
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
        CastleModel.gemData.cgeError();
    }
    return false;
  }
}
