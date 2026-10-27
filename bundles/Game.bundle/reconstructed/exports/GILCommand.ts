import { CastleBasicController } from "./CastleBasicController";
import { CastleCommand } from "./CastleCommand";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { LinkReceivedEvent } from "./LinkReceivedEvent";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class GILCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_GET_INSTANCE_LINK;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    var __s9local0;
    if (responseFields && responseFields.length > 0) {
      __s9local0 = JSON.parse(responseFields[1]);
    }
    switch (statusCode) {
      case ERROR.ALL_OK:
        CastleBasicController.getInstance().dispatchEvent(new LinkReceivedEvent(__s9local0.L));
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
classImplementsInterfaces(GILCommand, "IExecCommand");
