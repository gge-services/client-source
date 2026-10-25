import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
export class AEECommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_ALLIANCE_EMBLEM_EVENT;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        CastleModel.allianceData.parse_AEE(parsedResponse.ACCA);
        if (CastleModel.allianceData.myAllianceVO) {
          CastleModel.allianceData.myAllianceVO.parseFallbackCrest(parsedResponse.ACFB);
        }
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
