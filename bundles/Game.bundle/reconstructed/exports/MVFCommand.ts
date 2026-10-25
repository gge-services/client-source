import { BasicModel } from "../../../ggs.dll/reconstructed/exports/BasicModel";
import { C2SGetAllMovementsVO } from "./C2SGetAllMovementsVO";
import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
export class MVFCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_MOVEMENT_FILTER_OPTION_EVENT;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        CastleModel.settingsData.parse_MVF(parsedResponse);
        BasicModel.smartfoxClient.sendCommandVO(new C2SGetAllMovementsVO());
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
