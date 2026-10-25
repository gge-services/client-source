import { castAs } from "../../../ggs.dll/reconstructed/exports/castAs";
import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { int } from "../../../ggs.dll/reconstructed/exports/int";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class PEPCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_POINT_EVENT_POINTS;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  exec(__s9param0) {
    var __s9local0 = int(__s9param0[0]);
    var __s9local1 = __s9param0[1];
    switch (__s9local0) {
      case ERROR.ALL_OK:
        var __s9local2 = JSON.parse(__s9local1[1]);
        var __s9local3 = CastleModel.specialEventData.getActiveEventByEventId(__s9local2.EID);
        if (__s9local3) {
          __s9local3.setRankAndPoints(__s9local2.OR, __s9local2.OP, __s9local2.PT);
        }
        if (__s9local2.BLPP != undefined) {
          var __s9local4 = castAs(__s9local3, "AllianceRaidbossEventEventVO");
          if (__s9local4) {
            __s9local4.currentBossLevelPoints = __s9local2.BLPP;
          }
        }
        break;
      default:
        this.showErrorDialog(__s9local0, __s9local1);
    }
  }
}
classImplementsInterfaces(PEPCommand, "IExecCommand");
