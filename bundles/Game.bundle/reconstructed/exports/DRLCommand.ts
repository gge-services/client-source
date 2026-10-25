import { AutoRecruitmentBuyRecruitmentSlots } from "./AutoRecruitmentBuyRecruitmentSlots";
import { AutoRecruitmentBuyRecruitmentSlotsProperties } from "./AutoRecruitmentBuyRecruitmentSlotsProperties";
import { AutoRecruitmentEvent } from "./AutoRecruitmentEvent";
import { BasicStandardOkDialogProperties } from "../../../ggs.dll/reconstructed/exports/BasicStandardOkDialogProperties";
import { CastleCommand } from "./CastleCommand";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleStandardOkDialog } from "./CastleStandardOkDialog";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { Localize } from "../../../ggs.dll/reconstructed/exports/Localize";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class DRLCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_DUPLICATE_RECRUITMENT_LOOP;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        this.controller.dispatchEvent(new AutoRecruitmentEvent(AutoRecruitmentEvent.ON_COPY_SUCCESS));
        break;
      case ERROR.NOT_ENOUGH_RESOURCES:
        CastleDialogHandler.getInstance().registerDefaultDialogs(CastleStandardOkDialog, new BasicStandardOkDialogProperties("", Localize.text("dialog_copyQueue_tools_resourcesGone")));
        break;
      case ERROR.NO_FREE_CONSTRUCTION_SLOT:
        var parsedResponse = JSON.parse(responseFields[1]);
        CastleDialogHandler.getInstance().registerDefaultDialogs(AutoRecruitmentBuyRecruitmentSlots, new AutoRecruitmentBuyRecruitmentSlotsProperties(parsedResponse.LID, parsedResponse.AMT));
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
classImplementsInterfaces(DRLCommand, "IExecCommand");
