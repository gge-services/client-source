import { BasicDialogHandler } from "../../../ggs.dll/reconstructed/exports/BasicDialogHandler";
import { ButtonHelper } from "./ButtonHelper";
import { CastleActionPanel } from "./CastleActionPanel";
import { CastleCollectTaxProgressDialog } from "./CastleCollectTaxProgressDialog";
import { CastleCollectTaxStartDialog } from "./CastleCollectTaxStartDialog";
import { CastleDialogEvent } from "./CastleDialogEvent";
import { CastleLayoutManager } from "./CastleLayoutManager";
import { CastleLevelUpDialog } from "./CastleLevelUpDialog";
import { CastleModel } from "./CastleModel";
import { CastleTutorialPanel } from "./CastleTutorialPanel";
import { ClientConstCharacter } from "./ClientConstCharacter";
import { TutorialBasicActionCommand } from "./TutorialBasicActionCommand";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
const __s0local0 = createjs.Point;
export class TutorialCollectTaxActionCommand extends TutorialBasicActionCommand {
  actionConditionValid() {
    return CastleModel.userData.level < 2;
  }
  internalExecute() {
    this.filter.allowNoDialogs();
    if (this.layoutManager.isInMyCastle) {
      this.showArrowOnTaxCollectButton();
    } else {
      this.tutorialController.waitForLayoutStateChangeFinished(CastleLayoutManager.STATE_ISO, this.bindFunction(this.waitUntilPlayerSwitchToMainCastle));
    }
  }
  waitUntilPlayerSwitchToMainCastle() {
    this.showArrowOnTaxCollectButton();
  }
  showArrowOnTaxCollectButton() {
    var __s13local0 = this.getPanelDisp(CastleActionPanel).mc_tax.comp_taxComponent.btn_tax;
    this.arrows.replace(__s13local0, true, false, 1, new __s0local0(15, 5));
    this.blocker.replace(__s13local0);
    this.filter.add(CastleCollectTaxStartDialog);
    this.tutorialController.registerComplexListener(this.controller, CastleDialogEvent.TAX_ITEMS_FILLED, this.bindFunction(this.onShowCollectTaxStartDialog));
    this.layoutManager.tutorialPanel.showWithText("tut_tax_openTaxDialog_copy_duplicate", ClientConstCharacter.CHAR_ID_FEMALE_TUTORIAL_CHARACTER);
  }
  onShowCollectTaxStartDialog(argument0 = null) {
    this.tutorialController.removeComplexListener(this.controller, CastleDialogEvent.TAX_ITEMS_FILLED, this.bindFunction(this.onShowCollectTaxStartDialog));
    this.trackStep("040_020_taxmenu_opened");
    this.layoutManager.tutorialPanel.showWithText("tut_tax_selectTaxType_copy_duplicate", ClientConstCharacter.CHAR_ID_FEMALE_TUTORIAL_CHARACTER);
    var __s15local0 = this.getDialogDisp(CastleCollectTaxStartDialog);
    this.arrows.replace(__s15local0.mc_taxList.item0.btn_collect, false, true);
    this.blocker.replace(__s15local0.mc_taxList.item0.btn_collect);
    this.filter.add(CastleCollectTaxProgressDialog);
    this.layoutManager.getDialog(CastleCollectTaxStartDialog).blockScrollList(true);
    for (var __s15local1 = 1; __s15local1 < 4; __s15local1++) {
      ButtonHelper.enableButton(__s15local0.mc_taxList["item" + __s15local1].btn_collect, false);
    }
    ButtonHelper.enableButton(__s15local0.mc_taxList.btn_down, false);
    ButtonHelper.enableButton(__s15local0.mc_taxList.btn_up, false);
    ButtonHelper.enableButton(__s15local0.btn_close, false);
    ButtonHelper.enableButton(__s15local0.mc_taxList.btn_slider, false);
    ButtonHelper.enableButton(__s15local0.btn_bribe, false);
    BasicDialogHandler.getInstance().blockDialogs = true;
    this.filter.add(CastleCollectTaxProgressDialog);
    this.tutorialController.waitForExternalDialogShow(CastleCollectTaxProgressDialog, this.bindFunction(this.onStartTaxCollection));
  }
  onStartTaxCollection() {
    this.trackStep("040_030_time_selected");
    this.layoutManager.tutorialPanel.showWithText("tut_tax_waitForTax_copy", ClientConstCharacter.CHAR_ID_FEMALE_TUTORIAL_CHARACTER, CastleTutorialPanel.POS_BOTTOM_RIGHT);
    this.showBlockerAndArrowsForTaxProgressDialog();
    this.tutorialController.waitForExternalDialogHide(CastleCollectTaxProgressDialog, this.bindFunction(this.onTaxProgressDialogClosed));
  }
  showBlockerAndArrowsForTaxProgressDialog() {
    var __s21local0 = this.getDialogDisp(CastleCollectTaxProgressDialog);
    ButtonHelper.enableButton(__s21local0.btn_collect, false);
    this.arrows.replace(__s21local0.btn_close, false, true);
    this.blocker.replace(__s21local0.btn_close);
    ButtonHelper.enableButton(__s21local0.btn_help, false);
  }
  onTaxProgressDialogClosed() {
    this.trackStep("040_040_taxmenu_closed");
    this.filter.replace(CastleLevelUpDialog);
    this.arrows.clear();
    this.blocker.clear();
    this.tutorialController.waitForExternalDialogShow(CastleLevelUpDialog, this.bindFunction(this.onLevelDialogOpened));
    BasicDialogHandler.getInstance().blockDialogs = false;
  }
  onLevelDialogOpened() {
    this.tutorialController.waitForExternalDialogHide(CastleLevelUpDialog, this.bindFunction(this.finishStep));
  }
  finishStep() {
    this.trackStep("050_010_levelUp_2_confirmed");
    super.finishStep();
  }
}
classImplementsInterfaces(TutorialCollectTaxActionCommand, "ISimpleCommand");
