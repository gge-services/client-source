import { CastleCommand } from "./CastleCommand";
import { CastleDataHolder } from "./CastleDataHolder";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
export class GCLCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_GET_CASTLELIST;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(__s9param0, __s9param1) {
    switch (__s9param0) {
      case ERROR.ALL_OK:
        if (CastleDataHolder.instance.gbdParsed) {
          var __s9local0 = JSON.parse(__s9param1[1]);
          CastleModel.userData.parse_GCL(__s9local0);
        }
        break;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  }
}
