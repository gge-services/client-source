Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function CastleArmyExternalDialog(__s3param0, __s3param1 = null, __s3param2 = null) {
    return __s1param0.call(this, __s3param0, __s3param1, __s3param2) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleArmyExternalDialog, __s1param0);
  CastleArmyExternalDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.lordTooltipTrigger = new __dep_export_LordEffectTooltipTrigger.LordEffectTooltipTrigger(this.dialogDisp.mc_lordHolder);
  };
  CastleArmyExternalDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.lordTooltipTrigger.show();
  };
  CastleArmyExternalDialog.prototype.hideLoaded = function (__s9param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s9param0);
    this.lordTooltipTrigger.hide();
    __dep_export_LordEffectHelper.LordEffectHelper.hideToolTip();
  };
  return CastleArmyExternalDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleArmyExternalDialog = __s0local0;
var __dep_export_LordEffectHelper = require("gge-module:export_LordEffectHelper");
var __dep_export_LordEffectTooltipTrigger = require("gge-module:export_LordEffectTooltipTrigger");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
