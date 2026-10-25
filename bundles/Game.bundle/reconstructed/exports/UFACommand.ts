import { CastleCommand } from "./CastleCommand";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleModel } from "./CastleModel";
import { CastleTitleAchievedDialog } from "./CastleTitleAchievedDialog";
import { CastleTitleAchievedDialogProperties } from "./CastleTitleAchievedDialogProperties";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { int } from "../../../ggs.dll/reconstructed/exports/int";
export class UFACommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_GET_FAME;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        CastleModel.titleData.parseUFA(parsedResponse);
        var __s9local1 = int(parsedResponse.NHT);
        if (__s9local1 > 0) {
          CastleDialogHandler.getInstance().registerDefaultDialogs(CastleTitleAchievedDialog, new CastleTitleAchievedDialogProperties(CastleModel.titleData.getTitleByTitleID(__s9local1)));
        }
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
