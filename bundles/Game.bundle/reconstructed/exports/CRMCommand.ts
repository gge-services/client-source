import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
export class CRMCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_CREATE_MARKET_MOVEMENT;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        CastleModel.currencyData.parseGCU(parsedResponse.gcu);
        if (CastleModel.areaData.activeArea) {
          CastleModel.areaData.activeArea.updater.parseGRC(parsedResponse.grc);
        }
        CastleModel.otherPlayerData.parseOwnerInfoArray(parsedResponse.O);
        CastleModel.armyData.parseMapMovementArray([parsedResponse.A]);
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
