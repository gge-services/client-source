import { CastleCommand } from "./CastleCommand";
import { CastleServerMessageArrivedEvent } from "./CastleServerMessageArrivedEvent";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
export class CPNECommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_CHANGE_PLAYER_NAME_EVENT;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        this.dispatchForShowPopUp("dialog_options_newName_success_desc", true);
        break;
      case ERROR.USAGE_OF_BADWORDS:
        this.dispatchForShowPopUp("error_badword", false);
        break;
      case ERROR.NAME_ALREADY_IN_USE:
        this.dispatchForShowPopUp("dialog_options_error_nameAlreadyInUse_desc", false);
        break;
      case ERROR.INVALID_NAME:
        this.dispatchForShowPopUp("errorCode_98", false);
        break;
      case ERROR.NAME_HAS_ONLY_NUMBERS:
        this.dispatchForShowPopUp("error_name_is_number", false);
        break;
      case ERROR.COOLING_DOWN:
        this.dispatchForShowPopUp("errorCode_95", false);
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
  dispatchForShowPopUp(argument0, argument1) {
    this.controller.dispatchEvent(new CastleServerMessageArrivedEvent(CastleServerMessageArrivedEvent.CPNE_ARRIVED, [argument0, argument1]));
  }
}
