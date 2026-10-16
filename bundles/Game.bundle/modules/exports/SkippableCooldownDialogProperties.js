Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function SkippableCooldownDialogProperties(__s3param0, __s3param1, __s3param2) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.mapObjectVO = __s3param0;
    __s3local0._cooldownFinished = __s3param1;
    __s3local0._cooldownFinishedParamList = __s3param2;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SkippableCooldownDialogProperties, __s1param0);
  SkippableCooldownDialogProperties.prototype.callCooldownFinishedFunction = function () {
    this._cooldownFinished(this._cooldownFinishedParamList);
  };
  return SkippableCooldownDialogProperties;
}(require("gge-module:exact_9e901e8e2483a22f").BasicProperties);
exports.SkippableCooldownDialogProperties = __s0local0;
