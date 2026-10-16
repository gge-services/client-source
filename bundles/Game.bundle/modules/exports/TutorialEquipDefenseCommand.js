Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCharacter = require("gge-module:export_ClientConstCharacter");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __dep_export_CastleDialogEvent = require("gge-module:export_CastleDialogEvent");
var __dep_export_CastleDefenceDataEvent = require("gge-module:export_CastleDefenceDataEvent");
var __dep_export_IsoRenderStrategyEnum = require("gge-module:export_IsoRenderStrategyEnum");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_C2SDefenceCompleteVO = require("gge-module:export_C2SDefenceCompleteVO");
var __dep_export_C2SJoinCastleVO = require("gge-module:export_C2SJoinCastleVO");
var __dep_export_TutorialBasicActionCommand = require("gge-module:export_TutorialBasicActionCommand");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = createjs.Point;
var __s0local2 = function (__s1param0) {
  function TutorialEquipDefenseCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(TutorialEquipDefenseCommand, __s1param0);
  TutorialEquipDefenseCommand.prototype.internalExecute = function () {
    if (this.layoutManager.isInMyCastle) {
      this.checkDefenceData();
    } else {
      if (__dep_export_CastleModel.CastleModel.worldmapData) {
        __dep_export_CastleModel.CastleModel.worldmapData.allowGAARequests = false;
      }
      this.tutorialController.waitForJoinCastle(this.bindFunction(this.checkDefenceData));
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SJoinCastleVO.C2SJoinCastleVO(__dep_export_C2SJoinCastleVO.C2SJoinCastleVO.MY_CASTLE, __dep_exact_26a421b704832cff.WorldClassic.KINGDOM_ID));
    }
  };
  TutorialEquipDefenseCommand.prototype.checkDefenceData = function (__s10param0 = null) {
    if (__dep_export_CastleModel.CastleModel.defenceData.itemsKeep) {
      this.readyToExecute();
    } else {
      var __s10local0 = __dep_export_CastleModel.CastleModel.areaData.activeAreaInfo;
      this.tutorialController.registerComplexListener(this.controller, __dep_export_CastleDefenceDataEvent.CastleDefenceDataEvent.GET_DEFENCE_INFOS, this.bindFunction(this.onGetDefenceInfos));
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SDefenceCompleteVO.C2SDefenceCompleteVO(__s10local0.absAreaPos, __s10local0.objectId));
    }
  };
  TutorialEquipDefenseCommand.prototype.onGetDefenceInfos = function (__s14param0) {
    this.tutorialController.removeComplexListener(this.controller, __dep_export_CastleDefenceDataEvent.CastleDefenceDataEvent.GET_DEFENCE_INFOS, this.bindFunction(this.onGetDefenceInfos));
    this.readyToExecute();
  };
  TutorialEquipDefenseCommand.prototype.readyToExecute = function () {
    if (this.uniqueActionConditionValid()) {
      this.filter.replace(__dep_export_CastleDefenceDialog.CastleDefenceDialog);
      this.filter.add(__dep_export_CastleDefenceAddUnitsDialog.CastleDefenceAddUnitsDialog);
      this.hintTowardsMilitaryMenu();
    }
  };
  TutorialEquipDefenseCommand.prototype.hintTowardsMilitaryMenu = function () {
    this.controller.removeEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.hintTowardsMilitaryMenu));
    if (!this.layoutManager.isInState(__dep_export_CastleLayoutManager.CastleLayoutManager.STATE_ISO)) {
      this.layoutManager.state = __dep_export_CastleLayoutManager.CastleLayoutManager.STATE_ISO;
    }
    if (__dep_export_Iso.Iso.renderer.strategies.currentStrategy.isActive(__dep_export_IsoRenderStrategyEnum.IsoRenderStrategyEnum.BUILD_MODE)) {
      __dep_export_Iso.Iso.controller.viewUpdater.switchBuildModeInOwnCastle(false);
    }
    this.layoutManager.tutorialPanel.showWithText("tut_defence_openDefenceScreen_copy_duplicate", __dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_GENERAL);
    var __s19local0 = this.getActionPanelButtonDisp(__dep_export_RecruitPanelButton.RecruitPanelButton);
    this.arrows.replace(__s19local0, true, false, 1, new __s0local1(15, 5));
    this.replaceActionPanelButtonInBlocker(__dep_export_RecruitPanelButton.RecruitPanelButton);
    this.spotlight.replace(__s19local0);
    this.tutorialController.waitForExternalDialogShow(__dep_export_CastleDefenceDialog.CastleDefenceDialog, this.bindFunction(this.waitForToolsInDefenseDialog));
    this.tutorialController.waitForSublayerPanelShow(this.getActionPanelButton(__dep_export_RecruitPanelButton.RecruitPanelButton), this.bindFunction(this.showButton));
  };
  TutorialEquipDefenseCommand.prototype.showButton = function () {
    var __s23local0 = this.getActionPanelButtonDisp(__dep_export_DefencePanelButton.DefencePanelButton);
    this.trackStep("s_090_080_military_menu_opened");
    this.arrows.replace(__s23local0, true, false, 1, new __s0local1(15, 5));
    this.replaceActionPanelButtonInBlocker(__dep_export_DefencePanelButton.DefencePanelButton);
    this.spotlight.replace(__s23local0);
    this.tutorialController.waitForSublayerPanelHide(this.getActionPanelButton(__dep_export_RecruitPanelButton.RecruitPanelButton), this.bindFunction(this.onMilitarySublayerHide));
  };
  TutorialEquipDefenseCommand.prototype.onMilitarySublayerHide = function () {
    this.tutorialController.removeListeners();
    this.hintTowardsMilitaryMenu();
  };
  TutorialEquipDefenseCommand.prototype.waitForToolsInDefenseDialog = function () {
    this.tutorialController.removeListeners();
    this.trackStep("s_090_090_defense_menu_opened");
    this.blocker.clear();
    this.spotlight.clear();
    this.tutorialController.registerComplexListener(this.controller, __dep_export_CastleDialogEvent.CastleDialogEvent.FIGHT_SCREEN_SHOP_FILLED, this.bindFunction(this.checkWodWithCurrentDefenseCategory));
  };
  TutorialEquipDefenseCommand.prototype.checkWodWithCurrentDefenseCategory = function (__s29param0) {
    this.tutorialController.removeComplexListener(this.controller, __dep_export_CastleDialogEvent.CastleDialogEvent.FIGHT_SCREEN_SHOP_FILLED, this.bindFunction(this.checkWodWithCurrentDefenseCategory));
    var __s29local0 = parseInt(this._tutorialStepVO.attributes.get(__dep_export_TutorialBasicActionCommand.TutorialBasicActionCommand.WODID));
    var __s29local1 = this.layoutManager.getDialog(__dep_export_CastleDefenceDialog.CastleDefenceDialog);
    if (__dep_export_CastleModel.CastleModel.wodData.getUnitVOByWodId(__s29local0).isToolForSlotType(__s29local1.curentShopCategory)) {
      this.showToolsInDefenseDialog();
    } else {
      this.waitForShopCategory();
    }
  };
  TutorialEquipDefenseCommand.prototype.waitForShopCategory = function () {
    var __s33local0 = parseInt(this._tutorialStepVO.attributes.get(__dep_export_TutorialBasicActionCommand.TutorialBasicActionCommand.WODID));
    var __s33local1 = this.layoutManager.getDialog(__dep_export_CastleDefenceDialog.CastleDefenceDialog).getCategoryButtonForUnit(__s33local0);
    if (__s33local1) {
      this.arrows.replace(__s33local1);
      this.blocker.replace(__s33local1);
      this.tutorialController.registerComplexListener(this.controller, __dep_export_CastleDialogEvent.CastleDialogEvent.FIGHT_SCREEN_SHOP_FILLED, this.bindFunction(this.checkWodWithCurrentDefenseCategory));
    }
  };
  TutorialEquipDefenseCommand.prototype.showToolsInDefenseDialog = function () {
    this.tutorialController.removeComplexListener(this.controller, __dep_export_CastleDialogEvent.CastleDialogEvent.FIGHT_SCREEN_SHOP_FILLED, this.bindFunction(this.showToolsInDefenseDialog));
    var __s36local0 = this.layoutManager.getDialog(__dep_export_CastleDefenceDialog.CastleDefenceDialog);
    var __s36local1 = parseInt(this._tutorialStepVO.attributes.get(__dep_export_TutorialBasicActionCommand.TutorialBasicActionCommand.WODID));
    var __s36local2 = __s36local0.getShopItemHolderByUnit(__s36local1);
    if (__s36local2) {
      this.arrows.replace(__s36local2);
      this.blocker.replace(__s36local2);
      this.layoutManager.tutorialPanel.showWithText("tut_defence_selectWall_copy_duplicate", __dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_GENERAL);
      this.tutorialController.registerComplexListener(__s36local2, __s0local0.MOUSE_DOWN, this.bindFunction(this.onToolSelected));
    }
  };
  TutorialEquipDefenseCommand.prototype.onToolSelected = function (__s39param0) {
    this.tutorialController.removeComplexListener(__s39param0.target, __s0local0.MOUSE_DOWN, this.bindFunction(this.onToolSelected));
    var __s39local0 = parseInt(this._tutorialStepVO.attributes.get(__dep_export_TutorialBasicActionCommand.TutorialBasicActionCommand.WODID));
    var __s39local1 = this.layoutManager.getDialog(__dep_export_CastleDefenceDialog.CastleDefenceDialog);
    this.targetSlot = __s39local1.getFittingDefenseSlotForTutorial(__s39local0);
    if (this.targetSlot) {
      this.arrows.replace(this.targetSlot.parent);
      this.blocker.replace(this.targetSlot.parent);
      this.blocker.ignoreMouseMove = true;
      this.tutorialController.registerComplexListener(this.controller, __dep_export_CastleDialogEvent.CastleDialogEvent.DEFENCE_SCREEN_ITEMS_UPDATED, this.bindFunction(this.onToolsMisplaced));
      this.tutorialController.registerComplexListener(this.controller, __dep_export_CastleDialogEvent.CastleDialogEvent.DEFENCE_SCREEN_TOOLS_PLACED, this.bindFunction(this.onToolPlaced));
      this.tutorialController.waitForExternalDialogShow(__dep_export_CastleDefenceAddUnitsDialog.CastleDefenceAddUnitsDialog, this.bindFunction(this.waitForAmountConfirm));
    }
  };
  TutorialEquipDefenseCommand.prototype.onToolsMisplaced = function (__s42param0) {
    this.tutorialController.removeComplexListener(this.controller, __dep_export_CastleDialogEvent.CastleDialogEvent.DEFENCE_SCREEN_ITEMS_UPDATED, this.bindFunction(this.onToolsMisplaced));
    this.tutorialController.removeComplexListener(this.controller, __dep_export_CastleDialogEvent.CastleDialogEvent.DEFENCE_SCREEN_TOOLS_PLACED, this.bindFunction(this.onToolPlaced));
    this.showToolsInDefenseDialog();
  };
  TutorialEquipDefenseCommand.prototype.onToolPlaced = function (__s44param0) {
    this.tutorialController.removeComplexListener(this.controller, __dep_export_CastleDialogEvent.CastleDialogEvent.DEFENCE_SCREEN_ITEMS_UPDATED, this.bindFunction(this.onToolsMisplaced));
    this.tutorialController.removeComplexListener(this.controller, __dep_export_CastleDialogEvent.CastleDialogEvent.DEFENCE_SCREEN_TOOLS_PLACED, this.bindFunction(this.onToolPlaced));
    this.trackStep("s_090_100_slot_selected");
  };
  TutorialEquipDefenseCommand.prototype.waitForAmountConfirm = function () {
    this.trackStep("s_090_110_slider_locked");
    var __s46local0 = this.layoutManager.getDialog(__dep_export_CastleDefenceAddUnitsDialog.CastleDefenceAddUnitsDialog).dialogDisp.btn_ok;
    this.layoutManager.tutorialPanel.hide();
    this.arrows.replace(__s46local0);
    this.blocker.replace(__s46local0);
    this.spotlight.replace(__s46local0);
    this.tutorialController.waitForDialogHide(__dep_export_CastleDefenceAddUnitsDialog.CastleDefenceAddUnitsDialog, this.bindFunction(this.onToolPlacementConfirmed));
  };
  TutorialEquipDefenseCommand.prototype.onToolPlacementConfirmed = function () {
    this.trackStep("s_090_120_defensetools_confirmed");
    var __s48local0 = this.layoutManager.getDialog(__dep_export_CastleDefenceDialog.CastleDefenceDialog);
    this.arrows.replace(__s48local0.disp.bottomMenu.btn_close);
    this.blocker.replace(__s48local0.disp.bottomMenu.btn_close);
    this.spotlight.clear();
    this.tutorialController.onClick(__s48local0.disp.bottomMenu.btn_close, this.bindFunction(this.onConfirmDefenceBtnClicked));
  };
  TutorialEquipDefenseCommand.prototype.onConfirmDefenceBtnClicked = function () {
    this.trackStep("s_090_130_defense_closed");
    this.finishStep();
  };
  TutorialEquipDefenseCommand.prototype.uniqueActionConditionValid = function () {
    var __s52local0 = __dep_exact_f855840627e6e145.int(this._tutorialStepVO.attributes.get(__dep_export_TutorialBasicActionCommand.TutorialBasicActionCommand.WODID));
    var __s52local1 = __dep_exact_f855840627e6e145.int(this._tutorialStepVO.attributes.get(__dep_export_TutorialBasicActionCommand.TutorialBasicActionCommand.AMOUNT));
    if (__dep_export_CastleModel.CastleModel.defenceData.itemsKeep && __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.defenceData.getAmountOfEquippedUnits(__s52local0)) >= __s52local1) {
      return false;
    }
    return true;
  };
  return TutorialEquipDefenseCommand;
}(__dep_export_TutorialBasicActionCommand.TutorialBasicActionCommand);
exports.TutorialEquipDefenseCommand = __s0local2;
var __dep_export_Iso = require("gge-module:export_Iso");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleDefenceAddUnitsDialog = require("gge-module:export_CastleDefenceAddUnitsDialog");
var __dep_export_CastleDefenceDialog = require("gge-module:export_CastleDefenceDialog");
var __dep_export_RecruitPanelButton = require("gge-module:export_RecruitPanelButton");
var __dep_export_DefencePanelButton = require("gge-module:export_DefencePanelButton");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local2, "ISimpleCommand");
