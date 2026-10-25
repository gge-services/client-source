import { CastleBasicController } from "./CastleBasicController";
import { CastleCommand } from "./CastleCommand";
import { CastleServerMessageArrivedEvent } from "./CastleServerMessageArrivedEvent";
import { ClientConstSF } from "./ClientConstSF";
import { CommandController } from "../../../ggs.dll/reconstructed/exports/CommandController";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { SsoUserMoveTrackingEvent } from "./SsoUserMoveTrackingEvent";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class SPSLMSCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_SET_PASSWORD_FOR_SOCIAL_LOGIN_MIGRATION;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(__s9param0, __s9param1) {
    this.controller.dispatchEvent(new CastleServerMessageArrivedEvent(CastleServerMessageArrivedEvent.SPSLMS_ARRIVED, [__s9param0]));
    switch (__s9param0) {
      case ERROR.ALL_OK:
        CommandController.instance.executeCommand(CastleBasicController.TRACK_SSO_USER_MOVE_ACTION, [SsoUserMoveTrackingEvent.POPUP_CONFIRMED]);
        return true;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  }
}
classImplementsInterfaces(SPSLMSCommand, "IExecCommand");
