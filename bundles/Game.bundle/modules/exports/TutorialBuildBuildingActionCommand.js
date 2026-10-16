Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstCharacter = require("gge-module:export_ClientConstCharacter");
var __dep_export_CastleDecoShopPanelEvent = require("gge-module:export_CastleDecoShopPanelEvent");
var __dep_export_IsoRenderStrategyEnum = require("gge-module:export_IsoRenderStrategyEnum");
var __dep_export_IsoEvent = require("gge-module:export_IsoEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_TutorialBasicActionCommand = require("gge-module:export_TutorialBasicActionCommand");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function TutorialBuildBuildingActionCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(TutorialBuildBuildingActionCommand, __s1param0);
  TutorialBuildBuildingActionCommand.prototype.internalExecute = function () {
    if (this.layoutManager.isInMyCastle) {
      this.highlightBuildMenuButtonOnPanel();
    } else {
      this.tutorialController.waitForLayoutStateChangeFinished(__dep_export_CastleLayoutManager.CastleLayoutManager.STATE_ISO, this.bindFunction(this.waitUntilPlayerSwitchToMainCastle));
    }
  };
  TutorialBuildBuildingActionCommand.prototype.actionConditionValid = function () {
    for (var __s9local0 = 0, __s9local1 = __dep_export_Iso.Iso.renderer.objects.provider.getObjectsByGroupType(__dep_export_IsoObjectGroupEnum.IsoObjectGroupEnum.INNER_BUILDINGS); __s9local0 < __s9local1.length; __s9local0++) {
      if (__s9local1[__s9local0].vo.wodId == this._tutorialStepVO.attributes.get(__dep_export_TutorialBasicActionCommand.TutorialBasicActionCommand.WODID)) {
        return false;
      }
    }
    return true;
  };
  TutorialBuildBuildingActionCommand.prototype.waitUntilPlayerSwitchToMainCastle = function () {
    this.highlightBuildMenuButtonOnPanel();
  };
  TutorialBuildBuildingActionCommand.prototype.highlightBuildMenuButtonOnPanel = function () {
    this.filter.allowNoDialogs();
    var __s16local0 = this.getActionPanelButtonDisp(__dep_export_BuildMenuPanelButton.BuildMenuPanelButton);
    this.arrows.replace(__s16local0, true, false, 1, new __s0local0(15, 5));
    this.replaceActionPanelButtonInBlocker(__dep_export_BuildMenuPanelButton.BuildMenuPanelButton);
    this.spotlight.replace(__s16local0);
    this.layoutManager.tutorialPanel.showWithText("tutorial_openBuildshop_copy_duplicate", __dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_FEMALE_TUTORIAL_CHARACTER);
    this.tutorialController.waitForLayoutStateChangeFinished(__dep_export_CastleLayoutManager.CastleLayoutManager.STATE_ISO, this.bindFunction(this.onPlayerOpenedBuildMenu));
  };
  TutorialBuildBuildingActionCommand.prototype.onPlayerOpenedBuildMenu = function (__s18param0 = null) {
    if (__dep_export_Iso.Iso.renderer.strategies.currentStrategy.isActive(__dep_export_IsoRenderStrategyEnum.IsoRenderStrategyEnum.BUILD_MODE)) {
      this.trackStep("010_030_build_menu_opened");
      this.layoutManager.tutorialPanel.hide();
      this.layoutManager.getPanel(__dep_export_CastleDecoShopPanel.CastleDecoShopPanel).changeCategory(this.getBuildingCategory());
      this.waitUntilPlayerDragBuilding();
    }
  };
  TutorialBuildBuildingActionCommand.prototype.onDecoShopPanelClose = function () {
    if (this.layoutManager.isInMyCastle) {
      this.removeTutorialMarker();
      this.tutorialController.removeListeners();
      this.highlightBuildMenuButtonOnPanel();
    }
  };
  TutorialBuildBuildingActionCommand.prototype.waitUntilPlayerDragBuilding = function () {
    this.layoutManager.tutorialPanel.showWithText("tut_secondQuestBuildWoodcutter_copy_duplicate", __dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_FEMALE_TUTORIAL_CHARACTER);
    var __s24local0 = this.layoutManager.getPanel(__dep_export_CastleDecoShopPanel.CastleDecoShopPanel);
    var __s24local1 = TutorialBuildBuildingActionCommand.getMCByBuildingVO(__dep_export_WoodcutterBuildingVO.WoodcutterBuildingVO, __s24local0.decoShopPanel);
    this.arrows.replace(__s24local1);
    this.blocker.replace(__s24local1);
    this.spotlight.replace(__s24local1);
    this.tutorialController.waitForLayoutStateChangeFinished(__dep_export_CastleLayoutManager.CastleLayoutManager.STATE_ISO, this.bindFunction(this.onDecoShopPanelClose));
    this.tutorialController.registerComplexListener(this.controller, __dep_export_IsoEvent.IsoEvent.ON_DECO_SHOP_DRAG_START, this.bindFunction(this.onPlayerSelectBuildingInBuildMenu));
  };
  TutorialBuildBuildingActionCommand.prototype.onPlayerSelectBuildingInBuildMenu = function (__s26param0) {
    if (__s26param0.params[0].wodId == this._tutorialStepVO.attributes.get(__dep_export_TutorialBasicActionCommand.TutorialBasicActionCommand.WODID)) {
      this.showTutorialMarker();
      this.layoutManager.tutorialPanel.showWithText("tut_secondQuestConfirmPlacement_copy_duplicate", __dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_FEMALE_TUTORIAL_CHARACTER);
      this.trackStep("010_040_woodcutter_selected");
      this.tutorialController.registerComplexListener(this.controller, __dep_export_IsoEvent.IsoEvent.ON_DRAG_OF_NEW_OBJECT_DONE, this.bindFunction(this.onBuildingPlacedOnValidPosition));
      this.tutorialController.removeComplexListener(this.controller, __dep_export_IsoEvent.IsoEvent.ON_DECO_SHOP_DRAG_START, this.bindFunction(this.onPlayerSelectBuildingInBuildMenu));
      this.tutorialController.registerComplexListener(this.controller, __dep_export_IsoEvent.IsoEvent.ON_DECO_SHOP_DRAG_STOP, this.bindFunction(this.onBuildingLost));
      this.tutorialController.registerComplexListener(this.controller, __dep_export_IsoEvent.IsoEvent.ON_DRAG_INVALID, this.bindFunction(this.onBuildingPositionInvalid));
      this.tutorialController.registerComplexListener(this.controller, __dep_export_CastleDecoShopPanelEvent.CastleDecoShopPanelEvent.CHANGE_CATEGORY, this.bindFunction(this.onCategoryChanged));
      this.tutorialController.registerComplexListener(this.controller, __dep_export_IsoEvent.IsoEvent.ON_DRAG_OF_NEW_OBJECT_DONE, this.bindFunction(this.onPlayerPlacedBuilding));
      this.clearBlockers();
      this.filter.allowNoDialogs();
    }
  };
  TutorialBuildBuildingActionCommand.prototype.onPlayerPlacedBuilding = function (__s29param0) {
    this.tutorialController.removeComplexListener(this.controller, __dep_export_IsoEvent.IsoEvent.ON_DECO_SHOP_DRAG_STOP, this.bindFunction(this.onBuildingLost));
  };
  TutorialBuildBuildingActionCommand.prototype.onCategoryChanged = function (__s31param0) {
    if (this.tutorialData().isInTutorial()) {
      if (__s31param0.newCategory != this.getBuildingCategory()) {
        this.removeTutorialMarker();
        this.layoutManager.tutorialPanel.hide();
        var __s31local0 = this.getPanelDisp(__dep_export_CastleDecoShopPanel.CastleDecoShopPanel)["btn_" + this.getBuildingCategory().toLowerCase()];
        this.arrows.replace(__s31local0, true, false, 1, new __s0local0(18, 17));
        this.blocker.replace(__s31local0);
      } else {
        this.tutorialController.removeListeners();
        this.waitUntilPlayerDragBuilding();
      }
    }
  };
  TutorialBuildBuildingActionCommand.prototype.onBuildingLost = function (__s36param0) {
    this.tutorialController.removeComplexListener(this.controller, __dep_export_IsoEvent.IsoEvent.ON_DECO_SHOP_DRAG_STOP, this.bindFunction(this.onBuildingLost));
    if (__s36param0.params[0].vo.wodId == this._tutorialStepVO.attributes.get(__dep_export_TutorialBasicActionCommand.TutorialBasicActionCommand.WODID)) {
      this.removeTutorialMarker();
      this.tutorialController.removeComplexListener(this.controller, __dep_export_IsoEvent.IsoEvent.ON_DRAG_OF_NEW_OBJECT_DONE, this.bindFunction(this.onBuildingPlacedOnValidPosition));
      this.tutorialController.removeComplexListener(this.controller, __dep_export_IsoEvent.IsoEvent.ON_DRAG_OF_NEW_OBJECT_DONE, this.bindFunction(this.onPlayerPlacedBuilding));
      this.waitUntilPlayerDragBuilding();
    }
  };
  TutorialBuildBuildingActionCommand.prototype.onBuildingPositionInvalid = function (__s39param0) {
    this.removeTutorialMarker();
    this.tutorialController.removeComplexListener(this.controller, __dep_export_IsoEvent.IsoEvent.ON_DRAG_INVALID, this.bindFunction(this.onBuildingPositionInvalid));
    this.tutorialController.removeComplexListener(this.controller, __dep_export_IsoEvent.IsoEvent.ON_DECO_SHOP_DRAG_STOP, this.bindFunction(this.onBuildingLost));
    this.tutorialController.removeComplexListener(this.controller, __dep_export_IsoEvent.IsoEvent.ON_DRAG_OF_NEW_OBJECT_DONE, this.bindFunction(this.onBuildingPlacedOnValidPosition));
    this.waitUntilPlayerDragBuilding();
  };
  TutorialBuildBuildingActionCommand.prototype.onBuildingPlacedOnValidPosition = function (__s41param0) {
    if (__s41param0.params[0] == this._tutorialStepVO.attributes.get(__dep_export_TutorialBasicActionCommand.TutorialBasicActionCommand.WODID)) {
      this.filter.allowNoDialogs();
      this.blocker.allowNoClicks();
      this.tutorialController.removeListeners();
      this.tutorialController.registerComplexListener(this.controller, __dep_export_IsoEvent.IsoEvent.ON_SHOW_RING_MENU, this.bindFunction(this.onRingMenuOpen));
      if (!this.layoutManager.isInState(__dep_export_CastleLayoutManager.CastleLayoutManager.STATE_ISO)) {
        this.layoutManager.state = __dep_export_CastleLayoutManager.CastleLayoutManager.STATE_ISO;
      }
      __dep_export_Iso.Iso.controller.viewUpdater.switchBuildModeInOwnCastle(false);
      this.removeTutorialMarker();
      this.layoutManager.tutorialPanel.hide();
      this.tutorialController.registerComplexListener(this.controller, __dep_export_IsoEvent.IsoEvent.ON_BUILDING_CONSTRUCTION_DONE, this.bindFunction(this.onBuildBuildingComplete));
    }
  };
  TutorialBuildBuildingActionCommand.prototype.onRingMenuOpen = function (__s45param0) {
    if (this.layoutManager) {
      __dep_export_IsoHelper.IsoHelper.view.showRingMenu(false);
    }
  };
  TutorialBuildBuildingActionCommand.prototype.onBuildBuildingComplete = function (__s48param0) {
    this.onRingMenuOpen(null);
    this.tutorialController.removeComplexListener(this.controller, __dep_export_IsoEvent.IsoEvent.ON_SHOW_RING_MENU, this.bindFunction(this.onRingMenuOpen));
    this.tutorialController.removeComplexListener(this.controller, __dep_export_IsoEvent.IsoEvent.ON_BUILDING_CONSTRUCTION_DONE, this.bindFunction(this.onBuildBuildingComplete));
    this.tutorialController.removeComplexListener(this.controller, __dep_export_CastleDecoShopPanelEvent.CastleDecoShopPanelEvent.CHANGE_CATEGORY, this.bindFunction(this.onCategoryChanged));
    this.trackStep("010_050_woodcutter_confirmed");
    this.finishStep();
  };
  TutorialBuildBuildingActionCommand.getMCByBuildingVO = function (__s50param0, __s50param1) {
    var __s50local0 = __s50param0.toString();
    __s50local0 = (__s50local0 = __s50local0.substr("function ".length)).substr(0, __s50local0.indexOf("("));
    for (var __s50local1 = 0; __s50local1 < 4; ++__s50local1) {
      var __s50local2 = __s50param1["i" + __s50local1];
      if (__s50local2.shopVO && __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s50local2.shopVO, __s50local0)) {
        return __s50local2;
      }
    }
    return null;
  };
  TutorialBuildBuildingActionCommand.prototype.showTutorialMarker = function () {
    __dep_export_Iso.Iso.renderer.objects.floorMarks.tutorialMarkerVE.show(new __s0local0(205, 212), new __s0local0(5, 5));
  };
  TutorialBuildBuildingActionCommand.prototype.removeTutorialMarker = function () {
    __dep_export_Iso.Iso.renderer.objects.floorMarks.tutorialMarkerVE.hide();
  };
  TutorialBuildBuildingActionCommand.prototype.getBuildingCategory = function () {
    return __dep_export_CastleModel.CastleModel.wodData.getBuildingVOById(this._tutorialStepVO.attributes.get(__dep_export_TutorialBasicActionCommand.TutorialBasicActionCommand.WODID)).shopCategory;
  };
  return TutorialBuildBuildingActionCommand;
}(__dep_export_TutorialBasicActionCommand.TutorialBasicActionCommand);
exports.TutorialBuildBuildingActionCommand = __s0local1;
var __dep_export_IsoObjectGroupEnum = require("gge-module:export_IsoObjectGroupEnum");
var __dep_export_IsoHelper = require("gge-module:export_IsoHelper");
var __dep_export_Iso = require("gge-module:export_Iso");
var __dep_export_WoodcutterBuildingVO = require("gge-module:export_WoodcutterBuildingVO");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleDecoShopPanel = require("gge-module:export_CastleDecoShopPanel");
var __dep_export_BuildMenuPanelButton = require("gge-module:export_BuildMenuPanelButton");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ISimpleCommand");
