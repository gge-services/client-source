Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function () {
  function LordEffectTooltipTrigger(__s3param0, __s3param1 = false) {
    this._disp = __s3param0;
    this._disp.mouseChildren = false;
    this._filterStrategy = __dep_export_LordEffectHelper.LordEffectHelper.STRATEGY_FULL_ACTIVE;
    if (__s3param1) {
      __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.createHitArea(this._disp);
    }
  }
  LordEffectTooltipTrigger.prototype.show = function () {
    this._disp.addEventListener(__s0local0.MOUSE_OVER, this.bindFunction(this.onMouseOver));
  };
  LordEffectTooltipTrigger.prototype.hide = function () {
    this._disp.removeEventListener(__s0local0.MOUSE_OVER, this.bindFunction(this.onMouseOver));
  };
  LordEffectTooltipTrigger.prototype.onMouseOver = function (__s10param0) {
    if (this._currentLord) {
      __dep_export_LordEffectHelper.LordEffectHelper.showToolTip(this._currentLord, this._disp, this._currentSourceArea, this._currentTargetArea, this._filterStrategy, this._includeEquipment);
    }
  };
  LordEffectTooltipTrigger.prototype.setProperties = function (__s13param0, __s13param1 = null, __s13param2 = null, __s13param3 = null, __s13param4 = true) {
    this._currentLord = __s13param0;
    this._currentSourceArea = __s13param1;
    this._currentTargetArea = __s13param2;
    this._filterStrategy = __s13param3 || __dep_export_LordEffectHelper.LordEffectHelper.STRATEGY_FULL_ACTIVE;
    this._includeEquipment = __s13param4;
  };
  return LordEffectTooltipTrigger;
}();
exports.LordEffectTooltipTrigger = __s0local1;
var __dep_export_LordEffectHelper = require("gge-module:export_LordEffectHelper");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
