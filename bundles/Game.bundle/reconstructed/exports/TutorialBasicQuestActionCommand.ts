import { TutorialBasicActionCommand } from "./TutorialBasicActionCommand";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class TutorialBasicQuestActionCommand extends TutorialBasicActionCommand {
  internalExecute() {
    this.filter.replace(this.getDialogClass());
    var __s5local0 = this.getTrackOnQuestConfirmID();
    if (__s5local0) {
      this.trackStep(__s5local0);
    }
    this.onQuestConfirmPre();
  }
  onQuestConfirmPre() {
    this.onQuestConfirm();
  }
  onQuestConfirm() {
    this.finishStep();
  }
  getDialogClass() {
    return this.constructor;
  }
  getTrackOnQuestConfirmID() {
    return null;
  }
}
classImplementsInterfaces(TutorialBasicQuestActionCommand, "ISimpleCommand");
