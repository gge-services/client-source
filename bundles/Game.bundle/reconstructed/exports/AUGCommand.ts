import { CastleAllianceDataEvent } from "./CastleAllianceDataEvent";
import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class AUGCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_ALLIANCE_UPGRADE;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        var __s9local1 = CastleModel.allianceData.myAllianceVO;
        if (__s9local1) {
          __s9local1.parseStorageFromServer(parsedResponse.STO);
          __s9local1.parseABL(parsedResponse.ABL);
          CastleModel.allianceData.dispatchEvent(new CastleAllianceDataEvent(CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED, __s9local1));
        }
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
classImplementsInterfaces(AUGCommand, "IExecCommand");
