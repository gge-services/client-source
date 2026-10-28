import { CastleExpansionDialog } from "./CastleExpansionDialog";
import { CastleQuestDialog } from "./CastleQuestDialog";
import { ClientConstCharacter } from "./ClientConstCharacter";
import { int } from "../../../ggs.dll/reconstructed/exports/int";
import { Iso } from "./Iso";
import { IsoEvent } from "./IsoEvent";
import { IsoRenderStrategyEnum } from "./IsoRenderStrategyEnum";
import { TutorialStartFromQuestBookActionCommand } from "./TutorialStartFromQuestBookActionCommand";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class TutorialExpandCastleActionCommand extends TutorialStartFromQuestBookActionCommand {
  constructor() {
    const __initial0 = [];
    CONSTRUCTOR_HACK;
    super();
    this._addedExpansions = __initial0;
    this._questGiverID = ClientConstCharacter.CHAR_ID_FEMALE_TUTORIAL_CHARACTER;
  }
  handleUntilPlayerClickedOnShowMe() {
    super.handleUntilPlayerClickedOnShowMe();
    this.tutorialController.waitForDialogHide(CastleQuestDialog, this.bindFunction(this.onCloseQuestBookDialog));
  }
  onCloseQuestBookDialog() {
    this.trackStep("030_040_expansion_shortcut_selected");
    this.clearBlockers();
    this.filter.replace(CastleExpansionDialog);
    if (this.layoutManager.isInMyCastleBuildMode) {
      this.addArrowsToExpansion();
    } else {
      this.tutorialController.registerComplexListener(this.controller, IsoEvent.ON_EXPANSION_ARROW_ADDED, this.bindFunction(this.onExpansionArrowAddedToCastle));
      this.tutorialController.registerComplexListener(this.controller, IsoEvent.ON_EXPANSION_ARROW_REMOVED, this.bindFunction(this.onExpansionArrowRemovedFromCastle));
    }
    this.tutorialController.waitForExternalDialogShow(CastleExpansionDialog, this.bindFunction(this.onShowBuyExpansionDialog));
  }
  onCastleSwitchedToBuildMode(argument0 = null) {
    if (Iso.renderer.strategies.currentStrategy.isActive(IsoRenderStrategyEnum.BUILD_MODE)) {
      this.tutorialController.removeComplexListener(this.controller, IsoEvent.ON_RENDER_STRATEGY_CHANGED, this.bindFunction(this.onCastleSwitchedToBuildMode));
      this.tutorialController.registerComplexListener(this.controller, IsoEvent.ON_EXPANSION_ARROW_ADDED, this.bindFunction(this.onExpansionArrowAddedToCastle));
      this.tutorialController.registerComplexListener(this.controller, IsoEvent.ON_EXPANSION_ARROW_REMOVED, this.bindFunction(this.onExpansionArrowRemovedFromCastle));
    }
  }
  onExpansionArrowAddedToCastle(argument0) {
    var __s14local0 = argument0.params[0];
    this.addArrowToSingleExpansion(__s14local0);
  }
  onExpansionArrowRemovedFromCastle(argument0) {
    var __s16local0 = argument0.params[0];
    this.removeArrowFromExpansion(__s16local0);
  }
  removeArrowFromExpansion(argument0) {
    var __s18local0 = int(this._addedExpansions.indexOf(argument0));
    if (__s18local0 >= 0) {
      this._addedExpansions.splice(__s18local0, 1);
      this.arrows.remove(__s18local0);
      this.blocker.remove(__s18local0);
    }
  }
  addArrowsToExpansion() {
    var __s21local0 = Iso.renderer.objects.expansions.list;
    if (__s21local0 != null) {
      for (var __s21local1 = 0, __s21local2 = __s21local0; __s21local1 < __s21local2.length; __s21local1++) {
        var __s21local3 = __s21local2[__s21local1];
        if (__s21local3 !== undefined) {
          this.addArrowToSingleExpansion(__s21local3);
        }
      }
    }
  }
  addArrowToSingleExpansion(argument0) {
    if (argument0.expandArrow) {
      this.removeArrowFromExpansion(argument0);
      var __s27local0 = argument0.expandArrow.arrow_normal;
      var __s27local1 = argument0.vo.rotation % 2 != 0;
      this.arrows.add(__s27local0, __s27local1, false, 0.75);
      this.blocker.add(__s27local0);
      this._addedExpansions.push(argument0);
    } else {
      argument0.addFunctionOnWaitForLoadComplete(this.bindFunction(function (__s31param0) {
        this.addArrowToSingleExpansion(argument0);
      }));
    }
  }
  onShowBuyExpansionDialog() {
    this.trackStep("030_060_expansion_iso_selected");
    this.tutorialController.removeComplexListener(this.controller, IsoEvent.ON_EXPANSION_ARROW_REMOVED, this.bindFunction(this.onExpansionArrowRemovedFromCastle));
    this.tutorialController.removeComplexListener(this.controller, IsoEvent.ON_EXPANSION_ARROW_ADDED, this.bindFunction(this.onExpansionArrowAddedToCastle));
    var __s33local0 = this.getDialogDisp(CastleExpansionDialog);
    this.arrows.replace(__s33local0.btn_ok, false, true);
    this.blocker.replace(__s33local0.btn_ok);
    this.tutorialController.registerComplexListener(this.controller, IsoEvent.ON_BUY_EXPANSION, this.bindFunction(this.onPlayerBoughtCastleExpansion));
  }
  onPlayerBoughtCastleExpansion(argument0) {
    this.trackStep("030_070_expansion_confirmed");
    Iso.controller.viewUpdater.switchBuildModeInOwnCastle(false);
    this._addedExpansions = [];
    this.finishStep();
  }
  getQuestInfoOpenedTrackingID() {
    return "030_030_quest_opened";
  }
  getQuestBookOpenedTrackingID() {
    return "030_020_questbook_opened";
  }
}
classImplementsInterfaces(TutorialExpandCastleActionCommand, "ISimpleCommand");
