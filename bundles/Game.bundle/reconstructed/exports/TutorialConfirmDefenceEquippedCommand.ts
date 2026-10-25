import { TutorialBasicQuestStarterActionCommand } from "./TutorialBasicQuestStarterActionCommand";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class TutorialConfirmDefenceEquippedCommand extends TutorialBasicQuestStarterActionCommand {
  getTrackOnQuestConfirmID() {
    return "tracking s_090_140_dialog_confirmed";
  }
}
classImplementsInterfaces(TutorialConfirmDefenceEquippedCommand, "ISimpleCommand");
