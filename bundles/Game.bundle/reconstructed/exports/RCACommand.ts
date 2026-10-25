import { CastleCommand } from "./CastleCommand";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
export class RCACommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_ROYAL_CAPITAL_ALLIANCE;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(__s9param0, __s9param1) {
    switch (__s9param0) {
      case ERROR.ALL_OK:
        JSON.parse(__s9param1[1]);
    }
    return false;
  }
}
