Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCharacter = require("gge-module:export_ClientConstCharacter");
var __dep_export_CastleLayoutManagerEvent = require("gge-module:export_CastleLayoutManagerEvent");
var __dep_export_CastleMilitaryDataEvent = require("gge-module:export_CastleMilitaryDataEvent");
var __dep_export_IsoRenderStrategyEnum = require("gge-module:export_IsoRenderStrategyEnum");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleRecruitSelectUnitEvent = require("gge-module:export_CastleRecruitSelectUnitEvent");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_C2SJoinCastleVO = require("gge-module:export_C2SJoinCastleVO");
var __dep_export_TutorialBasicActionCommand = require("gge-module:export_TutorialBasicActionCommand");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function (__s1param0) {
  function TutorialAbstractMilitaryCommand() {
    var __s3local0 = this;
    __s3local0._amountBeforeRecruitment = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(TutorialAbstractMilitaryCommand, __s1param0);
  TutorialAbstractMilitaryCommand.prototype.internalExecute = function () {
    this.filter.allowNoDialogs();
    __dep_export_CastleUnitAmountComponent.CastleUnitAmountComponent.isLimitedByTutorial = true;
    this._amountBeforeRecruitment = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.militaryData.unitInventory.getUnitCountByWodId(this._tutorialStepVO.attributes.get(__dep_export_TutorialBasicActionCommand.TutorialBasicActionCommand.WODID)));
    this.tutorialController.registerComplexListener(this.controller, __dep_export_CastleMilitaryDataEvent.CastleMilitaryDataEvent.INVENTORY_UPDATED, this.bindFunction(this.onRecruitmentFinished));
    this.goToMainCastle();
  };
  TutorialAbstractMilitaryCommand.prototype.goToMainCastle = function () {
    if (this.layoutManager.isInMyCastle) {
      this.hintTowardsMilitaryMenu();
    } else {
      if (__dep_export_CastleModel.CastleModel.worldmapData) {
        __dep_export_CastleModel.CastleModel.worldmapData.allowGAARequests = false;
      }
      this.tutorialController.waitForJoinCastle(this.bindFunction(this.hintTowardsMilitaryMenu));
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SJoinCastleVO.C2SJoinCastleVO(__dep_export_C2SJoinCastleVO.C2SJoinCastleVO.MY_CASTLE, __dep_exact_26a421b704832cff.WorldClassic.KINGDOM_ID));
    }
  };
  TutorialAbstractMilitaryCommand.prototype.hintTowardsMilitaryMenu = function () {
    if (this.tutorialController && this.layoutManager && this.layoutManager.tutorialPanel) {
      if (!this.layoutManager.isInState(__dep_export_CastleLayoutManager.CastleLayoutManager.STATE_ISO)) {
        this.layoutManager.state = __dep_export_CastleLayoutManager.CastleLayoutManager.STATE_ISO;
      }
      if (__dep_export_Iso.Iso.renderer.strategies.currentStrategy.isActive(__dep_export_IsoRenderStrategyEnum.IsoRenderStrategyEnum.BUILD_MODE)) {
        __dep_export_Iso.Iso.controller.viewUpdater.switchBuildModeInOwnCastle(false);
      }
      this.filter.allowNoDialogs();
      this.layoutManager.tutorialPanel.showWithText(this.getOpenMilitaryMenuText(), __dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_GENERAL);
      var __s12local0 = this.getActionPanelButtonDisp(__dep_export_RecruitPanelButton.RecruitPanelButton);
      this.arrows.replace(__s12local0, true, false, 1, __dep_export_TutorialBasicActionCommand.TutorialBasicActionCommand.TUT_ARROW_ACTION_PANEL_OFFSET);
      this.replaceActionPanelButtonInBlocker(__dep_export_RecruitPanelButton.RecruitPanelButton);
      this.tutorialController.waitForSublayerPanelShow(this.getActionPanelButton(__dep_export_RecruitPanelButton.RecruitPanelButton), this.bindFunction(this.showButton));
    }
  };
  TutorialAbstractMilitaryCommand.prototype.showButton = function () {
    if (!this.layoutManager.isInState(__dep_export_CastleLayoutManager.CastleLayoutManager.STATE_ISO)) {
      this.layoutManager.state = __dep_export_CastleLayoutManager.CastleLayoutManager.STATE_ISO;
    }
    if (__dep_export_Iso.Iso.renderer.strategies.currentStrategy.isActive(__dep_export_IsoRenderStrategyEnum.IsoRenderStrategyEnum.BUILD_MODE)) {
      __dep_export_Iso.Iso.controller.viewUpdater.switchBuildModeInOwnCastle(false);
    }
    this.trackStep(this.getOpenMilitaryMenuTrackingID());
    this.tutorialController.registerComplexListener(this.controller, __dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.HIDE_SUBLAYER_PANEL, this.bindFunction(this.checkInternalDialogOpened));
    var __s17local0 = this.getActionPanelButtonDisp(this.getButtonClass());
    this.arrows.replace(__s17local0, true, false, 1, __dep_export_TutorialBasicActionCommand.TutorialBasicActionCommand.TUT_ARROW_ACTION_PANEL_OFFSET);
    this.replaceActionPanelButtonInBlocker(this.getButtonClass());
    this.layoutManager.tutorialPanel.showWithText(this.getClickMilitarySubMenuText(), __dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_GENERAL);
    this.filter.replace(__dep_export_CastleRecruitDialog.CastleRecruitDialog);
    this.tutorialController.waitForExternalDialogShow(__dep_export_CastleRecruitDialog.CastleRecruitDialog, this.bindFunction(this.waitForDialog));
  };
  TutorialAbstractMilitaryCommand.prototype.waitForDialog = function () {};
  TutorialAbstractMilitaryCommand.prototype.checkInternalDialogOpened = function (__s23param0) {
    if (this.tutorialController && this.layoutManager) {
      this.tutorialController.removeComplexListener(this.controller, __dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.HIDE_SUBLAYER_PANEL, this.bindFunction(this.checkInternalDialogOpened));
      var __s23local0 = __dep_exact_81dacdf05bd32292.castAs(this.layoutManager.getDialog(__dep_export_CastleRecruitDialog.CastleRecruitDialog), "CastleRecruitDialog");
      if (!__s23local0 || !__s23local0.isVisible()) {
        this.hintTowardsMilitaryMenu();
      }
    }
  };
  TutorialAbstractMilitaryCommand.prototype.waitForSelectUnit = function () {
    this.trackStep(this.getRecruitDialogOpenedTrackingID());
    if (this.selectUnitManual) {
      var __s27local0 = this.layoutManager.getDialog(__dep_export_CastleRecruitDialog.CastleRecruitDialog);
      __s27local0.currentSublayer.forceToManualSelection();
      this.layoutManager.tutorialPanel.showWithText(this.getSelectUnitText(), __dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_GENERAL);
      var __s27local1 = __dep_exact_f855840627e6e145.int(this._tutorialStepVO.attributes.get(__dep_export_TutorialBasicActionCommand.TutorialBasicActionCommand.WODID));
      var __s27local2 = __s27local0.getClipContainerForUnit(__s27local1, __dep_export_CastleModel.CastleModel.wodData.getUnitVOByWodId(__s27local1).unitCategory);
      if (__s27local2) {
        this.arrows.replace(__s27local2);
        this.blocker.replace(__s27local2);
      }
      this.tutorialController.registerComplexListener(this.controller, __dep_export_CastleRecruitSelectUnitEvent.CastleRecruitSelectUnitEvent.SHOW_UNIT_SELECTION, this.bindFunction(this.onUnitSelected));
    } else {
      this.tutorialController.registerComplexListener(this.controller, __dep_export_CastleMilitaryDataEvent.CastleMilitaryDataEvent.ALL_INVENTORIES_UPDATED, this.bindFunction(this.onUnitSelected));
    }
  };
  TutorialAbstractMilitaryCommand.prototype.onUnitSelected = function (__s32param0 = null) {
    var __s32local0 = this.layoutManager.getDialog(__dep_export_CastleRecruitDialog.CastleRecruitDialog).currentSublayer.recruitSelectedUnitComponent;
    this.tutorialController.removeComplexListener(this.controller, __dep_export_CastleRecruitSelectUnitEvent.CastleRecruitSelectUnitEvent.SHOW_UNIT_SELECTION, this.bindFunction(this.onUnitSelected));
    this.tutorialController.removeComplexListener(this.controller, __dep_export_CastleMilitaryDataEvent.CastleMilitaryDataEvent.ALL_INVENTORIES_UPDATED, this.bindFunction(this.onUnitSelected));
    this.trackStep(this.getUnitRecruitmentConfirmedTrackingID());
    this.layoutManager.tutorialPanel.hide();
    if (parseInt(this._tutorialStepVO.attributes.get(__dep_export_TutorialBasicActionCommand.TutorialBasicActionCommand.AMOUNT)) != __s32local0.selectedUnitAmount) {
      __s32local0.selectedUnitAmount = this._tutorialStepVO.attributes.get(__dep_export_TutorialBasicActionCommand.TutorialBasicActionCommand.AMOUNT);
    }
    this.waitForUnitSelectOK();
  };
  TutorialAbstractMilitaryCommand.prototype.waitForUnitSelectOK = function () {
    var __s35local0 = this.layoutManager.getDialog(__dep_export_CastleRecruitDialog.CastleRecruitDialog).currentSublayer.recruitSelectedUnitComponent;
    this.arrows.replace(__s35local0.disp.recruitmentBtn, false);
    this.blocker.replace(__s35local0.disp.recruitmentBtn);
    this.tutorialController.registerComplexListener(__s35local0.disp.recruitmentBtn, __s0local0.CLICK, this.bindFunction(this.onRecruitmentStarted));
    this.layoutManager.tutorialPanel.showWithText(this.getConfirmUnitSelectionText(), __dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_GENERAL, __dep_export_CastleTutorialPanel.CastleTutorialPanel.POS_TOP_RIGHT, [80]);
  };
  TutorialAbstractMilitaryCommand.prototype.onRecruitmentStarted = function (__s37param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s37param0.target)) {
      var __s37local0 = this.layoutManager.getDialog(__dep_export_CastleRecruitDialog.CastleRecruitDialog).currentSublayer.recruitSelectedUnitComponent;
      this.tutorialController.removeComplexListener(__s37local0.disp.recruitmentBtn, __s0local0.CLICK, this.bindFunction(this.onRecruitmentStarted));
      this.arrows.clear();
      this.blocker.clear();
      this.blocker.allowNoClicks();
      this.layoutManager.tutorialPanel.showWithText(this.getClickOnRecruitDialogCloseText(), __dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_GENERAL, __dep_export_CastleTutorialPanel.CastleTutorialPanel.POS_BOTTOM_RIGHT);
    }
  };
  TutorialAbstractMilitaryCommand.prototype.onRecruitmentFinished = function (__s40param0) {
    if (this._amountBeforeRecruitment + this._tutorialStepVO.getIntAttribute(__dep_export_TutorialBasicActionCommand.TutorialBasicActionCommand.AMOUNT, 0) <= __dep_export_CastleModel.CastleModel.militaryData.unitInventory.getUnitCountByWodId(this._tutorialStepVO.getIntAttribute(__dep_export_TutorialBasicActionCommand.TutorialBasicActionCommand.WODID, 0))) {
      this.tutorialController.removeComplexListener(this.controller, __dep_export_CastleMilitaryDataEvent.CastleMilitaryDataEvent.INVENTORY_UPDATED, this.bindFunction(this.onRecruitmentFinished));
      this.layoutManager.hideAllDialogs();
      this.finishStep();
    }
  };
  TutorialAbstractMilitaryCommand.prototype.actionConditionValid = function () {
    var __s43local0 = __dep_exact_f855840627e6e145.int(this._tutorialStepVO.attributes.get(__dep_export_TutorialBasicActionCommand.TutorialBasicActionCommand.WODID));
    var __s43local1 = __dep_exact_f855840627e6e145.int(this._tutorialStepVO.attributes.get(__dep_export_TutorialBasicActionCommand.TutorialBasicActionCommand.AMOUNT));
    return __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.militaryData.unitInventory.getUnitCountByWodId(__s43local0)) < __s43local1;
  };
  TutorialAbstractMilitaryCommand.prototype.finishStep = function () {
    __dep_export_CastleUnitAmountComponent.CastleUnitAmountComponent.isLimitedByTutorial = false;
    __s1param0.prototype.finishStep.call(this);
  };
  Object.defineProperty(TutorialAbstractMilitaryCommand.prototype, "selectUnitManual", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  TutorialAbstractMilitaryCommand.prototype.getButtonClass = function () {
    return null;
  };
  TutorialAbstractMilitaryCommand.prototype.getSelectUnitText = function () {
    return "please override the getSelectUnitText method";
  };
  TutorialAbstractMilitaryCommand.prototype.getOpenMilitaryMenuText = function () {
    return "please override the getOpenMilitaryMenuText method";
  };
  TutorialAbstractMilitaryCommand.prototype.getClickMilitarySubMenuText = function () {
    return "please override the getClickMilitarySubMenuText method";
  };
  TutorialAbstractMilitaryCommand.prototype.getClickOnRecruitDialogCloseText = function () {
    return "please override the getClickOnDialogCloseText method";
  };
  TutorialAbstractMilitaryCommand.prototype.getConfirmUnitSelectionText = function () {
    return "please override the getConfirmUnitSelectionText method";
  };
  TutorialAbstractMilitaryCommand.prototype.getOpenMilitaryMenuTrackingID = function () {
    return "please override the getOpenMilitaryMenuTrackingID method";
  };
  TutorialAbstractMilitaryCommand.prototype.getRecruitDialogOpenedTrackingID = function () {
    return "please override the getRecruitMenuOpenedTrackingID method";
  };
  TutorialAbstractMilitaryCommand.prototype.getUnitRecruitmentConfirmedTrackingID = function () {
    return "please override the getUnitRecruitmentConfirmedTrackingID method";
  };
  return TutorialAbstractMilitaryCommand;
}(__dep_export_TutorialBasicActionCommand.TutorialBasicActionCommand);
exports.TutorialAbstractMilitaryCommand = __s0local1;
var __dep_export_Iso = require("gge-module:export_Iso");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleUnitAmountComponent = require("gge-module:export_CastleUnitAmountComponent");
var __dep_export_CastleRecruitDialog = require("gge-module:export_CastleRecruitDialog");
var __dep_export_CastleTutorialPanel = require("gge-module:export_CastleTutorialPanel");
var __dep_export_RecruitPanelButton = require("gge-module:export_RecruitPanelButton");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local1, "ISimpleCommand");
