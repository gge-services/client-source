import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class CARCommand extends CastleCommand {
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        CastleModel.eventAnnouncementData.parseCAR(null);
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
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
classImplementsInterfaces(CARCommand, "IExecCommand");
