import { TutorialBasicQuestStarterActionCommand } from "./TutorialBasicQuestStarterActionCommand";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class TutorialConfirmUpgradeBuildingCommand extends TutorialBasicQuestStarterActionCommand {
  getTrackOnQuestConfirmID() {
    return "020_010_dialog_confirmed";
  }
}
classImplementsInterfaces(TutorialConfirmUpgradeBuildingCommand, "ISimpleCommand");
