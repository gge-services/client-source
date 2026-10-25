import { CastleCommand } from "./CastleCommand";
import { CastleNameValidationEvent } from "./CastleNameValidationEvent";
import { CastleRegisterErrorEvent } from "./CastleRegisterErrorEvent";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
export class VLNCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_VALIDATE_LOGIN_NAME;
  }
  executeCommand(__s7param0, __s7param1) {
    if (__s7param0 != ERROR.ALL_OK) {
      this.controller.dispatchEvent(new CastleRegisterErrorEvent(CastleRegisterErrorEvent.LLI_ERROR, "LLI", __s7param0));
      return false;
    } else {
      this.controller.dispatchEvent(new CastleNameValidationEvent(CastleNameValidationEvent.VLN_OK));
      return true;
    }
  }
}
