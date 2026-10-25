import { BasicStandardOkDialogProperties } from "../../../ggs.dll/reconstructed/exports/BasicStandardOkDialogProperties";
import { CastleCommand } from "./CastleCommand";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleModel } from "./CastleModel";
import { CastleStandardOkDialog } from "./CastleStandardOkDialog";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { Localize } from "../../../ggs.dll/reconstructed/exports/Localize";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class BADCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_ADD_BOOKMARK;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        CastleModel.bookmarkData.parse_BAD(parsedResponse);
        break;
      case ERROR.NO_SELF_TARGET:
        CastleDialogHandler.getInstance().registerDefaultDialogs(CastleStandardOkDialog, new BasicStandardOkDialogProperties(Localize.text("generic_alert_watchout"), Localize.text("alert_noSelfBookmark")));
        break;
      case ERROR.BOOKMARK_MAX_ENTRYS:
        CastleDialogHandler.getInstance().registerDefaultDialogs(CastleStandardOkDialog, new BasicStandardOkDialogProperties(Localize.text("generic_alert_watchout"), Localize.text("alert_bookmarkLimitReached")));
        break;
      case ERROR.BOOKMARK_ALREADY_ADDED:
        CastleDialogHandler.getInstance().registerDefaultDialogs(CastleStandardOkDialog, new BasicStandardOkDialogProperties(Localize.text("generic_alert_watchout"), Localize.text("ringmenu_markLocation_exists_tooltip")));
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
classImplementsInterfaces(BADCommand, "IExecCommand");
