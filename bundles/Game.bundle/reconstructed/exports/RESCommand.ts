import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
export class RESCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_RESEARCH_START;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        CastleModel.researchData.parse_REI(parsedResponse.rei);
        CastleModel.currencyData.parseGCU(parsedResponse.gcu);
        CastleModel.areaData.activeArea.updater.parseGRC(parsedResponse.grc);
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
