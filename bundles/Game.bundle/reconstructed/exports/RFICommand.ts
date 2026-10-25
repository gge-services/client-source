import { CastleDispatchingCommand } from "./CastleDispatchingCommand";
import { CastleServerMessageArrivedEvent } from "./CastleServerMessageArrivedEvent";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
export class RFICommand extends CastleDispatchingCommand {
  get cmdId() {
    return ClientConstSF.S2C_RESEARCH_FINISH_INSTANT;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(__s9param0, __s9param1) {
    switch (__s9param0) {
      case ERROR.ALL_OK:
      case ERROR.NOTHING_TO_SKIP:
        break;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    this.dispatchArrivedEvent(__s9param0, __s9param1);
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
