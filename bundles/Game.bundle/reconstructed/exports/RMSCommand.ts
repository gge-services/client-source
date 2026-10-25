import { CastleCommand } from "./CastleCommand";
import { CastleMessageDataEvent } from "./CastleMessageDataEvent";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class RMSCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_READ_MESSAGES;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        this.controller.dispatchEvent(new CastleMessageDataEvent(CastleMessageDataEvent.NEW_MESSAGE_BODY, [parsedResponse.MTXT, parsedResponse.ABI]));
        break;
      case ERROR.NO_SUCH_MESSAGE:
      case ERROR.MESSAGEDATA_TOO_OLD:
        this.controller.dispatchEvent(new CastleMessageDataEvent(CastleMessageDataEvent.MESSAGE_NO_EXIST));
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
classImplementsInterfaces(RMSCommand, "IExecCommand");
