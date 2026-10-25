import { CastleBasicController } from "./CastleBasicController";
import { CastleCommand } from "./CastleCommand";
import { CastleHighscoreEvent } from "./CastleHighscoreEvent";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
export class AMACommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_ALLIANCE_MEMBER_AQUA_POINTS_EVENT;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        CastleBasicController.getInstance().dispatchEvent(new CastleHighscoreEvent(CastleHighscoreEvent.AQUAPOINTS_HIGSCORE_ALLY_PLAYER, [parsedResponse]));
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
