Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CastleLuckyWheelSalesDayMediator(__s3param0, __s3param1) {
    return __s1param0.call(this, __s3param0, __s3param1) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleLuckyWheelSalesDayMediator, __s1param0);
  CastleLuckyWheelSalesDayMediator.prototype.stopWheel = function () {
    if (this.luckyWheelData.winningCategory != -1) {
      this.destroyTimer();
      var __s5local0 = NaN;
      var __s5local1 = NaN;
      if (this.luckyWheelData.winningCategory == 0) {
        __s5local1 = 45;
        __s5local0 = 22.5;
      } else {
        __s5local1 = 78.75;
        __s5local0 = -22.5 - (this.luckyWheelData.winningCategory - 1) * __s5local1;
      }
      __s5local0 -= Math.random() * (__s5local1 - 15) + 7.5;
      __s5local0 += 360;
      this._spinningWheel.accelerateWheel(0, __s5local0);
      if (this._spinningWheel.currentSpeedInDegrees > 0) {
        this.startBreakingCallback();
      }
    } else {
      this.onServerFailed();
    }
  };
  CastleLuckyWheelSalesDayMediator.prototype.showTooltips = function (__s12param0) {
    if (__s12param0) {
      this.componentDisp.component_wheel.icon_jackpot.toolTipText = "dialog_luckyWheel_jackpot";
      this.componentDisp.component_wheel.icon_units.toolTipText = "dialog_luckyWheel_saleDays_units";
      this.componentDisp.component_wheel.icon_relicEquipment.toolTipText = "dialog_luckyWheel_saleDays_relicEquipment";
      this.componentDisp.component_wheel.icon_boosterTools.toolTipText = "dialog_luckyWheel_saleDays_boosterTools";
      this.componentDisp.component_wheel.icon_tickets.toolTipText = "dialog_luckyWheel_saleDays_tickets_saleDays";
    } else {
      this.componentDisp.component_wheel.icon_jackpot.toolTipText = null;
      this.componentDisp.component_wheel.icon_units.toolTipText = null;
      this.componentDisp.component_wheel.icon_relicEquipment.toolTipText = null;
      this.componentDisp.component_wheel.icon_boosterTools.toolTipText = null;
      this.componentDisp.component_wheel.icon_tickets.toolTipText = null;
    }
  };
  return CastleLuckyWheelSalesDayMediator;
}(require("gge-module:export_CastleLuckyWheelMediator").CastleLuckyWheelMediator);
exports.CastleLuckyWheelSalesDayMediator = __s0local0;
