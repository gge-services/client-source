Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function TutorialBuildToolsCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(TutorialBuildToolsCommand, __s1param0);
  TutorialBuildToolsCommand.prototype.getButtonClass = function () {
    return __dep_export_BuildToolsPanelButton.BuildToolsPanelButton;
  };
  TutorialBuildToolsCommand.prototype.waitForDialog = function () {
    var __s7local0 = this.layoutManager.getDialog(__dep_export_CastleRecruitDialog.CastleRecruitDialog);
    __s7local0.changeCategoryWithParams(__dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_TOOLS, [__dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_TOOLS, null]);
    var __s7local1 = __s7local0.subLayer.get(__dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_TOOLS);
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s7local1, "CastleRecruitDialogUnits")) {
      var __s7local2 = __dep_exact_f855840627e6e145.int(this._tutorialStepVO.attributes.get(__dep_export_TutorialBasicActionCommand.TutorialBasicActionCommand.WODID));
      var __s7local3 = __dep_export_CastleModel.CastleModel.wodData.getUnitVOByWodId(__s7local2);
      var __s7local4 = __dep_export_CastleRecruitDialogUnits.CastleRecruitDialogUnits.FILTER_TOOLS_ATTACK;
      if (__s7local3.isDefensive) {
        __s7local4 = __dep_export_CastleRecruitDialogUnits.CastleRecruitDialogUnits.FILTER_TOOLS_DEFENCE;
      }
      __s7local1.changeCurrentFilter(__s7local4, -1, true);
    }
    this.waitForSelectUnit();
  };
  return TutorialBuildToolsCommand;
}(require("gge-module:export_TutorialAbstractMilitaryCommand").TutorialAbstractMilitaryCommand);
exports.TutorialBuildToolsCommand = __s0local0;
var __dep_export_CastleRecruitDialog = require("gge-module:export_CastleRecruitDialog");
var __dep_export_CastleRecruitDialogUnits = require("gge-module:export_CastleRecruitDialogUnits");
var __dep_export_TutorialBasicActionCommand = require("gge-module:export_TutorialBasicActionCommand");
var __dep_export_BuildToolsPanelButton = require("gge-module:export_BuildToolsPanelButton");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ISimpleCommand");
