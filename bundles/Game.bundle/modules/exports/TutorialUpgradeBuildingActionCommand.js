Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstCharacter = require("gge-module:export_ClientConstCharacter");
var __dep_export_IsoBuildingStateEnum = require("gge-module:export_IsoBuildingStateEnum");
var __dep_export_IsoEvent = require("gge-module:export_IsoEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_TutorialStartFromQuestBookActionCommand = require("gge-module:export_TutorialStartFromQuestBookActionCommand");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function TutorialUpgradeBuildingActionCommand() {
    var __s3local0 = this;
    __s3local0._startCommandWithSkipUpgrade = false;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._questGiverID = __dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_FEMALE_TUTORIAL_CHARACTER;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(TutorialUpgradeBuildingActionCommand, __s1param0);
  TutorialUpgradeBuildingActionCommand.prototype.getBuilding = function () {
    for (var __s5local0 = 0, __s5local1 = __dep_export_Iso.Iso.renderer.objects.provider.getObjectsByGroupType(__dep_export_IsoObjectGroupEnum.IsoObjectGroupEnum.INNER_BUILDINGS); __s5local0 < __s5local1.length; __s5local0++) {
      var __s5local2 = __s5local1[__s5local0];
      if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s5local2, "ABasicBuildingVE")) {
        var __s5local3 = __s5local2;
        if (__s5local3.buildingVO.wodId == this._tutorialStepVO.attributes.get(__dep_export_TutorialBasicActionCommand.TutorialBasicActionCommand.WODID) && __s5local3.buildingVO.level < this._tutorialStepVO.attributes.get(TutorialUpgradeBuildingActionCommand.UPGRADE_LEVEL)) {
          return __s5local3;
        }
      }
    }
    return null;
  };
  TutorialUpgradeBuildingActionCommand.prototype.actionConditionValid = function () {
    this._startCommandWithSkipUpgrade = false;
    var __s11local0 = this.getBuilding();
    return !!__s11local0 && (__s11local0.buildingVO.buildingState == __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.UPGRADE_IN_PROGRESS && (this._startCommandWithSkipUpgrade = true, this._buildingVE = __s11local0), true);
  };
  TutorialUpgradeBuildingActionCommand.prototype.internalExecute = function () {
    __dep_export_Iso.Iso.renderer.camera.isActive = false;
    if (this._startCommandWithSkipUpgrade) {
      this.clickOnBuilding();
      this.tutorialController.registerComplexListener(this.controller, __dep_export_IsoEvent.IsoEvent.ON_OBJECT_CHANGED, this.bindFunction(this.onBuildingUpgradeComplete));
    } else {
      __s1param0.prototype.internalExecute.call(this);
    }
  };
  TutorialUpgradeBuildingActionCommand.prototype.handleUntilPlayerClickedOnShowMe = function () {
    __s1param0.prototype.handleUntilPlayerClickedOnShowMe.call(this);
    this.tutorialController.waitForExternalDialogHide(__dep_export_CastleQuestDialog.CastleQuestDialog, this.bindFunction(this.clickOnBuilding));
  };
  TutorialUpgradeBuildingActionCommand.prototype.clickOnBuilding = function () {
    this.trackStep("020_040_woodcutter_shortcut_selected");
    this._buildingVE = this.getBuilding();
    if (this._buildingVE) {
      this.arrows.replace(this._buildingVE.elementContainer, true, true, 1, new __s0local0(50, 0));
      this.blocker.replace(this._buildingVE.elementContainer);
      this.layoutManager.tutorialPanel.showWithText("tut_clickOnBuilding_copy", this._questGiverID, __dep_exact_81dacdf05bd32292.MobileHelper.isScreenTooSmall() && __dep_exact_81dacdf05bd32292.MobileHelper.isLandscape() ? __dep_export_CastleTutorialPanel.CastleTutorialPanel.POS_TOP_RIGHT : __dep_export_CastleTutorialPanel.CastleTutorialPanel.POS_BOTTOM_RIGHT);
      this.tutorialController.registerComplexListener(this.controller, __dep_export_IsoEvent.IsoEvent.ON_SHOW_RING_MENU, this.bindFunction(this.clickedOnBuilding));
    }
    this.tutorialController.registerComplexListener(this.controller, __dep_export_IsoEvent.IsoEvent.ON_OBJECT_CHANGED, this.bindFunction(this.onBuildingUpgradeComplete));
    this.tutorialController.registerComplexListener(this.controller, __dep_export_IsoEvent.IsoEvent.ON_OBJECT_ADDED, this.bindFunction(this.onBuildingUpgradeComplete));
  };
  TutorialUpgradeBuildingActionCommand.prototype.clickedOnBuilding = function (__s22param0) {
    if (__s22param0.params && __s22param0.params[0] && __s22param0.params[0].vo.name == this.getBuildingName()) {
      this.tutorialController.removeComplexListener(this.controller, __dep_export_IsoEvent.IsoEvent.ON_SHOW_RING_MENU, this.bindFunction(this.clickedOnBuilding));
      this.trackStep("020_050_woodcutter_iso_selected");
      this.handleBuildingByBuildState(__s22param0);
    }
  };
  TutorialUpgradeBuildingActionCommand.prototype.handleBuildingByBuildState = function (__s25param0) {
    if (this._buildingVE.buildingVO.buildingState == __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.UPGRADE_IN_PROGRESS) {
      this.handleSkipBtn(__s25param0);
    } else {
      this.handleUpgradeBtn(__s25param0);
    }
  };
  TutorialUpgradeBuildingActionCommand.prototype.handleUpgradeBtn = function (__s29param0 = null) {
    this.layoutManager.tutorialPanel.showWithText("tut_clickOnUpgrade1_copy", this._questGiverID, __dep_export_CastleTutorialPanel.CastleTutorialPanel.POS_BOTTOM_RIGHT);
    var __s29local0 = this.layoutManager.getIngameUIComponent(__dep_export_RingMenuBuilding.RingMenuBuilding).disp;
    this.arrows.replace(__s29local0.btn_upgradeBuilding, true, true);
    this.blocker.replace(__s29local0.btn_upgradeBuilding);
    this.tutorialController.registerComplexListener(this.controller, __dep_export_IsoEvent.IsoEvent.ON_BUILDING_UPGRADE_STARTED, this.bindFunction(this.onUpgradeBtnClicked));
    this.tutorialController.registerComplexListener(this.controller, __dep_export_IsoEvent.IsoEvent.ON_SHOW_RING_MENU, this.bindFunction(this.clickedOnBuilding));
  };
  TutorialUpgradeBuildingActionCommand.prototype.handleSkipBtn = function (__s31param0 = null) {
    if (this.layoutManager.getIngameUIComponent(__dep_export_RingMenuBuilding.RingMenuBuilding)) {
      this.tutorialController.removeComplexListener(this.controller, __dep_export_IsoEvent.IsoEvent.ON_BUILDING_UPGRADE_STARTED, this.bindFunction(this.onUpgradeBtnClicked));
      this.layoutManager.tutorialPanel.showWithText("tut_clickOnFreeSkip_copy", __dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_FEMALE_TUTORIAL_CHARACTER, __dep_export_CastleTutorialPanel.CastleTutorialPanel.POS_BOTTOM_RIGHT);
      var __s31local0 = this.layoutManager.getIngameUIComponent(__dep_export_RingMenuBuilding.RingMenuBuilding).disp;
      this.arrows.replace(__s31local0.btn_instantBuild, true, true);
      this.blocker.replace(__s31local0.btn_instantBuild);
    }
  };
  TutorialUpgradeBuildingActionCommand.prototype.onUpgradeBtnClicked = function (__s34param0) {
    if (__s34param0.params[0].name == this.getBuildingName()) {
      this.trackStep("020_060_upgrade_selected");
      this.handleSkipBtn();
    }
  };
  TutorialUpgradeBuildingActionCommand.prototype.onBuildingUpgradeComplete = function (__s37param0) {
    if (__s37param0.params && __s37param0.params.length > 0 && __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s37param0.params[0], "ABasicBuildingVO")) {
      if (this._buildingVE.buildingVO.buildingState == __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.UPGRADE_COMPLETED || this._buildingVE.buildingVO.buildingState == __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.BUILD_COMPLETED) {
        this.trackStep("020_080_woodcutter_upgrade_skipped");
        __dep_export_Iso.Iso.renderer.camera.scrollToCenter();
        this.tutorialController.removeComplexListener(this.controller, __dep_export_IsoEvent.IsoEvent.ON_OBJECT_CHANGED, this.bindFunction(this.onBuildingUpgradeComplete));
        this.tutorialController.removeComplexListener(this.controller, __dep_export_IsoEvent.IsoEvent.ON_OBJECT_ADDED, this.bindFunction(this.onBuildingUpgradeComplete));
        this.finishStep();
      }
    }
  };
  TutorialUpgradeBuildingActionCommand.prototype.finishStep = function () {
    __dep_export_Iso.Iso.renderer.camera.isActive = true;
    __s1param0.prototype.finishStep.call(this);
  };
  TutorialUpgradeBuildingActionCommand.prototype.getBuildingName = function () {
    return __dep_export_CastleModel.CastleModel.wodData.getBuildingVOById(this._tutorialStepVO.attributes.get(__dep_export_TutorialBasicActionCommand.TutorialBasicActionCommand.WODID)).name;
  };
  TutorialUpgradeBuildingActionCommand.prototype.getQuestInfoOpenedTrackingID = function () {
    return "020_030_quest_opened";
  };
  TutorialUpgradeBuildingActionCommand.prototype.getQuestBookOpenedTrackingID = function () {
    return "020_020_questbook_opened";
  };
  TutorialUpgradeBuildingActionCommand.UPGRADE_LEVEL = "upgradeLevel";
  return TutorialUpgradeBuildingActionCommand;
}(__dep_export_TutorialStartFromQuestBookActionCommand.TutorialStartFromQuestBookActionCommand);
exports.TutorialUpgradeBuildingActionCommand = __s0local1;
var __dep_export_IsoObjectGroupEnum = require("gge-module:export_IsoObjectGroupEnum");
var __dep_export_Iso = require("gge-module:export_Iso");
var __dep_export_CastleQuestDialog = require("gge-module:export_CastleQuestDialog");
var __dep_export_RingMenuBuilding = require("gge-module:export_RingMenuBuilding");
var __dep_export_CastleTutorialPanel = require("gge-module:export_CastleTutorialPanel");
var __dep_export_TutorialBasicActionCommand = require("gge-module:export_TutorialBasicActionCommand");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ISimpleCommand");
