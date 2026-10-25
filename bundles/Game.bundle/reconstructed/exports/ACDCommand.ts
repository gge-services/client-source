import { BasicStandardOkDialogProperties } from "../../../ggs.dll/reconstructed/exports/BasicStandardOkDialogProperties";
import { CastleCommand } from "./CastleCommand";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleModel } from "./CastleModel";
import { CastleStandardOkDialog } from "./CastleStandardOkDialog";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { Localize } from "../../../ggs.dll/reconstructed/exports/Localize";
export class ACDCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_ALLIANCE_CHANGE_DESCRIPTION;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(__s9param0, __s9param1) {
    var __s9local0;
    switch (__s9param0) {
      case ERROR.ALL_OK:
        __s9local0 = JSON.parse(__s9param1[1]);
        CastleModel.allianceData.parse_AIN(__s9local0.ain);
        break;
      case ERROR.USAGE_OF_BADWORDS:
        var __s9local1 = "";
        if ((__s9local0 = JSON.parse(__s9param1[1])).BW[0]) {
          __s9local1 = __s9local0.BW[0];
        }
        CastleDialogHandler.getInstance().registerDefaultDialogs(CastleStandardOkDialog, new BasicStandardOkDialogProperties(Localize.text("generic_alert_watchout"), Localize.text("alert_badword_textReplacement", [__s9local1])));
        break;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  }
}
