import { CastleCommand } from "./CastleCommand";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class KSSCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_SET_SEASON_EVENT_START_SEEN;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(__s9param0, __s9param1) {
    switch (__s9param0) {
      case ERROR.ALL_OK:
        return true;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  }
}
classImplementsInterfaces(KSSCommand, "IExecCommand");
