Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __s0local0 = function (__s1param0) {
  function AValueWrapper(__s3param0, __s3param1, __s3param2, __s3param3) {
    var __s3local0 = __s1param0.call(this, __s3param0, __s3param1, __s3param2) || this;
    __s3local0.wrappedTarget = __s3param3;
    __s3local0.wrappedTarget.updatedByUserSignal.add(__s3local0.bindFunction(__s3local0.wrappedUpdateByUserChanges));
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(AValueWrapper, __s1param0);
  AValueWrapper.prototype.wrappedUpdateByUserChanges = function (__s5param0) {
    this.dispatchUpdateByUserSignal(__s5param0);
  };
  AValueWrapper.prototype.updateValue = function (__s7param0) {
    __s1param0.prototype.updateValue.call(this, __s7param0);
    this.wrappedTarget.updateValue(__s7param0);
  };
  AValueWrapper.prototype.dispose = function () {
    __s1param0.prototype.dispose.call(this);
    this.wrappedTarget.dispose();
  };
  return AValueWrapper;
}(require("gge-module:class_AValueComponent").AValueComponent);
exports.AValueWrapper = __s0local0;
