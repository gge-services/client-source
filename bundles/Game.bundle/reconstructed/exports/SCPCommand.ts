import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { CastleServerMessageArrivedEvent } from "./CastleServerMessageArrivedEvent";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
export class SCPCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_CHANGE_PASSWORD;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        if (CastleModel.userData.persistentLogin && parsedResponse && parsedResponse.NPW) {
          this.dispatchArrivedEvent(true);
        } else {
          this.dispatchArrivedEvent(false);
        }
        break;
      case ERROR.INVALID_PASSWORD:
        this.dispatchArrivedEvent(false);
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
        this.dispatchArrivedEvent(false);
    }
    return false;
  }
  dispatchArrivedEvent(__s14param0) {
    this.controller.dispatchEvent(new CastleServerMessageArrivedEvent(CastleServerMessageArrivedEvent.SCP_ARRIVED, [__s14param0]));
  }
}
