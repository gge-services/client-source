Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function APopoverVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(APopoverVE, __s1param0);
  APopoverVE.prototype.fillContent = function (__s5param0) {};
  APopoverVE.prototype.getPopoverConfig = function () {
    return null;
  };
  Object.defineProperty(APopoverVE.prototype, "popoverVO", {
    get: function () {
      return this._popoverVO;
    },
    set: function (__s11param0) {
      this._popoverVO = __s11param0;
    },
    enumerable: true,
    configurable: true
  });
  return APopoverVE;
}(require("gge-module:export_CastleComponent").CastleComponent);
exports.APopoverVE = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
