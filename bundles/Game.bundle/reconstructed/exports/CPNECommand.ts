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
  executeCommand(__s9param0, __s9param1) {
    switch (__s9param0) {
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
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  }
  dispatchForShowPopUp(__s12param0, __s12param1) {
    this.controller.dispatchEvent(new CastleServerMessageArrivedEvent(CastleServerMessageArrivedEvent.CPNE_ARRIVED, [__s12param0, __s12param1]));
  }
}
