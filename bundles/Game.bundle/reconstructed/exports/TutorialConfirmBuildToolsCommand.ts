import { TutorialBasicQuestStarterActionCommand } from "./TutorialBasicQuestStarterActionCommand";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class TutorialConfirmBuildToolsCommand extends TutorialBasicQuestStarterActionCommand {
  getTrackOnQuestConfirmID() {
    return "s_090_020_dialog_confirmed";
  }
}
classImplementsInterfaces(TutorialConfirmBuildToolsCommand, "ISimpleCommand");
