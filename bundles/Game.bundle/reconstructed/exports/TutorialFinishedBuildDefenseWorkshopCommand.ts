import { TutorialBasicQuestFinisherActionCommand } from "./TutorialBasicQuestFinisherActionCommand";
export class TutorialFinishedBuildDefenseWorkshopCommand extends TutorialBasicQuestFinisherActionCommand {
  getTrackOnQuestConfirmID() {
    return "s_090_010_quest_finished_confirmed";
  }
}
