import { TutorialBasicQuestStarterActionCommand } from "./TutorialBasicQuestStarterActionCommand";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class TutorialConfirmFoodReductionForUnitsCommand extends TutorialBasicQuestStarterActionCommand {
  finishStep() {
    super.finishStep();
  }
  getTrackOnQuestConfirmID() {
    return "s_060_060_dialog_confirmed";
  }
}
classImplementsInterfaces(TutorialConfirmFoodReductionForUnitsCommand, "ISimpleCommand");
