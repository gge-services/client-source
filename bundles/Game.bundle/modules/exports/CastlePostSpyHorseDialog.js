Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __s0local0 = function (__s1param0) {
  function CastlePostSpyHorseDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastlePostSpyHorseDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastlePostSpyHorseDialog, __s1param0);
  CastlePostSpyHorseDialog.prototype.showLoaded = function (__s5param0 = null) {
    this.hideAttackDisplayElements();
    __s1param0.prototype.showLoaded.call(this, __s5param0);
  };
  CastlePostSpyHorseDialog.prototype.getTravelTime = function (__s7param0 = null) {
    if (__s7param0 && __s7param0.isInstantSpyHorse) {
      return __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.TravelConst.getInstantSpyHorseTravelTime(this.distance));
    } else {
      return __dep_exact_f855840627e6e145.int(__s1param0.prototype.getTravelTime.call(this, __s7param0));
    }
  };
  CastlePostSpyHorseDialog.__initialize_static_members = function () {
    CastlePostSpyHorseDialog.NAME = "CastlePostActionHorse_S";
  };
  return CastlePostSpyHorseDialog;
}(require("gge-module:export_CastlePostSpyDialog").CastlePostSpyDialog);
exports.CastlePostSpyHorseDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
