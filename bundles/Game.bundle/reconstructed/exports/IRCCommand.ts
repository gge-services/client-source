import { castAs } from "../../../ggs.dll/reconstructed/exports/castAs";
import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { Iso } from "./Iso";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class IRCCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_RESOURCE_CITIZEN;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var __s9local0;
        if (Iso.renderer && CastleModel.resourcePoolData.ownerMovementVO) {
          __s9local0 = castAs(Iso.renderer.objects.provider.getObjectByVO(CastleModel.resourcePoolData.ownerMovementVO), "AIsoMovementVE");
        }
        var parsedResponse = JSON.parse(responseFields[1]);
        CastleModel.resourcePoolData.parseIRC(parsedResponse);
        if (__s9local0) {
          __s9local0.updateResourceIcon();
        }
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
classImplementsInterfaces(IRCCommand, "IExecCommand");
