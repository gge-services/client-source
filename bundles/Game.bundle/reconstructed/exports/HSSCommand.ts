import { CastleBasicController } from "./CastleBasicController";
import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
const __s0local0 = createjs.Event;
export class HSSCommand extends CastleCommand {
  static EVENT_SKIP_HOSPITAL_SLOT_FAILED: any;
  constructor() {
    CONSTRUCTOR_HACK;
    super();
  }
  get cmdId() {
    return ClientConstSF.S2C_SKIP_HOSPITAL_SLOT;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        CastleModel.currencyData.parseGCU(parsedResponse.gcu);
        break;
      default:
        CastleBasicController.getInstance().dispatchEvent(new __s0local0(HSSCommand.EVENT_SKIP_HOSPITAL_SLOT_FAILED, false, false));
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
  static __initialize_static_members() {
    HSSCommand.EVENT_SKIP_HOSPITAL_SLOT_FAILED = "EVENT_SKIP_HOSPITAL_SLOT_FAILED";
  }
}
classImplementsInterfaces(HSSCommand, "IExecCommand");
HSSCommand.__initialize_static_members();
