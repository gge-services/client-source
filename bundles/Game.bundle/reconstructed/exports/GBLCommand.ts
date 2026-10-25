import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { debug } from "../../../ggs.dll/reconstructed/exports/debug";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
export class GBLCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_GET_BOOKMARKLIST;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(__s9param0, __s9param1) {
    switch (__s9param0) {
      case ERROR.ALL_OK:
        try {
          var __s9local0 = JSON.parse(__s9param1[1]);
        } catch (__s13local0) {
          debug("Invalid Json String appeared");
          debug(__s13local0.toString());
          return false;
        }
        CastleModel.bookmarkData.parse_GBL(__s9local0);
        break;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  }
}
