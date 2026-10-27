import { CastleCommand } from "./CastleCommand";
import { CastleMilitaryDataEvent } from "./CastleMilitaryDataEvent";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class RUECommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_RECEIVED_UNIT;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    var __s9local0;
    switch (statusCode) {
      case ERROR.ALL_OK:
        __s9local0 = JSON.parse(responseFields[1]);
        CastleModel.militaryData.parse_rue(__s9local0);
        CastleModel.userCastleListDetailed.parse_rue(__s9local0);
        this.controller.dispatchEvent(new CastleMilitaryDataEvent(CastleMilitaryDataEvent.UNIT_UPDATED, [__s9local0]));
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
classImplementsInterfaces(RUECommand, "IExecCommand");
