Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function AOptionsDialogContentCreator() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AOptionsDialogContentCreator, __s1param0);
  AOptionsDialogContentCreator.prototype.createItems = function () {
    return [];
  };
  Object.defineProperty(AOptionsDialogContentCreator.prototype, "accordionComponent", {
    get: function () {
      return this._accordionComponent;
    },
    set: function (__s9param0) {
      this._accordionComponent = __s9param0;
    },
    enumerable: true,
    configurable: true
  });
  return AOptionsDialogContentCreator;
}(require("gge-module:export_CastleComponent").CastleComponent);
exports.AOptionsDialogContentCreator = __s0local0;
