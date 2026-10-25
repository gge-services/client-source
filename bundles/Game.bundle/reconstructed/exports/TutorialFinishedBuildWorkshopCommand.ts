import { TutorialBasicQuestFinisherActionCommand } from "./TutorialBasicQuestFinisherActionCommand";
export class TutorialFinishedBuildWorkshopCommand extends TutorialBasicQuestFinisherActionCommand {
  getTrackOnQuestConfirmID() {
    return "s_080_010_quest_finished_confirmed";
  }
}
