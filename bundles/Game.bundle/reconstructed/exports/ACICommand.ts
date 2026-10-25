import { AttackDialog } from "./AttackDialog";
import { BasicStandardOkDialogProperties } from "../../../ggs.dll/reconstructed/exports/BasicStandardOkDialogProperties";
import { CastleAttackDialogProperties } from "./CastleAttackDialogProperties";
import { CastleCommand } from "./CastleCommand";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleModel } from "./CastleModel";
import { CastleStandardOkDialog } from "./CastleStandardOkDialog";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { Localize } from "../../../ggs.dll/reconstructed/exports/Localize";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class ACICommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_GET_ATTACK_CASTLE_INFOS;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        CastleModel.otherPlayerData.parseOwnerInfoArray(parsedResponse.gaa.OI);
        var __s9local1 = CastleModel.attackData.parse_ACI(parsedResponse);
        CastleDialogHandler.getInstance().registerDefaultDialogs(AttackDialog, new CastleAttackDialogProperties(__s9local1));
        break;
      case ERROR.PLAYER_HAS_NOOB_PROTECTION:
      case ERROR.TARGET_HAS_PEACE:
        CastleDialogHandler.getInstance().registerDefaultDialogs(CastleStandardOkDialog, new BasicStandardOkDialogProperties(Localize.text("generic_alert_information"), Localize.text("errorCode_94")));
        break;
      case ERROR.SPECIALCAMP_PROTECTED:
        CastleDialogHandler.getInstance().registerDefaultDialogs(CastleStandardOkDialog, new BasicStandardOkDialogProperties(Localize.text("generic_alert_information"), Localize.text("dialog_factionEvent_villageBlockedByTower")));
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
classImplementsInterfaces(ACICommand, "IExecCommand");
