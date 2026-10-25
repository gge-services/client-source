import { AutoRecruitmentPurchaseDialogProperties } from "./AutoRecruitmentPurchaseDialogProperties";
import { AutoRecruitmentPurchaseToolsDialog } from "./AutoRecruitmentPurchaseToolsDialog";
import { AutoRecruitmentPurchaseUnitsDialog } from "./AutoRecruitmentPurchaseUnitsDialog";
import { CastleCommand } from "./CastleCommand";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { UnitProductionConst } from "../../../ggs.dll/reconstructed/exports/UnitProductionConst";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class LRICommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_LOOP_RECRUITMENT_INFO;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        var __s9local1 = new AutoRecruitmentPurchaseDialogProperties(parsedResponse);
        CastleDialogHandler.getInstance().registerDefaultDialogs(this.getDialogClassByListId(__s9local1.listId), __s9local1);
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
  getDialogClassByListId(__s12param0) {
    switch (__s12param0) {
      case UnitProductionConst.TOOLS_LIST:
        return AutoRecruitmentPurchaseToolsDialog;
      default:
        return AutoRecruitmentPurchaseUnitsDialog;
    }
  }
}
classImplementsInterfaces(LRICommand, "IExecCommand");
