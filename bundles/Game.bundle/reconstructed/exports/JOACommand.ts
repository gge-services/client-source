import { BasicStandardOkDialogProperties } from "../../../ggs.dll/reconstructed/exports/BasicStandardOkDialogProperties";
import { CastleAllianceDialog } from "./CastleAllianceDialog";
import { CastleAllianceDialogProperties } from "./CastleAllianceDialogProperties";
import { CastleAllianceInfoDialog } from "./CastleAllianceInfoDialog";
import { CastleCommand } from "./CastleCommand";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleLayoutManager } from "./CastleLayoutManager";
import { CastleModel } from "./CastleModel";
import { CastleStandardOkDialog } from "./CastleStandardOkDialog";
import { ClientConstAlliance } from "./ClientConstAlliance";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { Localize } from "../../../ggs.dll/reconstructed/exports/Localize";
import { TextVO } from "../../../ggs.dll/reconstructed/exports/TextVO";
export class JOACommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_JOIN_OPEN_ALLIANCE;
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
        __s9local0 = Localize.text("dialog_alliance_joiningAlliance_popup_title");
        __s9local1 = Localize.text("dialog_alliance_joiningAlliance_popup_copy", [new TextVO(parsedResponse.A.N)]);
        CastleDialogHandler.getInstance().registerDefaultDialogs(CastleStandardOkDialog, new BasicStandardOkDialogProperties(__s9local0, __s9local1, this.bindFunction(this.showAllianceDialog)));
        break;
      case ERROR.ALLI_IS_NOT_AUTO_JOIN_ENABLED:
        __s9local0 = Localize.text("ALLI_IS_NOT_AUTO_JOIN_ENABLED_HEADER");
        __s9local1 = Localize.text("ALLI_IS_NOT_AUTO_JOIN_ENABLED");
        CastleDialogHandler.getInstance().registerDefaultDialogs(CastleStandardOkDialog, new BasicStandardOkDialogProperties(__s9local0, __s9local1));
        CastleLayoutManager.getInstance().hideIngameUIComponent(CastleAllianceInfoDialog);
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
  showAllianceDialog(__s12param0) {
    CastleDialogHandler.getInstance().registerDefaultDialogs(CastleAllianceDialog, new CastleAllianceDialogProperties(ClientConstAlliance.CAT_COMMUNICATION));
  }
}
