import { TutorialBasicQuestStarterActionCommand } from "./TutorialBasicQuestStarterActionCommand";
export class TutorialConfirmAttackRobberBaronCommand extends TutorialBasicQuestStarterActionCommand {
  finishStep() {
    super.finishStep();
  }
  getTrackOnQuestConfirmID() {
    return "s_080_050_dialog_confirmed";
  }
}
