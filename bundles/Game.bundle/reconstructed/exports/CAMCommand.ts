import { BasicStandardOkDialogProperties } from "../../../ggs.dll/reconstructed/exports/BasicStandardOkDialogProperties";
import { CastleCommand } from "./CastleCommand";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleModel } from "./CastleModel";
import { CastlePostPostAttackFactionDialog } from "./CastlePostPostAttackFactionDialog";
import { CastlePostPostAttackFactionDialogProperties } from "./CastlePostPostAttackFactionDialogProperties";
import { CastleStandardOkDialog } from "./CastleStandardOkDialog";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { Localize } from "../../../ggs.dll/reconstructed/exports/Localize";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class CAMCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_CREATE_ARMY_ATTACK_MOVEMENT_TEMP_SERVER;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    var __s9local0;
    if (responseFields && responseFields.length > 1) {
      __s9local0 = JSON.parse(responseFields[1]);
    }
    switch (statusCode) {
      case ERROR.ALL_OK:
        CastleModel.currencyData.parseGCU(__s9local0.gcu);
        CastleModel.otherPlayerData.parseOwnerInfoArray(__s9local0.O);
        CastleModel.armyData.parseMapMovementArray([__s9local0.AAM]);
        break;
      case ERROR.COOLING_DOWN:
        CastleDialogHandler.getInstance().registerDefaultDialogs(CastleStandardOkDialog, new BasicStandardOkDialogProperties(Localize.text("generic_alert_watchout"), Localize.text("canNotAttackCastle")));
        break;
      case ERROR.MOVEMENT_HAS_NO_UNITS:
        CastleDialogHandler.getInstance().registerDefaultDialogs(CastleStandardOkDialog, new BasicStandardOkDialogProperties(Localize.text("generic_alert_watchout"), Localize.text("errorCode_100", [__s9local0.MS])));
        break;
      case ERROR.ATTACK_IN_PROGRESS:
        CastleDialogHandler.getInstance().registerDefaultDialogs(CastlePostPostAttackFactionDialog, new CastlePostPostAttackFactionDialogProperties(__s9local0.TS, __s9local0.AS));
        break;
      case ERROR.ALREADY_TO_MANY_OUTPOSTS:
        CastleDialogHandler.getInstance().registerDefaultDialogs(CastleStandardOkDialog, new BasicStandardOkDialogProperties(Localize.text("generic_alert_watchout"), Localize.text("noAbailableBarons")));
        break;
      case ERROR.ATTACK_TOO_MANY_UNITS:
        CastleDialogHandler.getInstance().registerDefaultDialogs(CastleStandardOkDialog, new BasicStandardOkDialogProperties("", Localize.text("errorCode_313")));
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
classImplementsInterfaces(CAMCommand, "IExecCommand");
