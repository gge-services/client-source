import { TutorialBasicQuestStarterActionCommand } from "./TutorialBasicQuestStarterActionCommand";
export class TutorialConfirmRecruitUnitsCommand extends TutorialBasicQuestStarterActionCommand {
  getTrackOnQuestConfirmID() {
    return "s_060_020_dialog_confirmed";
  }
}
