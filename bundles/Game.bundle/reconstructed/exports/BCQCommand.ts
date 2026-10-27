import { CastleCommand } from "./CastleCommand";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { int } from "../../../ggs.dll/reconstructed/exports/int";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class BCQCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_BUY_CAMPAIGN_QUEST;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  exec(commandResponse) {
    var __s9local0 = int(commandResponse[0]);
    var __s9local1 = commandResponse[1];
    switch (__s9local0) {
      case ERROR.ALL_OK:
        break;
      default:
        this.showErrorDialog(__s9local0, __s9local1);
    }
  }
}
classImplementsInterfaces(BCQCommand, "IExecCommand");
