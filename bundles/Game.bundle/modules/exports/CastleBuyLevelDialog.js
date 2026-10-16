Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CastleBuyLevelDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleBuyLevelDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleBuyLevelDialog, __s1param0);
  CastleBuyLevelDialog.prototype.addEventListenerOnShow = function () {
    __s1param0.prototype.addEventListenerOnShow.call(this);
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onLevelUp));
  };
  CastleBuyLevelDialog.prototype.removeEventListenerOnHide = function () {
    __s1param0.prototype.removeEventListenerOnHide.call(this);
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onLevelUp));
  };
  CastleBuyLevelDialog.prototype.onLevelUp = function (__s9param0) {
    var __s9local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.userData.level);
    if (__s9local0 > __dep_exact_26a421b704832cff.SplitRunConst.MAX_LEVEL_TO_BUY_LEVEL) {
      this.hide();
    } else {
      this.yesNoWithCostsProperties.costs.getFirstItemOfType(__dep_export_CollectableEnum.CollectableEnum.C2).amount = __dep_export_CastleModel.CastleModel.buyLevelData.getLevelUpCost(__s9local0, __s9local0 + 1);
    }
  };
  CastleBuyLevelDialog.__initialize_static_members = function () {
    CastleBuyLevelDialog.NAME = "CastleStandardYesNoWithCostsEx";
  };
  return CastleBuyLevelDialog;
}(require("gge-module:export_CastleConfirmCostsDialog").CastleConfirmCostsDialog);
exports.CastleBuyLevelDialog = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
