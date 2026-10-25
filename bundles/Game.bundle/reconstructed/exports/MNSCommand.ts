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
  executeCommand(__s9param0, __s9param1) {
    var __s9local0 = __s9param1 && __s9param1[1] ? JSON.parse(__s9param1[1]) : null;
    switch (__s9param0) {
      case ERROR.ALL_OK:
        CastleModel.playerEmailData.parse_MNS(__s9local0);
        break;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  }
}
classImplementsInterfaces(MNSCommand, "IExecCommand");
