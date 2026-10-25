import { CastleCommand } from "./CastleCommand";
import { CastleLogDataEvent } from "./CastleLogDataEvent";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { int } from "../../../ggs.dll/reconstructed/exports/int";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class BLDCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_BATTLE_LOG_DETAIL;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        var __s9local1 = int(parsedResponse.LID);
        CastleModel.messageData.parseBattleLogDetail(parsedResponse);
        var __s9local2 = CastleModel.messageData.getBattleLogById(__s9local1);
        if (__s9local2) {
          this.controller.dispatchEvent(new CastleLogDataEvent(CastleLogDataEvent.NEW_FULL_LOG, __s9local2));
        }
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
classImplementsInterfaces(BLDCommand, "IExecCommand");
