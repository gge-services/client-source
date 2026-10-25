import { AllianceMobilizationEventEventVO } from "./AllianceMobilizationEventEventVO";
import { CastleCommand } from "./CastleCommand";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class RAQCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_REROLL_ALLIANCE_QUEST;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        var __s9local1 = parsedResponse.aqs.EID;
        var __s9local2 = AllianceMobilizationEventEventVO.getActiveEventVO(__s9local1);
        if (__s9local2) {
          __s9local2.parseQuestSlots(parsedResponse.aqs.AQS);
        }
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
classImplementsInterfaces(RAQCommand, "IExecCommand");
