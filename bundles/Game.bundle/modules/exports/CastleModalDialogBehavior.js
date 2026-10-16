Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CastleModalDialogBehavior() {
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleModalDialogBehavior, __s1param0);
  CastleModalDialogBehavior.prototype.canModifyBlockDialogs = function () {
    return false;
  };
  return CastleModalDialogBehavior;
}(require("gge-module:export_CastleBasicDialogBehavior").CastleBasicDialogBehavior);
exports.CastleModalDialogBehavior = __s0local0;
