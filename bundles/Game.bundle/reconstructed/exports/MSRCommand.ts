import { CastleCommand } from "./CastleCommand";
import { CastleMinuteSkipEvent } from "./CastleMinuteSkipEvent";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class MSRCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_MINUTE_SKIP_RESEARCH;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        CastleModel.researchData.parse_REI(parsedResponse.rei);
        this.controller.dispatchEvent(new CastleMinuteSkipEvent(CastleMinuteSkipEvent.MINUTESKIP_USE_SUCESS));
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
        this.controller.dispatchEvent(new CastleMinuteSkipEvent(CastleMinuteSkipEvent.MINUTESKIP_USE_FAIL));
    }
    return false;
  }
}
classImplementsInterfaces(MSRCommand, "IExecCommand");
