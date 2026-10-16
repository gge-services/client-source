Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_AdvisorAttackHelper = require("gge-module:export_AdvisorAttackHelper");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_SubscriptionEvent = require("gge-module:export_SubscriptionEvent");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __s0local0 = function (__s1param0) {
  function StatusIconAdvisorAttack_Baron() {
    return __s1param0.call(this, "Btn_AttackAdvisor_Baron") || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(StatusIconAdvisorAttack_Baron, __s1param0);
  Object.defineProperty(StatusIconAdvisorAttack_Baron.prototype, "availableEventAdvisorType", {
    get: function () {
      if (__dep_export_AdvisorAttackHelper.AdvisorAttackHelper.isBaronAdvisorFeatureAvailable()) {
        return __dep_exact_26a421b704832cff.AttackAdvisorConst.ADVISOR_TYPE_BARON;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(StatusIconAdvisorAttack_Baron.prototype, "advisorType", {
    get: function () {
      return __dep_exact_26a421b704832cff.AttackAdvisorConst.ADVISOR_TYPE_BARON;
    },
    enumerable: true,
    configurable: true
  });
  StatusIconAdvisorAttack_Baron.prototype.onTimerUpdate = function (__s11param0) {
    var __s11local0 = this.remainingTimeInSeconds;
    var __s11local1 = this.iconDisp.bg_text.visible;
    if (__s11local0 >= 0) {
      this.iconDisp.bg_text.visible = true;
      this.itxt_label.visible = true;
      this.itxt_label.textContentVO.stringValue = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getShortTimeString(__s11local0);
    } else {
      this.iconDisp.bg_text.visible = false;
      this.itxt_label.visible = false;
    }
    if (__s11local1 != this.iconDisp.bg_text.visible) {
      this.updateCache(false);
    }
  };
  Object.defineProperty(StatusIconAdvisorAttack_Baron.prototype, "remainingTimeInSeconds", {
    get: function () {
      return __dep_export_AdvisorAttackHelper.AdvisorAttackHelper.getAdvisorRemainingSeconds(__dep_exact_26a421b704832cff.AttackAdvisorConst.ADVISOR_TYPE_BARON);
    },
    enumerable: true,
    configurable: true
  });
  StatusIconAdvisorAttack_Baron.prototype.addEventListenerForVisibility = function () {
    __s1param0.prototype.addEventListenerForVisibility.call(this);
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onBaronAdvisorStateChanged));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_SubscriptionEvent.SubscriptionEvent.ON_SUBSCRIPTION_CHANGED, this.bindFunction(this.onBaronAdvisorStateChanged));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.FEATURE_FLAGS_UPDATED, this.bindFunction(this.onBaronAdvisorStateChanged));
  };
  StatusIconAdvisorAttack_Baron.prototype.removeEventListenerForVisibility = function () {
    __s1param0.prototype.removeEventListenerForVisibility.call(this);
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onBaronAdvisorStateChanged));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_SubscriptionEvent.SubscriptionEvent.ON_SUBSCRIPTION_CHANGED, this.bindFunction(this.onBaronAdvisorStateChanged));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.FEATURE_FLAGS_UPDATED, this.bindFunction(this.onBaronAdvisorStateChanged));
  };
  StatusIconAdvisorAttack_Baron.prototype.onBaronAdvisorStateChanged = function (__s22param0) {
    this.setVisibility();
    if (this.iconDisp && this.iconDisp.icon_sleeping) {
      this.updateIndicators();
    }
  };
  return StatusIconAdvisorAttack_Baron;
}(require("gge-module:export_AStatusIconAdvisorAttack").AStatusIconAdvisorAttack);
exports.StatusIconAdvisorAttack_Baron = __s0local0;
