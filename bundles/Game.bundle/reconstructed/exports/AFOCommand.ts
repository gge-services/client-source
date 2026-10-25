import { AllianceConst } from "../../../ggs.dll/reconstructed/exports/AllianceConst";
import { BasicStandardOkDialogProperties } from "../../../ggs.dll/reconstructed/exports/BasicStandardOkDialogProperties";
import { CastleAllianceDataEvent } from "./CastleAllianceDataEvent";
import { CastleAllianceDialog } from "./CastleAllianceDialog";
import { CastleAllianceDialogProperties } from "./CastleAllianceDialogProperties";
import { CastleCommand } from "./CastleCommand";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleModel } from "./CastleModel";
import { CastleStandardOkDialog } from "./CastleStandardOkDialog";
import { ClientConstAlliance } from "./ClientConstAlliance";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { Localize } from "../../../ggs.dll/reconstructed/exports/Localize";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class AFOCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_FOUND_ALLIANCE;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        CastleModel.allianceData.parseAllianceInfo(parsedResponse.A);
        CastleModel.userData.parse_GAL(parsedResponse.gal);
        this.controller.dispatchEvent(new CastleAllianceDataEvent(CastleAllianceDataEvent.ALLIANCE_FOUNDED));
        CastleDialogHandler.getInstance().registerDefaultDialogs(CastleAllianceDialog, new CastleAllianceDialogProperties(ClientConstAlliance.CAT_OVERVIEW));
        break;
      case ERROR.TEXT_TOO_SHORT:
        CastleDialogHandler.getInstance().registerDefaultDialogs(CastleStandardOkDialog, new BasicStandardOkDialogProperties(Localize.text("generic_alert_watchout"), Localize.text("dialog_alliance_alliancenameTooShort", [AllianceConst.NAME_MIN_LENGTH])));
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
classImplementsInterfaces(AFOCommand, "IExecCommand");
