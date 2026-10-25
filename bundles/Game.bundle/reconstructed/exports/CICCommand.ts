import { CastleDispatchingCommand } from "./CastleDispatchingCommand";
import { CastleServerMessageArrivedEvent } from "./CastleServerMessageArrivedEvent";
import { ClientConstSF } from "./ClientConstSF";
export class CICCommand extends CastleDispatchingCommand {
  get cmdId() {
    return ClientConstSF.S2C_CRAFT_CONSTRUCTION_ITEM;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  get eventType() {
    return CastleServerMessageArrivedEvent.CIC_ARRIVED;
  }
  set eventType(value) {
    super.eventType = value;
  }
}
