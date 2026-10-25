import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { CastleServerMessageArrivedEvent } from "./CastleServerMessageArrivedEvent";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class GAECommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_ABG_GET_ALLIANCE_EVENT_STATISTICS;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        CastleModel.allianceBattlegroundData.parseAlliancePerformance(parsedResponse);
        this.controller.dispatchEvent(new CastleServerMessageArrivedEvent(CastleServerMessageArrivedEvent.ABG_PERFORMANCE_ALLIANCE_ARRIVED, [parsedResponse]));
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
classImplementsInterfaces(GAECommand, "IExecCommand");
