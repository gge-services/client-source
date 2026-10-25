import { AllianceDivisionContributionsEvent } from "./AllianceDivisionContributionsEvent";
import { CastleBasicController } from "./CastleBasicController";
import { CastleCommand } from "./CastleCommand";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class AQPCCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_ALLIANCE_DIVISION_PLAYER_CONTRIBUTION;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(__s9param0, __s9param1) {
    switch (__s9param0) {
      case ERROR.ALL_OK:
        var __s9local0 = JSON.parse(__s9param1[1]).AQPC;
        CastleBasicController.getInstance().dispatchEvent(new AllianceDivisionContributionsEvent(AllianceDivisionContributionsEvent.ALLIANCE_CONTRIBUTIONS_RECEIVED, __s9local0));
        break;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  }
}
classImplementsInterfaces(AQPCCommand, "IExecCommand");
