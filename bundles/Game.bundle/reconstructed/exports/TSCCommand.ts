import { CastleBasicController } from "./CastleBasicController";
import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { CommandController } from "../../../ggs.dll/reconstructed/exports/CommandController";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class TSCCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_TEMPORARY_SERVER_SELECT_CASTLE_COMPLETE;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        if (CastleModel.userData.connectToTempServer) {
          CommandController.instance.executeCommand(CastleBasicController.CONNECT_TO_TEMPORARY_SERVER);
        }
        if (CastleModel.userData.connectToABGServer) {
          CommandController.instance.executeCommand(CastleBasicController.CONNECT_TO_ALLIANCE_BATTLE_GROUND_SERVER);
        }
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return true;
  }
}
classImplementsInterfaces(TSCCommand, "IExecCommand");
