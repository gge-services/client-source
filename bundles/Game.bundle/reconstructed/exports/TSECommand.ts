import { CastleCommand } from "./CastleCommand";
import { ClientConstSF } from "./ClientConstSF";
import { CommKeys } from "../../../ggs.dll/reconstructed/exports/CommKeys";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { GlobalServerConst } from "../../../ggs.dll/reconstructed/exports/GlobalServerConst";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class TSECommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_IS_TEMPORARY_SERVER;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        this.env.isOnTemporaryServer = parsedResponse.GST == GlobalServerConst.TEMP_SERVER;
        this.env.isSpecialServerConnectStarted = false;
        this.env.isOnAllianceBattleGroundServer = parsedResponse.GST == GlobalServerConst.ALLIANCE_BATTLE_GROUND_SERVER;
        this.env.isCrossplay = parsedResponse[CommKeys.IS_CROSSPLAY_SERVER] == 1;
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
classImplementsInterfaces(TSECommand, "IExecCommand");
