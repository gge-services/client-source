import { CastleCommand } from "./CastleCommand";
import { CastleLogDataEvent } from "./CastleLogDataEvent";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { int } from "../../../ggs.dll/reconstructed/exports/int";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class BLSCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_BATTLE_LOG_SHORT;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        var __s9local1 = int(parsedResponse.LID);
        CastleModel.otherPlayerData.parseOwnerInfoArray(parsedResponse.PI);
        if (parsedResponse.IM == 1) {
          if (!CastleModel.messageData.hasAlreadyLogId(__s9local1)) {
            CastleModel.messageData.parseBattleLogShort(parsedResponse);
            CastleModel.messageData.parseBattleLogMiddle(parsedResponse.blm);
            CastleModel.messageData.parseBattleLogDetail(parsedResponse.bld);
          }
          var __s9local2 = CastleModel.messageData.getBattleLogById(__s9local1);
          if (__s9local2) {
            this.controller.dispatchEvent(new CastleLogDataEvent(CastleLogDataEvent.NEW_LOG_ANIMATION, __s9local2));
          }
        } else {
          CastleModel.messageData.parseBattleLogShort(parsedResponse);
          this.controller.dispatchEvent(new CastleLogDataEvent(CastleLogDataEvent.NEW_LOG, CastleModel.messageData.getBattleLogById(parsedResponse.LID)));
        }
        break;
      case ERROR.NO_SUCH_MESSAGE:
      case ERROR.MESSAGEDATA_TOO_OLD:
        this.controller.dispatchEvent(new CastleLogDataEvent(CastleLogDataEvent.LOG_DOES_NOT_EXISTS));
        this.showErrorDialog(statusCode, responseFields);
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
classImplementsInterfaces(BLSCommand, "IExecCommand");
