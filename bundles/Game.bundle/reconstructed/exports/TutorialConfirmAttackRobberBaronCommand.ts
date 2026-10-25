import { TutorialBasicQuestStarterActionCommand } from "./TutorialBasicQuestStarterActionCommand";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class TutorialConfirmAttackRobberBaronCommand extends TutorialBasicQuestStarterActionCommand {
  finishStep() {
    super.finishStep();
  }
  getTrackOnQuestConfirmID() {
    return "s_080_050_dialog_confirmed";
  }
}
classImplementsInterfaces(TutorialConfirmAttackRobberBaronCommand, "ISimpleCommand");
