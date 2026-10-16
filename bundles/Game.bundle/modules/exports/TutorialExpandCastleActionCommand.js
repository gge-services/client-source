Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCharacter = require("gge-module:export_ClientConstCharacter");
var __dep_export_IsoRenderStrategyEnum = require("gge-module:export_IsoRenderStrategyEnum");
var __dep_export_IsoEvent = require("gge-module:export_IsoEvent");
var __s0local0 = function (__s1param0) {
  function TutorialExpandCastleActionCommand() {
    var __s3local0 = this;
    __s3local0._addedExpansions = [];
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._questGiverID = __dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_FEMALE_TUTORIAL_CHARACTER;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(TutorialExpandCastleActionCommand, __s1param0);
  TutorialExpandCastleActionCommand.prototype.handleUntilPlayerClickedOnShowMe = function () {
    __s1param0.prototype.handleUntilPlayerClickedOnShowMe.call(this);
    this.tutorialController.waitForDialogHide(__dep_export_CastleQuestDialog.CastleQuestDialog, this.bindFunction(this.onCloseQuestBookDialog));
  };
  TutorialExpandCastleActionCommand.prototype.onCloseQuestBookDialog = function () {
    this.trackStep("030_040_expansion_shortcut_selected");
    this.clearBlockers();
    this.filter.replace(__dep_export_CastleExpansionDialog.CastleExpansionDialog);
    if (this.layoutManager.isInMyCastleBuildMode) {
      this.addArrowsToExpansion();
    } else {
      this.tutorialController.registerComplexListener(this.controller, __dep_export_IsoEvent.IsoEvent.ON_EXPANSION_ARROW_ADDED, this.bindFunction(this.onExpansionArrowAddedToCastle));
      this.tutorialController.registerComplexListener(this.controller, __dep_export_IsoEvent.IsoEvent.ON_EXPANSION_ARROW_REMOVED, this.bindFunction(this.onExpansionArrowRemovedFromCastle));
    }
    this.tutorialController.waitForExternalDialogShow(__dep_export_CastleExpansionDialog.CastleExpansionDialog, this.bindFunction(this.onShowBuyExpansionDialog));
  };
  TutorialExpandCastleActionCommand.prototype.onCastleSwitchedToBuildMode = function (__s11param0 = null) {
    if (__dep_export_Iso.Iso.renderer.strategies.currentStrategy.isActive(__dep_export_IsoRenderStrategyEnum.IsoRenderStrategyEnum.BUILD_MODE)) {
      this.tutorialController.removeComplexListener(this.controller, __dep_export_IsoEvent.IsoEvent.ON_RENDER_STRATEGY_CHANGED, this.bindFunction(this.onCastleSwitchedToBuildMode));
      this.tutorialController.registerComplexListener(this.controller, __dep_export_IsoEvent.IsoEvent.ON_EXPANSION_ARROW_ADDED, this.bindFunction(this.onExpansionArrowAddedToCastle));
      this.tutorialController.registerComplexListener(this.controller, __dep_export_IsoEvent.IsoEvent.ON_EXPANSION_ARROW_REMOVED, this.bindFunction(this.onExpansionArrowRemovedFromCastle));
    }
  };
  TutorialExpandCastleActionCommand.prototype.onExpansionArrowAddedToCastle = function (__s14param0) {
    var __s14local0 = __s14param0.params[0];
    this.addArrowToSingleExpansion(__s14local0);
  };
  TutorialExpandCastleActionCommand.prototype.onExpansionArrowRemovedFromCastle = function (__s16param0) {
    var __s16local0 = __s16param0.params[0];
    this.removeArrowFromExpansion(__s16local0);
  };
  TutorialExpandCastleActionCommand.prototype.removeArrowFromExpansion = function (__s18param0) {
    var __s18local0 = __dep_exact_f855840627e6e145.int(this._addedExpansions.indexOf(__s18param0));
    if (__s18local0 >= 0) {
      this._addedExpansions.splice(__s18local0, 1);
      this.arrows.remove(__s18local0);
      this.blocker.remove(__s18local0);
    }
  };
  TutorialExpandCastleActionCommand.prototype.addArrowsToExpansion = function () {
    var __s21local0 = __dep_export_Iso.Iso.renderer.objects.expansions.list;
    if (__s21local0 != null) {
      for (var __s21local1 = 0, __s21local2 = __s21local0; __s21local1 < __s21local2.length; __s21local1++) {
        var __s21local3 = __s21local2[__s21local1];
        if (__s21local3 !== undefined) {
          this.addArrowToSingleExpansion(__s21local3);
        }
      }
    }
  };
  TutorialExpandCastleActionCommand.prototype.addArrowToSingleExpansion = function (__s27param0) {
    if (__s27param0.expandArrow) {
      this.removeArrowFromExpansion(__s27param0);
      var __s27local0 = __s27param0.expandArrow.arrow_normal;
      var __s27local1 = __s27param0.vo.rotation % 2 != 0;
      this.arrows.add(__s27local0, __s27local1, false, 0.75);
      this.blocker.add(__s27local0);
      this._addedExpansions.push(__s27param0);
    } else {
      __s27param0.addFunctionOnWaitForLoadComplete(this.bindFunction(function (__s31param0) {
        this.addArrowToSingleExpansion(__s27param0);
      }));
    }
  };
  TutorialExpandCastleActionCommand.prototype.onShowBuyExpansionDialog = function () {
    this.trackStep("030_060_expansion_iso_selected");
    this.tutorialController.removeComplexListener(this.controller, __dep_export_IsoEvent.IsoEvent.ON_EXPANSION_ARROW_REMOVED, this.bindFunction(this.onExpansionArrowRemovedFromCastle));
    this.tutorialController.removeComplexListener(this.controller, __dep_export_IsoEvent.IsoEvent.ON_EXPANSION_ARROW_ADDED, this.bindFunction(this.onExpansionArrowAddedToCastle));
    var __s33local0 = this.getDialogDisp(__dep_export_CastleExpansionDialog.CastleExpansionDialog);
    this.arrows.replace(__s33local0.btn_ok, false, true);
    this.blocker.replace(__s33local0.btn_ok);
    this.tutorialController.registerComplexListener(this.controller, __dep_export_IsoEvent.IsoEvent.ON_BUY_EXPANSION, this.bindFunction(this.onPlayerBoughtCastleExpansion));
  };
  TutorialExpandCastleActionCommand.prototype.onPlayerBoughtCastleExpansion = function (__s35param0) {
    this.trackStep("030_070_expansion_confirmed");
    __dep_export_Iso.Iso.controller.viewUpdater.switchBuildModeInOwnCastle(false);
    this._addedExpansions = [];
    this.finishStep();
  };
  TutorialExpandCastleActionCommand.prototype.getQuestInfoOpenedTrackingID = function () {
    return "030_030_quest_opened";
  };
  TutorialExpandCastleActionCommand.prototype.getQuestBookOpenedTrackingID = function () {
    return "030_020_questbook_opened";
  };
  return TutorialExpandCastleActionCommand;
}(require("gge-module:export_TutorialStartFromQuestBookActionCommand").TutorialStartFromQuestBookActionCommand);
exports.TutorialExpandCastleActionCommand = __s0local0;
var __dep_export_Iso = require("gge-module:export_Iso");
var __dep_export_CastleExpansionDialog = require("gge-module:export_CastleExpansionDialog");
var __dep_export_CastleQuestDialog = require("gge-module:export_CastleQuestDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ISimpleCommand");
