import { BasicDialogHandler } from "../../../ggs.dll/reconstructed/exports/BasicDialogHandler";
import { CastleLayoutManager } from "./CastleLayoutManager";
import { CastleLevelUpDialog } from "./CastleLevelUpDialog";
import { TutorialBasicQuestFinisherActionCommand } from "./TutorialBasicQuestFinisherActionCommand";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class TutorialFinishedAttackRobberBaronCommand extends TutorialBasicQuestFinisherActionCommand {
  onQuestConfirm() {
    this.clearBlockers();
    if (BasicDialogHandler.getInstance().isDialogRegistered(CastleLevelUpDialog)) {
      this.tutorialController.waitForExternalDialogShow(CastleLevelUpDialog, this.bindFunction(this.onLevelDialogOpened));
    } else if (CastleLayoutManager.getInstance().isDialogVisibleByName(CastleLevelUpDialog)) {
      this.onLevelDialogOpened();
    } else {
      this.finishStep();
    }
  }
  onLevelDialogOpened() {
    this.tutorialController.waitForExternalDialogHide(CastleLevelUpDialog, this.bindFunction(this.onLevelUpConfirmed));
  }
  onLevelUpConfirmed() {
    this.trackStep("s_080_150_levelUp_5_confirmed");
    this.finishStep();
  }
  getTrackOnQuestConfirmID() {
    return "s_080_140_quest_finished_confirmed";
  }
}
classImplementsInterfaces(TutorialFinishedAttackRobberBaronCommand, "ISimpleCommand");
