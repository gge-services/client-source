import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
export class CMICommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_MARKET_INFO;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        CastleModel.tradeData.parse_CMI(parsedResponse);
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
        CastleModel.tradeData.dispatchFailedMarketInfo();
    }
    return false;
  }
}
