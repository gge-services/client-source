import { CastleDispatchingCommand } from "./CastleDispatchingCommand";
import { CastleServerMessageArrivedEvent } from "./CastleServerMessageArrivedEvent";
import { ClientConstSF } from "./ClientConstSF";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class SURCommand extends CastleDispatchingCommand {
  get cmdId() {
    return ClientConstSF.S2C_GET_SURVEY_INFO;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  get eventType() {
    return CastleServerMessageArrivedEvent.SUR_ARRIVED;
  }
  set eventType(value) {
    if (!Reflect.set(Object.getPrototypeOf(SURCommand.prototype), "eventType", value, this)) {
      throw new TypeError("Inherited accessor is not writable");
    }
  }
}
classImplementsInterfaces(SURCommand, "IExecCommand");
