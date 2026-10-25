import { BasicModel } from "../../../ggs.dll/reconstructed/exports/BasicModel";
import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { debug } from "../../../ggs.dll/reconstructed/exports/debug";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { info } from "../../../ggs.dll/reconstructed/exports/info";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class SLTCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_SEND_LOGIN_TOKEN;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        BasicModel.networkCookie.saveLoginData(CastleModel.userData.userName, parsedResponse.LT);
        debug("persistent login token: " + parsedResponse.LT);
        this.clearDeprecatedLoginData();
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
  clearDeprecatedLoginData() {
    info("Deprecrated login data removed ... for good!");
  }
}
classImplementsInterfaces(SLTCommand, "IExecCommand");
