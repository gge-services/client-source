Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __s0local0 = function (__s1param0) {
  function StrictStepWrapper(__s3param0, __s3param1, __s3param2, __s3param3, __s3param4) {
    var __s3local0 = __s1param0.call(this, __s3param0, __s3param1, __s3param2, __s3param3) || this;
    __s3local0._step = __s3param4;
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(StrictStepWrapper, __s1param0);
  StrictStepWrapper.prototype.wrappedUpdateByUserChanges = function (__s5param0) {
    var __s5local0 = __s5param0;
    if (__s5param0 != this.maxValue && Number(__s5param0 / this._step) != __s5param0 / this._step) {
      var __s5local1 = __s5param0 - this.value;
      var __s5local2 = this.value / this._step;
      __s5local0 = __s5local1 > 0 ? (Number(__s5local2) + 1) * this._step : __s5local2 != Number(__s5local2) ? Number(__s5local2) * this._step : (Number(__s5local2) - 1) * this._step;
    }
    __s1param0.prototype.wrappedUpdateByUserChanges.call(this, __s5local0);
  };
  return StrictStepWrapper;
}(require("gge-module:class_AValueWrapper").AValueWrapper);
exports.StrictStepWrapper = __s0local0;
