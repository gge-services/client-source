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
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        CastleModel.smartfoxClient.sendCommandVO(new C2SPointEventGetPointsVO(EventConst.EVENTTYPE_BEGGING_KNIGHTS));
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
classImplementsInterfaces(BKPCommand, "IExecCommand");
