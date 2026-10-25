import { CastleCommand } from "./CastleCommand";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleModel } from "./CastleModel";
import { CastleSupportDefenceDialog } from "./CastleSupportDefenceDialog";
import { CastleSupportDefenceDialogProperties } from "./CastleSupportDefenceDialogProperties";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
export class SDICommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_SUPPORT_DEFENCE_INFO;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        var __s9local1 = CastleModel.supportDefenceData.parse_SDI(parsedResponse);
        CastleModel.lordData.parse_GLI(parsedResponse.gli);
        CastleDialogHandler.getInstance().registerDefaultDialogs(CastleSupportDefenceDialog, new CastleSupportDefenceDialogProperties(__s9local1));
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
