Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_39c566239c224ca4 = require("gge-module:exact_39c566239c224ca4");
var __dep_class_TextValide = require("gge-module:class_TextValide");
var __s0local0 = createjs.Event;
var __s0local1 = createjs.FocusEvent;
var __s0local2 = createjs.TextEvent;
var __s0local3 = function () {
  function TextFieldWatcher() {
    TextFieldWatcher.textFieldParams = new Map();
  }
  TextFieldWatcher.watchTextField = function (__s5param0, __s5param1, __s5param2, __s5param3 = 0, __s5param4 = false) {
    __s5param0.addEventListener(__s0local1.FOCUS_OUT, this.bindFunction(TextFieldWatcher.instance.onFocusOut));
    __s5param0.addEventListener(__s0local1.FOCUS_IN, this.bindFunction(TextFieldWatcher.instance.onValueChanged));
    __s5param0.addEventListener(__s0local0.CHANGE, this.bindFunction(TextFieldWatcher.instance.onValueChanged));
    __s5param0.addEventListener(__s0local0.REMOVED_FROM_STAGE, this.bindFunction(TextFieldWatcher.instance.onTextFieldRemoved));
    __dep_exact_39c566239c224ca4.info("Watching TextField " + __s5param0.name);
    var __s5local0 = new Map();
    __s5local0.set(TextFieldWatcher.DICTIONARY_RULES, __s5param1);
    __s5local0.set(TextFieldWatcher.DICTIONARY_CHANGE_FUNCTION, __s5param2);
    __s5local0.set(TextFieldWatcher.DICTIONARY_MIN_LENGTH, __s5param3);
    __s5local0.set(TextFieldWatcher.DICTIONARY_VALIDATE_ON_INPUT, __s5param4);
    TextFieldWatcher.textFieldParams.set(__s5param0, __s5local0);
  };
  TextFieldWatcher.stopWatchingTextField = function (__s7param0) {
    if (TextFieldWatcher.textFieldParams && TextFieldWatcher.textFieldParams.get(__s7param0)) {
      if (__s7param0.hasEventListener(__s0local2.TEXT_INPUT)) {
        __s7param0.removeEventListener(__s0local2.TEXT_INPUT, this.bindFunction(TextFieldWatcher.instance.onValueChanged));
      }
      if (__s7param0.hasEventListener(__s0local1.FOCUS_IN)) {
        __s7param0.removeEventListener(__s0local1.FOCUS_IN, this.bindFunction(TextFieldWatcher.instance.onValueChanged));
      }
      if (__s7param0.hasEventListener(__s0local1.FOCUS_OUT)) {
        __s7param0.removeEventListener(__s0local1.FOCUS_OUT, this.bindFunction(TextFieldWatcher.instance.onFocusOut));
      }
      if (__s7param0.hasEventListener(__s0local0.REMOVED_FROM_STAGE)) {
        __s7param0.addEventListener(__s0local0.REMOVED_FROM_STAGE, this.bindFunction(TextFieldWatcher.instance.onTextFieldRemoved));
      }
      __dep_exact_39c566239c224ca4.info("Stopped watching TextField " + __s7param0.name);
      TextFieldWatcher.textFieldParams.delete(__s7param0);
    }
  };
  TextFieldWatcher.validateString = function (__s14param0, __s14param1, __s14param2) {
    return Math.max(TextFieldWatcher.checkCharacters(__s14param0, __s14param1), TextFieldWatcher.checkValidity(__s14param0, __s14param1, __s14param2));
  };
  TextFieldWatcher.prototype.onFocusOut = function (__s16param0 = null) {
    var __s16local0 = __s16param0.target;
    var __s16local1 = TextFieldWatcher.textFieldParams.get(__s16local0);
    var __s16local2 = __s16local1.get(TextFieldWatcher.DICTIONARY_MIN_LENGTH);
    var __s16local3 = __s16local1.get(TextFieldWatcher.DICTIONARY_RULES);
    var __s16local4 = Math.max(TextFieldWatcher.checkCharacters(__s16local0.text, __s16local3), TextFieldWatcher.checkValidity(__s16local0.text, __s16local3, __s16local2));
    __s16local1.get(TextFieldWatcher.DICTIONARY_CHANGE_FUNCTION).apply(null, [__s16local4]);
  };
  TextFieldWatcher.prototype.onValueChanged = function (__s18param0 = null) {
    var __s18local0 = __s18param0.target;
    var __s18local1 = TextFieldWatcher.textFieldParams.get(__s18local0);
    var __s18local2 = __s18local1.get(TextFieldWatcher.DICTIONARY_MIN_LENGTH);
    var __s18local3 = __s18local1.get(TextFieldWatcher.DICTIONARY_RULES);
    var __s18local4 = TextFieldWatcher.checkCharacters(__s18local0.text, __s18local3);
    if (__s18local1.get(TextFieldWatcher.DICTIONARY_VALIDATE_ON_INPUT)) {
      __s18local4 = Math.max(__s18local4, TextFieldWatcher.checkValidity(__s18local0.text, __s18local3, __s18local2));
    }
    __s18local1.get(TextFieldWatcher.DICTIONARY_CHANGE_FUNCTION).apply(null, [__s18local4]);
  };
  TextFieldWatcher.checkCharacters = function (__s21param0, __s21param1) {
    var __s21local0 = this.trimString(__s21param0);
    if (__s21local0.length > 0 && !this.isSmartFoxValide(__s21local0)) {
      return TextFieldWatcher.ERRORCODE_INVALID_CHARS;
    } else if (__s21local0.length > 0 && __s21param1 == TextFieldWatcher.RULE_USERNAME && !TextFieldWatcher.isValidUsername(__s21local0)) {
      return TextFieldWatcher.ERRORCODE_INVALID_CHARS;
    } else {
      return TextFieldWatcher.ERRORCODE_ALL_OK;
    }
  };
  TextFieldWatcher.checkValidity = function (__s26param0, __s26param1, __s26param2 = 0) {
    var __s26local0 = TextFieldWatcher.trimString(__s26param0);
    if (__s26local0.length <= 0) {
      return TextFieldWatcher.ERRORCODE_EMPTY_TEXTFIELD;
    } else if (__s26local0.length < __s26param2) {
      return TextFieldWatcher.ERRORCODE_TOO_SHORT;
    } else if (__s26param1 != TextFieldWatcher.RULE_EMAIL || TextFieldWatcher.isEmailString(__s26local0)) {
      return TextFieldWatcher.ERRORCODE_ALL_OK;
    } else {
      return TextFieldWatcher.ERRORCODE_NO_EMAIL;
    }
  };
  TextFieldWatcher.prototype.onTextFieldRemoved = function (__s32param0 = null) {
    TextFieldWatcher.stopWatchingTextField(__s32param0.target);
  };
  Object.defineProperty(TextFieldWatcher, "instance", {
    get: function () {
      TextFieldWatcher._textFieldWatcher ||= new TextFieldWatcher();
      return TextFieldWatcher._textFieldWatcher;
    },
    enumerable: true,
    configurable: true
  });
  TextFieldWatcher.isSmartFoxValide = function (__s36param0) {
    if (__s36param0.trim() == "") {
      return false;
    }
    for (var __s36local0 = 0, __s36local1 = __dep_class_TextValide.TextValide.invalidChars; __s36local0 < __s36local1.length; __s36local0++) {
      var __s36local2 = __s36local1[__s36local0];
      if (__s36param0.indexOf(__s36local2) >= 0) {
        return false;
      }
    }
    return true;
  };
  TextFieldWatcher.isValidUsername = function (__s42param0) {
    for (var __s42local0 = 0, __s42local1 = __dep_class_TextValide.TextValide.invalidUsernameChars; __s42local0 < __s42local1.length; __s42local0++) {
      var __s42local2 = __s42local1[__s42local0];
      if (__s42param0.indexOf(__s42local2) >= 0) {
        return false;
      }
    }
    return !new RegExp("^[0-9]+$").exec(__s42param0);
  };
  TextFieldWatcher.isEmailString = function (__s47param0) {
    if (__s47param0.length < TextFieldWatcher.MIN_MAIL_LENGTH || __s47param0.length > TextFieldWatcher.MAX_MAIL_LENGTH) {
      return false;
    }
    return /^[A-Za-z0-9\-+_]+(\.[A-Za-z0-9\-+_]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,}$/.test(__s47param0);
  };
  TextFieldWatcher.trimString = function (__s50param0) {
    return __s50param0.trim();
  };
  TextFieldWatcher.ERRORCODE_ALL_OK = 0;
  TextFieldWatcher.ERRORCODE_TOO_SHORT = 1;
  TextFieldWatcher.ERRORCODE_INVALID_CHARS = 2;
  TextFieldWatcher.ERRORCODE_NO_EMAIL = 3;
  TextFieldWatcher.ERRORCODE_EMPTY_TEXTFIELD = 5;
  TextFieldWatcher.RULE_EMAIL = 1;
  TextFieldWatcher.RULE_TEXT = 2;
  TextFieldWatcher.RULE_USERNAME = 3;
  TextFieldWatcher.MIN_MAIL_LENGTH = 6;
  TextFieldWatcher.MAX_MAIL_LENGTH = 254;
  TextFieldWatcher.DICTIONARY_RULES = "_rules";
  TextFieldWatcher.DICTIONARY_CHANGE_FUNCTION = "_functionOk";
  TextFieldWatcher.DICTIONARY_MIN_LENGTH = "_minLength";
  TextFieldWatcher.DICTIONARY_VALIDATE_ON_INPUT = "_validate";
  return TextFieldWatcher;
}();
exports.TextFieldWatcher = __s0local3;
