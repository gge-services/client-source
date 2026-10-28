import { CastleModel } from "./CastleModel";
import { CastleQuestDialog } from "./CastleQuestDialog";
import { CastleTutorialPanel } from "./CastleTutorialPanel";
import { ClientConstCharacter } from "./ClientConstCharacter";
import { instanceOfClass } from "../../../ggs.dll/reconstructed/exports/instanceOfClass";
import { Iso } from "./Iso";
import { IsoBuildingStateEnum } from "./IsoBuildingStateEnum";
import { IsoEvent } from "./IsoEvent";
import { IsoObjectGroupEnum } from "./IsoObjectGroupEnum";
import { MobileHelper } from "../../../ggs.dll/reconstructed/exports/MobileHelper";
import { RingMenuBuilding } from "./RingMenuBuilding";
import { TutorialBasicActionCommand } from "./TutorialBasicActionCommand";
import { TutorialStartFromQuestBookActionCommand } from "./TutorialStartFromQuestBookActionCommand";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
const __s0local0 = createjs.Point;
export class TutorialUpgradeBuildingActionCommand extends TutorialStartFromQuestBookActionCommand {
  constructor() {
    const __initial0 = false;
    CONSTRUCTOR_HACK;
    super();
    this._startCommandWithSkipUpgrade = __initial0;
    this._questGiverID = ClientConstCharacter.CHAR_ID_FEMALE_TUTORIAL_CHARACTER;
  }
  getBuilding() {
    for (var __s5local0 = 0, __s5local1 = Iso.renderer.objects.provider.getObjectsByGroupType(IsoObjectGroupEnum.INNER_BUILDINGS); __s5local0 < __s5local1.length; __s5local0++) {
      var __s5local2 = __s5local1[__s5local0];
      if (instanceOfClass(__s5local2, "ABasicBuildingVE")) {
        var __s5local3 = __s5local2;
        if (__s5local3.buildingVO.wodId == this._tutorialStepVO.attributes.get(TutorialBasicActionCommand.WODID) && __s5local3.buildingVO.level < this._tutorialStepVO.attributes.get(TutorialUpgradeBuildingActionCommand.UPGRADE_LEVEL)) {
          return __s5local3;
        }
      }
    }
    return null;
  }
  actionConditionValid() {
    this._startCommandWithSkipUpgrade = false;
    var __s11local0 = this.getBuilding();
    return !!__s11local0 && (__s11local0.buildingVO.buildingState == IsoBuildingStateEnum.UPGRADE_IN_PROGRESS && (this._startCommandWithSkipUpgrade = true, this._buildingVE = __s11local0), true);
  }
  internalExecute() {
    Iso.renderer.camera.isActive = false;
    if (this._startCommandWithSkipUpgrade) {
      this.clickOnBuilding();
      this.tutorialController.registerComplexListener(this.controller, IsoEvent.ON_OBJECT_CHANGED, this.bindFunction(this.onBuildingUpgradeComplete));
    } else {
      super.internalExecute();
    }
  }
  handleUntilPlayerClickedOnShowMe() {
    super.handleUntilPlayerClickedOnShowMe();
    this.tutorialController.waitForExternalDialogHide(CastleQuestDialog, this.bindFunction(this.clickOnBuilding));
  }
  clickOnBuilding() {
    this.trackStep("020_040_woodcutter_shortcut_selected");
    this._buildingVE = this.getBuilding();
    if (this._buildingVE) {
      this.arrows.replace(this._buildingVE.elementContainer, true, true, 1, new __s0local0(50, 0));
      this.blocker.replace(this._buildingVE.elementContainer);
      this.layoutManager.tutorialPanel.showWithText("tut_clickOnBuilding_copy", this._questGiverID, MobileHelper.isScreenTooSmall() && MobileHelper.isLandscape() ? CastleTutorialPanel.POS_TOP_RIGHT : CastleTutorialPanel.POS_BOTTOM_RIGHT);
      this.tutorialController.registerComplexListener(this.controller, IsoEvent.ON_SHOW_RING_MENU, this.bindFunction(this.clickedOnBuilding));
    }
    this.tutorialController.registerComplexListener(this.controller, IsoEvent.ON_OBJECT_CHANGED, this.bindFunction(this.onBuildingUpgradeComplete));
    this.tutorialController.registerComplexListener(this.controller, IsoEvent.ON_OBJECT_ADDED, this.bindFunction(this.onBuildingUpgradeComplete));
  }
  clickedOnBuilding(argument0) {
    if (argument0.params && argument0.params[0] && argument0.params[0].vo.name == this.getBuildingName()) {
      this.tutorialController.removeComplexListener(this.controller, IsoEvent.ON_SHOW_RING_MENU, this.bindFunction(this.clickedOnBuilding));
      this.trackStep("020_050_woodcutter_iso_selected");
      this.handleBuildingByBuildState(argument0);
    }
  }
  handleBuildingByBuildState(argument0) {
    if (this._buildingVE.buildingVO.buildingState == IsoBuildingStateEnum.UPGRADE_IN_PROGRESS) {
      this.handleSkipBtn(argument0);
    } else {
      this.handleUpgradeBtn(argument0);
    }
  }
  handleUpgradeBtn(argument0 = null) {
    this.layoutManager.tutorialPanel.showWithText("tut_clickOnUpgrade1_copy", this._questGiverID, CastleTutorialPanel.POS_BOTTOM_RIGHT);
    var __s29local0 = this.layoutManager.getIngameUIComponent(RingMenuBuilding).disp;
    this.arrows.replace(__s29local0.btn_upgradeBuilding, true, true);
    this.blocker.replace(__s29local0.btn_upgradeBuilding);
    this.tutorialController.registerComplexListener(this.controller, IsoEvent.ON_BUILDING_UPGRADE_STARTED, this.bindFunction(this.onUpgradeBtnClicked));
    this.tutorialController.registerComplexListener(this.controller, IsoEvent.ON_SHOW_RING_MENU, this.bindFunction(this.clickedOnBuilding));
  }
  handleSkipBtn(argument0 = null) {
    if (this.layoutManager.getIngameUIComponent(RingMenuBuilding)) {
      this.tutorialController.removeComplexListener(this.controller, IsoEvent.ON_BUILDING_UPGRADE_STARTED, this.bindFunction(this.onUpgradeBtnClicked));
      this.layoutManager.tutorialPanel.showWithText("tut_clickOnFreeSkip_copy", ClientConstCharacter.CHAR_ID_FEMALE_TUTORIAL_CHARACTER, CastleTutorialPanel.POS_BOTTOM_RIGHT);
      var __s31local0 = this.layoutManager.getIngameUIComponent(RingMenuBuilding).disp;
      this.arrows.replace(__s31local0.btn_instantBuild, true, true);
      this.blocker.replace(__s31local0.btn_instantBuild);
    }
  }
  onUpgradeBtnClicked(argument0) {
    if (argument0.params[0].name == this.getBuildingName()) {
      this.trackStep("020_060_upgrade_selected");
      this.handleSkipBtn();
    }
  }
  onBuildingUpgradeComplete(argument0) {
    if (argument0.params && argument0.params.length > 0 && instanceOfClass(argument0.params[0], "ABasicBuildingVO")) {
      if (this._buildingVE.buildingVO.buildingState == IsoBuildingStateEnum.UPGRADE_COMPLETED || this._buildingVE.buildingVO.buildingState == IsoBuildingStateEnum.BUILD_COMPLETED) {
        this.trackStep("020_080_woodcutter_upgrade_skipped");
        Iso.renderer.camera.scrollToCenter();
        this.tutorialController.removeComplexListener(this.controller, IsoEvent.ON_OBJECT_CHANGED, this.bindFunction(this.onBuildingUpgradeComplete));
        this.tutorialController.removeComplexListener(this.controller, IsoEvent.ON_OBJECT_ADDED, this.bindFunction(this.onBuildingUpgradeComplete));
        this.finishStep();
      }
    }
  }
  finishStep() {
    Iso.renderer.camera.isActive = true;
    super.finishStep();
  }
  getBuildingName() {
    return CastleModel.wodData.getBuildingVOById(this._tutorialStepVO.attributes.get(TutorialBasicActionCommand.WODID)).name;
  }
  getQuestInfoOpenedTrackingID() {
    return "020_030_quest_opened";
  }
  getQuestBookOpenedTrackingID() {
    return "020_020_questbook_opened";
  }
  static UPGRADE_LEVEL = "upgradeLevel";
}
classImplementsInterfaces(TutorialUpgradeBuildingActionCommand, "ISimpleCommand");
