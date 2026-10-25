import { TutorialBasicQuestStarterActionCommand } from "./TutorialBasicQuestStarterActionCommand";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class TutorialConfirmBuildBuildingCommand extends TutorialBasicQuestStarterActionCommand {
  getTrackOnQuestConfirmID() {
    return "010_020_dialog_confirmed";
  }
}
classImplementsInterfaces(TutorialConfirmBuildBuildingCommand, "ISimpleCommand");
