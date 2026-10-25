import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
export class PGLCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_GET_PLAYERGIFT_LIST;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(__s9param0, __s9param1) {
    switch (__s9param0) {
      case ERROR.ALL_OK:
        if (__s9param1.length > 0) {
          var __s9local0 = __s9param1[1];
          var __s9local1 = JSON.parse(__s9local0.toString());
          CastleModel.playerGiftData.parse_PGL(__s9local1.G, __s9local1.RA);
        }
        break;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return true;
  }
}
