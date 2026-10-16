Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_opaque_c83528567256175cfb346d7d = require("gge-module:opaque_c83528567256175cfb346d7d");
var __dep_class_GGSCountryController = require("gge-module:class_GGSCountryController");
var __dep_exact_9036b0ddd67c3c6e = require("gge-module:exact_9036b0ddd67c3c6e");
var __dep_exact_ba3768902da9162c = require("gge-module:exact_ba3768902da9162c");
var __dep_class_FontConfigVO = require("gge-module:class_FontConfigVO");
var __dep_class_ChangeSignal = require("gge-module:class_ChangeSignal");
var __dep_class_ClickSignal = require("gge-module:class_ClickSignal");
var __dep_class_FocusInSignal = require("gge-module:class_FocusInSignal");
var __dep_class_FocusOutSignal = require("gge-module:class_FocusOutSignal");
var __dep_class_HTMLLinkClickSignal = require("gge-module:class_HTMLLinkClickSignal");
var __dep_class_KeyDownSignal = require("gge-module:class_KeyDownSignal");
var __dep_class_KeyUpSignal = require("gge-module:class_KeyUpSignal");
var __dep_class_MouseOutSignal = require("gge-module:class_MouseOutSignal");
var __dep_class_MouseOverSignal = require("gge-module:class_MouseOverSignal");
var __dep_class_RemovedFromStageSignal = require("gge-module:class_RemovedFromStageSignal");
var __dep_class_ScrollSignal = require("gge-module:class_ScrollSignal");
var __dep_class_TextInputSignal = require("gge-module:class_TextInputSignal");
var __dep_class_GGSTextFieldModel = require("gge-module:class_GGSTextFieldModel");
var __dep_export_LoggerConfigurator = require("gge-module:export_LoggerConfigurator");
var __dep_class_GGSTextFieldDefaultStrategy = require("gge-module:class_GGSTextFieldDefaultStrategy");
var __dep_export_CSSMouseCursor = require("gge-module:export_CSSMouseCursor");
var __s0local0 = __dep_export_LoggerConfigurator.getLogger("GoodgameTextField");
var __s0local1 = function () {
  function GoodgameTextField(__s3param0) {
    this._availableStrategies = [];
    this.isFontConfigInitiallyApplied = false;
    this._originalTextField = __s3param0;
    this._originalFontConfig = new __dep_class_FontConfigVO.FontConfigVO();
    this._originalFontConfig.initalize(this._originalTextField);
    this._model = new __dep_class_GGSTextFieldModel.GGSTextFieldModel(this);
    this.useDefaultStrategy();
  }
  GoodgameTextField.prototype.useTLFStrategy = function () {
    __s0local0.debug("useTLFStrategy not implemented");
  };
  GoodgameTextField.prototype.useDefaultStrategy = function () {
    __s0local0.debug("useDefaultStrategy ");
    this._availableStrategies[0] ||= new __dep_class_GGSTextFieldDefaultStrategy.GGSTextFieldDefaultStrategy(this);
    this.activateStrategy(this._availableStrategies[0]);
  };
  GoodgameTextField.prototype.activateStrategy = function (__s9param0) {
    if (__s9param0 != this._textStrategy) {
      if (this._textStrategy) {
        this._textStrategy.deactivate();
      }
      this._textStrategy = __s9param0;
      this._textStrategy.activate();
      this.updateStrategyListeners();
    }
  };
  GoodgameTextField.prototype.updateStrategyListeners = function () {};
  GoodgameTextField.prototype.onSignalRemoved = function (__s15param0) {
    if (this._textStrategy && this._textStrategy.hasEventListenerForEventType(__s15param0)) {
      this._model.removeRegisteredEventListener(__s15param0);
      this._textStrategy.removeEventListenerForEventType(__s15param0);
    }
  };
  GoodgameTextField.prototype.onSignalAdded = function (__s18param0) {
    if (!this._textStrategy.hasEventListenerForEventType(__s18param0)) {
      this._model.addRegisteredEventListener(__s18param0);
      this._textStrategy.addEventListenerForEventType(__s18param0);
    }
  };
  Object.defineProperty(GoodgameTextField.prototype, "click", {
    get: function () {
      if (!this._clickSignal) {
        this._clickSignal = new __dep_class_ClickSignal.ClickSignal();
        this._clickSignal.removed = this.bindFunction(this.onSignalRemoved);
        this._clickSignal.added = this.bindFunction(this.onSignalAdded);
      }
      return this._clickSignal;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextField.prototype, "keyDown", {
    get: function () {
      if (!this._keyDownSignal) {
        this._keyDownSignal = new __dep_class_KeyDownSignal.KeyDownSignal();
        this._keyDownSignal.removed = this.bindFunction(this.onSignalRemoved);
        this._keyDownSignal.added = this.bindFunction(this.onSignalAdded);
      }
      return this._keyDownSignal;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextField.prototype, "keyUp", {
    get: function () {
      if (!this._keyUpSignal) {
        this._keyUpSignal = new __dep_class_KeyUpSignal.KeyUpSignal();
        this._keyUpSignal.removed = this.bindFunction(this.onSignalRemoved);
        this._keyUpSignal.added = this.bindFunction(this.onSignalAdded);
      }
      return this._keyUpSignal;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextField.prototype, "mouseOver", {
    get: function () {
      if (!this._mouseOverSignal) {
        this._mouseOverSignal = new __dep_class_MouseOverSignal.MouseOverSignal();
        this._mouseOverSignal.removed = this.bindFunction(this.onSignalRemoved);
        this._mouseOverSignal.added = this.bindFunction(this.onSignalAdded);
      }
      return this._mouseOverSignal;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextField.prototype, "mouseOut", {
    get: function () {
      if (!this._mouseOutSignal) {
        this._mouseOutSignal = new __dep_class_MouseOutSignal.MouseOutSignal();
        this._mouseOutSignal.removed = this.bindFunction(this.onSignalRemoved);
        this._mouseOutSignal.added = this.bindFunction(this.onSignalAdded);
      }
      return this._mouseOutSignal;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextField.prototype, "focusIn", {
    get: function () {
      if (!this._focusInSignal) {
        this._focusInSignal = new __dep_class_FocusInSignal.FocusInSignal();
        this._focusInSignal.removed = this.bindFunction(this.onSignalRemoved);
        this._focusInSignal.added = this.bindFunction(this.onSignalAdded);
      }
      return this._focusInSignal;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextField.prototype, "focusOut", {
    get: function () {
      if (!this._focusOutSignal) {
        this._focusOutSignal = new __dep_class_FocusOutSignal.FocusOutSignal();
        this._focusOutSignal.removed = this.bindFunction(this.onSignalRemoved);
        this._focusOutSignal.added = this.bindFunction(this.onSignalAdded);
      }
      return this._focusOutSignal;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextField.prototype, "htmlLinkClick", {
    get: function () {
      if (!this._htmlLinkClickSignal) {
        this._htmlLinkClickSignal = new __dep_class_HTMLLinkClickSignal.HTMLLinkClickSignal();
        this._htmlLinkClickSignal.removed = this.bindFunction(this.onSignalRemoved);
        this._htmlLinkClickSignal.added = this.bindFunction(this.onSignalAdded);
      }
      return this._htmlLinkClickSignal;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextField.prototype, "textInput", {
    get: function () {
      if (!this._textInputSignal) {
        this._textInputSignal = new __dep_class_TextInputSignal.TextInputSignal();
        this._textInputSignal.removed = this.bindFunction(this.onSignalRemoved);
        this._textInputSignal.added = this.bindFunction(this.onSignalAdded);
      }
      return this._textInputSignal;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextField.prototype, "change", {
    get: function () {
      if (!this._changeSignal) {
        this._changeSignal = new __dep_class_ChangeSignal.ChangeSignal();
        this._changeSignal.removed = this.bindFunction(this.onSignalRemoved);
        this._changeSignal.added = this.bindFunction(this.onSignalAdded);
      }
      return this._changeSignal;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextField.prototype, "removedFromStage", {
    get: function () {
      if (!this._removedFromStageSignal) {
        this._removedFromStageSignal = new __dep_class_RemovedFromStageSignal.RemovedFromStageSignal();
        this._removedFromStageSignal.removed = this.bindFunction(this.onSignalRemoved);
        this._removedFromStageSignal.added = this.bindFunction(this.onSignalAdded);
      }
      return this._removedFromStageSignal;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextField.prototype, "scroll", {
    get: function () {
      if (!this._scrollSignal) {
        this._scrollSignal = new __dep_class_ScrollSignal.ScrollSignal();
        this._scrollSignal.removed = this.bindFunction(this.onSignalRemoved);
        this._scrollSignal.added = this.bindFunction(this.onSignalAdded);
      }
      return this._scrollSignal;
    },
    enumerable: true,
    configurable: true
  });
  GoodgameTextField.prototype.displayText = function () {
    if (this._textContentVO instanceof __dep_opaque_c83528567256175cfb346d7d.HTMLTextVO) {
      this._textStrategy.displayText(this._model.text, this._textContentVO);
    } else {
      var __s57local0 = this._model.text;
      if (!isNaN(this._model.maxChars) && this._model.maxChars > 0) {
        __s57local0 = this._model.text.slice(0, this._model.maxChars);
      }
      if (__s57local0 === null) {
        __s57local0 = "";
        this.printOutDebugInfos();
      }
      this._textStrategy.displayText(__s57local0);
    }
  };
  GoodgameTextField.prototype.printOutDebugInfos = function () {
    if (this._originalTextField) {
      var __s63local0 = this._originalTextField.name;
      var __s63local1 = (this._originalTextField.parent ? this._originalTextField.parent.name + "." : "") + __s63local0;
      var __s63local2 = this.textContentVO ? ", textContendVO: " + this.textContentVO.toString() : "";
      __dep_exact_ba3768902da9162c.warn("Text is null. TextField:" + __s63local1 + __s63local2);
    }
  };
  GoodgameTextField.prototype.resolveTextContent = function (__s66param0) {
    this._model.text = __s66param0.compose();
  };
  GoodgameTextField.prototype.applyFontConfiguration = function (__s68param0) {
    this._textStrategy.applyFontConfiguration(__s68param0);
  };
  Object.defineProperty(GoodgameTextField.prototype, "color", {
    get: function () {
      return this._model.color;
    },
    set: function (__s72param0) {
      this._model.color = __dep_export_CSSMouseCursor.ColorTransform.colorNumToString(__s72param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextField.prototype, "originalTextField", {
    get: function () {
      return this._originalTextField;
    },
    enumerable: true,
    configurable: true
  });
  GoodgameTextField.prototype.unregister = function () {
    if (this.currentFontConfig == this._loadedFontConfig) {
      this.applyFontConfiguration(this._originalFontConfig);
      this._originalTextField.y = this._originalFontConfig.yPosOriginal;
    }
    if (this._clickSignal) {
      this._clickSignal.removeAll();
      this._clickSignal = null;
    }
    if (this._focusInSignal) {
      this._focusInSignal.removeAll();
      this._focusInSignal = null;
    }
    if (this._focusOutSignal) {
      this._focusOutSignal.removeAll();
      this._focusOutSignal = null;
    }
    if (this._keyDownSignal) {
      this._keyDownSignal.removeAll();
      this._keyDownSignal = null;
    }
    if (this._mouseOverSignal) {
      this._mouseOverSignal.removeAll();
      this._mouseOverSignal = null;
    }
    if (this._mouseOutSignal) {
      this._mouseOutSignal.removeAll();
      this._mouseOutSignal = null;
    }
    if (this._htmlLinkClickSignal) {
      this._htmlLinkClickSignal.removeAll();
      this._htmlLinkClickSignal = null;
    }
    if (this._textInputSignal) {
      this._textInputSignal.removeAll();
      this._textInputSignal = null;
    }
    if (this._scrollSignal) {
      this._scrollSignal.removeAll();
      this._scrollSignal = null;
    }
    for (var __s76local0 = 0, __s76local1 = this._availableStrategies; __s76local0 < __s76local1.length; __s76local0++) {
      var __s76local2 = __s76local1[__s76local0];
      __s76local2.dispose();
      __s76local2 = null;
    }
    this._availableStrategies = null;
    this._textStrategy = null;
    this._originalTextField.visible = this._originalFontConfig.visible;
    this._originalTextField = null;
    this._originalFontConfig.dispose();
    this._originalFontConfig = null;
    if (this._loadedFontConfig) {
      this._loadedFontConfig.dispose();
      this._loadedFontConfig = null;
    }
    if (this._textContentVO) {
      this._textContentVO.dispose();
      this._textContentVO = null;
    }
    this._model.dispose();
    this._model = null;
  };
  Object.defineProperty(GoodgameTextField.prototype, "originalFontConfig", {
    get: function () {
      return this._originalFontConfig;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextField.prototype, "loadedFontConfig", {
    get: function () {
      return this._loadedFontConfig;
    },
    set: function (__s96param0) {
      this._loadedFontConfig = __s96param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextField.prototype, "autoSize", {
    set: function (__s98param0) {
      this._model.autoSize = __s98param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextField.prototype, "uid", {
    get: function () {
      return this._model.uid;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextField.prototype, "x", {
    get: function () {
      return this._model.x;
    },
    set: function (__s104param0) {
      this._model.x = __s104param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextField.prototype, "y", {
    get: function () {
      return this._model.y;
    },
    set: function (__s108param0) {
      this._model.y = __s108param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextField.prototype, "width", {
    get: function () {
      return this._model.width;
    },
    set: function (__s112param0) {
      this._model.width = __s112param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextField.prototype, "height", {
    get: function () {
      return this._model.height;
    },
    set: function (__s116param0) {
      this._model.height = __s116param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextField.prototype, "text", {
    get: function () {
      return this._model.text;
    },
    set: function (__s120param0) {
      this._model.text = __s120param0;
      this.displayText();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextField.prototype, "currentFontConfig", {
    get: function () {
      return this._textStrategy.currentFontConfig;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextField.prototype, "data", {
    get: function () {
      return this._model.data;
    },
    set: function (__s126param0) {
      this._model.data = __s126param0;
    },
    enumerable: true,
    configurable: true
  });
  GoodgameTextField.prototype.setFocus = function () {
    this._textStrategy.setFocus();
  };
  Object.defineProperty(GoodgameTextField.prototype, "tabIndex", {
    get: function () {
      return this._model.tabIndex;
    },
    set: function (__s132param0) {
      this._model.tabIndex = __s132param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextField.prototype, "tabEnabled", {
    get: function () {
      return this._model.tabEnabled;
    },
    set: function (__s136param0) {
      this._model.tabEnabled = __s136param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextField.prototype, "maxChars", {
    set: function (__s138param0) {
      this._model.maxChars = __s138param0;
      this.displayText();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextField.prototype, "textContentVO", {
    get: function () {
      if (this._textContentVO) {
        this._textContentVO.propertyChangedSignal.add(this.bindFunction(this.onTextContentVOChanged));
        return this._textContentVO;
      } else {
        if (this._originalTextField) {
          __dep_exact_9036b0ddd67c3c6e.debug(this._originalTextField.name);
        } else {
          __dep_exact_9036b0ddd67c3c6e.debug(" get textContentVO: VO is null. (_originalTextField is null)");
        }
        return null;
      }
    },
    set: function (__s146param0) {
      this._textContentVO = __s146param0;
      if (this._textContentVO.triggerUpdate) {
        this.displayLocalizedText(__dep_class_GGSCountryController.GGSCountryController.instance.currentCountry.ggsLanguageCode, this._textContentVO);
      }
    },
    enumerable: true,
    configurable: true
  });
  GoodgameTextField.prototype.onTextContentVOChanged = function () {
    if (this._textContentVO.triggerUpdate) {
      this.displayLocalizedText(__dep_class_GGSCountryController.GGSCountryController.instance.currentCountry.ggsLanguageCode, this._textContentVO);
    }
  };
  GoodgameTextField.prototype.displayLocalizedText = function (__s152param0, __s152param1 = null) {
    if (__s152param1) {
      this._textContentVO = __s152param1;
    }
    if (this._textContentVO.triggerUpdate) {
      this.resolveTextContent(__s152param1);
      var __s152local0;
      var __s152local1 = this._originalFontConfig;
      if (__s152local1 !== this.textStrategy.currentFontConfig || !this.isFontConfigInitiallyApplied || !!this.autoFitToBounds) {
        __s152local0 = true;
        this.isFontConfigInitiallyApplied = true;
        if (__s152param1 instanceof __dep_opaque_c83528567256175cfb346d7d.HTMLTextVO) {
          __s152param1.appendText = false;
        }
        this.chooseTextRenderingStrategy(__s152param0, __s152local1);
        this.applyFontConfiguration(__s152local1);
      }
      this.displayText();
      this.updateProperties(__s152local0);
    }
  };
  GoodgameTextField.prototype.updateProperties = function (__s158param0 = false) {
    if (!this._model.initialized || !!__s158param0) {
      this._model.updateAllProperties(true);
      this._model.initialized = true;
    }
  };
  GoodgameTextField.prototype.chooseTextRenderingStrategy = function (__s161param0, __s161param1) {
    this.useDefaultStrategy();
  };
  Object.defineProperty(GoodgameTextField.prototype, "multiline", {
    get: function () {
      return this._model.multiline;
    },
    set: function (__s165param0) {
      this._model.multiline = __s165param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextField.prototype, "restrict", {
    get: function () {
      return this._model.restrict;
    },
    set: function (__s169param0) {
      this._model.restrict = __s169param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextField.prototype, "wordwrap", {
    get: function () {
      return this._model.wordwrap;
    },
    set: function (__s173param0) {
      this._model.wordwrap = __s173param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextField.prototype, "textWidth", {
    get: function () {
      return this._textStrategy.textWidth;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextField.prototype, "textHeight", {
    get: function () {
      return this._textStrategy.textHeight;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextField.prototype, "caretIndex", {
    get: function () {
      return this._textStrategy.caretIndex;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextField.prototype, "mouseEnabled", {
    get: function () {
      return this._model.mouseEnabled;
    },
    set: function (__s183param0) {
      this._model.mouseEnabled = __s183param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextField.prototype, "verticalAlign", {
    set: function (__s185param0) {
      this._model.verticalAlign = __s185param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextField.prototype, "textAlign", {
    set: function (__s187param0) {
      this._model.textAlign = __s187param0;
    },
    enumerable: true,
    configurable: true
  });
  GoodgameTextField.prototype.setSelection = function (__s189param0, __s189param1) {
    this._textStrategy.setSelection(__s189param0, __s189param1);
  };
  Object.defineProperty(GoodgameTextField.prototype, "selectable", {
    get: function () {
      return this._model.selectable;
    },
    set: function (__s193param0) {
      this._model.selectable = __s193param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextField.prototype, "type", {
    get: function () {
      return this._model.type;
    },
    set: function (__s197param0) {
      this._model.type = __s197param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextField.prototype, "size", {
    get: function () {
      return this._model.size;
    },
    set: function (__s201param0) {
      this._model.size = __s201param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextField.prototype, "model", {
    get: function () {
      return this._model;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextField.prototype, "visible", {
    get: function () {
      return this._model.visible;
    },
    set: function (__s207param0) {
      this._model.visible = __s207param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextField.prototype, "scaleX", {
    get: function () {
      return this._model.scaleX;
    },
    set: function (__s211param0) {
      this._model.scaleX = __s211param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextField.prototype, "scaleY", {
    get: function () {
      return this._model.scaleY;
    },
    set: function (__s215param0) {
      this._model.scaleY = __s215param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextField.prototype, "rotation", {
    get: function () {
      return this._model.rotation;
    },
    set: function (__s219param0) {
      this._model.rotation = __s219param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextField.prototype, "background", {
    get: function () {
      return this._model.background;
    },
    set: function (__s223param0) {
      this._model.background = __s223param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextField.prototype, "backgroundColor", {
    get: function () {
      return this._model.backgroundColor;
    },
    set: function (__s227param0) {
      this._model.backgroundColor = __s227param0;
    },
    enumerable: true,
    configurable: true
  });
  GoodgameTextField.prototype.fitTextSizeToBounds = function (__s229param0 = null) {
    this._textStrategy.fitTextSizeToBounds(__s229param0);
  };
  Object.defineProperty(GoodgameTextField.prototype, "numLines", {
    get: function () {
      return this._textStrategy.numLines;
    },
    enumerable: true,
    configurable: true
  });
  GoodgameTextField.prototype.clearText = function () {
    this.text = "";
  };
  GoodgameTextField.prototype.restoreTextContent = function () {
    this.displayText();
  };
  Object.defineProperty(GoodgameTextField.prototype, "indent", {
    set: function (__s237param0) {
      this._model.indent = __s237param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextField.prototype, "textStrategy", {
    get: function () {
      return this._textStrategy;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextField.prototype, "autoFitToBounds", {
    get: function () {
      return this._model.autoFitToBounds;
    },
    set: function (__s243param0) {
      this._model.autoFitToBounds = __s243param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextField.prototype, "scrollV", {
    get: function () {
      return this._model.scrollV;
    },
    set: function (__s247param0) {
      this._model.scrollV = __s247param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextField.prototype, "maxScrollV", {
    get: function () {
      return this.textStrategy.maxScrollV;
    },
    enumerable: true,
    configurable: true
  });
  GoodgameTextField.NAME = "GoodgameTextField";
  return GoodgameTextField;
}();
exports.GoodgameTextField = __s0local1;
