import { CastleCommand } from "./CastleCommand";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { PrebuiltCastleResponseEvent } from "./PrebuiltCastleResponseEvent";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class CSCCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_SELECT_PREBUILT_CAMP_ID;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        this.controller.dispatchEvent(new PrebuiltCastleResponseEvent(false));
        break;
      default:
        this.controller.dispatchEvent(new PrebuiltCastleResponseEvent(true));
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
classImplementsInterfaces(CSCCommand, "IExecCommand");
