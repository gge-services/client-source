import { BuildMenuPanelButton } from "./BuildMenuPanelButton";
import { CastleDecoShopPanel } from "./CastleDecoShopPanel";
import { CastleDecoShopPanelEvent } from "./CastleDecoShopPanelEvent";
import { CastleLayoutManager } from "./CastleLayoutManager";
import { CastleModel } from "./CastleModel";
import { ClientConstCharacter } from "./ClientConstCharacter";
import { instanceOfClass } from "../../../ggs.dll/reconstructed/exports/instanceOfClass";
import { Iso } from "./Iso";
import { IsoEvent } from "./IsoEvent";
import { IsoHelper } from "./IsoHelper";
import { IsoObjectGroupEnum } from "./IsoObjectGroupEnum";
import { IsoRenderStrategyEnum } from "./IsoRenderStrategyEnum";
import { TutorialBasicActionCommand } from "./TutorialBasicActionCommand";
import { WoodcutterBuildingVO } from "./WoodcutterBuildingVO";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
const __s0local0 = createjs.Point;
export class TutorialBuildBuildingActionCommand extends TutorialBasicActionCommand {
  internalExecute() {
    if (this.layoutManager.isInMyCastle) {
      this.highlightBuildMenuButtonOnPanel();
    } else {
      this.tutorialController.waitForLayoutStateChangeFinished(CastleLayoutManager.STATE_ISO, this.bindFunction(this.waitUntilPlayerSwitchToMainCastle));
    }
  }
  actionConditionValid() {
    for (var __s9local0 = 0, __s9local1 = Iso.renderer.objects.provider.getObjectsByGroupType(IsoObjectGroupEnum.INNER_BUILDINGS); __s9local0 < __s9local1.length; __s9local0++) {
      if (__s9local1[__s9local0].vo.wodId == this._tutorialStepVO.attributes.get(TutorialBasicActionCommand.WODID)) {
        return false;
      }
    }
    return true;
  }
  waitUntilPlayerSwitchToMainCastle() {
    this.highlightBuildMenuButtonOnPanel();
  }
  highlightBuildMenuButtonOnPanel() {
    this.filter.allowNoDialogs();
    var __s16local0 = this.getActionPanelButtonDisp(BuildMenuPanelButton);
    this.arrows.replace(__s16local0, true, false, 1, new __s0local0(15, 5));
    this.replaceActionPanelButtonInBlocker(BuildMenuPanelButton);
    this.spotlight.replace(__s16local0);
    this.layoutManager.tutorialPanel.showWithText("tutorial_openBuildshop_copy_duplicate", ClientConstCharacter.CHAR_ID_FEMALE_TUTORIAL_CHARACTER);
    this.tutorialController.waitForLayoutStateChangeFinished(CastleLayoutManager.STATE_ISO, this.bindFunction(this.onPlayerOpenedBuildMenu));
  }
  onPlayerOpenedBuildMenu(argument0 = null) {
    if (Iso.renderer.strategies.currentStrategy.isActive(IsoRenderStrategyEnum.BUILD_MODE)) {
      this.trackStep("010_030_build_menu_opened");
      this.layoutManager.tutorialPanel.hide();
      this.layoutManager.getPanel(CastleDecoShopPanel).changeCategory(this.getBuildingCategory());
      this.waitUntilPlayerDragBuilding();
    }
  }
  onDecoShopPanelClose() {
    if (this.layoutManager.isInMyCastle) {
      this.removeTutorialMarker();
      this.tutorialController.removeListeners();
      this.highlightBuildMenuButtonOnPanel();
    }
  }
  waitUntilPlayerDragBuilding() {
    this.layoutManager.tutorialPanel.showWithText("tut_secondQuestBuildWoodcutter_copy_duplicate", ClientConstCharacter.CHAR_ID_FEMALE_TUTORIAL_CHARACTER);
    var __s24local0 = this.layoutManager.getPanel(CastleDecoShopPanel);
    var __s24local1 = TutorialBuildBuildingActionCommand.getMCByBuildingVO(WoodcutterBuildingVO, __s24local0.decoShopPanel);
    this.arrows.replace(__s24local1);
    this.blocker.replace(__s24local1);
    this.spotlight.replace(__s24local1);
    this.tutorialController.waitForLayoutStateChangeFinished(CastleLayoutManager.STATE_ISO, this.bindFunction(this.onDecoShopPanelClose));
    this.tutorialController.registerComplexListener(this.controller, IsoEvent.ON_DECO_SHOP_DRAG_START, this.bindFunction(this.onPlayerSelectBuildingInBuildMenu));
  }
  onPlayerSelectBuildingInBuildMenu(argument0) {
    if (argument0.params[0].wodId == this._tutorialStepVO.attributes.get(TutorialBasicActionCommand.WODID)) {
      this.showTutorialMarker();
      this.layoutManager.tutorialPanel.showWithText("tut_secondQuestConfirmPlacement_copy_duplicate", ClientConstCharacter.CHAR_ID_FEMALE_TUTORIAL_CHARACTER);
      this.trackStep("010_040_woodcutter_selected");
      this.tutorialController.registerComplexListener(this.controller, IsoEvent.ON_DRAG_OF_NEW_OBJECT_DONE, this.bindFunction(this.onBuildingPlacedOnValidPosition));
      this.tutorialController.removeComplexListener(this.controller, IsoEvent.ON_DECO_SHOP_DRAG_START, this.bindFunction(this.onPlayerSelectBuildingInBuildMenu));
      this.tutorialController.registerComplexListener(this.controller, IsoEvent.ON_DECO_SHOP_DRAG_STOP, this.bindFunction(this.onBuildingLost));
      this.tutorialController.registerComplexListener(this.controller, IsoEvent.ON_DRAG_INVALID, this.bindFunction(this.onBuildingPositionInvalid));
      this.tutorialController.registerComplexListener(this.controller, CastleDecoShopPanelEvent.CHANGE_CATEGORY, this.bindFunction(this.onCategoryChanged));
      this.tutorialController.registerComplexListener(this.controller, IsoEvent.ON_DRAG_OF_NEW_OBJECT_DONE, this.bindFunction(this.onPlayerPlacedBuilding));
      this.clearBlockers();
      this.filter.allowNoDialogs();
    }
  }
  onPlayerPlacedBuilding(argument0) {
    this.tutorialController.removeComplexListener(this.controller, IsoEvent.ON_DECO_SHOP_DRAG_STOP, this.bindFunction(this.onBuildingLost));
  }
  onCategoryChanged(argument0) {
    if (this.tutorialData().isInTutorial()) {
      if (argument0.newCategory != this.getBuildingCategory()) {
        this.removeTutorialMarker();
        this.layoutManager.tutorialPanel.hide();
        var __s31local0 = this.getPanelDisp(CastleDecoShopPanel)["btn_" + this.getBuildingCategory().toLowerCase()];
        this.arrows.replace(__s31local0, true, false, 1, new __s0local0(18, 17));
        this.blocker.replace(__s31local0);
      } else {
        this.tutorialController.removeListeners();
        this.waitUntilPlayerDragBuilding();
      }
    }
  }
  onBuildingLost(argument0) {
    this.tutorialController.removeComplexListener(this.controller, IsoEvent.ON_DECO_SHOP_DRAG_STOP, this.bindFunction(this.onBuildingLost));
    if (argument0.params[0].vo.wodId == this._tutorialStepVO.attributes.get(TutorialBasicActionCommand.WODID)) {
      this.removeTutorialMarker();
      this.tutorialController.removeComplexListener(this.controller, IsoEvent.ON_DRAG_OF_NEW_OBJECT_DONE, this.bindFunction(this.onBuildingPlacedOnValidPosition));
      this.tutorialController.removeComplexListener(this.controller, IsoEvent.ON_DRAG_OF_NEW_OBJECT_DONE, this.bindFunction(this.onPlayerPlacedBuilding));
      this.waitUntilPlayerDragBuilding();
    }
  }
  onBuildingPositionInvalid(argument0) {
    this.removeTutorialMarker();
    this.tutorialController.removeComplexListener(this.controller, IsoEvent.ON_DRAG_INVALID, this.bindFunction(this.onBuildingPositionInvalid));
    this.tutorialController.removeComplexListener(this.controller, IsoEvent.ON_DECO_SHOP_DRAG_STOP, this.bindFunction(this.onBuildingLost));
    this.tutorialController.removeComplexListener(this.controller, IsoEvent.ON_DRAG_OF_NEW_OBJECT_DONE, this.bindFunction(this.onBuildingPlacedOnValidPosition));
    this.waitUntilPlayerDragBuilding();
  }
  onBuildingPlacedOnValidPosition(argument0) {
    if (argument0.params[0] == this._tutorialStepVO.attributes.get(TutorialBasicActionCommand.WODID)) {
      this.filter.allowNoDialogs();
      this.blocker.allowNoClicks();
      this.tutorialController.removeListeners();
      this.tutorialController.registerComplexListener(this.controller, IsoEvent.ON_SHOW_RING_MENU, this.bindFunction(this.onRingMenuOpen));
      if (!this.layoutManager.isInState(CastleLayoutManager.STATE_ISO)) {
        this.layoutManager.state = CastleLayoutManager.STATE_ISO;
      }
      Iso.controller.viewUpdater.switchBuildModeInOwnCastle(false);
      this.removeTutorialMarker();
      this.layoutManager.tutorialPanel.hide();
      this.tutorialController.registerComplexListener(this.controller, IsoEvent.ON_BUILDING_CONSTRUCTION_DONE, this.bindFunction(this.onBuildBuildingComplete));
    }
  }
  onRingMenuOpen(argument0) {
    if (this.layoutManager) {
      IsoHelper.view.showRingMenu(false);
    }
  }
  onBuildBuildingComplete(argument0) {
    this.onRingMenuOpen(null);
    this.tutorialController.removeComplexListener(this.controller, IsoEvent.ON_SHOW_RING_MENU, this.bindFunction(this.onRingMenuOpen));
    this.tutorialController.removeComplexListener(this.controller, IsoEvent.ON_BUILDING_CONSTRUCTION_DONE, this.bindFunction(this.onBuildBuildingComplete));
    this.tutorialController.removeComplexListener(this.controller, CastleDecoShopPanelEvent.CHANGE_CATEGORY, this.bindFunction(this.onCategoryChanged));
    this.trackStep("010_050_woodcutter_confirmed");
    this.finishStep();
  }
  static getMCByBuildingVO(argument0, argument1) {
    var __s50local0 = argument0.toString();
    __s50local0 = (__s50local0 = __s50local0.substr("function ".length)).substr(0, __s50local0.indexOf("("));
    for (var __s50local1 = 0; __s50local1 < 4; ++__s50local1) {
      var __s50local2 = argument1["i" + __s50local1];
      if (__s50local2.shopVO && instanceOfClass(__s50local2.shopVO, __s50local0)) {
        return __s50local2;
      }
    }
    return null;
  }
  showTutorialMarker() {
    Iso.renderer.objects.floorMarks.tutorialMarkerVE.show(new __s0local0(205, 212), new __s0local0(5, 5));
  }
  removeTutorialMarker() {
    Iso.renderer.objects.floorMarks.tutorialMarkerVE.hide();
  }
  getBuildingCategory() {
    return CastleModel.wodData.getBuildingVOById(this._tutorialStepVO.attributes.get(TutorialBasicActionCommand.WODID)).shopCategory;
  }
}
classImplementsInterfaces(TutorialBuildBuildingActionCommand, "ISimpleCommand");
