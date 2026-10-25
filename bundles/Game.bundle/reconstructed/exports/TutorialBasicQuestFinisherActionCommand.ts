import { CastleQuestCompletedDialog } from "./CastleQuestCompletedDialog";
import { TutorialBasicQuestActionCommand } from "./TutorialBasicQuestActionCommand";
export class TutorialBasicQuestFinisherActionCommand extends TutorialBasicQuestActionCommand {
  onQuestConfirmPre() {
    this.tutorialController.waitForDialogHide(this.getDialogClass(), this.bindFunction(this.onQuestConfirm));
  }
  getDialogClass() {
    return CastleQuestCompletedDialog;
  }
}
