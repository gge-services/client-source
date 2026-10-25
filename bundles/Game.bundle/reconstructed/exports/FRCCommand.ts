import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
export class FRCCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_REQUEST_FORGE_CRAFT;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        CastleModel.allianceData.myAllianceVO.fillFromParamObject(parsedResponse.ain.A);
        if (parsedResponse.E) {
          CastleModel.equipData.parse_FRC(parsedResponse);
        } else {
          CastleModel.gemData.parse_FRC(parsedResponse);
        }
        CastleModel.equipData.parse_ESL(parsedResponse.esl);
        CastleModel.gemData.parse_ESL(parsedResponse.esl);
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
