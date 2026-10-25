import { BasicCommand } from "../../../ggs.dll/reconstructed/exports/BasicCommand";
import { CastleAllianceDialog } from "./CastleAllianceDialog";
import { CastleAllianceDialogProperties } from "./CastleAllianceDialogProperties";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleLargeYesNoDialog } from "./CastleLargeYesNoDialog";
import { CastleLargeYesNoDialogProperties } from "./CastleLargeYesNoDialogProperties";
import { CastleModel } from "./CastleModel";
import { ClientConstAlliance } from "./ClientConstAlliance";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { Localize } from "../../../ggs.dll/reconstructed/exports/Localize";
export class AJACommand extends BasicCommand {
  constructor() {
    super();
  }
  get cmdId() {
    return ClientConstSF.S2C_AUTO_JOIN_ALLIANCE;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    var __s9local0;
    var __s9local1;
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        CastleModel.userData.parse_GAL(parsedResponse.gal);
        CastleModel.allianceData.parseAllianceInfo(parsedResponse.A);
        var __s9local3 = parsedResponse.A.M.length == 1;
        var __s9local4 = __s9local3 ? this.showAllianceDialog : this.showAllianceChat;
        __s9local0 = __s9local3 ? Localize.text("dialog_alliance_joiningAlliance_failed_title") : Localize.text("dialog_alliance_joiningAlliance_popup_title");
        __s9local1 = __s9local3 ? Localize.text("dialog_alliance_joiningAlliance_failed_copy") : Localize.text("dialog_alliance_joiningAlliance_popup_copy", [parsedResponse.A.N]);
        CastleDialogHandler.getInstance().registerDefaultDialogs(CastleLargeYesNoDialog, new CastleLargeYesNoDialogProperties(__s9local0, __s9local1, __s9local4, null, null, "", "", false));
    }
    return false;
  }
  showAllianceDialog(__s12param0) {
    CastleDialogHandler.getInstance().registerDefaultDialogs(CastleAllianceDialog, new CastleAllianceDialogProperties());
  }
  showAllianceChat(__s14param0) {
    CastleDialogHandler.getInstance().registerDefaultDialogs(CastleAllianceDialog, new CastleAllianceDialogProperties(ClientConstAlliance.CAT_COMMUNICATION));
  }
}
