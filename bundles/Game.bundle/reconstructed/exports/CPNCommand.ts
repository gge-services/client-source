import { CastleCommand } from "./CastleCommand";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class CPNCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_COLLECT_PATCH_NOTE_REWARDS;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(__s9param0, __s9param1) {
    switch (__s9param0) {
      case ERROR.ALL_OK:
        break;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  }
}
classImplementsInterfaces(CPNCommand, "IExecCommand");
