import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class BSSCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_BUY_SCEAT_SKILL;
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
        CastleModel.legendSkillData.stopWaitingForServer();
    }
    return false;
  }
}
classImplementsInterfaces(BSSCommand, "IExecCommand");
