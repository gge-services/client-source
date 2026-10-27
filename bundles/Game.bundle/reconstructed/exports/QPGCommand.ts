import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { int } from "../../../ggs.dll/reconstructed/exports/int";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class QPGCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_QUEST_PROGRES;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  exec(commandResponse) {
    var __s9local0 = int(commandResponse[0]);
    var __s9local1 = commandResponse[1];
    switch (__s9local0) {
      case ERROR.ALL_OK:
        var __s9local2 = JSON.parse(__s9local1[1]);
        CastleModel.questData.parseQuestProgress(__s9local2.P);
        break;
      default:
        this.showErrorDialog(__s9local0, __s9local1);
    }
  }
}
classImplementsInterfaces(QPGCommand, "IExecCommand");
