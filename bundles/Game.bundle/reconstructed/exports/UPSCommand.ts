import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class UPSCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_UNLOCK_PACKAGE_SLOT;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        CastleModel.militaryData.parse_SPL(parsedResponse.spl);
        CastleModel.currencyData.parseGCU(parsedResponse.gcu);
        CastleModel.boostData.parse_BOI(parsedResponse.boi);
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
classImplementsInterfaces(UPSCommand, "IExecCommand");
