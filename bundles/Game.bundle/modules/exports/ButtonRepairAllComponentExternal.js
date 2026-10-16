Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonBasicComponentExternal = require("gge-module:export_ButtonBasicComponentExternal");
var __s0local0 = createjs.Event;
var __s0local1 = createjs.MouseEvent;
var __s0local2 = function (__s1param0) {
  function ButtonRepairAllComponentExternal(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ButtonRepairAllComponentExternal, __s1param0);
  ButtonRepairAllComponentExternal.prototype.initRepairAllButton = function (__s5param0, __s5param1) {
    this._toolTipMC = __s5param1;
    this._button.addEventListener(__s0local0.REMOVED_FROM_STAGE, this.bindFunction(this.onRemovedFromStage));
    this._button.addEventListener(__s0local1.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this._button.addEventListener(__s0local1.MOUSE_OUT, this.bindFunction(this.onMouseOut));
    this._button.visible = this.layoutManager.isInMyCastle && __dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.isCastleBurning && __s5param0 == __dep_export_CastleModel.CastleModel.areaData.activeArea.areaId;
    this._toolTipMC.txt_name.text = __dep_exact_92d05af59ee2ff30.Localize.text("repairAll");
    this._toolTipMC.visible = false;
    if (this.layoutManager.isInMyCastle) {
      this._toolTipMC.txt_cost0.mc_icon.gotoAndStop(5);
      var __s5local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.costsData.getFinalCostsC2(__dep_export_CastleModel.CastleModel.areaData.activeArea.getTotalRepairCostC2(), false, __dep_export_CastleModel.CastleModel.boostData.premiumAccountVO.isActive ? __dep_exact_26a421b704832cff.ConstructionConst.PREMIUM_FACTOR_REPAIR_ALL : 0));
      this._toolTipMC.txt_cost0.txt_cost.text = __s5local0;
    }
  };
  ButtonRepairAllComponentExternal.prototype.onMouseOver = function (__s8param0) {
    this._toolTipMC.visible = true;
  };
  ButtonRepairAllComponentExternal.prototype.onMouseOut = function (__s10param0) {
    this._toolTipMC.visible = false;
  };
  ButtonRepairAllComponentExternal.prototype.onRemovedFromStage = function (__s12param0) {
    this._button.removeEventListener(__s0local0.REMOVED_FROM_STAGE, this.bindFunction(this.onRemovedFromStage));
    this._button.removeEventListener(__s0local1.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this._button.removeEventListener(__s0local1.MOUSE_OUT, this.bindFunction(this.onMouseOut));
  };
  return ButtonRepairAllComponentExternal;
}(__dep_export_ButtonBasicComponentExternal.ButtonBasicComponentExternal);
exports.ButtonRepairAllComponentExternal = __s0local2;
