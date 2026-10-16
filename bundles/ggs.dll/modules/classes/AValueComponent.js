Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_ObjectSignal = require("gge-module:class_ObjectSignal");
var __s0local0 = function () {
  function AValueComponent(__s3param0, __s3param1, __s3param2) {
    this.isDisposed = false;
    this.updatedByUserSignal = new __dep_class_ObjectSignal.ObjectSignal();
    this._parent = __s3param0;
    this._minValue = __s3param1;
    this._maxValue = __s3param2;
    this._value = __s3param1;
    this.isDisposed = false;
  }
  AValueComponent.prototype.updateValue = function (__s5param0) {
    this._value = __s5param0;
  };
  AValueComponent.prototype.dispatchUpdateByUserSignal = function (__s7param0) {
    this.updatedByUserSignal.signal(__s7param0);
  };
  AValueComponent.prototype.dispose = function () {
    if (!this.isDisposed) {
      this.updatedByUserSignal.removeAll();
      this.isDisposed = true;
    }
  };
  AValueComponent.prototype.getUpdateByUserSignal = function () {
    return this.updatedByUserSignal;
  };
  Object.defineProperty(AValueComponent.prototype, "value", {
    get: function () {
      return this._value;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AValueComponent.prototype, "minValue", {
    get: function () {
      return this._minValue;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AValueComponent.prototype, "maxValue", {
    get: function () {
      return this._maxValue;
    },
    enumerable: true,
    configurable: true
  });
  return AValueComponent;
}();
exports.AValueComponent = __s0local0;
