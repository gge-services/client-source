import { CastleChestDialog } from "./CastleChestDialog";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleModel } from "./CastleModel";
import { CastlePrivateOfferDecorationDialog } from "./CastlePrivateOfferDecorationDialog";
import { CastleQuestDialog } from "./CastleQuestDialog";
import { CastleQuestStartPanel } from "./CastleQuestStartPanel";
import { CastleTutorialArrowController } from "./CastleTutorialArrowController";
import { CastleTutorialClickBlocker } from "./CastleTutorialClickBlocker";
import { CastleTutorialController } from "./CastleTutorialController";
import { CastleTutorialDialogFilter } from "./CastleTutorialDialogFilter";
import { CastleTutorialSpotlight } from "./CastleTutorialSpotlight";
import { CastleYesNoOrangeWarningDialog } from "./CastleYesNoOrangeWarningDialog";
import { ClientConstLevelRestrictions } from "./ClientConstLevelRestrictions";
import { debug } from "../../../ggs.dll/reconstructed/exports/debug";
import { TutorialBasicActionCommand } from "./TutorialBasicActionCommand";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class TutorialOpenQuestbookCommand extends TutorialBasicActionCommand {
  constructor() {
    const __initial0 = -1;
    CONSTRUCTOR_HACK;
    super();
    this.timeoutId = __initial0;
  }
  internalExecute() {
    this.triggerQuestBookHint();
  }
  triggerQuestBookHint() {
    var __s7local0 = this;
    if (CastleModel.userData.level >= ClientConstLevelRestrictions.TUTORIAL_END) {
      this.finishStep();
    } else if (!(this.timeoutId > -1)) {
      this.timeoutId = window.setInterval(function () {
        if (!CastleDialogHandler.getInstance().isThereADialog) {
          window.clearInterval(__s7local0.timeoutId);
          __s7local0.timeoutId = -1;
          if (__s7local0.layoutManager.isDialogVisibleByName(CastleChestDialog)) {
            CastleTutorialController.getInstance().waitForDialogHide(CastleChestDialog, __s7local0.bindFunction(__s7local0.hintAtQuestBook));
          } else if (__s7local0.layoutManager.isDialogVisibleByName(CastlePrivateOfferDecorationDialog)) {
            CastleTutorialController.getInstance().waitForDialogHide(CastlePrivateOfferDecorationDialog, __s7local0.bindFunction(__s7local0.hintAtQuestBook));
          } else {
            __s7local0.hintAtQuestBook();
          }
        }
      }, 250);
    }
  }
  hintAtQuestBook() {
    var __s17local0 = this;
    try {
      var __s17local1 = this.layoutManager.getPanel(CastleQuestStartPanel).disp.btn_questBook;
      CastleTutorialDialogFilter.instance.replace(CastleQuestDialog);
      CastleTutorialDialogFilter.instance.add(CastlePrivateOfferDecorationDialog);
      CastleTutorialDialogFilter.instance.add(CastleChestDialog);
      CastleTutorialDialogFilter.instance.add(CastleYesNoOrangeWarningDialog);
      CastleTutorialArrowController.instance.replace(__s17local1);
      CastleTutorialSpotlight.instance.replace(__s17local1);
      CastleTutorialClickBlocker.instance.replace(__s17local1);
      CastleTutorialController.getInstance().waitForDialogShow(CastleQuestDialog, this.bindFunction(this.removeQuestBookHintTimeout));
      CastleTutorialController.getInstance().waitForDialogShow(CastleChestDialog, function () {
        CastleTutorialDialogFilter.instance.replace(CastleChestDialog);
        CastleTutorialArrowController.instance.clear();
        CastleTutorialSpotlight.instance.clear();
        CastleTutorialClickBlocker.instance.clear();
        CastleTutorialController.getInstance().waitForDialogHide(CastleChestDialog, __s17local0.bindFunction(__s17local0.hintAtQuestBook));
      });
      CastleTutorialController.getInstance().waitForDialogShow(CastlePrivateOfferDecorationDialog, function () {
        CastleTutorialDialogFilter.instance.replace(CastlePrivateOfferDecorationDialog);
        CastleTutorialDialogFilter.instance.add(CastleYesNoOrangeWarningDialog);
        CastleTutorialArrowController.instance.clear();
        CastleTutorialSpotlight.instance.clear();
        CastleTutorialClickBlocker.instance.clear();
        CastleTutorialController.getInstance().waitForDialogHide(CastlePrivateOfferDecorationDialog, __s17local0.bindFunction(__s17local0.hintAtQuestBook));
      });
    } catch (__s24local0) {
      debug(__s24local0.stack);
    }
  }
  removeQuestBookHintTimeout() {
    if (this.timeoutId > -1) {
      window.clearInterval(this.timeoutId);
      this.timeoutId = -1;
    }
    this.finishStep();
  }
  finishStep() {
    super.finishStep();
    this.finishTriggerQuest();
  }
}
classImplementsInterfaces(TutorialOpenQuestbookCommand, "ISimpleCommand");
