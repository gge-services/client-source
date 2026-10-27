import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { CastleServerMessageArrivedEvent } from "./CastleServerMessageArrivedEvent";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class SCDCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_SET_CREDENTIALS;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    var __s9local0 = null;
    switch (statusCode) {
      case ERROR.ALL_OK:
        if (responseFields && responseFields.length > 0) {
          __s9local0 = JSON.parse(responseFields[1]);
        }
        CastleModel.userData.parse_SCD(__s9local0);
        break;
      case ERROR.INVALID_OBJECT_STATE:
        this.showErrorDialog(statusCode, responseFields);
    }
    this.dispatchArrivedEvent(statusCode, __s9local0);
    return false;
  }
  dispatchArrivedEvent(argument0, argument1) {
    this.controller.dispatchEvent(new CastleServerMessageArrivedEvent(CastleServerMessageArrivedEvent.SDC_ARRIVED, [argument0, argument1]));
  }
}
classImplementsInterfaces(SCDCommand, "IExecCommand");
