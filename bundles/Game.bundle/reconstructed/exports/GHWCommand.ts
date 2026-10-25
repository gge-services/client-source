import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
export class GHWCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_HELLO_WORLD;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        var __s9local1 = CastleModel.areaData.activeArea;
        if (__s9local1) {
          CastleModel.areaData.changePosOfOwnArea(new __s0local0(parsedResponse.X, parsedResponse.Y));
          CastleModel.worldmapCameraData.lastVisitedCastlePosition = __s9local1.areaInfo.absAreaPos;
        }
        CastleModel.worldmapCameraData.savedMapPosition = null;
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
