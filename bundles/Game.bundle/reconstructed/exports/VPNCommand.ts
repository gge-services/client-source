import { CastleCommand } from "./CastleCommand";
import { CastleNameValidationEvent } from "./CastleNameValidationEvent";
import { CastleRegisterErrorEvent } from "./CastleRegisterErrorEvent";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
export class VPNCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_VALIDATE_NEW_PLAYER_NAME;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        this.controller.dispatchEvent(new CastleNameValidationEvent(CastleNameValidationEvent.VPN_OK));
        return true;
      case ERROR.INVALID_NAME:
        var parsedResponse = JSON.parse(responseFields[1]);
        this.controller.dispatchEvent(new CastleRegisterErrorEvent(CastleRegisterErrorEvent.REGISTER_ERROR, CastleRegisterErrorEvent.INVALID_NAME, parsedResponse));
        break;
      case ERROR.NAME_ALREADY_IN_USE:
        parsedResponse = JSON.parse(responseFields[1]);
        this.controller.dispatchEvent(new CastleRegisterErrorEvent(CastleRegisterErrorEvent.REGISTER_ERROR, CastleRegisterErrorEvent.NAME_ALREADY_IN_USE, parsedResponse));
        break;
      case ERROR.NAME_HAS_ONLY_NUMBERS:
        parsedResponse = JSON.parse(responseFields[1]);
        this.controller.dispatchEvent(new CastleRegisterErrorEvent(CastleRegisterErrorEvent.REGISTER_ERROR, CastleRegisterErrorEvent.NAME_HAS_ONLY_NUMBERS, parsedResponse));
        break;
      case ERROR.USAGE_OF_BADWORDS:
        parsedResponse = JSON.parse(responseFields[1]);
        this.controller.dispatchEvent(new CastleRegisterErrorEvent(CastleRegisterErrorEvent.REGISTER_ERROR, CastleRegisterErrorEvent.USAGE_OF_BADWORDS, parsedResponse));
        break;
      default:
        parsedResponse = JSON.parse(responseFields[1]);
        this.controller.dispatchEvent(new CastleRegisterErrorEvent(CastleRegisterErrorEvent.REGISTER_ERROR, CastleRegisterErrorEvent.INVALID_NAME, parsedResponse));
    }
    return false;
  }
}
