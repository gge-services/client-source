import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
export class RMMCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_REFRESH_MERCENARY_MISSION;
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
        CastleModel.mercenaryData.waitingForServer = false;
    }
    return false;
  }
}
