import { CastleBasicController } from "./CastleBasicController";
import { CastleCommand } from "./CastleCommand";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { SeasonLeagueEvent } from "./SeasonLeagueEvent";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class BEPCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_BUY_SEASON_PASS_EVENT;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(__s9param0, __s9param1) {
    switch (__s9param0) {
      case ERROR.ALL_OK:
        CastleBasicController.getInstance().dispatchEvent(new SeasonLeagueEvent(SeasonLeagueEvent.ON_PASS_EVENT_BOUGHT));
        return true;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  }
}
classImplementsInterfaces(BEPCommand, "IExecCommand");
