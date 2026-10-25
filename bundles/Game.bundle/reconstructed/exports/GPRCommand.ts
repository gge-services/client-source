import { CastleBasicController } from "./CastleBasicController";
import { CastleCommand } from "./CastleCommand";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { GlobalServerPreviousRunInfoEvent } from "./GlobalServerPreviousRunInfoEvent";
import { GlobalServerPreviousRunInfoVO } from "./GlobalServerPreviousRunInfoVO";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class GPRCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_GLOBAL_SERVER_PREVIOUS_RUN_INFO;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        var __s9local1 = new GlobalServerPreviousRunInfoVO();
        __s9local1.parseParams(parsedResponse);
        CastleBasicController.getInstance().dispatchEvent(new GlobalServerPreviousRunInfoEvent(GlobalServerPreviousRunInfoEvent.GLOBAL_SERVER_PREVIOUS_RUN_INFO_RECEIVED, __s9local1));
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
classImplementsInterfaces(GPRCommand, "IExecCommand");
