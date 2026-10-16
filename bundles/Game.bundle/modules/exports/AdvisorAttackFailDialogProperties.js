Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function AdvisorAttackFailDialogProperties(__s3param0, __s3param1, __s3param2) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._advisorType = __s3param0;
    __s3local0._commanderId = __s3param1;
    __s3local0._failureId = __s3param2;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AdvisorAttackFailDialogProperties, __s1param0);
  Object.defineProperty(AdvisorAttackFailDialogProperties.prototype, "advisorType", {
    get: function () {
      return this._advisorType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AdvisorAttackFailDialogProperties.prototype, "commanderId", {
    get: function () {
      return this._commanderId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AdvisorAttackFailDialogProperties.prototype, "failureId", {
    get: function () {
      return this._failureId;
    },
    enumerable: true,
    configurable: true
  });
  return AdvisorAttackFailDialogProperties;
}(require("gge-module:exact_9e901e8e2483a22f").BasicProperties);
exports.AdvisorAttackFailDialogProperties = __s0local0;
