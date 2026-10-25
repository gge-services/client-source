import { TutorialBasicQuestFinisherActionCommand } from "./TutorialBasicQuestFinisherActionCommand";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class TutorialFinishedUpgradeBuildingActionCommand extends TutorialBasicQuestFinisherActionCommand {
  getTrackOnQuestConfirmID() {
    return "020_090_quest_finished_confirmed";
  }
}
classImplementsInterfaces(TutorialFinishedUpgradeBuildingActionCommand, "ISimpleCommand");
