import { CastleCommand } from "./CastleCommand";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleNoMoneyC2Dialog } from "./CastleNoMoneyC2Dialog";
import { CastleNoMoneyC2DialogProperties } from "./CastleNoMoneyC2DialogProperties";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { SkipCooldownEvent } from "./SkipCooldownEvent";
import { WorldmapObjectFactory } from "./WorldmapObjectFactory";
export class SDCCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_SKIP_DUNGEON_COOLDOWN;
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
        break;
      case ERROR.NOT_ENOUGH_CURRENCY2:
        CastleDialogHandler.getInstance().registerDefaultDialogs(CastleNoMoneyC2Dialog, new CastleNoMoneyC2DialogProperties());
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
