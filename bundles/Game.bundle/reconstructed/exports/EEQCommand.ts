import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
export class EEQCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_EQUIP_EQUIPMENT;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(__s9param0, __s9param1) {
    switch (__s9param0) {
      case ERROR.ALL_OK:
        CastleModel.equipData.parse_EEQ();
        break;
      default:
        CastleModel.equipData.error_EEQ(__s9param0);
    }
    return false;
  }
}
