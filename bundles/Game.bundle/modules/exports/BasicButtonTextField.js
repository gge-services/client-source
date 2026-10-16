Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __s0local0 = function () {
  function BasicButtonTextField(__s3param0) {
    this._groupNumber = false;
    this.button = __s3param0;
    this.advanced = new __dep_exact_9e901e8e2483a22f_1.GoodgameTextField(this.button.textField);
  }
  Object.defineProperty(BasicButtonTextField.prototype, "textField", {
    get: function () {
      return this.advanced.originalTextField;
    },
    enumerable: true,
    configurable: true
  });
  BasicButtonTextField.prototype.unregister = function () {
    this.advanced.unregister();
    this.button = null;
    this.advanced = null;
  };
  Object.defineProperty(BasicButtonTextField.prototype, "groupNumber", {
    get: function () {
      return this._groupNumber;
    },
    set: function (__s11param0) {
      this._groupNumber = __s11param0;
    },
    enumerable: true,
    configurable: true
  });
  BasicButtonTextField.prototype.displayText = function () {
    this.advanced.displayLocalizedText(__dep_exact_9e901e8e2483a22f.GGSCountryController.instance.currentCountry.ggsLanguageCode, this.textContentVO);
    this.button.label = this.advanced.text;
  };
  Object.defineProperty(BasicButtonTextField.prototype, "textContent", {
    get: function () {
      return this.advanced.text;
    },
    enumerable: true,
    configurable: true
  });
  BasicButtonTextField.prototype.applyFontConfiguration = function (__s17param0) {
    this.advanced.applyFontConfiguration(__s17param0);
  };
  Object.defineProperty(BasicButtonTextField.prototype, "originalFontConfig", {
    get: function () {
      return this.advanced.originalFontConfig;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButtonTextField.prototype, "loadedFontConfig", {
    get: function () {
      return this.advanced.loadedFontConfig;
    },
    set: function (__s23param0) {
      this.advanced.loadedFontConfig = __s23param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButtonTextField.prototype, "uid", {
    get: function () {
      return this.advanced.uid;
    },
    enumerable: true,
    configurable: true
  });
  BasicButtonTextField.prototype.useDefaultStrategy = function () {
    this.advanced.useDefaultStrategy();
  };
  BasicButtonTextField.prototype.useTLFStrategy = function () {
    this.advanced.useTLFStrategy();
  };
  Object.defineProperty(BasicButtonTextField.prototype, "color", {
    get: function () {
      return this.advanced.color;
    },
    set: function (__s33param0) {
      this.advanced.color = __s33param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButtonTextField.prototype, "x", {
    get: function () {
      return this.advanced.x;
    },
    set: function (__s37param0) {
      this.advanced.x = __s37param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButtonTextField.prototype, "y", {
    get: function () {
      return this.advanced.y;
    },
    set: function (__s41param0) {
      this.advanced.y = __s41param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButtonTextField.prototype, "width", {
    get: function () {
      return this.advanced.width;
    },
    set: function (__s45param0) {
      this.advanced.width = __s45param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButtonTextField.prototype, "height", {
    get: function () {
      return this.advanced.height;
    },
    set: function (__s49param0) {
      this.advanced.height = __s49param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButtonTextField.prototype, "click", {
    get: function () {
      return this.advanced.click;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButtonTextField.prototype, "text", {
    get: function () {
      return this.advanced.text;
    },
    set: function (__s55param0) {
      var __s55local0 = new __dep_exact_92d05af59ee2ff30.TextVO(__s55param0);
      this.advanced.textContentVO = __s55local0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButtonTextField.prototype, "currentFontConfig", {
    get: function () {
      return this.advanced.currentFontConfig;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButtonTextField.prototype, "data", {
    get: function () {
      return this.advanced.data;
    },
    set: function (__s61param0) {
      this.advanced.data = __s61param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButtonTextField.prototype, "focusIn", {
    get: function () {
      return this.advanced.focusIn;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButtonTextField.prototype, "focusOut", {
    get: function () {
      return this.advanced.focusOut;
    },
    enumerable: true,
    configurable: true
  });
  BasicButtonTextField.prototype.setFocus = function () {
    this.advanced.setFocus();
  };
  Object.defineProperty(BasicButtonTextField.prototype, "tabIndex", {
    get: function () {
      return this.advanced.tabIndex;
    },
    set: function (__s71param0) {
      this.advanced.tabIndex = __s71param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButtonTextField.prototype, "tabEnabled", {
    get: function () {
      return this.advanced.tabEnabled;
    },
    set: function (__s75param0) {
      this.advanced.tabEnabled = __s75param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButtonTextField.prototype, "maxChars", {
    set: function (__s77param0) {
      this.advanced.maxChars = __s77param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButtonTextField.prototype, "textContentVO", {
    get: function () {
      if (this.advanced) {
        return this.advanced.textContentVO;
      } else {
        return null;
      }
    },
    set: function (__s83param0) {
      this.advanced.textContentVO = __s83param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButtonTextField.prototype, "multiline", {
    get: function () {
      return this.advanced.multiline;
    },
    set: function (__s87param0) {
      this.advanced.multiline = __s87param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButtonTextField.prototype, "textWidth", {
    get: function () {
      return this.advanced.textWidth;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButtonTextField.prototype, "textHeight", {
    get: function () {
      return this.advanced.textHeight;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButtonTextField.prototype, "keyDown", {
    get: function () {
      return this.advanced.keyDown;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButtonTextField.prototype, "keyUp", {
    get: function () {
      return this.advanced.keyUp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButtonTextField.prototype, "mouseOver", {
    get: function () {
      return this.advanced.mouseOver;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButtonTextField.prototype, "mouseOut", {
    get: function () {
      return this.advanced.mouseOut;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButtonTextField.prototype, "caretIndex", {
    get: function () {
      return this.advanced.caretIndex;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButtonTextField.prototype, "mouseEnabled", {
    get: function () {
      return this.advanced.mouseEnabled;
    },
    set: function (__s105param0) {
      this.advanced.mouseEnabled = __s105param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButtonTextField.prototype, "verticalAlign", {
    set: function (__s107param0) {
      this.advanced.verticalAlign = __s107param0;
    },
    enumerable: true,
    configurable: true
  });
  BasicButtonTextField.prototype.setSelection = function (__s109param0, __s109param1) {
    this.advanced.setSelection(__s109param0, __s109param1);
  };
  Object.defineProperty(BasicButtonTextField.prototype, "selectable", {
    get: function () {
      return this.advanced.selectable;
    },
    set: function (__s113param0) {
      this.advanced.selectable = true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButtonTextField.prototype, "type", {
    get: function () {
      return this.advanced.type;
    },
    set: function (__s117param0) {
      this.advanced.type = __s117param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButtonTextField.prototype, "size", {
    get: function () {
      return this.advanced.size;
    },
    set: function (__s121param0) {
      this.advanced.size = __s121param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButtonTextField.prototype, "indent", {
    set: function (__s123param0) {
      this.advanced.model.indent = __s123param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButtonTextField.prototype, "model", {
    get: function () {
      return this.advanced.model;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButtonTextField.prototype, "wordwrap", {
    get: function () {
      return this.advanced.wordwrap;
    },
    set: function (__s129param0) {
      this.advanced.wordwrap = __s129param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButtonTextField.prototype, "htmlLinkClick", {
    get: function () {
      return this.advanced.htmlLinkClick;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButtonTextField.prototype, "textAlign", {
    set: function (__s133param0) {
      this.advanced.textAlign = __s133param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButtonTextField.prototype, "visible", {
    get: function () {
      return this.advanced.visible;
    },
    set: function (__s137param0) {
      this.advanced.visible = __s137param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButtonTextField.prototype, "originalTextField", {
    get: function () {
      return this.advanced.originalTextField;
    },
    enumerable: true,
    configurable: true
  });
  BasicButtonTextField.prototype.clearText = function () {
    this.advanced.clearText();
  };
  BasicButtonTextField.prototype.restoreTextContent = function () {
    this.advanced.restoreTextContent();
  };
  Object.defineProperty(BasicButtonTextField.prototype, "restrict", {
    get: function () {
      return this.advanced.restrict;
    },
    set: function (__s147param0) {
      this.advanced.restrict = __s147param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButtonTextField.prototype, "textInput", {
    get: function () {
      return this.advanced.textInput;
    },
    enumerable: true,
    configurable: true
  });
  BasicButtonTextField.prototype.updateProperties = function (__s151param0 = false) {
    this.advanced.updateProperties(__s151param0);
  };
  Object.defineProperty(BasicButtonTextField.prototype, "textStrategy", {
    get: function () {
      return this.advanced.textStrategy;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButtonTextField.prototype, "autoSize", {
    set: function (__s155param0) {
      this.advanced.textStrategy.autoSize = __s155param0;
    },
    enumerable: true,
    configurable: true
  });
  BasicButtonTextField.prototype.displayLocalizedText = function (__s157param0, __s157param1 = null) {
    this.advanced.displayLocalizedText(__s157param0, __s157param1);
    this.displayText();
  };
  Object.defineProperty(BasicButtonTextField.prototype, "scaleX", {
    get: function () {
      return this.advanced.scaleX;
    },
    set: function (__s161param0) {
      this.advanced.scaleX = __s161param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButtonTextField.prototype, "scaleY", {
    get: function () {
      return this.advanced.scaleY;
    },
    set: function (__s165param0) {
      this.advanced.scaleY = __s165param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButtonTextField.prototype, "rotation", {
    get: function () {
      return this.advanced.rotation;
    },
    set: function (__s169param0) {
      this.advanced.rotation = __s169param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButtonTextField.prototype, "background", {
    get: function () {
      return this.advanced.background;
    },
    set: function (__s173param0) {
      this.advanced.background = __s173param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButtonTextField.prototype, "backgroundColor", {
    get: function () {
      return this.advanced.backgroundColor;
    },
    set: function (__s177param0) {
      this.advanced.backgroundColor = __s177param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButtonTextField.prototype, "change", {
    get: function () {
      return this.advanced.change;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButtonTextField.prototype, "removedFromStage", {
    get: function () {
      return this.advanced.removedFromStage;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButtonTextField.prototype, "scroll", {
    get: function () {
      return this.advanced.scroll;
    },
    enumerable: true,
    configurable: true
  });
  BasicButtonTextField.prototype.fitTextSizeToBounds = function (__s185param0 = null) {
    return this.advanced.fitTextSizeToBounds(__s185param0);
  };
  Object.defineProperty(BasicButtonTextField.prototype, "autoFitToBounds", {
    get: function () {
      return this.advanced.autoFitToBounds;
    },
    set: function (__s189param0) {
      this.advanced.autoFitToBounds = __s189param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButtonTextField.prototype, "scrollV", {
    get: function () {
      return this.model.scrollV;
    },
    set: function (__s193param0) {
      this.model.scrollV = __s193param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButtonTextField.prototype, "maxScrollV", {
    get: function () {
      return this.textStrategy.maxScrollV;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButtonTextField.prototype, "numLines", {
    get: function () {
      return this.advanced.numLines;
    },
    enumerable: true,
    configurable: true
  });
  return BasicButtonTextField;
}();
exports.BasicButtonTextField = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IInternalGGSTextField", "IBasicGGSTextField");
