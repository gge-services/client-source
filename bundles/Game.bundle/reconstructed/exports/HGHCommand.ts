import { BasicStandardOkDialogProperties } from "../../../ggs.dll/reconstructed/exports/BasicStandardOkDialogProperties";
import { CastleCommand } from "./CastleCommand";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleHighscoreEvent } from "./CastleHighscoreEvent";
import { CastleModel } from "./CastleModel";
import { CastleStandardOkDialog } from "./CastleStandardOkDialog";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { int } from "../../../ggs.dll/reconstructed/exports/int";
import { Localize } from "../../../ggs.dll/reconstructed/exports/Localize";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class HGHCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_GET_HIGHSCORE;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        var __s9local1 = -1;
        if (parsedResponse.LID) {
          __s9local1 = int(parsedResponse.LID);
        }
        CastleModel.highscoreData.dispatchEvent(new CastleHighscoreEvent(CastleHighscoreEvent.GET_HIGHSCORE_DATA, [parsedResponse], __s9local1));
        return true;
      case ERROR.PLAYER_NOT_FOUND:
        CastleModel.highscoreData.dispatchEvent(new CastleHighscoreEvent(CastleHighscoreEvent.GET_HIGHSCORE_DATA_ERROR, [parsedResponse], __s9local1));
        CastleDialogHandler.getInstance().registerDefaultDialogs(CastleStandardOkDialog, new BasicStandardOkDialogProperties(Localize.text("generic_alert_watchout"), Localize.text("alert_playerName_notFound")));
        break;
      case ERROR.ALLI_NOT_FOUND:
        CastleModel.highscoreData.dispatchEvent(new CastleHighscoreEvent(CastleHighscoreEvent.GET_HIGHSCORE_DATA_ERROR, [parsedResponse], __s9local1));
        CastleDialogHandler.getInstance().registerDefaultDialogs(CastleStandardOkDialog, new BasicStandardOkDialogProperties(Localize.text("generic_alert_watchout"), Localize.text("alert_allianceName_notFound")));
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
        CastleModel.highscoreData.dispatchEvent(new CastleHighscoreEvent(CastleHighscoreEvent.GET_HIGHSCORE_DATA_ERROR));
    }
    return false;
  }
}
classImplementsInterfaces(HGHCommand, "IExecCommand");
