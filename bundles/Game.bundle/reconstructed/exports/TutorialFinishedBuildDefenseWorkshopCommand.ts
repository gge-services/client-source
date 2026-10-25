import { TutorialBasicQuestFinisherActionCommand } from "./TutorialBasicQuestFinisherActionCommand";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class TutorialFinishedBuildDefenseWorkshopCommand extends TutorialBasicQuestFinisherActionCommand {
  getTrackOnQuestConfirmID() {
    return "s_090_010_quest_finished_confirmed";
  }
}
classImplementsInterfaces(TutorialFinishedBuildDefenseWorkshopCommand, "ISimpleCommand");
