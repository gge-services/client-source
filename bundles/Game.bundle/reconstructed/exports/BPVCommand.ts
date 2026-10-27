import { CastleCommand } from "./CastleCommand";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { int } from "../../../ggs.dll/reconstructed/exports/int";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class BPVCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_BUY_PRIVATE_RESOURCE_VILLAGE;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    return super.executeCommand(statusCode, responseFields);
  }
  exec(commandResponse) {
    var __s11local0 = int(commandResponse[0]);
    var __s11local1 = commandResponse[1];
    switch (__s11local0) {
      case ERROR.ALL_OK:
        break;
      default:
        this.showErrorDialog(__s11local0, __s11local1);
    }
  }
}
classImplementsInterfaces(BPVCommand, "IExecCommand");
