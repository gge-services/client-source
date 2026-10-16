Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function AdvisorAttackSummaryDialogProperties(__s3param0, __s3param1) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._messageID = __s3param0;
    __s3local0._advisorType = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AdvisorAttackSummaryDialogProperties, __s1param0);
  Object.defineProperty(AdvisorAttackSummaryDialogProperties.prototype, "messageID", {
    get: function () {
      return this._messageID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AdvisorAttackSummaryDialogProperties.prototype, "advisorType", {
    get: function () {
      return this._advisorType;
    },
    enumerable: true,
    configurable: true
  });
  return AdvisorAttackSummaryDialogProperties;
}(require("gge-module:exact_9e901e8e2483a22f").BasicProperties);
exports.AdvisorAttackSummaryDialogProperties = __s0local0;
