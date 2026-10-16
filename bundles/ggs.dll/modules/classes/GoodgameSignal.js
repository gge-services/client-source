Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __s0local0 = function (__s1param0) {
  function GoodgameSignal() {
    var __s3local0 = [];
    for (var __s3local1 = 0; __s3local1 < arguments.length; __s3local1++) {
      __s3local0[__s3local1] = arguments[__s3local1];
    }
    return __s1param0.call(this, __s3local0) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(GoodgameSignal, __s1param0);
  GoodgameSignal.prototype.hasListener = function (__s7param0) {
    return !!(this.numListeners > 0) && !!this.slots.contains(__s7param0);
  };
  GoodgameSignal.prototype.prependSlot = function (__s9param0) {
    return this.slots.prepend(__s9param0);
  };
  GoodgameSignal.prototype.appendSlot = function (__s11param0) {
    return this.slots.append(__s11param0);
  };
  Object.defineProperty(GoodgameSignal.prototype, "isDisposed", {
    get: function () {
      return this.numListeners == 0;
    },
    enumerable: true,
    configurable: true
  });
  GoodgameSignal.prototype.toString = function () {
    return "";
  };
  GoodgameSignal.checkSignals = function (__s17param0) {};
  return GoodgameSignal;
}(require("gge-module:exact_becd07da092f4a09").Signal);
exports.GoodgameSignal = __s0local0;
