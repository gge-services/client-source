import { BasicDialogHandler } from "../../../ggs.dll/reconstructed/exports/BasicDialogHandler";
import { castAs } from "../../../ggs.dll/reconstructed/exports/castAs";
import { CastleCommand } from "./CastleCommand";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleModel } from "./CastleModel";
import { CastleQuestCompletedDialog } from "./CastleQuestCompletedDialog";
import { CastleQuestCompletedDialogProperties } from "./CastleQuestCompletedDialogProperties";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { EventConst } from "../../../ggs.dll/reconstructed/exports/EventConst";
import { int } from "../../../ggs.dll/reconstructed/exports/int";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class QFICommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_QUEST_FINISHED;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  exec(__s9param0) {
    var __s9local0 = int(__s9param0[0]);
    var __s9local1 = __s9param0[1];
    switch (__s9local0) {
      case ERROR.ALL_OK:
        var __s9local2 = JSON.parse(__s9local1[1]);
        var __s9local3 = int(__s9local2.QID);
        var __s9local4 = CastleModel.questData.getQuestPrototype(__s9local3);
        if (!__s9local4) {
          return;
        }
        if (__s9local4.isCampaignQuest) {
          var __s9local5 = castAs(CastleModel.specialEventData.getActiveEventByEventId(EventConst.EVENTTYPE_TIMELIMITED_CAMPAIGN_EVENT), "TimeLimitedCampaignEventEventVO");
          if (__s9local5 && __s9local5.getQuestByID(__s9local4.questID)) {
            __s9local4 = __s9local5.getQuestByID(__s9local4.questID);
          }
        }
        if (!__s9local4.isStarterQuest && !__s9local4.hidden) {
          CastleDialogHandler.getInstance().registerDefaultDialogs(CastleQuestCompletedDialog, new CastleQuestCompletedDialogProperties(__s9local4, __s9local2), true, BasicDialogHandler.PRIORITY_HIGH);
          if (this.layoutManager.isIngameState) {
            CastleDialogHandler.getInstance().blockDialogs = false;
          }
        }
        CastleModel.questData.finishQuest(__s9local2.QID);
        break;
      default:
        this.showErrorDialog(__s9local0, __s9local1);
    }
  }
}
classImplementsInterfaces(QFICommand, "IExecCommand");
