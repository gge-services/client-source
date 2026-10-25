import { CastleDispatchingCommand } from "./CastleDispatchingCommand";
import { CastleServerMessageArrivedEvent } from "./CastleServerMessageArrivedEvent";
import { ClientConstSF } from "./ClientConstSF";
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
    super.eventType = value;
  }
}
