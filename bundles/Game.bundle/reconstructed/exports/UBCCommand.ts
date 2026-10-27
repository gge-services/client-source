import { CastleDispatchingCommand } from "./CastleDispatchingCommand";
import { CastleModel } from "./CastleModel";
import { CastleServerMessageArrivedEvent } from "./CastleServerMessageArrivedEvent";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class UBCCommand extends CastleDispatchingCommand {
  get cmdId() {
    return ClientConstSF.S2C_USE_BOOSTER_CONSUMABLE_ON_CONSTRUCTION_ITEM_EVENT;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        if (CastleModel.areaData.activeArea) {
          CastleModel.areaData.activeArea.updater.parseConstructionItems(parsedResponse.CI);
        }
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    this.dispatchArrivedEvent(statusCode, responseFields);
    return false;
  }
  get eventType() {
    return CastleServerMessageArrivedEvent.UBC_ARRIVED;
  }
}
classImplementsInterfaces(UBCCommand, "IExecCommand");
