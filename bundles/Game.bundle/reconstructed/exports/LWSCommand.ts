import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
export class LWSCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_LUCKY_WHEEL_SPIN;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        if (parsedResponse.LWET && parsedResponse.LWET == 1) {
          CastleModel.saleDaysLuckyWheelData.parseLWS(parsedResponse);
          CastleModel.saleDaysLuckyWheelData.onWinningCategoryReceived();
        } else {
          CastleModel.luckyWheelData.parseLWS(parsedResponse);
          CastleModel.luckyWheelData.onWinningCategoryReceived();
        }
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
