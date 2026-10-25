import { CastleCommand } from "./CastleCommand";
import { CastleKingdomEvent } from "./CastleKingdomEvent";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
export class KSTCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_KINGDOM_SKIP_TRANSFER;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        CastleModel.currencyData.parseGCU(parsedResponse.gcu);
        CastleModel.areaData.activeArea.updater.parseGRC(parsedResponse.grc);
        CastleModel.militaryData.parse_GUI(parsedResponse.gui);
        CastleModel.kingdomData.parse_KPI(parsedResponse.kpi);
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
        CastleModel.kingdomData.dispatchEvent(new CastleKingdomEvent(CastleKingdomEvent.KINGDOMDATA_ARRIVED));
    }
    return false;
  }
}
