import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class TKTCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_TREASUREMAP_SKIP_TRANSFER;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        CastleModel.treasureMapData.parse_TMP(parsedResponse.tmp);
        CastleModel.currencyData.parseGCU(parsedResponse.gcu);
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return true;
  }
}
classImplementsInterfaces(TKTCommand, "IExecCommand");
