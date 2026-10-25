import { CastleBasicController } from "./CastleBasicController";
import { CastleCommand } from "./CastleCommand";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { LinkReceivedEvent } from "./LinkReceivedEvent";
export class GILCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_GET_INSTANCE_LINK;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(__s9param0, __s9param1) {
    var __s9local0;
    if (__s9param1 && __s9param1.length > 0) {
      __s9local0 = JSON.parse(__s9param1[1]);
    }
    switch (__s9param0) {
      case ERROR.ALL_OK:
        CastleBasicController.getInstance().dispatchEvent(new LinkReceivedEvent(__s9local0.L));
        break;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  }
}
