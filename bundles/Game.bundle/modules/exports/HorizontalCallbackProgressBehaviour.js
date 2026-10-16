Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_HorizontalProgressBehaviour = require("gge-module:export_HorizontalProgressBehaviour");
var __s0local0 = function (__s1param0) {
  function HorizontalCallbackProgressBehaviour(__s3param0, __s3param1, __s3param2 = __dep_export_HorizontalProgressBehaviour.HorizontalProgressBehaviour.DEFAULT_DURATION) {
    var __s3local0 = __s1param0.call(this, __s3param2) || this;
    __s3local0._onUpdateCallback = __s3param0;
    __s3local0._onCompleteCallback = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(HorizontalCallbackProgressBehaviour, __s1param0);
  HorizontalCallbackProgressBehaviour.prototype.getFromVars = function (__s5param0) {
    return __s1param0.prototype.getFromVars.call(this, __s5param0);
  };
  HorizontalCallbackProgressBehaviour.prototype.getToVars = function (__s7param0) {
    var __s7local0 = __s1param0.prototype.getToVars.call(this, __s7param0);
    __s7local0.onUpdate = this.bindFunction(this._onUpdateCallback);
    __s7local0.onUpdateParams = ["{self}", "scaleX"];
    __s7local0.onComplete = this.bindFunction(this._onCompleteCallback);
    return __s7local0;
  };
  Object.defineProperty(HorizontalCallbackProgressBehaviour.prototype, "duration", {
    get: function () {
      return this._duration;
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_HorizontalProgressBehaviour.HorizontalProgressBehaviour.prototype, "duration").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  return HorizontalCallbackProgressBehaviour;
}(__dep_export_HorizontalProgressBehaviour.HorizontalProgressBehaviour);
exports.HorizontalCallbackProgressBehaviour = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IProgressBarChangeBehaviour");
