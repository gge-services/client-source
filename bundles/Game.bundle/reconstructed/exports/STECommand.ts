import { CastleCommand } from "./CastleCommand";
import { CastleLayoutManager } from "./CastleLayoutManager";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
export class STECommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_SELECT_TITLE_EVENT;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(__s9param0, __s9param1) {
    switch (__s9param0) {
      case ERROR.ALL_OK:
        if (__s9param1.length > 0) {
          var __s9local0 = JSON.parse(__s9param1[1]);
          CastleModel.titleData.parseSTE(__s9local0);
          if (CastleLayoutManager.getInstance().isInState(CastleLayoutManager.STATE_WORLDMAP)) {
            var __s9local1 = CastleLayoutManager.getInstance().worldmapScreen.renderer.camera.getAreaViewportRectangle();
            CastleModel.worldmapData.updateAreaRange(__s9local1.x, __s9local1.y, __s9local1.x + __s9local1.width, __s9local1.y + __s9local1.height);
          }
        }
        break;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  }
}
