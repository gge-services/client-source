Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __s0local0 = function (__s1param0) {
  function CastleLoginDialogBehavior() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleLoginDialogBehavior, __s1param0);
  CastleLoginDialogBehavior.prototype.checkRegisterBehavior = function (__s5param0, __s5param1, __s5param2) {
    return true;
  };
  CastleLoginDialogBehavior.prototype.checkDisplayBehavior = function (__s7param0, __s7param1, __s7param2, __s7param3, __s7param4) {
    for (var __s7local0 = __dep_exact_f855840627e6e145.int(__s7param2.length), __s7local1 = 0; __s7local1 < __s7local0; __s7local1++) {
      if (__s7param2[__s7local1].key == __s7param0.key) {
        return false;
      }
    }
    return true;
  };
  return CastleLoginDialogBehavior;
}(require("gge-module:export_CastleBasicDialogBehavior").CastleBasicDialogBehavior);
exports.CastleLoginDialogBehavior = __s0local0;
