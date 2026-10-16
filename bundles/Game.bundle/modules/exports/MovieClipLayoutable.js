Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_LayoutMargin = require("gge-module:export_LayoutMargin");
var __s0local0 = function () {
  function MovieClipLayoutable(__s3param0, __s3param1 = null) {
    this._isLayoutEnabled = true;
    this._customHeight = -1;
    this._disp = __s3param0;
    this._margin = __s3param1 || new __dep_export_LayoutMargin.LayoutMargin(0, 0, 0, 0);
  }
  Object.defineProperty(MovieClipLayoutable.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MovieClipLayoutable.prototype, "isLayoutEnabled", {
    get: function () {
      return this._isLayoutEnabled && this._disp.visible;
    },
    set: function (__s9param0) {
      this._isLayoutEnabled = __s9param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MovieClipLayoutable.prototype, "height", {
    get: function () {
      if (this._customHeight > -1) {
        return this._customHeight;
      } else {
        return this._disp.height;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MovieClipLayoutable.prototype, "width", {
    get: function () {
      return this._disp.width;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MovieClipLayoutable.prototype, "margin", {
    get: function () {
      return this._margin;
    },
    set: function (__s19param0) {
      this._margin = __s19param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MovieClipLayoutable.prototype, "customHeight", {
    get: function () {
      return this._customHeight;
    },
    set: function (__s23param0) {
      this._customHeight = __s23param0;
    },
    enumerable: true,
    configurable: true
  });
  return MovieClipLayoutable;
}();
exports.MovieClipLayoutable = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ILayoutable");
