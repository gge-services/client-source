import { CastleCommand } from "./CastleCommand";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class CCRCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_TEMP_SERVER_CHARGE_CHAMP_EFFECTS_REROLL;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return true;
  }
}
classImplementsInterfaces(CCRCommand, "IExecCommand");
