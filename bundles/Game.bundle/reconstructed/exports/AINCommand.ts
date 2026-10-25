import { CastleAllianceDataEvent } from "./CastleAllianceDataEvent";
import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class AINCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_GET_ALLIANCE_INFO;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        CastleModel.allianceData.parse_AIN(parsedResponse);
        if (this.layoutManager.worldmapScreen && this.layoutManager.worldmapScreen.renderer) {
          this.layoutManager.worldmapScreen.renderer.invalidateMap();
        }
        CastleModel.subscriptionData.requestASC();
        break;
      default:
        CastleModel.allianceData.dispatchEvent(new CastleAllianceDataEvent(CastleAllianceDataEvent.ALLIANCEDATA_UPDATED, null));
        CastleModel.allianceData.dispatchEvent(new CastleAllianceDataEvent(CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED, null));
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
classImplementsInterfaces(AINCommand, "IExecCommand");
