import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class MNSCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_MAIL_NEWSLETTER_STATUS;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    var __s9local0 = responseFields && responseFields[1] ? JSON.parse(responseFields[1]) : null;
    switch (statusCode) {
      case ERROR.ALL_OK:
        CastleModel.playerEmailData.parse_MNS(__s9local0);
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
classImplementsInterfaces(MNSCommand, "IExecCommand");
