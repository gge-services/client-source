import { BasicStandardOkDialogProperties } from "../../../ggs.dll/reconstructed/exports/BasicStandardOkDialogProperties";
import { CastleCommand } from "./CastleCommand";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleModel } from "./CastleModel";
import { CastleStandardOkDialog } from "./CastleStandardOkDialog";
import { CastleTroopSupportData } from "./CastleTroopSupportData";
import { CastleTroopSupportDialog } from "./CastleTroopSupportDialog";
import { CastleTroopSupportDialogProperties } from "./CastleTroopSupportDialogProperties";
import { ClientConstSF } from "./ClientConstSF";
import { ClientConstTextIds } from "./ClientConstTextIds";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { Localize } from "../../../ggs.dll/reconstructed/exports/Localize";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class STICommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_TROOP_SUPPORT_INFO;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        var __s9local1 = CastleTroopSupportData.parse_STI(parsedResponse);
        CastleDialogHandler.getInstance().registerDefaultDialogs(CastleTroopSupportDialog, new CastleTroopSupportDialogProperties(__s9local1));
        CastleModel.lordData.parse_GLI(parsedResponse.gli);
        break;
      case ERROR.NOT_IN_OWNED_CASTLE:
        CastleDialogHandler.getInstance().registerDefaultDialogs(CastleStandardOkDialog, new BasicStandardOkDialogProperties(Localize.text("generic_alert_information"), Localize.text(ClientConstTextIds.NOT_AVAILABLE)));
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
classImplementsInterfaces(STICommand, "IExecCommand");
