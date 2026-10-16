Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function () {
  function CastleChatComponent(__s3param0, __s3param1 = null) {
    this._maxShownMessages = 50;
    this._enabled = true;
    this._chatVisible = true;
    this._parentPanel = __s3param1;
    this._chatItems = __s3param0;
    if (this._chatItems) {
      __dep_export_ButtonHelper.ButtonHelper.initBasicButton(this._chatItems.btn_submit);
    }
    this._itxt_chat = this.textFieldManager.registerTextField(this._chatItems.txt_chat, new __dep_exact_92d05af59ee2ff30.HTMLTextCustomVO());
    this._itxt_chat.multiline = true;
    this._itxt_chat.wordwrap = true;
    this._itxt_chat.selectable = true;
    this._itxt_chat.clearText();
    if (this._chatItems.txt_inputField) {
      this._itxt_input = this.textFieldManager.registerTextField(this._chatItems.txt_inputField, new __dep_exact_92d05af59ee2ff30_2.TextVO(""));
      this._itxt_input.keyUp.add(this.bindFunction(this.onSubmitInput));
      this._itxt_input.maxChars = __dep_exact_26a421b704832cff.MessageConst.MAX_LENGTH_TEXT;
      this._itxt_input.multiline = false;
      this._itxt_input.wordwrap = false;
    }
    this._scrollComponent = new __dep_export_CastleTextScrollComponent.CastleTextScrollComponent(this._chatItems.getScrollVO());
    if (this._chatItems.mc_inputBlocker) {
      this.fullScreenInputBlocker = new __dep_export_CastleFullScreenInputBlocker.CastleFullScreenInputBlocker(this._chatItems.mc_inputBlocker);
    }
    this.enableComponent(this._enabled);
    this.setChatVisibility(this._chatVisible);
    this._scrollComponent.hideArrowsOnScrollToEdges = true;
    this._scrollComponent.invisibleOnFit = true;
  }
  CastleChatComponent.prototype.onShow = function () {
    this._scrollComponent.onShow();
    this.removeEventListeners();
    this.addEventListeners();
    this.updateChat();
  };
  CastleChatComponent.prototype.onHide = function () {
    this._scrollComponent.onHide();
    this.removeEventListeners();
  };
  CastleChatComponent.prototype.addEventListeners = function () {
    if (this._chatItems.btn_submit) {
      this._chatItems.btn_submit.addEventListener(__s0local0.CLICK, this.bindFunction(this.onSubmitButtonClick));
    }
    this._itxt_chat.mouseOver.add(this.bindFunction(this.onMouseOverChat));
    this._itxt_chat.mouseOut.add(this.bindFunction(this.onMouseOutChat));
    if (this._itxt_input) {
      this._itxt_input.change.add(this.bindFunction(this.onInputTextChanged));
    }
    __dep_export_CastleModel.CastleModel.chatData.addEventListener(__dep_export_CastleChatEvent.CastleChatEvent.NEW_CHAT_MESSAGE_ARRIVED, this.bindFunction(this.onNewMessageArrived));
  };
  CastleChatComponent.prototype.removeEventListeners = function () {
    if (this._chatItems.btn_submit) {
      this._chatItems.btn_submit.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onSubmitButtonClick));
    }
    this._itxt_chat.mouseOver.remove(this.bindFunction(this.onMouseOverChat));
    this._itxt_chat.mouseOut.remove(this.bindFunction(this.onMouseOutChat));
    if (this._itxt_input) {
      this._itxt_input.change.remove(this.bindFunction(this.onInputTextChanged));
    }
    __dep_export_CastleModel.CastleModel.chatData.removeEventListener(__dep_export_CastleChatEvent.CastleChatEvent.NEW_CHAT_MESSAGE_ARRIVED, this.bindFunction(this.onNewMessageArrived));
    if (this.fullScreenInputBlocker) {
      this.fullScreenInputBlocker.removeListeners();
    }
  };
  CastleChatComponent.prototype.updateChat = function () {
    var __s21local0 = this._scrollComponent.isScrolledToEnd();
    var __s21local1 = __dep_export_CastleModel.CastleModel.chatData.allianceMessages;
    var __s21local2 = __dep_exact_f855840627e6e145.int(__s21local1.length);
    var __s21local3 = __dep_exact_f855840627e6e145.int(Math.max(0, __s21local2 - this._maxShownMessages - 1));
    var __s21local4 = __dep_exact_f855840627e6e145.int(Math.min(__s21local3 + this._maxShownMessages, __s21local1.length - 1));
    var __s21local5 = new __dep_exact_92d05af59ee2ff30.HTMLTextCustomVO();
    __s21local5.maxChilds = this._maxShownMessages;
    if (this._chatVisible) {
      for (var __s21local6 = __s21local3; __s21local6 <= __s21local4; ++__s21local6) {
        var __s21local7 = __s21local1[__s21local6];
        __s21local5.addLocalizedTextVO(new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("label_chatmessage_with_short_date_colored", this.composeMessageReplacements(__s21local7), true));
      }
    }
    this._itxt_chat.textContentVO = __s21local5;
    if (__s21local0) {
      this._scrollComponent.scrollToEnd();
    }
  };
  CastleChatComponent.prototype.composeMessageReplacements = function (__s27param0) {
    var __s27local0 = (__s27param0.bornDate.getHours() < 10 ? "0" : "") + __s27param0.bornDate.getHours();
    var __s27local1 = (__s27param0.bornDate.getMinutes() < 10 ? "0" : "") + __s27param0.bornDate.getMinutes();
    return {
      color: "#0066CC",
      0: new __dep_exact_92d05af59ee2ff30_2.TextVO(__s27param0.playerName),
      1: new __dep_exact_92d05af59ee2ff30_2.TextVO(__s27local0),
      2: new __dep_exact_92d05af59ee2ff30_2.TextVO(__s27local1),
      3: new __dep_exact_92d05af59ee2ff30_2.TextVO(__s27param0.messageText)
    };
  };
  CastleChatComponent.prototype.sendInputMessage = function () {
    if (this._itxt_input) {
      var __s29local0 = __dep_export_ClientConstUtils.ClientConstUtils.getTrimmedText(__dep_export_ClientConstUtils.ClientConstUtils.filterBBCodesFromText(__dep_exact_9e901e8e2483a22f_1.TextValide.getCleanChatText(__dep_exact_9e901e8e2483a22f_1.TextValide.getValideSmartFoxJSONTextMessage(this._itxt_input.text))));
      if (__s29local0 != "") {
        __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SAllianceChatVO.C2SAllianceChatVO(__s29local0));
        this._itxt_input.clearText();
      }
    }
  };
  CastleChatComponent.prototype.enableComponent = function (__s33param0) {
    this._enabled = __s33param0;
    this._scrollComponent.enableComponent(this._enabled);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this._chatItems.btn_submit, this._enabled);
    if (this._itxt_input) {
      this._itxt_input.tabEnabled = this._enabled;
    }
  };
  CastleChatComponent.prototype.setChatVisibility = function (__s36param0) {
    this._chatVisible = __s36param0;
    this.updateChat();
  };
  CastleChatComponent.prototype.focusInput = function () {
    if (this._itxt_input) {
      this._itxt_input.setFocus();
    }
  };
  CastleChatComponent.prototype.onSubmitButtonClick = function (__s41param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s41param0.target)) {
      this.sendInputMessage();
    }
  };
  CastleChatComponent.prototype.onSubmitInput = function (__s44param0) {
    if (this._enabled) {
      __s44param0.stopPropagation();
      if (__s44param0.key == __dep_exact_81dacdf05bd32292.Keyboard.ENTER) {
        this.sendInputMessage();
      }
    }
  };
  CastleChatComponent.prototype.onInputTextChanged = function (__s48param0) {
    if (!this._enabled && this._itxt_input) {
      this._itxt_input.textContentVO.stringValue = "";
    }
  };
  CastleChatComponent.prototype.clearInputText = function () {
    this._itxt_input.textContentVO.stringValue = "";
  };
  CastleChatComponent.prototype.onNewMessageArrived = function (__s53param0) {
    this.updateChat();
    if (this._parentPanel) {
      this._parentPanel.updateCache();
    }
  };
  CastleChatComponent.prototype.onMouseOverChat = function (__s56param0) {
    if (!__dep_export_ClientConstUtils.ClientConstUtils.isTlfMode) {
      __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().customCursor.hideCustomCursor();
    }
  };
  CastleChatComponent.prototype.onMouseOutChat = function (__s59param0) {
    if (!__dep_export_ClientConstUtils.ClientConstUtils.isTlfMode) {
      __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().customCursor.showCustomCursor();
    }
  };
  Object.defineProperty(CastleChatComponent.prototype, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleChatComponent.prototype, "maxShownMessages", {
    get: function () {
      return this._maxShownMessages;
    },
    set: function (__s66param0) {
      this._maxShownMessages = __dep_exact_f855840627e6e145.int(Math.max(__s66param0, 1));
    },
    enumerable: true,
    configurable: true
  });
  return CastleChatComponent;
}();
exports.CastleChatComponent = __s0local1;
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleTextScrollComponent = require("gge-module:export_CastleTextScrollComponent");
var __dep_export_ClientConstUtils = require("gge-module:export_ClientConstUtils");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_C2SAllianceChatVO = require("gge-module:export_C2SAllianceChatVO");
var __dep_export_CastleChatEvent = require("gge-module:export_CastleChatEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleFullScreenInputBlocker = require("gge-module:export_CastleFullScreenInputBlocker");
