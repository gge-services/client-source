Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CastleBasicDialogBehavior() {}
  CastleBasicDialogBehavior.prototype.checkRegisterBehavior = function (__s5param0, __s5param1, __s5param2) {
    return !__dep_export_CastleModel.CastleModel.settingsData.isDestroyingGame;
  };
  CastleBasicDialogBehavior.prototype.checkDisplayBehavior = function (__s7param0, __s7param1, __s7param2, __s7param3, __s7param4) {
    return !!this.checkDisplayGenericBehavior(__s7param0, __s7param1, __s7param2, __s7param3);
  };
  CastleBasicDialogBehavior.prototype.checkDisplayGenericBehavior = function (__s9param0, __s9param1, __s9param2, __s9param3) {
    for (var __s9local0 = __dep_exact_f855840627e6e145.int(__s9param2.length), __s9local1 = 0; __s9local1 < __s9local0; __s9local1++) {
      if (__s9param2[__s9local1].key == __s9param0.key) {
        return false;
      }
    }
    return !__dep_export_CastleModel.CastleModel.tutorialData.isTutorialActive || !!__dep_export_CastleTutorialDialogFilter.CastleTutorialDialogFilter.instance.isAllowed(__s9param0.key);
  };
  CastleBasicDialogBehavior.prototype.checkRemoveRegisteredWhenHideBehavior = function () {
    return false;
  };
  CastleBasicDialogBehavior.prototype.checkRemoveDisplayedWhenRegisterBehavior = function () {
    return false;
  };
  CastleBasicDialogBehavior.prototype.canModifyBlockDialogs = function () {
    return true;
  };
  return CastleBasicDialogBehavior;
}();
exports.CastleBasicDialogBehavior = __s0local0;
var __dep_export_CastleTutorialDialogFilter = require("gge-module:export_CastleTutorialDialogFilter");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
