import { CastleAllianceDataEvent } from "./CastleAllianceDataEvent";
import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
const __s0local0 = createjs.Event;
export class SAECommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_SET_ALLIANCE_EMBLEM;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(__s9param0, __s9param1) {
    switch (__s9param0) {
      case ERROR.ALL_OK:
        CastleModel.allianceData.dispatchEvent(new __s0local0(CastleAllianceDataEvent.ALLIANCE_CREST_SAVED_OK, false, false));
        break;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  }
}
classImplementsInterfaces(SAECommand, "IExecCommand");
