Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function () {
  function PaginationMouseWheel(__s3param0, __s3param1) {
    this._scrollLayer = __s3param0;
    this._pagination = __s3param1;
  }
  PaginationMouseWheel.prototype.update = function () {};
  PaginationMouseWheel.prototype.disable = function () {
    this._scrollLayer.removeEventListener(__s0local0.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
  };
  PaginationMouseWheel.prototype.enable = function () {
    this._scrollLayer.addEventListener(__s0local0.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
  };
  PaginationMouseWheel.prototype.onMouseWheel = function (__s11param0) {
    var __s11local0 = false;
    if (__s11param0.delta < 0) {
      __s11local0 = this._pagination.scrollLeft();
    } else if (__s11param0.delta > 0) {
      __s11local0 = this._pagination.scrollRight();
    }
    if (__s11local0) {
      __dep_export_TooltipManagerFacade.TooltipManagerFacade.hideAllTooltips();
      if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s11param0.target, "MovieClip") && __s11param0.target.toolTipText) {
        __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().tooltipManager.show(__s11param0.target.toolTipText, __s11param0.target);
      }
    }
  };
  PaginationMouseWheel.prototype.onClick = function (__s17param0) {
    return false;
  };
  return PaginationMouseWheel;
}();
exports.PaginationMouseWheel = __s0local1;
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_TooltipManagerFacade = require("gge-module:export_TooltipManagerFacade");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "IPaginationControl");
