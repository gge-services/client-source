import { TutorialBasicQuestStarterActionCommand } from "./TutorialBasicQuestStarterActionCommand";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class TutorialConfirmExpandCastleCommand extends TutorialBasicQuestStarterActionCommand {
  getTrackOnQuestConfirmID() {
    return "030_010_dialog_confirmed";
  }
}
classImplementsInterfaces(TutorialConfirmExpandCastleCommand, "ISimpleCommand");
