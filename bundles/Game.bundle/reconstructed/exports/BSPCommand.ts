import { CastleBasicController } from "./CastleBasicController";
import { CastleCommand } from "./CastleCommand";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { SeasonLeagueEvent } from "./SeasonLeagueEvent";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class BSPCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_BUY_SEASON_PASS_PROMOTION;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        CastleBasicController.getInstance().dispatchEvent(new SeasonLeagueEvent(SeasonLeagueEvent.ON_PASS_PROMOTION_BOUGHT));
        return true;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
classImplementsInterfaces(BSPCommand, "IExecCommand");
