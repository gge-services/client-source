import { castAs } from "../../../ggs.dll/reconstructed/exports/castAs";
import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { CastleSpecialEventEvent } from "./CastleSpecialEventEvent";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class RPRCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_RAGE_POINTS_RECEIVED;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(__s9param0, __s9param1) {
    var __s9local0;
    if (__s9param1 && __s9param1.length > 0) {
      __s9local0 = JSON.parse(__s9param1[1]);
    }
    switch (__s9param0) {
      case ERROR.ALL_OK:
        var __s9local1 = castAs(CastleModel.specialEventData.getActiveEventByEventId(__s9local0.EID), "IAllianceCampUpdateable");
        if (__s9local1) {
          __s9local1.parse_RPR(__s9local0);
          CastleModel.specialEventData.dispatchEvent(new CastleSpecialEventEvent(CastleSpecialEventEvent.REFRESH_SPECIALEVENT, CastleModel.specialEventData.getActiveEventByEventId(__s9local0.EID)));
        }
        break;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  }
}
classImplementsInterfaces(RPRCommand, "IExecCommand");
