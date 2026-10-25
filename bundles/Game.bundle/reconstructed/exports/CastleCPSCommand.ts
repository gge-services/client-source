import { BasicModel } from "../../../ggs.dll/reconstructed/exports/BasicModel";
import { BasicStandardOkDialogProperties } from "../../../ggs.dll/reconstructed/exports/BasicStandardOkDialogProperties";
import { CastleBasicController } from "./CastleBasicController";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleNotifyDialog } from "./CastleNotifyDialog";
import { CastleServerMessageArrivedEvent } from "./CastleServerMessageArrivedEvent";
import { CPSCommand } from "../../../ggs.dll/reconstructed/exports/CPSCommand";
import { IdentityManagementConstants } from "../../../ggs.dll/reconstructed/exports/IdentityManagementConstants";
import { ShutDownControlTimer } from "../../../ggs.dll/reconstructed/exports/ShutDownControlTimer";
export class CastleCPSCommand extends CPSCommand {
  executeCommand(__s5param0, __s5param1) {
    switch (__s5param0) {
      case IdentityManagementConstants.ERROR_SHUT_DOWN_ALERT:
        this._shutDownControlTimer = new ShutDownControlTimer(IdentityManagementConstants.SHUTDOWN_CONTROL_TIMER);
        CastleBasicController.getInstance().dispatchEvent(new CastleServerMessageArrivedEvent(CastleServerMessageArrivedEvent.CPS_ARRIVED, [this._shutDownControlTimer]));
        this._shutDownControlTimer.startCountDown();
        CastleDialogHandler.getInstance().registerDialogs(CastleNotifyDialog, new BasicStandardOkDialogProperties(null, BasicModel.languageData.getTextById("generic_alert_korea_logoutCountdown", [this._shutDownControlTimer.showTimerCountdown])));
        break;
      case IdentityManagementConstants.ERROR_UNDERAGE_LOGOUT:
        super.executeCommand(__s5param0, __s5param1);
    }
    return true;
  }
}
