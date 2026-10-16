Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleSpyLogDialogProperties = require("gge-module:export_CastleSpyLogDialogProperties");
var __dep_export_PlayerHelper = require("gge-module:export_PlayerHelper");
var __dep_export_DialogInfoVO = require("gge-module:export_DialogInfoVO");
var __dep_export_AMessageSpyVO = require("gge-module:export_AMessageSpyVO");
var __s0local0 = function (__s1param0) {
  function MessageSpyNpcVO() {
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(MessageSpyNpcVO, __s1param0);
  MessageSpyNpcVO.prototype.parseMessageHeader = function (__s5param0) {
    var __s5local0 = __s5param0.split(__dep_exact_26a421b704832cff.MessageConst.SUBTYPE_META_DATA_SPLITTER)[0].split("+");
    var __s5local1 = __s5param0.split(__dep_exact_26a421b704832cff.MessageConst.SUBTYPE_META_DATA_SPLITTER)[1].split("+");
    this._subtypeSpy = parseInt(__s5local0[0]);
    this._subtypeResult = parseInt(__s5local0[1]);
    this._areaType = parseInt(__s5local0[2]);
    this._kingdomID = parseInt(__s5local1[0]);
    this._ownerID = parseInt(__s5local1[1]);
    this._areaName = __s5local1[2];
  };
  MessageSpyNpcVO.prototype.parseSubject = function () {
    if (this.forwarded) {
      return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_forwardlog_message", [__dep_exact_92d05af59ee2ff30.Localize.text("dialog_spy_military")]);
    } else if (this.subtypeResult == __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_ATTACKER_SUCCESS) {
      return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_attack_spyInfo") + ": " + __dep_exact_92d05af59ee2ff30.Localize.text("dialog_spyLog_success");
    } else if (this.subtypeResult == __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_ATTACKER_FAILED) {
      return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_attack_spyInfo") + ": " + __dep_exact_92d05af59ee2ff30.Localize.text("dialog_spyLog_failure");
    } else if (this.subtypeResult == __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_DEFENDER_SUCCESS) {
      return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_attack_spyInfo") + ": " + __dep_exact_92d05af59ee2ff30.Localize.text("dialog_spyLog_keptAway");
    } else {
      return "";
    }
  };
  MessageSpyNpcVO.prototype.parseSender = function () {
    if (this.forwarded) {
      return this._senderName;
    } else {
      return __dep_export_PlayerHelper.PlayerHelper.getNPCCastleName(this.kingdomID, this.ownerID, this.areaType);
    }
  };
  Object.defineProperty(MessageSpyNpcVO.prototype, "dialogInfo", {
    get: function () {
      return new __dep_export_DialogInfoVO.DialogInfoVO(__dep_export_CastleSpyLogDialog.CastleSpyLogDialog, new __dep_export_CastleSpyLogDialogProperties.CastleSpyLogDialogProperties(this, true));
    },
    set: function (__s20param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AMessageSpyVO.AMessageSpyVO.prototype, "dialogInfo").set.call(this, __s20param0);
    },
    enumerable: true,
    configurable: true
  });
  MessageSpyNpcVO.prototype.hasDetailedSpyLog = function () {
    return this.subtypeSpy == __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_SPY_DEFENCE && this.subtypeResult == __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_ATTACKER_SUCCESS;
  };
  return MessageSpyNpcVO;
}(__dep_export_AMessageSpyVO.AMessageSpyVO);
exports.MessageSpyNpcVO = __s0local0;
var __dep_export_CastleSpyLogDialog = require("gge-module:export_CastleSpyLogDialog");
