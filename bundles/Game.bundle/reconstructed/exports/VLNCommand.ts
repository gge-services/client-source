import { CastleCommand } from "./CastleCommand";
import { CastleNameValidationEvent } from "./CastleNameValidationEvent";
import { CastleRegisterErrorEvent } from "./CastleRegisterErrorEvent";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
export class VLNCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_VALIDATE_LOGIN_NAME;
  }
  executeCommand(argument0, argument1) {
    if (argument0 != ERROR.ALL_OK) {
      this.controller.dispatchEvent(new CastleRegisterErrorEvent(CastleRegisterErrorEvent.LLI_ERROR, "LLI", argument0));
      return false;
    } else {
      this.controller.dispatchEvent(new CastleNameValidationEvent(CastleNameValidationEvent.VLN_OK));
      return true;
    }
  }
}
