import { castAs } from "../../../ggs.dll/reconstructed/exports/castAs";
import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { CastleSpecialEventEvent } from "./CastleSpecialEventEvent";
import { ClientConstSF } from "./ClientConstSF";
import { CommKeys } from "../../../ggs.dll/reconstructed/exports/CommKeys";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class AICCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_ALLIANCE_INVASION_CAMP_INFO;
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
        var __s9local1 = __s9local0[CommKeys.ALLIANCE_CAMP][0];
        if (!__s9local1) {
          return;
        }
        var __s9local2 = __s9local1[CommKeys.EVENT_ID];
        var __s9local3 = castAs(CastleModel.specialEventData.getActiveEventByEventId(__s9local2), "IAllianceCampUpdateable");
        if (__s9local3) {
          var __s9local4 = CastleModel.allianceInvasionCampData.getAllianceCamp(__s9local1[CommKeys.ALLIANCE_CAMP_ID], __s9local3.isDifficultyScalingActivated ? __s9local1[CommKeys.ALLIANCE_CAMP_ID] : -1);
          if (!__s9local4) {
            return false;
          }
          __s9local3.parse_AIC(__s9local4, __s9local1[CommKeys.ALLIANCE_RAGE]);
          CastleModel.specialEventData.dispatchEvent(new CastleSpecialEventEvent(CastleSpecialEventEvent.REFRESH_SPECIALEVENT, CastleModel.specialEventData.getActiveEventByEventId(__s9local2)));
        }
        break;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  }
}
classImplementsInterfaces(AICCommand, "IExecCommand");
