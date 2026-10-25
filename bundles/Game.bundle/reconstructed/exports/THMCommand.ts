import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
export class THMCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_CREATE_TREASUREHUNT_MOVEMENT;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        CastleModel.armyData.parseMapMovementArray([parsedResponse.TM]);
        CastleModel.currencyData.parseGCU(parsedResponse.gcu);
        CastleModel.militaryData.parse_GUI(parsedResponse.gui);
        break;
      case ERROR.CANT_START_NEW_ARMIES:
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
