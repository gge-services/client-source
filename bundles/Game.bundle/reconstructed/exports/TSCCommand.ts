import { CastleBasicController } from "./CastleBasicController";
import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { CommandController } from "../../../ggs.dll/reconstructed/exports/CommandController";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
export class TSCCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_TEMPORARY_SERVER_SELECT_CASTLE_COMPLETE;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(__s9param0, __s9param1) {
    switch (__s9param0) {
      case ERROR.ALL_OK:
        if (CastleModel.userData.connectToTempServer) {
          CommandController.instance.executeCommand(CastleBasicController.CONNECT_TO_TEMPORARY_SERVER);
        }
        if (CastleModel.userData.connectToABGServer) {
          CommandController.instance.executeCommand(CastleBasicController.CONNECT_TO_ALLIANCE_BATTLE_GROUND_SERVER);
        }
        break;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return true;
  }
}
