import { CastleDispatchingCommand } from "./CastleDispatchingCommand";
import { CastleServerMessageArrivedEvent } from "./CastleServerMessageArrivedEvent";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class RFICommand extends CastleDispatchingCommand {
  get cmdId() {
    return ClientConstSF.S2C_RESEARCH_FINISH_INSTANT;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
      case ERROR.NOTHING_TO_SKIP:
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    this.dispatchArrivedEvent(statusCode, responseFields);
    return false;
  }
  get eventType() {
    return CastleServerMessageArrivedEvent.RFI_ARRIVED;
  }
  set eventType(value) {
    if (!Reflect.set(Object.getPrototypeOf(RFICommand.prototype), "eventType", value, this)) {
      throw new TypeError("Inherited accessor is not writable");
    }
  }
}
classImplementsInterfaces(RFICommand, "IExecCommand");
