import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class PGLCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_GET_PLAYERGIFT_LIST;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        if (responseFields.length > 0) {
          var __s9local0 = responseFields[1];
          var __s9local1 = JSON.parse(__s9local0.toString());
          CastleModel.playerGiftData.parse_PGL(__s9local1.G, __s9local1.RA);
        }
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return true;
  }
}
classImplementsInterfaces(PGLCommand, "IExecCommand");
