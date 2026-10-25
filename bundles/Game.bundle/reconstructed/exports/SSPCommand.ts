import { BasicStandardOkDialogProperties } from "../../../ggs.dll/reconstructed/exports/BasicStandardOkDialogProperties";
import { CastleCommand } from "./CastleCommand";
import { CastleDialogConsts } from "./CastleDialogConsts";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastlePlayerInfoDialog } from "./CastlePlayerInfoDialog";
import { CastlePlayerInfoDialogProperties } from "./CastlePlayerInfoDialogProperties";
import { CastleStandardOkDialog } from "./CastleStandardOkDialog";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { Localize } from "../../../ggs.dll/reconstructed/exports/Localize";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class SSPCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_GET_SOCIAL_PID;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(CastlePlayerInfoDialog, new CastlePlayerInfoDialogProperties(parsedResponse.PID), CastleDialogConsts.DIALOG_TYPE_SINGLE);
        break;
      case ERROR.PLAYER_NOT_FOUND:
        CastleDialogHandler.getInstance().registerDefaultDialogs(CastleStandardOkDialog, new BasicStandardOkDialogProperties(Localize.text("dialog_socialPlayerIsNoIngamePlayer_title"), Localize.text("dialog_socialPlayerIsNoIngamePlayer_copy")));
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
classImplementsInterfaces(SSPCommand, "IExecCommand");
