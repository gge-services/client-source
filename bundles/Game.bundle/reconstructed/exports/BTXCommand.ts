import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class BTXCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_BRIBE_TAX_COLLECTOR;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        CastleModel.currencyData.parseGCU(parsedResponse.gcu);
        CastleModel.boostData.parse_BOI(parsedResponse.boi);
        CastleModel.taxData.parse_TXI(parsedResponse.txi);
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
classImplementsInterfaces(BTXCommand, "IExecCommand");
