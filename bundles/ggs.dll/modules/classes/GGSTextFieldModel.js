Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_LoggerConfigurator = require("gge-module:export_LoggerConfigurator");
var __dep_export_AssetLoadingFlowType = require("gge-module:export_AssetLoadingFlowType");
__dep_export_LoggerConfigurator.getLogger(__dep_export_AssetLoadingFlowType.TEXT_FIELDS_LOGGER + ".GGSTextFieldModel");
var __s0local0 = function () {
  function GGSTextFieldModel(__s3param0) {
    this._selectable = false;
    this._uid = Math.round(Math.random() * 10000);
    this._registeredEventListeners = [];
    this._internalTextField = __s3param0;
    this._textField = __s3param0.originalTextField;
    this._textAlignOriginal = __s3param0.originalTextField.getTextFormat().align;
  }
  GGSTextFieldModel.prototype.dispose = function () {
    this._internalTextField = null;
    this._data = null;
    this._registeredEventListeners = null;
  };
  GGSTextFieldModel.prototype.updateAllProperties = function (__s7param0 = false) {
    if (__s7param0) {
      this.updateSelectable();
      this.updateAutoFitToBounds();
    } else {
      this.updateAutoFitToBounds();
    }
  };
  GGSTextFieldModel.prototype.toString = function () {
    return "text: " + this.text + ", textDefault: " + this._textDefault + ", visible: " + this.visible + ", multiline: " + this.multiline + ", wordWrap: " + this.wordwrap;
  };
  Object.defineProperty(GGSTextFieldModel.prototype, "text", {
    get: function () {
      return this._textField.text;
    },
    set: function (__s15param0) {
      this._textField.text = __s15param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GGSTextFieldModel.prototype, "textDefault", {
    get: function () {
      return this._textDefault;
    },
    set: function (__s19param0) {
      this._textDefault = __s19param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GGSTextFieldModel.prototype, "x", {
    get: function () {
      return this._textField.x;
    },
    set: function (__s23param0) {
      this._internalTextField.textStrategy.updateX(__s23param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GGSTextFieldModel.prototype, "y", {
    get: function () {
      return this._textField.y;
    },
    set: function (__s27param0) {
      this._internalTextField.textStrategy.updateY(__s27param0 + this._internalTextField.currentFontConfig.yOffset);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GGSTextFieldModel.prototype, "width", {
    get: function () {
      return this._textField.width;
    },
    set: function (__s31param0) {
      this._internalTextField.textStrategy.updateWidth(__s31param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GGSTextFieldModel.prototype, "height", {
    get: function () {
      return this._textField.height;
    },
    set: function (__s35param0) {
      this._internalTextField.textStrategy.updateHeight(__s35param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GGSTextFieldModel.prototype, "scaleX", {
    get: function () {
      return this._textField.scaleX;
    },
    set: function (__s39param0) {
      this._internalTextField.textStrategy.updateScaleX(__s39param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GGSTextFieldModel.prototype, "scaleY", {
    get: function () {
      return this._textField.scaleY;
    },
    set: function (__s43param0) {
      this._internalTextField.textStrategy.updateScaleY(__s43param0);
    },
    enumerable: true,
    configurable: true
  });
  GGSTextFieldModel.prototype.updateScrollV = function () {};
  Object.defineProperty(GGSTextFieldModel.prototype, "scrollV", {
    get: function () {
      return this._textField.scrollV;
    },
    set: function (__s49param0) {
      this._internalTextField.textStrategy.updateScrollV(__s49param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GGSTextFieldModel.prototype, "rotation", {
    get: function () {
      return this._textField.rotation;
    },
    set: function (__s53param0) {
      this._internalTextField.textStrategy.updateRotation(__s53param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GGSTextFieldModel.prototype, "background", {
    get: function () {
      return this._textField.background;
    },
    set: function (__s57param0) {
      this._internalTextField.textStrategy.updateBackground(__s57param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GGSTextFieldModel.prototype, "backgroundColor", {
    get: function () {
      return this._textField.backgroundColor;
    },
    set: function (__s61param0) {
      this._internalTextField.textStrategy.updateBackgroundColor(__s61param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GGSTextFieldModel.prototype, "indent", {
    get: function () {
      return Number(this._textField.getTextFormat().indent);
    },
    set: function (__s65param0) {
      this._internalTextField.textStrategy.updateIndent(__s65param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GGSTextFieldModel.prototype, "visible", {
    get: function () {
      return this._textField.visible;
    },
    set: function (__s69param0) {
      this._internalTextField.textStrategy.updateVisible(__s69param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GGSTextFieldModel.prototype, "multiline", {
    get: function () {
      return this._textField.multiline;
    },
    set: function (__s73param0) {
      this._internalTextField.textStrategy.updateMultiline(__s73param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GGSTextFieldModel.prototype, "restrict", {
    get: function () {
      return this._textField.restrict;
    },
    set: function (__s77param0) {
      this._internalTextField.textStrategy.updateRestrict(__s77param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GGSTextFieldModel.prototype, "wordwrap", {
    get: function () {
      return this._textField.wordWrap;
    },
    set: function (__s81param0) {
      this._internalTextField.textStrategy.updateWordwrap(__s81param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GGSTextFieldModel.prototype, "displayAsPassword", {
    get: function () {
      return this._textField.displayAsPassword;
    },
    set: function (__s85param0) {
      this._internalTextField.textStrategy.updateDisplayAsPassword(__s85param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GGSTextFieldModel.prototype, "tabIndex", {
    get: function () {
      return this._textField.tabIndex;
    },
    set: function (__s89param0) {
      this._internalTextField.textStrategy.updateTabIndex(__s89param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GGSTextFieldModel.prototype, "tabEnabled", {
    get: function () {
      return this._textField.tabEnabled;
    },
    set: function (__s93param0) {
      this._internalTextField.textStrategy.updateTabEnabled(__s93param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GGSTextFieldModel.prototype, "maxChars", {
    get: function () {
      return this._textField.maxChars;
    },
    set: function (__s97param0) {
      this._internalTextField.textStrategy.updateMaxChars(__s97param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GGSTextFieldModel.prototype, "selectableDefault", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GGSTextFieldModel.prototype, "selectable", {
    get: function () {
      return this._selectable;
    },
    set: function (__s103param0) {
      this._selectable = __s103param0;
      this.updateSelectable();
    },
    enumerable: true,
    configurable: true
  });
  GGSTextFieldModel.prototype.updateSelectable = function () {
    this._internalTextField.textStrategy.updateSelectable(this._selectable);
  };
  Object.defineProperty(GGSTextFieldModel.prototype, "type", {
    get: function () {
      return this._textField.type;
    },
    set: function (__s109param0) {
      if (!this.initialized || this.type != __s109param0) {
        this._internalTextField.textStrategy.updateType(__s109param0);
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GGSTextFieldModel.prototype, "mouseEnabled", {
    get: function () {
      return this._textField.mouseEnabled;
    },
    set: function (__s114param0) {
      this._internalTextField.textStrategy.updateMouseEnabled(__s114param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GGSTextFieldModel.prototype, "color", {
    get: function () {
      return this._textField.textColor;
    },
    set: function (__s118param0) {
      if (this._internalTextField.currentFontConfig.debug) {
        __s118param0 = this._internalTextField.currentFontConfig.debugColor;
      }
      this._internalTextField.textStrategy.updateColor(__s118param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GGSTextFieldModel.prototype, "size", {
    get: function () {
      return this._textField.getTextFormat().size;
    },
    set: function (__s123param0) {
      this._internalTextField.textStrategy.updateSize(__s123param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GGSTextFieldModel.prototype, "verticalAlign", {
    get: function () {
      return this._textField.verticalAlign;
    },
    set: function (__s127param0) {
      this._internalTextField.textStrategy.updateVerticalAlign(__s127param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GGSTextFieldModel.prototype, "textAlign", {
    get: function () {
      return this._textField.getTextFormat().align;
    },
    set: function (__s131param0) {
      this._internalTextField.textStrategy.updateTextAlign(__s131param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GGSTextFieldModel.prototype, "textAlignOriginal", {
    get: function () {
      return this._textAlignOriginal;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GGSTextFieldModel.prototype, "data", {
    get: function () {
      this._data ||= {};
      return this._data;
    },
    set: function (__s137param0) {
      this._data = __s137param0;
    },
    enumerable: true,
    configurable: true
  });
  GGSTextFieldModel.prototype.addRegisteredEventListener = function (__s139param0) {
    this._registeredEventListeners.push(__s139param0);
  };
  GGSTextFieldModel.prototype.removeRegisteredEventListener = function (__s141param0) {
    var __s141local0 = this._registeredEventListeners.indexOf(__s141param0);
    if (__s141local0 > -1) {
      this._registeredEventListeners.splice(__s141local0, 1);
    }
  };
  Object.defineProperty(GGSTextFieldModel.prototype, "registeredEventListeners", {
    get: function () {
      return this._registeredEventListeners;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GGSTextFieldModel.prototype, "autoSize", {
    set: function (__s146param0) {
      this._internalTextField.textStrategy.autoSize = __s146param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GGSTextFieldModel.prototype, "uid", {
    get: function () {
      return this._uid;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GGSTextFieldModel.prototype, "autoFitToBounds", {
    get: function () {
      return this._autoFitToBounds;
    },
    set: function (__s152param0) {
      this._autoFitToBounds = __s152param0;
      this.updateAutoFitToBounds();
    },
    enumerable: true,
    configurable: true
  });
  GGSTextFieldModel.prototype.updateAutoFitToBounds = function () {
    this._internalTextField.textStrategy.updateAutoFitToBounds(this._autoFitToBounds);
  };
  return GGSTextFieldModel;
}();
exports.GGSTextFieldModel = __s0local0;
