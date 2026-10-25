import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class CATCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_CREATE_ARMY_TRAVEL_MOVEMENT;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        CastleModel.otherPlayerData.parseOwnerInfoArray(parsedResponse.O);
        CastleModel.armyData.parseMapMovementArray([parsedResponse.A]);
        CastleModel.currencyData.parseGCU(parsedResponse.gcu);
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
classImplementsInterfaces(CATCommand, "IExecCommand");
