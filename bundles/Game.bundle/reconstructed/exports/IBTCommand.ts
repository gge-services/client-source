import { CastleCommand } from "./CastleCommand";
import { CastleFightDataEvent } from "./CastleFightDataEvent";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
export class IBTCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_INSTANT_BUY_TOOL;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        this.controller.dispatchEvent(new CastleFightDataEvent(CastleFightDataEvent.NEW_TOOL_BOUGHT, [parsedResponse.O]));
        CastleModel.currencyData.parseGCU(parsedResponse.gcu);
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
