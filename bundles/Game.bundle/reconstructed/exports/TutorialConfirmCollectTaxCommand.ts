import { TutorialBasicQuestStarterActionCommand } from "./TutorialBasicQuestStarterActionCommand";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class TutorialConfirmCollectTaxCommand extends TutorialBasicQuestStarterActionCommand {
  getTrackOnQuestConfirmID() {
    return "040_010_dialog_confirmed";
  }
}
classImplementsInterfaces(TutorialConfirmCollectTaxCommand, "ISimpleCommand");
