import { CastleCommand } from "./CastleCommand";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { PrebuiltCastleResponseEvent } from "./PrebuiltCastleResponseEvent";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class KSCCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_SELECT_PREBUILT_CASTLE_ID;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(__s9param0, __s9param1) {
    switch (__s9param0) {
      case ERROR.ALL_OK:
        this.controller.dispatchEvent(new PrebuiltCastleResponseEvent(false));
        break;
      default:
        this.controller.dispatchEvent(new PrebuiltCastleResponseEvent(true));
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  }
}
classImplementsInterfaces(KSCCommand, "IExecCommand");
