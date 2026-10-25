import { AutoRecruitmentBuyRecruitmentSlots } from "./AutoRecruitmentBuyRecruitmentSlots";
import { AutoRecruitmentBuyRecruitmentSlotsProperties } from "./AutoRecruitmentBuyRecruitmentSlotsProperties";
import { AutoRecruitmentEvent } from "./AutoRecruitmentEvent";
import { CastleCommand } from "./CastleCommand";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
export class URLCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_UPDATE_RECRUITMENT_LOOP;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        this.controller.dispatchEvent(new AutoRecruitmentEvent(AutoRecruitmentEvent.ON_PURCHASE_CONFIRM));
        break;
      case ERROR.NO_FREE_CONSTRUCTION_SLOT:
        var parsedResponse = JSON.parse(responseFields[1]);
        CastleDialogHandler.getInstance().registerDefaultDialogs(AutoRecruitmentBuyRecruitmentSlots, new AutoRecruitmentBuyRecruitmentSlotsProperties(parsedResponse.LID, parsedResponse.AMT));
        this.controller.dispatchEvent(new AutoRecruitmentEvent(AutoRecruitmentEvent.ON_PURCHASE_DENY));
        break;
      default:
        this.controller.dispatchEvent(new AutoRecruitmentEvent(AutoRecruitmentEvent.ON_PURCHASE_DENY));
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
