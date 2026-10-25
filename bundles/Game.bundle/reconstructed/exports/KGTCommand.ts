import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class KGTCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_KINGDOM_GOODS_TRANSFER;
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
        CastleModel.kingdomData.parse_KPI(parsedResponse.kpi);
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
classImplementsInterfaces(KGTCommand, "IExecCommand");
