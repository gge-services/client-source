import { CastleCommand } from "./CastleCommand";
import { CastleLuckyWheelGuaranteedJackpotDialog } from "./CastleLuckyWheelGuaranteedJackpotDialog";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
export class LWJCommand extends CastleCommand {
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        CastleModel.luckyWheelData.parseLWJ(parsedResponse);
        CastleModel.luckyWheelData.onWinningCategoryReceived();
        this.layoutManager.hideDialog(CastleLuckyWheelGuaranteedJackpotDialog);
        break;
      default:
        CastleModel.luckyWheelData.showGuaranteedJackpotDialog = true;
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
  get cmdId() {
    return ClientConstSF.S2C_LUCKY_WHEEL_BUY_JACKPOT;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
}
