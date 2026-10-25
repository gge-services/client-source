import { CastleCommand } from "./CastleCommand";
import { CastleLayoutManager } from "./CastleLayoutManager";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class AQICommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_ALLIANCE_QUIT;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        CastleModel.chatData.resetHistory();
        CastleModel.userData.parse_GAL(parsedResponse.gal);
        CastleModel.allianceData.resetMyAlliance();
        CastleModel.subscriptionData.requestASC();
        if (CastleLayoutManager.getInstance().currentState == CastleLayoutManager.STATE_WORLDMAP) {
          var __s9local1 = CastleLayoutManager.getInstance().worldmapScreen.renderer.camera.getAreaViewportRectangle();
          CastleModel.worldmapData.updateAreaRange(__s9local1.x, __s9local1.y, __s9local1.x + __s9local1.width, __s9local1.y + __s9local1.height);
          this.layoutManager.worldmapScreen.renderer.renderLayer();
        }
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
classImplementsInterfaces(AQICommand, "IExecCommand");
