import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { int } from "../../../ggs.dll/reconstructed/exports/int";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class SPOCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_SHOW_POPOVER;
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
        CastleModel.popoverData.parseSPO(__s9local2);
        break;
      default:
        this.showErrorDialog(__s9local0, __s9local1);
    }
  }
}
classImplementsInterfaces(SPOCommand, "IExecCommand");
