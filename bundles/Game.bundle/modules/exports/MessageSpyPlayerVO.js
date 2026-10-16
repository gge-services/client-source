Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleSabotageMessageDialogProperties = require("gge-module:export_CastleSabotageMessageDialogProperties");
var __dep_export_CastleSpyLogDialogProperties = require("gge-module:export_CastleSpyLogDialogProperties");
var __dep_export_PlayerHelper = require("gge-module:export_PlayerHelper");
var __dep_export_DialogInfoVO = require("gge-module:export_DialogInfoVO");
var __dep_export_AMessageSpyVO = require("gge-module:export_AMessageSpyVO");
var __s0local0 = function (__s1param0) {
  function MessageSpyPlayerVO() {
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(MessageSpyPlayerVO, __s1param0);
  MessageSpyPlayerVO.prototype.parseMessageHeader = function (__s5param0) {
    var __s5local0 = __s5param0.split(__dep_exact_26a421b704832cff.MessageConst.SUBTYPE_META_DATA_SPLITTER);
    var __s5local1 = (__s5local0[0] || "").split("+");
    var __s5local2 = __s5local0[1];
    if (__s5local2) {
      var __s5local3 = __s5local2.split("+");
      this._subtypeSpy = parseInt(__s5local1[0]);
      this._subtypeResult = parseInt(__s5local1[1]);
      if (__s5local1.length > 2) {
        this._areaType = parseInt(__s5local1[2]);
      }
      if (this._subtypeSpy != __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_SPY_SABOTAGE && this._subtypeSpy != __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_SPY_PLAQUE_MONK || this.subtypeResult != __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_ATTACKER_SUCCESS && this.subtypeResult != __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_DEFENDER_FAILED) {
        this._kingdomID = parseInt(__s5local3[0]);
        this._ownerID = parseInt(__s5local3[1]);
        this._areaName = __s5local3[2];
      } else {
        this._areaName = __s5local3[0];
        if (__s5local3.length > 1) {
          this._areaID = parseInt(__s5local3[1]);
        }
      }
    }
  };
  MessageSpyPlayerVO.prototype.parseSubject = function () {
    if (this.forwarded) {
      return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_forwardlog_message", [__dep_exact_92d05af59ee2ff30.Localize.text("dialog_spy_military")]);
    } else if (this._subtypeResult != __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_DEFENDER_FAILED) {
      return __dep_exact_92d05af59ee2ff30.Localize.text(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_ASSIGN_COLON, [__dep_exact_92d05af59ee2ff30.Localize.text(this.titleTextID), __dep_exact_92d05af59ee2ff30.Localize.text(this.resultTextID)]);
    } else if (this._subtypeSpy == __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_SPY_SABOTAGE) {
      return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_spy_affectedBySabotage");
    } else if (this._subtypeSpy == __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_SPY_PLAQUE_MONK) {
      return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_spy_affectedByPlague");
    } else {
      return "";
    }
  };
  Object.defineProperty(MessageSpyPlayerVO.prototype, "resultTextID", {
    get: function () {
      switch (this._subtypeResult) {
        case __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_ATTACKER_SUCCESS:
          return "dialog_spyLog_success";
        case __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_ATTACKER_FAILED:
          return "dialog_spyLog_failure";
        case __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_DEFENDER_SUCCESS:
          return "dialog_spyLog_keptAway";
      }
      return "";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageSpyPlayerVO.prototype, "titleTextID", {
    get: function () {
      switch (this._subtypeSpy) {
        case __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_SPY_SABOTAGE:
          return "dialog_spy_titleSabotage";
        case __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_SPY_DEFENCE:
        case __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_SPY_ECO:
          return "dialog_attack_spyInfo";
        case __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_SPY_PLAQUE_MONK:
          return "plague";
      }
      return "";
    },
    enumerable: true,
    configurable: true
  });
  MessageSpyPlayerVO.prototype.parseSender = function () {
    if (this.forwarded) {
      return this._senderName;
    } else if (this.areaType && !this.areaName) {
      return __dep_export_PlayerHelper.PlayerHelper.getNPCCastleName(this.kingdomID, this.ownerID, this.areaType);
    } else {
      return this.areaName;
    }
  };
  Object.defineProperty(MessageSpyPlayerVO.prototype, "dialogInfo", {
    get: function () {
      if (this._subtypeSpy == __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_SPY_SABOTAGE) {
        if (this._subtypeResult == __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_DEFENDER_FAILED) {
          return new __dep_export_DialogInfoVO.DialogInfoVO(__dep_export_CastleSabotageMessageDialog.CastleSabotageMessageDialog, new __dep_export_CastleSabotageMessageDialogProperties.CastleSabotageMessageDialogProperties(this.messageType, this.areaID, this.messageID, !this.read));
        }
      } else if (this._subtypeSpy == __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_SPY_PLAQUE_MONK && this._subtypeResult == __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_DEFENDER_FAILED) {
        return new __dep_export_DialogInfoVO.DialogInfoVO(__dep_export_CastlePlagueMessageDialog.CastlePlagueMessageDialog, new __dep_export_CastleSabotageMessageDialogProperties.CastleSabotageMessageDialogProperties(this.messageType, this.areaID, this.messageID, !this.read));
      }
      return new __dep_export_DialogInfoVO.DialogInfoVO(__dep_export_CastleSpyLogDialog.CastleSpyLogDialog, new __dep_export_CastleSpyLogDialogProperties.CastleSpyLogDialogProperties(this, true));
    },
    set: function (__s35param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AMessageSpyVO.AMessageSpyVO.prototype, "dialogInfo").set.call(this, __s35param0);
    },
    enumerable: true,
    configurable: true
  });
  MessageSpyPlayerVO.prototype.hasDetailedSpyLog = function () {
    return this.subtypeSpy == __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_SPY_DEFENCE && this._subtypeResult == __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_ATTACKER_SUCCESS || !!this.forwarded && this.subtypeSpy == __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_SPY_ECO;
  };
  return MessageSpyPlayerVO;
}(__dep_export_AMessageSpyVO.AMessageSpyVO);
exports.MessageSpyPlayerVO = __s0local0;
var __dep_export_CastleSabotageMessageDialog = require("gge-module:export_CastleSabotageMessageDialog");
var __dep_export_CastleSpyLogDialog = require("gge-module:export_CastleSpyLogDialog");
var __dep_export_CastlePlagueMessageDialog = require("gge-module:export_CastlePlagueMessageDialog");
