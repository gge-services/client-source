import { castAs } from "../../../ggs.dll/reconstructed/exports/castAs";
import { CastleCommand } from "./CastleCommand";
import { CastleLayoutManager } from "./CastleLayoutManager";
import { CastleModel } from "./CastleModel";
import { CastleWorldmapEvent } from "./CastleWorldmapEvent";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
export class HACCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_HIDE_ALIEN_CAMP;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(__s9param0, __s9param1) {
    switch (__s9param0) {
      case ERROR.ALL_OK:
        if (CastleModel.worldmapData) {
          var __s9local0 = JSON.parse(__s9param1[1]).CP;
          if (__s9local0 != null) {
            for (var __s9local1 = 0, __s9local2 = __s9local0; __s9local1 < __s9local2.length; __s9local1++) {
              var __s9local3 = __s9local2[__s9local1];
              if (__s9local3 !== undefined) {
                var __s9local4 = castAs(CastleModel.worldmapData.areaTiles.getVOForAreaByXY(__s9local3[0], __s9local3[1]), "AAlienInvasionMapobjectVO");
                if (__s9local4 && __s9local4.isVisibleOnMap) {
                  __s9local4.isVisibleOnMap = false;
                }
              }
            }
          }
          this.controller.dispatchEvent(new CastleWorldmapEvent(CastleWorldmapEvent.REMOVED_ALIEN_CASTLE_FROM_MAP, __s9local0));
          var __s9local5 = CastleLayoutManager.getInstance();
          if (__s9local5.worldmapScreen && __s9local5.worldmapScreen.renderer) {
            __s9local5.worldmapScreen.renderer.invalidateMap();
            __s9local5.worldmapScreen.renderer.invalideteMovements();
          }
        }
        break;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  }
}
