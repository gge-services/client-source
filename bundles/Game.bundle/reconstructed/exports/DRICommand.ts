import { AutoRecruitmentCopyToolsDialog } from "./AutoRecruitmentCopyToolsDialog";
import { AutoRecruitmentCopyUnitsDialog } from "./AutoRecruitmentCopyUnitsDialog";
import { AutoRecruitmentInfoEvent } from "./AutoRecruitmentInfoEvent";
import { CastleBasicController } from "./CastleBasicController";
import { CastleCommand } from "./CastleCommand";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { UnitProductionConst } from "../../../ggs.dll/reconstructed/exports/UnitProductionConst";
export class DRICommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_DUPLICATE_RECRUITMENT_INFO;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        CastleBasicController.getInstance().dispatchEvent(new AutoRecruitmentInfoEvent(AutoRecruitmentInfoEvent.ON_DUPLICATE_RECRUITMENT_INFO, true, parsedResponse));
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
        CastleBasicController.getInstance().dispatchEvent(new AutoRecruitmentInfoEvent(AutoRecruitmentInfoEvent.ON_DUPLICATE_RECRUITMENT_INFO, false, null));
    }
    return false;
  }
  getDialogClassByListId(__s12param0) {
    switch (__s12param0) {
      case UnitProductionConst.TOOLS_LIST:
        return AutoRecruitmentCopyToolsDialog;
      default:
        return AutoRecruitmentCopyUnitsDialog;
    }
  }
}
