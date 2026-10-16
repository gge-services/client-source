Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __s0local0 = function (__s1param0) {
  function GGSTextFieldSignal() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(GGSTextFieldSignal, __s1param0);
  GGSTextFieldSignal.prototype.remove = function (__s5param0) {
    this.removed.apply(null, [this.mappedEventType]);
    return __s1param0.prototype.remove.call(this, __s5param0);
  };
  GGSTextFieldSignal.prototype.add = function (__s7param0) {
    this.added.apply(null, [this.mappedEventType]);
    return __s1param0.prototype.add.call(this, __s7param0);
  };
  return GGSTextFieldSignal;
}(require("gge-module:exact_becd07da092f4a09").Signal);
exports.GGSTextFieldSignal = __s0local0;
