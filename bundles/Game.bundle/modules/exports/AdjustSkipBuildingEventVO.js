Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function AdjustSkipBuildingEventVO() {
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AdjustSkipBuildingEventVO, __s1param0);
  AdjustSkipBuildingEventVO.prototype.parseParamObject = function (__s5param0) {
    this._skipCost = __s5param0.CPM;
    this._skipLevel = __s5param0.SL;
  };
  AdjustSkipBuildingEventVO.prototype.getSkipCostLevelRange = function (__s7param0) {
    for (var __s7local0 = 0; __s7local0 < this._skipCost.length; __s7local0++) {
      if (__s7param0 <= this._skipLevel[__s7local0]) {
        return __dep_exact_f855840627e6e145.int(this._skipCost[__s7local0]);
      }
    }
    return __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.ConstructionConst.getInstantCostC2PerMinuteFor(__dep_export_CastleModel.CastleModel.userData.userLevel));
  };
  return AdjustSkipBuildingEventVO;
}(require("gge-module:export_ASpecialEventVO").ASpecialEventVO);
exports.AdjustSkipBuildingEventVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEventOverviewable");
