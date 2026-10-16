Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_TutorialAbstractMilitaryCommand = require("gge-module:export_TutorialAbstractMilitaryCommand");
var __s0local0 = function (__s1param0) {
  function TutorialRecruitUnitsCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(TutorialRecruitUnitsCommand, __s1param0);
  TutorialRecruitUnitsCommand.prototype.getButtonClass = function () {
    return __dep_export_RecruitPanelButton.RecruitPanelButton;
  };
  TutorialRecruitUnitsCommand.prototype.goToMainCastle = function () {
    if (this.layoutManager.isInMyCastle) {
      this.showButton();
    } else {
      if (__dep_export_CastleModel.CastleModel.worldmapData) {
        __dep_export_CastleModel.CastleModel.worldmapData.allowGAARequests = false;
      }
      this.tutorialController.waitForJoinCastle(this.bindFunction(this.showButton));
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SJoinCastleVO.C2SJoinCastleVO(__dep_export_C2SJoinCastleVO.C2SJoinCastleVO.MY_CASTLE, __dep_exact_26a421b704832cff.WorldClassic.KINGDOM_ID));
    }
  };
  TutorialRecruitUnitsCommand.prototype.waitForDialog = function () {
    this.layoutManager.getDialog(__dep_export_CastleRecruitDialog.CastleRecruitDialog).changeCategoryWithParams(__dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_SOLDIERS, [__dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_SOLDIERS, __dep_export_CastleRecruitDialogUnits.CastleRecruitDialogUnits.FILTER_UNITS_ALL]);
    this.waitForSelectUnit();
  };
  Object.defineProperty(TutorialRecruitUnitsCommand.prototype, "selectUnitManual", {
    get: function () {
      return true;
    },
    set: function (__s16param0) {
      Object.getOwnPropertyDescriptor(__dep_export_TutorialAbstractMilitaryCommand.TutorialAbstractMilitaryCommand.prototype, "selectUnitManual").set.call(this, __s16param0);
    },
    enumerable: true,
    configurable: true
  });
  TutorialRecruitUnitsCommand.prototype.getSelectUnitText = function () {
    return "tut_recruit_SelectUnit_copy_duplicate";
  };
  TutorialRecruitUnitsCommand.prototype.getOpenMilitaryMenuText = function () {
    return "tut_recruit_OpenSubmenu_copy_duplicate";
  };
  TutorialRecruitUnitsCommand.prototype.getClickMilitarySubMenuText = function () {
    return "tut_recruit_OpenSubmenu_copy_duplicate";
  };
  TutorialRecruitUnitsCommand.prototype.getClickOnRecruitDialogCloseText = function () {
    return "tut_recruit_running_copy_duplicate";
  };
  TutorialRecruitUnitsCommand.prototype.getConfirmUnitSelectionText = function () {
    return "tutorial_autoRecruitment_chatBubble";
  };
  TutorialRecruitUnitsCommand.prototype.getOpenMilitaryMenuTrackingID = function () {
    return "s_060_030_military_menu_opened";
  };
  TutorialRecruitUnitsCommand.prototype.getRecruitDialogOpenedTrackingID = function () {
    return "s_060_040_recruitment_menu_opened";
  };
  TutorialRecruitUnitsCommand.prototype.getUnitRecruitmentConfirmedTrackingID = function () {
    return "s_060_050_unit_recruitment_confirmed";
  };
  return TutorialRecruitUnitsCommand;
}(__dep_export_TutorialAbstractMilitaryCommand.TutorialAbstractMilitaryCommand);
exports.TutorialRecruitUnitsCommand = __s0local0;
var __dep_export_CastleRecruitDialog = require("gge-module:export_CastleRecruitDialog");
var __dep_export_CastleRecruitDialogUnits = require("gge-module:export_CastleRecruitDialogUnits");
var __dep_export_RecruitPanelButton = require("gge-module:export_RecruitPanelButton");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_C2SJoinCastleVO = require("gge-module:export_C2SJoinCastleVO");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ISimpleCommand");
