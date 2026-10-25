import { CastleCoinColossusDonateDialog } from "./CastleCoinColossusDonateDialog";
import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
export class CCDCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_COLOSSUS_COIN_DEPOSIT_RESOURCES;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        this.layoutManager.hideDialog(CastleCoinColossusDonateDialog);
        var parsedResponse = JSON.parse(responseFields[1]);
        CastleModel.specialEventData.parse_CHE(parsedResponse.che);
        CastleModel.currencyData.parseGCU(parsedResponse.gcu);
        CastleModel.areaData.activeArea.updater.parseGRC(parsedResponse.grc);
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
