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
  executeCommand(statusCode, responseFields) {
    this.controller.dispatchEvent(new CastleServerMessageArrivedEvent(CastleServerMessageArrivedEvent.SPSLMS_ARRIVED, [statusCode]));
    switch (statusCode) {
      case ERROR.ALL_OK:
        CommandController.instance.executeCommand(CastleBasicController.TRACK_SSO_USER_MOVE_ACTION, [SsoUserMoveTrackingEvent.POPUP_CONFIRMED]);
        return true;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
classImplementsInterfaces(SPSLMSCommand, "IExecCommand");
