Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = createjs.Container;
var __s0local1 = function () {
  function AView() {
    this._displayObject = new __s0local0();
    this._width = 0;
    this._height = 0;
    this._destroyed = false;
  }
  AView.prototype.setController = function (__s5param0) {
    this._controller = __s5param0;
  };
  AView.prototype.setModel = function (__s7param0) {
    this._model = __s7param0;
    this._model.SGN_UPDATE.add(this.bindFunction(this._onModelUpdate));
    this._onModelUpdate(__s7param0);
  };
  AView.prototype.destroy = function () {
    if (!this._destroyed) {
      this._destroy();
      this._destroyed = true;
    }
    return this._destroyed;
  };
  AView.prototype._destroy = function () {};
  AView.prototype.update = function () {};
  AView.prototype._onModelUpdate = function (__s16param0) {
    this.update();
  };
  AView.prototype._updateWidth = function () {};
  AView.prototype._updateHeight = function () {};
  Object.defineProperty(AView.prototype, "x", {
    get: function () {
      return this._displayObject.x;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AView.prototype, "y", {
    get: function () {
      return this._displayObject.y;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AView.prototype, "width", {
    get: function () {
      return this._displayObject.width;
    },
    set: function (__s28param0) {
      this._width = __s28param0;
      this._updateWidth();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AView.prototype, "height", {
    get: function () {
      return this._displayObject.height;
    },
    set: function (__s32param0) {
      this._height = __s32param0;
      this._updateHeight();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AView.prototype, "displayObject", {
    get: function () {
      return this._displayObject;
    },
    enumerable: true,
    configurable: true
  });
  AView.prototype.getModel = function () {
    return this._model;
  };
  return AView;
}();
exports.AView = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "IView");
