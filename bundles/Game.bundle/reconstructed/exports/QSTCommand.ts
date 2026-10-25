import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ClientFunnelTrackingController } from "../../../ggs.dll/reconstructed/exports/ClientFunnelTrackingController";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { int } from "../../../ggs.dll/reconstructed/exports/int";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class QSTCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_QUEST_START;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  exec(__s9param0) {
    var __s9local0 = int(__s9param0[0]);
    var __s9local1 = __s9param0[1];
    switch (__s9local0) {
      case ERROR.ALL_OK:
        for (var __s9local2 = 0, __s9local3 = JSON.parse(__s9local1[1]).QIDS; __s9local2 < __s9local3.length; __s9local2++) {
          var __s9local4 = __s9local3[__s9local2];
          if (__s9local4) {
            ClientFunnelTrackingController.getInstance().trackState("quest_QuestID_" + __s9local4);
            CastleModel.questData.startQuest(__s9local4);
          }
        }
        break;
      default:
        this.showErrorDialog(__s9local0, __s9local1);
    }
  }
}
classImplementsInterfaces(QSTCommand, "IExecCommand");
