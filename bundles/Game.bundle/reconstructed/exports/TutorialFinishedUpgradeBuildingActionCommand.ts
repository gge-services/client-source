import { TutorialBasicQuestFinisherActionCommand } from "./TutorialBasicQuestFinisherActionCommand";
export class TutorialFinishedUpgradeBuildingActionCommand extends TutorialBasicQuestFinisherActionCommand {
  getTrackOnQuestConfirmID() {
    return "020_090_quest_finished_confirmed";
  }
}
