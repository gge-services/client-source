import { CastleCommand } from "./CastleCommand";
import { CastleServerMessageArrivedEvent } from "./CastleServerMessageArrivedEvent";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { PlayerPerformanceVO } from "./PlayerPerformanceVO";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class GPECommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_GET_PLAYER_EVENT_STATISTICS;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        var __s9local1 = new PlayerPerformanceVO();
        __s9local1.parseData(parsedResponse);
        this.controller.dispatchEvent(new CastleServerMessageArrivedEvent(CastleServerMessageArrivedEvent.PERFORMANCE_PLAYER_ARRIVED, [__s9local1]));
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
classImplementsInterfaces(GPECommand, "IExecCommand");
