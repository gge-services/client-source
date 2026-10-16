Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CastleModalSingleDialogBehavior() {
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleModalSingleDialogBehavior, __s1param0);
  CastleModalSingleDialogBehavior.prototype.checkDisplayBehavior = function (__s5param0, __s5param1, __s5param2, __s5param3, __s5param4) {
    return !__dep_export_CastleModel.CastleModel.tutorialData.isTutorialActive || !!__dep_export_CastleTutorialDialogFilter.CastleTutorialDialogFilter.instance.isAllowed(__s5param0.key);
  };
  CastleModalSingleDialogBehavior.prototype.checkRemoveDisplayedWhenRegisterBehavior = function () {
    return true;
  };
  CastleModalSingleDialogBehavior.prototype.checkRemoveRegisteredWhenHideBehavior = function () {
    return true;
  };
  CastleModalSingleDialogBehavior.prototype.canModifyBlockDialogs = function () {
    return false;
  };
  return CastleModalSingleDialogBehavior;
}(require("gge-module:export_CastleBasicDialogBehavior").CastleBasicDialogBehavior);
exports.CastleModalSingleDialogBehavior = __s0local0;
var __dep_export_CastleTutorialDialogFilter = require("gge-module:export_CastleTutorialDialogFilter");
