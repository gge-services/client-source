import { CastleCommand } from "./CastleCommand";
import { CastleDataHolder } from "./CastleDataHolder";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class KGVCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_KINGDOM_GET_VILLAGE_LIST;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        if (CastleDataHolder.instance.gbdParsed) {
          var __s9local0 = JSON.parse(responseFields[1]);
          CastleModel.userData.parse_KGV(__s9local0);
        }
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
classImplementsInterfaces(KGVCommand, "IExecCommand");
