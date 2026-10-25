import { CastleStartQuestDialog } from "./CastleStartQuestDialog";
import { TutorialBasicQuestActionCommand } from "./TutorialBasicQuestActionCommand";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class TutorialBasicQuestStarterActionCommand extends TutorialBasicQuestActionCommand {
  getDialogClass() {
    return CastleStartQuestDialog;
  }
}
classImplementsInterfaces(TutorialBasicQuestStarterActionCommand, "ISimpleCommand");
