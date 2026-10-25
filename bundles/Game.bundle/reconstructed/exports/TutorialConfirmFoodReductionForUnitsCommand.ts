import { TutorialBasicQuestStarterActionCommand } from "./TutorialBasicQuestStarterActionCommand";
export class TutorialConfirmFoodReductionForUnitsCommand extends TutorialBasicQuestStarterActionCommand {
  finishStep() {
    super.finishStep();
  }
  getTrackOnQuestConfirmID() {
    return "s_060_060_dialog_confirmed";
  }
}
