import { CastleAllianceDataEvent } from "./CastleAllianceDataEvent";
import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
export class BAICommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_GET_ALLIANCE_INVITATION;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        CastleModel.allianceData.parse_BAI(parsedResponse);
        break;
      default:
        CastleModel.allianceData.dispatchEvent(new CastleAllianceDataEvent(CastleAllianceDataEvent.ALLIANCE_INVITATION, null));
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
