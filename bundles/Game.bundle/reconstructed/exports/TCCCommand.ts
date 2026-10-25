import { ABGHelper } from "./ABGHelper";
import { CastleCommand } from "./CastleCommand";
import { ClientConstSF } from "./ClientConstSF";
import { CommKeys } from "../../../ggs.dll/reconstructed/exports/CommKeys";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { int } from "../../../ggs.dll/reconstructed/exports/int";
import { TempServerHelper } from "./TempServerHelper";
export class TCCCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_SET_BOUGHT_SPECIAL_SERVER_CASTLES;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        var __s9local1 = int(parsedResponse[CommKeys.TEMP_SERVER_CAMP_ID]);
        var __s9local2 = int(parsedResponse[CommKeys.ALLIANCE_BATTLEGROUND_CAMP_ID]);
        if (TempServerHelper.tmpServerEvent) {
          TempServerHelper.tmpServerEvent.castleBought = __s9local1 > 0;
        }
        if (ABGHelper.abgEvent) {
          ABGHelper.abgEvent.castleBought = __s9local2 > 0;
        }
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
