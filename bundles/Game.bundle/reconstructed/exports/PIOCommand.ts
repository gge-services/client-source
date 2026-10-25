import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { Iso } from "./Iso";
export class PIOCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_PLACE_CUSTOM_INVENTORY_OBJECT;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(__s9param0, __s9param1) {
    var __s9local0;
    Iso.renderer.mouse.cancelDraggedTarget();
    switch (__s9param0) {
      case ERROR.ALL_OK:
        var __s9local1 = (__s9local0 = JSON.parse(__s9param1[1])).NO[1];
        CastleModel.areaData.activeArea.updater.parseNewIsoObject(__s9local0);
        CastleModel.decoStorage.parseSIN(__s9local0.sin);
        if (Iso.data.areaData.isoData) {
          Iso.data.updater.onGainedBuildingPoints(__s9local1, -1);
        }
        break;
      case ERROR.INVALID_POSITION:
        break;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  }
}
