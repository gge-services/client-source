Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_OptionsDialog = require("gge-module:export_OptionsDialog");
var __dep_export_OptionsDialogProperties = require("gge-module:export_OptionsDialogProperties");
var __dep_export_DialogInfoVO = require("gge-module:export_DialogInfoVO");
var __dep_export_AMessageVO = require("gge-module:export_AMessageVO");
var __dep_export_CastleDailyLoginBonusDialog = require("gge-module:export_CastleDailyLoginBonusDialog");
var __dep_export_CastleStartupLoginBonusDialog = require("gge-module:export_CastleStartupLoginBonusDialog");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleStandardOkDialog = require("gge-module:export_CastleStandardOkDialog");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __s0local0 = function (__s1param0) {
  function MessagePopupVO() {
    var __s3local0 = this;
    __s3local0._subtypeEvent = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(MessagePopupVO, __s1param0);
  MessagePopupVO.prototype.parseMessageHeader = function (__s5param0) {
    var __s5local0 = __s5param0.split(__dep_exact_26a421b704832cff.MessageConst.SUBTYPE_META_DATA_SPLITTER);
    var __s5local1 = __s5local0[0].split("+");
    this._subtypeEvent = parseInt(__s5local1[0]);
    if (this._subtypeEvent == __dep_exact_26a421b704832cff.MessageConst.SPECIAL_ID_WORLD_CUP) {
      __s5local1.shift();
      this._additionalInformation = __s5local1;
    } else if (__s5local0.length > 1) {
      this._additionalInformation = __s5local0[1].split("+");
    }
  };
  MessagePopupVO.prototype.parseSubject = function () {
    switch (this._subtypeEvent) {
      case __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_POPUP_REGISTRATION_GIFT:
        return __dep_exact_92d05af59ee2ff30.Localize.text("message_header_registerreward_title");
      case __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_POPUP_LOGIN_BONUS:
        return __dep_exact_92d05af59ee2ff30.Localize.text("message_header_loginBonus_title");
      case __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_POPUP_SAVE_ACCOUNT:
        return __dep_exact_92d05af59ee2ff30.Localize.text("message_mailVertication_header1");
      default:
        return this._subject;
    }
  };
  MessagePopupVO.prototype.parseSender = function () {
    return __dep_exact_92d05af59ee2ff30.Localize.text("system");
  };
  Object.defineProperty(MessagePopupVO.prototype, "dialogInfo", {
    get: function () {
      switch (this._subtypeEvent) {
        case __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_POPUP_REGISTRATION_GIFT:
          if (__dep_export_CastleModel.CastleModel.startUpBonusData.nextStartupLoginBonusID <= 0) {
            return new __dep_export_DialogInfoVO.DialogInfoVO(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_information"), __dep_exact_92d05af59ee2ff30.Localize.text("alert_registerreward_receivedAll_copy")));
          } else {
            return new __dep_export_DialogInfoVO.DialogInfoVO(__dep_export_CastleStartupLoginBonusDialog.CastleStartupLoginBonusDialog);
          }
        case __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_POPUP_LOGIN_BONUS:
          return new __dep_export_DialogInfoVO.DialogInfoVO(__dep_export_CastleDailyLoginBonusDialog.CastleDailyLoginBonusDialog);
        case __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_POPUP_SAVE_ACCOUNT:
          if (__dep_export_CastleModel.CastleModel.userData.hasSentMailVerification || __dep_export_CastleModel.CastleModel.userData.hasValidatedEmail || __dep_exact_9e901e8e2483a22f_1.EnvGlobalsHandler.globals.loginIsKeyBased || __dep_exact_9e901e8e2483a22f_1.EnvGlobalsHandler.globals.isOnSpecialServer) {
            return new __dep_export_DialogInfoVO.DialogInfoVO(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_information"), __dep_exact_92d05af59ee2ff30.Localize.text("dialog_mailVerticationCompletedAlready_copy1")));
          } else {
            return new __dep_export_DialogInfoVO.DialogInfoVO(__dep_export_OptionsDialog.OptionsDialog, new __dep_export_OptionsDialogProperties.OptionsDialogProperties(__dep_export_OptionsDialog.OptionsDialog.TAB_ACCOUNT_DETAILS, true));
          }
      }
      return null;
    },
    set: function (__s21param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AMessageVO.AMessageVO.prototype, "dialogInfo").set.call(this, __s21param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessagePopupVO.prototype, "additionalIconName", {
    get: function () {
      if (this._subtypeEvent == __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_POPUP_REGISTRATION_GIFT) {
        return "CastleMessageIconsStartupLoginBonus";
      } else if (this._subtypeEvent == __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_POPUP_LOGIN_BONUS) {
        return "CastleMessageIconsLoginBonus";
      } else if (this._subtypeEvent == __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_POPUP_SAVE_ACCOUNT) {
        return "CastleMessageIconsRuby";
      } else {
        return "";
      }
    },
    set: function (__s29param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AMessageVO.AMessageVO.prototype, "additionalIconName").set.call(this, __s29param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessagePopupVO.prototype, "subtypeEvent", {
    get: function () {
      return this._subtypeEvent;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessagePopupVO.prototype, "additionalInformation", {
    get: function () {
      return this._additionalInformation;
    },
    enumerable: true,
    configurable: true
  });
  return MessagePopupVO;
}(__dep_export_AMessageVO.AMessageVO);
exports.MessagePopupVO = __s0local0;
