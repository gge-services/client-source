import { CastleCommand } from "./CastleCommand";
import { CastlePopUpHelper } from "./CastlePopUpHelper";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
export class LPLCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_GET_LOGIN_POPUP_LIST;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        var __s9local1 = !!parsedResponse.P && parsedResponse.P.length > 2;
        CastlePopUpHelper.displayPopUps(parsedResponse, __s9local1);
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
