import { BasicStandardOkDialogProperties } from "../../../ggs.dll/reconstructed/exports/BasicStandardOkDialogProperties";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleEventTeaserDialog } from "./CastleEventTeaserDialog";
import { CastleModel } from "./CastleModel";
import { CastleStandardOkDialog } from "./CastleStandardOkDialog";
import { CollectableManager } from "./CollectableManager";
import { EventAnnouncementDialogProperties } from "./EventAnnouncementDialogProperties";
import { GenericTextIds } from "../../../ggs.dll/reconstructed/exports/GenericTextIds";
import { instanceOfClass } from "../../../ggs.dll/reconstructed/exports/instanceOfClass";
import { int } from "../../../ggs.dll/reconstructed/exports/int";
import { Localize } from "../../../ggs.dll/reconstructed/exports/Localize";
import { SimpleCommand } from "../../../ggs.dll/reconstructed/exports/SimpleCommand";
export class OpenEventAnnouncementDialogCommand extends SimpleCommand {
  execute(__s5param0 = null) {
    if (!__s5param0 || !instanceOfClass(__s5param0, "MessageEventAnnouncementVO")) {
      throw new Error("OpenEventAnnouncementDialogCommand expects a MessageEventAnnouncementVO as its commandVars");
    }
    this.messageEventAnnouncementVO = __s5param0;
    var __s5local0 = this.messageEventAnnouncementVO.eventId;
    var __s5local1 = this.messageEventAnnouncementVO.durationTS;
    CastleModel.eventAnnouncementData.isClaimed(__s5local1);
    if (CastleModel.eventAnnouncementData.isAvailable(__s5local1)) {
      var __s5local2 = int(CastleModel.eventAnnouncementData.getLeagueTypeId(__s5local0));
      if (__s5local2 != -1) {
        var __s5local3 = CastleModel.eventAnnouncementData.getEventAnnouncementVO(__s5local0, __s5local2);
        var __s5local4 = CollectableManager.parser.createListFromRewardIdsString(__s5local3.teaserRewardIDs);
        var __s5local5 = CastleModel.rewardData.getListById(__s5local3.messageRewardID);
        var __s5local6 = new EventAnnouncementDialogProperties(__s5local0, __s5local1, __s5local4, __s5local5);
        CastleDialogHandler.getInstance().registerDefaultDialogs(CastleEventTeaserDialog, __s5local6);
      }
    } else {
      CastleDialogHandler.getInstance().registerDefaultDialogs(CastleStandardOkDialog, new BasicStandardOkDialogProperties(Localize.text(GenericTextIds.ALERT_INFORMATION), Localize.text("dialog_eventAnnouncements_expired")));
    }
  }
}
