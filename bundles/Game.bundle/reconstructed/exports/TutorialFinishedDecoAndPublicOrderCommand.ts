import { TutorialBasicQuestFinisherActionCommand } from "./TutorialBasicQuestFinisherActionCommand";
export class TutorialFinishedDecoAndPublicOrderCommand extends TutorialBasicQuestFinisherActionCommand {
  getTrackOnQuestConfirmID() {
    return "s_070_010_quest_finished_confirmed";
  }
}
