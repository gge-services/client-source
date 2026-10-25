import { CastleCommand } from "./CastleCommand";
import { CastleMinuteSkipEvent } from "./CastleMinuteSkipEvent";
import { ClientConstSF } from "./ClientConstSF";
import { debug } from "../../../ggs.dll/reconstructed/exports/debug";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class SCICommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_MINUTE_SKIP_CRAFTING;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(__s9param0, __s9param1) {
    switch (__s9param0) {
      case ERROR.ALL_OK:
        debug("===== minute skip answer!");
        debug(__s9param1 ? __s9param1.join(", ") : "null");
        this.controller.dispatchEvent(new CastleMinuteSkipEvent(CastleMinuteSkipEvent.MINUTESKIP_USE_SUCESS));
        break;
      default:
        this.controller.dispatchEvent(new CastleMinuteSkipEvent(CastleMinuteSkipEvent.MINUTESKIP_USE_FAIL));
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  }
}
classImplementsInterfaces(SCICommand, "IExecCommand");
