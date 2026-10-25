import { TutorialBasicQuestFinisherActionCommand } from "./TutorialBasicQuestFinisherActionCommand";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class TutorialFinishedDecoAndPublicOrderCommand extends TutorialBasicQuestFinisherActionCommand {
  getTrackOnQuestConfirmID() {
    return "s_070_010_quest_finished_confirmed";
  }
}
classImplementsInterfaces(TutorialFinishedDecoAndPublicOrderCommand, "ISimpleCommand");
