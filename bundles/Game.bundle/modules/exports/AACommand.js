Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_AdvisorActivationEvent = require("gge-module:export_AdvisorActivationEvent");
var __dep_export_AdvisorAttackHelper = require("gge-module:export_AdvisorAttackHelper");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_SubscriptionEvent = require("gge-module:export_SubscriptionEvent");
var __dep_export_CastleCommand = require("gge-module:export_CastleCommand");
var __s0local0 = function (__s1param0) {
  function AACommand() {
    var __s3local0 = __s1param0 !== null && __s1param0.apply(this, arguments) || this;
    __s3local0._isWaitingForSubscriptionRefresh = false;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AACommand, __s1param0);
  Object.defineProperty(AACommand.prototype, "cmdId", {
    get: function () {
      return __dep_export_ClientConstSF.ClientConstSF.S2C_ACTIVATE_ATTACK_ADVISOR_EVENT;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleCommand.CastleCommand.prototype, "cmdId").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  AACommand.prototype.executeCommand = function (__s9param0, __s9param1) {
    switch (__s9param0) {
      case __dep_exact_26a421b704832cff_2.ERROR.ALL_OK:
        var __s9local0 = JSON.parse(__s9param1[1]);
        var __s9local1 = __s9local0[__dep_exact_26a421b704832cff.CommKeys.ADVISOR_ATTACK_TYPE] ? __s9local0[__dep_exact_26a421b704832cff.CommKeys.ADVISOR_ATTACK_TYPE] : __dep_exact_26a421b704832cff_1.AttackAdvisorConst.ADVISOR_TYPE_NOMAD;
        var __s9local2 = __dep_export_AdvisorAttackHelper.AdvisorAttackHelper.getEventVOByAdvisorType(__s9local1);
        if (__s9local2) {
          __s9local2.isAdvisorActive = true;
          __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_AdvisorActivationEvent.AdvisorActivationEvent(__dep_export_AdvisorActivationEvent.AdvisorActivationEvent.ADVISOR_ACTIVATION_CHANGED, __s9local1));
        } else if (__s9local1 == __dep_exact_26a421b704832cff_1.AttackAdvisorConst.ADVISOR_TYPE_BARON) {
          if (!this._isWaitingForSubscriptionRefresh) {
            this._isWaitingForSubscriptionRefresh = true;
            __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_SubscriptionEvent.SubscriptionEvent.ON_SUBSCRIPTION_CHANGED, this.bindFunction(this.onSubscriptionRefreshed));
          }
          __dep_export_CastleModel.CastleModel.subscriptionData.requestSIE();
        }
        break;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  };
  AACommand.prototype.onSubscriptionRefreshed = function (__s15param0) {
    this._isWaitingForSubscriptionRefresh = false;
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_SubscriptionEvent.SubscriptionEvent.ON_SUBSCRIPTION_CHANGED, this.bindFunction(this.onSubscriptionRefreshed));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_AdvisorActivationEvent.AdvisorActivationEvent(__dep_export_AdvisorActivationEvent.AdvisorActivationEvent.ADVISOR_ACTIVATION_CHANGED, __dep_exact_26a421b704832cff_1.AttackAdvisorConst.ADVISOR_TYPE_BARON));
  };
  return AACommand;
}(__dep_export_CastleCommand.CastleCommand);
exports.AACommand = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IExecCommand");
