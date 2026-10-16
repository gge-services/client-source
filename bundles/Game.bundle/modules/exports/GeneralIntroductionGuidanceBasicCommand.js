Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_2f3215726cfc30d4 = require("gge-module:exact_2f3215726cfc30d4");
var __dep_export_CastleLayoutManagerEvent = require("gge-module:export_CastleLayoutManagerEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleTutorialArrowController = require("gge-module:export_CastleTutorialArrowController");
var __s0local0 = function (__s1param0) {
  function GeneralIntroductionGuidanceBasicCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GeneralIntroductionGuidanceBasicCommand, __s1param0);
  GeneralIntroductionGuidanceBasicCommand.prototype.execute = function (__s5param0) {
    __s1param0.prototype.execute.call(this, __s5param0);
    this._questConditionVO = __s5param0;
    this.internalExecute();
  };
  GeneralIntroductionGuidanceBasicCommand.prototype.internalExecute = function () {};
  GeneralIntroductionGuidanceBasicCommand.prototype.showGuidance = function (__s9param0, __s9param1, __s9param2 = null) {
    if (!this.layoutManager.guidancePanel) {
      this.layoutManager.addGuidancePanel();
    }
    this.layoutManager.guidancePanel.showWithText(__s9param0, __s9param1, __s9param2);
  };
  GeneralIntroductionGuidanceBasicCommand.prototype.removeGuidance = function () {
    __dep_export_CastleModel.CastleModel.generalsIntroductionData.removeGeneralIntroductionGuidance();
  };
  GeneralIntroductionGuidanceBasicCommand.prototype.waitForExternalDialog = function (__s14param0, __s14param1) {
    if (this.layoutManager.isDialogVisibleByName(__s14param0)) {
      __s14param1();
    } else {
      __dep_export_CastleModel.CastleModel.generalsIntroductionData.registerListener(this.controller, __dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.SHOW_EXTERNAL_DIALOG, function (__s18param0) {
        if (__s18param0.params[0] && __s18param0.params[0] == __s14param0) {
          __s14param1();
        }
      });
    }
  };
  GeneralIntroductionGuidanceBasicCommand.prototype.waitForExternalDialogClose = function (__s21param0, __s21param1) {
    __dep_export_CastleModel.CastleModel.generalsIntroductionData.registerListener(this.controller, __dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.HIDE_EXTERNAL_DIALOG, function (__s23param0) {
      if (__s23param0.params[0] && __s23param0.params[0] == __s21param0) {
        __s21param1();
      }
    });
  };
  Object.defineProperty(GeneralIntroductionGuidanceBasicCommand.prototype, "arrows", {
    get: function () {
      return __dep_export_CastleTutorialArrowController.CastleTutorialArrowController.instance;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralIntroductionGuidanceBasicCommand.prototype, "controller", {
    get: function () {
      return __dep_export_CastleBasicController.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralIntroductionGuidanceBasicCommand.prototype, "layoutManager", {
    get: function () {
      return __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return GeneralIntroductionGuidanceBasicCommand;
}(__dep_exact_2f3215726cfc30d4.SimpleCommand);
exports.GeneralIntroductionGuidanceBasicCommand = __s0local0;
