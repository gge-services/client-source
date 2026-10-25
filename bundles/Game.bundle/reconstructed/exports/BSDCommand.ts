import { BasicStandardOkDialogProperties } from "../../../ggs.dll/reconstructed/exports/BasicStandardOkDialogProperties";
import { CastleCommand } from "./CastleCommand";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleModel } from "./CastleModel";
import { CastleSpyDataEvent } from "./CastleSpyDataEvent";
import { CastleStandardOkDialog } from "./CastleStandardOkDialog";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { Localize } from "../../../ggs.dll/reconstructed/exports/Localize";
export class BSDCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_SPY_LOG_DETAIL;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.NO_SPY_DATA:
      case ERROR.NO_SUCH_MESSAGE:
        this.controller.dispatchEvent(new CastleSpyDataEvent(CastleSpyDataEvent.NEW_SPY_LOG, [null]));
        CastleDialogHandler.getInstance().registerDefaultDialogs(CastleStandardOkDialog, new BasicStandardOkDialogProperties(Localize.text("generic_alert_information"), Localize.text("alert_noSpyData")));
        break;
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        CastleModel.otherPlayerData.parseOwnerInfo(parsedResponse.OI);
        CastleModel.otherPlayerData.parseOwnerInfo(parsedResponse.SO);
        CastleModel.spyData.parseSpyLog(parsedResponse);
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
