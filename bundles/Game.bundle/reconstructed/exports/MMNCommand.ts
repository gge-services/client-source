import { CastleCommand } from "./CastleCommand";
import { CastleMessageDataEvent } from "./CastleMessageDataEvent";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
export class MMNCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_MARKET_CARRIAGE_NOTIFY;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        CastleModel.otherPlayerData.parseOwnerInfoArray(parsedResponse.O);
        this.controller.dispatchEvent(new CastleMessageDataEvent(CastleMessageDataEvent.GET_TRADE_DATA, [parsedResponse]));
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
        this.controller.dispatchEvent(new CastleMessageDataEvent(CastleMessageDataEvent.GET_TRADE_DATA));
    }
    return false;
  }
}
