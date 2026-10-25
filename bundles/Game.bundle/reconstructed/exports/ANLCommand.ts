import { CastleCommand } from "./CastleCommand";
import { CastleMessageDataEvent } from "./CastleMessageDataEvent";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class ANLCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_ALLIANCE_NEWSLETTER;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(__s9param0, __s9param1) {
    switch (__s9param0) {
      case ERROR.ALL_OK:
        this.controller.dispatchEvent(new CastleMessageDataEvent(CastleMessageDataEvent.SENT_OK));
        return true;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
        this.controller.dispatchEvent(new CastleMessageDataEvent(CastleMessageDataEvent.SENT_ERROR));
    }
    return false;
  }
}
classImplementsInterfaces(ANLCommand, "IExecCommand");
