import { TutorialBasicQuestStarterActionCommand } from "./TutorialBasicQuestStarterActionCommand";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class TutorialConfirmEquipDefenseCommand extends TutorialBasicQuestStarterActionCommand {
  finishStep() {
    super.finishStep();
  }
  getTrackOnQuestConfirmID() {
    return "s_090_070_dialog_confirmed";
  }
}
classImplementsInterfaces(TutorialConfirmEquipDefenseCommand, "ISimpleCommand");
