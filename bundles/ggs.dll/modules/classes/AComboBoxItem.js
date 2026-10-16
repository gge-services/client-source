Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_NoneValueSignal = require("gge-module:class_NoneValueSignal");
var __dep_class_ObjectSignal = require("gge-module:class_ObjectSignal");
var __dep_export_CSSMouseCursor = require("gge-module:export_CSSMouseCursor");
var __s0local0 = function () {
  function AComboBoxItem() {
    this._selectedItemClickSignal = new __dep_class_NoneValueSignal.NoneValueSignal();
    this._listItemClickSignal = new __dep_class_ObjectSignal.ObjectSignal();
    this._className = __dep_export_CSSMouseCursor.getQualifiedClassName(this);
  }
  AComboBoxItem.prototype.createAsset = function (__s5param0) {
    this._disp = __s5param0;
    this._disp.addEventListener("click", this.bindFunction(this.onItemMouseClick));
    this._disp.addEventListener("mouseover", this.bindFunction(this.onMouseOver));
    this._disp.addEventListener("mouseout", this.bindFunction(this.onMouseOut));
    this._disp.addEventListener("mousedown", this.bindFunction(this.onMouseDown));
    this._disp.addEventListener("pressmove", this.bindFunction(this.onPressMove));
    return this._disp;
  };
  AComboBoxItem.prototype.setClickFunction = function (__s7param0, __s7param1 = null) {
    this.clickFunction = __s7param0;
    this.clickFunctionParams = __s7param1;
  };
  AComboBoxItem.prototype.onItemMouseClick = function (__s9param0) {
    if (this.selected) {
      this._selectedItemClickSignal.signal();
    } else {
      this._listItemClickSignal.signal(this);
      if (this.clickFunction != null) {
        if (this.clickFunctionParams) {
          this.clickFunction.apply(this, this.clickFunctionParams);
        } else {
          this.clickFunction.call(this);
        }
      }
    }
  };
  AComboBoxItem.prototype.onMouseOver = function (__s16param0) {};
  AComboBoxItem.prototype.onMouseOut = function (__s18param0) {};
  AComboBoxItem.prototype.onMouseDown = function (__s20param0) {};
  AComboBoxItem.prototype.onPressMove = function (__s22param0) {};
  AComboBoxItem.prototype.destroy = function () {
    this._disp.removeEventListener("click", this.bindFunction(this.onItemMouseClick));
    this._disp.removeEventListener("mouseover", this.bindFunction(this.onMouseOver));
    this._disp.removeEventListener("mouseout", this.bindFunction(this.onMouseOut));
    this._disp.removeEventListener("mousedown", this.bindFunction(this.onMouseDown));
    this._disp.removeEventListener("pressmove", this.bindFunction(this.onPressMove));
    this._selectedItemClickSignal.removeAll();
    this._listItemClickSignal.removeAll();
  };
  Object.defineProperty(AComboBoxItem.prototype, "x", {
    get: function () {
      return this._disp.x;
    },
    set: function (__s28param0) {
      this._disp.x = __s28param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AComboBoxItem.prototype, "y", {
    get: function () {
      return this._disp.y;
    },
    set: function (__s32param0) {
      this._disp.y = __s32param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AComboBoxItem.prototype, "width", {
    get: function () {
      return this._disp.width;
    },
    set: function (__s36param0) {
      this._disp.width = __s36param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AComboBoxItem.prototype, "height", {
    get: function () {
      return this._disp.height;
    },
    set: function (__s40param0) {
      this._disp.height = __s40param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AComboBoxItem.prototype, "selected", {
    get: function () {
      return this._selected;
    },
    enumerable: true,
    configurable: true
  });
  AComboBoxItem.prototype.select = function () {
    this._selected = true;
  };
  Object.defineProperty(AComboBoxItem.prototype, "listItemClickSignal", {
    get: function () {
      return this._listItemClickSignal;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AComboBoxItem.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AComboBoxItem.prototype, "selectedItemClickSignal", {
    get: function () {
      return this._selectedItemClickSignal;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AComboBoxItem.prototype, "itemClass", {
    get: function () {
      return this._itemClass;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AComboBoxItem.prototype, "className", {
    get: function () {
      return this._className;
    },
    enumerable: true,
    configurable: true
  });
  return AComboBoxItem;
}();
exports.AComboBoxItem = __s0local0;
