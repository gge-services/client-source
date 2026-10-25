import { C2SDefenceCompleteVO } from "./C2SDefenceCompleteVO";
import { C2SJoinCastleVO } from "./C2SJoinCastleVO";
import { CastleDefenceAddUnitsDialog } from "./CastleDefenceAddUnitsDialog";
import { CastleDefenceDataEvent } from "./CastleDefenceDataEvent";
import { CastleDefenceDialog } from "./CastleDefenceDialog";
import { CastleDialogEvent } from "./CastleDialogEvent";
import { CastleLayoutManager } from "./CastleLayoutManager";
import { CastleModel } from "./CastleModel";
import { CastleServerMessageArrivedEvent } from "./CastleServerMessageArrivedEvent";
import { ClientConstCharacter } from "./ClientConstCharacter";
import { DefencePanelButton } from "./DefencePanelButton";
import { int } from "../../../ggs.dll/reconstructed/exports/int";
import { Iso } from "./Iso";
import { IsoRenderStrategyEnum } from "./IsoRenderStrategyEnum";
import { RecruitPanelButton } from "./RecruitPanelButton";
import { TutorialBasicActionCommand } from "./TutorialBasicActionCommand";
import { WorldClassic } from "../../../ggs.dll/reconstructed/exports/WorldClassic";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
const __s0local1 = createjs.Point;
const __s0local0 = createjs.MouseEvent;
export class TutorialEquipDefenseCommand extends TutorialBasicActionCommand {
  internalExecute() {
    if (this.layoutManager.isInMyCastle) {
      this.checkDefenceData();
    } else {
      if (CastleModel.worldmapData) {
        CastleModel.worldmapData.allowGAARequests = false;
      }
      this.tutorialController.waitForJoinCastle(this.bindFunction(this.checkDefenceData));
      CastleModel.smartfoxClient.sendCommandVO(new C2SJoinCastleVO(C2SJoinCastleVO.MY_CASTLE, WorldClassic.KINGDOM_ID));
    }
  }
  checkDefenceData(__s10param0 = null) {
    if (CastleModel.defenceData.itemsKeep) {
      this.readyToExecute();
    } else {
      var __s10local0 = CastleModel.areaData.activeAreaInfo;
      this.tutorialController.registerComplexListener(this.controller, CastleDefenceDataEvent.GET_DEFENCE_INFOS, this.bindFunction(this.onGetDefenceInfos));
      CastleModel.smartfoxClient.sendCommandVO(new C2SDefenceCompleteVO(__s10local0.absAreaPos, __s10local0.objectId));
    }
  }
  onGetDefenceInfos(__s14param0) {
    this.tutorialController.removeComplexListener(this.controller, CastleDefenceDataEvent.GET_DEFENCE_INFOS, this.bindFunction(this.onGetDefenceInfos));
    this.readyToExecute();
  }
  readyToExecute() {
    if (this.uniqueActionConditionValid()) {
      this.filter.replace(CastleDefenceDialog);
      this.filter.add(CastleDefenceAddUnitsDialog);
      this.hintTowardsMilitaryMenu();
    }
  }
  hintTowardsMilitaryMenu() {
    this.controller.removeEventListener(CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.hintTowardsMilitaryMenu));
    if (!this.layoutManager.isInState(CastleLayoutManager.STATE_ISO)) {
      this.layoutManager.state = CastleLayoutManager.STATE_ISO;
    }
    if (Iso.renderer.strategies.currentStrategy.isActive(IsoRenderStrategyEnum.BUILD_MODE)) {
      Iso.controller.viewUpdater.switchBuildModeInOwnCastle(false);
    }
    this.layoutManager.tutorialPanel.showWithText("tut_defence_openDefenceScreen_copy_duplicate", ClientConstCharacter.CHAR_ID_GENERAL);
    var __s19local0 = this.getActionPanelButtonDisp(RecruitPanelButton);
    this.arrows.replace(__s19local0, true, false, 1, new __s0local1(15, 5));
    this.replaceActionPanelButtonInBlocker(RecruitPanelButton);
    this.spotlight.replace(__s19local0);
    this.tutorialController.waitForExternalDialogShow(CastleDefenceDialog, this.bindFunction(this.waitForToolsInDefenseDialog));
    this.tutorialController.waitForSublayerPanelShow(this.getActionPanelButton(RecruitPanelButton), this.bindFunction(this.showButton));
  }
  showButton() {
    var __s23local0 = this.getActionPanelButtonDisp(DefencePanelButton);
    this.trackStep("s_090_080_military_menu_opened");
    this.arrows.replace(__s23local0, true, false, 1, new __s0local1(15, 5));
    this.replaceActionPanelButtonInBlocker(DefencePanelButton);
    this.spotlight.replace(__s23local0);
    this.tutorialController.waitForSublayerPanelHide(this.getActionPanelButton(RecruitPanelButton), this.bindFunction(this.onMilitarySublayerHide));
  }
  onMilitarySublayerHide() {
    this.tutorialController.removeListeners();
    this.hintTowardsMilitaryMenu();
  }
  waitForToolsInDefenseDialog() {
    this.tutorialController.removeListeners();
    this.trackStep("s_090_090_defense_menu_opened");
    this.blocker.clear();
    this.spotlight.clear();
    this.tutorialController.registerComplexListener(this.controller, CastleDialogEvent.FIGHT_SCREEN_SHOP_FILLED, this.bindFunction(this.checkWodWithCurrentDefenseCategory));
  }
  checkWodWithCurrentDefenseCategory(__s29param0) {
    this.tutorialController.removeComplexListener(this.controller, CastleDialogEvent.FIGHT_SCREEN_SHOP_FILLED, this.bindFunction(this.checkWodWithCurrentDefenseCategory));
    var __s29local0 = parseInt(this._tutorialStepVO.attributes.get(TutorialBasicActionCommand.WODID));
    var __s29local1 = this.layoutManager.getDialog(CastleDefenceDialog);
    if (CastleModel.wodData.getUnitVOByWodId(__s29local0).isToolForSlotType(__s29local1.curentShopCategory)) {
      this.showToolsInDefenseDialog();
    } else {
      this.waitForShopCategory();
    }
  }
  waitForShopCategory() {
    var __s33local0 = parseInt(this._tutorialStepVO.attributes.get(TutorialBasicActionCommand.WODID));
    var __s33local1 = this.layoutManager.getDialog(CastleDefenceDialog).getCategoryButtonForUnit(__s33local0);
    if (__s33local1) {
      this.arrows.replace(__s33local1);
      this.blocker.replace(__s33local1);
      this.tutorialController.registerComplexListener(this.controller, CastleDialogEvent.FIGHT_SCREEN_SHOP_FILLED, this.bindFunction(this.checkWodWithCurrentDefenseCategory));
    }
  }
  showToolsInDefenseDialog() {
    this.tutorialController.removeComplexListener(this.controller, CastleDialogEvent.FIGHT_SCREEN_SHOP_FILLED, this.bindFunction(this.showToolsInDefenseDialog));
    var __s36local0 = this.layoutManager.getDialog(CastleDefenceDialog);
    var __s36local1 = parseInt(this._tutorialStepVO.attributes.get(TutorialBasicActionCommand.WODID));
    var __s36local2 = __s36local0.getShopItemHolderByUnit(__s36local1);
    if (__s36local2) {
      this.arrows.replace(__s36local2);
      this.blocker.replace(__s36local2);
      this.layoutManager.tutorialPanel.showWithText("tut_defence_selectWall_copy_duplicate", ClientConstCharacter.CHAR_ID_GENERAL);
      this.tutorialController.registerComplexListener(__s36local2, __s0local0.MOUSE_DOWN, this.bindFunction(this.onToolSelected));
    }
  }
  onToolSelected(__s39param0) {
    this.tutorialController.removeComplexListener(__s39param0.target, __s0local0.MOUSE_DOWN, this.bindFunction(this.onToolSelected));
    var __s39local0 = parseInt(this._tutorialStepVO.attributes.get(TutorialBasicActionCommand.WODID));
    var __s39local1 = this.layoutManager.getDialog(CastleDefenceDialog);
    this.targetSlot = __s39local1.getFittingDefenseSlotForTutorial(__s39local0);
    if (this.targetSlot) {
      this.arrows.replace(this.targetSlot.parent);
      this.blocker.replace(this.targetSlot.parent);
      this.blocker.ignoreMouseMove = true;
      this.tutorialController.registerComplexListener(this.controller, CastleDialogEvent.DEFENCE_SCREEN_ITEMS_UPDATED, this.bindFunction(this.onToolsMisplaced));
      this.tutorialController.registerComplexListener(this.controller, CastleDialogEvent.DEFENCE_SCREEN_TOOLS_PLACED, this.bindFunction(this.onToolPlaced));
      this.tutorialController.waitForExternalDialogShow(CastleDefenceAddUnitsDialog, this.bindFunction(this.waitForAmountConfirm));
    }
  }
  onToolsMisplaced(__s42param0) {
    this.tutorialController.removeComplexListener(this.controller, CastleDialogEvent.DEFENCE_SCREEN_ITEMS_UPDATED, this.bindFunction(this.onToolsMisplaced));
    this.tutorialController.removeComplexListener(this.controller, CastleDialogEvent.DEFENCE_SCREEN_TOOLS_PLACED, this.bindFunction(this.onToolPlaced));
    this.showToolsInDefenseDialog();
  }
  onToolPlaced(__s44param0) {
    this.tutorialController.removeComplexListener(this.controller, CastleDialogEvent.DEFENCE_SCREEN_ITEMS_UPDATED, this.bindFunction(this.onToolsMisplaced));
    this.tutorialController.removeComplexListener(this.controller, CastleDialogEvent.DEFENCE_SCREEN_TOOLS_PLACED, this.bindFunction(this.onToolPlaced));
    this.trackStep("s_090_100_slot_selected");
  }
  waitForAmountConfirm() {
    this.trackStep("s_090_110_slider_locked");
    var __s46local0 = this.layoutManager.getDialog(CastleDefenceAddUnitsDialog).dialogDisp.btn_ok;
    this.layoutManager.tutorialPanel.hide();
    this.arrows.replace(__s46local0);
    this.blocker.replace(__s46local0);
    this.spotlight.replace(__s46local0);
    this.tutorialController.waitForDialogHide(CastleDefenceAddUnitsDialog, this.bindFunction(this.onToolPlacementConfirmed));
  }
  onToolPlacementConfirmed() {
    this.trackStep("s_090_120_defensetools_confirmed");
    var __s48local0 = this.layoutManager.getDialog(CastleDefenceDialog);
    this.arrows.replace(__s48local0.disp.bottomMenu.btn_close);
    this.blocker.replace(__s48local0.disp.bottomMenu.btn_close);
    this.spotlight.clear();
    this.tutorialController.onClick(__s48local0.disp.bottomMenu.btn_close, this.bindFunction(this.onConfirmDefenceBtnClicked));
  }
  onConfirmDefenceBtnClicked() {
    this.trackStep("s_090_130_defense_closed");
    this.finishStep();
  }
  uniqueActionConditionValid() {
    var __s52local0 = int(this._tutorialStepVO.attributes.get(TutorialBasicActionCommand.WODID));
    var __s52local1 = int(this._tutorialStepVO.attributes.get(TutorialBasicActionCommand.AMOUNT));
    if (CastleModel.defenceData.itemsKeep && int(CastleModel.defenceData.getAmountOfEquippedUnits(__s52local0)) >= __s52local1) {
      return false;
    }
    return true;
  }
}
classImplementsInterfaces(TutorialEquipDefenseCommand, "ISimpleCommand");
