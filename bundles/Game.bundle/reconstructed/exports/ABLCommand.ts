import { CastleAllianceDataEvent } from "./CastleAllianceDataEvent";
import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
export class ABLCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_ALLIANCE_BUFF_LIST;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        CastleModel.allianceData.parse_ABL(parsedResponse);
        break;
      default:
        CastleModel.allianceData.dispatchEvent(new CastleAllianceDataEvent(CastleAllianceDataEvent.ALLIANCEDATA_UPDATED, null));
        CastleModel.allianceData.dispatchEvent(new CastleAllianceDataEvent(CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED, null));
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
