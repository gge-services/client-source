import { CastleCommand } from "./CastleCommand";
import { CastleHighscoreEvent } from "./CastleHighscoreEvent";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class RWBCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_REDEEM_WEEKLY_HONOR_BONUS;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        CastleModel.highscoreData.parseRWB(parsedResponse);
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
        CastleModel.highscoreData.dispatchEvent(new CastleHighscoreEvent(CastleHighscoreEvent.REWARD_REDEEMED, [false]));
    }
    return false;
  }
}
classImplementsInterfaces(RWBCommand, "IExecCommand");
