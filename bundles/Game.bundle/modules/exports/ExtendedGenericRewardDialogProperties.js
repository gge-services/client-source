Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function ExtendedGenericRewardDialogProperties(__s3param0, __s3param1, __s3param2, __s3param3 = false) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.showPremiumFrame = false;
    __s3local0._rewardList = __s3param2;
    __s3local0.showPremiumFrame = __s3param3;
    __s3local0.title = __s3param0;
    __s3local0.copy = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ExtendedGenericRewardDialogProperties, __s1param0);
  Object.defineProperty(ExtendedGenericRewardDialogProperties.prototype, "rewardList", {
    get: function () {
      return this._rewardList;
    },
    set: function (__s7param0) {
      this._rewardList = __s7param0;
    },
    enumerable: true,
    configurable: true
  });
  return ExtendedGenericRewardDialogProperties;
}(require("gge-module:exact_9e901e8e2483a22f").BasicProperties);
exports.ExtendedGenericRewardDialogProperties = __s0local0;
