Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __dep_exact_608de47b6498f9b0_1 = require("gge-module:exact_608de47b6498f9b0");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_CastleJSONTextFieldRestrictorEvent = require("gge-module:export_CastleJSONTextFieldRestrictorEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleJSONTextFieldRestrictor = require("gge-module:export_CastleJSONTextFieldRestrictor");
var __dep_export_LetterLimiterEvent = require("gge-module:export_LetterLimiterEvent");
var __s0local0 = function () {
  function LetterLimiter(__s3param0, __s3param1) {
    this.messageTextRestrictor = new __dep_export_CastleJSONTextFieldRestrictor.CastleJSONTextFieldRestrictor();
    this.mc_letterLimit = __s3param0;
    __s3param0.visible = true;
    this._itxt_letterLimit = this.textFieldManager.registerTextField(__s3param0.txt_letterLimit, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_messageLimit_charactersLeft", [__dep_exact_26a421b704832cff.MessageConst.MAX_LENGTH_TEXT]));
    this.messageTextRestrictor.init(__s3param1, __dep_exact_26a421b704832cff.MessageConst.MAX_LENGTH_TEXT);
    this._itxt_letterLimit.color = __dep_export_ClientConstColor.ClientConstColor.GENERIC_BLACK;
    __s3param0.toolTipText = {
      t: "dialog_messageLimit_textLength_Tooltip",
      p: [__dep_exact_26a421b704832cff.MessageConst.MAX_LENGTH_TEXT]
    };
    __s3param0.mouseChildren = false;
  }
  Object.defineProperty(LetterLimiter.prototype, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  LetterLimiter.prototype.addEventListeners = function () {
    this.messageTextRestrictor.addEventListener(__dep_export_CastleJSONTextFieldRestrictorEvent.CastleJSONTextFieldRestrictorEvent.TEXT_CHANGED, this.bindFunction(this.onTextChange));
    this.messageTextRestrictor.addEventListener(__dep_export_CastleJSONTextFieldRestrictorEvent.CastleJSONTextFieldRestrictorEvent.TEXT_LIMIT_REACHED, this.bindFunction(this.onTextLimitReached));
    this.messageTextRestrictor.addEventListener(__dep_export_CastleJSONTextFieldRestrictorEvent.CastleJSONTextFieldRestrictorEvent.TEXT_LIMIT_EXCEEDED, this.bindFunction(this.onTextLimitExceeded));
  };
  LetterLimiter.prototype.removeEventListeners = function () {
    this.messageTextRestrictor.removeEventListener(__dep_export_CastleJSONTextFieldRestrictorEvent.CastleJSONTextFieldRestrictorEvent.TEXT_CHANGED, this.bindFunction(this.onTextChange));
    this.messageTextRestrictor.removeEventListener(__dep_export_CastleJSONTextFieldRestrictorEvent.CastleJSONTextFieldRestrictorEvent.TEXT_LIMIT_REACHED, this.bindFunction(this.onTextLimitReached));
    this.messageTextRestrictor.removeEventListener(__dep_export_CastleJSONTextFieldRestrictorEvent.CastleJSONTextFieldRestrictorEvent.TEXT_LIMIT_EXCEEDED, this.bindFunction(this.onTextLimitExceeded));
  };
  LetterLimiter.prototype.onTextLimitReached = function (__s11param0) {
    this.updateRemainingLettersText(true, __s11param0.newTextLength);
    __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_LetterLimiterEvent.LetterLimiterEvent(__dep_export_LetterLimiterEvent.LetterLimiterEvent.TEXT_LIMIT_REACHED));
  };
  LetterLimiter.prototype.onTextChange = function (__s13param0) {
    this.updateRemainingLettersText(false, __s13param0.newTextLength);
    __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_LetterLimiterEvent.LetterLimiterEvent(__dep_export_LetterLimiterEvent.LetterLimiterEvent.TEXT_CHANGED));
  };
  LetterLimiter.prototype.updateRemainingLettersText = function (__s15param0, __s15param1) {
    if (__s15param0) {
      this._itxt_letterLimit.color = __dep_export_ClientConstColor.ClientConstColor.FONT_INSUFFICIENT_COLOR;
      this.mc_letterLimit.toolTipText = {
        t: "dialog_messageLimit_maxTextlength_Tooltip",
        p: [__dep_exact_26a421b704832cff.MessageConst.MAX_LENGTH_TEXT]
      };
    } else {
      this._itxt_letterLimit.color = LetterLimiter.DEFAULT_TEXT_LIMIT_COLOR;
      this.mc_letterLimit.toolTipText = {
        t: "dialog_messageLimit_textLength_Tooltip",
        p: [__dep_exact_26a421b704832cff.MessageConst.MAX_LENGTH_TEXT]
      };
    }
    this._itxt_letterLimit.textContentVO.textReplacements = [__dep_exact_26a421b704832cff.MessageConst.MAX_LENGTH_TEXT - __s15param1];
    __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_LetterLimiterEvent.LetterLimiterEvent(__dep_export_LetterLimiterEvent.LetterLimiterEvent.UPDATE_REMAINING_LETTERS));
  };
  LetterLimiter.prototype.onTextLimitExceeded = function (__s19param0) {
    this.onTextLimitReached(__s19param0);
    if (__s19param0.newTextLength < __dep_exact_26a421b704832cff.MessageConst.MAX_LENGTH_TEXT) {
      __dep_exact_608de47b6498f9b0_1.TweenMax.to(this.mc_letterLimit.txt_letterLimit, 1.5, {
        hexColors: {
          textColor: LetterLimiter.DEFAULT_TEXT_LIMIT_COLOR
        },
        ease: __dep_exact_608de47b6498f9b0.Power4.easeIn
      });
      this.mc_letterLimit.toolTipText = {
        t: "dialog_messageLimit_textLength_Tooltip",
        p: [__dep_exact_26a421b704832cff.MessageConst.MAX_LENGTH_TEXT]
      };
    }
    __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_LetterLimiterEvent.LetterLimiterEvent(__dep_export_LetterLimiterEvent.LetterLimiterEvent.TEXT_LIMIT_EXCEEDED));
  };
  LetterLimiter.__initialize_static_members = function () {
    LetterLimiter.DEFAULT_TEXT_LIMIT_COLOR = __dep_exact_f855840627e6e145.int(__dep_export_ClientConstColor.ClientConstColor.GENERIC_BLACK);
  };
  return LetterLimiter;
}();
exports.LetterLimiter = __s0local0;
__s0local0.__initialize_static_members();
