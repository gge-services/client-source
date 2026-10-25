import { BasicStandardOkDialogProperties } from "../../../ggs.dll/reconstructed/exports/BasicStandardOkDialogProperties";
import { CastleCommand } from "./CastleCommand";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleLayoutManager } from "./CastleLayoutManager";
import { CastleModel } from "./CastleModel";
import { CastleStandardOkDialog } from "./CastleStandardOkDialog";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { Localize } from "../../../ggs.dll/reconstructed/exports/Localize";
import { TimeStringHelper } from "../../../ggs.dll/reconstructed/exports/TimeStringHelper";
export class RSTCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.C2S_START_RELOCATION;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(__s9param0, __s9param1) {
    switch (__s9param0) {
      case ERROR.ALL_OK:
        this.layoutManager.state = CastleLayoutManager.STATE_WORLDMAP;
        CastleDialogHandler.getInstance().registerDefaultDialogs(CastleStandardOkDialog, new BasicStandardOkDialogProperties(Localize.text("panel_relocate_title"), Localize.text("dialog_relocate_success_01", [TimeStringHelper.getTimeToString(CastleModel.userData.nextRelocationDuration, TimeStringHelper.ONE_TIME_HOURS_FORMAT, Localize.text)])));
        break;
      case ERROR.CASTLE_HAS_MOVEMENTS:
        CastleDialogHandler.getInstance().registerDefaultDialogs(CastleStandardOkDialog, new BasicStandardOkDialogProperties(Localize.text("generic_alert_information"), Localize.text("errorCode_212")));
        break;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  }
}
