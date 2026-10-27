import { CastleCommand } from "./CastleCommand";
import { CastleDataHolder } from "./CastleDataHolder";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { CommandDelayController } from "./CommandDelayController";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { int } from "../../../ggs.dll/reconstructed/exports/int";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class POLCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_PRIVATE_OFFER_LIST;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    if (!CastleDataHolder.instance.gbdParsed) {
      CommandDelayController.getInstance().addDelayCommandID(ClientConstSF.S2C_PRIVATE_OFFER_LIST);
    }
    return super.executeCommand(statusCode, responseFields);
  }
  exec(commandResponse) {
    var __s12local0 = int(commandResponse[0]);
    var __s12local1 = commandResponse[1];
    switch (__s12local0) {
      case ERROR.ALL_OK:
      case 10005:
        var __s12local2 = JSON.parse(__s12local1[1]);
        CastleModel.privateOfferData.parse_POL(__s12local2);
        break;
      default:
        this.showErrorDialog(__s12local0, __s12local1);
    }
  }
}
classImplementsInterfaces(POLCommand, "IExecCommand");
