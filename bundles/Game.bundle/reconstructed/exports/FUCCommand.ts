import { CastleCommand } from "./CastleCommand";
import { CastleUnitCapacityEvent } from "./CastleUnitCapacityEvent";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class FUCCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_GET_CAMP_UNIT_CAPACITY;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        this.controller.dispatchEvent(new CastleUnitCapacityEvent(CastleUnitCapacityEvent.UNIT_CAPACITY_CHANGED, Math.max(parsedResponse.FUC, 0)));
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
classImplementsInterfaces(FUCCommand, "IExecCommand");
