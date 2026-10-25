import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { CastlePackageEvent } from "./CastlePackageEvent";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class GBCCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_GET_PACKAGE_BUY_COUNT;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        if (parsedResponse.PL) {
          CastleModel.eventPackageData.parseGBC(parsedResponse.PL);
        }
        this.controller.dispatchEvent(new CastlePackageEvent(CastlePackageEvent.PACKAGEINFO_UPDATED));
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
classImplementsInterfaces(GBCCommand, "IExecCommand");
