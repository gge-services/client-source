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
  executeCommand(statusCode, responseFields) {
    var __s9local0;
    if (responseFields && responseFields.length > 0) {
      __s9local0 = JSON.parse(responseFields[1]);
    }
    switch (statusCode) {
      case ERROR.ALL_OK:
        var __s9local1 = castAs(CastleModel.specialEventData.getActiveEventByEventId(__s9local0.EID), "IAllianceCampUpdateable");
        if (__s9local1) {
          __s9local1.parse_RPR(__s9local0);
          CastleModel.specialEventData.dispatchEvent(new CastleSpecialEventEvent(CastleSpecialEventEvent.REFRESH_SPECIALEVENT, CastleModel.specialEventData.getActiveEventByEventId(__s9local0.EID)));
        }
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
classImplementsInterfaces(RPRCommand, "IExecCommand");
