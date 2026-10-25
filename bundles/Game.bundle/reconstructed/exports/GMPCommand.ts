import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { CastleMonumentProgressEvent } from "./CastleMonumentProgressEvent";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
export class GMPCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_GET_MONUMENT_PROGRESS;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        CastleModel.monumentsData.updateLandmark(parsedResponse);
        this.controller.dispatchEvent(new CastleMonumentProgressEvent(CastleMonumentProgressEvent.NEW_PROGRESS, [parsedResponse.OID, parsedResponse.CP]));
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
