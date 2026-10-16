Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_opaque_c83528567256175cfb346d7d = require("gge-module:opaque_c83528567256175cfb346d7d");
var __dep_class_TextValide = require("gge-module:class_TextValide");
var __dep_export_CSSMouseCursor = require("gge-module:export_CSSMouseCursor");
var __dep_class_HTMLLinkClickSignal = require("gge-module:class_HTMLLinkClickSignal");
var __dep_class_GGSCountryController = require("gge-module:class_GGSCountryController");
var __dep_class_GGSTextAlign = require("gge-module:class_GGSTextAlign");
var __s0local0 = createjs.Event;
var __s0local1 = createjs.FocusEvent;
var __s0local2 = createjs.MouseEvent;
var __s0local3 = createjs.TextEvent;
var __dep_export_LoggerConfigurator = require("gge-module:export_LoggerConfigurator");
var __dep_export_AssetLoadingFlowType = require("gge-module:export_AssetLoadingFlowType");
var __s0local4 = __dep_export_LoggerConfigurator.getLogger(__dep_export_AssetLoadingFlowType.TEXT_FIELDS_LOGGER + ".GGSTextFieldDefaultStrategy");
var __s0local5 = function () {
  function GGSTextFieldDefaultStrategy(__s3param0) {
    this._textField = __s3param0;
    this._currentFontConfig = this._textField.originalFontConfig;
    this._textFieldText = this._textField.originalTextField.text;
    this._originalPosY = this._textField.originalTextField.y;
    this._originalHeight = this._textField.originalTextField.height;
    this._originalTextHeight = this._textField.originalTextField.textHeight;
    this._textLineMetrics = __s3param0.originalTextField.getMetrics();
  }
  GGSTextFieldDefaultStrategy.prototype.deactivateInputFieldBehaviour = function () {
    this._textField.originalTextField.removeEventListener(__dep_export_CSSMouseCursor.KeyboardEvent.KEY_DOWN, this.bindFunction(this.onKeyDownEvent));
    this._textField.originalTextField.removeEventListener(__s0local1.FOCUS_OUT, this.bindFunction(this.onFocusOutEvent));
    this._textField.originalTextField.removeEventListener(__s0local1.FOCUS_IN, this.bindFunction(this.onFocusInEvent));
    this._textField.originalTextField.removeEventListener(__s0local0.CHANGE, this.bindFunction(this.onChangeEvent));
  };
  GGSTextFieldDefaultStrategy.prototype.activateInputFieldBehaviour = function () {
    this._textField.originalTextField.addEventListener(__dep_export_CSSMouseCursor.KeyboardEvent.KEY_DOWN, this.bindFunction(this.onKeyDownEvent));
    this._textField.originalTextField.addEventListener(__s0local1.FOCUS_OUT, this.bindFunction(this.onFocusOutEvent));
    this._textField.originalTextField.addEventListener(__s0local1.FOCUS_IN, this.bindFunction(this.onFocusInEvent));
    this._textField.originalTextField.addEventListener(__s0local0.CHANGE, this.bindFunction(this.onChangeEvent));
  };
  GGSTextFieldDefaultStrategy.prototype.onKeyDownEvent = function (__s9param0) {
    __s9param0.stopPropagation();
    this._textField.keyDown.dispatchTyped(__s9param0);
  };
  GGSTextFieldDefaultStrategy.prototype.onKeyUpEvent = function (__s11param0) {
    __s11param0.stopPropagation();
    this._textField.keyUp.dispatchTyped(__s11param0);
  };
  GGSTextFieldDefaultStrategy.prototype.onMouseOutEvent = function (__s13param0) {
    this._textField.mouseOut.dispatchTyped(this._textField);
  };
  GGSTextFieldDefaultStrategy.prototype.onMouseOverEvent = function (__s15param0) {
    this._textField.mouseOver.dispatchTyped(this._textField);
  };
  GGSTextFieldDefaultStrategy.prototype.onChangeEvent = function (__s17param0) {
    this._textField.model.text = this._textField.originalTextField.text;
    this._textField.change.dispatchTyped(__s17param0);
  };
  GGSTextFieldDefaultStrategy.prototype.onRemovedFromStageEvent = function (__s19param0) {
    this._textField.removedFromStage.dispatchTyped(__s19param0);
  };
  GGSTextFieldDefaultStrategy.prototype.onScrollEvent = function (__s21param0) {
    this._textField.scroll.dispatchTyped(__s21param0);
  };
  GGSTextFieldDefaultStrategy.prototype.onFocusInEvent = function (__s23param0) {
    this._textField.focusIn.dispatchTyped(this._textField);
  };
  GGSTextFieldDefaultStrategy.prototype.onFocusOutEvent = function (__s25param0) {
    this._textField.focusOut.dispatchTyped(this._textField);
  };
  GGSTextFieldDefaultStrategy.prototype.onClickEvent = function (__s27param0) {
    this._textField.click.dispatchTyped(this._textField);
  };
  GGSTextFieldDefaultStrategy.prototype.onTextEventLinkEvent = function (__s29param0) {
    this._textField.htmlLinkClick.dispatchTyped(this._textField, __s29param0.text);
  };
  GGSTextFieldDefaultStrategy.prototype.displayText = function (__s31param0, __s31param1 = null) {
    if (__s31param1 && __s31param1 instanceof __dep_opaque_c83528567256175cfb346d7d.HTMLTextVO) {
      this._textField.originalTextField.htmlText = __s31param0;
    } else {
      this._textField.originalTextField.text = __s31param0;
    }
  };
  GGSTextFieldDefaultStrategy.prototype.applyFontConfiguration = function (__s35param0) {
    this.currentFontConfig = __s35param0;
    this.updateTextFormat();
  };
  GGSTextFieldDefaultStrategy.prototype.activate = function () {
    if (__dep_class_GGSCountryController.GGSCountryController.instance.currentCountry.isLanguageWrittenRightToLeft) {
      this._textField.model.textAlign = this._textField.model.textAlignOriginal !== __dep_class_GGSTextAlign.GGSTextAlign.LEFT ? this._textField.model.textAlignOriginal : __dep_class_GGSTextAlign.GGSTextAlign.RIGHT;
    } else {
      this._textField.model.textAlign = this._textField.model.textAlignOriginal;
    }
    for (var __s37local0 = 0, __s37local1 = this._textField.model.registeredEventListeners; __s37local0 < __s37local1.length; __s37local0++) {
      var __s37local2 = __s37local1[__s37local0];
      this.addEventListenerForEventType(__s37local2);
    }
    this._textField.originalTextField.visible = true;
  };
  GGSTextFieldDefaultStrategy.prototype.deactivate = function () {
    this._textField.originalTextField.visible = false;
    for (var __s43local0 = 0, __s43local1 = this._textField.model.registeredEventListeners; __s43local0 < __s43local1.length; __s43local0++) {
      var __s43local2 = __s43local1[__s43local0];
      this.removeEventListenerForEventType(__s43local2);
    }
  };
  GGSTextFieldDefaultStrategy.prototype.setFocus = function () {};
  GGSTextFieldDefaultStrategy.prototype.updateTabIndex = function (__s49param0) {
    this._textField.originalTextField.tabIndex = __s49param0;
  };
  GGSTextFieldDefaultStrategy.prototype.updateTabEnabled = function (__s51param0) {
    this._textField.originalTextField.tabEnabled = __s51param0;
  };
  GGSTextFieldDefaultStrategy.prototype.updateMaxChars = function (__s53param0) {
    this._textField.originalTextField.maxChars = __s53param0;
  };
  GGSTextFieldDefaultStrategy.prototype.updateX = function (__s55param0) {
    this._textField.originalTextField.x = __s55param0;
  };
  GGSTextFieldDefaultStrategy.prototype.updateY = function (__s57param0) {
    this._textField.originalTextField.y = __s57param0;
  };
  GGSTextFieldDefaultStrategy.prototype.updateWidth = function (__s59param0) {
    this._textField.originalTextField.width = __s59param0;
  };
  GGSTextFieldDefaultStrategy.prototype.updateHeight = function (__s61param0) {
    this._textField.originalTextField.height = __s61param0;
  };
  GGSTextFieldDefaultStrategy.prototype.updateScaleX = function (__s63param0) {
    this._textField.originalTextField.scaleX = __s63param0;
  };
  GGSTextFieldDefaultStrategy.prototype.updateScaleY = function (__s65param0) {
    this._textField.originalTextField.scaleY = __s65param0;
  };
  GGSTextFieldDefaultStrategy.prototype.updateScrollV = function (__s67param0) {
    this._textField.originalTextField.scrollV = __s67param0;
  };
  GGSTextFieldDefaultStrategy.prototype.updateRotation = function (__s69param0) {
    this._textField.originalTextField.rotation = __s69param0;
  };
  GGSTextFieldDefaultStrategy.prototype.updateBackground = function (__s71param0) {
    this._textField.originalTextField.background = __s71param0;
  };
  GGSTextFieldDefaultStrategy.prototype.updateBackgroundColor = function (__s73param0) {
    this._textField.originalTextField.backgroundColor = __s73param0;
  };
  Object.defineProperty(GGSTextFieldDefaultStrategy.prototype, "maxScrollV", {
    get: function () {
      return this._textField.originalTextField.maxScrollV;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GGSTextFieldDefaultStrategy.prototype, "scrollV", {
    get: function () {
      return this._textField.originalTextField.scrollV;
    },
    enumerable: true,
    configurable: true
  });
  GGSTextFieldDefaultStrategy.prototype.updateIndent = function (__s79param0) {
    var __s79local0 = this._textField.originalTextField.defaultTextFormat;
    __s79local0.indent = __s79param0;
    this._textField.originalTextField.defaultTextFormat = __s79local0;
    this._textField.originalTextField.setTextFormat(__s79local0);
  };
  Object.defineProperty(GGSTextFieldDefaultStrategy.prototype, "currentFontConfig", {
    get: function () {
      return this._currentFontConfig;
    },
    set: function (__s83param0) {
      this._currentFontConfig = __s83param0;
    },
    enumerable: true,
    configurable: true
  });
  GGSTextFieldDefaultStrategy.prototype.dispose = function () {
    this._textField.originalTextField.removeEventListener("click", this.bindFunction(this.onClickEvent));
    this._textField.originalTextField.removeEventListener("mouseover", this.bindFunction(this.onMouseOverEvent));
    this._textField.originalTextField.removeEventListener("mouseout", this.bindFunction(this.onMouseOutEvent));
    this._textField.originalTextField.removeEventListener(__dep_export_CSSMouseCursor.KeyboardEvent.KEY_DOWN, this.bindFunction(this.onKeyDownEvent));
    this._textField.originalTextField.removeEventListener(__dep_export_CSSMouseCursor.KeyboardEvent.KEY_UP, this.bindFunction(this.onKeyUpEvent));
    this._textField.originalTextField.removeEventListener(__s0local1.FOCUS_OUT, this.bindFunction(this.onFocusOutEvent));
    this._textField.originalTextField.removeEventListener(__s0local1.FOCUS_IN, this.bindFunction(this.onFocusInEvent));
    this._textField.originalTextField.removeEventListener(__s0local0.CHANGE, this.bindFunction(this.onChangeEvent));
    this._textField.originalTextField.removeEventListener(__s0local3.LINK, this.bindFunction(this.onTextEventLinkEvent));
    this._textField.originalTextField.removeEventListener(__s0local0.REMOVED_FROM_STAGE, this.bindFunction(this.onRemovedFromStageEvent));
    this._textField = null;
    this._currentFontConfig = null;
  };
  GGSTextFieldDefaultStrategy.prototype.updateDisplayAsPassword = function (__s87param0) {
    this._textField.originalTextField.displayAsPassword = __s87param0;
  };
  Object.defineProperty(GGSTextFieldDefaultStrategy.prototype, "containsDefaultTextContent", {
    get: function () {
      var __s89local0 = this._textField.text;
      if (this._textField.originalTextField.displayAsPassword) {
        __s89local0 = __dep_class_TextValide.TextValide.trimPassword(this._textField.text);
      }
      return __s89local0 === this._textField.model.textDefault;
    },
    enumerable: true,
    configurable: true
  });
  GGSTextFieldDefaultStrategy.prototype.updateMultiline = function (__s92param0) {
    this._textField.originalTextField.multiline = __s92param0;
  };
  GGSTextFieldDefaultStrategy.prototype.updateWordwrap = function (__s94param0) {
    this._textField.originalTextField.wordWrap = __s94param0;
  };
  GGSTextFieldDefaultStrategy.prototype.updateRestrict = function (__s96param0) {
    this._textField.originalTextField.restrict = __s96param0;
  };
  Object.defineProperty(GGSTextFieldDefaultStrategy.prototype, "textWidth", {
    get: function () {
      return this._textField.originalTextField.textWidth;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GGSTextFieldDefaultStrategy.prototype, "textHeight", {
    get: function () {
      return this._textField.originalTextField.textHeight;
    },
    enumerable: true,
    configurable: true
  });
  GGSTextFieldDefaultStrategy.prototype.addEventListenerForEventType = function (__s102param0) {
    switch (__s102param0) {
      case __s0local2.CLICK:
        this._textField.originalTextField.addEventListener(__s0local2.CLICK, this.bindFunction(this.onClickEvent));
        break;
      case __s0local1.FOCUS_IN:
        this._textField.originalTextField.addEventListener(__s0local1.FOCUS_IN, this.bindFunction(this.onFocusInEvent));
        break;
      case __s0local1.FOCUS_OUT:
        this._textField.originalTextField.addEventListener(__s0local1.FOCUS_OUT, this.bindFunction(this.onFocusOutEvent));
        break;
      case __dep_export_CSSMouseCursor.KeyboardEvent.KEY_DOWN:
        this._textField.originalTextField.addEventListener(__dep_export_CSSMouseCursor.KeyboardEvent.KEY_DOWN, this.bindFunction(this.onKeyDownEvent));
        break;
      case __dep_export_CSSMouseCursor.KeyboardEvent.KEY_UP:
        this._textField.originalTextField.addEventListener(__dep_export_CSSMouseCursor.KeyboardEvent.KEY_UP, this.bindFunction(this.onKeyUpEvent));
        break;
      case __s0local2.MOUSE_OVER:
        this._textField.originalTextField.addEventListener(__s0local2.MOUSE_OVER, this.bindFunction(this.onMouseOverEvent));
        break;
      case __s0local2.MOUSE_OUT:
        this._textField.originalTextField.addEventListener(__s0local2.MOUSE_OUT, this.bindFunction(this.onMouseOutEvent));
        break;
      case __dep_class_HTMLLinkClickSignal.HTMLLinkClickSignal.HTML_LINK_CLICK:
        this._textField.originalTextField.addEventListener(__s0local3.LINK, this.bindFunction(this.onTextEventLinkEvent));
        break;
      case __s0local0.CHANGE:
        this._textField.originalTextField.addEventListener(__s0local0.CHANGE, this.bindFunction(this.onChangeEvent));
        break;
      case __s0local0.REMOVED_FROM_STAGE:
        this._textField.originalTextField.addEventListener(__s0local0.REMOVED_FROM_STAGE, this.bindFunction(this.onRemovedFromStageEvent));
        break;
      case __s0local2.MOUSE_WHEEL:
        this._textField.originalTextField.addEventListener(__s0local2.MOUSE_WHEEL, this.bindFunction(this.onScrollEvent));
        break;
      default:
        __s0local4.warn("Not supported event type: " + __s102param0);
    }
  };
  GGSTextFieldDefaultStrategy.prototype.removeEventListenerForEventType = function (__s105param0) {
    switch (__s105param0) {
      case __s0local2.CLICK:
        this._textField.originalTextField.removeEventListener(__s0local2.CLICK, this.bindFunction(this.onClickEvent));
        break;
      case __s0local1.FOCUS_IN:
        this._textField.originalTextField.removeEventListener(__s0local1.FOCUS_IN, this.bindFunction(this.onFocusInEvent));
        break;
      case __s0local1.FOCUS_OUT:
        this._textField.originalTextField.removeEventListener(__s0local1.FOCUS_OUT, this.bindFunction(this.onFocusOutEvent));
        break;
      case __dep_export_CSSMouseCursor.KeyboardEvent.KEY_DOWN:
        this._textField.originalTextField.removeEventListener(__dep_export_CSSMouseCursor.KeyboardEvent.KEY_DOWN, this.bindFunction(this.onKeyDownEvent));
        break;
      case __dep_export_CSSMouseCursor.KeyboardEvent.KEY_UP:
        this._textField.originalTextField.removeEventListener(__dep_export_CSSMouseCursor.KeyboardEvent.KEY_UP, this.bindFunction(this.onKeyUpEvent));
        break;
      case __s0local2.MOUSE_OVER:
        this._textField.originalTextField.removeEventListener(__s0local2.MOUSE_OVER, this.bindFunction(this.onMouseOverEvent));
        break;
      case __s0local2.MOUSE_OUT:
        this._textField.originalTextField.removeEventListener(__s0local2.MOUSE_OUT, this.bindFunction(this.onMouseOutEvent));
        break;
      case __dep_class_HTMLLinkClickSignal.HTMLLinkClickSignal.HTML_LINK_CLICK:
        this._textField.originalTextField.removeEventListener(__s0local3.LINK, this.bindFunction(this.onTextEventLinkEvent));
        break;
      case __s0local0.CHANGE:
        this._textField.originalTextField.removeEventListener(__s0local0.CHANGE, this.bindFunction(this.onChangeEvent));
        break;
      case __s0local0.REMOVED_FROM_STAGE:
        this._textField.originalTextField.removeEventListener(__s0local0.REMOVED_FROM_STAGE, this.bindFunction(this.onRemovedFromStageEvent));
        break;
      case __s0local2.MOUSE_WHEEL:
        this._textField.originalTextField.removeEventListener(__s0local2.MOUSE_WHEEL, this.bindFunction(this.onScrollEvent));
        break;
      default:
        __s0local4.warn("Not supported event type.");
    }
  };
  GGSTextFieldDefaultStrategy.prototype.hasEventListenerForEventType = function (__s108param0) {
    return this._textField.originalTextField.hasEventListener(__s108param0);
  };
  Object.defineProperty(GGSTextFieldDefaultStrategy.prototype, "caretIndex", {
    get: function () {
      return this._textField.originalTextField.caretIndex;
    },
    enumerable: true,
    configurable: true
  });
  GGSTextFieldDefaultStrategy.prototype.updateMouseEnabled = function (__s112param0) {
    this._textField.originalTextField.mouseEnabled = __s112param0;
  };
  GGSTextFieldDefaultStrategy.prototype.updateVerticalAlign = function (__s114param0) {
    this._textField.originalTextField.verticalAlign = __s114param0;
  };
  GGSTextFieldDefaultStrategy.prototype.updateTextAlign = function (__s116param0) {
    this._currentFontConfig.textFormat.align = __s116param0;
    this.updateTextFormat();
  };
  GGSTextFieldDefaultStrategy.prototype.setSelection = function (__s118param0, __s118param1) {
    this._textField.originalTextField.setSelection(__s118param0, __s118param1);
  };
  GGSTextFieldDefaultStrategy.prototype.updateSelectable = function (__s120param0) {
    this._textField.originalTextField.selectable = __s120param0;
  };
  GGSTextFieldDefaultStrategy.prototype.updateType = function (__s122param0) {
    if (__s122param0 === __dep_export_CSSMouseCursor.TextFieldType.INPUT) {
      this._textField.originalTextField.type = __s122param0;
      this.activateInputFieldBehaviour();
    } else if (__s122param0 === __dep_export_CSSMouseCursor.TextFieldType.DYNAMIC) {
      this._textField.originalTextField.type = __s122param0;
      this.deactivateInputFieldBehaviour();
    } else {
      __s0local4.warn("Unsupported type: " + __s122param0);
    }
  };
  GGSTextFieldDefaultStrategy.prototype.updateSize = function (__s127param0) {
    this._currentFontConfig.textFormat.size = __s127param0;
    this.updateTextFormat();
  };
  GGSTextFieldDefaultStrategy.prototype.updateColor = function (__s129param0) {
    this._currentFontConfig.textFormat.color = __s129param0;
    this.updateTextFormat();
  };
  GGSTextFieldDefaultStrategy.prototype.updateTextFormat = function () {
    this._textField.originalTextField.setTextFormat(this._currentFontConfig.textFormat);
  };
  GGSTextFieldDefaultStrategy.prototype.updateVisible = function (__s133param0) {
    this._textField.originalTextField.visible = __s133param0;
  };
  Object.defineProperty(GGSTextFieldDefaultStrategy.prototype, "autoSize", {
    set: function (__s135param0) {
      this._textField.originalTextField.autoSize = __s135param0;
    },
    enumerable: true,
    configurable: true
  });
  GGSTextFieldDefaultStrategy.prototype.fitTextSizeToBounds = function (__s137param0 = null) {};
  GGSTextFieldDefaultStrategy.prototype.updateAutoFitToBounds = function (__s139param0) {
    if (__s139param0) {
      this.fitTextSizeToBounds();
    }
  };
  Object.defineProperty(GGSTextFieldDefaultStrategy.prototype, "autoFitToBounds", {
    get: function () {
      return this._textField.model.autoFitToBounds;
    },
    set: function (__s144param0) {
      this._textField.model.autoFitToBounds = __s144param0;
      this.updateAutoFitToBounds(__s144param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GGSTextFieldDefaultStrategy.prototype, "numLines", {
    get: function () {
      return this._textField.originalTextField.numLines;
    },
    enumerable: true,
    configurable: true
  });
  GGSTextFieldDefaultStrategy.NAME = "GGSTextFieldDefaultStrategy";
  return GGSTextFieldDefaultStrategy;
}();
exports.GGSTextFieldDefaultStrategy = __s0local5;
