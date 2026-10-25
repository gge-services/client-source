import { BasicStandardOkDialogProperties } from "../../../ggs.dll/reconstructed/exports/BasicStandardOkDialogProperties";
import { C2SGetAllianceInfoVO } from "./C2SGetAllianceInfoVO";
import { CastleCommand } from "./CastleCommand";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleModel } from "./CastleModel";
import { CastleStandardOkDialog } from "./CastleStandardOkDialog";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { Localize } from "../../../ggs.dll/reconstructed/exports/Localize";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class ARMCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_ALLIANCE_RERANK_MEMBER;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        CastleModel.allianceData.parse_AIN(parsedResponse.ain);
        break;
      case ERROR.IN_OTHER_ALLI:
        CastleDialogHandler.getInstance().registerDefaultDialogs(CastleStandardOkDialog, new BasicStandardOkDialogProperties(Localize.text("generic_alert_information"), Localize.text("errorCode_123")));
        CastleModel.smartfoxClient.sendCommandVO(new C2SGetAllianceInfoVO(CastleModel.allianceData.myAllianceVO.allianceId));
        break;
      case ERROR.NO_CHANGE:
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
classImplementsInterfaces(ARMCommand, "IExecCommand");
