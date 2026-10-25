import { C2SPointEventGetPointsVO } from "./C2SPointEventGetPointsVO";
import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { EventConst } from "../../../ggs.dll/reconstructed/exports/EventConst";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class BKPCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_BUY_BEGGINGKNIGHTS_POINT;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(__s9param0, __s9param1) {
    switch (__s9param0) {
      case ERROR.ALL_OK:
        CastleModel.smartfoxClient.sendCommandVO(new C2SPointEventGetPointsVO(EventConst.EVENTTYPE_BEGGING_KNIGHTS));
        break;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  }
}
classImplementsInterfaces(BKPCommand, "IExecCommand");
