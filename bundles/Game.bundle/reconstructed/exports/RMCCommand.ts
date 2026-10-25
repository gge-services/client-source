import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { CastleServerMessageArrivedEvent } from "./CastleServerMessageArrivedEvent";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
export class RMCCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_REQUEST_MAIL_CHANGE;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        CastleModel.playerEmailData.newEmail = parsedResponse.PMA;
        this.dispatchForShowPopUp("dialog_options_newName_success_desc", true);
        break;
      case ERROR.EMAIL_ALREADY_IN_USE:
        this.dispatchForShowPopUp("error_mail_exists", false);
        break;
      case ERROR.INVALID_EMAIL:
        this.dispatchForShowPopUp("dialog_options_error_enterEmail_desc", false);
        break;
      case ERROR.MAILDOMAIN_BLOCKED:
        this.dispatchForShowPopUp("EMAIL_DOMAIN_BLOCKED_8", false);
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
  dispatchForShowPopUp(__s12param0, __s12param1) {
    this.controller.dispatchEvent(new CastleServerMessageArrivedEvent(CastleServerMessageArrivedEvent.RMC_ARRIVED, [__s12param0, __s12param1]));
  }
}
