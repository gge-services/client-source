import { CastleAllianceDataEvent } from "./CastleAllianceDataEvent";
import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class SAWCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_ALLIANCE_SET_AUTO_WAR;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        CastleModel.allianceData.myAllianceVO.autoWarOn = parsedResponse.AW == 1;
        CastleModel.allianceData.dispatchEvent(new CastleAllianceDataEvent(CastleAllianceDataEvent.ALLIANCE_AUTO_WAR_UPDATED));
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
classImplementsInterfaces(SAWCommand, "IExecCommand");
