import { AreaDataEvent } from "./AreaDataEvent";
import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
export class CSMCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_CREATE_SPY_MOVEMENT;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        CastleModel.currencyData.parseGCU(parsedResponse.gcu);
        CastleModel.otherPlayerData.parseOwnerInfoArray(parsedResponse.O);
        CastleModel.armyData.parseMapMovementArray([parsedResponse.A]);
        this.controller.dispatchEvent(new AreaDataEvent(AreaDataEvent.ON_SPY_DATA_CHANGED));
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
