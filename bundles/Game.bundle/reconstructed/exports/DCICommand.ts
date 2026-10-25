import { CastleDispatchingCommand } from "./CastleDispatchingCommand";
import { CastleServerMessageArrivedEvent } from "./CastleServerMessageArrivedEvent";
import { ClientConstSF } from "./ClientConstSF";
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
    super.eventType = value;
  }
}
