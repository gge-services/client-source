import { CastleChooseHeroDialog } from "./CastleChooseHeroDialog";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { TutorialBasicActionCommand } from "./TutorialBasicActionCommand";
export class TutorialChooseHeroCommand extends TutorialBasicActionCommand {
  internalExecute() {
    this.filter.replace(CastleChooseHeroDialog);
    this.tutorialController.waitForExternalDialogShow(CastleChooseHeroDialog, this.bindFunction(this.onDialog));
    CastleDialogHandler.getInstance().registerDefaultDialogs(CastleChooseHeroDialog);
  }
  onDialog() {
    this.tutorialController.waitForDialogHide(CastleChooseHeroDialog, this.bindFunction(this.finishStep));
  }
}
