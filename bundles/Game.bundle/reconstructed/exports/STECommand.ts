import { CastleCommand } from "./CastleCommand";
import { CastleLayoutManager } from "./CastleLayoutManager";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class STECommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_SELECT_TITLE_EVENT;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        if (responseFields.length > 0) {
          var __s9local0 = JSON.parse(responseFields[1]);
          CastleModel.titleData.parseSTE(__s9local0);
          if (CastleLayoutManager.getInstance().isInState(CastleLayoutManager.STATE_WORLDMAP)) {
            var __s9local1 = CastleLayoutManager.getInstance().worldmapScreen.renderer.camera.getAreaViewportRectangle();
            CastleModel.worldmapData.updateAreaRange(__s9local1.x, __s9local1.y, __s9local1.x + __s9local1.width, __s9local1.y + __s9local1.height);
          }
        }
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
classImplementsInterfaces(STECommand, "IExecCommand");
