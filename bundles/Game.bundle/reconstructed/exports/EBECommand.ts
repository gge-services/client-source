import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { Iso } from "./Iso";
export class EBECommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_BUY_EXPANSION;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        if (CastleModel.areaData.activeArea) {
          CastleModel.areaData.activeArea.updater.parseEBE(parsedResponse);
        }
        CastleModel.currencyData.parseGCU(parsedResponse.gcu);
        CastleModel.decoStorage.parseSIN(parsedResponse.sin);
        if (Iso.controller.viewUpdater) {
          Iso.controller.viewUpdater.onExpansion();
        }
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
