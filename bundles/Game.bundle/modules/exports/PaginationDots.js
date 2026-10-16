Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
var __s0local0 = function () {
  function PaginationDots(__s3param0, __s3param1, __s3param2) {
    this._dotSpace = 15;
    this._dotY = 0;
    this._dots = [];
    this._container = __s3param0;
    this._pagination = __s3param1;
    if (!__s3param2) {
      throw new ReferenceError("dotMc must not be null!");
    }
    this._dotMc = __s3param2;
    this._dotMc.visible = false;
    this._dotClass = __s3param2.constructor;
    this._dotY = __dep_exact_f855840627e6e145.int(__s3param2.y);
    if (!this._dotClass) {
      throw new ReferenceError("dotClass must not be null!");
    }
    this.init();
  }
  PaginationDots.prototype.init = function () {
    this.removeDots();
    if (this._pagination.enabled) {
      var __s7local0;
      var __s7local1 = this._dotSpace * (this._pagination.maxPages - 1);
      for (var __s7local2 = 0; __s7local2 < this._pagination.maxPages; __s7local2++) {
        (__s7local0 = new this._dotClass()).x = __s7local1 * -0.5 + this._dotSpace * __s7local2;
        __s7local0.y = this._dotY;
        __s7local0.actLikeButton = true;
        __s7local0.mouseChildren = false;
        this._dots.push(__s7local0);
        this._container.addDot(__s7local0);
      }
    }
  };
  PaginationDots.prototype.removeDots = function () {
    if (this._dots != null) {
      for (var __s12local0 = 0, __s12local1 = this._dots; __s12local0 < __s12local1.length; __s12local0++) {
        var __s12local2 = __s12local1[__s12local0];
        if (__s12local2 !== undefined) {
          __s12local2.parent.removeChild(__s12local2);
        }
      }
    }
    this._dots = [];
  };
  PaginationDots.prototype.update = function () {
    for (var __s18local0 = __dep_exact_f855840627e6e145.int(this._dots.length - 1); __s18local0 >= 0; __s18local0--) {
      this._container.highlightDot(this._dots[__s18local0], __s18local0 == this._pagination.currentPageIndex);
    }
  };
  PaginationDots.prototype.disable = function () {
    this.removeDots();
  };
  PaginationDots.prototype.enable = function () {
    this.init();
    this.update();
  };
  PaginationDots.prototype.onClick = function (__s26param0) {
    for (var __s26local0 = __dep_exact_f855840627e6e145.int(this._dots.length - 1); __s26local0 >= 0; __s26local0--) {
      if (__dep_export_CastleMovieClipHelper.CastleMovieClipHelper.getFirstMovieClipParent(__s26param0.target) == this._dots[__s26local0]) {
        this._pagination.currentPage = __s26local0 + 1;
        return true;
      }
    }
    return false;
  };
  PaginationDots.prototype.setToolTips = function (__s31param0) {
    for (var __s31local0 = 0; __s31local0 < this._dots.length; __s31local0++) {
      var __s31local1 = this._dots[__s31local0];
      if (__s31param0.length > __s31local0) {
        __s31local1.toolTipText = __s31param0[__s31local0];
      } else {
        __s31local1.toolTipText = __s31param0[__s31param0.length - 1];
      }
    }
  };
  return PaginationDots;
}();
exports.PaginationDots = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IPaginationControl");
