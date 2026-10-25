import { CastleDispatchingCommand } from "./CastleDispatchingCommand";
import { CastleServerMessageArrivedEvent } from "./CastleServerMessageArrivedEvent";
import { ClientConstSF } from "./ClientConstSF";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class DCICommand extends CastleDispatchingCommand {
  get cmdId() {
    return ClientConstSF.S2C_DISASSEMBLE_CONSTRUCTION_ITEM;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  get eventType() {
    return CastleServerMessageArrivedEvent.DCI_ARRIVED;
  }
  set eventType(value) {
    if (!Reflect.set(Object.getPrototypeOf(DCICommand.prototype), "eventType", value, this)) {
      throw new TypeError("Inherited accessor is not writable");
    }
  }
}
classImplementsInterfaces(DCICommand, "IExecCommand");
