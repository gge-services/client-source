import { CastleCommand } from "./CastleCommand";
import { CastleShowUpgradableBuildingsEvent } from "./CastleShowUpgradableBuildingsEvent";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class SUBCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_SHOW_ME_UPGRADABLE_BUILDINGS;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        this.controller.dispatchEvent(new CastleShowUpgradableBuildingsEvent(CastleShowUpgradableBuildingsEvent.UPGRADABLE_BUILDINGS_DATA_RECEIVED, parsedResponse));
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
classImplementsInterfaces(SUBCommand, "IExecCommand");
