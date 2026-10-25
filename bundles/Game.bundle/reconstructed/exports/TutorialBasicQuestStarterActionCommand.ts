import { CastleStartQuestDialog } from "./CastleStartQuestDialog";
import { TutorialBasicQuestActionCommand } from "./TutorialBasicQuestActionCommand";
export class TutorialBasicQuestStarterActionCommand extends TutorialBasicQuestActionCommand {
  getDialogClass() {
    return CastleStartQuestDialog;
  }
}
