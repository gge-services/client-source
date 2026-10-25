import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
export class DUPCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_DISMISS_UNIT_PACKAGE;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        CastleModel.areaData.activeArea.updater.parseGPA(parsedResponse.gpa);
        CastleModel.militaryData.parse_GUI(parsedResponse.gui);
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
