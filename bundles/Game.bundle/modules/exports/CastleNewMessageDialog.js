Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstMessage = require("gge-module:export_ClientConstMessage");
var __dep_export_CastleMessageDataEvent = require("gge-module:export_CastleMessageDataEvent");
var __dep_export_SpecialServerHelper = require("gge-module:export_SpecialServerHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTextScrollVO = require("gge-module:export_CastleTextScrollVO");
var __dep_export_CastleFullScreenInputBlocker = require("gge-module:export_CastleFullScreenInputBlocker");
var __dep_export_LetterLimiter = require("gge-module:export_LetterLimiter");
var __dep_export_LetterLimiterEvent = require("gge-module:export_LetterLimiterEvent");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleNewMessageDialog() {
    var __s3local0 = this;
    __s3local0._waitingForServerAnswer = false;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, CastleNewMessageDialog.ASSETNAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleNewMessageDialog, __s1param0);
  CastleNewMessageDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this._scrollComponent = new __dep_export_CastleTextScrollComponent.CastleTextScrollComponent(new __dep_export_CastleTextScrollVO.CastleTextScrollVO(this.dialogDisp.txt_input, this.dialogDisp.mc_scrollHandle.btn_up, this.dialogDisp.mc_scrollHandle.btn_down, this.dialogDisp.mc_scrollHandle.btn_slider, this.dialogDisp.mc_scrollHandle.mc_sliderLine, [this.dialogDisp.mc_scrollHandle]));
    this._scrollComponent.invisibleOnFit = true;
    this._itxt_input = this.textFieldManager.registerTextField(this.dialogDisp.txt_input, new __dep_exact_92d05af59ee2ff30_2.TextVO(""));
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([this.dialogDisp.btn_help, this.dialogDisp.btn_close, this.dialogDisp.btn_cancel, this.dialogDisp.btn_send]);
  };
  CastleNewMessageDialog.prototype.showLoaded = function (__s7param0 = null) {
    this._itxt_receiver = this.textFieldManager.registerTextField(this.dialogDisp.txt_receiver, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_newMessage_messageTo"));
    this._itxt_topic = this.textFieldManager.registerTextField(this.dialogDisp.txt_topic, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_2.GenericTextIds.VALUE_COLON, ["dialog_inbox_topic"]));
    this._itxt_yourtext = this.textFieldManager.registerTextField(this.dialogDisp.txt_yourtext, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_newMessage_yourText"));
    this._iinput_receiver = this.textFieldManager.registerTextField(this.dialogDisp.input_receiver, new __dep_exact_92d05af59ee2ff30_2.TextVO(""));
    this._iinput_header = this.textFieldManager.registerTextField(this.dialogDisp.input_header, new __dep_exact_92d05af59ee2ff30_2.TextVO(""));
    this._iinput_receiver.type = __dep_exact_81dacdf05bd32292.TextFieldType.INPUT;
    this._iinput_header.type = __dep_exact_81dacdf05bd32292.TextFieldType.INPUT;
    var __s7local0 = __dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.isOnSpecialServer;
    var __s7local1 = __dep_export_SpecialServerHelper.SpecialServerHelper.isCrossplay();
    this._iinput_receiver.maxChars = __dep_exact_26a421b704832cff.MessageConst.MAX_LENGTH_RECEIVER + (__s7local1 ? 9 : __s7local0 ? 5 : 0);
    this._iinput_header.maxChars = __dep_exact_26a421b704832cff.MessageConst.MAX_LENGTH_SUBJECT;
    this._iinput_header.keyDown.removeAll();
    this._iinput_header.keyDown.add(this.bindFunction(this.stopEvent));
    this._iinput_receiver.keyDown.removeAll();
    this._iinput_receiver.keyDown.add(this.bindFunction(this.stopEvent));
    __dep_exact_9e901e8e2483a22f.BasicLayoutManager.getInstance().revertFullscreen();
    var __s7local2 = this.dialogProperties.senderName;
    this.dialogDisp.input_receiver.selectable = !__s7local2;
    __s7local2 = __s7local2 || "";
    this.dialogDisp.btn_cancel.toolTipText = "generic_btn_cancel";
    this.dialogDisp.btn_send.toolTipText = "dialog_newMessage_sendMessage";
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this._itxt_receiver.textContentVO.textId = "dialog_newMessage_messageTo";
    this._itxt_topic.textContentVO.textId = __dep_exact_9e901e8e2483a22f_2.GenericTextIds.VALUE_COLON;
    this._itxt_topic.textContentVO.textReplacements = [__dep_exact_92d05af59ee2ff30.Localize.text("dialog_inbox_topic")];
    this._itxt_yourtext.textContentVO.textId = "dialog_newMessage_yourText";
    this._iinput_receiver.text = "";
    this._iinput_header.text = "";
    this._itxt_input.text = "";
    this._iinput_receiver.textContentVO.stringValue = __s7local2;
    this._iinput_header.textContentVO.stringValue = this.dialogProperties.header ? "Re: " + this.dialogProperties.header : "";
    this._itxt_input.textContentVO.stringValue = "";
    this._itxt_receiver.tabIndex = 0;
    this._iinput_header.tabIndex = 1;
    this._itxt_input.tabIndex = 2;
    this._letterLimiter = new __dep_export_LetterLimiter.LetterLimiter(this.dialogDisp.mc_letterLimit, this._itxt_input);
    new __dep_export_CastleFullScreenInputBlocker.CastleFullScreenInputBlocker(this.dialogDisp.mc_block1);
    new __dep_export_CastleFullScreenInputBlocker.CastleFullScreenInputBlocker(this.dialogDisp.mc_block2);
    new __dep_export_CastleFullScreenInputBlocker.CastleFullScreenInputBlocker(this.dialogDisp.mc_block3);
    this.updateSendButton();
    this._scrollComponent.onShow();
    this.textFieldManager.registerTextField(this.dialogDisp.txt_limitTitle, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_newMessage_daily_messageLimit_desc")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_limitBar.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_2.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [this.currentSentMessageToday, this.limitSendMaxToday]));
    this.dialogDisp.mc_limitBar.mc_bar.scaleX = __dep_exact_9e901e8e2483a22f.MathBase.clamp(this.currentSentMessageToday / (this.limitSendMaxToday <= 0 ? 1 : this.limitSendMaxToday), 0, 1);
    this.dialogDisp.mc_limitBar.toolTipText = "dialog_newMessage_daily_messageLimit_tooltip";
    this.dialogDisp.mc_limitBar.mouseChildren = false;
    __s1param0.prototype.showLoaded.call(this, __s7param0);
  };
  CastleNewMessageDialog.prototype.hideLoaded = function (__s9param0 = null) {
    this._scrollComponent.onHide();
    __s1param0.prototype.hideLoaded.call(this, __s9param0);
  };
  CastleNewMessageDialog.prototype.addEventListenerOnShow = function () {
    __s1param0.prototype.addEventListenerOnShow.call(this);
    this.controller.addEventListener(__dep_export_CastleMessageDataEvent.CastleMessageDataEvent.SENT_OK, this.bindFunction(this.onSentOk));
    this.controller.addEventListener(__dep_export_CastleMessageDataEvent.CastleMessageDataEvent.SENT_ERROR, this.bindFunction(this.onSentError));
    this.controller.addEventListener(__dep_export_LetterLimiterEvent.LetterLimiterEvent.TEXT_CHANGED, this.bindFunction(this.invalidateScrollState));
    this.controller.addEventListener(__dep_export_LetterLimiterEvent.LetterLimiterEvent.TEXT_LIMIT_REACHED, this.bindFunction(this.invalidateScrollState));
    this.controller.addEventListener(__dep_export_LetterLimiterEvent.LetterLimiterEvent.TEXT_LIMIT_EXCEEDED, this.bindFunction(this.invalidateScrollState));
    this.controller.addEventListener(__dep_export_LetterLimiterEvent.LetterLimiterEvent.UPDATE_REMAINING_LETTERS, this.bindFunction(this.updateSendButton));
    this._letterLimiter.addEventListeners();
  };
  CastleNewMessageDialog.prototype.removeEventListenerOnHide = function () {
    __s1param0.prototype.removeEventListenerOnHide.call(this);
    this.controller.removeEventListener(__dep_export_CastleMessageDataEvent.CastleMessageDataEvent.SENT_OK, this.bindFunction(this.onSentOk));
    this.controller.removeEventListener(__dep_export_CastleMessageDataEvent.CastleMessageDataEvent.SENT_ERROR, this.bindFunction(this.onSentError));
    this.controller.removeEventListener(__dep_export_LetterLimiterEvent.LetterLimiterEvent.TEXT_CHANGED, this.bindFunction(this.invalidateScrollState));
    this.controller.removeEventListener(__dep_export_LetterLimiterEvent.LetterLimiterEvent.TEXT_LIMIT_REACHED, this.bindFunction(this.invalidateScrollState));
    this.controller.removeEventListener(__dep_export_LetterLimiterEvent.LetterLimiterEvent.TEXT_LIMIT_EXCEEDED, this.bindFunction(this.invalidateScrollState));
    this.controller.removeEventListener(__dep_export_LetterLimiterEvent.LetterLimiterEvent.UPDATE_REMAINING_LETTERS, this.bindFunction(this.updateSendButton));
    this._letterLimiter.removeEventListeners();
  };
  CastleNewMessageDialog.prototype.invalidateScrollState = function (__s15param0) {
    this._scrollComponent.invalidateScrollState();
  };
  CastleNewMessageDialog.prototype.updateSendButton = function (__s17param0 = null) {
    switch (__dep_exact_f855840627e6e145.int(__dep_export_ClientConstMessage.ClientConstMessage.isValidText(this._itxt_input.text))) {
      case __dep_export_ClientConstMessage.ClientConstMessage.TEXT_INVALID_TEXT_TOO_SHORT:
        __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_send, false);
        this.dialogDisp.btn_send.toolTipText = "alert_textTooShort";
        break;
      case __dep_export_ClientConstMessage.ClientConstMessage.TEXT_INVALID_MISSING_TEXT:
        __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_send, false);
        this.dialogDisp.btn_send.toolTipText = "dialog_newMessage_missingText";
        break;
      case __dep_export_ClientConstMessage.ClientConstMessage.TEXT_VALID:
      default:
        __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_send, true);
        this.dialogDisp.btn_send.toolTipText = "dialog_newMessage_sendMessage";
    }
  };
  CastleNewMessageDialog.prototype.onSentOk = function (__s20param0) {
    this._waitingForServerAnswer = false;
    this.hide();
  };
  CastleNewMessageDialog.prototype.onSentError = function (__s22param0) {
    this._waitingForServerAnswer = false;
  };
  CastleNewMessageDialog.prototype.onClick = function (__s24param0) {
    __s1param0.prototype.onClick.call(this, __s24param0);
    switch (__s24param0.target) {
      case this.dialogDisp.btn_send:
        if (this.dialogDisp.btn_send.enabled && !this._waitingForServerAnswer) {
          var __s24local0 = this._iinput_receiver.text;
          var __s24local1 = this._iinput_header.text;
          var __s24local2 = this._itxt_input.text;
          if (__dep_export_ClientConstMessage.ClientConstMessage.isValidText(__s24local2)) {
            __dep_export_CastleModel.CastleModel.messageData.sendNewMessage(__s24local0, __s24local1, __s24local2);
            this._waitingForServerAnswer = true;
          } else {
            __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f_1.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("dialog_newMessage_message"), __dep_exact_92d05af59ee2ff30.Localize.text("dialog_newMessage_missingText")));
          }
        }
        break;
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_cancel:
        this.hide();
        break;
      case this.dialogDisp.btn_help:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_message_write"));
    }
  };
  Object.defineProperty(CastleNewMessageDialog.prototype, "messageRestriction", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.messageData.getMessageRestrictionVOByMessageType(__dep_exact_26a421b704832cff.MessageConst.MESSAGE_TYPE_USER_OUT);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleNewMessageDialog.prototype, "currentSentMessageToday", {
    get: function () {
      if (this.messageRestriction) {
        return this.messageRestriction.currentPlayerAmount;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleNewMessageDialog.prototype, "limitSendMaxToday", {
    get: function () {
      if (this.messageRestriction) {
        return this.messageRestriction.dailyLimit;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleNewMessageDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleNewMessageDialog.prototype.stopEvent = function (__s42param0) {
    __s42param0.stopPropagation();
  };
  CastleNewMessageDialog.NAME = "CastleNewMessageDialog2";
  CastleNewMessageDialog.ASSETNAME = "CastleMessageNewMessage2";
  return CastleNewMessageDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleNewMessageDialog = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleTextScrollComponent = require("gge-module:export_CastleTextScrollComponent");
var __dep_export_CastleStandardOkDialog = require("gge-module:export_CastleStandardOkDialog");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
