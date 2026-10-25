import { CastleCommand } from "./CastleCommand";
import { CastleMinuteSkipEvent } from "./CastleMinuteSkipEvent";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class MSKCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_MINUTE_SKIP_KINGDOM_TRANSFER;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        CastleModel.kingdomData.parse_KPI(parsedResponse.kpi);
        this.controller.dispatchEvent(new CastleMinuteSkipEvent(CastleMinuteSkipEvent.MINUTESKIP_USE_SUCESS));
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
        this.controller.dispatchEvent(new CastleMinuteSkipEvent(CastleMinuteSkipEvent.MINUTESKIP_USE_FAIL));
    }
    return false;
  }
}
classImplementsInterfaces(MSKCommand, "IExecCommand");
