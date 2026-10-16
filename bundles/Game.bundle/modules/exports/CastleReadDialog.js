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
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstTextIds = require("gge-module:export_ClientConstTextIds");
var __dep_export_C2SIgnorePlayerVO = require("gge-module:export_C2SIgnorePlayerVO");
var __dep_export_CastleMessageDataEvent = require("gge-module:export_CastleMessageDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTextScrollVO = require("gge-module:export_CastleTextScrollVO");
var __dep_export_CastleDialogConsts = require("gge-module:export_CastleDialogConsts");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastlePlayerInfoDialogProperties = require("gge-module:export_CastlePlayerInfoDialogProperties");
var __dep_export_CastleNewMessageDialogProperties = require("gge-module:export_CastleNewMessageDialogProperties");
var __s0local0 = function (__s1param0) {
  function CastleReadDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleReadDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleReadDialog, __s1param0);
  CastleReadDialog.prototype.initLoaded = function (__s5param0 = null) {
    this._scrollComponent = new __dep_export_CastleTextScrollComponent.CastleTextScrollComponent(new __dep_export_CastleTextScrollVO.CastleTextScrollVO(this.dialogDisp.txt_content, this.dialogDisp.mc_scrollHandle.btn_up, this.dialogDisp.mc_scrollHandle.btn_down, this.dialogDisp.mc_scrollHandle.btn_slider, this.dialogDisp.mc_scrollHandle.mc_sliderLine, [this.dialogDisp.mc_scrollHandle]));
    this._scrollComponent.invisibleOnFit = true;
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this.initBasicButtons([this.dialogDisp.btn_reply, this.dialogDisp.btn_delete, this.dialogDisp.btn_close, this.dialogDisp.btn_cancel, this.dialogDisp.btn_help, this.dialogDisp.btn_player, this.dialogDisp.btn_report, this.dialogDisp.btn_archive, this.dialogDisp.mc_scrollHandle.btn_up, this.dialogDisp.mc_scrollHandle.btn_down, this.dialogDisp.mc_scrollHandle.btn_slider]);
    __s1param0.prototype.initLoaded.call(this);
  };
  CastleReadDialog.prototype.applyPropertiesLoaded = function (__s7param0 = null) {
    this.setBtns();
    this.controller.addEventListener(__dep_export_CastleMessageDataEvent.CastleMessageDataEvent.NEW_MESSAGE_BODY, this.bindFunction(this.displayCurrentMessage));
    this.controller.addEventListener(__dep_export_CastleMessageDataEvent.CastleMessageDataEvent.MESSAGE_ARCHIVED, this.bindFunction(this.onMessageArchived));
    __dep_export_CastleModel.CastleModel.messageData.getBodyForTextMessage(this.readDialogProperties.messageVO.messageID);
  };
  CastleReadDialog.prototype.setBtns = function () {
    this.setDeleteBtn();
    this.setReportBtn();
    this.setArchiveBtn();
  };
  CastleReadDialog.prototype.setDeleteBtn = function () {
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_delete, __dep_export_CastleModel.CastleModel.tutorialData.isTutorialFinished());
    if (this.dialogDisp.btn_delete.enabled) {
      this.dialogDisp.btn_delete.toolTipText = "dialog_inbox_deleteMessage";
    } else {
      this.dialogDisp.btn_delete.toolTipText = __dep_export_ClientConstTextIds.ClientConstTextIds.NOT_AVAILABLE;
    }
  };
  CastleReadDialog.prototype.setReportBtn = function () {
    this.dialogDisp.btn_report.toolTipText = "dialog_inbox_ignore_player_tooltip";
    this.dialogDisp.btn_report.enabled = false;
  };
  CastleReadDialog.prototype.setArchiveBtn = function () {
    if (this.readDialogProperties.messageVO.archived) {
      this.dialogDisp.btn_archive.visible = false;
    } else {
      this.dialogDisp.btn_archive.visible = true;
      this.dialogDisp.btn_archive.gotoAndStop(1);
      if (__dep_export_CastleModel.CastleModel.tutorialData.isInTutorial()) {
        this.dialogDisp.btn_delete.toolTipText = __dep_export_ClientConstTextIds.ClientConstTextIds.NOT_AVAILABLE;
        __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_archive, false);
      } else if (__dep_export_CastleModel.CastleModel.messageData.isArchiveFull()) {
        this.dialogDisp.btn_archive.toolTipText = "dialog_inbox_archiveFull";
        __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_archive, false);
      } else {
        this.dialogDisp.btn_archive.toolTipText = "dialog_inbox_archiveMessage";
        __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_archive, true);
      }
    }
  };
  CastleReadDialog.prototype.setCheckedArchiveBtn = function () {
    this.dialogDisp.btn_archive.gotoAndStop(2);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_archive, false);
    this.dialogDisp.btn_archive.toolTipText = "dialog_inbox_archiveMessagMoved";
  };
  CastleReadDialog.prototype.displayCurrentMessage = function (__s26param0) {
    this.controller.removeEventListener(__dep_export_CastleMessageDataEvent.CastleMessageDataEvent.NEW_MESSAGE_BODY, this.bindFunction(this.displayCurrentMessage));
    this.readDialogProperties.messageVO.body = __dep_exact_9e901e8e2483a22f_1.TextValide.parseChatJSONMessage(__s26param0.params[0]);
    var __s26local0 = this.readDialogProperties.messageVO;
    if (__s26local0.messageType == __dep_exact_26a421b704832cff.MessageConst.MESSAGE_TYPE_USER_OUT) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_from, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_newMessage_messageTo"));
    } else {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_from, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_read_messageFrom"));
    }
    this.textFieldManager.registerTextField(this.dialogDisp.btn_player.txt_sender, new __dep_exact_92d05af59ee2ff30_2.TextVO(__s26local0.senderName)).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_header, new __dep_exact_92d05af59ee2ff30_2.TextVO(__s26local0.subject)).visible = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_content, new __dep_exact_92d05af59ee2ff30_2.TextVO(__s26local0.body)).selectable = true;
    this.dialogDisp.btn_player.properties = __s26local0.playerID;
    this._scrollComponent.scrollToStart();
    this.dialogDisp.icon_allianceLetter.mc1.toolTipText = this.dialogDisp.icon_allianceLetter.mc2.toolTipText = "dialog_inbox_massMessage_tooltip";
    this.dialogDisp.btn_cancel.toolTipText = "generic_btn_cancel";
    var __s26local1 = __dep_export_CastleModel.CastleModel.messageData.getMessageRestrictionVOByMessageType(__dep_exact_26a421b704832cff.MessageConst.MESSAGE_TYPE_USER_OUT);
    var __s26local2 = !!__s26local1 && __s26local1.currentPlayerAmount >= __s26local1.dailyLimit;
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_reply, !__s26local2 && __dep_export_CastleModel.CastleModel.userData.userLevel >= __dep_export_CastleModel.CastleModel.messageData.minLevelForSendingP2PMessages);
    this.dialogDisp.btn_reply.toolTipText = __dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(this.dialogDisp.btn_reply) ? this.isMassUserMessage() ? "dialog_inbox_writeAnswer_massMessage_tooltip" : "dialog_inbox_writeAnswer" : __dep_export_ClientConstTextIds.ClientConstTextIds.NOT_AVAILABLE;
    if (__dep_export_CastleModel.CastleModel.userData.userLevel < __dep_export_CastleModel.CastleModel.messageData.minLevelForSendingP2PMessages) {
      this.dialogDisp.btn_reply.toolTipText = "dialog_inbox_writeNewMessage_blocked_lowLevel_tooltip";
    }
    if (__s26local2) {
      this.dialogDisp.btn_reply.toolTipText = "dialog_inbox_writeNewMessage_blocked_dailyLimit_tooltip";
    }
    this.dialogDisp.btn_reply.visible = this.isSingleUserMessage() || this.isMassUserMessage();
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_report, __s26local0.playerID != __dep_export_CastleModel.CastleModel.userData.playerID && __s26local0.playerID != -1);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_player, __s26local0.playerID != -1);
    this.dialogDisp.btn_report.visible = __s26local0.ignoreAvailable;
    this.dialogDisp.icon_allianceLetter.visible = this.isMassUserMessage();
  };
  CastleReadDialog.prototype.isSingleUserMessage = function () {
    return this.readDialogProperties.messageVO.messageType == __dep_exact_26a421b704832cff.MessageConst.MESSAGE_TYPE_USER_IN;
  };
  CastleReadDialog.prototype.isMassUserMessage = function () {
    return this.readDialogProperties.messageVO.messageType == __dep_exact_26a421b704832cff.MessageConst.MESSAGE_TYPE_ALLIANCE_NEWSLETTER;
  };
  CastleReadDialog.prototype.onMessageArchived = function (__s36param0) {
    if (__dep_exact_f855840627e6e145.int(__s36param0.params[0]) == this.readDialogProperties.messageVO.messageID) {
      this.setCheckedArchiveBtn();
    }
  };
  CastleReadDialog.prototype.onClick = function (__s39param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s39param0.target) && (__s1param0.prototype.onClick.call(this, __s39param0), !__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s39param0.target, "BasicButton") || __s39param0.target.enabled)) {
      switch (__s39param0.target) {
        case this.dialogDisp.btn_reply:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleNewMessageDialog.CastleNewMessageDialog, new __dep_export_CastleNewMessageDialogProperties.CastleNewMessageDialogProperties(this.readDialogProperties.messageVO.senderName, this.readDialogProperties.messageVO.subject));
          this.hide();
          break;
        case this.dialogDisp.btn_delete:
          __dep_export_CastleModel.CastleModel.messageData.deleteMessage(this.readDialogProperties.messageVO);
          this.hide();
          break;
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_cancel:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_message_read_player"));
          break;
        case this.dialogDisp.btn_player:
          if (this.isOutOfTutorial()) {
            __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(__dep_export_CastlePlayerInfoDialog.CastlePlayerInfoDialog, new __dep_export_CastlePlayerInfoDialogProperties.CastlePlayerInfoDialogProperties(__s39param0.target.properties), __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_SINGLE);
          }
          break;
        case this.dialogDisp.btn_report:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStandardYesNoDialog.CastleStandardYesNoDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardYesNoDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("dialog_inbox_ignore_player_tooltip"), __dep_exact_92d05af59ee2ff30.Localize.text("dialog_inbox_ignore_player_copy"), this.bindFunction(this.onIgnoreConfirmed)));
          break;
        case this.dialogDisp.btn_archive:
          this.onClickedArchiveBtn();
      }
    }
  };
  CastleReadDialog.prototype.onClickedArchiveBtn = function () {
    if (!this.readDialogProperties.messageVO.archived) {
      __dep_export_CastleModel.CastleModel.messageData.archiveMessage(this.readDialogProperties.messageVO);
    }
  };
  CastleReadDialog.prototype.onIgnoreConfirmed = function (__s47param0 = null) {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SIgnorePlayerVO.C2SIgnorePlayerVO(this.readDialogProperties.messageVO.playerID, true));
    this.hide();
  };
  CastleReadDialog.prototype.showLoaded = function (__s49param0 = null) {
    this._scrollComponent.onShow();
    __s1param0.prototype.showLoaded.call(this);
  };
  CastleReadDialog.prototype.hideLoaded = function (__s51param0 = null) {
    this.controller.removeEventListener(__dep_export_CastleMessageDataEvent.CastleMessageDataEvent.NEW_MESSAGE_BODY, this.bindFunction(this.displayCurrentMessage));
    this.controller.removeEventListener(__dep_export_CastleMessageDataEvent.CastleMessageDataEvent.MESSAGE_ARCHIVED, this.bindFunction(this.onMessageArchived));
    this._scrollComponent.onHide();
    __s1param0.prototype.hideLoaded.call(this);
  };
  Object.defineProperty(CastleReadDialog.prototype, "readDialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleReadDialog.__initialize_static_members = function () {
    CastleReadDialog.NAME = "CastleReadMessageEx";
  };
  return CastleReadDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleReadDialog = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleTextScrollComponent = require("gge-module:export_CastleTextScrollComponent");
var __dep_export_CastleStandardYesNoDialog = require("gge-module:export_CastleStandardYesNoDialog");
var __dep_export_CastlePlayerInfoDialog = require("gge-module:export_CastlePlayerInfoDialog");
var __dep_export_CastleNewMessageDialog = require("gge-module:export_CastleNewMessageDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
