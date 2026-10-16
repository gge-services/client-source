Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function () {
  function PaginationArrows(__s3param0, __s3param1) {
    this._container = __s3param0;
    this._pagination = __s3param1;
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([this._container.getLeftArrow(), this._container.getRightArrow()]);
  }
  PaginationArrows.prototype.changeArrow = function (__s5param0, __s5param1) {
    if (!this._container.changeArrow(__s5param0, __s5param1)) {
      __dep_export_ButtonHelper.ButtonHelper.enableButton(__s5param0, __s5param1);
    }
  };
  PaginationArrows.prototype.update = function () {
    this.changeArrow(this._container.getLeftArrow(), this._pagination.canScrollLeft());
    this.changeArrow(this._container.getRightArrow(), this._pagination.canScrollRight());
  };
  PaginationArrows.prototype.disable = function () {
    this.changeArrow(this._container.getLeftArrow(), false);
    this.changeArrow(this._container.getRightArrow(), false);
  };
  PaginationArrows.prototype.enable = function () {
    this.update();
  };
  PaginationArrows.prototype.onClick = function (__s14param0) {
    switch (__s14param0.target) {
      case this._container.getLeftArrow():
        this._pagination.scrollLeft();
        return true;
      case this._container.getRightArrow():
        this._pagination.scrollRight();
        return true;
    }
    return false;
  };
  return PaginationArrows;
}();
exports.PaginationArrows = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IPaginationControl");
