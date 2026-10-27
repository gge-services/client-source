import { CastleCommand } from "./CastleCommand";
import { CastleMinuteSkipEvent } from "./CastleMinuteSkipEvent";
import { ClientConstSF } from "./ClientConstSF";
import { debug } from "../../../ggs.dll/reconstructed/exports/debug";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class SCICommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_MINUTE_SKIP_CRAFTING;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        debug("===== minute skip answer!");
        debug(responseFields ? responseFields.join(", ") : "null");
        this.controller.dispatchEvent(new CastleMinuteSkipEvent(CastleMinuteSkipEvent.MINUTESKIP_USE_SUCESS));
        break;
      default:
        this.controller.dispatchEvent(new CastleMinuteSkipEvent(CastleMinuteSkipEvent.MINUTESKIP_USE_FAIL));
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
classImplementsInterfaces(SCICommand, "IExecCommand");
