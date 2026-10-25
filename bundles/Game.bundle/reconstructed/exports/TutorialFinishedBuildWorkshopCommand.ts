import { TutorialBasicQuestFinisherActionCommand } from "./TutorialBasicQuestFinisherActionCommand";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class TutorialFinishedBuildWorkshopCommand extends TutorialBasicQuestFinisherActionCommand {
  getTrackOnQuestConfirmID() {
    return "s_080_010_quest_finished_confirmed";
  }
}
classImplementsInterfaces(TutorialFinishedBuildWorkshopCommand, "ISimpleCommand");
