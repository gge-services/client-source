Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_AbstractMethodError = require("gge-module:export_AbstractMethodError");
var __dep_export_CastleMessageDataEvent = require("gge-module:export_CastleMessageDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleDialogSubLayer = require("gge-module:export_CastleDialogSubLayer");
var __dep_export_CastleNewMessageDialogProperties = require("gge-module:export_CastleNewMessageDialogProperties");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function (__s1param0) {
  function ACastleBaseInboxMessageList(__s3param0, __s3param1 = null, __s3param2 = 0) {
    var __s3local0 = this;
    __s3local0._currentPage = 0;
    __s3local0._maxPage = 0;
    __s3local0._currentCategory = 0;
    __s3local0._maxMessages = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this)._messageCountDisplay = __s3param1;
    __s3local0._maxMessages = __s3param2;
    if (!__dep_export_ButtonHelper.ButtonHelper.hasBasicButton(__s3local0.dialogDisp.btn_arrow_up) && !__dep_export_ButtonHelper.ButtonHelper.hasBasicButton(__s3local0.dialogDisp.btn_arrow_down)) {
      __dep_export_ButtonHelper.ButtonHelper.initSmallButtons([__s3local0.dialogDisp.btn_arrow_up, __s3local0.dialogDisp.btn_arrow_down]);
    }
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ACastleBaseInboxMessageList, __s1param0);
  ACastleBaseInboxMessageList.prototype.show = function (__s6param0) {
    __s1param0.prototype.show.call(this, __s6param0);
    if (this._messageCountDisplay == null) {
      this.dialogDisp.mc_statusbar.visible = false;
    }
    this._currentCategory = __dep_exact_f855840627e6e145.int(__s6param0[0]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_date, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_inbox_date"), new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_topic, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_inbox_topic"), new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_sender, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_inbox_sender"), new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
    if (!__dep_export_ButtonHelper.ButtonHelper.hasBasicButton(this.dialogDisp.btn_new_message)) {
      __dep_export_ButtonHelper.ButtonHelper.initBasicButton(this.dialogDisp.btn_new_message);
    }
    this.updateRestrictions();
    this.controller.addEventListener(__dep_export_CastleMessageDataEvent.CastleMessageDataEvent.UPDATE_MESSAGELIST, this.bindFunction(this.showMessageHeaders));
    this.dialogDisp.btn_arrow_up.visible = false;
    this.dialogDisp.btn_arrow_down.visible = false;
    this.showMessageHeaders();
    this.dialogDisp.parent.addEventListener(__s0local0.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel_0));
  };
  ACastleBaseInboxMessageList.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    this.removeMessageItems();
    this.controller.removeEventListener(__dep_export_CastleMessageDataEvent.CastleMessageDataEvent.UPDATE_MESSAGELIST, this.bindFunction(this.showMessageHeaders));
    this.dialogDisp.parent.removeEventListener(__s0local0.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel_0));
  };
  ACastleBaseInboxMessageList.prototype.updateRestrictions = function () {
    var __s12local0 = __dep_export_CastleModel.CastleModel.messageData.getMessageRestrictionVOByMessageType(__dep_exact_26a421b704832cff.MessageConst.MESSAGE_TYPE_USER_OUT);
    var __s12local1 = !!__s12local0 && __s12local0.currentPlayerAmount >= __s12local0.dailyLimit;
    var __s12local2 = !__dep_export_CastleModel.CastleModel.tutorialData.isTutorialFinished();
    var __s12local3 = __dep_export_CastleModel.CastleModel.userData.userLevel < __dep_export_CastleModel.CastleModel.messageData.minLevelForSendingP2PMessages;
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_new_message, !__s12local1 && !__s12local2 && !__s12local3);
    this.dialogDisp.btn_new_message.toolTipText = __s12local3 ? "dialog_inbox_writeNewMessage_blocked_lowLevel_tooltip" : __s12local1 ? "dialog_inbox_writeNewMessage_blocked_dailyLimit_tooltip" : "dialog_inbox_writeNewMessage";
  };
  ACastleBaseInboxMessageList.prototype.showMessageHeaders = function (__s14param0 = null) {
    this.removeMessageItems();
    var __s14local0 = this.getMessageCount();
    this.updatePageArrows(__s14local0);
    this._currentMails = this.getMessages(this._currentPage, this._currentCategory);
    this.updateMessageCountDisplay(__s14local0);
    if (this._currentMails) {
      for (var __s14local1 = 0; __s14local1 < this._currentMails.length; __s14local1++) {
        var __s14local2 = this._currentMails[__s14local1];
        var __s14local3 = this.createMessageItem(__s14local1);
        __s14local3.setItem(__s14local2, __s14local1);
        this.dialogDisp.addChild(__s14local3.disp);
      }
    }
  };
  ACastleBaseInboxMessageList.prototype.updateMessageCountDisplay = function (__s19param0 = -1) {
    if (this._messageCountDisplay) {
      if (__s19param0 < 0) {
        __s19param0 = this.getMessageCount();
      }
      this._messageCountDisplay.update(__s19param0, this._maxMessages);
    }
  };
  ACastleBaseInboxMessageList.prototype.updateTabMessageCounter = function (__s23param0, __s23param1, __s23param2 = -1, __s23param3 = false) {
    __s23param0.visible = __s23param2 > 0 || __s23param3;
    this.textFieldManager.registerTextField(__s23param1, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__s23param2));
  };
  ACastleBaseInboxMessageList.prototype.updatePageArrows = function (__s25param0) {
    this._maxPage = __dep_exact_f855840627e6e145.int((__s25param0 - 1) / __dep_exact_26a421b704832cff.MessageConst.MESSAGES_PER_PAGE);
    this.checkForEmptyPage();
    this.dialogDisp.btn_arrow_down.visible = this._maxPage > 0 && this._currentPage < this._maxPage;
    this.dialogDisp.btn_arrow_up.visible = this._maxPage > 0 && this._currentPage > 0;
  };
  ACastleBaseInboxMessageList.prototype.checkForEmptyPage = function () {
    if (this._currentPage > this._maxPage) {
      var __s27local0 = this._currentPage;
      this._currentPage = __dep_exact_f855840627e6e145.int(Math.max(0, this._currentPage - 1));
      if (__s27local0 != this._currentPage) {
        this.showMessageHeaders();
      }
    }
  };
  ACastleBaseInboxMessageList.prototype.onMouseUp = function (__s31param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s31param0.target)) {
      switch (__s31param0.target) {
        case this.dialogDisp.btn_arrow_up:
        case this.dialogDisp.btn_arrow_down:
          this.onClickArrow(__s31param0);
          break;
        case this.dialogDisp.btn_new_message:
          if (__dep_export_CastleModel.CastleModel.tutorialData.isTutorialFinished()) {
            __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleNewMessageDialog.CastleNewMessageDialog, new __dep_export_CastleNewMessageDialogProperties.CastleNewMessageDialogProperties());
          }
          break;
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_cancel:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_messages"));
      }
    }
  };
  ACastleBaseInboxMessageList.prototype.createMessageItem = function (__s36param0) {
    if (this._messageItems.length > __s36param0) {
      return this._messageItems[__s36param0];
    }
    var __s36local0 = new __dep_export_CastleHeaderMessageItem.CastleHeaderMessageItem();
    this._messageItems.push(__s36local0);
    return __s36local0;
  };
  ACastleBaseInboxMessageList.prototype.removeMessageItems = function () {
    if (this._messageItems && this._messageItems.length > 0) {
      for (var __s39local0 = 0; __s39local0 < this._messageItems.length; __s39local0++) {
        this._messageItems[__s39local0].remove();
        if (this.dialogDisp.contains(this._messageItems[__s39local0].disp)) {
          this.dialogDisp.removeChild(this._messageItems[__s39local0].disp);
        }
      }
    } else {
      this._messageItems = [];
    }
  };
  ACastleBaseInboxMessageList.prototype.onClickArrow = function (__s46param0) {
    var __s46local0 = this._currentPage;
    if (__s46param0.target == this.dialogDisp.btn_arrow_up) {
      this._currentPage = __dep_exact_f855840627e6e145.int(Math.max(0, this._currentPage - 1));
    } else {
      this._currentPage = __dep_exact_f855840627e6e145.int(Math.min(this._maxPage, this._currentPage + 1));
    }
    if (__s46local0 != this._currentPage) {
      this.showMessageHeaders();
    }
  };
  ACastleBaseInboxMessageList.prototype.onMouseWheel_0 = function (__s51param0) {
    var __s51local0 = this._currentPage;
    if (__s51param0.delta < 0) {
      this._currentPage = __dep_exact_f855840627e6e145.int(Math.max(0, this._currentPage - 1));
    } else if (__s51param0.delta > 0) {
      this._currentPage = __dep_exact_f855840627e6e145.int(Math.min(this._maxPage, this._currentPage + 1));
    }
    if (__s51local0 != this._currentPage) {
      this.showMessageHeaders();
    }
  };
  Object.defineProperty(ACastleBaseInboxMessageList.prototype, "deleteButtonVisible", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACastleBaseInboxMessageList.prototype, "deleteButtonOverviewVisible", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACastleBaseInboxMessageList.prototype, "deleteButtonToolTipText", {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true
  });
  ACastleBaseInboxMessageList.prototype.getMessages = function (__s62param0, __s62param1) {
    throw new __dep_export_AbstractMethodError.AbstractMethodError();
  };
  ACastleBaseInboxMessageList.prototype.getMessageCount = function () {
    throw new __dep_export_AbstractMethodError.AbstractMethodError();
  };
  Object.defineProperty(ACastleBaseInboxMessageList.prototype, "allMessageIDs", {
    get: function () {
      var __s66local0 = [];
      for (var __s66local1 = 0; __s66local1 < this.getMessageCount(); __s66local1++) {
        __s66local0.push(this.getMessages(-1, this._currentCategory)[__s66local1].messageID);
      }
      return __s66local0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACastleBaseInboxMessageList.prototype, "dialogDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  ACastleBaseInboxMessageList.prototype.getLatestBattleLog = function () {
    if (this._messageItems != null) {
      for (var __s72local0 = 0, __s72local1 = this._messageItems; __s72local0 < __s72local1.length; __s72local0++) {
        var __s72local2 = __s72local1[__s72local0];
        if (__s72local2 !== undefined && __s72local2.isBattleLog()) {
          return __s72local2;
        }
      }
    }
    return null;
  };
  return ACastleBaseInboxMessageList;
}(__dep_export_CastleDialogSubLayer.CastleDialogSubLayer);
exports.ACastleBaseInboxMessageList = __s0local1;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleHeaderMessageItem = require("gge-module:export_CastleHeaderMessageItem");
var __dep_export_CastleNewMessageDialog = require("gge-module:export_CastleNewMessageDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList", "ISublayer");
