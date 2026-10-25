import { CastleCommand } from "./CastleCommand";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
export class GUSECommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_GENERAL_UNLOCK_SKILL;
  }
  executeCommand(__s7param0, __s7param1) {
    switch (__s7param0) {
      case ERROR.ALL_OK:
        break;
      default:
        this.showErrorDialog(__s7param0, __s7param1);
    }
    return false;
  }
}
