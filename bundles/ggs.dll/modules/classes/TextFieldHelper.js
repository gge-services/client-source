Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __s0local0 = createjs.TextEvent;
var __dep_export_CSSMouseCursor = require("gge-module:export_CSSMouseCursor");
var __dep_export_LoggerConfigurator = require("gge-module:export_LoggerConfigurator");
var __dep_export_AssetLoadingFlowType = require("gge-module:export_AssetLoadingFlowType");
var __s0local1 = __dep_export_LoggerConfigurator.getLogger(__dep_export_AssetLoadingFlowType.TEXT_FIELDS_LOGGER + ".TextFieldHelper");
var __s0local2 = function () {
  function TextFieldHelper() {}
  TextFieldHelper.recolorTextField = function (__s5param0, __s5param1, __s5param2 = -1, __s5param3 = -1) {
    var __s5local0 = __s5param0.getTextFormat();
    __s5local0.color = __dep_export_CSSMouseCursor.ColorTransform.colorNumToString(__s5param1);
    __s5param0.setTextFormat(__s5local0, __s5param2, __s5param3);
    __s5param0.defaultTextFormat = __s5local0;
  };
  TextFieldHelper.changeTextFromatSizeByTextWidth = function (__s7param0, __s7param1, __s7param2, __s7param3 = 1) {
    var __s7local0 = __s7param1._fontSizeCache = __s7param1._fontSizeCache || new Map();
    if (__s7param3 === 1 && __s7param2.length < 50 && __s7local0.get(__s7param2)) {
      __s7param1.text = __s7param2;
      return __s7param1.getTextFormat().size = __s7local0.get(__s7param2);
    }
    __s7param1.getTextFormat().size = __s7param0;
    __s7param1.multiline = true;
    __s7param1.wordWrap = true;
    __s7param1.text = __s7param2;
    while (__s7param1.numLines > __s7param3 && __s7param1.getTextFormat().size > 6) {
      TextFieldHelper.shrinkText(__s7param1);
    }
    var __s7local1 = __s7param1.getTextFormat().size;
    if (__s7param3 === 1 && __s7param2.length < 50 && __s7local1 > 6) {
      __s7local0.set(__s7param2, __s7local1);
    }
    return __s7local1;
  };
  TextFieldHelper.shrinkText = function (__s13param0) {
    __s13param0.getTextFormat().size -= 1;
    __s13param0.invalidate("font size reduced");
  };
  TextFieldHelper.changeTextFromatSizeByMaxHeight = function (__s15param0, __s15param1, __s15param2) {
    var __s15local0 = __s15param1.height;
    __s15param1.getTextFormat().size = __s15param0;
    __s15param1.multiline = true;
    __s15param1.wordWrap = true;
    __s15param1.text = __s15param2;
    while (__s15param1.textHeight > __s15local0 && __s15param1.getTextFormat().size > 6) {
      TextFieldHelper.shrinkText(__s15param1);
    }
  };
  TextFieldHelper.changeSingleLineTextVerticalAlignInMultiLineTextfield = function (__s19param0, __s19param1 = 0) {
    var __s19local0 = __s19param0.text;
    var __s19local1 = __s19param0.defaultTextFormat;
    __s19local1.leading = __s19param1;
    __s19param0.defaultTextFormat = __s19local1;
    __s19param0.setTextFormat(__s19local1);
    if (__s19param0.numLines == 1) {
      __s19param0.text = " \n" + __s19local0;
      __s19local1.leading = 0 - Number(__s19local1.size) / 2;
      __s19param0.defaultTextFormat = __s19local1;
      __s19param0.setTextFormat(__s19local1);
    }
  };
  TextFieldHelper.changeTextFieldVerticalAllignByLinesNumber = function (__s22param0, __s22param1 = 1) {
    if (__s22param0.numLines < __s22param1) {
      __s0local1.warn("TODO: @HTML5 - changeTextFieldVerticalAllignByLinesNumber");
    }
  };
  TextFieldHelper.changeVerticalAlignInMultiLineTextfield = function (__s25param0) {
    var __s25local0 = __s25param0.text;
    var __s25local1 = __s25param0.defaultTextFormat;
    var __s25local2 = __s25param0.height - (__s25param0.textHeight + Number(__s25local1.leading));
    if (!(__s25local2 < 0)) {
      for (var __s25local3 = Math.floor(__s25local2 / (Number(__s25local1.size) + Number(__s25local1.leading)) / 2), __s25local4 = 0; __s25local4 < __s25local3; __s25local4++) {
        __s25param0.text = " \n" + __s25local0;
        __s25local0 = __s25param0.text;
      }
    }
  };
  TextFieldHelper.sliceTextAnAddPoints = function (__s30param0) {
    var __s30local0 = __s30param0.textWidth;
    var __s30local1 = __s30param0.width - 4;
    if (__s30local0 > __s30local1) {
      var __s30local2 = __s30param0.text.split(" ");
      var __s30local3 = "";
      __s30param0.text = "";
      for (var __s30local4 = 0, __s30local5 = __s30local2; __s30local4 < __s30local5.length; __s30local4++) {
        var __s30local6 = __s30local5[__s30local4];
        __s30param0.appendText(__s30local6 + " ...");
        if (!(__s30param0.textWidth < __s30local1)) {
          break;
        }
        __s30local3 += __s30local6 + " ";
        __s30param0.text = __s30param0.text.slice(0, __s30param0.text.indexOf("..."));
      }
      __s30local3 += "...";
      __s30param0.text = __s30local3;
    }
  };
  TextFieldHelper.generateStringByValue = function (__s36param0, __s36param1, __s36param2) {
    if (__s36param0 > 1) {
      return __s36param0 + " " + __s36param2;
    } else {
      return __s36param0 + " " + __s36param1;
    }
  };
  TextFieldHelper.changeInputDirection = function (__s40param0, __s40param1) {
    if (__s40param0.type == __dep_export_CSSMouseCursor.TextFieldType.INPUT) {
      var __s40local0 = __s40param0.defaultTextFormat;
      switch (__s40param1) {
        case "ar":
          __s40local0.align = __dep_export_CSSMouseCursor.TextFormatAlign.RIGHT;
          __s40param0.addEventListener(__s0local0.TEXT_INPUT, this.bindFunction(TextFieldHelper.onTextInput));
          break;
        default:
          __s40local0.align = __dep_export_CSSMouseCursor.TextFormatAlign.LEFT;
          if (__s40param0.hasEventListener(__s0local0.TEXT_INPUT)) {
            __s40param0.removeEventListener(__s0local0.TEXT_INPUT, this.bindFunction(TextFieldHelper.onTextInput));
          }
      }
      __s40param0.defaultTextFormat = __s40local0;
    }
  };
  TextFieldHelper.onTextInput = function (__s45param0) {};
  TextFieldHelper.adjustUnwantedMultilineLabels = function (__s47param0, __s47param1) {
    if (__s47param1.indexOf(" ") == -1 && __s47param1.indexOf("\n") == -1 && __s47param1.indexOf("-") == -1) {
      __s47param0.multiline = false;
      __s47param0.wordWrap = false;
    }
  };
  TextFieldHelper.replace = function (__s50param0, __s50param1, __s50param2) {
    return __s50param0 = __s50param0.split(__s50param1).join(__s50param2);
  };
  TextFieldHelper.manageBrackets = function (__s52param0) {
    __s52param0 = TextFieldHelper.replace(__s52param0, ")", "^1^");
    __s52param0 = TextFieldHelper.replace(__s52param0, "(", "^2^");
    __s52param0 = TextFieldHelper.replace(__s52param0, "^1^", "(");
    __s52param0 = TextFieldHelper.replace(__s52param0, "^2^", ")");
    __s52param0 = TextFieldHelper.replace(__s52param0, "]", "^1^");
    __s52param0 = TextFieldHelper.replace(__s52param0, "[", "^2^");
    __s52param0 = TextFieldHelper.replace(__s52param0, "^1^", "[");
    __s52param0 = TextFieldHelper.replace(__s52param0, "^2^", "]");
    __s52param0 = TextFieldHelper.replace(__s52param0, "}", "^1^");
    __s52param0 = TextFieldHelper.replace(__s52param0, "{", "^2^");
    __s52param0 = TextFieldHelper.replace(__s52param0, "^1^", "{");
    __s52param0 = TextFieldHelper.replace(__s52param0, "^2^", "}");
    __s52param0 = TextFieldHelper.replace(__s52param0, ">", "^1^");
    __s52param0 = TextFieldHelper.replace(__s52param0, "<", "^2^");
    __s52param0 = TextFieldHelper.replace(__s52param0, "^1^", ">");
    return __s52param0 = TextFieldHelper.replace(__s52param0, "^2^", "<");
  };
  TextFieldHelper.reverse = function (__s54param0) {
    var __s54local0 = "";
    for (var __s54local1 = 0; __s54local1 < __s54param0.length; __s54local1++) {
      __s54local0 = __s54param0.charAt(__s54local1) + __s54local0;
    }
    return __s54local0;
  };
  TextFieldHelper.changeFormat = function (__s58param0, __s58param1) {
    var __s58local0 = __s58param0.getTextFormat();
    __s58local0.size = __s58param1;
    __s58param0.setTextFormat(__s58local0);
    __s58param0.defaultTextFormat = __s58local0;
  };
  TextFieldHelper.scaleFontSizeAndDimensions = function (__s60param0, __s60param1) {
    var __s60local0 = __s60param0.getTextFormat();
    __s60param0.setTextFormat(__dep_exact_b45c75bfe6706b06.__assign({}, __s60local0, {
      size: (__s60local0.size || 12) * __s60param1
    }));
    __s60param0.height *= __s60param1;
    __s60param0.width *= __s60param1;
  };
  return TextFieldHelper;
}();
exports.TextFieldHelper = __s0local2;
(function () {
  function Word(__s64param0, __s64param1, __s64param2, __s64param3) {
    this._text = __s64param0;
    this._type = __s64param1;
    this._index = __s64param2;
    this._format = __s64param3;
  }
  Object.defineProperty(Word.prototype, "text", {
    get: function () {
      return this._text;
    },
    set: function (__s68param0) {
      this._text = __s68param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Word.prototype, "type", {
    get: function () {
      return this._type;
    },
    set: function (__s72param0) {
      this._type = __s72param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Word.prototype, "index", {
    get: function () {
      return this._index;
    },
    set: function (__s76param0) {
      this._index = __s76param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Word.prototype, "format", {
    get: function () {
      return this._format;
    },
    set: function (__s80param0) {
      this._format = __s80param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Word.prototype, "EL", {
    get: function () {
      return this._el;
    },
    set: function (__s84param0) {
      this._el = __s84param0;
    },
    enumerable: true,
    configurable: true
  });
})();
