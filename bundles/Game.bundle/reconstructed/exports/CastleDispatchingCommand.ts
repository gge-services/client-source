import { AbstractMethodError } from "./AbstractMethodError";
import { CastleCommand } from "./CastleCommand";
import { CastleServerMessageArrivedEvent } from "./CastleServerMessageArrivedEvent";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
export class CastleDispatchingCommand extends CastleCommand {
  executeCommand(__s5param0, __s5param1) {
    switch (__s5param0) {
      case ERROR.ALL_OK:
        break;
      default:
        this.showErrorDialog(__s5param0, __s5param1);
    }
    this.dispatchArrivedEvent(__s5param0, __s5param1);
    return false;
  }
  dispatchArrivedEvent(__s8param0, __s8param1) {
    this.controller.dispatchEvent(new CastleServerMessageArrivedEvent(this.eventType, [__s8param0, __s8param1]));
  }
  get eventType() {
    throw new AbstractMethodError();
  }
}
