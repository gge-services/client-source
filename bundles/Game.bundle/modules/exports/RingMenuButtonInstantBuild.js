Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function RingMenuButtonInstantBuild() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(RingMenuButtonInstantBuild, __s1param0);
  RingMenuButtonInstantBuild.prototype.init = function (__s5param0, __s5param1, __s5param2) {
    __s1param0.prototype.init.call(this, __s5param0, __s5param1, __s5param2);
    this._disp = __s5param1.btn_instantBuild;
    var __s5local0 = this._disp.visible;
    this._disp.visible = this.isBuildingInProgress();
    if (this._disp.visible) {
      if (!__s5local0) {
        this._disp.delayEnableButton(true, 1000);
      }
      this.timerUpdate(null);
    }
  };
  RingMenuButtonInstantBuild.prototype.timerUpdate = function (__s9param0) {
    var __s9local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.specialEventData.getSkipCosts(this.targetBuilding, __dep_export_CastleModel.CastleModel.skipDiscountData.getBoostedSkipDiscount()));
    this._disp.toolTipText = "";
    var __s9local1 = __dep_export_CastleModel.CastleModel.skipDiscountData.getBestDiscount();
    if (__s9local0 == 0) {
      this._disp.gotoAndStop(2);
    } else if (__dep_export_CastleModel.CastleModel.skipDiscountData.hasBoostedSkipDiscount(__s9local1)) {
      this._disp.gotoAndStop(3);
      this._disp.toolTipText = __dep_export_CastleModel.CastleModel.skipDiscountData.getSkipBoostTooltip(__s9local1);
    } else {
      this._disp.gotoAndStop(1);
    }
  };
  RingMenuButtonInstantBuild.prototype.onClick = function (__s14param0, __s14param1) {
    __dep_export_Iso.Iso.controller.server.fastCompleteBuilding(this.targetBuilding);
    this.parent.hide();
  };
  RingMenuButtonInstantBuild.prototype.getAction = function () {
    return __dep_exact_f855840627e6e145.int(__dep_export_RingMenuBuilding.RingMenuBuilding.ACTION_INSTANT_BUILD);
  };
  return RingMenuButtonInstantBuild;
}(require("gge-module:export_ARingMenuButton").ARingMenuButton);
exports.RingMenuButtonInstantBuild = __s0local0;
var __dep_export_Iso = require("gge-module:export_Iso");
var __dep_export_RingMenuBuilding = require("gge-module:export_RingMenuBuilding");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IRingMenuButton");
