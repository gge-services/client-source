Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_C2SAllianceNewsletterVO = require("gge-module:export_C2SAllianceNewsletterVO");
var __dep_export_CastleMessageDataEvent = require("gge-module:export_CastleMessageDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTextScrollVO = require("gge-module:export_CastleTextScrollVO");
var __dep_export_CastleFullScreenInputBlocker = require("gge-module:export_CastleFullScreenInputBlocker");
var __dep_export_LetterLimiter = require("gge-module:export_LetterLimiter");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleAllianceMessageToAllDialog() {
    var __s3local0 = this;
    __s3local0.waitingForServer = false;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, CastleAllianceMessageToAllDialog.ASSETNAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceMessageToAllDialog, __s1param0);
  CastleAllianceMessageToAllDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this._scrollComponent = new __dep_export_CastleTextScrollComponent.CastleTextScrollComponent(new __dep_export_CastleTextScrollVO.CastleTextScrollVO(this.dialogDisp.txt_input, this.dialogDisp.mc_scrollHandle.btn_up, this.dialogDisp.mc_scrollHandle.btn_down, this.dialogDisp.mc_scrollHandle.btn_slider, this.dialogDisp.mc_scrollHandle.mc_sliderLine, [this.dialogDisp.mc_scrollHandle]));
    this._scrollComponent.invisibleOnFit = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_receiver, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_newMessage_messageTo"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_topic, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_COLON, [__dep_exact_92d05af59ee2ff30.Localize.text("dialog_inbox_topic")]));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_yourtext, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_newMessage_yourText"));
    this._iinput_receiver = this.textFieldManager.registerTextField(this.dialogDisp.input_receiver, new __dep_exact_92d05af59ee2ff30_2.TextVO(""));
    this._iinput_receiver.type = __dep_exact_81dacdf05bd32292.TextFieldType.INPUT;
    this._iinput_header = this.textFieldManager.registerTextField(this.dialogDisp.input_header, new __dep_exact_92d05af59ee2ff30_2.TextVO(""));
    this._iinput_header.type = __dep_exact_81dacdf05bd32292.TextFieldType.INPUT;
    this._itxt_input = this.textFieldManager.registerTextField(this.dialogDisp.txt_input, new __dep_exact_92d05af59ee2ff30_2.TextVO(""));
    this._itxt_input.type = __dep_exact_81dacdf05bd32292.TextFieldType.INPUT;
    this.dialogDisp.btn_cancel.toolTipText = "generic_btn_cancel";
    this.dialogDisp.btn_send.toolTipText = "dialog_newMessage_sendMessage";
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([this.dialogDisp.btn_help, this.dialogDisp.btn_close, this.dialogDisp.btn_cancel, this.dialogDisp.btn_send]);
  };
  CastleAllianceMessageToAllDialog.prototype.showLoaded = function (__s7param0 = null) {
    this._iinput_header.maxChars = __dep_exact_26a421b704832cff.MessageConst.MAX_LENGTH_SUBJECT;
    this._iinput_receiver.maxChars = __dep_exact_26a421b704832cff.MessageConst.MAX_LENGTH_SUBJECT;
    this._iinput_receiver.selectable = false;
    this._letterLimiter = new __dep_export_LetterLimiter.LetterLimiter(this.dialogDisp.mc_letterLimit, this._itxt_input);
    this._iinput_receiver.textContentVO.stringValue = this.dialogProperties.allianceVO.allianceName;
    this._iinput_header.textContentVO.stringValue = "";
    this._itxt_input.textContentVO.stringValue = "";
    this.waitingForServer = false;
    this.controller.addEventListener(__dep_export_CastleMessageDataEvent.CastleMessageDataEvent.SENT_OK, this.bindFunction(this.onSentOk));
    this.controller.addEventListener(__dep_export_CastleMessageDataEvent.CastleMessageDataEvent.SENT_ERROR, this.bindFunction(this.onSentError));
    new __dep_export_CastleFullScreenInputBlocker.CastleFullScreenInputBlocker(this.dialogDisp.mc_block1);
    new __dep_export_CastleFullScreenInputBlocker.CastleFullScreenInputBlocker(this.dialogDisp.mc_block2);
    new __dep_export_CastleFullScreenInputBlocker.CastleFullScreenInputBlocker(this.dialogDisp.mc_block3);
    this._scrollComponent.onShow();
    this.textFieldManager.registerTextField(this.dialogDisp.txt_limitTitle, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_newMessage_daily_messageLimit_desc")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_limitBar.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [this.currentSentMessageToday, this.limitSendMaxToday]));
    this.dialogDisp.mc_limitBar.mc_bar.scaleX = __dep_exact_9e901e8e2483a22f.MathBase.clamp(this.currentSentMessageToday / (this.limitSendMaxToday <= 0 ? 1 : this.limitSendMaxToday), 0, 1);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_send, this.currentSentMessageToday < this.limitSendMaxToday);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(this.dialogDisp.btn_send)) {
      this.dialogDisp.btn_send.toolTipText = "dialog_newMessage_sendMessage";
    } else {
      this.dialogDisp.btn_send.toolTipText = "dialog_inbox_writeNewMessage_blocked_dailyLimit_tooltip";
    }
    this.dialogDisp.mc_limitBar.toolTipText = "dialog_newMessage_daily_messageLimit_alliance_tooltip";
    this.dialogDisp.mc_limitBar.mouseChildren = false;
    __s1param0.prototype.showLoaded.call(this, __s7param0);
  };
  CastleAllianceMessageToAllDialog.prototype.addEventListenerOnShow = function () {
    __s1param0.prototype.addEventListenerOnShow.call(this);
    this._letterLimiter.addEventListeners();
  };
  CastleAllianceMessageToAllDialog.prototype.removeEventListenerOnHide = function () {
    __s1param0.prototype.removeEventListenerOnHide.call(this);
    this._letterLimiter.removeEventListeners();
  };
  CastleAllianceMessageToAllDialog.prototype.hideLoaded = function (__s15param0 = null) {
    this._scrollComponent.onHide();
    this.controller.removeEventListener(__dep_export_CastleMessageDataEvent.CastleMessageDataEvent.SENT_OK, this.bindFunction(this.onSentOk));
    this.controller.removeEventListener(__dep_export_CastleMessageDataEvent.CastleMessageDataEvent.SENT_ERROR, this.bindFunction(this.onSentError));
    __s1param0.prototype.hideLoaded.call(this, __s15param0);
  };
  CastleAllianceMessageToAllDialog.prototype.onSentOk = function (__s17param0) {
    this.waitingForServer = false;
    this.hide();
  };
  CastleAllianceMessageToAllDialog.prototype.onSentError = function (__s19param0) {
    this.waitingForServer = false;
  };
  CastleAllianceMessageToAllDialog.prototype.onClick = function (__s21param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s21param0.target)) {
      switch (__s21param0.target) {
        case this.dialogDisp.btn_send:
          if (!this.waitingForServer) {
            var __s21local0 = this._iinput_header.text;
            var __s21local1 = this._itxt_input.text;
            if (__s21local1 && __s21local1 != "") {
              this.waitingForServer = true;
              __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SAllianceNewsletterVO.C2SAllianceNewsletterVO(__s21local0, __s21local1));
            } else {
              __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("dialog_newMessage_message"), __dep_exact_92d05af59ee2ff30.Localize.text("dialog_newMessage_missingText")));
            }
          }
          break;
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_cancel:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_message_writeToAll"));
      }
    }
  };
  Object.defineProperty(CastleAllianceMessageToAllDialog.prototype, "messageRestriction", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.messageData.getMessageRestrictionVOByMessageType(__dep_exact_26a421b704832cff.MessageConst.MESSAGE_TYPE_ALLIANCE_NEWSLETTER);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceMessageToAllDialog.prototype, "currentSentMessageToday", {
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
  Object.defineProperty(CastleAllianceMessageToAllDialog.prototype, "limitSendMaxToday", {
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
  Object.defineProperty(CastleAllianceMessageToAllDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceMessageToAllDialog.__initialize_static_members = function () {
    CastleAllianceMessageToAllDialog.NAME = "CastleAllianceMessageToAllDialog";
    CastleAllianceMessageToAllDialog.ASSETNAME = "CastleMessageNewMessage2";
  };
  return CastleAllianceMessageToAllDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleAllianceMessageToAllDialog = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleTextScrollComponent = require("gge-module:export_CastleTextScrollComponent");
var __dep_export_CastleStandardOkDialog = require("gge-module:export_CastleStandardOkDialog");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
