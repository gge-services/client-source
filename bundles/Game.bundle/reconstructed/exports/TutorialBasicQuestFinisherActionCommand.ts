import { CastleQuestCompletedDialog } from "./CastleQuestCompletedDialog";
import { TutorialBasicQuestActionCommand } from "./TutorialBasicQuestActionCommand";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class TutorialBasicQuestFinisherActionCommand extends TutorialBasicQuestActionCommand {
  onQuestConfirmPre() {
    this.tutorialController.waitForDialogHide(this.getDialogClass(), this.bindFunction(this.onQuestConfirm));
  }
  getDialogClass() {
    return CastleQuestCompletedDialog;
  }
}
classImplementsInterfaces(TutorialBasicQuestFinisherActionCommand, "ISimpleCommand");
