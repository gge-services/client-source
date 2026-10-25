import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { CommKeys } from "../../../ggs.dll/reconstructed/exports/CommKeys";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class CRINCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_GET_CRAFTING_INFO;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        if (parsedResponse[CommKeys.CRAFTING_AREA_INFO]) {
          CastleModel.craftingData.parseAllQueueData(parsedResponse);
        } else {
          CastleModel.craftingData.parseBuildingQueueData(parsedResponse);
        }
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
classImplementsInterfaces(CRINCommand, "IExecCommand");
