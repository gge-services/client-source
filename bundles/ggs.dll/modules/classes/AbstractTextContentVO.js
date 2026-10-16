Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_becd07da092f4a09 = require("gge-module:exact_becd07da092f4a09");
var __s0local0 = function () {
  function AbstractTextContentVO() {
    this.triggerUpdate = true;
  }
  Object.defineProperty(AbstractTextContentVO.prototype, "propertyChangedSignal", {
    get: function () {
      this._propertyChangedSignal ||= new __dep_exact_becd07da092f4a09.Signal();
      return this._propertyChangedSignal;
    },
    set: function (__s7param0) {
      this._propertyChangedSignal = __s7param0;
    },
    enumerable: true,
    configurable: true
  });
  AbstractTextContentVO.prototype.dispose = function () {
    if (this._propertyChangedSignal) {
      this._propertyChangedSignal.removeAll();
    }
  };
  AbstractTextContentVO.prototype.compose = function () {
    throw new Error(AbstractTextContentVO.MESSAGE_ERROR_COMPOSE_NOT_OVERRIDDEN);
  };
  AbstractTextContentVO.prototype.toString = function () {
    return AbstractTextContentVO.NAME;
  };
  AbstractTextContentVO.NAME = "AbstractTextContentVO";
  AbstractTextContentVO.MESSAGE_ERROR_COMPOSE_NOT_OVERRIDDEN = "Compose method is not implemented";
  return AbstractTextContentVO;
}();
exports.AbstractTextContentVO = __s0local0;
