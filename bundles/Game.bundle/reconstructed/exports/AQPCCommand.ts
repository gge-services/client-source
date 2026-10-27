import { AllianceDivisionContributionsEvent } from "./AllianceDivisionContributionsEvent";
import { CastleBasicController } from "./CastleBasicController";
import { CastleCommand } from "./CastleCommand";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class AQPCCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_ALLIANCE_DIVISION_PLAYER_CONTRIBUTION;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var __s9local0 = JSON.parse(responseFields[1]).AQPC;
        CastleBasicController.getInstance().dispatchEvent(new AllianceDivisionContributionsEvent(AllianceDivisionContributionsEvent.ALLIANCE_CONTRIBUTIONS_RECEIVED, __s9local0));
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
classImplementsInterfaces(AQPCCommand, "IExecCommand");
