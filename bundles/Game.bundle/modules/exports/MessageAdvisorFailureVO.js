Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_AdvisorAttackHelper = require("gge-module:export_AdvisorAttackHelper");
var __dep_export_AdvisorAttackFailDialog = require("gge-module:export_AdvisorAttackFailDialog");
var __dep_export_AdvisorAttackFailDialogProperties = require("gge-module:export_AdvisorAttackFailDialogProperties");
var __dep_export_DialogInfoVO = require("gge-module:export_DialogInfoVO");
var __s0local0 = function (__s1param0) {
  function MessageAdvisorFailureVO() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(MessageAdvisorFailureVO, __s1param0);
  MessageAdvisorFailureVO.prototype.parseMessageHeader = function (__s5param0) {
    this.advisorType = parseInt(__s5param0.split("+")[0]);
    this.commanderId = parseInt(__s5param0.split("+")[1]);
    this.failureId = parseInt(__s5param0.split("+")[2]);
  };
  MessageAdvisorFailureVO.prototype.parseSubject = function () {
    return __dep_exact_92d05af59ee2ff30.Localize.text("title_advisor_AttackFailed");
  };
  MessageAdvisorFailureVO.prototype.parseSender = function () {
    return __dep_exact_92d05af59ee2ff30.Localize.text("title_advisor_" + __dep_export_AdvisorAttackHelper.AdvisorAttackHelper.getTextIDSuffix(this.advisorType));
  };
  Object.defineProperty(MessageAdvisorFailureVO.prototype, "additionalIconName", {
    get: function () {
      switch (this.advisorType) {
        case __dep_exact_26a421b704832cff.AttackAdvisorConst.ADVISOR_TYPE_NOMAD:
          return "CastleMessageIconsNomadAdvisor";
        case __dep_exact_26a421b704832cff.AttackAdvisorConst.ADVISOR_TYPE_SAMURAI:
          return "CastleMessageIconsSamuraiAdvisor";
        case __dep_exact_26a421b704832cff.AttackAdvisorConst.ADVISOR_TYPE_BERIMOND:
          return "CastleMessageIconsBerimondAdvisor";
        case __dep_exact_26a421b704832cff.AttackAdvisorConst.ADVISOR_TYPE_BARON:
          return "CastleMessageIconsBaronAdvisor";
        default:
          return "CastleMessageIconsNomadAdvisor";
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageAdvisorFailureVO.prototype, "dialogInfo", {
    get: function () {
      return new __dep_export_DialogInfoVO.DialogInfoVO(__dep_export_AdvisorAttackFailDialog.AdvisorAttackFailDialog, new __dep_export_AdvisorAttackFailDialogProperties.AdvisorAttackFailDialogProperties(this.advisorType, this.commanderId, this.failureId));
    },
    enumerable: true,
    configurable: true
  });
  return MessageAdvisorFailureVO;
}(require("gge-module:export_AMessageVO").AMessageVO);
exports.MessageAdvisorFailureVO = __s0local0;
