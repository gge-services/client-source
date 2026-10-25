import { TutorialBasicQuestStarterActionCommand } from "./TutorialBasicQuestStarterActionCommand";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class TutorialConfirmWelcomeCommand extends TutorialBasicQuestStarterActionCommand {
  getTrackOnQuestConfirmID() {
    return "010_010_first_click_done";
  }
}
classImplementsInterfaces(TutorialConfirmWelcomeCommand, "ISimpleCommand");
