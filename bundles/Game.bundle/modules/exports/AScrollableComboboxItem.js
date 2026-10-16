Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_5c7bc328fca9e4de = require("gge-module:exact_5c7bc328fca9e4de");
var __dep_export_BitmapFilterHelper = require("gge-module:export_BitmapFilterHelper");
var __dep_export_MovieClipLayoutable = require("gge-module:export_MovieClipLayoutable");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function (__s1param0) {
  function AScrollableComboboxItem(__s3param0, __s3param1, __s3param2 = null) {
    var __s3local0 = __s1param0.call(this, __s3param0, __s3param2) || this;
    __s3local0._isEnabled = true;
    __s3local0._isSelected = false;
    __s3local0._onSelectSignal = new __dep_exact_5c7bc328fca9e4de.Signal();
    __s3local0._data = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AScrollableComboboxItem, __s1param0);
  AScrollableComboboxItem.prototype.show = function () {
    if (this.disp) {
      this.disp.addEventListener(__s0local0.MOUSE_OVER, this.bindFunction(this.onMouseOver));
      this.disp.addEventListener(__s0local0.MOUSE_OUT, this.bindFunction(this.onMouseOut));
      this.disp.addEventListener(__s0local0.ROLL_OVER, this.bindFunction(this.onRollOver));
      this.disp.addEventListener(__s0local0.ROLL_OUT, this.bindFunction(this.onRollOut));
      this.disp.addEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
    }
  };
  AScrollableComboboxItem.prototype.hide = function () {
    if (this.disp) {
      this.disp.removeEventListener(__s0local0.MOUSE_OVER, this.bindFunction(this.onMouseOver));
      this.disp.removeEventListener(__s0local0.MOUSE_OUT, this.bindFunction(this.onMouseOut));
      this.disp.removeEventListener(__s0local0.ROLL_OVER, this.bindFunction(this.onRollOver));
      this.disp.removeEventListener(__s0local0.ROLL_OUT, this.bindFunction(this.onRollOut));
      this.disp.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
    }
  };
  AScrollableComboboxItem.prototype.setSelected = function (__s11param0) {
    this._isSelected = __s11param0;
  };
  AScrollableComboboxItem.prototype.enableComponent = function (__s13param0) {
    this._isEnabled = __s13param0;
    if (this.disp) {
      if (this._isEnabled) {
        this.disp.useFilters(__dep_export_BitmapFilterHelper.BitmapFilterHelper.NO_FILTER);
      } else {
        this.disp.useFilters(__dep_export_BitmapFilterHelper.BitmapFilterHelper.FILTER_COLOR_MATRIX);
      }
    }
  };
  AScrollableComboboxItem.prototype.onMouseOver = function (__s18param0) {};
  AScrollableComboboxItem.prototype.onMouseOut = function (__s20param0) {};
  AScrollableComboboxItem.prototype.onRollOver = function (__s22param0) {};
  AScrollableComboboxItem.prototype.onRollOut = function (__s24param0) {};
  AScrollableComboboxItem.prototype.onClick = function (__s26param0) {
    if (this._isEnabled) {
      this._onSelectSignal.dispatch(this);
    }
  };
  Object.defineProperty(AScrollableComboboxItem.prototype, "onSelectSignal", {
    get: function () {
      return this._onSelectSignal;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AScrollableComboboxItem.prototype, "isEnabled", {
    get: function () {
      return this._isEnabled;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AScrollableComboboxItem.prototype, "isSelected", {
    get: function () {
      return this._isSelected;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AScrollableComboboxItem.prototype, "label", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AScrollableComboboxItem.prototype, "data", {
    get: function () {
      return this._data;
    },
    enumerable: true,
    configurable: true
  });
  return AScrollableComboboxItem;
}(__dep_export_MovieClipLayoutable.MovieClipLayoutable);
exports.AScrollableComboboxItem = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ILayoutable");
