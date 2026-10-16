Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __s0local0 = function () {
  function HorizontalProgressBehaviour(__s3param0 = HorizontalProgressBehaviour.DEFAULT_DURATION) {
    this._duration = 0;
    this._duration = __s3param0;
  }
  HorizontalProgressBehaviour.prototype.getFromVars = function (__s5param0) {
    return {
      scaleX: __s5param0
    };
  };
  HorizontalProgressBehaviour.prototype.getToVars = function (__s7param0) {
    return {
      scaleX: __s7param0,
      ease: __dep_exact_608de47b6498f9b0.Power1.easeOut
    };
  };
  Object.defineProperty(HorizontalProgressBehaviour.prototype, "duration", {
    get: function () {
      return this._duration;
    },
    enumerable: true,
    configurable: true
  });
  HorizontalProgressBehaviour.prototype.getCurrentProgress = function (__s11param0) {
    return __s11param0.mask.scaleX;
  };
  HorizontalProgressBehaviour.__initialize_static_members = function () {
    HorizontalProgressBehaviour.DEFAULT_DURATION = 2;
  };
  return HorizontalProgressBehaviour;
}();
exports.HorizontalProgressBehaviour = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IProgressBarChangeBehaviour");
__s0local0.__initialize_static_members();
