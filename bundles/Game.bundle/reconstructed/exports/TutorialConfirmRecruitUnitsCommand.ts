import { TutorialBasicQuestStarterActionCommand } from "./TutorialBasicQuestStarterActionCommand";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class TutorialConfirmRecruitUnitsCommand extends TutorialBasicQuestStarterActionCommand {
  getTrackOnQuestConfirmID() {
    return "s_060_020_dialog_confirmed";
  }
}
classImplementsInterfaces(TutorialConfirmRecruitUnitsCommand, "ISimpleCommand");
