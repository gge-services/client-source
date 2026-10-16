Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function GenericEvent(__s3param0 = false) {
    this._bubbles = __s3param0;
  }
  Object.defineProperty(GenericEvent.prototype, "signal", {
    get: function () {
      return this._signal;
    },
    set: function (__s7param0) {
      this._signal = __s7param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GenericEvent.prototype, "target", {
    get: function () {
      return this._target;
    },
    set: function (__s11param0) {
      this._target = __s11param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GenericEvent.prototype, "currentTarget", {
    get: function () {
      return this._currentTarget;
    },
    set: function (__s15param0) {
      this._currentTarget = __s15param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GenericEvent.prototype, "bubbles", {
    get: function () {
      return this._bubbles;
    },
    set: function (__s19param0) {
      this._bubbles = __s19param0;
    },
    enumerable: true,
    configurable: true
  });
  GenericEvent.prototype.clone = function () {
    return new GenericEvent(this._bubbles);
  };
  return GenericEvent;
}();
exports.GenericEvent = __s0local0;
