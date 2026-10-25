import { CastleCommand } from "./CastleCommand";
import { CastleServerMessageArrivedEvent } from "./CastleServerMessageArrivedEvent";
import { ClientConstSF } from "./ClientConstSF";
import { CommKeys } from "../../../ggs.dll/reconstructed/exports/CommKeys";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { WorldmapObjectFactory } from "./WorldmapObjectFactory";
export class TIECommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_ALLIANCE_TOWER_INFO;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(__s9param0, __s9param1) {
    switch (__s9param0) {
      case ERROR.ALL_OK:
        var __s9local0 = JSON.parse(__s9param1[1])[CommKeys.TOWERS];
        var __s9local1 = [];
        if (__s9local0 != null) {
          for (var __s9local2 = 0, __s9local3 = __s9local0; __s9local2 < __s9local3.length; __s9local2++) {
            var __s9local4 = __s9local3[__s9local2];
            if (__s9local4 !== undefined) {
              __s9local1.push(WorldmapObjectFactory.parseWorldMapArea(__s9local4));
            }
          }
        }
        this.controller.dispatchEvent(new CastleServerMessageArrivedEvent(CastleServerMessageArrivedEvent.ABG_TOWERS_LIST_INFO, __s9local1));
        break;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  }
}
