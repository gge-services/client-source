Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CastleEvent(__s3param0, __s3param1 = false, __s3param2 = false) {
    return __s1param0.call(this, __s3param0, __s3param1, __s3param2) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleEvent, __s1param0);
  Object.defineProperty(CastleEvent.prototype, "target", {
    get: function () {
      return this._target;
    },
    set: function (__s7param0) {
      this._target = __s7param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEvent.prototype, "currentTarget", {
    get: function () {
      return this._currentTarget;
    },
    set: function (__s11param0) {
      this._currentTarget = __s11param0;
    },
    enumerable: true,
    configurable: true
  });
  return CastleEvent;
}(createjs.Event);
exports.CastleEvent = __s0local0;
