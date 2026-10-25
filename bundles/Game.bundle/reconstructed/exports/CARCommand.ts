import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
export class CARCommand extends CastleCommand {
  executeCommand(__s5param0, __s5param1) {
    switch (__s5param0) {
      case ERROR.ALL_OK:
        CastleModel.eventAnnouncementData.parseCAR(null);
        break;
      default:
        this.showErrorDialog(__s5param0, __s5param1);
    }
    return false;
  }
  get cmdId() {
    return ClientConstSF.S2C_COLLECT_ANNOUNCEMENT_REWARD_EVENT;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
}
