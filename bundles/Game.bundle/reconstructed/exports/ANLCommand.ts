import { CastleCommand } from "./CastleCommand";
import { CastleMessageDataEvent } from "./CastleMessageDataEvent";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class ANLCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_ALLIANCE_NEWSLETTER;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        this.controller.dispatchEvent(new CastleMessageDataEvent(CastleMessageDataEvent.SENT_OK));
        return true;
      default:
        this.showErrorDialog(statusCode, responseFields);
        this.controller.dispatchEvent(new CastleMessageDataEvent(CastleMessageDataEvent.SENT_ERROR));
    }
    return false;
  }
}
classImplementsInterfaces(ANLCommand, "IExecCommand");
