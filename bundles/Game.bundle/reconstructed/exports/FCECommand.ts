import { CastleDispatchingCommand } from "./CastleDispatchingCommand";
import { CastleServerMessageArrivedEvent } from "./CastleServerMessageArrivedEvent";
import { ClientConstSF } from "./ClientConstSF";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class FCECommand extends CastleDispatchingCommand {
  get cmdId() {
    return ClientConstSF.S2C_GET_FEAST_COST_REDUCTION;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  get eventType() {
    return CastleServerMessageArrivedEvent.FCE_ARRIVED;
  }
  set eventType(value) {
    if (!Reflect.set(Object.getPrototypeOf(FCECommand.prototype), "eventType", value, this)) {
      throw new TypeError("Inherited accessor is not writable");
    }
  }
}
classImplementsInterfaces(FCECommand, "IExecCommand");
