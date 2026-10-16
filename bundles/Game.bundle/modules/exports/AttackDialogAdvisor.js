Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_AdvisorActivationEvent = require("gge-module:export_AdvisorActivationEvent");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_AdvisorAttackHelper = require("gge-module:export_AdvisorAttackHelper");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleItemRenderer = require("gge-module:export_CastleItemRenderer");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_AdvisorAttackActivationComponent = require("gge-module:export_AdvisorAttackActivationComponent");
var __dep_export_AdvisorAttackInfoDialog = require("gge-module:export_AdvisorAttackInfoDialog");
var __dep_export_AdvisorAttackInfoDialogProperties = require("gge-module:export_AdvisorAttackInfoDialogProperties");
var __dep_export_AttackDialogAdvisorAttackComponent = require("gge-module:export_AttackDialogAdvisorAttackComponent");
var __dep_export_AttackDialogController = require("gge-module:export_AttackDialogController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function AttackDialogAdvisor(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0._advisorActivationComponent = new __dep_export_AdvisorAttackActivationComponent.AdvisorAttackActivationComponent(__s3local0.disp.mc_activation, __dep_export_AdvisorAttackActivationComponent.AdvisorAttackActivationComponent.TEASERSUFFIX_ACTIVATE_SMALL);
    __s3local0._advisorAttackComponent = new __dep_export_AttackDialogAdvisorAttackComponent.AttackDialogAdvisorAttackComponent(__s3local0.disp.mc_attack);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([__s3local0.disp.btn_info], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    __s3local0.itxt_time = __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s3local0.disp.txt_timer, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AttackDialogAdvisor, __s1param0);
  AttackDialogAdvisor.prototype.onShow = function () {
    __s1param0.prototype.onShow.call(this);
    this.updateState();
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.txt_advisorTitle, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("title_advisor_" + __dep_export_AdvisorAttackHelper.AdvisorAttackHelper.getTextIDSuffix(this.controller.attackAdvisorType)));
    var __s5local0 = this.controller.attackAdvisorType == __dep_exact_26a421b704832cff.AttackAdvisorConst.ADVISOR_TYPE_BARON ? "advisor_baron_countdown_label" : "generic_timer";
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.txt_remainingTime, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s5local0));
  };
  AttackDialogAdvisor.prototype.onHide = function () {
    __s1param0.prototype.onHide.call(this);
    if (this._advisorActivationComponent) {
      this._advisorActivationComponent.onHide();
    }
    if (this._advisorAttackComponent) {
      this._advisorAttackComponent.onHide();
    }
  };
  AttackDialogAdvisor.prototype.destroy = function () {
    __s1param0.prototype.destroy.call(this);
    if (this._advisorActivationComponent) {
      this._advisorActivationComponent.destroy();
    }
    if (this._advisorAttackComponent) {
      this._advisorAttackComponent.destroy();
    }
  };
  AttackDialogAdvisor.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_AdvisorActivationEvent.AdvisorActivationEvent.ADVISOR_ACTIVATION_CHANGED, this.bindFunction(this.onActivationChanged));
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  AttackDialogAdvisor.prototype.removeEventListener = function () {
    __s1param0.prototype.removeEventListener.call(this);
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_AdvisorActivationEvent.AdvisorActivationEvent.ADVISOR_ACTIVATION_CHANGED, this.bindFunction(this.onActivationChanged));
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  AttackDialogAdvisor.prototype.onActivationChanged = function (__s19param0) {
    if (this.controller.attackAdvisorType == __s19param0.advisorType) {
      this.updateState();
    }
  };
  AttackDialogAdvisor.prototype.updateState = function () {
    if (this._advisorActivationComponent && this._advisorAttackComponent) {
      var __s22local0 = __dep_export_AdvisorAttackHelper.AdvisorAttackHelper.getAdvisorActivationInfo(this.controller.attackAdvisorType).isAdvisorActive;
      this.disp.mc_activation.visible = !__s22local0;
      this.disp.mc_attack.visible = __s22local0;
      var __s22local1 = __dep_export_AdvisorAttackHelper.AdvisorAttackHelper.getAdvisorRemainingSeconds(this.controller.attackAdvisorType) >= 0;
      if (this.disp.txt_timer) {
        this.disp.icon_time.visible = this.disp.txt_timer.visible = __s22local1;
      }
      if (this.disp.txt_remainingTime) {
        this.disp.txt_remainingTime.visible = __s22local1;
      }
      if (__s22local0) {
        this._advisorAttackComponent.onShow();
      } else {
        this._advisorActivationComponent.show(this.controller.attackAdvisorType);
      }
    }
  };
  AttackDialogAdvisor.prototype.onClick = function (__s29param0) {
    __s1param0.prototype.onClick.call(this, __s29param0);
    switch (__s29param0.target) {
      case this.disp.btn_info:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_AdvisorAttackInfoDialog.AdvisorAttackInfoDialog, new __dep_export_AdvisorAttackInfoDialogProperties.AdvisorAttackInfoDialogProperties(this.controller.attackAdvisorType));
    }
  };
  AttackDialogAdvisor.prototype.onTimerUpdate = function (__s32param0) {
    var __s32local0 = __dep_export_AdvisorAttackHelper.AdvisorAttackHelper.getAdvisorRemainingSeconds(this.controller.attackAdvisorType);
    this.itxt_time.textContentVO.stringValue = __s32local0 >= 0 ? __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getShortTimeString(__s32local0) : "";
  };
  Object.defineProperty(AttackDialogAdvisor.prototype, "controller", {
    get: function () {
      return __dep_export_AttackDialogController.AttackDialogController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return AttackDialogAdvisor;
}(__dep_export_CastleItemRenderer.CastleItemRenderer);
exports.AttackDialogAdvisor = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
