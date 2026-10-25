import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { OpenGateEvent } from "./OpenGateEvent";
import { TimeConst } from "../../../ggs.dll/reconstructed/exports/TimeConst";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class KIKCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_KIKERIKI;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        if (CastleModel.userData.castleList && parsedResponse.DOW == TimeConst.MONDAY) {
          CastleModel.userData.castleList.resetOpenGateCounter();
          this.controller.dispatchEvent(new OpenGateEvent(OpenGateEvent.CHANGE_OPEN_GATE_COUNTER));
        }
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
classImplementsInterfaces(KIKCommand, "IExecCommand");
