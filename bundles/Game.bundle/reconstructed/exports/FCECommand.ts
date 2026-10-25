import { CastleDispatchingCommand } from "./CastleDispatchingCommand";
import { CastleServerMessageArrivedEvent } from "./CastleServerMessageArrivedEvent";
import { ClientConstSF } from "./ClientConstSF";
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
    super.eventType = value;
  }
}
