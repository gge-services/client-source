import { CastleCommand } from "./CastleCommand";
import { CastleEilandEvent } from "./CastleEilandEvent";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class SIICommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_STORM_ISLANDS_INFO;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        CastleModel.userData.currentIslandRank = parsedResponse.IR;
        CastleModel.userData.aquaPoints = parsedResponse.AP;
        if (CastleModel.allianceData.myAllianceVO) {
          CastleModel.allianceData.myAllianceVO.parse_SII(parsedResponse);
        }
        this.controller.dispatchEvent(new CastleEilandEvent(CastleEilandEvent.STORM_ISLANDS_INFO_RECEIVED));
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
classImplementsInterfaces(SIICommand, "IExecCommand");
