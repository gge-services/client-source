import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
export class FCOCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_FAST_COMPLETE_OBJECT;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        if (CastleModel.areaData.activeArea) {
          CastleModel.areaData.activeArea.updater.parseFCO(parsedResponse);
        }
        CastleModel.currencyData.parseGCU(parsedResponse.gcu);
        break;
      case ERROR.INVALID_OBJECT_ID:
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
