Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_C2SDeleteMessagesVO = require("gge-module:export_C2SDeleteMessagesVO");
var __dep_export_CastleMessageDataEvent = require("gge-module:export_CastleMessageDataEvent");
var __dep_export_CastleXPChangedEvent = require("gge-module:export_CastleXPChangedEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_CastleInboxMessageCountDisplay = require("gge-module:export_CastleInboxMessageCountDisplay");
var __dep_export_CastleGGSVerticalAlign = require("gge-module:export_CastleGGSVerticalAlign");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleMessageInboxDialog() {
    var __s3local0 = this;
    __s3local0._currentMessageCategory = -1;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, CastleMessageInboxDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleMessageInboxDialog, __s1param0);
  CastleMessageInboxDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_cancel, this.dialogDisp.btn_help, this.dialogDisp.btn_ignore]);
    __dep_export_ButtonHelper.ButtonHelper.initTwoStateButtons([this.dialogDisp.btn_all, this.dialogDisp.btn_player, this.dialogDisp.btn_battleAndSpyReports, this.dialogDisp.btn_battleAndSpyReportsSent, this.dialogDisp.btn_sent, this.dialogDisp.btn_archive, this.dialogDisp.btn_offer]);
    __dep_export_ButtonHelper.ButtonHelper.initButton(this.dialogDisp.category_message.btn_deleteAll, 1, __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    __dep_export_ButtonHelper.ButtonHelper.initButton(this.dialogDisp.category_message.btn_deleteAll_overview, 1, __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    this._subLayer = new Map();
    this._subLayer.set(__dep_export_ClientConstCastle.ClientConstCastle.INBOX_CATEGORY_TYPED_MAIL, new __dep_export_CastleAllMessagesWithoutArchiveList.CastleAllMessagesWithoutArchiveList(this.dialogDisp.category_message));
    this._subLayer.set(__dep_export_ClientConstCastle.ClientConstCastle.INBOX_CATEGORY_PLAYER_MAIL, new __dep_export_CastleImportantMessagesList.CastleImportantMessagesList(this.dialogDisp.category_message, new __dep_export_CastleInboxMessageCountDisplay.CastleInboxMessageCountDisplay(this.dialogDisp.category_message.mc_statusbar, 2, "dialog_inbox_inboxCapacity", "dialog_inbox_inboxFull"), __dep_exact_26a421b704832cff.MessageConst.MAX_MAILBOX_SIZE));
    this._subLayer.set(__dep_export_ClientConstCastle.ClientConstCastle.INBOX_CATEGORY_BATTLE_AND_SPY_REPORTS, new __dep_export_CastleTypedInboxBattleAndSpyMessagesList.CastleTypedInboxBattleAndSpyMessagesList(this.dialogDisp.category_message, false, new __dep_export_CastleInboxMessageCountDisplay.CastleInboxMessageCountDisplay(this.dialogDisp.category_message.mc_statusbar, 3, "dialog_inbox_inboxCapacity", "dialog_inbox_inboxFull"), __dep_exact_26a421b704832cff.MessageConst.MAX_MAILBOX_BATTLE_AND_SPY_REPORTS));
    this._subLayer.set(__dep_export_ClientConstCastle.ClientConstCastle.INBOX_CATEGORY_OFFER, new __dep_export_CastleTypedInboxOffer.CastleTypedInboxOffer(this.dialogDisp.category_message, new __dep_export_CastleInboxMessageCountDisplay.CastleInboxMessageCountDisplay(this.dialogDisp.category_message.mc_statusbar, 1, "dialog_inbox_inboxCapacity", "dialog_inbox_inboxFull"), __dep_exact_26a421b704832cff.MessageConst.MAX_MAILBOX_SPECIAL_OFFERS_SIZE));
    this._subLayer.set(__dep_export_ClientConstCastle.ClientConstCastle.INBOX_CATEGORY_BATTLE_AND_SPY_REPORTS_FORWARDED, new __dep_export_CastleTypedInboxBattleAndSpyMessagesList.CastleTypedInboxBattleAndSpyMessagesList(this.dialogDisp.category_message, true, new __dep_export_CastleInboxMessageCountDisplay.CastleInboxMessageCountDisplay(this.dialogDisp.category_message.mc_statusbar, 4, "dialog_inbox_inboxCapacity", "dialog_inbox_inboxFull"), __dep_exact_26a421b704832cff.MessageConst.MAX_MAILBOX_BATTLE_AND_SPY_REPORTS_FORWARDED));
    this._subLayer.set(__dep_export_ClientConstCastle.ClientConstCastle.MESSAGE_CATEGORY_OUTBOX, new __dep_export_CastleTypedInboxMessageList.CastleTypedInboxMessageList(this.dialogDisp.category_message, new __dep_export_CastleInboxMessageCountDisplay.CastleInboxMessageCountDisplay(this.dialogDisp.category_message.mc_statusbar, 2, "dialog_inbox_outboxCapacity", "dialog_inbox_inboxFull"), __dep_exact_26a421b704832cff.MessageConst.MAX_MAILBOX_OUTBOX_SIZE));
    this._subLayer.set(__dep_export_ClientConstCastle.ClientConstCastle.INBOX_CATEGORY_FLAGGED_MAIL, new __dep_export_CastleFlaggedInboxMessageList.CastleFlaggedInboxMessageList(this.dialogDisp.category_message, new __dep_export_CastleInboxMessageCountDisplay.CastleInboxMessageCountDisplay(this.dialogDisp.category_message.mc_statusbar, 2, "dialog_inbox_archiveCapacity", "dialog_inbox_archiveFull"), __dep_exact_26a421b704832cff.MessageConst.MAX_MAILBOX_ARCHIVE_SIZE));
    this.itxt_title = this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_inbox_title"));
    this.itxt_title.autoFitToBounds = true;
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    if (this._currentMessageCategory < 0) {
      if (this.displayBattleLogTabInTutorial() && __dep_export_CastleModel.CastleModel.tutorialData.isInTutorial()) {
        this._currentMessageCategory = CastleMessageInboxDialog.MESSAGE_CATEGORY_BATTLE_AND_SPY_REPORT;
      } else {
        this._currentMessageCategory = CastleMessageInboxDialog.MESSAGE_CATEGORY_INBOX;
      }
    }
    this.changeMessageCategory(this._currentMessageCategory);
    this.onXPChanged();
  };
  CastleMessageInboxDialog.prototype.displayBattleLogTabInTutorial = function () {
    return true;
  };
  CastleMessageInboxDialog.prototype.showLoaded = function (__s12param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s12param0);
    this.controller.addEventListener(__dep_export_CastleMessageDataEvent.CastleMessageDataEvent.UPDATE_MESSAGELIST, this.bindFunction(this.onUpdateMessageCounters));
    this.controller.addEventListener(__dep_export_CastleXPChangedEvent.CastleXPChangedEvent.CHANGE_USER_XP, this.bindFunction(this.onXPChanged));
    this.controller.addEventListener(__dep_export_CastleMessageDataEvent.CastleMessageDataEvent.MESSAGE_RESTRICTIONS_UPDATED, this.bindFunction(this.updateRestrictions));
  };
  CastleMessageInboxDialog.prototype.hideLoaded = function (__s14param0 = null) {
    this.controller.removeEventListener(__dep_export_CastleMessageDataEvent.CastleMessageDataEvent.UPDATE_MESSAGELIST, this.bindFunction(this.onUpdateMessageCounters));
    this.controller.removeEventListener(__dep_export_CastleXPChangedEvent.CastleXPChangedEvent.CHANGE_USER_XP, this.bindFunction(this.onXPChanged));
    this.controller.removeEventListener(__dep_export_CastleMessageDataEvent.CastleMessageDataEvent.MESSAGE_RESTRICTIONS_UPDATED, this.bindFunction(this.updateRestrictions));
    __s1param0.prototype.hideLoaded.call(this, __s14param0);
  };
  CastleMessageInboxDialog.prototype.onXPChanged = function (__s16param0 = null) {
    if (__dep_export_CastleModel.CastleModel.tutorialData.isTutorialFinished()) {
      this.changeMessageCategory(CastleMessageInboxDialog.MESSAGE_CATEGORY_INBOX);
      this.controller.removeEventListener(__dep_export_CastleXPChangedEvent.CastleXPChangedEvent.CHANGE_USER_XP, this.bindFunction(this.onXPChanged));
    }
  };
  CastleMessageInboxDialog.prototype.onUpdateMessageCounters = function (__s19param0) {
    this._subLayer.get(__dep_export_ClientConstCastle.ClientConstCastle.INBOX_CATEGORY_TYPED_MAIL).updateTabMessageCounter(this.dialogDisp.btn_all.mc_counter, this.dialogDisp.btn_all.mc_counter.txt_label);
    this._subLayer.get(__dep_export_ClientConstCastle.ClientConstCastle.INBOX_CATEGORY_PLAYER_MAIL).updateTabMessageCounter(this.dialogDisp.btn_player.mc_counter, this.dialogDisp.btn_player.mc_counter.txt_label);
    this._subLayer.get(__dep_export_ClientConstCastle.ClientConstCastle.INBOX_CATEGORY_BATTLE_AND_SPY_REPORTS).updateTabMessageCounter(this.dialogDisp.btn_battleAndSpyReports.mc_counter, this.dialogDisp.btn_battleAndSpyReports.mc_counter.txt_label);
    this._subLayer.get(__dep_export_ClientConstCastle.ClientConstCastle.INBOX_CATEGORY_BATTLE_AND_SPY_REPORTS_FORWARDED).updateTabMessageCounter(this.dialogDisp.btn_battleAndSpyReportsSent.mc_counter, this.dialogDisp.btn_battleAndSpyReportsSent.mc_counter.txt_label);
    this._subLayer.get(__dep_export_ClientConstCastle.ClientConstCastle.INBOX_CATEGORY_FLAGGED_MAIL).updateTabMessageCounter(this.dialogDisp.btn_archive.mc_counter, this.dialogDisp.btn_archive.mc_counter.txt_label);
    this._subLayer.get(__dep_export_ClientConstCastle.ClientConstCastle.INBOX_CATEGORY_OFFER).updateTabMessageCounter(this.dialogDisp.btn_offer.mc_counter, this.dialogDisp.btn_offer.mc_counter.txt_label);
    this.updateDeleteAllButton();
  };
  CastleMessageInboxDialog.prototype.updateRestrictions = function (__s21param0) {
    this._currentSublayer.updateRestrictions();
  };
  CastleMessageInboxDialog.prototype.applyPropertiesLoaded = function (__s23param0 = null) {
    this.itxt_title.textContentVO.textId = "dialog_inbox_title";
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this.dialogDisp.btn_all.toolTipText = "dialog_inbox_showAllMessages";
    this.dialogDisp.btn_player.toolTipText = "dialog_inbox_showplayerAndSystem";
    this.dialogDisp.btn_battleAndSpyReports.toolTipText = "dialog_inbox_showBattleSpyReports";
    this.dialogDisp.btn_battleAndSpyReportsSent.toolTipText = "dialog_inbox_showForwardedReports";
    this.dialogDisp.btn_sent.toolTipText = "dialog_inbox_showOutbox";
    this.dialogDisp.btn_archive.toolTipText = "dialog_inbox_showArchive";
    this.dialogDisp.btn_ignore.toolTipText = "dialog_inbox_showIgnoreList";
    this.dialogDisp.btn_offer.toolTipText = "dialog_inbox_showSpecialOffers";
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_help, true);
    this.changeMessageCategory(this._currentMessageCategory);
    this.updateCategoryButtons();
  };
  CastleMessageInboxDialog.prototype.updateCategoryButtons = function () {
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_all, true);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_sent, true);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_player, true);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_archive, true);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_battleAndSpyReports, true);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_battleAndSpyReportsSent, true);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_offer, true);
    this.dialogDisp.btn_ignore.visible = this._currentMessageCategory == CastleMessageInboxDialog.MESSAGE_CATEGORY_INBOX;
    __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.dialogDisp.btn_all, this._currentMessageCategory == CastleMessageInboxDialog.MESSAGE_CATEGORY_INBOX);
    __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.dialogDisp.btn_sent, this._currentMessageCategory == CastleMessageInboxDialog.MESSAGE_CATEGORY_OUTBOX);
    __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.dialogDisp.btn_player, this._currentMessageCategory == CastleMessageInboxDialog.MESSAGE_CATEGORY_PLAYER);
    __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.dialogDisp.btn_archive, this._currentMessageCategory == CastleMessageInboxDialog.MESSAGE_CATEGORY_ARCHIVED);
    __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.dialogDisp.btn_offer, this._currentMessageCategory == CastleMessageInboxDialog.MESSAGE_CATEGORY_OFFER);
    __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.dialogDisp.btn_battleAndSpyReports, this._currentMessageCategory == CastleMessageInboxDialog.MESSAGE_CATEGORY_BATTLE_AND_SPY_REPORT);
    __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.dialogDisp.btn_battleAndSpyReportsSent, this._currentMessageCategory == CastleMessageInboxDialog.MESSAGE_CATEGORY_BATTLE_AND_SPY_REPORT_FORWARDED);
    this.onUpdateMessageCounters(null);
  };
  CastleMessageInboxDialog.prototype.onClick = function (__s27param0) {
    __s1param0.prototype.onClick.call(this, __s27param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s27param0.target)) {
      switch (__s27param0.target) {
        case this.dialogDisp.btn_all:
          this.changeMessageCategory(CastleMessageInboxDialog.MESSAGE_CATEGORY_INBOX);
          break;
        case this.dialogDisp.btn_player:
          this.changeMessageCategory(CastleMessageInboxDialog.MESSAGE_CATEGORY_PLAYER);
          break;
        case this.dialogDisp.btn_battleAndSpyReports:
          this.changeMessageCategory(CastleMessageInboxDialog.MESSAGE_CATEGORY_BATTLE_AND_SPY_REPORT);
          break;
        case this.dialogDisp.btn_battleAndSpyReportsSent:
          this.changeMessageCategory(CastleMessageInboxDialog.MESSAGE_CATEGORY_BATTLE_AND_SPY_REPORT_FORWARDED);
          break;
        case this.dialogDisp.btn_sent:
          this.changeMessageCategory(CastleMessageInboxDialog.MESSAGE_CATEGORY_OUTBOX);
          break;
        case this.dialogDisp.btn_archive:
          this.changeMessageCategory(CastleMessageInboxDialog.MESSAGE_CATEGORY_ARCHIVED);
          break;
        case this.dialogDisp.btn_offer:
          this.changeMessageCategory(CastleMessageInboxDialog.MESSAGE_CATEGORY_OFFER);
          break;
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_cancel:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          this.onBtnHelp();
          break;
        case this.dialogDisp.btn_ignore:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_PlayerIgnoreListDialog.PlayerIgnoreListDialog);
          break;
        case this.dialogDisp.category_message.btn_deleteAll:
        case this.dialogDisp.category_message.btn_deleteAll_overview:
          this.onClickDeleteAll();
      }
    }
  };
  CastleMessageInboxDialog.prototype.onBtnHelp = function () {
    if (this._currentMessageCategory == CastleMessageInboxDialog.MESSAGE_CATEGORY_ARCHIVED) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_archive_01", [__dep_exact_26a421b704832cff.MessageConst.MAX_MAILBOX_ARCHIVE_SIZE]));
    } else {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_messages"));
    }
  };
  CastleMessageInboxDialog.prototype.changeMessageCategory = function (__s35param0) {
    this._currentMessageCategory = __s35param0;
    if (__s35param0 == CastleMessageInboxDialog.MESSAGE_CATEGORY_ARCHIVED) {
      this.itxt_title.textContentVO.textId = "dialog_inbox_showArchive";
      this.changeCategory(__dep_export_ClientConstCastle.ClientConstCastle.INBOX_CATEGORY_FLAGGED_MAIL);
      this.showSublayer(this._subLayer.get(__dep_export_ClientConstCastle.ClientConstCastle.INBOX_CATEGORY_FLAGGED_MAIL), []);
    } else if (__s35param0 == CastleMessageInboxDialog.MESSAGE_CATEGORY_OUTBOX) {
      this.itxt_title.textContentVO.textId = "dialog_inbox_showOutbox";
      this.changeCategory(__dep_export_ClientConstCastle.ClientConstCastle.INBOX_CATEGORY_TYPED_MAIL);
      this.showSublayer(this._subLayer.get(__dep_export_ClientConstCastle.ClientConstCastle.MESSAGE_CATEGORY_OUTBOX), [this._currentMessageCategory]);
    } else if (__s35param0 == CastleMessageInboxDialog.MESSAGE_CATEGORY_PLAYER) {
      this.itxt_title.textContentVO.textId = "dialog_inbox_showplayerAndSystem";
      this.changeCategory(__dep_export_ClientConstCastle.ClientConstCastle.INBOX_CATEGORY_TYPED_MAIL);
      this.showSublayer(this._subLayer.get(__dep_export_ClientConstCastle.ClientConstCastle.INBOX_CATEGORY_PLAYER_MAIL), [this._currentMessageCategory]);
    } else if (__s35param0 == CastleMessageInboxDialog.MESSAGE_CATEGORY_BATTLE_AND_SPY_REPORT) {
      this.itxt_title.textContentVO.textId = "dialog_inbox_showBattleSpyReports";
      this.changeCategory(__dep_export_ClientConstCastle.ClientConstCastle.INBOX_CATEGORY_BATTLE_AND_SPY_REPORTS);
      this.showSublayer(this._subLayer.get(__dep_export_ClientConstCastle.ClientConstCastle.INBOX_CATEGORY_BATTLE_AND_SPY_REPORTS), [this._currentMessageCategory]);
    } else if (__s35param0 == CastleMessageInboxDialog.MESSAGE_CATEGORY_OFFER) {
      this.itxt_title.textContentVO.textId = "dialog_inbox_showSpecialOffers";
      this.changeCategory(__dep_export_ClientConstCastle.ClientConstCastle.INBOX_CATEGORY_OFFER);
      this.showSublayer(this._subLayer.get(__dep_export_ClientConstCastle.ClientConstCastle.INBOX_CATEGORY_OFFER), [this._currentMessageCategory]);
    } else if (__s35param0 == CastleMessageInboxDialog.MESSAGE_CATEGORY_BATTLE_AND_SPY_REPORT_FORWARDED) {
      this.itxt_title.textContentVO.textId = "dialog_inbox_forwardedReports_title";
      this.changeCategory(__dep_export_ClientConstCastle.ClientConstCastle.INBOX_CATEGORY_BATTLE_AND_SPY_REPORTS_FORWARDED);
      this.showSublayer(this._subLayer.get(__dep_export_ClientConstCastle.ClientConstCastle.INBOX_CATEGORY_BATTLE_AND_SPY_REPORTS_FORWARDED), [this._currentMessageCategory]);
    } else {
      this.itxt_title.textContentVO.textId = "dialog_inbox_showAllMessages";
      this.changeCategory(__dep_export_ClientConstCastle.ClientConstCastle.INBOX_CATEGORY_TYPED_MAIL);
      this.showSublayer(this._subLayer.get(__dep_export_ClientConstCastle.ClientConstCastle.INBOX_CATEGORY_TYPED_MAIL), [this._currentMessageCategory]);
    }
    this.itxt_title.verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this.updateCategoryButtons();
    this.updateDeleteAllButton();
  };
  CastleMessageInboxDialog.prototype.updateDeleteAllButton = function () {
    var __s44local0 = this.getCurrentSublayer();
    this.dialogDisp.category_message.btn_deleteAll.visible = __s44local0.deleteButtonVisible;
    this.dialogDisp.category_message.btn_deleteAll_overview.visible = __s44local0.deleteButtonOverviewVisible;
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.category_message.btn_deleteAll, this.deletableMessagesAmount > 0);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.category_message.btn_deleteAll_overview, __s44local0.getMessageCount() > 0);
    this.dialogDisp.category_message.btn_deleteAll.toolTipText = __s44local0.getMessageCount() > 0 ? __s44local0.deleteButtonToolTipText : "noMessages";
    this.dialogDisp.category_message.btn_deleteAll_overview.toolTipText = __s44local0.getMessageCount() > 0 ? __s44local0.deleteButtonToolTipText : "noMessages";
  };
  CastleMessageInboxDialog.prototype.onClickDeleteAll = function () {
    var __s46local0 = "";
    var __s46local1 = this.getCurrentSublayer();
    var __s46local2 = __s46local1.getMessageCount();
    var __s46local3 = __s46local1.allMessageIDs;
    if (this._currentMessageCategory == CastleMessageInboxDialog.MESSAGE_CATEGORY_ARCHIVED) {
      __s46local0 = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_inbox_deleteMessageAll_popup_archived_desc", [__s46local2]);
    } else if (this._currentMessageCategory == CastleMessageInboxDialog.MESSAGE_CATEGORY_OUTBOX) {
      __s46local0 = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_inbox_deleteMessageAll_popup_sent_desc", [__s46local2]);
    } else if (this._currentMessageCategory == CastleMessageInboxDialog.MESSAGE_CATEGORY_PLAYER) {
      __s46local0 = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_inbox_deleteMessageAll_popup_playerAndSystem_desc", [__s46local2]);
    } else if (this._currentMessageCategory == CastleMessageInboxDialog.MESSAGE_CATEGORY_BATTLE_AND_SPY_REPORT) {
      __s46local0 = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_inbox_deleteMessageAll_popup_battleLogs_desc", [__s46local2]);
    } else if (this._currentMessageCategory == CastleMessageInboxDialog.MESSAGE_CATEGORY_OFFER) {
      var __s46local4 = [];
      for (var __s46local5 = 0; __s46local5 < __s46local3.length; __s46local5++) {
        if (__dep_exact_81dacdf05bd32292.instanceOfClass(__dep_export_CastleModel.CastleModel.messageData.getMessageVOById(__s46local3[__s46local5]), "MessagePrivateOfferVO")) {
          if (!__dep_export_CastleModel.CastleModel.messageData.getMessageVOById(__s46local3[__s46local5]).isOfferActive()) {
            __s46local4.push(__s46local3[__s46local5]);
          }
        } else {
          __s46local4.push(__s46local3[__s46local5]);
        }
      }
      __s46local3 = __s46local4;
      __s46local2 = __s46local4.length;
      __s46local0 = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_inbox_deleteMessageAll_popup_offers_desc", [__s46local2]);
    } else {
      __s46local0 = this._currentMessageCategory == CastleMessageInboxDialog.MESSAGE_CATEGORY_BATTLE_AND_SPY_REPORT_FORWARDED ? __dep_exact_92d05af59ee2ff30.Localize.text("dialog_inbox_deleteMessageAll_popup_battleLogsForwarded_desc", [__s46local2]) : __dep_exact_92d05af59ee2ff30.Localize.text("dialog_inbox_deleteMessageAll_popup_received_desc", [__s46local2]);
    }
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_ConfirmDeleteAllMessagesDialog.ConfirmDeleteAllMessagesDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardYesNoDialogProperties("", __s46local0, function () {
      __dep_exact_9e901e8e2483a22f.BasicModel.smartfoxClient.sendCommandVO(new __dep_export_C2SDeleteMessagesVO.C2SDeleteMessagesVO(__s46local3));
    }));
  };
  Object.defineProperty(CastleMessageInboxDialog.prototype, "deletableMessagesAmount", {
    get: function () {
      var __s61local0 = this.getCurrentSublayer();
      var __s61local1 = __s61local0.allMessageIDs;
      if (this._currentMessageCategory == CastleMessageInboxDialog.MESSAGE_CATEGORY_OFFER) {
        var __s61local2 = [];
        for (var __s61local3 = 0; __s61local3 < __s61local1.length; __s61local3++) {
          if (!__dep_exact_81dacdf05bd32292.instanceOfClass(__dep_export_CastleModel.CastleModel.messageData.getMessageVOById(__s61local1[__s61local3]), "MessagePrivateOfferVO") || !__dep_export_CastleModel.CastleModel.messageData.getMessageVOById(__s61local1[__s61local3]).isOfferActive()) {
            __s61local2.push(__s61local1[__s61local3]);
          }
        }
        return __s61local2.length;
      }
      return __s61local0.getMessageCount();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMessageInboxDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleMessageInboxDialog.prototype.getCurrentSublayer = function () {
    return this._currentSublayer;
  };
  CastleMessageInboxDialog.NAME = "CastleMessageInboxEx2";
  CastleMessageInboxDialog.MESSAGE_CATEGORY_INBOX = 0;
  CastleMessageInboxDialog.MESSAGE_CATEGORY_OUTBOX = 1;
  CastleMessageInboxDialog.MESSAGE_CATEGORY_PLAYER = 2;
  CastleMessageInboxDialog.MESSAGE_CATEGORY_OFFER = 3;
  CastleMessageInboxDialog.MESSAGE_CATEGORY_ARCHIVED = 9;
  CastleMessageInboxDialog.MESSAGE_CATEGORY_BATTLE_AND_SPY_REPORT = 5;
  CastleMessageInboxDialog.MESSAGE_CATEGORY_BATTLE_AND_SPY_REPORT_FORWARDED = 6;
  return CastleMessageInboxDialog;
}(require("gge-module:export_CastleExternalSubLayerDialog").CastleExternalSubLayerDialog);
exports.CastleMessageInboxDialog = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleAllMessagesWithoutArchiveList = require("gge-module:export_CastleAllMessagesWithoutArchiveList");
var __dep_export_CastleFlaggedInboxMessageList = require("gge-module:export_CastleFlaggedInboxMessageList");
var __dep_export_CastleImportantMessagesList = require("gge-module:export_CastleImportantMessagesList");
var __dep_export_CastleTypedInboxBattleAndSpyMessagesList = require("gge-module:export_CastleTypedInboxBattleAndSpyMessagesList");
var __dep_export_CastleTypedInboxMessageList = require("gge-module:export_CastleTypedInboxMessageList");
var __dep_export_ConfirmDeleteAllMessagesDialog = require("gge-module:export_ConfirmDeleteAllMessagesDialog");
var __dep_export_PlayerIgnoreListDialog = require("gge-module:export_PlayerIgnoreListDialog");
var __dep_export_CastleTypedInboxOffer = require("gge-module:export_CastleTypedInboxOffer");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
