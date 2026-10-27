import { castAs } from "../../../ggs.dll/reconstructed/exports/castAs";
import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { EventConst } from "../../../ggs.dll/reconstructed/exports/EventConst";
import { int } from "../../../ggs.dll/reconstructed/exports/int";
import { TimeLimitedCampaignUpdateEvent } from "./TimeLimitedCampaignUpdateEvent";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class CQSCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_CAMPAIGN_QUEST_STATUS;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  exec(commandResponse) {
    var __s9local0 = int(commandResponse[0]);
    var __s9local1 = commandResponse[1];
    switch (__s9local0) {
      case ERROR.ALL_OK:
        var __s9local2 = JSON.parse(__s9local1[1]);
        var __s9local3 = castAs(CastleModel.specialEventData.getActiveEventByEventId(EventConst.EVENTTYPE_TIMELIMITED_CAMPAIGN_EVENT), "TimeLimitedCampaignEventEventVO");
        if (!__s9local3) {
          return;
        }
        __s9local3.parseCQS(__s9local2);
        this.controller.dispatchEvent(new TimeLimitedCampaignUpdateEvent(TimeLimitedCampaignUpdateEvent.CAMPAIGN_UPDATED));
        break;
      default:
        this.showErrorDialog(__s9local0, __s9local1);
    }
  }
}
classImplementsInterfaces(CQSCommand, "IExecCommand");
