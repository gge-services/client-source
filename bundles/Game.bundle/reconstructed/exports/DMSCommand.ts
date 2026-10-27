import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { instanceOfClass } from "../../../ggs.dll/reconstructed/exports/instanceOfClass";
import { int } from "../../../ggs.dll/reconstructed/exports/int";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class DMSCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_DELETE_MESSAGE;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  exec(commandResponse) {
    var __s9local0 = int(commandResponse[0]);
    var __s9local1 = commandResponse[1];
    switch (__s9local0) {
      case ERROR.ALL_OK:
        var __s9local2;
        var __s9local3 = JSON.parse(__s9local1[1]);
        if (instanceOfClass(__s9local3.MID, "Array")) {
          for (var __s9local4 = 0, __s9local5 = __s9local3.MID; __s9local4 < __s9local5.length; __s9local4++) {
            var __s9local6 = __s9local5[__s9local4];
            if (__s9local6 !== undefined) {
              __s9local2 = CastleModel.messageData.getMessageVOById(__s9local6);
              CastleModel.messageData.deleteMessageFromClientList(__s9local2);
            }
          }
        } else {
          __s9local2 = CastleModel.messageData.getMessageVOById(__s9local3.MID);
          CastleModel.messageData.deleteMessageFromClientList(__s9local2);
        }
        break;
      default:
        this.showErrorDialog(__s9local0, __s9local1);
    }
  }
}
classImplementsInterfaces(DMSCommand, "IExecCommand");
