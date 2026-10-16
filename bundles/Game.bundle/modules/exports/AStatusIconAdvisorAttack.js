Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_AdvisorActivationEvent = require("gge-module:export_AdvisorActivationEvent");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleArmyDataEvent = require("gge-module:export_CastleArmyDataEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_AdvisorAttackHelper = require("gge-module:export_AdvisorAttackHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_AdvisorAttackActivationDialog = require("gge-module:export_AdvisorAttackActivationDialog");
var __dep_export_AdvisorAttackActivationDialogProperties = require("gge-module:export_AdvisorAttackActivationDialogProperties");
var __dep_export_AdvisorAttackOverviewDialog = require("gge-module:export_AdvisorAttackOverviewDialog");
var __dep_export_AdvisorAttackOverviewDialogProperties = require("gge-module:export_AdvisorAttackOverviewDialogProperties");
var __dep_export_ACastleLabeledStatusIcon = require("gge-module:export_ACastleLabeledStatusIcon");
var __dep_export_ACastleStatusIcon = require("gge-module:export_ACastleStatusIcon");
var __s0local0 = function (__s1param0) {
  function AStatusIconAdvisorAttack(__s3param0) {
    return __s1param0.call(this, __s3param0, "txt_time", new __dep_exact_92d05af59ee2ff30.TextVO(""), __dep_export_ACastleStatusIcon.ACastleStatusIcon.PRIORITY_MIDDLE) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AStatusIconAdvisorAttack, __s1param0);
  AStatusIconAdvisorAttack.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.itxt_label.autoFitToBounds = true;
  };
  AStatusIconAdvisorAttack.prototype.setVisibilityLoaded = function () {
    if (this.isAdvisorAvailable()) {
      this.show();
    } else {
      this.hide();
    }
  };
  AStatusIconAdvisorAttack.prototype.showLoaded = function (__s11param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s11param0);
    this.updateIndicators();
    this.setTooltip("title_advisor_" + __dep_export_AdvisorAttackHelper.AdvisorAttackHelper.getTextIDSuffix(this.advisorType));
  };
  AStatusIconAdvisorAttack.prototype.updateIndicators = function () {
    var __s13local0 = this.advisorActivationInfoVO;
    this.iconDisp.icon_sleeping.visible = __s13local0.isAdvisorActive && this.numAdvisorMovements == 0;
    this.iconDisp.icon_inactive.visible = !__s13local0.isAdvisorActive;
    this.iconDisp.bg_text.gotoAndStop(__s13local0.isAdvisorActive ? 1 : 2);
  };
  AStatusIconAdvisorAttack.prototype.addEventListenerForVisibility = function () {
    __s1param0.prototype.addEventListenerForVisibility.call(this);
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onChangePosibilityToShowMe));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onChangePosibilityToShowMe));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, this.bindFunction(this.onChangePosibilityToShowMe));
  };
  AStatusIconAdvisorAttack.prototype.removeEventListenerForVisibility = function () {
    __s1param0.prototype.removeEventListenerForVisibility.call(this);
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onChangePosibilityToShowMe));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onChangePosibilityToShowMe));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, this.bindFunction(this.onChangePosibilityToShowMe));
  };
  AStatusIconAdvisorAttack.prototype.onChangePosibilityToShowMe = function (__s19param0) {
    this.setVisibility();
  };
  AStatusIconAdvisorAttack.prototype.addEventListenerForShowTime = function () {
    __s1param0.prototype.addEventListenerForShowTime.call(this);
    this.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
    this.controller.addEventListener(__dep_export_AdvisorActivationEvent.AdvisorActivationEvent.ADVISOR_ACTIVATION_CHANGED, this.bindFunction(this.onActivationChanged));
    this.controller.addEventListener(__dep_export_CastleArmyDataEvent.CastleArmyDataEvent.MOVEMENTS_CHANGED, this.bindFunction(this.onMovementsUpdated));
  };
  AStatusIconAdvisorAttack.prototype.removeEventListenerForShowTime = function () {
    __s1param0.prototype.removeEventListenerForShowTime.call(this);
    this.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
    this.controller.removeEventListener(__dep_export_AdvisorActivationEvent.AdvisorActivationEvent.ADVISOR_ACTIVATION_CHANGED, this.bindFunction(this.onActivationChanged));
    this.controller.removeEventListener(__dep_export_CastleArmyDataEvent.CastleArmyDataEvent.MOVEMENTS_CHANGED, this.bindFunction(this.onMovementsUpdated));
  };
  AStatusIconAdvisorAttack.prototype.onTimerUpdate = function (__s25param0) {
    var __s25local0 = this.remainingTimeInSeconds;
    if (__s25local0 >= 0) {
      this.itxt_label.textContentVO.stringValue = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getShortTimeString(__s25local0);
    }
  };
  Object.defineProperty(AStatusIconAdvisorAttack.prototype, "remainingTimeInSeconds", {
    get: function () {
      if (this.eventVO) {
        return this.eventVO.remainingEventTimeInSeconds;
      } else {
        return -1;
      }
    },
    enumerable: true,
    configurable: true
  });
  AStatusIconAdvisorAttack.prototype.onActivationChanged = function (__s32param0) {
    if (this.isAdvisorAvailable() && __s32param0.advisorType == this.advisorType) {
      this.updateIndicators();
    }
  };
  AStatusIconAdvisorAttack.prototype.onMovementsUpdated = function (__s35param0) {
    if (this.isAdvisorAvailable()) {
      this.updateIndicators();
    }
  };
  AStatusIconAdvisorAttack.prototype.isAdvisorAvailable = function () {
    var __s38local0 = this.availableEventAdvisorType;
    return __s38local0 > 0 && __dep_export_AdvisorAttackHelper.AdvisorAttackHelper.getAdvisorActivationInfo(__s38local0).advisorActivationCurrencyId > 0;
  };
  Object.defineProperty(AStatusIconAdvisorAttack.prototype, "advisorActivationInfoVO", {
    get: function () {
      return __dep_export_AdvisorAttackHelper.AdvisorAttackHelper.getAdvisorActivationInfo(this.advisorType);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AStatusIconAdvisorAttack.prototype, "availableEventAdvisorType", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AStatusIconAdvisorAttack.prototype, "eventVO", {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AStatusIconAdvisorAttack.prototype, "numAdvisorMovements", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.armyData.getAdvisorMovements(this.advisorType).length;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AStatusIconAdvisorAttack.prototype, "advisorType", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  AStatusIconAdvisorAttack.prototype.onClick = function () {
    if (this.isAdvisorAvailable()) {
      if (this.advisorActivationInfoVO.isAdvisorActive) {
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_AdvisorAttackOverviewDialog.AdvisorAttackOverviewDialog, new __dep_export_AdvisorAttackOverviewDialogProperties.AdvisorAttackOverviewDialogProperties(this.advisorType));
      } else {
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_AdvisorAttackActivationDialog.AdvisorAttackActivationDialog, new __dep_export_AdvisorAttackActivationDialogProperties.AdvisorAttackActivationDialogProperties(this.advisorType));
      }
    }
  };
  return AStatusIconAdvisorAttack;
}(__dep_export_ACastleLabeledStatusIcon.ACastleLabeledStatusIcon);
exports.AStatusIconAdvisorAttack = __s0local0;
