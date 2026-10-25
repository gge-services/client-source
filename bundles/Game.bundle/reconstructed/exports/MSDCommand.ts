import { CastleCommand } from "./CastleCommand";
import { CastleMinuteSkipEvent } from "./CastleMinuteSkipEvent";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { SkipCooldownEvent } from "./SkipCooldownEvent";
import { WorldmapObjectFactory } from "./WorldmapObjectFactory";
export class MSDCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_MINUTE_SKIP_DUNGEON;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        var __s9local1 = WorldmapObjectFactory.parseWorldMapArea(parsedResponse.AI);
        this.controller.dispatchEvent(new SkipCooldownEvent(SkipCooldownEvent.UPDATE, __s9local1));
        this.controller.dispatchEvent(new CastleMinuteSkipEvent(CastleMinuteSkipEvent.MINUTESKIP_USE_SUCESS));
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
        this.controller.dispatchEvent(new CastleMinuteSkipEvent(CastleMinuteSkipEvent.MINUTESKIP_USE_FAIL));
    }
    return false;
  }
}
