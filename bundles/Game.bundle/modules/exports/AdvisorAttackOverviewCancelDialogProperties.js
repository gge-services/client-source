Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function AdvisorAttackOverviewCancelDialogProperties(__s3param0, __s3param1 = null) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._movements = __s3param0;
    __s3local0._yesCallBack = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AdvisorAttackOverviewCancelDialogProperties, __s1param0);
  Object.defineProperty(AdvisorAttackOverviewCancelDialogProperties.prototype, "movements", {
    get: function () {
      return this._movements;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AdvisorAttackOverviewCancelDialogProperties.prototype, "advisorType", {
    get: function () {
      if (this._movements.length > 0) {
        return this._movements[0].advisorType;
      } else {
        return 1;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AdvisorAttackOverviewCancelDialogProperties.prototype, "yesCallBack", {
    get: function () {
      return this._yesCallBack;
    },
    enumerable: true,
    configurable: true
  });
  return AdvisorAttackOverviewCancelDialogProperties;
}(require("gge-module:exact_9e901e8e2483a22f").BasicProperties);
exports.AdvisorAttackOverviewCancelDialogProperties = __s0local0;
