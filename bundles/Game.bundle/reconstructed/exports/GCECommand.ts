import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class GCECommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_GET_TEMP_SERVER_CHARGE_CHAMP_EFFECTS;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        CastleModel.tempServerData.parse_RerollChargeEffects(parsedResponse);
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return true;
  }
}
classImplementsInterfaces(GCECommand, "IExecCommand");
