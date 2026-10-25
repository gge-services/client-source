import { TutorialBasicQuestFinisherActionCommand } from "./TutorialBasicQuestFinisherActionCommand";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class TutorialFinishedExpandCastleCommand extends TutorialBasicQuestFinisherActionCommand {
  getTrackOnQuestConfirmID() {
    return "030_080_quest_finished_confirmed";
  }
}
classImplementsInterfaces(TutorialFinishedExpandCastleCommand, "ISimpleCommand");
