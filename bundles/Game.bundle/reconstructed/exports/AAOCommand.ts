import { AdvisorAttackOverviewEvent } from "./AdvisorAttackOverviewEvent";
import { AdvisorAttackOverviewVO } from "./AdvisorAttackOverviewVO";
import { CastleCommand } from "./CastleCommand";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class AAOCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_ATTACK_ADVISOR_OVERVIEW_EVENT;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        var __s9local1 = new AdvisorAttackOverviewVO();
        __s9local1.parseServerData(parsedResponse);
        this.controller.dispatchEvent(new AdvisorAttackOverviewEvent(AdvisorAttackOverviewEvent.ADVISOR_ATTACK_OVERVIEW_UPDATE, __s9local1));
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
classImplementsInterfaces(AAOCommand, "IExecCommand");
