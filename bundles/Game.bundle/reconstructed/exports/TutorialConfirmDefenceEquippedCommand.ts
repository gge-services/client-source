import { TutorialBasicQuestStarterActionCommand } from "./TutorialBasicQuestStarterActionCommand";
export class TutorialConfirmDefenceEquippedCommand extends TutorialBasicQuestStarterActionCommand {
  getTrackOnQuestConfirmID() {
    return "tracking s_090_140_dialog_confirmed";
  }
}
