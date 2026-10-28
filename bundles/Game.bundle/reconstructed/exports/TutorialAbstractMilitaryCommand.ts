import { ButtonHelper } from "./ButtonHelper";
import { C2SJoinCastleVO } from "./C2SJoinCastleVO";
import { castAs } from "../../../ggs.dll/reconstructed/exports/castAs";
import { CastleLayoutManager } from "./CastleLayoutManager";
import { CastleLayoutManagerEvent } from "./CastleLayoutManagerEvent";
import { CastleMilitaryDataEvent } from "./CastleMilitaryDataEvent";
import { CastleModel } from "./CastleModel";
import { CastleRecruitDialog } from "./CastleRecruitDialog";
import { CastleRecruitSelectUnitEvent } from "./CastleRecruitSelectUnitEvent";
import { CastleTutorialPanel } from "./CastleTutorialPanel";
import { CastleUnitAmountComponent } from "./CastleUnitAmountComponent";
import { ClientConstCharacter } from "./ClientConstCharacter";
import { int } from "../../../ggs.dll/reconstructed/exports/int";
import { Iso } from "./Iso";
import { IsoRenderStrategyEnum } from "./IsoRenderStrategyEnum";
import { RecruitPanelButton } from "./RecruitPanelButton";
import { TutorialBasicActionCommand } from "./TutorialBasicActionCommand";
import { WorldClassic } from "../../../ggs.dll/reconstructed/exports/WorldClassic";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
const __s0local0 = createjs.MouseEvent;
export class TutorialAbstractMilitaryCommand extends TutorialBasicActionCommand {
  constructor() {
    const __initial0 = 0;
    CONSTRUCTOR_HACK;
    super();
    this._amountBeforeRecruitment = __initial0;
  }
  internalExecute() {
    this.filter.allowNoDialogs();
    CastleUnitAmountComponent.isLimitedByTutorial = true;
    this._amountBeforeRecruitment = int(CastleModel.militaryData.unitInventory.getUnitCountByWodId(this._tutorialStepVO.attributes.get(TutorialBasicActionCommand.WODID)));
    this.tutorialController.registerComplexListener(this.controller, CastleMilitaryDataEvent.INVENTORY_UPDATED, this.bindFunction(this.onRecruitmentFinished));
    this.goToMainCastle();
  }
  goToMainCastle() {
    if (this.layoutManager.isInMyCastle) {
      this.hintTowardsMilitaryMenu();
    } else {
      if (CastleModel.worldmapData) {
        CastleModel.worldmapData.allowGAARequests = false;
      }
      this.tutorialController.waitForJoinCastle(this.bindFunction(this.hintTowardsMilitaryMenu));
      CastleModel.smartfoxClient.sendCommandVO(new C2SJoinCastleVO(C2SJoinCastleVO.MY_CASTLE, WorldClassic.KINGDOM_ID));
    }
  }
  hintTowardsMilitaryMenu() {
    if (this.tutorialController && this.layoutManager && this.layoutManager.tutorialPanel) {
      if (!this.layoutManager.isInState(CastleLayoutManager.STATE_ISO)) {
        this.layoutManager.state = CastleLayoutManager.STATE_ISO;
      }
      if (Iso.renderer.strategies.currentStrategy.isActive(IsoRenderStrategyEnum.BUILD_MODE)) {
        Iso.controller.viewUpdater.switchBuildModeInOwnCastle(false);
      }
      this.filter.allowNoDialogs();
      this.layoutManager.tutorialPanel.showWithText(this.getOpenMilitaryMenuText(), ClientConstCharacter.CHAR_ID_GENERAL);
      var __s12local0 = this.getActionPanelButtonDisp(RecruitPanelButton);
      this.arrows.replace(__s12local0, true, false, 1, TutorialBasicActionCommand.TUT_ARROW_ACTION_PANEL_OFFSET);
      this.replaceActionPanelButtonInBlocker(RecruitPanelButton);
      this.tutorialController.waitForSublayerPanelShow(this.getActionPanelButton(RecruitPanelButton), this.bindFunction(this.showButton));
    }
  }
  showButton() {
    if (!this.layoutManager.isInState(CastleLayoutManager.STATE_ISO)) {
      this.layoutManager.state = CastleLayoutManager.STATE_ISO;
    }
    if (Iso.renderer.strategies.currentStrategy.isActive(IsoRenderStrategyEnum.BUILD_MODE)) {
      Iso.controller.viewUpdater.switchBuildModeInOwnCastle(false);
    }
    this.trackStep(this.getOpenMilitaryMenuTrackingID());
    this.tutorialController.registerComplexListener(this.controller, CastleLayoutManagerEvent.HIDE_SUBLAYER_PANEL, this.bindFunction(this.checkInternalDialogOpened));
    var __s17local0 = this.getActionPanelButtonDisp(this.getButtonClass());
    this.arrows.replace(__s17local0, true, false, 1, TutorialBasicActionCommand.TUT_ARROW_ACTION_PANEL_OFFSET);
    this.replaceActionPanelButtonInBlocker(this.getButtonClass());
    this.layoutManager.tutorialPanel.showWithText(this.getClickMilitarySubMenuText(), ClientConstCharacter.CHAR_ID_GENERAL);
    this.filter.replace(CastleRecruitDialog);
    this.tutorialController.waitForExternalDialogShow(CastleRecruitDialog, this.bindFunction(this.waitForDialog));
  }
  waitForDialog() {}
  checkInternalDialogOpened(argument0) {
    if (this.tutorialController && this.layoutManager) {
      this.tutorialController.removeComplexListener(this.controller, CastleLayoutManagerEvent.HIDE_SUBLAYER_PANEL, this.bindFunction(this.checkInternalDialogOpened));
      var __s23local0 = castAs(this.layoutManager.getDialog(CastleRecruitDialog), "CastleRecruitDialog");
      if (!__s23local0 || !__s23local0.isVisible()) {
        this.hintTowardsMilitaryMenu();
      }
    }
  }
  waitForSelectUnit() {
    this.trackStep(this.getRecruitDialogOpenedTrackingID());
    if (this.selectUnitManual) {
      var __s27local0 = this.layoutManager.getDialog(CastleRecruitDialog);
      __s27local0.currentSublayer.forceToManualSelection();
      this.layoutManager.tutorialPanel.showWithText(this.getSelectUnitText(), ClientConstCharacter.CHAR_ID_GENERAL);
      var __s27local1 = int(this._tutorialStepVO.attributes.get(TutorialBasicActionCommand.WODID));
      var __s27local2 = __s27local0.getClipContainerForUnit(__s27local1, CastleModel.wodData.getUnitVOByWodId(__s27local1).unitCategory);
      if (__s27local2) {
        this.arrows.replace(__s27local2);
        this.blocker.replace(__s27local2);
      }
      this.tutorialController.registerComplexListener(this.controller, CastleRecruitSelectUnitEvent.SHOW_UNIT_SELECTION, this.bindFunction(this.onUnitSelected));
    } else {
      this.tutorialController.registerComplexListener(this.controller, CastleMilitaryDataEvent.ALL_INVENTORIES_UPDATED, this.bindFunction(this.onUnitSelected));
    }
  }
  onUnitSelected(argument0 = null) {
    var __s32local0 = this.layoutManager.getDialog(CastleRecruitDialog).currentSublayer.recruitSelectedUnitComponent;
    this.tutorialController.removeComplexListener(this.controller, CastleRecruitSelectUnitEvent.SHOW_UNIT_SELECTION, this.bindFunction(this.onUnitSelected));
    this.tutorialController.removeComplexListener(this.controller, CastleMilitaryDataEvent.ALL_INVENTORIES_UPDATED, this.bindFunction(this.onUnitSelected));
    this.trackStep(this.getUnitRecruitmentConfirmedTrackingID());
    this.layoutManager.tutorialPanel.hide();
    if (parseInt(this._tutorialStepVO.attributes.get(TutorialBasicActionCommand.AMOUNT)) != __s32local0.selectedUnitAmount) {
      __s32local0.selectedUnitAmount = this._tutorialStepVO.attributes.get(TutorialBasicActionCommand.AMOUNT);
    }
    this.waitForUnitSelectOK();
  }
  waitForUnitSelectOK() {
    var __s35local0 = this.layoutManager.getDialog(CastleRecruitDialog).currentSublayer.recruitSelectedUnitComponent;
    this.arrows.replace(__s35local0.disp.recruitmentBtn, false);
    this.blocker.replace(__s35local0.disp.recruitmentBtn);
    this.tutorialController.registerComplexListener(__s35local0.disp.recruitmentBtn, __s0local0.CLICK, this.bindFunction(this.onRecruitmentStarted));
    this.layoutManager.tutorialPanel.showWithText(this.getConfirmUnitSelectionText(), ClientConstCharacter.CHAR_ID_GENERAL, CastleTutorialPanel.POS_TOP_RIGHT, [80]);
  }
  onRecruitmentStarted(event) {
    if (ButtonHelper.isButtonEnabled(event.target)) {
      var __s37local0 = this.layoutManager.getDialog(CastleRecruitDialog).currentSublayer.recruitSelectedUnitComponent;
      this.tutorialController.removeComplexListener(__s37local0.disp.recruitmentBtn, __s0local0.CLICK, this.bindFunction(this.onRecruitmentStarted));
      this.arrows.clear();
      this.blocker.clear();
      this.blocker.allowNoClicks();
      this.layoutManager.tutorialPanel.showWithText(this.getClickOnRecruitDialogCloseText(), ClientConstCharacter.CHAR_ID_GENERAL, CastleTutorialPanel.POS_BOTTOM_RIGHT);
    }
  }
  onRecruitmentFinished(argument0) {
    if (this._amountBeforeRecruitment + this._tutorialStepVO.getIntAttribute(TutorialBasicActionCommand.AMOUNT, 0) <= CastleModel.militaryData.unitInventory.getUnitCountByWodId(this._tutorialStepVO.getIntAttribute(TutorialBasicActionCommand.WODID, 0))) {
      this.tutorialController.removeComplexListener(this.controller, CastleMilitaryDataEvent.INVENTORY_UPDATED, this.bindFunction(this.onRecruitmentFinished));
      this.layoutManager.hideAllDialogs();
      this.finishStep();
    }
  }
  actionConditionValid() {
    var __s43local0 = int(this._tutorialStepVO.attributes.get(TutorialBasicActionCommand.WODID));
    var __s43local1 = int(this._tutorialStepVO.attributes.get(TutorialBasicActionCommand.AMOUNT));
    return int(CastleModel.militaryData.unitInventory.getUnitCountByWodId(__s43local0)) < __s43local1;
  }
  finishStep() {
    CastleUnitAmountComponent.isLimitedByTutorial = false;
    super.finishStep();
  }
  get selectUnitManual() {
    return false;
  }
  getButtonClass() {
    return null;
  }
  getSelectUnitText() {
    return "please override the getSelectUnitText method";
  }
  getOpenMilitaryMenuText() {
    return "please override the getOpenMilitaryMenuText method";
  }
  getClickMilitarySubMenuText() {
    return "please override the getClickMilitarySubMenuText method";
  }
  getClickOnRecruitDialogCloseText() {
    return "please override the getClickOnDialogCloseText method";
  }
  getConfirmUnitSelectionText() {
    return "please override the getConfirmUnitSelectionText method";
  }
  getOpenMilitaryMenuTrackingID() {
    return "please override the getOpenMilitaryMenuTrackingID method";
  }
  getRecruitDialogOpenedTrackingID() {
    return "please override the getRecruitMenuOpenedTrackingID method";
  }
  getUnitRecruitmentConfirmedTrackingID() {
    return "please override the getUnitRecruitmentConfirmedTrackingID method";
  }
}
classImplementsInterfaces(TutorialAbstractMilitaryCommand, "ISimpleCommand");
