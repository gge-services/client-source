import { TutorialBasicQuestStarterActionCommand } from "./TutorialBasicQuestStarterActionCommand";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class TutorialConfirmDecoAndPublicOrderCommand extends TutorialBasicQuestStarterActionCommand {
  getTrackOnQuestConfirmID() {
    return "s_070_020_dialog_confirmed";
  }
}
classImplementsInterfaces(TutorialConfirmDecoAndPublicOrderCommand, "ISimpleCommand");
