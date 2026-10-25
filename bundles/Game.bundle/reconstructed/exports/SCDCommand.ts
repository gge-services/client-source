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
  executeCommand(__s9param0, __s9param1) {
    var __s9local0 = null;
    switch (__s9param0) {
      case ERROR.ALL_OK:
        if (__s9param1 && __s9param1.length > 0) {
          __s9local0 = JSON.parse(__s9param1[1]);
        }
        CastleModel.userData.parse_SCD(__s9local0);
        break;
      case ERROR.INVALID_OBJECT_STATE:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    this.dispatchArrivedEvent(__s9param0, __s9local0);
    return false;
  }
  dispatchArrivedEvent(__s13param0, __s13param1) {
    this.controller.dispatchEvent(new CastleServerMessageArrivedEvent(CastleServerMessageArrivedEvent.SDC_ARRIVED, [__s13param0, __s13param1]));
  }
}
classImplementsInterfaces(SCDCommand, "IExecCommand");
